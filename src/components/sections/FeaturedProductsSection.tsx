"use client";

import React, { useState } from "react";
import { featuredProducts } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function FeaturedProductsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Handtied Bouquets", "Gift Box Arrangements", "Hat Box Designs"];

  const filteredProducts =
    activeCategory === "All"
      ? featuredProducts
      : featuredProducts.filter((p) => p.category === activeCategory);

  return (
    <section id="shop" className="py-16 md:py-24 bg-white border-b border-[#EBE6DD]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with funky asymmetrical badge and concise text */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#C48273]" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#8A9A86] font-semibold">
                Daily Stems
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1F2E24] font-light tracking-tight">
              Curated Flowers
            </h2>
            <p className="mt-2 text-sm md:text-base text-[#5C5855] max-w-md font-light leading-relaxed">
              Fresh seasonal stems hand-tied in our studio. Available for Furness delivery or studio collection.
            </p>
          </div>

          {/* Funky Rounded Pill Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-[11px] tracking-[0.14em] font-medium transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#263B2D] text-white shadow-xs"
                    : "bg-white text-[#5C5855] border border-[#EBE6DD] hover:border-[#8A9A86] hover:text-[#1F2E24]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Clean Minimalist Stem Notice Strip */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-white border border-[#EBE6DD] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8A9A86] shrink-0" />
            <p className="text-xs text-[#5C5855] leading-relaxed font-light">
              <strong className="text-[#1F2E24] font-normal">Seasonal Note:</strong> Flower varieties vary weekly to ensure optimal freshness and character.
            </p>
          </div>

          <Button href="#contact" variant="outline" size="sm" className="shrink-0 rounded-full text-[10px]">
            Custom Enquiries
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </Button>
        </div>

      </div>
    </section>
  );
}
