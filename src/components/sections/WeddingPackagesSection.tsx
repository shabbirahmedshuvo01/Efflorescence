import React from "react";
import Image from "next/image";
import { weddingPackages } from "@/data/weddingPackages";
import { PackageCard } from "@/components/ui/PackageCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Calendar, Clock, ShieldCheck, HeartHandshake, Sparkles } from "lucide-react";

export function WeddingPackagesSection() {
  return (
    <section id="weddings" className="py-16 md:py-24 bg-[#F7F4EE] border-b border-[#EBE6DD]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <Badge variant="terracotta" className="py-1 px-3">
              <Sparkles className="w-3 h-3 mr-1.5 inline text-[#8F4F42]" />
              Voted by Real Brides &amp; Grooms
            </Badge>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1F2E24] font-light tracking-tight mb-3">
            Bespoke Weddings &amp; Curated Packages
          </h2>
          <p className="text-sm md:text-base text-[#5C5855] font-light leading-relaxed">
            From bridal bouquets and buttonholes to ceremony installations and marquee styling across Cumbria and the Lake District.
          </p>
        </div>

        {/* 3 Tiered Wedding Packages */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 mb-14 items-stretch">
          {weddingPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        {/* Editorial Wedding Service Commitment Banner */}
        <div className="bg-white rounded-2xl border border-[#EBE6DD] overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left Imagery Accent without cluttering text overlays */}
            <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[280px] overflow-hidden bg-[#F3EFE8]">
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
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#8A9A86] font-semibold block mb-1.5">
                Wedding Service Process
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1F2E24] font-normal mb-3 leading-snug">
                How We Bring Your Floral Vision to Life
              </h3>
              <p className="text-xs sm:text-sm text-[#5C5855] leading-relaxed mb-6 font-light">
                Following your initial consultation, you will receive an itemised quote within 7 days. A £50 booking fee secures your date upon quotation, and wedding flowers are delivered and set up on the morning of your ceremony in coordination with your venue.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#EBE6DD] mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#F8ECE9] flex items-center justify-center text-[#C48273] shrink-0">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <span className="text-xs text-[#242220]">14-Day Date Hold</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#F8ECE9] flex items-center justify-center text-[#C48273] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <span className="text-xs text-[#242220]">Coordinated Morning Delivery</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#F8ECE9] flex items-center justify-center text-[#C48273] shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-xs text-[#242220]">Venue Setup &amp; Prop Hire</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <span className="text-xs text-[#8E8A85] font-light">
                  Minimum wedding service spend: £150 · Dates subject to confirmation
                </span>
                <Button href="#contact" variant="primary" size="md">
                  <HeartHandshake className="w-4 h-4 mr-2 text-[#C48273]" />
                  Enquire for Your Wedding Date
                </Button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
