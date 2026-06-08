"use client";

import { useState, useMemo } from "react";
import {
  Search, Star, ArrowRight, Layers, Bookmark, Clock,
} from "lucide-react";
import Link from "next/link";
import { ALL_TOOLS } from "@/data/tools";
import { BLOG_POSTS } from "@/data/blog-posts";

const PINK = "#EC4899";
const SITE_NAME = "DesignPicks";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = useMemo(() => {
    const m = new Map<string, { count: number; avgRating: number }>();
    for (const t of ALL_TOOLS) {
      if (!m.has(t.category)) m.set(t.category, { count: 0, avgRating: 0 });
      const s = m.get(t.category)!;
      s.count++;
      s.avgRating += t.rating;
    }
    return [...m.entries()]
      .map(([name, s]) => ({ name, count: s.count, avgRating: Math.round((s.avgRating / s.count) * 10) / 10 }))
      .sort((a, b) => b.count - a.count);
  }, []);

  const featuredTools = useMemo(
    () => [...ALL_TOOLS].sort((a: any, b: any) => b.rating - a.rating).slice(0, 6),
    []
  );

  const latestPosts = useMemo(
    () => [...BLOG_POSTS]
      .sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3),
    []
  );

  const filteredCategories = useMemo(
    () => searchQuery
      ? categories.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()))
      : categories,
    [categories, searchQuery]
  );

  return (
    <div className="bg-white">
      {/* ======== HERO ======== */}
      <section className="px-6 pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
            Curated{" "}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(135deg, ${PINK}, #F472B6)` }}>
              Design Tools
            </span>
          </h1>
          <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
            Hand-picked design tools and creative software, tested and reviewed by our team.
            Find what works for your creative workflow.
          </p>

          {/* Search */}
          <div className="mt-8 max-w-xl mx-auto">
            <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden focus-within:border-pink focus-within:ring-2 focus-within:ring-pink/10 transition-all bg-white">
              <Search className="ml-4 w-5 h-5 text-gray-400 flex-shrink-0" />
              <input
                type="search"
                placeholder="Search categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 py-3.5 px-3 bg-transparent text-gray-900 placeholder:text-gray-400 outline-none text-sm"
              />
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <Link
              href="/#featured-tools"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium text-sm transition-all hover:opacity-90"
              style={{ backgroundColor: PINK }}
            >
              Browse Tools <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ======== CATEGORIES GRID ======== */}
      <section className="px-6 py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title mb-2">Categories</h2>
          <p className="section-subtitle mb-8">Explore design tools by category</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {filteredCategories.slice(0, 12).map((cat) => (
              <Link
                key={cat.name}
                href={`/category/${cat.name.toLowerCase().replace(/ /g, "-")}`}
                className="card p-5 hover:-translate-y-0.5 transition-all group"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                  style={{ backgroundColor: "#FDF2F8" }}
                >
                  <Layers className="w-5 h-5" style={{ color: PINK }} />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-pink transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1">{cat.count} tools</p>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="w-3 h-3" style={{ color: PINK, fill: PINK }} />
                  <span className="text-xs text-gray-500 font-medium">{cat.avgRating}</span>
                </div>
              </Link>
            ))}
          </div>

          {filteredCategories.length === 0 && (
            <p className="text-center text-gray-400 py-10">No categories matching &quot;{searchQuery}&quot;</p>
          )}
        </div>
      </section>

      {/* ======== FEATURED TOOLS (6) ======== */}
      <section id="featured-tools" className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="section-title mb-1">Featured Tools</h2>
              <p className="section-subtitle">Top-rated design tools picked by our editors</p>
            </div>
            <Link href="/" className="hidden sm:flex items-center gap-1 text-sm font-medium" style={{ color: PINK }}>
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredTools.map((tool, i) => (
              <Link
                key={tool.id}
                href={`/tools/${tool.id}`}
                className="card p-5 group hover:-translate-y-0.5 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold flex-shrink-0"
                    style={{ backgroundColor: "#FDF2F8", color: PINK }}
                  >
                    {tool.name.charAt(0)}
                  </div>
                  {i < 2 && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full font-medium text-white" style={{ backgroundColor: PINK }}>
                      Editor&apos;s Pick
                    </span>
                  )}
                </div>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-pink transition-colors mb-1">
                  {tool.name}
                </h3>
                <p className="text-xs text-gray-500 line-clamp-2 mb-3">{tool.description}</p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5" style={{ color: PINK, fill: PINK }} />
                    <span className="text-xs font-medium text-gray-700">{tool.rating}</span>
                    <span className="text-xs text-gray-400">({tool.reviewCount || 0})</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-gray-100 text-gray-500 font-medium">
                    {tool.pricing || "$"}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ======== LATEST BLOG (3) ======== */}
      {latestPosts.length > 0 && (
        <section className="px-6 py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="section-title mb-1">Latest from {SITE_NAME}</h2>
                <p className="section-subtitle">In-depth reviews and comparisons</p>
              </div>
              <Link href="/blog" className="hidden sm:flex items-center gap-1 text-sm font-medium" style={{ color: PINK }}>
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {latestPosts.map((post: any) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="card p-6 group hover:-translate-y-0.5 transition-all"
                >
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-pink-light text-pink font-medium">
                    {post.category || "Article"}
                  </span>
                  <h3 className="text-sm font-semibold text-gray-900 mt-3 mb-2 group-hover:text-pink transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2 mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-[10px] text-gray-400 mt-auto">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime || "3 min"}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ======== CTA ======== */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl p-10 md:p-14 text-center" style={{ backgroundColor: "#FDF2F8" }}>
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: PINK }}
            >
              <Star className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Find your perfect design tool
            </h2>
            <p className="text-sm text-gray-500 mb-6 max-w-md mx-auto">
              Browse our full collection of curated design and creative software.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium text-sm transition-all hover:opacity-90"
              style={{ backgroundColor: PINK }}
            >
              Browse All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
