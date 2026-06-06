#!/usr/bin/env python3
"""
设计工具静态数据表 - 一次性建立，永久使用
数据来源: Wikipedia / 各工具官网
"""
import json, os

TOOL_STATIC = {
    "Canva": {"year": 2013, "gh": None},
    "Adobe Photoshop": {"year": 1987, "gh": None},
    "Adobe Illustrator": {"year": 1986, "gh": None},
    "Adobe InDesign": {"year": 1999, "gh": None},
    "CorelDRAW": {"year": 1989, "gh": None},
    "Affinity Designer": {"year": 2014, "gh": None},
    "Affinity Photo": {"year": 2015, "gh": None},
    "Affinity Publisher": {"year": 2019, "gh": None},
    "Pixelmator Pro": {"year": 2017, "gh": None},
    "Procreate": {"year": 2011, "gh": None},
    "Figma": {"year": 2012, "gh": None},
    "Sketch": {"year": 2010, "gh": None},
    "Adobe XD": {"year": 2015, "gh": None},
    "Framer": {"year": 2014, "gh": "framer/framer"},
    "Lunacy": {"year": 2017, "gh": "icons8/lunacy"},
    "Penpot": {"year": 2018, "gh": "penpot/penpot"},
    "Balsamiq": {"year": 2008, "gh": None},
    "Axure RP": {"year": 2002, "gh": None},
    "Marvel": {"year": 2012, "gh": None},
    "Proto.io": {"year": 2010, "gh": None},
    "InVision": {"year": 2011, "gh": None},
    "Principle": {"year": 2015, "gh": None},
    "Origami Studio": {"year": 2015, "gh": "facebookarchive/origami"},
    "Flinto": {"year": 2010, "gh": None},
    "ProtoPie": {"year": 2015, "gh": None},
    "Mockplus": {"year": 2014, "gh": None},
    "UXPin": {"year": 2010, "gh": None},
    "Justinmind": {"year": 2008, "gh": None},
    "Fluid UI": {"year": 2012, "gh": None},
    "HotGloo": {"year": 2011, "gh": None},
    "Blender": {"year": 1998, "gh": "blender/blender"},
    "Autodesk Maya": {"year": 1998, "gh": None},
    "Cinema 4D": {"year": 1990, "gh": None},
    "SketchUp": {"year": 2000, "gh": None},
    "Unity": {"year": 2005, "gh": "Unity-Technologies/unity"},
    "Unreal Engine": {"year": 1998, "gh": "EpicGames/UnrealEngine"},
    "Spline": {"year": 2019, "gh": "splinetool/spline"},
    "Vectorworks": {"year": 1985, "gh": None},
    "Rhino 3D": {"year": 1998, "gh": None},
    "Adobe After Effects": {"year": 1993, "gh": None},
    "Envato Elements": {"year": 2014, "gh": None},
    "Freepik": {"year": 2010, "gh": None},
    "Flaticon": {"year": 2013, "gh": None},
    "Unsplash": {"year": 2013, "gh": "unsplash/unsplash"},
    "Pexels": {"year": 2015, "gh": None},
    "Shutterstock": {"year": 2003, "gh": None},
    "Depositphotos": {"year": 2009, "gh": None},
    "Storyblocks": {"year": 2014, "gh": None},
    "Vecteezy": {"year": 2007, "gh": None},
    "Creative Market": {"year": 2011, "gh": None},
}

# Save
out = os.path.join(os.path.dirname(__file__), '..', 'reference', 'tool-static-data.json')
os.makedirs(os.path.dirname(out), exist_ok=True)
with open(out, 'w') as f:
    json.dump(TOOL_STATIC, f, indent=2)

year_count = sum(1 for v in TOOL_STATIC.values() if v['year'])
gh_count = sum(1 for v in TOOL_STATIC.values() if v['gh'])
print(f"✅ 静态数据已保存: {out}")
print(f"   成立年份: {year_count}/{len(TOOL_STATIC)}")
print(f"   GitHub仓库: {gh_count}/{len(TOOL_STATIC)}")
