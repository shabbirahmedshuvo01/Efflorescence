import React from "react";
import { Button } from "@/components/ui/Button";
import { BouquetCarousel } from "@/components/ui/BouquetCarousel";
import { ArrowRight, ShoppingBag, MapPin } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-6 pb-10 md:pt-10 md:pb-14 border-b border-[#EBE6DD]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Minimal Headline & Direct CTAs */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-medium tracking-[0.18em] uppercase bg-[#FAF8F5] border border-[#EBE6DD] text-[#263B2D] mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C48273]" />
              Independent Florist · Barrow-in-Furness
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.75rem] leading-[1.05] text-[#1F2E24] tracking-tight font-light mb-3 sm:mb-4">
              Fresh flowers, <br />
              <span className="italic font-normal text-[#C48273]">
                wildly arranged.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-[#5C5855] max-w-md leading-relaxed font-light mb-6">
              Daily seasonal bouquets, keepsake hat boxes, and bespoke Lake District wedding florals crafted at 4 Napier Street.
            </p>

            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-6">
              <Button href="/shop" variant="primary" size="md" className="rounded-full shadow-xs hover:shadow-md transition-all">
                <ShoppingBag className="w-3.5 h-3.5 mr-2 text-[#C48273]" />
                Shop Flowers
                <ArrowRight className="w-3.5 h-3.5 ml-2" />
              </Button>

              <Button href="/weddings" variant="outline" size="md" className="rounded-full">
                Weddings &amp; Events
              </Button>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#8A9A86] font-light">
              <MapPin className="w-3.5 h-3.5 text-[#C48273] shrink-0" />
              <span>Doorstep delivery across Barrow, Dalton &amp; Ulverston</span>
            </div>
          </div>

          {/* Right Column: Swipeable Bouquet Shop Carousel */}
          <div className="lg:col-span-7 w-full overflow-hidden">
            <BouquetCarousel />
          </div>

        </div>
      </div>
    </section>
  );
}
