"use client";

import React, { useState } from "react";
import { featuredProducts } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles, Info } from "lucide-react";

export function FeaturedProductsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Handtied Bouquets", "Gift Box Arrangements", "Hat Box Designs"];

  const filteredProducts =
    activeCategory === "All"
      ? featuredProducts
      : featuredProducts.filter((p) => p.category === activeCategory);

  return (
    <section id="shop" className="py-16 md:py-24 bg-[#FBF9F5] border-b border-[#EBE6DD]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C48273]" />
              <span className="text-[10px] uppercase tracking-[0.24em] text-[#8A9A86] font-semibold">
                Online Florist Studio
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1F2E24] font-light tracking-tight">
              Curated Floral Collections
            </h2>
            <p className="mt-2 text-sm md:text-base text-[#5C5855] max-w-xl font-light leading-relaxed">
              Fresh seasonal stems hand-tied and packed with care in Barrow-in-Furness. Available for local delivery across Furness or studio collection.
            </p>
          </div>

          {/* Refined Rounded-lg Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-[11px] uppercase tracking-[0.14em] font-medium transition-colors duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#263B2D] text-[#FBF9F5]"
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

        {/* Neutralized Seasonal Stem Notice Banner */}
        <div className="mt-12 p-5 rounded-xl bg-[#F7F4EE] border border-[#EBE6DD] flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-start gap-3.5">
            <Info className="w-4 h-4 text-[#8A9A86] shrink-0 mt-0.5" />
            <p className="text-xs text-[#5C5855] leading-relaxed font-light">
              <strong className="text-[#1F2E24] font-medium">Seasonal Availability:</strong> Flower varieties may naturally vary based on seasonal market availability while maintaining the intended color palette, quality, and generous presentation.
            </p>
          </div>

          <Button href="#contact" variant="outline" size="sm" className="shrink-0 text-[10px]">
            Custom Arrangements
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </Button>
        </div>

      </div>
    </section>
  );
}
