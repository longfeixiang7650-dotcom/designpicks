"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a design tool?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Design tools are software applications used to create visual content for digital and print media. They range from vector graphic editors like Adobe Illustrator and Figma to raster-based tools like Adobe Photoshop, 3D modeling software like Blender, and prototyping tools like Sketch. Design tools help professionals create everything from logos and websites to animations and product interfaces.",
      },
    },
    {
      "@type": "Question",
      name: "How do you choose the right design tool for your project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Choosing the right design tool involves defining your creative needs, considering your workflow, evaluating features, reading user reviews, testing with free trials, and assessing compatibility with your existing tools. Always prioritize tools that match your specific design discipline and skill level rather than getting distracted by feature overload.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between vector and raster design tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vector design tools use mathematical paths for scalable graphics while raster tools use pixels for detailed images. This is a fundamental distinction in design software that affects how you create and export your work. and prioritizes user experience, ease of use, and personal productivity. Vector tools excel at scalable graphics like logos, while raster tools are better for detailed images like photographs.",
      },
    },
    {
      "@type": "Question",
      name: "How much should a designer spend on design software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Design software costs vary widely. Free tools like GIMP, Inkscape, and DaVinci Resolve offer powerful capabilities at no cost. Professional tools like Adobe Creative Cloud cost $55-$80/month for the full suite, while individual apps range from $10-$25/month. Perpetual licenses like Affinity Suite at $170 total offer cost-effective alternatives. Many designers start with free tools and upgrade as their needs grow.",
      },
    },
    {
      "@type": "Question",
      name: "What are the most popular design tool categories?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most popular design tool categories include Graphic Design (vector and raster), UI/UX Design, Prototyping, 3D Modeling & Animation, Motion Graphics, Video Editing, Photo Editing, Digital Painting, Typography, Brand Design, and AI-powered design tools. Each category includes multiple platforms with varying feature sets, pricing models, and learning curves.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between free and paid design tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Free and paid design tools differ in features, support, and cost. Free tools like GIMP, Inkscape, DaVinci Resolve, and Krita offer powerful capabilities at no cost, making them ideal for beginners and budget-conscious designers. Paid tools like Adobe Creative Cloud, Figma, and Sketch offer advanced features, dedicated support, cloud collaboration, and regular updates. Most designers start with free tools to learn the basics, then upgrade to paid tools as their professional needs grow.",
      },
    },
    {
      "@type": "Question",
      name: "How do design tool pricing models work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Design tool pricing models generally fall into three categories: subscription-based (monthly/yearly fees like Adobe Creative Cloud at $55/mo), perpetual license (one-time purchase like Affinity Suite at $170), and freemium (free core features with paid upgrades like Canva Pro). Some tools also offer tiered plans based on features and team size. Annual subscriptions typically offer 15-20% savings over monthly billing.",
      },
    },
    {
      "@type": "Question",
      name: "What is a design tool marketplace?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A design tool marketplace is a platform where designers can discover, compare, and access creative software and resources. Examples include Adobe Exchange, Figma Community, Sketch Community, and Envato Market. These platforms aggregate plugins, templates, tutorials, and extensions to help designers enhance their workflows and find the right tools for their projects.",
      },
    },
    {
      "@type": "Question",
      name: "How important are integrations when choosing design tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Integrations are extremely important when choosing design tools. A tool that does not integrate with your existing workflow creates friction and manual workarounds. Look for tools that offer native integrations with popular platforms, support plugins and extensions, and have an active community.",
      },
    },
    {
      "@type": "Question",
      name: "What should I look for in a design tool license?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Key items to review in a design tool license include usage rights (commercial vs personal), number of seats/users, installation limits (single vs multiple devices), cloud storage allocation, offline access capabilities, upgrade policies, cancellation terms for subscriptions, and data ownership for cloud-based projects. Always check the license agreement before committing to a paid plan.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started with a new design tool?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Getting started with a new design tool typically involves account creation, choosing a plan (free trial or paid), downloading or accessing the software, following tutorials or onboarding guides, exploring templates, and connecting with the community. Most professional tools offer interactive tutorials, video courses, documentation, and community forums to help new users get up to speed quickly.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between free trial and freemium?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A free trial gives you full access to premium features for a limited time (typically 7–30 days), after which you must subscribe. Freemium offers a permanently free version with limited features, designed to upsell you to paid plans when you need more functionality. Free trials are better for evaluating full capabilities, while freemium is good for long-term testing at no cost.",
      },
    },
    {
      "@type": "Question",
      name: "Are cloud-based design tools secure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Reputable cloud-based design tools implement encryption at rest and in transit, SOC 2 Type II audits, GDPR compliance, regular security testing, multi-factor authentication (MFA), and data backup procedures. Cloud design platforms like Figma, Adobe Creative Cloud, and Canva invest heavily in security.",
      },
    },
    {
      "@type": "Question",
      name: "Can I try design tools before purchasing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, most design tools offer free trials typically lasting 7 to 30 days, giving you full access to premium features to evaluate the tool. Some tools like Figma and Canva offer permanent free tiers with limited features, while others like Adobe Creative Cloud provide a 7-day free trial of the full suite. We recommend trying at least 2-3 tools before making a decision.",
      },
    },
    {
      "@type": "Question",
      name: "Should I use multiple design tools or one all-in-one suite?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on your workflow and budget. All-in-one suites like Adobe Creative Cloud provide seamless integration between apps and consistent interfaces, but cost $55-$80/month. Using specialized tools for each task (e.g., Figma for UI, Blender for 3D, DaVinci for video) lets you choose best-in-class tools for each discipline, though integration between different tools may require manual workarounds or third-party plugins.",
      },
    },
    {
      "@type": "Question",
      name: "How do I manage multiple design tool subscriptions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Managing multiple design tool subscriptions requires tracking renewal dates, understanding overlapping features, and evaluating actual usage. Create a list of tools you actively use, review subscriptions quarterly, cancel unused ones, and look for suite deals that bundle tools at a discount. Tools like Adobe Creative Cloud offer significant savings when subscribing to multiple apps versus individual purchases.",
      },
    },
    {
      "@type": "Question",
      name: "How do design tool reviews and ratings work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Design tool reviews are collected from platforms like G2, Capterra, and TrustRadius, as well as community forums like Reddit and Designer News. Users submit star ratings (1-5) and detailed feedback covering ease of use, features, performance, value for money, and customer support. Look for review patterns rather than outliers, and pay attention to reviews from users in your specific design discipline and experience level.",
      },
    },
    {
      "@type": "Question",
      name: "What is the future of design tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The future of design tools is being shaped by AI-powered features (generative design, automated layout, smart object removal), real-time collaboration (multi-player editing like Figma), browser-based tools (reducing need for powerful hardware), vector and 3D integration, and improved interoperability between different tools through open standards. AI is increasingly assisting designers with repetitive tasks while creative direction remains human-led.",
      },
    },
  ],
};

