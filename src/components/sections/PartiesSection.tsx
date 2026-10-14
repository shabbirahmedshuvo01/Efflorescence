import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Sparkles, PartyPopper } from "lucide-react";

export function PartiesSection() {
  const partyServices = [
    "Floral Backdrops & Arches",
    "Bespoke Table Centrepieces",
    "Chair Covers & Coloured Sashes",
    "Balloon Displays & Garlands",
    "Welcome Sign Floral Accents",
    "Custom Palette Coordination"
  ];

  return (
    <section id="celebrations" className="py-16 md:py-24 bg-[#F7F4EE] border-b border-[#EBE6DD]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-sm bg-[#EBE6DD] border border-[#EBE6DD]">
              <Image
                src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1200&auto=format&fit=crop"
                alt="Efflorescence baby shower and event decor styling"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-500 hover:scale-103"
              />
            </div>
          </div>

          {/* Right Column: Text & Styling Services */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C48273]" />
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#8A9A86] font-semibold">
                Event Styling &amp; Decor
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1F2E24] font-light tracking-tight mb-4">
              Baby Showers &amp; Private Celebrations
            </h2>

            <p className="text-sm md:text-base text-[#5C5855] font-light leading-relaxed mb-6">
              Looking to create a memorable setting for your baby shower, milestone anniversary, or private celebration? From intimate gatherings to venue transformations, we provide tailored styling with creative florals, chair decor, and bespoke installations.
            </p>

            {/* Service Grid with Rounded-lg Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8">
              {partyServices.map((service, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white border border-[#EBE6DD] text-xs font-medium text-[#1F2E24]"
                >
                  <div className="w-6 h-6 rounded-md bg-[#F8ECE9] flex items-center justify-center text-[#C48273] shrink-0">
                    <PartyPopper className="w-3.5 h-3.5" />
                  </div>
                  <span>{service}</span>
                </div>
              ))}
            </div>

            <Button href="#contact" variant="primary" size="md">
              Enquire About Event Styling
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
