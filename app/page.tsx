"use client";

import { ArrowRight, Sparkles, Palette, Monitor, Library, Users } from "lucide-react";
import Link from "next/link";

const PINK = "#ec4899";

// Gallery showcase items — large scene images + smaller waterfall pieces
const GALLERY_ITEMS = [
  {
    id: 1,
    type: "hero",
    title: "FinTech Dashboard",
    subtitle: "Banking reimagined",
    category: "Web App",
    color: "#fce7f3",
    accent: "#ec4899",
    span: "full",
    size: "large",
  },
  {
    id: 2,
    type: "product",
    title: "Wanderlust Travel App",
    subtitle: "iOS · UX Research",
    category: "Mobile",
    color: "#fdf2f8",
    accent: "#f472b6",
    span: "half",
    size: "medium",
  },
  {
    id: 3,
    type: "product",
    title: "Bloom E-Commerce",
    subtitle: "Shop experience redesign",
    category: "Web Design",
    color: "#fce7f3",
    accent: "#db2777",
    span: "half",
    size: "medium",
  },
  {
    id: 4,
    type: "brand",
    title: "Nova Brand System",
    subtitle: "Identity & guidelines",
    category: "Branding",
    color: "#fdf2f8",
    accent: "#ec4899",
    span: "third",
    size: "small",
  },
  {
    id: 5,
    type: "brand",
    title: "Pulse SaaS Platform",
    subtitle: "Analytics dashboard",
    category: "SaaS",
    color: "#fce7f3",
    accent: "#f472b6",
    span: "third",
    size: "small",
  },
  {
    id: 6,
    type: "brand",
    title: "Solace Wellness",
    subtitle: "Mindfulness app UX",
    category: "Mobile",
    color: "#fff1f2",
    accent: "#db2777",
    span: "third",
    size: "small",
  },
  {
    id: 7,
    type: "product",
    title: "Verdant Agriculture",
    subtitle: "Farm management UI",
    category: "Web App",
    color: "#fdf2f8",
    accent: "#ec4899",
    span: "half",
    size: "medium",
  },
  {
    id: 8,
    type: "product",
    title: "Aether Music Player",
    subtitle: "Streaming UX overhaul",
    category: "Mobile",
    color: "#fce7f3",
    accent: "#f472b6",
    span: "half",
    size: "medium",
  },
  {
    id: 9,
    type: "brand",
    title: "Craft CMS",
    subtitle: "Content management",
    category: "SaaS",
    color: "#fff1f2",
    accent: "#db2777",
    span: "third",
    size: "small",
  },
  {
    id: 10,
    type: "brand",
    title: "Haven Smart Home",
    subtitle: "IoT control panel",
    category: "Mobile",
    color: "#fdf2f8",
    accent: "#ec4899",
    span: "third",
    size: "small",
  },
  {
    id: 11,
    type: "brand",
    title: "Orbit Design System",
    subtitle: "Component library",
    category: "Design System",
    color: "#fce7f3",
    accent: "#f472b6",
    span: "third",
    size: "small",
  },
];

const SERVICES = [
  { icon: Monitor, title: "UI Design", desc: "Pixel-perfect interfaces that users love." },
  { icon: Users, title: "UX Research", desc: "Data-driven insights that shape great products." },
  { icon: Library, title: "Design Systems", desc: "Scalable component libraries for your team." },
  { icon: Palette, title: "Visual Design", desc: "Brand identities and visual languages." },
];

