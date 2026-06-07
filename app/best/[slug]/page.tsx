import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Star,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  DollarSign,
  ChevronRight,
  Sparkles,
  HelpCircle,
} from "lucide-react";
import { ALL_TOOLS } from "@/data/tools";

const ALL_CATEGORIES = Array.from(new Set(ALL_TOOLS.map((t) => t.category)));

function slugify(category: string) {
  return category.toLowerCase().replace(/\s+/g, "-");
}

function deslugify(slug: string): string | undefined {
  return ALL_CATEGORIES.find((c) => slugify(c) === slug);
}

const BUYING_GUIDES: Record<string, string> = {
  "Graphic Design":
    "When choosing a graphic design tool, consider your primary output medium (print vs digital), preferred workflow (vector vs raster), and budget. Adobe Illustrator remains the industry standard for vector graphics with unmatched precision tools, while Affinity Designer offers a compelling one-time purchase alternative. For raster work, Adobe Photoshop leads for photo manipulation and digital painting, with Pixelmator Pro and Affinity Photo as cost-effective alternatives. Consider the learning curve, file format compatibility, and integration with other tools in your pipeline.",
  "UI/UX Design":
    "The best UI/UX design tool depends on your team structure and workflow preferences. Figma leads the market with real-time collaboration, browser-based access, and a vast plugin ecosystem. Sketch remains popular for Mac-based teams with its mature symbol system. Framer excels for interactive prototypes with code-level control. Key factors include collaboration features, prototyping fidelity, design system support, developer handoff capabilities, and community resources for templates and components.",
  "3D & Motion":
    "Evaluate 3D & motion design tools based on your specific discipline. Blender offers a powerful free option with modeling, sculpting, animation, and rendering in one package. Cinema 4D is favored by motion designers for its intuitive workflow and MoGraph tools. Autodesk Maya remains the industry standard for character animation and visual effects. Consider rendering engine support (GPU vs CPU), learning resources, plugin availability, and compatibility with your production pipeline.",
  Prototyping:
    "Prototyping tools vary from low-fidelity wireframing to high-fidelity interactive simulations. Figma and Sketch serve as both design and prototyping tools with built-in interactions. For dedicated high-fidelity prototyping with complex animations and conditional logic, tools like ProtoPie, Principle, and Axure RP offer advanced capabilities. InVision provides excellent stakeholder feedback and handoff features. Consider how well the tool simulates real user interactions and integrates with your design-to-development workflow.",
  "Design Resources":
    "Choosing design resource platforms depends on the type of assets you need. Envato Elements offers the broadest library with unlimited downloads of fonts, templates, graphics, and stock media for a flat subscription fee. Creative Market excels for premium, handcrafted design assets sold individually. For stock photography, Shutterstock and Unsplash offer different trade-offs between quality and cost. Consider licensing terms, search functionality, file formats offered, and whether the platform integrates with your design tools.",
};

