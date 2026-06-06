#!/usr/bin/env python3
"""把静态数据注入到 tools.ts 中，添加 externalData 字段"""
import json, os, re

# 1. 加载静态数据
static_path = os.path.join(os.path.dirname(__file__), '..', 'reference', 'tool-static-data.json')
with open(static_path) as f:
    static = json.load(f)

gh_path = os.path.join(os.path.dirname(__file__), '..', 'reference', 'github-stars.json')
gh_data = {}
if os.path.exists(gh_path):
    with open(gh_path) as f:
        gh_data = json.load(f).get('data', {})

# 2. 读取 tools.ts
ts_path = os.path.join(os.path.dirname(__file__), '..', 'app', 'data', 'tools.ts')
with open(ts_path) as f:
    content = f.read()

# 3. 找到 TOOL_MAP 定义的位置，在其前面插入出口函数
insert_pos = content.find('export const TOOL_MAP')
if insert_pos == -1:
    print("ERROR: Cannot find TOOL_MAP")
    exit(1)

# 4. 构建 external data JSON 字符串，直接嵌入为模块级常量
external_data = {}
for name, info in static.items():
    gh_repo = info.get('gh')
    gh_stars = gh_data.get(name, {}).get('stars') if gh_data else None
    entry = {
        "founded": info.get('year'),
        "ghStars": gh_stars,
    }
    if gh_repo:
        entry["ghRepo"] = gh_repo
    external_data[name] = entry

# 5. 把 externalData 作为函数嵌入
external_json = json.dumps(external_data, separators=(',', ':'))

insert_text = f"""

// ============ 客观数据 (auto-generated, do not edit) ============
export const TOOL_EXTERNAL_DATA: Record<string, {{founded?: number; ghStars?: number; ghRepo?: string}}> = {external_json};

export function getToolExternalData(name: string) {{
  return TOOL_EXTERNAL_DATA[name] || {{}};
}}
"""

new_content = content[:insert_pos] + insert_text + content[insert_pos:]

with open(ts_path, 'w') as f:
    f.write(new_content)

print("✅ External data injected into tools.ts")
print(f"   {len(external_data)} tools with external data")
gh_count = sum(1 for v in external_data.values() if v.get('ghStars'))
print(f"   {gh_count} tools with GitHub stars")
