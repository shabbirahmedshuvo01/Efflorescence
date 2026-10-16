import React from "react";
import Image from "next/image";
import { upcomingWorkshops } from "@/data/workshops";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles, MapPin } from "lucide-react";

export function WorkshopsPreviewSection() {
  const workshop = upcomingWorkshops[0];

  return (
    <section id="workshops" className="py-8 md:py-10 bg-white border-b border-[#EBE6DD]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Information & Action */}
          <div className="lg:col-span-7 flex flex-col items-start order-2 lg:order-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.16em] font-medium bg-white border border-[#EBE6DD] text-[#263B2D] shadow-xs mb-2.5">
              <Sparkles className="w-3 h-3 text-[#C48273]" />
              Classes &amp; Events
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl text-[#1F2E24] font-light tracking-tight mb-2">
              Seasonal Workshops &amp; Event Styling
            </h2>

            <p className="text-xs sm:text-sm text-[#5C5855] font-light leading-relaxed mb-5 max-w-xl">
              From festive wreath masterclasses at Abbey House Hotel to bespoke floral backdrops for baby showers and private celebrations across Cumbria.
            </p>

            <Button href="/workshops" variant="primary" size="md" className="rounded-full group">
              View Workshops &amp; Event Styling
              <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Visual Showcase */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative aspect-[16/10] sm:aspect-[4/3] max-h-[280px] w-full overflow-hidden rounded-2xl shadow-sm bg-[#F8ECE9]/20 border border-[#EBE6DD]">
            <Image
              src={workshop.image}
              alt={workshop.title}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover transition-transform duration-500 hover:scale-103"
            />
            <div className="absolute top-3 left-3">
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