export default function HomePage() {
  const featuredItems = GALLERY_ITEMS.slice(0, 3);
  const masonryItems = GALLERY_ITEMS.slice(3);

  return (
    <div className="bg-pink-bg">
      {/* ======== HERO — Gallery Scene Layout ======== */}
      <section className="px-6 pt-16 pb-8 md:pt-24 md:pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left: hero text */}
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-pink bg-pink-light px-3 py-1.5 rounded-full mb-4">
                <Sparkles className="w-3.5 h-3.5" /> UI/UX Studio
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
                Design that
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink to-pink-dark">
                  orbits around you
                </span>
              </h1>
              <p className="text-base text-gray-500 mt-4 max-w-md leading-relaxed">
                We are Orbit Frame — a 6-person UI/UX design studio based in Maastricht, 
                Netherlands. We craft intuitive digital experiences that delight users 
                and drive results.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <Link
                  href="/#work"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium text-sm transition-all hover:opacity-90"
                  style={{ backgroundColor: PINK }}
                >
                  View Our Work <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all"
                  style={{ border: `1px solid ${PINK}`, color: PINK }}
                >
                  Meet the Team
                </Link>
              </div>
            </div>

            {/* Right: hero gallery scene — large showcase item */}
            <div className="relative">
              <div
                className="rounded-2xl overflow-hidden shadow-lg"
                style={{ backgroundColor: GALLERY_ITEMS[0].color }}
              >
                <div className="p-8 md:p-10">
                  <span className="text-[10px] px-2 py-0.5 rounded-full font-medium text-white" style={{ backgroundColor: PINK }}>
                    Featured Project
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-3">
                    {GALLERY_ITEMS[0].title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{GALLERY_ITEMS[0].subtitle}</p>
                  <div
                    className="mt-6 rounded-xl h-48 md:h-56 flex items-center justify-center"
                    style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
                  >
                    <div className="text-center">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-2"
                        style={{ backgroundColor: PINK }}
                      >
                        <Monitor className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-sm font-medium text-gray-700">{GALLERY_ITEMS[0].category}</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating smaller preview */}
              <div
                className="absolute -bottom-4 -right-4 w-32 h-20 rounded-xl shadow-lg hidden md:flex items-center justify-center"
                style={{ backgroundColor: GALLERY_ITEMS[1].color }}
              >
                <div className="text-center">
                  <span className="text-[10px] font-semibold text-gray-700">{GALLERY_ITEMS[1].title}</span>
                  <p className="text-[9px] text-gray-400">{GALLERY_ITEMS[1].category}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======== SERVICES ======== */}
      <section className="px-6 py-14">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="section-title">What We Do</h2>
            <p className="section-subtitle mt-1">Full-cycle UI/UX design services</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES.map((svc) => {
              const Icon = svc.icon;
              return (
                <div key={svc.title} className="card p-5 hover:-translate-y-0.5 transition-all text-center">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-3"
                    style={{ backgroundColor: "#fdf2f8" }}
                  >
                    <Icon className="w-5 h-5" style={{ color: PINK }} />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">{svc.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">{svc.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======== GALLERY / WORK — Waterfall Masonry ======== */}
      <section id="work" className="px-6 py-14">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="section-title">Our Work</h2>
            <p className="section-subtitle mt-1">Selected projects from our orbit</p>
          </div>

          {/* Featured 2-column large showcase */}
          <div className="grid md:grid-cols-2 gap-5 mb-8">
            {featuredItems.slice(1).map((item) => (
              <div
                key={item.id}
                className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group"
                style={{ backgroundColor: item.color }}
              >
                <div className="p-6 md:p-8">
                  <span className="text-[10px] px-2 py-0.5 rounded-full font-medium text-white" style={{ backgroundColor: item.accent }}>
                    {item.category}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-3 group-hover:text-pink transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{item.subtitle}</p>
                  <div
                    className="mt-4 rounded-xl h-32 flex items-center justify-center"
                    style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: item.accent }}
                    >
                      <Palette className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Waterfall masonry grid for remaining items */}
          <div className="gallery-masonry">
            {masonryItems.map((item) => (
              <div
                key={item.id}
                className="gallery-item rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group"
                style={{ backgroundColor: item.color }}
              >
                <div className="p-5">
                  <span className="text-[10px] px-2 py-0.5 rounded-full font-medium text-white" style={{ backgroundColor: item.accent }}>
                    {item.category}
                  </span>
                  <h3 className="text-sm font-bold text-gray-900 mt-2 group-hover:text-pink transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">{item.subtitle}</p>
                  <div
                    className="mt-3 rounded-lg h-24 flex items-center justify-center"
                    style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: item.accent }}
                    >
                      <Palette className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== STUDIO STATS ======== */}
      <section className="px-6 py-14">
        <div className="max-w-6xl mx-auto">
          <div
            className="rounded-2xl p-10 md:p-14 text-center"
            style={{ backgroundColor: "#fdf2f8" }}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
              style={{ backgroundColor: PINK }}
            >
              <Users className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Ready to start your orbit?
            </h2>
            <p className="text-sm text-gray-500 mb-6 max-w-lg mx-auto">
              Let's collaborate on your next digital product. From research to pixel-perfect 
              delivery, we've got you covered.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium text-sm transition-all hover:opacity-90"
                style={{ backgroundColor: PINK }}
              >
                Start a Project <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all"
                style={{ border: `1px solid ${PINK}`, color: PINK }}
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
