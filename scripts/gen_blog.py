#!/usr/bin/env python3
"""Generate blog post for designpicks.net"""

import json
import os
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

prompt = """Write a high-quality, original English blog post for designpicks.net (a design tools comparison site). Write in G2.com style - data-driven, comparative, insightful.

Title: "Spline vs Framer vs ProtoPie: The Best Interactive Design Tools for 2026"

Requirements:
- 2500-5000 characters total
- G2 style: first/third person mixed, opinionated, data-backed
- SEO friendly with natural keyword distribution
- Include: title, excerpt (100-150 chars), body with H2 subheadings, comparison table, FAQ (3-5 questions), conclusion with recommendation
- Do NOT use Chinese at all
- Compare Spline (web-based 3D), Framer (design-to-code), and ProtoPie (logic-rich prototyping)
- Include specific features, pricing, best-fit use cases
- All content must be original, not translation

Output format (pure JSON, no markdown):
{
  "title": "Spline vs Framer vs ProtoPie: The Best Interactive Design Tools for 2026",
  "slug": "spline-vs-framer-vs-protopie-2026",
  "excerpt": "Short 100-150 char excerpt...",
  "content": "Full article HTML content with <h2> subheadings, <table> for comparison, <h3> for FAQ items..."
}
"""

response = client.chat.completions.create(
    model="qwen-plus",
    messages=[
        {"role": "system", "content": "You output ONLY valid JSON. No markdown, no code fences, no extra text."},
        {"role": "user", "content": prompt}
    ],
    max_tokens=8192,
    temperature=0.8,
)

content = response.choices[0].message.content.strip()
# Clean markdown
import re
content = re.sub(r'^```(?:json)?\s*', '', content)
content = re.sub(r'\s*```$', '', content)

blog = json.loads(content)
print(json.dumps(blog, indent=2, ensure_ascii=False))