const FAQS: Record<string, { q: string; a: string }[]> = {
  "Graphic Design": [
    {
      q: "What's the best graphic design software for beginners?",
      a: "For beginners, Canva offers the easiest learning curve with drag-and-drop templates and a free tier. GIMP and Inkscape are excellent free open-source alternatives that provide professional-grade capabilities. Affinity Designer and Affinity Photo offer a middle ground with one-time purchases and a gentler learning curve than Adobe products.",
    },
    {
      q: "Is Adobe Creative Cloud worth the subscription cost?",
      a: "Adobe Creative Cloud is worth it for professionals who need the full ecosystem of industry-standard tools, seamless integration between apps, and consistent updates. The Photography Plan ($10/mo) offers excellent value for Photoshop + Lightroom. The All Apps plan ($55/mo) is best for multidisciplinary designers who use multiple Adobe tools regularly.",
    },
    {
      q: "Vector vs raster -- which graphic design tool should I choose?",
      a: "Choose vector tools (Illustrator, Affinity Designer, CorelDRAW, Inkscape) for logos, icons, typography, and any artwork that needs to scale to any size without losing quality. Choose raster tools (Photoshop, Affinity Photo, GIMP, Procreate) for photo editing, digital painting, textures, and detailed image manipulation. Most professional designers use both types.",
    },
  ],
  "UI/UX Design": [
    {
      q: "Which is better for UI design -- Figma or Sketch?",
      a: "Figma is generally the better choice for most teams today due to its browser-based platform (works on Windows, Mac, Linux), real-time multiplayer collaboration, and generous free tier. Sketch remains excellent for Mac-only teams who prefer its native speed and offline performance, but its collaboration features require additional subscriptions.",
    },
    {
      q: "What are the essential features of a good UI/UX design tool?",
      a: "Essential features include vector editing with boolean operations, reusable component systems with auto-layout, prototyping with transitions and animations, developer handoff with inspect mode, version history, design system management, real-time collaboration, and a robust plugin ecosystem for extending functionality.",
    },
    {
      q: "Do I need coding skills to use UI/UX design tools?",
      a: "No, most modern UI/UX tools are designed for visual designers without coding skills. Figma, Sketch, and Adobe XD all use visual interfaces for designing interfaces and creating interactive prototypes. However, basic knowledge of HTML, CSS, and responsive design principles helps you create more developer-friendly designs.",
    },
  ],
  "3D & Motion": [
    {
      q: "What's the best free 3D modeling software?",
      a: "Blender is by far the best free 3D modeling software, offering a complete pipeline including modeling, sculpting, texturing, rigging, animation, simulation, rendering, and compositing -- all in one package. It's competitive with paid tools like Maya and Cinema 4D, with an active community and extensive learning resources.",
    },
    {
      q: "Should I learn Blender or Cinema 4D for motion design?",
      a: "Cinema 4D is the industry standard for motion design with its intuitive MoGraph toolset, seamless After Effects integration, and artist-friendly workflow. Blender is an excellent free alternative with a steeper learning curve but more capabilities overall. Choose Cinema 4D if you're pursuing professional motion design work; choose Blender if budget is a primary concern.",
    },
    {
      q: "What hardware do I need for 3D design and rendering?",
      a: "3D design benefits greatly from a powerful GPU (NVIDIA RTX 3060 or better), at least 16GB RAM (32GB recommended), and a fast multi-core CPU. For GPU rendering, NVIDIA cards with CUDA support are preferred. Consider a dedicated SSD for project files and cache. Cloud rendering services like RebusFarm or Sheepit can supplement local hardware for complex projects.",
    },
  ],
  Prototyping: [
    {
      q: "What's the difference between low-fi and hi-fi prototyping?",
      a: "Low-fidelity prototypes (Balsamiq, pen and paper) focus on layout and flow using simple wireframes without visual design -- ideal for early ideation and usability testing. High-fidelity prototypes (Figma, ProtoPie, Principle) include realistic visuals, animations, and interactions -- better for stakeholder presentations and detailed user testing before development.",
    },
    {
      q: "How do I choose between prototyping tools?",
      a: "Choose based on your prototyping fidelity needs. For simple click-through wireframes, tools like Balsamiq and Marvel work well. For complex interactions with conditional logic and variables, ProtoPie and Axure RP lead the market. For full-featured design-to-prototype workflows, Figma and Sketch offer built-in prototyping that's sufficient for most UX projects.",
    },
    {
      q: "Can prototyping tools generate code?",
      a: "Some prototyping tools offer code generation features. Figma can export CSS, Swift, and Android XML through plugins. UXPin Merge allows using production React components directly. Axure RP generates HTML specifications. However, auto-generated code typically requires manual refinement -- it's best used as a reference rather than production-ready output.",
    },
  ],
  "Design Resources": [
    {
      q: "Which design resource subscription offers the best value?",
      a: "Envato Elements at $33/month offers exceptional value with unlimited downloads of fonts, graphics, templates, stock photos, video, and audio across a huge library. Creative Market varies by purchase but offers higher-quality curated assets. Freepik Premium ($9.99/month) is budget-friendly for vector graphics and templates.",
    },
    {
      q: "Are free design resources good enough for commercial projects?",
      a: "Yes, many free design resources are suitable for commercial projects, but always check the license. Unsplash, Pexels, and Pixabay offer free stock photos with generous commercial licenses. Google Fonts and Font Squirrel provide free commercial-use typefaces. However, for unique brand assets, investing in premium resources often provides better quality and exclusivity.",
    },
    {
      q: "How do I find design resources that integrate with my tools?",
      a: "Look for platforms that offer direct integrations and plugins for your design tools. Adobe Creative Cloud has built-in marketplace access. Figma Community has thousands of free UI kits and components. Envato Elements has plugins for Adobe tools and WordPress. Many resource platforms also offer Figma and Sketch file formats natively.",
    },
  ],
};

function getDefaultBuyingGuide(category: string): string {
  return `When evaluating ${category.toLowerCase()} tools, consider your specific use case, experience level, budget, and required integrations. Key evaluation criteria include feature completeness, ease of use, learning curve, customer support quality, and total cost of ownership. Always take advantage of free trials to test the tool with your actual workflow before committing.`;
}

