import { Metadata } from "next";
import Link from "next/link";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { businessInfo } from "@/data/businessInfo";
import { ArrowLeft, AlertCircle, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions (Draft) | Efflorescence Florist",
  description: "Draft terms and conditions for floral orders, bespoke weddings, and deliveries at Efflorescence Ltd, Barrow-in-Furness.",
};

export default function TermsPage() {
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
                This document is a placeholder draft prepared for {businessInfo.name} ({businessInfo.address.full}). Final terms will be updated upon formal client and legal sign-off.
              </p>
            </div>
          </div>

          {/* Editorial Title */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-[#8A9A86] font-semibold mb-2">
              <FileText className="w-3.5 h-3.5 text-[#C48273]" /> Legal Draft
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl text-[#1F2E24] font-light tracking-tight mb-3">
              Terms &amp; Conditions of Service
            </h1>
            <p className="text-xs text-[#8E8A85]">
              Last updated: October 2026 · Efflorescence Ltd · Barrow-in-Furness, Cumbria
            </p>
          </div>

          {/* Legal Clauses */}
          <div className="prose prose-sm max-w-none text-[#5C5855] font-light space-y-8 leading-relaxed text-xs sm:text-sm">
            <section className="space-y-2">
              <h2 className="font-serif text-lg text-[#1F2E24] font-medium">1. Studio Overview &amp; Orders</h2>
              <p>
                Efflorescence Ltd operates from {businessInfo.address.full}. All daily bouquet orders, wedding floristry contracts, and workshop bookings placed directly through our studio or website are subject to these terms.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg text-[#1F2E24] font-medium">2. Seasonal Stems &amp; Natural Substitution</h2>
              <p>
                Flowers are living, natural products subject to morning market availability and seasonal fluctuations. Whilst we strive to match designs shown in our catalog, our floral designers reserve the right to substitute stems with blooms of equal or higher value to guarantee peak freshness.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg text-[#1F2E24] font-medium">3. Local Delivery Policy</h2>
              <p>
                We provide local delivery across Barrow-in-Furness, Walney, Dalton, Ulverston, and the Furness peninsula. Orders for same-day delivery must be confirmed before 1:00 PM Tuesday to Friday. If the recipient is not at home upon delivery, items will be left in a sheltered location or with an adjacent neighbour, with a calling card left.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg text-[#1F2E24] font-medium">4. Wedding Bookings &amp; Consultations</h2>
              <p>
                Wedding floral dates are reserved upon receipt of an initial non-refundable booking deposit (£50 minimum, or as stated in your tailored quote). Full balances are due 4 weeks prior to the wedding date. Custom prop hires and arches remain the property of Efflorescence Ltd.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg text-[#1F2E24] font-medium">5. Enquiries &amp; Customer Care</h2>
              <p>
                For questions regarding your order, contact our studio team directly by telephone at {businessInfo.contact.phoneDisplay} or via email at {businessInfo.contact.email}.
              </p>
            </section>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
