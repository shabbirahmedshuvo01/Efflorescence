import React from "react";
import Image from "next/image";
import { weddingPackages } from "@/data/weddingPackages";
import { PackageCard } from "@/components/ui/PackageCard";
import { Button } from "@/components/ui/Button";
import { Calendar, Clock, ShieldCheck, HeartHandshake, Sparkles } from "lucide-react";

export function WeddingPackagesSection() {
  return (
    <section id="weddings" className="py-16 md:py-24 bg-white border-b border-[#EBE6DD]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium tracking-[0.16em] uppercase bg-white border border-[#EBE6DD] text-[#263B2D] shadow-xs mb-3">
            <Sparkles className="w-3 h-3 text-[#C48273]" />
            Voted by Brides &amp; Grooms
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1F2E24] font-light tracking-tight mb-2">
            Wedding Flowers &amp; Packages
          </h2>
          <p className="text-sm md:text-base text-[#5C5855] font-light leading-relaxed">
            From bridal bouquets to complete Lake District ceremony styling.
          </p>
        </div>

        {/* 3 Tiered Wedding Packages */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-14 items-stretch">
          {weddingPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        {/* Crisp White Wedding Service Commitment Strip */}
        <div className="bg-white rounded-3xl border border-[#EBE6DD] overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left Imagery Accent */}
            <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[260px] overflow-hidden bg-[#F8ECE9]/20">
              <Image
                src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop"
                alt="Efflorescence wedding ceremony floral styling"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-500 hover:scale-103"
              />
            </div>

            {/* Right Information & Process Details */}
            <div className="lg:col-span-7 p-7 sm:p-9 lg:p-10">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#8A9A86] font-semibold block mb-1">
                How It Works
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1F2E24] font-normal mb-2 leading-snug">
                Bespoke Consultations &amp; Venue Setup
              </h3>
              <p className="text-xs sm:text-sm text-[#5C5855] leading-relaxed mb-6 font-light">
                Quotes provided within 7 days of consultation. £50 deposit holds your date. On the morning of your wedding, we personally deliver and set up florals at your venue.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-4 border-t border-[#EBE6DD] mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#F8ECE9] flex items-center justify-center text-[#C48273] shrink-0">
                    <Calendar className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs text-[#242220]">14-Day Date Hold</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#F8ECE9] flex items-center justify-center text-[#C48273] shrink-0">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs text-[#242220]">Morning Delivery</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#F8ECE9] flex items-center justify-center text-[#C48273] shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs text-[#242220]">Full Venue Styling</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <span className="text-xs text-[#8E8A85] font-light">
                  Min spend £150 · Dates subject to confirmation
                </span>
                <Button href="/weddings#enquire" variant="primary" size="md" className="rounded-full">
                  <HeartHandshake className="w-4 h-4 mr-2 text-[#C48273]" />
                  Check Wedding Date
                </Button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
