import React from "react";
import Image from "next/image";
import { businessInfo } from "@/data/businessInfo";
import { Button } from "@/components/ui/Button";
import { Phone, Home, HeartHandshake } from "lucide-react";

export function BereavementSection() {
  return (
    <section id="bereavements" className="py-16 md:py-24 bg-white text-[#1F2E24] border-b border-[#EBE6DD]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7">
            <span className="text-[10px] uppercase tracking-[0.24em] text-[#8A9A86] font-semibold block mb-2">
              Sympathy &amp; Funeral Tributes
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1F2E24] font-light tracking-tight mb-4">
              Thoughtful Farewells, Handcrafted with Care
            </h2>
            <p className="text-sm md:text-base text-[#5C5855] font-light leading-relaxed mb-6">
              Personal floral tributes honoring your loved one. Coffin sprays, cushions, bespoke memorial shapes, and direct liaison with local funeral directors.
            </p>

            {/* Respectful Service Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#EBE6DD] shadow-xs">
                <div className="flex items-center gap-2 mb-1.5 text-[#C48273]">
                  <Home className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wider font-medium text-[#1F2E24]">
                    Home Visits
                  </span>
                </div>
                <p className="text-xs text-[#5C5855] leading-relaxed font-light">
                  Unhurried consultations in the comfort of your home.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#EBE6DD] shadow-xs">
                <div className="flex items-center gap-2 mb-1.5 text-[#C48273]">
                  <HeartHandshake className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wider font-medium text-[#1F2E24]">
                    Director Liaison
                  </span>
                </div>
                <p className="text-xs text-[#5C5855] leading-relaxed font-light">
                  Direct coordination and timely delivery to funeral premises.
                </p>
              </div>
            </div>

            {/* Direct Out-of-Hours Line Strip */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#F8ECE9]/30 border border-[#ECD2CC]/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#8F4F42] block font-semibold">
                  Out-of-Hours Line
                </span>
                <p className="text-xs text-[#5C5855] mt-0.5 font-light">
                  Direct support when you need immediate guidance.
                </p>
              </div>

              <a
                href={`tel:${businessInfo.contact.mobileEmergency}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#C48273] text-white text-xs uppercase tracking-wider font-medium hover:bg-[#AA6B5D] transition-colors shrink-0 shadow-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                {businessInfo.contact.mobileEmergencyDisplay}
              </a>
            </div>

            <div className="mt-6">
              <Button href="#contact" variant="outline" size="md" className="rounded-full">
                Enquire for Sympathy Arrangements
              </Button>
            </div>
          </div>

          {/* Right Imagery Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-md bg-[#F8ECE9]/20 border border-[#EBE6DD]">
              <Image
                src="https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?q=80&w=1200&auto=format&fit=crop"
                alt="Efflorescence sympathy and casket floral tributes"
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
