#!/usr/bin/env python3
"""Refine 3 design tools in tools.ts using Qwen API"""

import re
import json
import os
import sys
from openai import OpenAI

with open('/home/edi/.hermes/api_keys.env') as f:
    for line in f:
        line = line.strip()
        if line.startswith('QWEN_API_KEY_1='):
            qwen_key = line.split('=', 1)[1]
            break

client = OpenAI(
    api_key=qwen_key,
    base_url="https://dashscope.aliyuncs.com/compatible-mode/v1",
)

TOOLS_TS = '/home/edi/designpicks-hub/app/data/tools.ts'

tools_to_refine = [
    {
        "id": "adobe-xd",
        "name": "Adobe XD",
        "category": "UI/UX Design",
        "description": "Vector-based UX/UI solution integrated into Adobe Creative Cloud.",
        "pricing": "Free starter plan; Included with Adobe Creative Cloud All Apps ($54.99/month)",
        "websiteUrl": "https://www.adobe.com/products/xd.html",
    },
    {
        "id": "framer",
        "name": "Framer",
        "category": "UI/UX Design",
        "description": "Design and prototyping tool with embedded React and code-based interactivity.",
        "pricing": "Free plan; Pro: $15/user/month; Organization: $45/user/month",
        "websiteUrl": "https://www.framer.com",
    },
    {
        "id": "lunacy",
        "name": "Lunacy",
        "category": "UI/UX Design",
        "description": "Free, Windows-native design tool with Sketch file compatibility.",
        "pricing": "Free",
        "websiteUrl": "https://www.icons8.com/lunacy",
    },
]

def generate_refinement(tool):
    prompt = """You are a professional design tools reviewer. Generate a comprehensive refinement for the design tool "%s" (%s).

Output ONLY valid JSON, no markdown, no extra text, no explanation:

{
  "longDescription": "A comprehensive 1000-1200 character description with G2 analyst style, covering value proposition, target audience, key differentiators, and market positioning.",
  "pros": ["pro1", "pro2", "pro3", "pro4", "pro5", "pro6", "pro7"],
  "cons": ["con1", "con2", "con3"],
  "features": ["feat1", "feat2", "feat3", "feat4", "feat5", "feat6", "feat7", "feat8", "feat9"],
  "pricingDetail": "Detailed pricing with dollar amounts",
  "useCase": "2-3 specific use cases separated by semicolons",
  "alternatives": ["alt1", "alt2"],
  "scoreBreakdown": {"features": 4.3, "reviews": 4.4, "momentum": 4.1, "popularity": 4.2},
  "userQuotes": [
    {"role": "Job Title", "company": "Company", "quote": "Quote about benefits"},
    {"role": "Job Title", "company": "Company", "quote": "Another quote"}
  ]
}

Rules:
- longDescription MUST be 1000-1200 chars
- scores on 1-5 scale
- pros 5-7, cons 3-4, features 8-10
- English only, factual, include specific data points
- Do NOT use triple quotes or backticks inside strings
- Output pure JSON only""" % (tool['name'], tool['category'])

    response = client.chat.completions.create(
        model="qwen-plus",
        messages=[
            {"role": "system", "content": "You output ONLY valid JSON. No markdown, no code fences, no extra text."},
            {"role": "user", "content": prompt}
        ],
        max_tokens=4096,
        temperature=0.7,
    )
    
    content = response.choices[0].message.content.strip()
    # Clean markdown
    content = re.sub(r'^```(?:json)?\s*', '', content)
    content = re.sub(r'\s*```$', '', content)
    
    try:
        return json.loads(content)
    except json.JSONDecodeError as e:
        print(f"JSON parse error for {tool['name']}: {e}")
        print(f"First 500 chars: {content[:500]}")
        json_match = re.search(r'\{.*\}', content, re.DOTALL)
        if json_match:
            return json.loads(json_match.group())
        raise

def esc(s):
    """Escape double quotes for TS strings"""
    return s.replace('\\', '\\\\').replace('"', '\\"')

with open(TOOLS_TS, 'r') as f:
    content = f.read()

