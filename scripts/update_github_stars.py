#!/usr/bin/env python3
"""更新GitHub Stars - 可以cron定时执行"""
import urllib.request, json, os, time
from datetime import datetime

env_path = os.path.expanduser('~/.hermes/api_keys.env')
GH_TOKEN = None
if os.path.exists(env_path):
    with open(env_path) as f:
        for line in f:
            if line.startswith('GITHUB_TOKEN='):
                GH_TOKEN = line.strip().split('=', 1)[1]
                break

REPOS = {
    "Framer": "framer/framer",
    "Lunacy": "icons8/lunacy",
    "Penpot": "penpot/penpot",
    "Origami Studio": "facebookarchive/origami",
    "Blender": "blender/blender",
    "Unity": "Unity-Technologies/unity",
    "Unreal Engine": "EpicGames/UnrealEngine",
    "Spline": "splinetool/spline",
    "Unsplash": "unsplash/unsplash",
}

results = {}
for name, repo in REPOS.items():
    url = f"https://api.github.com/repos/{repo}"
    req = urllib.request.Request(url, headers={
        'User-Agent':'HermesBot/1.0','Authorization':f'token {GH_TOKEN}'})
    try:
        r = urllib.request.urlopen(req, timeout=10)
        d = json.loads(r.read())
        results[name] = {
            "stars": d.get('stargazers_count'),
            "updated": (d.get('updated_at') or '')[:10],
        }
        print(f"  {name:20s} → {results[name]['stars']:>8,} stars (updated: {results[name]['updated']})")
    except Exception as e:
        print(f"  {name:20s} → Error: {str(e)[:40]}")
    time.sleep(0.5)

# Save with timestamp
out = {
    "fetched_at": datetime.now().strftime('%Y-%m-%d %H:%M'),
    "data": results,
}
path = os.path.join(os.path.dirname(__file__), '..', 'reference', 'github-stars.json')
os.makedirs(os.path.dirname(path), exist_ok=True)
with open(path, 'w') as f:
    json.dump(out, f, indent=2)

print(f"\n✅ 已保存: {path}")
