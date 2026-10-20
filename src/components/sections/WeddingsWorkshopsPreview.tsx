import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles, MapPin, HeartHandshake } from "lucide-react";

export function WeddingsWorkshopsPreview() {
  return (
    <section className="py-8 md:py-12 bg-white border-b border-[#EBE6DD]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-xl mb-6">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#8A9A86] font-semibold block mb-1">
            Studio Specialities
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#1F2E24] font-light tracking-tight">
            Weddings &amp; Workshops
          </h2>
        </div>

        {/* 2-Column Balanced Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Card 1: Weddings */}
          <div className="bg-[#FAF8F5] rounded-2xl border border-[#EBE6DD] p-5 sm:p-6 flex flex-col justify-between">
            <div>
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-white border border-[#EBE6DD] mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop"
                  alt="Efflorescence Lake District wedding ceremony styling"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 hover:scale-104"
                />
                <div className="absolute top-2.5 left-2.5">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] uppercase tracking-wider font-medium bg-white/95 text-[#263B2D] border border-[#EBE6DD] shadow-2xs">
                    <Sparkles className="w-3 h-3 text-[#C48273]" /> From £500
                  </span>
                </div>
              </div>

              <h3 className="font-serif text-xl text-[#1F2E24] font-medium mb-1.5">
                Bespoke Wedding Florals &amp; Packages
              </h3>
              <p className="text-xs text-[#5C5855] font-light leading-relaxed mb-4">
                Curated bridal packages, ceremony arches, and marquee installations across Cumbria. Winner of couple-voted regional wedding floristry awards.
              </p>
            </div>

            <div className="pt-2">
              <Button href="/weddings" variant="primary" size="sm" className="rounded-full group">
                <HeartHandshake className="w-3.5 h-3.5 mr-1.5 text-[#C48273]" />
                Explore Wedding Packages
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Card 2: Workshops & Celebrations */}
          <div className="bg-[#FAF8F5] rounded-2xl border border-[#EBE6DD] p-5 sm:p-6 flex flex-col justify-between">
            <div>
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-white border border-[#EBE6DD] mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1000&auto=format&fit=crop"
                  alt="Festive floral wreath masterclass"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 hover:scale-104"
                />
                <div className="absolute top-2.5 left-2.5">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] uppercase tracking-wider font-medium bg-white/95 text-[#263B2D] border border-[#EBE6DD] shadow-2xs">
                    <MapPin className="w-3 h-3 text-[#C48273]" /> Abbey House Hotel
                  </span>
                </div>
              </div>

              <h3 className="font-serif text-xl text-[#1F2E24] font-medium mb-1.5">
                Seasonal Workshops &amp; Event Styling
              </h3>
              <p className="text-xs text-[#5C5855] font-light leading-relaxed mb-4">
                Hands-on wreath masterclasses at Abbey House Hotel and custom floral styling for baby showers, birthdays, and private parties.
              </p>
            </div>

            <div className="pt-2">
              <Button href="/workshops" variant="primary" size="sm" className="rounded-full group">
                View Masterclasses &amp; Events
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