const FAQ_ITEMS = [
  {
    question: "What is a design tool?",
    answer:
      "Design tools are software applications used to create visual content for digital and print media. They range from vector graphic editors like Adobe Illustrator and Figma to raster-based tools like Adobe Photoshop, 3D modeling software like Blender, and prototyping tools like Sketch. Design tools help professionals create everything from logos and websites to animations and product interfaces.",
  },
  {
    question: "How do you choose the right design tool for your project?",
    answer:
      "Choosing the right design tool involves defining your creative needs, considering your workflow, evaluating features, reading user reviews, testing with free trials, and assessing compatibility with your existing tools. Always prioritize tools that match your specific design discipline and skill level rather than getting distracted by feature overload.",
  },
  {
    question: "What is the difference between vector and raster design tools?",
    answer:
      "Vector design tools use mathematical paths for scalable graphics while raster tools use pixels for detailed images. This is a fundamental distinction in design software that affects how you create and export your work. and prioritizes user experience, ease of use, and personal productivity. Vector tools excel at scalable graphics like logos, while raster tools are better for detailed images like photographs.",
  },
  {
    question: "How much should a designer spend on design software?",
    answer:
      "Design software costs vary widely. Free tools like GIMP, Inkscape, and DaVinci Resolve offer powerful capabilities at no cost. Professional tools like Adobe Creative Cloud cost $55-$80/month for the full suite, while individual apps range from $10-$25/month. Perpetual licenses like Affinity Suite at $170 total offer cost-effective alternatives. Many designers start with free tools and upgrade as their needs grow.",
  },
  {
    question: "What are the most popular design tool categories?",
    answer:
      "The most popular design tool categories include Graphic Design (vector and raster), UI/UX Design, Prototyping, 3D Modeling & Animation, Motion Graphics, Video Editing, Photo Editing, Digital Painting, Typography, Brand Design, and AI-powered design tools. Each category includes multiple platforms with varying feature sets, pricing models, and learning curves.",
  },
  {
    question: "What is the difference between free and paid design tools?",
    answer:
      "Free and paid design tools differ in features, support, and cost. Free tools like GIMP, Inkscape, DaVinci Resolve, and Krita offer powerful capabilities at no cost, making them ideal for beginners and budget-conscious designers. Paid tools like Adobe Creative Cloud, Figma, and Sketch offer advanced features, dedicated support, cloud collaboration, and regular updates. Most designers start with free tools to learn the basics, then upgrade to paid tools as their professional needs grow.",
  },
  {
    question: "How do design tool pricing models work?",
    answer:
      "Design tool pricing models generally fall into three categories: subscription-based (monthly/yearly fees like Adobe Creative Cloud at $55/mo), perpetual license (one-time purchase like Affinity Suite at $170), and freemium (free core features with paid upgrades like Canva Pro). Some tools also offer tiered plans based on features and team size. Annual subscriptions typically offer 15-20% savings over monthly billing.",
  },
  {
    question: "What is a design tool marketplace?",
    answer:
      "A design tool marketplace is a platform where designers can discover, compare, and access creative software and resources. Examples include Adobe Exchange, Figma Community, Sketch Community, and Envato Market. These platforms aggregate plugins, templates, tutorials, and extensions to help designers enhance their workflows and find the right tools for their projects.",
  },
  {
    question: "How important are integrations when choosing design tools?",
    answer:
      "Integrations are extremely important when choosing design tools. A tool that does not integrate with your existing workflow creates friction and manual workarounds. Look for tools that offer native integrations with popular platforms, support plugins and extensions, and have an active community.",
  },
  {
    question: "What should I look for in a design tool license?",
    answer:
      "Key items to review in a design tool license include usage rights (commercial vs personal), number of seats/users, installation limits (single vs multiple devices), cloud storage allocation, offline access capabilities, upgrade policies, cancellation terms for subscriptions, and data ownership for cloud-based projects. Always check the license agreement before committing to a paid plan.",
  },
  {
    question: "How do I get started with a new design tool?",
    answer:
      "Getting started with a new design tool typically involves account creation, choosing a plan (free trial or paid), downloading or accessing the software, following tutorials or onboarding guides, exploring templates, and connecting with the community. Most professional tools offer interactive tutorials, video courses, documentation, and community forums to help new users get up to speed quickly.",
  },
  {
    question: "What is the difference between free trial and freemium?",
    answer:
      "A free trial gives you full access to premium features for a limited time (typically 7–30 days), after which you must subscribe. Freemium offers a permanently free version with limited features, designed to upsell you to paid plans when you need more functionality. Free trials are better for evaluating full capabilities, while freemium is good for long-term testing at no cost.",
  },
  {
    question: "Are cloud-based design tools secure?",
    answer:
      "Reputable cloud-based design tools implement encryption at rest and in transit, SOC 2 Type II audits, GDPR compliance, regular security testing, multi-factor authentication (MFA), and data backup procedures. Cloud design platforms like Figma, Adobe Creative Cloud, and Canva invest heavily in security.",
  },
  {
    question: "Can I try design tools before purchasing?",
    answer:
      "Yes, most design tools offer free trials typically lasting 7 to 30 days, giving you full access to premium features to evaluate the tool. Some tools like Figma and Canva offer permanent free tiers with limited features, while others like Adobe Creative Cloud provide a 7-day free trial of the full suite. We recommend trying at least 2-3 tools before making a decision.",
  },
  {
    question: "Should I use multiple design tools or one all-in-one suite?",
    answer:
      "It depends on your workflow and budget. All-in-one suites like Adobe Creative Cloud provide seamless integration between apps and consistent interfaces, but cost $55-$80/month. Using specialized tools for each task (e.g., Figma for UI, Blender for 3D, DaVinci for video) lets you choose best-in-class tools for each discipline, though integration between different tools may require manual workarounds or third-party plugins.",
  },
  {
    question: "How do I manage multiple design tool subscriptions?",
    answer:
      "Managing multiple design tool subscriptions requires tracking renewal dates, understanding overlapping features, and evaluating actual usage. Create a list of tools you actively use, review subscriptions quarterly, cancel unused ones, and look for suite deals that bundle tools at a discount. Tools like Adobe Creative Cloud offer significant savings when subscribing to multiple apps versus individual purchases.",
  },
  {
    question: "How do design tool reviews and ratings work?",
    answer:
      "Design tool reviews are collected from platforms like G2, Capterra, and TrustRadius, as well as community forums like Reddit and Designer News. Users submit star ratings (1-5) and detailed feedback covering ease of use, features, performance, value for money, and customer support. Look for review patterns rather than outliers, and pay attention to reviews from users in your specific design discipline and experience level.",
  },
  {
    question: "What is the future of design tools?",
    answer:
      "The future of design tools is being shaped by AI-powered features (generative design, automated layout, smart object removal), real-time collaboration (multi-player editing like Figma), browser-based tools (reducing need for powerful hardware), vector and 3D integration, and improved interoperability between different tools through open standards. AI is increasingly assisting designers with repetitive tasks while creative direction remains human-led.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <div className="relative pt-32 pb-20 px-6">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#3B82F6] bg-[#162440] px-3 py-1.5 rounded-md mb-4">
              FAQ
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#F0F4F8] tracking-tight mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-[#8BA3BE] max-w-xl mx-auto leading-relaxed">
              Everything you need to know about design tools — from choosing the right
              software to understanding pricing, features, and industry trends.
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, index) => (
              <div
                key={index}
                className="bg-[#0F1D32] border border-[#1E3A5F] rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-[#162440] transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-[#F0F4F8] font-medium pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#3B82F6] flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 pb-5 text-[#8BA3BE] leading-relaxed text-sm border-t border-[#1E3A5F] pt-4">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[#8BA3BE] text-sm">
              Still have questions?{" "}
              <a
                href="/contact"
                className="text-[#3B82F6] hover:underline font-medium"
              >
                Contact our team
              </a>{" "}
              and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
