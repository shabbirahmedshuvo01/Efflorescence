"use client";

import React, { useState } from "react";
import Link from "next/link";
import { allProducts } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/Button";
import { Sparkles, ArrowRight, Truck, Clock, ShieldCheck, ArrowLeft } from "lucide-react";

export function ShopCatalogClient() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [sortOrder, setSortOrder] = useState<"featured" | "price-low" | "price-high">("featured");

  const categories = [
    "All",
    "Handtied Bouquets",
    "Gift Box Arrangements",
    "Hat Box Designs",
  ];

  const baseFiltered =
    activeCategory === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === activeCategory);

  const filtered = [...baseFiltered].sort((a, b) => {
    if (sortOrder === "price-low") return a.price - b.price;
    if (sortOrder === "price-high") return b.price - a.price;
    return 0;
  });

  return (
    <div className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Quick Back Link */}
        <div className="mb-6 flex items-center justify-between text-xs text-[#8E8A85]">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 hover:text-[#1F2E24] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>
          <span>Showing {filtered.length} curated arrangements</span>
        </div>

        {/* Editorial Funky Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium tracking-[0.16em] uppercase bg-white border border-[#EBE6DD] text-[#263B2D] shadow-xs mb-3">
            <Sparkles className="w-3 h-3 text-[#C48273]" />
            Seasonal Florist Studio
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1F2E24] font-light tracking-tight mb-4">
            Fresh flowers, <br />
            <span className="italic font-normal text-[#C48273] underline decoration-[#ECD2CC] decoration-wavy decoration-1 underline-offset-8">
              handcrafted in Barrow.
            </span>
          </h1>
          <p className="text-sm sm:text-base text-[#5C5855] font-light max-w-xl leading-relaxed">
            Market-fresh stems, artisan gift boxes, and luxury keepsake hat boxes. Prepared fresh daily at 4 Napier Street for local doorstep delivery or collection.
          </p>
        </div>

        {/* Filter Pills & Sorting Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-10 border-b border-[#EBE6DD]">
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

          <div className="flex items-center gap-2 self-start sm:self-auto text-xs text-[#5C5855]">
            <span className="text-[10px] uppercase tracking-wider text-[#8E8A85]">Sort:</span>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as "featured" | "price-low" | "price-high")}
              className="bg-white border border-[#EBE6DD] rounded-full px-3 py-1.5 text-xs text-[#1F2E24] focus:outline-none focus:border-[#C48273] cursor-pointer"
            >
              <option value="featured">Featured Stems</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Products Grid & Empty State */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 px-4 bg-white rounded-3xl border border-[#EBE6DD] mb-16">
            <p className="font-serif text-2xl text-[#1F2E24] mb-2 font-light">
              No floral designs found in this category.
            </p>
            <p className="text-xs text-[#5C5855] font-light mb-6">
              Please choose another collection or contact our studio for custom stems.
            </p>
            <button
              onClick={() => setActiveCategory("All")}
              className="px-5 py-2.5 rounded-full text-[11px] uppercase tracking-wider font-medium bg-[#263B2D] text-white hover:bg-[#1C2C22] transition-colors cursor-pointer"
            >
              View All Flowers
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16" aria-live="polite">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* Value Highlights & Ordering Notice */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 rounded-3xl bg-white border border-[#EBE6DD] shadow-xs mb-12">
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-full bg-[#F8ECE9] flex items-center justify-center text-[#C48273] shrink-0">
              <Truck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-base text-[#1F2E24] font-medium">Doorstep Delivery</h3>
              <p className="text-xs text-[#5C5855] font-light leading-relaxed mt-1">
                Same-day delivery across Barrow, Dalton, Ulverston, and the Furness peninsula.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-full bg-[#F8ECE9] flex items-center justify-center text-[#C48273] shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-base text-[#1F2E24] font-medium">Morning Studio Pick</h3>
              <p className="text-xs text-[#5C5855] font-light leading-relaxed mt-1">
                Every bouquet is conditioned and tied fresh to guarantee vibrant vase life.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-full bg-[#F8ECE9] flex items-center justify-center text-[#C48273] shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-base text-[#1F2E24] font-medium">Bespoke Requests</h3>
              <p className="text-xs text-[#5C5855] font-light leading-relaxed mt-1">
                Looking for specific blooms or tribute palettes? Contact our studio directly.
              </p>
            </div>
          </div>
        </div>

        {/* Callout to Custom Orders & Contact */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#F8ECE9]/20 border border-[#ECD2CC]/60 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#8A9A86] font-semibold block mb-1">
              Custom Requests
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1F2E24] font-normal">
              Need something specially tailored?
            </h2>
            <p className="text-xs sm:text-sm text-[#5C5855] font-light mt-1 max-w-lg">
              We cater for celebrations, anniversary bouquets, and bespoke colour palettes upon request.
            </p>
          </div>

          <Button href="/#contact" variant="primary" size="md" className="shrink-0 rounded-full">
            Enquire With Studio
            <ArrowRight className="w-4 h-4 ml-2 text-[#C48273]" />
          </Button>
        </div>

      </div>
    </div>
  );
}
