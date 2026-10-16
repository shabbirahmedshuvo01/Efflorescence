import React from "react";
import { featuredProducts } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function FeaturedProductsSection() {
  const displayProducts = featuredProducts.slice(0, 4);

  return (
    <section id="shop" className="py-12 md:py-16 bg-white border-b border-[#EBE6DD]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#C48273]" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#8A9A86] font-semibold">
                Daily Stems
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1F2E24] font-light tracking-tight">
              Curated Floral Collections
            </h2>
            <p className="mt-1 text-sm text-[#5C5855] max-w-md font-light leading-relaxed">
              Hand-tied daily in Barrow-in-Furness for doorstep delivery or studio pickup.
            </p>
          </div>

          <Button href="/shop" variant="outline" size="sm" className="self-start sm:self-auto rounded-full group">
            Browse All Flowers
            <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Product Cards Grid: 4 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}
