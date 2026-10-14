import React from "react";
import Image from "next/image";
import { Award, Flower2, Heart, Sparkles } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#FBF9F5] border-b border-[#EBE6DD]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Text Narrative Column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C48273]" />
              <span className="text-[10px] uppercase tracking-[0.24em] text-[#8A9A86] font-semibold">
                Our Story &amp; Craft
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1F2E24] font-light tracking-tight mb-5">
              Independent Floristry in Barrow-in-Furness
            </h2>

            <div className="space-y-4 text-sm md:text-base text-[#5C5855] font-light leading-relaxed">
              <p>
                At Efflorescence, we believe flowers should reflect the significance of the moment they celebrate. From our independent studio at 4 Napier Street, we combine natural seasonal textures, fresh botanicals, and balanced color palettes to create expressive floral designs.
              </p>
              <p>
                We are proud to have won an award for our wedding floristry, voted for by the brides and grooms themselves. Whether preparing a thoughtful hand-tied gift bouquet, designing wedding flowers for venues across Cumbria, or guiding seasonal workshop classes, our personal service and acute attention to detail define our approach.
              </p>
            </div>

            {/* Core Values Rounded Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-[#EBE6DD]">
              <div className="p-4 rounded-xl bg-white border border-[#EBE6DD]">
                <div className="w-8 h-8 rounded-lg bg-[#E7ECE5] flex items-center justify-center text-[#263B2D] mb-2.5">
                  <Flower2 className="w-4 h-4 text-[#8A9A86]" />
                </div>
                <h3 className="font-serif text-base text-[#1F2E24] mb-1 font-medium">Seasonal Stems</h3>
                <p className="text-xs text-[#5C5855] font-light leading-relaxed">Carefully chosen seasonal flowers and textured greenery.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#EBE6DD]">
                <div className="w-8 h-8 rounded-lg bg-[#F8ECE9] flex items-center justify-center text-[#C48273] mb-2.5">
                  <Award className="w-4 h-4 text-[#C48273]" />
                </div>
                <h3 className="font-serif text-base text-[#1F2E24] mb-1 font-medium">Peer Voted</h3>
                <p className="text-xs text-[#5C5855] font-light leading-relaxed">Wedding floristry award voted by happy couples.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#EBE6DD]">
                <div className="w-8 h-8 rounded-lg bg-[#E7ECE5] flex items-center justify-center text-[#263B2D] mb-2.5">
                  <Heart className="w-4 h-4 text-[#8A9A86]" />
                </div>
                <h3 className="font-serif text-base text-[#1F2E24] mb-1 font-medium">Napier Street Studio</h3>
                <p className="text-xs text-[#5C5855] font-light leading-relaxed">Proudly independent studio based in Barrow-in-Furness.</p>
              </div>
            </div>
          </div>

          {/* Studio Photography Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-sm bg-[#EBE6DD] border border-[#EBE6DD]">
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
