import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCard {
  title: string;
  category: string;
  description: string;
  href: string;
  image: string;
}

const services: ServiceCard[] = [
  {
    title: "Weddings & Packages",
    category: "Bespoke Bridal",
    description: "Tailored bridal bouquets, arch installations, and curated wedding packages from £500.",
    href: "/weddings",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Sympathy & Bereavements",
    category: "Funeral Tributes",
    description: "Thoughtful coffin sprays, bespoke wreaths, and compassionate funeral director liaison.",
    href: "/#bereavements",
    image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Seasonal Workshops",
    category: "Masterclasses",
    description: "Festive wreath masterclasses and seasonal floristry hosted at Abbey House Hotel.",
    href: "/workshops",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop"
  }
];

export function ShortServicesSection() {
  return (
    <section id="services" className="py-8 md:py-12 bg-white border-b border-[#EBE6DD]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-3">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#8A9A86] font-semibold block mb-1">
              Studio Services
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1F2E24] font-light tracking-tight">
              Beyond Daily Bouquets
            </h2>
          </div>

          <p className="text-xs text-[#5C5855] font-light max-w-sm">
            Handcrafted for life&apos;s special moments across the Lake District and Furness peninsula.
          </p>
        </div>

        {/* 3-Column Visual Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group flex flex-col bg-white rounded-2xl border border-[#EBE6DD] overflow-hidden shadow-2xs hover:shadow-md hover:border-[#8A9A86]/50 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C48273]"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#FAF8F5]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[9px] uppercase tracking-[0.16em] font-medium bg-white/95 text-[#263B2D] border border-[#EBE6DD] shadow-2xs">
                    {service.category}
                  </span>
                </div>
              </div>

              <div className="p-4 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-serif text-base text-[#1F2E24] font-medium group-hover:text-[#AA6B5D] transition-colors mb-1">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#5C5855] font-light leading-relaxed mb-3">
                    {service.description}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-[#EBE6DD]/70 flex items-center justify-between text-xs font-medium text-[#263B2D] group-hover:text-[#AA6B5D] transition-colors">
                  <span className="uppercase tracking-wider text-[10px]">Explore Service</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
