import React from "react";
import Image from "next/image";
import { Award, Flower2, Heart, Sparkles } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white border-b border-[#EBE6DD]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Text Narrative Column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.16em] font-medium bg-white border border-[#EBE6DD] text-[#263B2D] shadow-xs mb-2">
              <Sparkles className="w-3 h-3 text-[#C48273]" />
              Our Studio
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1F2E24] font-light tracking-tight mb-4">
              Independent Floristry in Barrow
            </h2>

            <p className="text-sm md:text-base text-[#5C5855] font-light leading-relaxed mb-6">
              Handcrafting wild seasonal arrangements from our studio at 4 Napier Street. Proud winner of Cumbria wedding floristry awards, voted for by our couples.
            </p>

            {/* Core Values Rounded Cards */}
            <div className="grid grid-cols-3 gap-3.5 mt-6 pt-6 border-t border-[#EBE6DD]">
              <div className="p-3.5 rounded-2xl bg-white border border-[#EBE6DD] shadow-xs">
                <div className="w-7 h-7 rounded-full bg-[#F8ECE9] flex items-center justify-center text-[#C48273] mb-2">
                  <Flower2 className="w-3.5 h-3.5" />
                </div>
                <h3 className="font-serif text-sm text-[#1F2E24] font-medium">Seasonal Stems</h3>
                <p className="text-[11px] text-[#5C5855] font-light leading-normal mt-0.5">Fresh market flowers</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-[#EBE6DD] shadow-xs">
                <div className="w-7 h-7 rounded-full bg-[#F8ECE9] flex items-center justify-center text-[#C48273] mb-2">
                  <Award className="w-3.5 h-3.5" />
                </div>
                <h3 className="font-serif text-sm text-[#1F2E24] font-medium">Couple Voted</h3>
                <p className="text-[11px] text-[#5C5855] font-light leading-normal mt-0.5">Awarded floristry</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-[#EBE6DD] shadow-xs">
                <div className="w-7 h-7 rounded-full bg-[#F8ECE9] flex items-center justify-center text-[#C48273] mb-2">
                  <Heart className="w-3.5 h-3.5" />
                </div>
                <h3 className="font-serif text-sm text-[#1F2E24] font-medium">4 Napier St</h3>
                <p className="text-[11px] text-[#5C5855] font-light leading-normal mt-0.5">Barrow studio</p>
              </div>
            </div>
          </div>

          {/* Studio Photography Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl shadow-md bg-[#F8ECE9]/20 border border-[#EBE6DD]">
              <Image
                src="https://images.unsplash.com/photo-1558350315-8aa00e8e4590?q=80&w=1200&auto=format&fit=crop"
                alt="Florist arranging delicate blooms in studio"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-500 hover:scale-103"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
