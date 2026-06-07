import type { Metadata } from "next";
import "./globals.css";
import Header from "./sections/Header";
import Footer from "./sections/Footer";
import CookieBanner from "./components/CookieBanner";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased font-sans">
        <div className="aurora-bg" />
        <div className="grid-pattern" />

        <Header />

        <main className="relative z-10">{children}</main>

        <Footer />

        <CookieBanner />
      </body>
    </html>
  );
}
