"use client";

import { useMemo } from "react";
import Link from "next/link";
import { ALL_TOOLS } from "@/data/tools";
import { ArrowRight, ChevronRight, Star, Sparkles } from "lucide-react";

function slugify(category: string) {
  return category.toLowerCase().replace(/\s+/g, "-");
}

export default function ToolsPage() {
  const categories = useMemo(() => {
    const m = new Map<string, { count: number; bestSlug: string }>();
    for (const t of ALL_TOOLS) {
      if (!m.has(t.category)) {
        m.set(t.category, {
          count: 0,
          bestSlug: slugify(t.category),
        });
      }
      m.get(t.category)!.count++;
    }
    return [...m.entries()].map(([name, data]) => ({ name, ...data }));
  }, []);

  const featuredTools = useMemo(
    () => [...ALL_TOOLS].sort((a, b) => b.rating - a.rating).slice(0, 12),
    []
  );

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <nav className="flex items-center gap-2 text-sm text-[#4A6380] mb-8">
          <Link href="/" className="hover:text-[#3B82F6] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#8BA3BE]">All Design Tools</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#3B82F6]/20 to-[#22D3EE]/20 flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-[#22D3EE]" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#F0F4F8] tracking-tight">
                All Design Tools
              </h1>
              <p className="text-base text-[#8BA3BE] mt-1">
                Browse our complete collection of {ALL_TOOLS.length} design tools across {categories.length} categories.
              </p>
            </div>
          </div>
        </header>

        {/* Categories Index */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-[#F0F4F8] mb-6">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={`/best/${cat.bestSlug}`}
                className="group bg-[#0F1D32] border border-[#1E3A5F] rounded-xl p-5 card-hover"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-[#F0F4F8] group-hover:text-[#3B82F6] transition-colors">
                    {cat.name}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-[#4A6380] group-hover:text-[#3B82F6] transition-colors" />
                </div>
                <p className="text-sm text-[#4A6380]">
                  {cat.count} tool{cat.count !== 1 ? "s" : ""}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured / Top-Rated Tools */}
        <section>
          <h2 className="text-2xl font-bold text-[#F0F4F8] mb-6 flex items-center gap-2">
            <Star className="w-6 h-6 text-[#3B82F6]" />
            Top-Rated Design Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.id}
                  href={`/tools/${tool.id}`}
                  className="group bg-[#0F1D32] border border-[#1E3A5F] rounded-xl p-6 card-hover"
                >
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#162440] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-[#3B82F6]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-[#F0F4F8] group-hover:text-[#3B82F6] transition-colors truncate">
                        {tool.name}
                      </h3>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-3.5 h-3.5 text-[#F59E0B] fill-[#F59E0B]" />
                        <span className="text-xs font-bold text-[#F0F4F8]">
                          {tool.rating}
                        </span>
                        <span className="text-xs text-[#4A6380]">
                          ({tool.reviewCount.toLocaleString()})
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[#8BA3BE] leading-relaxed line-clamp-2 mb-2">
                    {tool.description}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-[#1E3A5F]">
                    <span className="text-xs text-[#4A6380]">
                      {tool.category}
                    </span>
                    <span className="text-xs text-[#22D3EE] font-medium">
                      {tool.pricing}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
