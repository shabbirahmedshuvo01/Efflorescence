import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles, HeartHandshake } from "lucide-react";

export function WeddingPreviewSection() {
  return (
    <section id="weddings" className="py-8 md:py-10 bg-white border-b border-[#EBE6DD]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F8ECE9]/20 rounded-3xl border border-[#ECD2CC]/60 p-5 sm:p-7 lg:p-8 overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Visual Preview */}
            <div className="lg:col-span-5 relative aspect-[16/10] sm:aspect-[4/3] max-h-[280px] w-full overflow-hidden rounded-2xl shadow-sm bg-white border border-[#EBE6DD]">
              <Image
                src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop"
                alt="Efflorescence wedding ceremony styling"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-500 hover:scale-103"
              />
            </div>

            {/* Content & Action */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.16em] font-medium bg-white border border-[#EBE6DD] text-[#263B2D] shadow-xs mb-2.5">
                <Sparkles className="w-3 h-3 text-[#C48273]" />
                Award-Winning Floristry
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl text-[#1F2E24] font-light tracking-tight mb-2">
                Weddings &amp; Packages
              </h2>

              <p className="text-xs sm:text-sm text-[#5C5855] font-light leading-relaxed mb-5 max-w-xl">
                Curated packages from £500 to bespoke marquee installations across Cumbria. Explore bridal bouquets, ceremony arches, and book an initial consultation.
              </p>

              <Button href="/weddings" variant="primary" size="md" className="rounded-full group">
                <HeartHandshake className="w-4 h-4 mr-2 text-[#C48273]" />
                Explore Wedding Packages &amp; Portfolio
                <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
