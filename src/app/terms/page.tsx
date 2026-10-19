import { Metadata } from "next";
import Link from "next/link";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, AlertCircle, FileText, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions (Draft) | Efflorescence Florist",
  description: "Terms and conditions draft placeholder for Efflorescence Florist in Barrow-in-Furness, Cumbria. Awaiting client confirmation.",
};

export default function TermsPage() {
  return (
    <div id="top" className="min-h-screen flex flex-col bg-white text-[#1A1A1A]">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1 py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb & Quick Navigation */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 text-xs text-[#8E8A85]">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 hover:text-[#1F2E24] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C48273]"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
            </Link>
            <div className="flex items-center gap-3 text-[11px]">
              <span className="text-[#8E8A85]">Related Policies:</span>
              <Link href="/privacy" className="text-[#C48273] hover:underline">
                Privacy Policy
              </Link>
              <span className="text-[#EBE6DD]" aria-hidden="true">·</span>
              <Link href="/cookies" className="text-[#C48273] hover:underline">
                Cookie Policy
              </Link>
            </div>
          </div>

          {/* Page Header */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium tracking-[0.16em] uppercase bg-white border border-[#EBE6DD] text-[#263B2D] shadow-xs mb-3">
              <FileText className="w-3.5 h-3.5 text-[#C48273]" />
              Legal &amp; Policies
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1F2E24] font-light tracking-tight mb-3">
              Terms &amp; Conditions
            </h1>
            <p className="text-xs sm:text-sm text-[#5C5855] font-light">
              Efflorescence Ltd · Barrow-in-Furness, Cumbria
            </p>
          </div>

          {/* DRAFT — Awaiting Client Approval Banner */}
          <div className="mb-10 rounded-2xl bg-[#FAF5F2] border border-[#ECD2CC] p-4 sm:p-5 flex items-start gap-3.5 shadow-xs">
            <AlertCircle className="w-5 h-5 text-[#C48273] shrink-0 mt-0.5" />
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-[#8F4F42] mb-1">
                Draft Notice — Awaiting Client Approval
              </h2>
              <p className="text-xs text-[#5C5855] font-light leading-relaxed">
                This document is a temporary placeholder staged for structural preview. The final terms and conditions are pending review and formal confirmation by Sajjad Hossain and the Efflorescence management team. No legally binding clauses or warranties are asserted herein.
              </p>
            </div>
          </div>

          {/* Placeholder Content Sections */}
          <div className="space-y-8 text-xs sm:text-sm text-[#5C5855] font-light leading-relaxed border-t border-[#EBE6DD] pt-8">
            
            <section className="space-y-2">
              <h2 className="font-serif text-lg sm:text-xl text-[#1F2E24] font-normal">
                1. Scope of Services
              </h2>
              <p>
                Efflorescence operates an independent floristry studio located at 4 Napier Street, Barrow-in-Furness, providing fresh flower arrangements, bespoke wedding floral styling, seasonal masterclass workshops, and funeral tributes across Cumbria.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg sm:text-xl text-[#1F2E24] font-normal">
                2. Orders &amp; Delivery Policies (Pending Client Terms)
              </h2>
              <p>
                The client will supply verified terms governing doorstep delivery times, same-day cutoff windows across Barrow and the Furness peninsula, flower substitution practices due to seasonal market availability, and collection procedures.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg sm:text-xl text-[#1F2E24] font-normal">
                3. Wedding Consultations &amp; Event Bookings
              </h2>
              <p>
                Specific booking agreements, date reservation deposits, payment milestone schedules, and consultation cancellation guidelines are under review and will be published upon client sign-off.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg sm:text-xl text-[#1F2E24] font-normal">
                4. Workshop Reservations
              </h2>
              <p>
                Seat allocations, workshop cancellation policies, transferability rules, and minimum group requirements for seasonal classes (such as Abbey House Hotel wreath workshops) require final confirmation from studio organizers.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg sm:text-xl text-[#1F2E24] font-normal">
                5. Questions &amp; Enquiries
              </h2>
              <p>
                If you have urgent questions regarding an ongoing order or booking, please reach out directly to the studio via phone at <a href="tel:01229824418" className="text-[#1F2E24] font-medium underline">01229 824418</a> or email at <a href="mailto:info@efflorescence.co.uk" className="text-[#1F2E24] font-medium underline">info@efflorescence.co.uk</a>.
              </p>
            </section>

          </div>

          {/* Bottom Policy Navigation Bar */}
          <div className="mt-12 pt-8 border-t border-[#EBE6DD] flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/"
              className="inline-flex items-center text-xs uppercase tracking-wider text-[#263B2D] font-medium hover:text-[#C48273] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 mr-1.5" /> Return to Homepage
            </Link>
            <div className="flex items-center gap-4 text-xs">
              <Link href="/privacy" className="inline-flex items-center text-[#5C5855] hover:text-[#1F2E24] transition-colors">
                View Privacy Policy <ArrowRight className="w-3 h-3 ml-1" />
              </Link>
              <Link href="/cookies" className="inline-flex items-center text-[#5C5855] hover:text-[#1F2E24] transition-colors">
                View Cookie Policy <ArrowRight className="w-3 h-3 ml-1" />
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
