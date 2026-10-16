import React from "react";
import Image from "next/image";
import { Award, Flower2, Heart, Sparkles } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-8 md:py-12 bg-white border-b border-[#EBE6DD]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Text Narrative Column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.16em] font-medium bg-white border border-[#EBE6DD] text-[#263B2D] shadow-xs mb-2.5">
              <Sparkles className="w-3 h-3 text-[#C48273]" />
              Our Studio
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1F2E24] font-light tracking-tight mb-2.5">
              Independent Floristry in Barrow
            </h2>

            <p className="text-xs sm:text-sm text-[#5C5855] font-light leading-relaxed mb-5 max-w-xl">
              Handcrafting wild seasonal arrangements from our studio at 4 Napier Street. Proud winner of Cumbria wedding floristry awards, voted for by couples across the Lake District and Furness peninsula.
            </p>

            {/* Core Values Compact Highlights */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#EBE6DD]">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#F8ECE9] flex items-center justify-center text-[#C48273] shrink-0">
                  <Flower2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className="font-serif text-xs font-medium text-[#1F2E24] leading-tight">Seasonal Stems</h3>
                  <p className="text-[10px] text-[#8E8A85] font-light">Fresh daily</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#F8ECE9] flex items-center justify-center text-[#C48273] shrink-0">
                  <Award className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className="font-serif text-xs font-medium text-[#1F2E24] leading-tight">Award-Winning</h3>
                  <p className="text-[10px] text-[#8E8A85] font-light">Couple voted</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#F8ECE9] flex items-center justify-center text-[#C48273] shrink-0">
                  <Heart className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className="font-serif text-xs font-medium text-[#1F2E24] leading-tight">4 Napier St</h3>
                  <p className="text-[10px] text-[#8E8A85] font-light">Barrow studio</p>
                </div>
              </div>
            </div>
          </div>

          {/* Studio Photography Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[16/10] sm:aspect-[4/3] max-h-[280px] w-full overflow-hidden rounded-2xl shadow-sm bg-[#F8ECE9]/20 border border-[#EBE6DD]">
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