function getDefaultFAQs(category: string): { q: string; a: string }[] {
  return [
    {
      q: `What is the best ${category.toLowerCase()} tool?`,
      a: `The best ${category.toLowerCase()} tool depends on your specific needs. Our rankings are based on verified user reviews, feature analysis, and expert evaluation. Compare the top-rated options above to find the best fit for your workflow.`,
    },
    {
      q: `How much does ${category.toLowerCase()} cost?`,
      a: `Pricing varies widely from free tiers to premium subscriptions. Most ${category.toLowerCase()} tools offer monthly or annual subscriptions, one-time purchases, or free tiers with paid upgrades. See individual tool pages for detailed pricing information.`,
    },
    {
      q: `What features should I look for in ${category.toLowerCase()}?`,
      a: `Essential features include core functionality specific to ${category.toLowerCase()} use cases, integration with your existing tools, ease of learning, community support and documentation, cross-platform availability, and regular updates with new features.`,
    },
  ];
}

export function generateStaticParams() {
  return ALL_CATEGORIES.map((cat) => ({
    slug: slugify(cat),
  }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const category = deslugify(params.slug);
  if (!category) {
    return { title: "Category Not Found" };
  }
  const tools = ALL_TOOLS.filter((t) => t.category === category).sort(
    (a, b) => b.rating - a.rating
  );
  return {
    title: `Best ${category} Tools in 2026 — Top ${Math.min(tools.length, 10)} Picks Compared`,
    description: `Discover the best ${category.toLowerCase()} tools in 2026. Compare top-rated platforms with verified reviews, pricing breakdowns, and expert recommendations. Find the perfect ${category.toLowerCase()} tool for your projects.`,
    keywords: [
      `best ${category.toLowerCase()} software 2026`,
      `top ${category.toLowerCase()} tools`,
      `${category.toLowerCase()} comparison`,
      `${category.toLowerCase()} reviews`,
      `best ${category.toLowerCase()} platforms`,
    ],
    openGraph: {
      title: `Best ${category} Tools in 2026 — Top Picks & Comparison`,
      description: `Find the best ${category.toLowerCase()} tools for your workflow. Expert comparisons, verified reviews, and detailed pricing for ${tools.length} leading ${category.toLowerCase()} platforms.`,
    },
  };
}

export default function BestCategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const category = deslugify(params.slug);
  if (!category) {
    notFound();
  }

  const tools = ALL_TOOLS.filter((t) => t.category === category).sort(
    (a, b) => b.rating - a.rating
  );
  const topTool = tools[0];
  const buyingGuide = BUYING_GUIDES[category] || getDefaultBuyingGuide(category);
  const faqs = FAQS[category] || getDefaultFAQs(category);

  return (
    <div className="relative pt-28 pb-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <nav className="flex items-center gap-2 text-sm text-[#4A6380] mb-8">
          <Link href="/" className="hover:text-[#3B82F6] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link
            href={`/category/${params.slug}`}
            className="hover:text-[#3B82F6] transition-colors"
          >
            {category}
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#8BA3BE]">Best {category} 2026</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#3B82F6]/20 to-[#22D3EE]/20 flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-[#22D3EE]" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#F0F4F8] tracking-tight">
                Best {category} Software in 2026
              </h1>
              <p className="text-base text-[#8BA3BE] mt-1">
                Our expert picks for the top{" "}
                {tools.length > 10 ? "10" : tools.length} {category.toLowerCase()}{" "}
                platforms — compared with ratings, pricing, and key features.
              </p>
            </div>
          </div>

          {topTool && (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#162440] border border-[#F59E0B]/30 rounded-full text-sm text-[#F59E0B]">
              <Star className="w-4 h-4 fill-[#F59E0B]" />
              Top Pick:{" "}
              <Link
                href={`/tools/${topTool.id}`}
                className="font-bold hover:text-[#F0F4F8] transition-colors underline underline-offset-2"
              >
                {topTool.name}
              </Link>
              <span className="text-[#4A6380]">— {topTool.rating}/5</span>
            </div>
          )}
        </header>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-[#F0F4F8] mb-6 flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-[#3B82F6]" />
            Head-to-Head Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[#1E3A5F]">
                  <th className="text-left py-3 px-4 text-[#8BA3BE] font-semibold">
                    Tool
                  </th>
                  <th className="text-left py-3 px-4 text-[#8BA3BE] font-semibold">
                    Rating
                  </th>
                  <th className="text-left py-3 px-4 text-[#8BA3BE] font-semibold hidden md:table-cell">
                    Pricing
                  </th>
                  <th className="text-left py-3 px-4 text-[#8BA3BE] font-semibold hidden lg:table-cell">
                    Reviews
                  </th>
                  <th className="text-right py-3 px-4 text-[#8BA3BE] font-semibold">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {tools.slice(0, 10).map((tool, idx) => {
                  const Icon = tool.icon;
                  return (
                    <tr
                      key={tool.id}
                      className="border-b border-[#1E3A5F]/60 hover:bg-[#0F1D32]/80 transition-colors"
                    >
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-[#162440] flex items-center justify-center shrink-0">
                            <Icon className="w-4 h-4 text-[#3B82F6]" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-[#F0F4F8] whitespace-nowrap">
                                {tool.name}
                              </span>
                              {idx === 0 && (
                                <span className="text-[10px] font-bold bg-[#F59E0B]/20 text-[#F59E0B] px-1.5 py-0.5 rounded">
                                  #1
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" />
                          <span className="font-bold text-[#F0F4F8]">
                            {tool.rating}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-[#8BA3BE] hidden md:table-cell">
                        <div className="flex items-center gap-1">
                          <DollarSign className="w-3.5 h-3.5 text-[#22D3EE]" />
                          <span>{tool.pricing}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-[#4A6380] hidden lg:table-cell">
                        {tool.reviewCount.toLocaleString()}
                      </td>
                      <td className="py-4 px-4 text-right">
                        <Link
                          href={`/tools/${tool.id}`}
                          className="inline-flex items-center gap-1 text-[#3B82F6] hover:text-[#22D3EE] transition-colors text-xs font-semibold"
                        >
                          Review <ArrowRight className="w-3 h-3" />
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-[#F0F4F8] mb-6">
            Detailed Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.slice(0, 6).map((tool, idx) => {
              const Icon = tool.icon;
              return (
                <Link
                  href={`/tools/${tool.id}`}
                  key={tool.id}
                  className="group bg-[#0F1D32] border border-[#1E3A5F] rounded-xl p-6 card-hover"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-lg bg-[#162440] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-[#3B82F6]" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#F59E0B] flex items-center justify-center text-[10px] font-bold text-black">
                        #{idx + 1}
                      </div>
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
                  <p className="text-sm text-[#8BA3BE] leading-relaxed line-clamp-2 mb-3">
                    {tool.description}
                  </p>
                  <div className="text-xs text-[#22D3EE] font-medium mb-3">
                    {tool.pricing}
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-[#1E3A5F]">
                    <span className="text-xs text-[#4A6380] capitalize">
                      Best for: {tool.useCase.split(".")[0].slice(0, 50)}...
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="mb-14">
          <div className="bg-[#0F1D32] border border-[#1E3A5F] rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-[#F0F4F8] mb-4 flex items-center gap-2">
              <ArrowRight className="w-6 h-6 text-[#3B82F6]" />
              {category} Software Buying Guide
            </h2>
            <p className="text-[#8BA3BE] leading-relaxed text-base">
              {buyingGuide}
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-[#F0F4F8] mb-6 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-[#3B82F6]" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="bg-[#0F1D32] border border-[#1E3A5F] rounded-xl group"
              >
                <summary className="px-6 py-4 cursor-pointer text-[#F0F4F8] font-semibold text-sm flex items-center justify-between group-open:text-[#22D3EE] transition-colors">
                  {faq.q}
                  <ChevronRight className="w-4 h-4 text-[#4A6380] group-open:rotate-90 transition-transform shrink-0 ml-4" />
                </summary>
                <div className="px-6 pb-4 text-sm text-[#8BA3BE] leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#162440] to-[#0F1D32] border border-[#1E3A5F] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-[#F0F4F8] mb-2">
              Ready to find your perfect {category.toLowerCase()} tool?
            </h2>
            <p className="text-[#8BA3BE] text-sm">
              Browse all {tools.length} {category.toLowerCase()} solutions or dive into detailed reviews.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/category/${params.slug}`}
              className="px-6 py-3 bg-[#0F1D32] border border-[#1E3A5F] text-[#F0F4F8] text-sm font-medium rounded-full hover:border-[#2A5080] transition-colors"
            >
              View All {category} Tools
            </Link>
            {topTool && (
              <Link
                href={`/tools/${topTool.id}`}
                className="px-6 py-3 bg-[#3B82F6] hover:bg-[#2563EB] text-white text-sm font-medium rounded-full transition-colors"
              >
                Read {topTool.name} Review
              </Link>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
