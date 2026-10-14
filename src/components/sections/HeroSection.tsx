import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, Sparkles, MapPin } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#FBF9F5] pt-12 pb-16 md:pt-20 md:pb-24 border-b border-[#EBE6DD]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Editorial Narrative Column */}
          <div className="lg:col-span-7 flex flex-col items-start z-10 animate-fade-in">
            {/* Verified Award & Location Badge */}
            <div className="inline-flex items-center gap-2 mb-5">
              <Badge variant="terracotta" className="py-1 px-3">
                <Sparkles className="w-3 h-3 mr-1.5 text-[#8F4F42]" />
                Award-Winning Cumbria Florist
              </Badge>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#8A9A86] font-medium hidden sm:flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#C48273]" />
                Barrow-in-Furness Studio
              </span>
            </div>

            {/* Editorial Serif Headline */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[4.75rem] leading-[1.05] text-[#1F2E24] tracking-tight font-light mb-6">
              Wild Elegance, <br />
              <span className="italic font-normal text-[#C48273]">
                Thoughtfully Gathered.
              </span>
            </h1>

            {/* Concise Supporting Copy */}
            <p className="text-base sm:text-lg text-[#5C5855] max-w-xl leading-relaxed font-light mb-8">
              Bespoke wedding florals, artisan daily bouquets, and evocative floral styling handcrafted at our Barrow-in-Furness studio. Creating memorable botanical moments across the Lake District and Furness peninsula.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <Button href="#shop" variant="primary" size="lg" className="group">
                Shop Flowers
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>

              <Button href="#weddings" variant="outline" size="lg">
                Wedding Flowers
              </Button>
            </div>

            {/* Clean Editorial Trust Metrics Strip */}
            <div className="mt-12 pt-8 border-t border-[#EBE6DD] grid grid-cols-3 gap-6 w-full max-w-lg">
              <div className="flex flex-col">
                <span className="font-serif text-2xl md:text-3xl font-light text-[#1F2E24] tracking-tight">
                  Same-Day
                </span>
                <span className="text-[10px] uppercase tracking-[0.16em] text-[#8A9A86] font-medium mt-1">
                  Local Delivery
                </span>
              </div>
              <div className="flex flex-col border-l border-[#EBE6DD] pl-6">
                <span className="font-serif text-2xl md:text-3xl font-light text-[#1F2E24] tracking-tight">
                  £500+
                </span>
                <span className="text-[10px] uppercase tracking-[0.16em] text-[#8A9A86] font-medium mt-1">
                  Wedding Packages
                </span>
              </div>
              <div className="flex flex-col border-l border-[#EBE6DD] pl-6">
                <span className="font-serif text-2xl md:text-3xl font-light text-[#1F2E24] tracking-tight">
                  Abbey House
                </span>
                <span className="text-[10px] uppercase tracking-[0.16em] text-[#8A9A86] font-medium mt-1">
                  Workshop Host
                </span>
              </div>
            </div>
          </div>

          {/* Right Clean Editorial Image Frame (No Cluttering Overlays) */}
          <div className="lg:col-span-5 relative animate-fade-scale">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Clean Botanical Photography Frame */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-md bg-[#E7ECE5] border border-[#EBE6DD]">
                <Image
                  src="https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=1200&auto=format&fit=crop"
                  alt="Efflorescence handcrafted bespoke floral bouquet"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 ease-out hover:scale-103"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
