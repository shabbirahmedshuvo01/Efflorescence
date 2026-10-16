import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles, MapPin } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-20 md:pt-20 md:pb-28 border-b border-[#EBE6DD]/60">
      {/* Decorative funky subtle background graphic (whimsical floral outline) */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#F8ECE9]/40 blur-3xl"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-10 left-1/3 w-80 h-80 rounded-full bg-[#E7ECE5]/40 blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Editorial Narrative Column */}
          <div className="lg:col-span-7 flex flex-col items-start animate-fade-in">
            {/* Pill with funky stamp style */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium tracking-[0.16em] uppercase bg-white border border-[#EBE6DD] text-[#263B2D] shadow-xs">
                <Sparkles className="w-3 h-3 text-[#C48273]" />
                Award-Winning Cumbria Florist
              </span>
              <span className="text-[11px] uppercase tracking-[0.18em] text-[#8A9A86] font-medium hidden sm:flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#C48273]" />
                Barrow-in-Furness
              </span>
            </div>

            {/* Editorial Funky Headline: Playful serif mix */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] leading-[0.98] text-[#1F2E24] tracking-tight font-light mb-6">
              Fresh flowers, <br />
              <span className="italic font-normal text-[#C48273] underline decoration-[#ECD2CC] decoration-wavy decoration-1 underline-offset-8">
                wildly arranged.
              </span>
            </h1>

            {/* Concise Supporting Copy: 1 short sentence per brief */}
            <p className="text-base sm:text-lg text-[#5C5855] max-w-lg leading-relaxed font-light mb-8">
              Bespoke wedding florals, thoughtful daily bouquets, and creative workshops handcrafted in our Barrow studio.
            </p>

            {/* Clear Primary Action & Funky Mini Pill */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <Button href="#shop" variant="primary" size="lg" className="group rounded-full shadow-xs hover:shadow-md transition-all">
                Explore Flowers
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>

              <Button href="#weddings" variant="outline" size="lg" className="rounded-full">
                Weddings &amp; Events
              </Button>
            </div>

            {/* Crisp 3-stat strip with minimal funky typography */}
            <div className="mt-12 pt-8 border-t border-[#EBE6DD] grid grid-cols-3 gap-6 w-full max-w-md">
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-light text-[#1F2E24] tracking-tight block">
                  Same-Day
                </span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-[#8A9A86] font-medium mt-0.5 block">
                  Local Delivery
                </span>
              </div>
              <div className="border-l border-[#EBE6DD] pl-5">
                <span className="font-serif text-2xl sm:text-3xl font-light text-[#1F2E24] tracking-tight block">
                  From £500
                </span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-[#8A9A86] font-medium mt-0.5 block">
                  Wedding Sets
                </span>
              </div>
              <div className="border-l border-[#EBE6DD] pl-5">
                <span className="font-serif text-2xl sm:text-3xl font-light text-[#1F2E24] tracking-tight block">
                  Abbey House
                </span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-[#8A9A86] font-medium mt-0.5 block">
                  Host Venue
                </span>
              </div>
            </div>
          </div>

          {/* Right Funky Editorial Asymmetric Composition */}
          <div className="lg:col-span-5 relative animate-fade-scale">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Funky floating circular decorative badge stamp */}
              <div className="absolute -top-5 -left-5 z-20 hidden sm:flex flex-col items-center justify-center w-20 h-20 rounded-full bg-white border border-[#EBE6DD] shadow-md text-[#263B2D] rotate-[-8deg] hover:rotate-0 transition-transform duration-300">
                <span className="font-serif text-xs font-medium italic">Hand</span>
                <span className="text-[8px] uppercase tracking-[0.2em] text-[#C48273] font-semibold">Tied</span>
              </div>

              {/* Main Primary Image with slight organic asymmetric corners */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-lg bg-[#F8ECE9]/30 border border-[#EBE6DD]">
                <Image
                  src="https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=1200&auto=format&fit=crop"
                  alt="Efflorescence handcrafted bespoke floral bouquet"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover transition-transform duration-700 ease-out hover:scale-104"
                />
              </div>

              {/* Secondary Overlapping Funky Mini Card */}
              <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 z-20 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-[#EBE6DD] shadow-lg max-w-[200px] sm:max-w-[220px] rotate-[3deg] hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-[#C48273] animate-pulse" />
                  <span className="text-[9px] uppercase tracking-[0.18em] text-[#8A9A86] font-semibold">
                    Fresh In Studio
                  </span>
                </div>
                <p className="font-serif text-sm text-[#1F2E24] leading-tight">
                  Hand-gathered daily from premium growers
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
