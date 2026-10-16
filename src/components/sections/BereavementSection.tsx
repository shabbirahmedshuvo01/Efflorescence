import React from "react";
import { businessInfo } from "@/data/businessInfo";
import { Button } from "@/components/ui/Button";
import { Phone, HeartHandshake } from "lucide-react";

export function BereavementSection() {
  return (
    <section id="bereavements" className="py-6 md:py-8 bg-white border-b border-[#EBE6DD]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#FAF8F5] border border-[#EBE6DD] p-4 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="max-w-2xl">
            <div className="flex items-center gap-1.5 mb-1">
              <HeartHandshake className="w-3.5 h-3.5 text-[#C48273]" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#8A9A86] font-semibold">
                Sympathy &amp; Funeral Tributes
              </span>
            </div>
            <h2 className="font-serif text-xl sm:text-2xl text-[#1F2E24] font-normal tracking-tight">
              Thoughtful Farewells, Handcrafted with Care
            </h2>
            <p className="text-xs text-[#5C5855] font-light leading-relaxed mt-1">
              Bespoke coffin sprays, memorial wreaths, and direct funeral director liaison across Barrow and Furness.
            </p>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
            <a
              href={`tel:${businessInfo.contact.mobileEmergency}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#C48273] text-white text-xs uppercase tracking-wider font-medium hover:bg-[#AA6B5D] transition-colors shadow-xs"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Out-of-Hours: {businessInfo.contact.mobileEmergencyDisplay}</span>
            </a>
            <Button href="#contact" variant="outline" size="sm" className="rounded-full">
              Enquire
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
