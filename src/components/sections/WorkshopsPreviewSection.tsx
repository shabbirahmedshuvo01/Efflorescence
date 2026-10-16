import React from "react";
import Image from "next/image";
import { upcomingWorkshops } from "@/data/workshops";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles, Calendar, MapPin, PartyPopper } from "lucide-react";

export function WorkshopsPreviewSection() {
  const workshop = upcomingWorkshops[0];

  return (
    <section id="workshops" className="py-12 md:py-16 bg-white border-b border-[#EBE6DD]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Information & Action */}
          <div className="lg:col-span-7 flex flex-col items-start order-2 lg:order-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.16em] font-medium bg-white border border-[#EBE6DD] text-[#263B2D] shadow-xs mb-3">
              <Sparkles className="w-3 h-3 text-[#C48273]" />
              Classes &amp; Events
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#1F2E24] font-light tracking-tight mb-3">
              Seasonal Workshops &amp; Event Styling
            </h2>

            <p className="text-sm md:text-base text-[#5C5855] font-light leading-relaxed mb-6 max-w-xl">
              From festive wreath masterclasses at Abbey House Hotel to bespoke floral backdrops for baby showers and private celebrations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-6">
              <div className="p-3.5 rounded-2xl bg-white border border-[#EBE6DD] shadow-xs flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#F8ECE9] flex items-center justify-center text-[#C48273] shrink-0">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#8E8A85] block">Next Class</span>
                  <span className="text-xs font-medium text-[#1F2E24]">{workshop.title}</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-[#EBE6DD] shadow-xs flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#F8ECE9] flex items-center justify-center text-[#C48273] shrink-0">
                  <PartyPopper className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#8E8A85] block">Celebrations</span>
                  <span className="text-xs font-medium text-[#1F2E24]">Baby Showers &amp; Parties</span>
                </div>
              </div>
            </div>

            <Button href="/workshops" variant="primary" size="md" className="rounded-full group">
              View Workshops &amp; Event Decor
              <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Visual Showcase */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-sm bg-[#F8ECE9]/20 border border-[#EBE6DD]">
            <Image
              src={workshop.image}
              alt={workshop.title}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover transition-transform duration-500 hover:scale-103"
            />
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[9px] uppercase tracking-wider font-medium bg-white/95 text-[#263B2D] border border-[#EBE6DD] shadow-xs">
                <MapPin className="w-3 h-3 text-[#C48273]" /> Abbey House Hotel
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

