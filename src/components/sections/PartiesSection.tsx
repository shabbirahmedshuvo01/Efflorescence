import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Sparkles, PartyPopper } from "lucide-react";

export function PartiesSection() {
  const partyServices = [
    "Floral Backdrops & Arches",
    "Bespoke Table Centrepieces",
    "Chair Covers & Sashes",
    "Balloon Displays & Garlands",
    "Welcome Sign Floral Accents",
    "Palette Coordination"
  ];

  return (
    <section id="celebrations" className="py-16 md:py-24 bg-white border-b border-[#EBE6DD]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-md bg-[#F8ECE9]/20 border border-[#EBE6DD]">
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
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.16em] font-medium bg-white border border-[#EBE6DD] text-[#263B2D] shadow-xs mb-2">
              <Sparkles className="w-3 h-3 text-[#C48273]" />
              Event Styling
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1F2E24] font-light tracking-tight mb-3">
              Baby Showers &amp; Celebrations
            </h2>

            <p className="text-sm md:text-base text-[#5C5855] font-light leading-relaxed mb-6">
              Tailored floral styling, table decor, and backdrop installations for intimate parties and milestone celebrations.
            </p>

            {/* Service Grid with Rounded Pills */}
            <div className="grid grid-cols-2 gap-3 w-full mb-8">
              {partyServices.map((service, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-[#EBE6DD] text-xs font-normal text-[#1F2E24] shadow-xs"
                >
                  <div className="w-6 h-6 rounded-full bg-[#F8ECE9] flex items-center justify-center text-[#C48273] shrink-0">
                    <PartyPopper className="w-3 h-3" />
                  </div>
                  <span>{service}</span>
                </div>
              ))}
            </div>

            <Button href="#contact" variant="primary" size="md" className="rounded-full">
              Enquire About Styling
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
