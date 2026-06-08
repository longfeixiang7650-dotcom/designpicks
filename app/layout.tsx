import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "DesignPicks — Best Graphic Design & Creative Software 2026",
  description:
    "Discover and compare the best graphic design software, creative tools, and visual content platforms. In-depth reviews of Photoshop, Figma, Canva, and more.",
  keywords: [
    "graphic design software",
    "design tools",
    "creative software",
    "Photoshop alternatives",
    "Figma reviews",
    "Canva review",
    "UI/UX tools",
    "design software comparison",
  ],
  verification: {
    google: "T5bb4mZivi0CfaYYRiKZLSNIWmhvAX6_RVgDEyonTGo",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "DesignPicks",
    title: "DesignPicks — Best Graphic Design & Creative Software 2026",
    description:
      "Discover and compare the best graphic design software, creative tools, and visual content platforms. In-depth reviews of Photoshop, Figma, Canva, and more.",
  },
};

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased font-sans flex flex-col">
        {/* Header — white minimal */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "#EC4899" }}
              >
                <span className="text-white text-sm font-bold">D</span>
              </div>
              <span className="text-lg font-bold text-gray-900 group-hover:text-pink transition-colors">
                DesignPicks
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-pink rounded-lg hover:bg-pink-light transition-all"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/contact"
                className="btn-outline text-sm"
              >
                Contact
              </Link>
            </div>

            {/* Mobile menu button */}
            <MobileMenuButton />
          </div>
        </header>

        <main className="flex-1">{children}</main>

        {/* Footer — light gray minimal */}
        <footer className="bg-gray-50 border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
              <div className="col-span-2 md:col-span-1">
                <Link href="/" className="flex items-center gap-2 mb-3">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "#EC4899" }}
                  >
                    <span className="text-white text-xs font-bold">D</span>
                  </div>
                  <span className="text-base font-bold text-gray-900">DesignPicks</span>
                </Link>
                <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                  Curated design tools and creative software, tested and reviewed by our team.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">Explore</h4>
                <ul className="space-y-2.5">
                  <li><Link href="/" className="text-sm text-gray-500 hover:text-pink transition-colors">Home</Link></li>
                  <li><Link href="/blog" className="text-sm text-gray-500 hover:text-pink transition-colors">Blog</Link></li>
                  <li><Link href="/about" className="text-sm text-gray-500 hover:text-pink transition-colors">About</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">Support</h4>
                <ul className="space-y-2.5">
                  <li><Link href="/contact" className="text-sm text-gray-500 hover:text-pink transition-colors">Contact</Link></li>
                  <li><Link href="/privacy" className="text-sm text-gray-500 hover:text-pink transition-colors">Privacy</Link></li>
                  <li><Link href="/terms" className="text-sm text-gray-500 hover:text-pink transition-colors">Terms</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">Disclosure</h4>
                <ul className="space-y-2.5">
                  <li><Link href="/disclosure" className="text-sm text-gray-500 hover:text-pink transition-colors">Affiliate Disclosure</Link></li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} DesignPicks. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

// Inline mobile menu component (no import from sections/)
function MobileMenuButton() {
  return (
    <details className="md:hidden group">
      <summary className="list-none p-2 -mr-2 cursor-pointer text-gray-600 hover:text-pink">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </summary>
      <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-sm">
        <nav className="px-6 py-4 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="px-4 py-3 text-sm font-medium text-gray-600 hover:text-pink hover:bg-pink-light rounded-lg transition-all"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 px-5 py-3 text-sm font-medium text-white rounded-lg text-center"
            style={{ backgroundColor: "#EC4899" }}
          >
            Contact
          </Link>
        </nav>
      </div>
    </details>
  );
}
