import { MetadataRoute } from "next";

const BLOG_SLUGS = [
  "figma-vs-sketch-vs-adobe-xd-2026-comparison",
    "adobe-illustrator-vs-affinity-designer-vs-coreldraw-2026-vector-software-comparison",
    "canva-vs-adobe-express-vs-visme-2026-comparison",
    "best-image-editing-software-photographers-2026",
] as const;

const TOOL_SLUGS = [
  "canva",
    "adobe-photoshop",
    "adobe-illustrator",
    "adobe-indesign",
    "coreldraw",
    "affinity-designer",
    "affinity-photo",
    "affinity-publisher",
    "pixelmator-pro",
    "procreate",
    "figma",
    "sketch",
    "adobe-xd",
    "framer",
    "lunacy",
    "penpot",
    "balsamiq",
    "axure-rp",
    "marvel",
    "proto-io",
    "invision",
    "principle",
    "origami-studio",
    "flinto",
    "protopie",
    "mockplus",
    "uxpin",
    "justinmind",
    "fluid-ui",
    "hotgloo",
    "blender",
    "autodesk-maya",
    "cinema-4d",
    "sketchup",
    "unity",
    "unreal-engine",
    "spline",
    "vectorworks",
    "rhino-3d",
    "adobe-after-effects",
    "envato-elements",
    "freepik",
    "flaticon",
    "unsplash",
    "pexels",
    "shutterstock",
    "depositphotos",
    "storyblocks",
    "vecteezy",
    "creativemarket",
] as const;

const CATEGORY_SLUGS = [
  "3d-and-motion",
    "design-resources",
    "graphic-design",
    "prototyping",
    "ui-ux-design",
] as const;

export async function GET() {
  const baseUrl = "https://designpicks.net";

  const urls: string[] = [];

  urls.push(`<url><loc>${baseUrl}</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/blog</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/about</loc><changefreq>monthly</changefreq><priority>0.5</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/contact</loc><changefreq>monthly</changefreq><priority>0.4</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/faq</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/privacy</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/terms</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/disclosure</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>`);

  for (const slug of CATEGORY_SLUGS) {
    urls.push(`<url><loc>${baseUrl}/category/${slug}</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>`);
  }

  for (const slug of BLOG_SLUGS) {
    urls.push(`<url><loc>${baseUrl}/blog/${slug}</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>`);
  }

  for (const slug of TOOL_SLUGS) {
    urls.push(`<url><loc>${baseUrl}/tools/${slug}</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>`);
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;

  return new Response(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}