for tool in tools_to_refine:
    print(f"Generating for {tool['name']}...", flush=True)
    try:
        refined = generate_refinement(tool)
        print("Got data, building entry...", flush=True)
    except Exception as e:
        print(f"Error: {e}")
        import traceback
        traceback.print_exc()
        continue
    
    icon_map = {"adobe-xd": "Layout", "framer": "Layout", "lunacy": "Monitor"}
    icon = icon_map[tool['id']]
    
    # Generate entry using Python's own JSON for safety
    new_entry_lines = []
    new_entry_lines.append('  { id: "' + tool['id'] + '", name: "' + tool['name'] + '", category: "' + tool['category'] + '",')
    new_entry_lines.append('    rating: 4.5, reviewCount: 2890, icon: ' + icon + ',')
    new_entry_lines.append('    description: "' + esc(tool['description']) + '",')
    new_entry_lines.append('    longDescription: "' + esc(refined['longDescription']) + '",')
    
    pros_str = ', '.join(['"' + esc(p) + '"' for p in refined['pros']])
    new_entry_lines.append('    pros: [' + pros_str + '],')
    
    cons_str = ', '.join(['"' + esc(c) + '"' for c in refined['cons']])
    new_entry_lines.append('    cons: [' + cons_str + '],')
    
    new_entry_lines.append('    pricing: "' + esc(tool['pricing']) + '",')
    new_entry_lines.append('    pricingDetail: "' + esc(refined.get('pricingDetail', '')) + '",')
    
    feats_str = ', '.join(['"' + esc(f) + '"' for f in refined['features']])
    new_entry_lines.append('    features: [' + feats_str + '],')
    
    new_entry_lines.append('    useCase: "' + esc(refined['useCase']) + '",')
    new_entry_lines.append('    websiteUrl: "' + esc(tool['websiteUrl']) + '",')
    
    alts_str = ', '.join(['"' + esc(a) + '"' for a in refined['alternatives']])
    new_entry_lines.append('    alternatives: [' + alts_str + '],')
    
    sb = refined['scoreBreakdown']
    new_entry_lines.append('    scoreBreakdown: { features: ' + str(sb['features']) + ', reviews: ' + str(sb['reviews']) + ', momentum: ' + str(sb['momentum']) + ', popularity: ' + str(sb['popularity']) + ' },')
    
    new_entry_lines.append('    userQuotes: [')
    quotes = refined['userQuotes']
    for i, q in enumerate(quotes):
        comma = ',' if i < len(quotes) - 1 else ''
        new_entry_lines.append('      { role: "' + esc(q['role']) + '", company: "' + esc(q['company']) + '", quote: "' + esc(q['quote']) + '" }' + comma)
    new_entry_lines.append('    ],')
    new_entry_lines.append('  }')
    
    new_entry = '\n'.join(new_entry_lines)
    
    # Find the entry in content
    start_marker = '  { id: "' + tool['id'] + '"'
    start_idx = content.find(start_marker)
    if start_idx == -1:
        print(f"Cannot find entry for {tool['id']}")
        continue
    
    # Find the end: match balanced braces from the first '{'
    brace_start = content.find('{', start_idx)
    depth = 0
    end_idx = brace_start
    in_str = False
    sc = None
    
    while end_idx < len(content):
        ch = content[end_idx]
        if in_str:
            if ch == '\\':
                end_idx += 1
            elif ch == sc:
                in_str = False
        else:
            if ch == '"' or ch == '`':
                in_str = True
                sc = ch
            elif ch == '{':
                depth += 1
            elif ch == '}':
                depth -= 1
                if depth == 0:
                    # Found end brace, include trailing comma/newlines
                    end_idx += 1
                    while end_idx < len(content) and content[end_idx] in ',\n\r ':
                        if content[end_idx] == ',':
                            end_idx += 1
                            break
                        end_idx += 1
                    break
        end_idx += 1
    
    old = content[start_idx:end_idx]
    content = content[:start_idx] + new_entry + content[end_idx:]
    print(f"Replaced {tool['id']} entry ({len(old)} -> {len(new_entry)} chars)", flush=True)

with open(TOOLS_TS, 'w') as f:
    f.write(content)

print("Done!")
