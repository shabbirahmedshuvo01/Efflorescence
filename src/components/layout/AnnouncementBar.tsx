import React from "react";
import { businessInfo } from "@/data/businessInfo";
import { Sparkles, Phone, Clock } from "lucide-react";

export function AnnouncementBar() {
  return (
    <aside
      aria-label="Studio notice"
      className="bg-white text-[#263B2D] text-[11px] tracking-[0.16em] uppercase py-2.5 px-4 border-b border-[#EBE6DD]/80 relative z-50"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        {/* Left: Verified Award & Delivery Promise */}
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#C48273] shrink-0" />
          <span className="font-medium text-[#263B2D]">
            Award-Winning Cumbria Florist
          </span>
          <span className="text-[#8A9A86] hidden md:inline">/</span>
          <span className="text-[#5C5855] hidden md:inline font-normal lowercase first-letter:uppercase tracking-normal font-sans">
            Same-day floral delivery in Barrow &amp; Furness
          </span>
        </div>

        {/* Right: Studio Hours & Telephone */}
        <div className="flex items-center gap-5 text-[11px] text-[#5C5855]">
          <span className="hidden lg:flex items-center gap-1.5 text-[#5C5855] tracking-normal font-sans lowercase first-letter:uppercase">
            <Clock className="w-3.5 h-3.5 text-[#8A9A86]" />
            Tue–Fri 9–1pm · Sat 9–12pm
          </span>
          <a
            href={`tel:${businessInfo.contact.phone}`}
            className="flex items-center gap-1.5 font-medium text-[#263B2D] hover:text-[#C48273] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#C48273]" />
            <span>Studio: {businessInfo.contact.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
