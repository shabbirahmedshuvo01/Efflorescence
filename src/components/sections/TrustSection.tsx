import React from "react";
import { Award, MapPin, Truck, Building2 } from "lucide-react";

export function TrustSection() {
  const trustPillars = [
    {
      icon: Award,
      title: "Award-Winning Floristry",
      subtitle: "Voted by real brides & grooms across Cumbria",
    },
    {
      icon: MapPin,
      title: "Local Barrow Studio",
      subtitle: "Established florist at 4 Napier Street (LA14 5SZ)",
    },
    {
      icon: Truck,
      title: "Same-Day Delivery",
      subtitle: "Barrow, Dalton, Ulverston & Furness peninsula",
    },
    {
      icon: Building2,
      title: "Workshop Venue Host",
      subtitle: "Seasonal classes hosted at Abbey House Hotel & Gardens",
    },
  ];

  return (
    <section className="bg-[#F7F4EE] py-14 md:py-18 border-b border-[#EBE6DD]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Poetic Brand Intro */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="text-[10px] uppercase tracking-[0.24em] text-[#8A9A86] font-semibold block mb-2">
            Artisan Floral Studio
          </span>
          <p className="font-serif text-2xl sm:text-3xl text-[#1F2E24] font-light italic leading-snug">
            &ldquo;From everyday floral gifts to lakeside weddings, we shape flowers into lasting memories.&rdquo;
          </p>
        </div>

        {/* Clean, Borderless Lightly-Divided Trust Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#EBE6DD] border-t border-b border-[#EBE6DD] py-4 lg:py-6">
          {trustPillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-5 sm:p-6 transition-colors duration-200"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#E7ECE5] text-[#263B2D] shrink-0 border border-[#D1DCD0]">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-base text-[#1F2E24] font-medium leading-snug mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#5C5855] leading-relaxed font-light">
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
