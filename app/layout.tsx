import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Orbit Frame — UI/UX Design Studio in Maastricht",
  description:
    "Orbit Frame is a Maastricht-based UI/UX design studio crafting intuitive, beautiful digital experiences. 6 designers, one orbit.",
  keywords: [
    "UI/UX design",
    "Maastricht design studio",
    "Orbit Frame",
    "digital design",
    "user experience",
    "product design",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Orbit Frame",
    title: "Orbit Frame — UI/UX Design Studio in Maastricht",
    description:
      "Crafting intuitive, beautiful digital experiences from Maastricht.",
  },
};

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/#work" },
  { label: "About", href: "/about" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased font-sans flex flex-col bg-pink-bg">
        {/* Header — pink/white minimal */}
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-pink-soft">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "#ec4899" }}
              >
                <span className="text-white text-xs font-bold">O</span>
              </div>
              <span className="text-lg font-bold text-gray-900 group-hover:text-pink transition-colors">
                Orbit Frame
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
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg transition-all"
                style={{ backgroundColor: "#ec4899", color: "white" }}
              >
                Get in Touch
              </Link>
            </div>

            {/* Mobile menu button */}
            <MobileMenuButton />
          </div>
        </header>

        <main className="flex-1">{children}</main>

        {/* Footer — pink-tinted minimal */}
        <footer className="bg-white border-t border-pink-soft">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
              <div className="col-span-2 md:col-span-1">
                <Link href="/" className="flex items-center gap-2 mb-3">
                  <div
                    className="w-7 h-7 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: "#ec4899" }}
                  >
                    <span className="text-white text-xs font-bold">O</span>
                  </div>
                  <span className="text-base font-bold text-gray-900">Orbit Frame</span>
                </Link>
                <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                  A 6-person UI/UX design studio based in Maastricht, Netherlands.
                  We craft intuitive digital experiences.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">Navigate</h4>
                <ul className="space-y-2.5">
                  <li><Link href="/" className="text-sm text-gray-500 hover:text-pink transition-colors">Home</Link></li>
                  <li><Link href="/about" className="text-sm text-gray-500 hover:text-pink transition-colors">About</Link></li>
                  <li><Link href="/contact" className="text-sm text-gray-500 hover:text-pink transition-colors">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">Studio</h4>
                <ul className="space-y-2.5">
                  <li className="text-sm text-gray-500">Maastricht, NL</li>
                  <li className="text-sm text-gray-500">UI/UX Design</li>
                  <li className="text-sm text-gray-500">6 Designers</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">Social</h4>
                <ul className="space-y-2.5">
                  <li><a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-pink transition-colors">Dribbble</a></li>
                  <li><a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-pink transition-colors">Behance</a></li>
                  <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-pink transition-colors">LinkedIn</a></li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-pink-soft flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Orbit Frame. All rights reserved.
              </p>
              <p className="text-sm text-gray-400">
                Made with <span className="text-pink">♥</span> in Maastricht
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

// Inline mobile menu component
function MobileMenuButton() {
  return (
    <details className="md:hidden group">
      <summary className="list-none p-2 -mr-2 cursor-pointer text-gray-600 hover:text-pink">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </summary>
      <div className="absolute top-full left-0 right-0 bg-white border-b border-pink-soft shadow-sm">
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
            style={{ backgroundColor: "#ec4899" }}
          >
            Get in Touch
          </Link>
        </nav>
      </div>
    </details>
  );
}
