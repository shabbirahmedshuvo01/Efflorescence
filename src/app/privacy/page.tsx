import { Metadata } from "next";
import Link from "next/link";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { businessInfo } from "@/data/businessInfo";
import { ArrowLeft, AlertCircle, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy (Draft) | Efflorescence Florist",
  description: "Draft privacy policy and customer data handling practices for Efflorescence Ltd, Barrow-in-Furness.",
};

export default function PrivacyPage() {
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
                This document is a placeholder draft prepared for {businessInfo.name}. Final privacy practices will be finalized upon full commercial deployment.
              </p>
            </div>
          </div>

          {/* Editorial Title */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-[#8A9A86] font-semibold mb-2">
              <Shield className="w-3.5 h-3.5 text-[#C48273]" /> Data Protection
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl text-[#1F2E24] font-light tracking-tight mb-3">
              Privacy Policy
            </h1>
            <p className="text-xs text-[#8E8A85]">
              Last updated: October 2026 · Efflorescence Ltd · Barrow-in-Furness, Cumbria
            </p>
          </div>

          {/* Legal Clauses */}
          <div className="prose prose-sm max-w-none text-[#5C5855] font-light space-y-8 leading-relaxed text-xs sm:text-sm">
            <section className="space-y-2">
              <h2 className="font-serif text-lg text-[#1F2E24] font-medium">1. Information We Collect</h2>
              <p>
                When you enquire about floral arrangements, wedding dates, or workshops through our website, we collect your name, contact email, telephone number, and recipient delivery address solely to fulfill your floral orders and respond to your messages.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg text-[#1F2E24] font-medium">2. Use of Information</h2>
              <p>
                We do not sell, rent, or trade your personal information. Information is strictly used by our florist studio to coordinate same-day deliveries, wedding consultations, and order confirmations.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg text-[#1F2E24] font-medium">3. Data Security &amp; Retention</h2>
              <p>
                We take all reasonable security measures to safeguard customer information. Delivery records are securely archived in accordance with UK accounting regulations and deleted when no longer required.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg text-[#1F2E24] font-medium">4. Contacting Our Data Controller</h2>
              <p>
                You have the right to request access to or erasure of your personal data. Please contact us at {businessInfo.contact.email} or write to our studio at {businessInfo.address.full}.
              </p>
            </section>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
