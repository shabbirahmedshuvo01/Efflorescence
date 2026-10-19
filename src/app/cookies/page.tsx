import { Metadata } from "next";
import Link from "next/link";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, AlertCircle, Cookie, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Cookie Policy (Draft) | Efflorescence Florist",
  description: "Cookie policy draft placeholder for Efflorescence Florist in Barrow-in-Furness, Cumbria. Awaiting client confirmation of tracking technologies.",
};

export default function CookiesPage() {
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
              <Link href="/privacy" className="text-[#C48273] hover:underline">
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Page Header */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium tracking-[0.16em] uppercase bg-white border border-[#EBE6DD] text-[#263B2D] shadow-xs mb-3">
              <Cookie className="w-3.5 h-3.5 text-[#C48273]" />
              Legal &amp; Policies
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1F2E24] font-light tracking-tight mb-3">
              Cookie Policy
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
                Draft Notice — Awaiting Confirmation of Cookie Practices
              </h2>
              <p className="text-xs text-[#5C5855] font-light leading-relaxed">
                This cookie summary is a placeholder awaiting formal verification from Sajjad Hossain regarding any analytics tools, marketing pixels, or third-party cookies that will be deployed in production. Details regarding specific cookie categories require final client sign-off.
              </p>
            </div>
          </div>

          {/* Placeholder Content Sections */}
          <div className="space-y-8 text-xs sm:text-sm text-[#5C5855] font-light leading-relaxed border-t border-[#EBE6DD] pt-8">
            
            <section className="space-y-2">
              <h2 className="font-serif text-lg sm:text-xl text-[#1F2E24] font-normal">
                1. What Are Cookies?
              </h2>
              <p>
                Cookies are small text files placed on your computer or mobile device when you browse websites. They are commonly used to remember preferences, secure sessions, and enable core platform functionality.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg sm:text-xl text-[#1F2E24] font-normal">
                2. Current Preview Implementation Status
              </h2>
              <p>
                On this static Next.js preview site, no marketing or advertising tracking pixels have been integrated. Essential technical cookies may be set by hosting infrastructure (Vercel) for performance optimization, cache validation, and edge security routing.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg sm:text-xl text-[#1F2E24] font-normal">
                3. Future Tracking &amp; Analytics (Pending Client Confirmation)
              </h2>
              <p>
                Before commercial launch, the client will confirm whether analytics services (such as Google Analytics) or social engagement tracking will be enabled. If adopted, full details and appropriate consent mechanisms will be updated here accordingly.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg sm:text-xl text-[#1F2E24] font-normal">
                4. Managing Browser Cookie Preferences
              </h2>
              <p>
                Most modern web browsers allow you to view, manage, and delete cookies stored on your device through your browser settings. For guidance, refer to your browser’s help documentation.
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
              <Link href="/terms" className="inline-flex items-center text-[#5C5855] hover:text-[#1F2E24] transition-colors">
                View Terms &amp; Conditions <ArrowRight className="w-3 h-3 ml-1" />
              </Link>
              <Link href="/privacy" className="inline-flex items-center text-[#5C5855] hover:text-[#1F2E24] transition-colors">
                View Privacy Policy <ArrowRight className="w-3 h-3 ml-1" />
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
