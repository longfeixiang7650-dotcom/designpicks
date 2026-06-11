"use client";

import { useState } from "react";
import { Mail, MapPin, Send, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-24 pb-20 px-6 bg-pink-bg">
      <div className="max-w-[900px] mx-auto">
        <div className="text-center mb-12">
          <span
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-white px-3 py-1.5 rounded-full mb-4"
            style={{ backgroundColor: "#ec4899" }}
          >
            Let&apos;s Talk
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-3">
            Get in Touch
          </h1>
          <p className="text-base text-gray-500 max-w-lg mx-auto">
            Have a project in mind or just want to say hello? We&apos;d love
            to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="card p-6 md:p-8">
              <h2 className="text-lg font-bold text-gray-900 mb-6">
                Tell Us About Your Project
              </h2>

              {submitted ? (
                <div
                  className="rounded-xl p-6 text-center"
                  style={{ backgroundColor: "#fdf2f8" }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                    style={{ backgroundColor: "#ec4899" }}
                  >
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-900 font-semibold text-lg mb-1">
                    Message Sent!
                  </p>
                  <p className="text-gray-500 text-sm">
                    Thanks for reaching out. We&apos;ll get back to you within 48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:border-pink focus:outline-none focus:ring-2 focus:ring-pink/10 transition-all text-sm"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:border-pink focus:outline-none focus:ring-2 focus:ring-pink/10 transition-all text-sm"
                        placeholder="jane@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Project Type
                    </label>
                    <select
                      value={formData.project}
                      onChange={(e) =>
                        setFormData({ ...formData, project: e.target.value })
                      }
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 focus:border-pink focus:outline-none focus:ring-2 focus:ring-pink/10 transition-all text-sm"
                    >
                      <option value="">Select a project type...</option>
                      <option value="web-app">Web Application</option>
                      <option value="mobile-app">Mobile App</option>
                      <option value="design-system">Design System</option>
                      <option value="branding">Branding / Identity</option>
                      <option value="ux-research">UX Research</option>
                      <option value="redesign">Redesign / Relaunch</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:border-pink focus:outline-none focus:ring-2 focus:ring-pink/10 transition-all text-sm resize-none"
                      placeholder="Tell us about your project, timeline, and budget..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 rounded-xl text-white font-medium text-sm transition-all hover:opacity-90 flex items-center justify-center gap-2"
                    style={{ backgroundColor: "#ec4899" }}
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-5">
            <div className="card p-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Mail className="w-4 h-4" style={{ color: "#ec4899" }} />
                Email
              </h3>
              <div className="space-y-2 text-sm text-gray-500">
                <p>
                  <a
                    href="mailto:hello@orbitframe.design"
                    className="hover:text-pink transition-colors"
                  >
                    hello@orbitframe.design
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:careers@orbitframe.design"
                    className="hover:text-pink transition-colors"
                  >
                    careers@orbitframe.design
                  </a>
                </p>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="w-4 h-4" style={{ color: "#ec4899" }} />
                Studio
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Wycker Brugstraat 28
                <br />
                6221 EC Maastricht
                <br />
                Netherlands
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <MessageSquare className="w-4 h-4" style={{ color: "#ec4899" }} />
                Response Time
              </h3>
              <p className="text-sm text-gray-500">
                We typically respond within{" "}
                <strong className="text-gray-900">48 hours</strong> during
                business days. For urgent inquiries, mention it in the subject line.
              </p>
            </div>

            <div
              className="rounded-xl p-6 text-center"
              style={{ backgroundColor: "#fdf2f8" }}
            >
              <p className="text-sm text-gray-600 font-medium">
                Prefer meeting in person?
              </p>
              <p className="text-xs text-gray-500 mt-1">
                We love coffee meetings at our Maastricht studio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
