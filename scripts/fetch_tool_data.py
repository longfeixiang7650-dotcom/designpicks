#!/usr/bin/env python3
"""设计工具客观数据采集 - 只抓稳定可用的数据源"""
import urllib.request, json, re, time, os
from datetime import datetime, timedelta

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
OUTPUT_FILE = os.path.join(SCRIPT_DIR, '..', 'reference', 'tool-external-data.json')

GH_TOKEN = None
env_path = os.path.expanduser('~/.hermes/api_keys.env')
if os.path.exists(env_path):
    with open(env_path) as f:
        for line in f:
            if line.startswith('GITHUB_TOKEN='):
                GH_TOKEN = line.strip().split('=', 1)[1]
                break

UA = 'HermesBot/1.0'

# Tool Wikipedia title & GitHub repo mapping
WIKI_TITLES = {
    "Canva":"Canva","Adobe Photoshop":"Adobe Photoshop","Adobe Illustrator":"Adobe Illustrator",
    "Adobe InDesign":"Adobe InDesign","CorelDRAW":"CorelDRAW","Affinity Designer":"Affinity Designer",
    "Affinity Photo":"Affinity Photo","Affinity Publisher":"Affinity Publisher",
    "Pixelmator Pro":"Pixelmator Pro","Procreate":"Procreate (software)",
    "Figma":"Figma","Sketch":"Sketch (design tool)","Adobe XD":"Adobe XD",
    "Framer":"Framer (software)","Lunacy":"Lunacy (graphics software)","Penpot":"Penpot",
    "Balsamiq":"Balsamiq","Axure RP":"Axure RP","Marvel":"Marvel (design software)",
    "Proto.io":"Proto.io","InVision":"InVision (design software)","Principle":"Principle (software)",
    "Origami Studio":"Origami Studio","Flinto":"Flinto","ProtoPie":"ProtoPie",
    "Mockplus":"Mockplus","UXPin":"UXPin","Justinmind":"Justinmind","Fluid UI":"Fluid UI",
    "HotGloo":"HotGloo","Blender":"Blender (software)","Autodesk Maya":"Autodesk Maya",
    "Cinema 4D":"Cinema 4D","SketchUp":"SketchUp","Unity":"Unity (game engine)",
    "Unreal Engine":"Unreal Engine","Spline":"Spline (software)","Vectorworks":"Vectorworks",
    "Rhino 3D":"Rhino 3D","Adobe After Effects":"Adobe After Effects",
    "Envato Elements":"Envato Elements","Freepik":"Freepik","Flaticon":"Flaticon",
    "Unsplash":"Unsplash","Pexels":"Pexels","Shutterstock":"Shutterstock",
    "Depositphotos":"Depositphotos","Storyblocks":"Storyblocks","Vecteezy":"Vecteezy",
    "Creative Market":"Creative Market",
}

GH_REPOS = {
    "Penpot":"penpot/penpot","Origami Studio":"facebookarchive/origami",
    "Blender":"blender/blender","Unity":"Unity-Technologies/unity",
    "Unreal Engine":"EpicGames/UnrealEngine",
}

print("="*60)
print(f"采集工具数据 | {datetime.now().strftime('%Y-%m-%d %H:%M')}")
print(f"GitHub Token: {'✅ 有' if GH_TOKEN else '❌ 无'}")
print("="*60)

results = {}

# Wikipedia: foundation year via infobox (faster endpoint)
print("\n📖 Wikipedia 成立年份 + 页面长度...")
for i, (name, wiki_title) in enumerate(WIKI_TITLES.items()):
    entry = {"name": name}
    
    url = f"https://en.wikipedia.org/w/api.php?action=query&prop=extracts|info&exintro=true&explaintext=true&inprop=length&titles={urllib.parse.quote(wiki_title)}&format=json"
    req = urllib.request.Request(url, headers={'User-Agent': UA})
    try:
        r = urllib.request.urlopen(req, timeout=10)
        for pid, page in json.loads(r.read()).get('query',{}).get('pages',{}).items():
            if pid == '-1': break
            entry["page_length"] = page.get('length', 0)
            extract = page.get('extract','')
            for pat in [r'(?:founded|established|released|launched|created)\s*(?:in\s+|:?\s*)(\d{4})',
                        r'(?:first|initial)\s+(?:released|version)\s*(?:in\s+|:?\s*)(\d{4})',
                        r'(\d{4})\s*,\s*(?:San Francisco|California)']:
                m = re.search(pat, extract, re.I)
                if m: entry["founded_year"] = int(m.group(1)); break
    except: pass
    
    results[name] = entry
    y = entry.get("founded_year","?")
    l = entry.get("page_length",0)
    print(f"  {i+1:2d}/{len(WIKI_TITLES)} {name:25s} → year={y}, len={l}")
    time.sleep(0.3)

# Monthly views (Wikimedia API)
print("\n📊 Wikipedia 月度浏览量...")
for i, (name, wiki_title) in enumerate(WIKI_TITLES.items()):
    end = datetime.now(); start = end - timedelta(days=30)
    url = f"https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/{urllib.parse.quote(wiki_title.replace(' ','_'))}/daily/{start.strftime('%Y%m%d')}/{end.strftime('%Y%m%d')}"
    req = urllib.request.Request(url, headers={'User-Agent': UA})
    try:
        r = urllib.request.urlopen(req, timeout=10)
        items = json.loads(r.read()).get('items',[])
        results[name]["monthly_views"] = sum(it.get('views',0) for it in items)
    except: pass
    v = results[name].get("monthly_views",0)
    print(f"  {i+1:2d}/{len(WIKI_TITLES)} {name:25s} → {v:>8,} views/mo" if v else f"  {i+1:2d}/{len(WIKI_TITLES)} {name:25s} → 无数据")
    time.sleep(0.2)

# GitHub stars
if GH_TOKEN:
    print("\n⭐ GitHub Stars...")
    for i, (name, repo) in enumerate(GH_REPOS.items()):
        url = f"https://api.github.com/repos/{repo}"
        req = urllib.request.Request(url, headers={'User-Agent':UA,'Authorization':f'token {GH_TOKEN}'})
        try:
            r = urllib.request.urlopen(req, timeout=10)
            d = json.loads(r.read())
            results[name]["github_stars"] = d.get('stargazers_count')
            results[name]["github_updated"] = (d.get('updated_at') or '')[:10] if d.get('updated_at') else None
        except: pass
        s = results[name].get("github_stars","?")
        print(f"  {i+1}/{len(GH_REPOS)} {name:20s} ({repo}) → {s:,} stars" if isinstance(s,int) else f"  {i+1}/{len(GH_REPOS)} {name:20s} ({repo}) → {s}")
        time.sleep(0.3)

# Save
os.makedirs(os.path.dirname(OUTPUT_FILE), exist_ok=True)
with open(OUTPUT_FILE,'w') as f:
    json.dump(results,f,indent=2,ensure_ascii=False)

yf = sum(1 for v in results.values() if v.get('founded_year'))
vf = sum(1 for v in results.values() if v.get('monthly_views',0)>0)
gf = sum(1 for v in results.values() if v.get('github_stars'))

print(f"\n{'='*60}")
print(f"✅ 保存: {OUTPUT_FILE}")
print(f"   成立年份: {yf}/{len(WIKI_TITLES)} | 月度浏览量: {vf}/{len(WIKI_TITLES)} | GitHub Stars: {gf}/{len(GH_REPOS)}")
print(f"{'='*60}")
