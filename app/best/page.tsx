"use client";

import { useMemo } from "react";
import Link from "next/link";
import { ALL_TOOLS } from "@/data/tools";
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";

function slugify(category: string) {
  return category.toLowerCase().replace(/\s+/g, "-");
}

export default function BestPage() {
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
    return [...m.entries()]
      .map(([name, data]) => ({ name, ...data }))
      .sort((a, b) => b.count - a.count);
  }, []);

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <nav className="flex items-center gap-2 text-sm text-[#4A6380] mb-8">
          <Link href="/" className="hover:text-[#3B82F6] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#8BA3BE]">Best Design Tools 2026</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#3B82F6]/20 to-[#22D3EE]/20 flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-[#22D3EE]" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#F0F4F8] tracking-tight">
                Best Design Tools in 2026
              </h1>
              <p className="text-base text-[#8BA3BE] mt-1">
                Expert-curated rankings and comparisons across {categories.length} design software categories.
                Find the perfect tools for your creative workflow.
              </p>
            </div>
          </div>
        </header>

        <section>
          <h2 className="text-2xl font-bold text-[#F0F4F8] mb-6">
            Browse Categories
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
                  {cat.count} tool{cat.count !== 1 ? "s" : ""} compared
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
