import React from "react";
import { Award, MapPin, Truck, Building2 } from "lucide-react";

export function TrustSection() {
  const trustPillars = [
    {
      icon: Award,
      title: "Award-Winning",
      subtitle: "Voted by couples in Cumbria",
    },
    {
      icon: MapPin,
      title: "Napier St Studio",
      subtitle: "Barrow independent workshop",
    },
    {
      icon: Truck,
      title: "Same-Day Delivery",
      subtitle: "Across the Furness peninsula",
    },
    {
      icon: Building2,
      title: "Abbey House Host",
      subtitle: "Seasonal creative workshops",
    },
  ];

  return (
    <section className="bg-white py-12 md:py-16 border-b border-[#EBE6DD]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Poetic Funky Brand Tagline */}
        <div className="max-w-xl mx-auto text-center mb-10">
          <p className="font-serif text-xl sm:text-2xl text-[#1F2E24] font-light italic leading-snug">
            &ldquo;From everyday wild stems to lakeside weddings.&rdquo;
          </p>
        </div>

        {/* Clean, airy minimalist Trust Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {trustPillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3.5 p-4 rounded-2xl bg-white border border-[#EBE6DD]/80 hover:border-[#8A9A86]/50 transition-all shadow-xs"
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#F8ECE9] text-[#C48273] shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-base text-[#1F2E24] font-medium leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#5C5855] leading-relaxed font-light mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
