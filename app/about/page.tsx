import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Users, Target, Palette, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Orbit Frame Studio",
  description:
    "Orbit Frame is a 6-person UI/UX design studio based in Maastricht, Netherlands. Meet the team behind the designs.",
};

const TEAM = [
  {
    name: "Zoey Lambert",
    role: "CEO & Creative Director",
    bio: "Zoey founded Orbit Frame in 2021 after a decade leading design teams at Philips and Deloitte Digital. She believes great design is a strategic advantage, not just decoration.",
    initials: "ZL",
  },
  {
    name: "Sven Sandberg",
    role: "CTO & Lead Engineer",
    bio: "Sven brings 12 years of full-stack and front-end engineering experience from Booking.com and Miro. He bridges the gap between design vision and technical reality.",
    initials: "SS",
  },
  {
    name: "Lena Visser",
    role: "Senior Product Designer",
    bio: "Lena specializes in UX research and information architecture. She previously designed for Rituals and spent two years at a design consultancy in Berlin.",
    initials: "LV",
  },
  {
    name: "Marcus de Jong",
    role: "UI Designer",
    bio: "Marcus is our visual design wizard. With a background in graphic design and motion, he brings interfaces to life with pixel-perfect detail.",
    initials: "MJ",
  },
  {
    name: "Eva Hendriks",
    role: "UX Researcher",
    bio: "Eva leads our user research practice. She holds a Master's in Cognitive Psychology from Maastricht University and ensures every decision is user-informed.",
    initials: "EH",
  },
  {
    name: "Noah Bakker",
    role: "Junior Designer",
    bio: "Noah joined us straight out of the Design Academy Eindhoven. He brings fresh perspectives and is our go-to for design system contributions.",
    initials: "NB",
  },
];

const VALUES = [
  {
    icon: Target,
    title: "User-Centered",
    desc: "Every pixel we push is grounded in real user needs. We research first, design second.",
  },
  {
    icon: Palette,
    title: "Craft Obsession",
    desc: "We sweat the details. Typography, spacing, micro-interactions — everything matters.",
  },
  {
    icon: Users,
    title: "Tight Collaboration",
    desc: "Six people, one orbit. We work as a unit, bringing diverse perspectives to every project.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 px-6 bg-pink-bg">
      <div className="max-w-[900px] mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <span
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-white px-3 py-1.5 rounded-full mb-4"
            style={{ backgroundColor: "#ec4899" }}
          >
            Our Story
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            We are{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink to-pink-dark">
              Orbit Frame
            </span>
          </h1>
          <p className="text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
            A 6-person UI/UX design studio based in Maastricht, Netherlands. 
            We partner with startups and scale-ups to design digital products 
            that people genuinely love to use.
          </p>
        </div>

        {/* Founding Story */}
        <div className="mb-16">
          <div
            className="rounded-2xl p-8 md:p-10"
            style={{ backgroundColor: "#fdf2f8" }}
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              How It Started
            </h2>
            <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
              <p>
                Orbit Frame was born in a small coworking space in Maastricht's 
                trendy Wyck district. Founder <strong>Zoey Lambert</strong> had 
                spent years leading design at large corporates and saw an 
                opportunity: a lean, highly specialized UI/UX studio that could 
                deliver enterprise-grade design without the bureaucracy.
              </p>
              <p>
                She teamed up with <strong>Sven Sandberg</strong>, a seasoned 
                front-end engineer who shared her belief that design and 
                engineering should be inseparable. Together they built the 
                core team — four more designers and researchers who each bring 
                a unique superpower.
              </p>
              <p>
                Today, Orbit Frame serves clients across Europe, from early-stage 
                startups to established companies. We've shipped products in 
                fintech, health, e-commerce, and SaaS — always with a focus on 
                clean, intuitive, human-centered design.
              </p>
            </div>
          </div>
        </div>

        {/* Studio Location */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <MapPin className="w-5 h-5" style={{ color: "#ec4899" }} />
            <h2 className="text-xl font-bold text-gray-900">Based in Maastricht</h2>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed max-w-2xl">
            Maastricht isn't just where we work — it's part of who we are. 
            The city's unique blend of history, culture, and innovation 
            inspires our approach to design. From our studio near the 
            Vrijthof square, we serve clients worldwide while enjoying 
            the best coffee in Limburg.
          </p>
        </div>

        {/* Team Grid */}
        <div className="mb-16">
          <h2 className="text-xl font-bold text-gray-900 mb-8 text-center">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="card p-6 hover:-translate-y-0.5 transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-sm font-bold text-white"
                    style={{ backgroundColor: "#ec4899" }}
                  >
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-xs font-medium" style={{ color: "#ec4899" }}>
                      {member.role}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-xl font-bold text-gray-900 mb-8 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {VALUES.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="card p-6 text-center hover:-translate-y-0.5 transition-all"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-3"
                    style={{ backgroundColor: "#fdf2f8" }}
                  >
                    <Icon className="w-5 h-5" style={{ color: "#ec4899" }} />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">{val.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl p-10 text-center"
          style={{ backgroundColor: "#fdf2f8" }}
        >
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Want to work together?
          </h2>
          <p className="text-sm text-gray-500 mb-6 max-w-md mx-auto">
            We'd love to hear about your project. Get in touch and let's 
            see if we're the right fit.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium text-sm transition-all hover:opacity-90"
            style={{ backgroundColor: "#ec4899" }}
          >
            Start a Conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
