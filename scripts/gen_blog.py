#!/usr/bin/env python3
"""Generate blog post using Qwen API."""
import json, requests, sys

with open('/home/edi/.hermes/api_keys.env') as f:
    for line in f:
        if line.startswith('QWEN_API_KEY_1='):
            api_key = line.strip().split('=', 1)[1]
            break

headers = {
    'Authorization': f'Bearer {api_key}',
    'Content-Type': 'application/json'
}

prompt = '''Write a 2500-5000 character blog post in English for designpicks.net, a design tools review site. Topic: "Canva vs Adobe Photoshop vs Adobe Illustrator — Which Graphic Design Tool Should You Choose in 2026?"

Style: G2-style, first/third person mixed, with data, comparisons, and opinions.

Structure:
- Slug: "canva-vs-photoshop-vs-illustrator-2026-comparison"
- Excerpt (100-150 chars)
- Body: intro paragraph, section per tool with G2 ratings, use cases, pros/cons summary
- Comparison table (text format) with G2 ratings, pricing, best for, key differentiator
- FAQ section (3-5 questions)
- Conclusion with recommendation

CRITICAL RULES:
- Pure English, no Chinese
- 2500-5000 characters for content field
- Use only single quotes inside strings, no backticks in the output
- Reference real data: G2 ratings (Canva 4.7/5, 12480 reviews; Photoshop 4.6/5, 28950 reviews; Illustrator 4.5/5, 24130 reviews)
- Date: 2026-06-06
- Author: DesignPicks Editorial Team
- The content field should use \n for line breaks, not actual newlines
- Escape double quotes inside strings with backslash

Return JSON only with these fields:
slug, title, excerpt, content, author, authorRole, date, category, readTime, tags'''

response = requests.post(
    'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions',
    headers=headers,
    json={
        'model': 'qwen-plus',
        'messages': [{'role': 'user', 'content': prompt}],
        'temperature': 0.8,
        'max_tokens': 8192
    },
    timeout=180
)

data = response.json()
content = data['choices'][0]['message']['content']
# Strip markdown code fences if present
content = content.strip()
if content.startswith('```json'):
    content = content[7:]
if content.startswith('```'):
    content = content[3:]
if content.endswith('```'):
    content = content[:-3]
content = content.strip()

# Validate JSON
parsed = json.loads(content)
print(json.dumps(parsed, indent=2))
