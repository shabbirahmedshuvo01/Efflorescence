import { Metadata } from "next";
import Link from "next/link";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, AlertCircle, Shield, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy (Draft) | Efflorescence Florist",
  description: "Privacy policy draft placeholder for Efflorescence Florist in Barrow-in-Furness, Cumbria. Awaiting confirmation of data practices.",
};

export default function PrivacyPage() {
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
              <Link href="/terms" className="text-[#C48273] hover:underline">
                Terms &amp; Conditions
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
              <Shield className="w-3.5 h-3.5 text-[#C48273]" />
              Legal &amp; Policies
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1F2E24] font-light tracking-tight mb-3">
              Privacy Policy
            </h1>
            <p className="text-xs sm:text-sm text-[#5C5855] font-light">
              Efflorescence Ltd · Barrow-in-Furness, Cumbria
            </p>
          </div>

          {/* DRAFT — Awaiting Client Confirmation Banner */}
          <div className="mb-10 rounded-2xl bg-[#FAF5F2] border border-[#ECD2CC] p-4 sm:p-5 flex items-start gap-3.5 shadow-xs">
            <AlertCircle className="w-5 h-5 text-[#C48273] shrink-0 mt-0.5" />
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-[#8F4F42] mb-1">
                Draft Notice — Awaiting Confirmation of Data Practices
              </h2>
              <p className="text-xs text-[#5C5855] font-light leading-relaxed">
                This privacy summary is a structural draft awaiting formal verification from Sajjad Hossain regarding the studio’s actual data handling, inquiry storage, and communications procedures. No formal statutory compliance representations or binding legal warranties are asserted at this stage.
              </p>
            </div>
          </div>

          {/* Placeholder Content Sections */}
          <div className="space-y-8 text-xs sm:text-sm text-[#5C5855] font-light leading-relaxed border-t border-[#EBE6DD] pt-8">
            
            <section className="space-y-2">
              <h2 className="font-serif text-lg sm:text-xl text-[#1F2E24] font-normal">
                1. Information Submitted via Enquiry Forms
              </h2>
              <p>
                When visitors interact with our enquiry forms (including general studio contact, wedding consultation requests, and workshop booking inquiries), details such as your name, telephone number, email address, event dates, and floral preferences are collected solely to respond to your specific request.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg sm:text-xl text-[#1F2E24] font-normal">
                2. Data Handling &amp; Storage (Awaiting Client Confirmation)
              </h2>
              <p>
                The client will confirm the studio’s designated procedures for receiving, managing, and retaining customer communications (such as studio email inbox management, wedding inquiry records, and consultation archives).
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg sm:text-xl text-[#1F2E24] font-normal">
                3. Third-Party Services &amp; Infrastructure
              </h2>
              <p>
                This website is hosted on Vercel. Any future third-party integrations (such as email delivery providers, payment gateways, or booking calendars) will be explicitly detailed once implemented and confirmed by management.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg sm:text-xl text-[#1F2E24] font-normal">
                4. Customer Rights &amp; Privacy Contact
              </h2>
              <p>
                To request updates, corrections, or removal of any contact details previously provided to our studio, please get in touch with our team directly:
              </p>
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EBE6DD] text-xs space-y-1">
                <p className="font-medium text-[#1F2E24]">Efflorescence Studio Enquiries</p>
                <p>4 Napier Street, Barrow-in-Furness, Cumbria, LA14 5SZ</p>
                <p>Email: <a href="mailto:info@efflorescence.co.uk" className="text-[#C48273] underline">info@efflorescence.co.uk</a></p>
                <p>Telephone: <a href="tel:01229824418" className="text-[#1F2E24] underline">01229 824418</a></p>
              </div>
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
              <Link href="/terms" className="inline-flex items-center text-[#5C5855] hover:text-[#1F2E24] transition-colors">
                View Terms &amp; Conditions <ArrowRight className="w-3 h-3 ml-1" />
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
