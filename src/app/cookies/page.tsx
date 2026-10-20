import { Metadata } from "next";
import Link from "next/link";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { businessInfo } from "@/data/businessInfo";
import { ArrowLeft, AlertCircle, Cookie } from "lucide-react";

export const metadata: Metadata = {
  title: "Cookie Policy (Draft) | Efflorescence Florist",
  description: "Draft cookie policy explaining session and performance cookies used on Efflorescence Ltd.",
};

export default function CookiesPage() {
  return (
    <div id="top" className="min-h-screen flex flex-col bg-white text-[#1A1A1A]">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1 py-10 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Navigation */}
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-[#8E8A85] hover:text-[#1F2E24] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
            </Link>
          </div>

          {/* Draft Notice Banner */}
          <div className="p-4 rounded-2xl bg-[#FFF8EE] border border-[#F0D5B5] flex items-start gap-3 mb-8">
            <AlertCircle className="w-5 h-5 text-[#B87A2B] shrink-0 mt-0.5" />
            <div className="text-xs text-[#7A501B] space-y-1">
              <span className="font-semibold uppercase tracking-wider block">
                Draft — Pending Client Approval
              </span>
              <p className="font-light leading-relaxed">
                This document is a placeholder draft prepared for {businessInfo.name}. Final cookie disclosures will be updated upon client review.
              </p>
            </div>
          </div>

          {/* Editorial Title */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-[#8A9A86] font-semibold mb-2">
              <Cookie className="w-3.5 h-3.5 text-[#C48273]" /> Cookie Disclosure
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl text-[#1F2E24] font-light tracking-tight mb-3">
              Cookie Policy
            </h1>
            <p className="text-xs text-[#8E8A85]">
              Last updated: October 2026 · Efflorescence Ltd · Barrow-in-Furness, Cumbria
            </p>
          </div>

          {/* Legal Clauses */}
          <div className="prose prose-sm max-w-none text-[#5C5855] font-light space-y-8 leading-relaxed text-xs sm:text-sm">
            <section className="space-y-2">
              <h2 className="font-serif text-lg text-[#1F2E24] font-medium">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files stored on your browser or device when you browse websites. They help websites remember your preferences, filter choices, and enhance navigation speed.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg text-[#1F2E24] font-medium">2. Types of Cookies We Use</h2>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  <strong>Essential Technical Cookies:</strong> Necessary for site navigation, security, and remembering filter choices while browsing bouquets.
                </li>
                <li>
                  <strong>Performance &amp; Analytics:</strong> Anonymous usage metrics to understand which floral collections are most viewed by Cumbria visitors.
                </li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg text-[#1F2E24] font-medium">3. Controlling Your Cookies</h2>
              <p>
                You can configure your browser settings to decline or clear cookies at any time. For questions regarding our cookie practices, reach our studio at {businessInfo.contact.email}.
              </p>
            </section>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
