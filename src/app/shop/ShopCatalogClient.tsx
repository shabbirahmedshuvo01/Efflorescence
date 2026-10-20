"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { allProducts } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/Button";
import {
  Sparkles,
  ArrowRight,
  Truck,
  Clock,
  ShieldCheck,
  ArrowLeft,
  RotateCcw,
  SlidersHorizontal,
  Check
} from "lucide-react";

type ArrangementTypeFilter = "all" | "bunch" | "box";
type BudgetFilter = "all" | "under-40" | "40-50" | "over-50";
type ColorFilter = "all" | "white" | "pastel" | "warm" | "green";

const colorOptions: { id: ColorFilter; label: string; swatchHex: string; border?: boolean }[] = [
  { id: "all", label: "All Colours", swatchHex: "transparent" },
  { id: "white", label: "White & Neutral", swatchHex: "#FAF9F5", border: true },
  { id: "pastel", label: "Pastel & Blush", swatchHex: "#EAB9BF" },
  { id: "warm", label: "Warm & Peach", swatchHex: "#DC7D64" },
  { id: "green", label: "Botanical Green", swatchHex: "#5E7C5C" }
];

const budgetOptions: { id: BudgetFilter; label: string; description: string }[] = [
  { id: "all", label: "All Budgets", description: "Any price point" },
  { id: "under-40", label: "Under £40", description: "£32 – £38" },
  { id: "40-50", label: "£40 – £50", description: "£42 – £48" },
  { id: "over-50", label: "£50+", description: "£55 & above" }
];

const typeOptions: { id: ArrangementTypeFilter; label: string }[] = [
  { id: "all", label: "All Arrangements" },
  { id: "bunch", label: "Bunch (Hand-Tied)" },
  { id: "box", label: "Box (Gift & Hat Box)" }
];

export function ShopCatalogClient() {
  const searchParams = useSearchParams();
  const urlType = searchParams.get("type");

  const [selectedType, setSelectedType] = useState<ArrangementTypeFilter | null>(null);
  const typeFilter: ArrangementTypeFilter =
    selectedType ?? (urlType === "bunch" || urlType === "box" ? urlType : "all");

  const [budgetFilter, setBudgetFilter] = useState<BudgetFilter>("all");
  const [colorFilter, setColorFilter] = useState<ColorFilter>("all");
  const [sortOrder, setSortOrder] = useState<"featured" | "price-low" | "price-high">("featured");

  // Derived filtered product list
  const filteredProducts = useMemo(() => {
    const list = allProducts.filter((product) => {
      // 1. Arrangement type filter
      if (typeFilter !== "all" && product.arrangementType !== typeFilter) {
        return false;
      }

      // 2. Budget filter
      if (budgetFilter === "under-40" && product.price >= 40) {
        return false;
      }
      if (budgetFilter === "40-50" && (product.price < 40 || product.price > 50)) {
        return false;
      }
      if (budgetFilter === "over-50" && product.price <= 50) {
        return false;
      }

      // 3. Colour group filter
      if (colorFilter !== "all" && product.colorGroup !== colorFilter) {
        return false;
      }

      return true;
    });

    // Sort order
    return [...list].sort((a, b) => {
      if (sortOrder === "price-low") return a.price - b.price;
      if (sortOrder === "price-high") return b.price - a.price;
      return 0;
    });
  }, [typeFilter, budgetFilter, colorFilter, sortOrder]);

  const hasActiveFilters =
    typeFilter !== "all" || budgetFilter !== "all" || colorFilter !== "all";

  const handleResetFilters = () => {
    setSelectedType("all");
    setBudgetFilter("all");
    setColorFilter("all");
    setSortOrder("featured");
  };

  return (
    <div className="py-8 md:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Navigation */}
        <div className="mb-4 sm:mb-6 flex items-center justify-between text-xs text-[#8E8A85]">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 hover:text-[#1F2E24] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C48273] rounded-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>
          <span className="font-light">
            Showing <strong className="text-[#1F2E24] font-medium">{filteredProducts.length}</strong> of {allProducts.length} stems
          </span>
        </div>

        {/* Minimal Editorial Header */}
        <div className="max-w-2xl mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-medium tracking-[0.16em] uppercase bg-[#FAF8F5] border border-[#EBE6DD] text-[#263B2D] mb-2.5">
            <Sparkles className="w-3 h-3 text-[#C48273]" />
            Barrow-in-Furness Florist Studio
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1F2E24] font-light tracking-tight mb-2.5">
            Fresh Stems &amp; Collections
          </h1>
          <p className="text-xs sm:text-sm text-[#5C5855] font-light leading-relaxed">
            Market-fresh bouquets and keepsake hat boxes crafted daily at 4 Napier Street. Filter by budget, colour, or arrangement type below.
          </p>
        </div>

        {/* Interactive Filter Control Panel */}
        <div className="bg-[#FAF8F5] border border-[#EBE6DD] rounded-2xl p-4 sm:p-5 mb-8 shadow-2xs">
          <div className="flex flex-col gap-4">
            
            {/* Top row: Filter Groups Title & Reset */}
            <div className="flex items-center justify-between pb-3 border-b border-[#EBE6DD]/70">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#C48273]" />
                <span className="text-[11px] uppercase tracking-[0.18em] font-medium text-[#1F2E24]">
                  Refine Collection
                </span>
                {hasActiveFilters && (
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-medium bg-[#263B2D] text-white ml-1">
                    Active Filters
                  </span>
                )}
              </div>

              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-1 text-[11px] text-[#C48273] hover:text-[#AA6B5D] transition-colors font-medium cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset All</span>
                </button>
              )}
            </div>

            {/* Filter Section 1: Arrangement Type (Box or Bunch) */}
            <div>
              <span className="block text-[10px] uppercase tracking-[0.18em] text-[#8A9A86] font-medium mb-2">
                1. Arrangement Type
              </span>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {typeOptions.map((opt) => {
                  const isActive = typeFilter === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSelectedType(opt.id)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                        isActive
                          ? "bg-[#263B2D] text-white shadow-xs"
                          : "bg-white text-[#5C5855] border border-[#EBE6DD] hover:border-[#8A9A86] hover:text-[#1F2E24]"
                      }`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Filter Section 2: Budget */}
            <div>
              <span className="block text-[10px] uppercase tracking-[0.18em] text-[#8A9A86] font-medium mb-2">
                2. Budget
              </span>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {budgetOptions.map((opt) => {
                  const isActive = budgetFilter === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setBudgetFilter(opt.id)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                        isActive
                          ? "bg-[#263B2D] text-white shadow-xs"
                          : "bg-white text-[#5C5855] border border-[#EBE6DD] hover:border-[#8A9A86] hover:text-[#1F2E24]"
                      }`}
                    >
                      <span>{opt.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Filter Section 3: Colour Palette */}
            <div>
              <span className="block text-[10px] uppercase tracking-[0.18em] text-[#8A9A86] font-medium mb-2">
                3. Colour
              </span>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {colorOptions.map((opt) => {
                  const isActive = colorFilter === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setColorFilter(opt.id)}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                        isActive
                          ? "bg-[#263B2D] text-white shadow-xs"
                          : "bg-white text-[#5C5855] border border-[#EBE6DD] hover:border-[#8A9A86] hover:text-[#1F2E24]"
                      }`}
                    >
                      {opt.id !== "all" && (
                        <span
                          className={`w-3 h-3 rounded-full shrink-0 ${
                            opt.border ? "border border-[#D8D4CC]" : ""
                          }`}
                          style={{ backgroundColor: opt.swatchHex }}
                        />
                      )}
                      <span>{opt.label}</span>
                      {isActive && <Check className="w-3 h-3" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Row: Sort order and Active Filter Badges */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-[#EBE6DD]/70">
              <div className="text-xs text-[#8A9A86] font-light">
                {filteredProducts.length === 1
                  ? "1 arrangement matches your selection"
                  : `${filteredProducts.length} arrangements match your selection`}
              </div>

              <div className="flex items-center gap-2 self-start sm:self-auto">
                <label htmlFor="shop-sort" className="text-[10px] uppercase tracking-wider text-[#8E8A85] font-medium">
                  Sort:
                </label>
                <select
                  id="shop-sort"
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value as "featured" | "price-low" | "price-high")}
                  className="bg-white border border-[#EBE6DD] rounded-full px-3 py-1 text-xs text-[#1F2E24] focus:outline-none focus:border-[#C48273] cursor-pointer"
                >
                  <option value="featured">Featured Stems</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

          </div>
        </div>

        {/* Product Cards Grid & Empty State */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 px-4 bg-[#FAF8F5] rounded-3xl border border-[#EBE6DD] mb-14 animate-fade-in">
            <p className="font-serif text-2xl text-[#1F2E24] mb-2 font-light">
              No floral designs match this exact combination.
            </p>
            <p className="text-xs text-[#5C5855] font-light mb-6 max-w-md mx-auto">
              Try choosing another colour or budget range, or reset filters to see our full floral collection.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-medium bg-[#263B2D] text-white hover:bg-[#1C2C22] transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset All Filters
            </button>
          </div>
        ) : (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 mb-14"
            aria-live="polite"
          >
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* Simple Studio Values Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-6 rounded-2xl bg-white border border-[#EBE6DD] shadow-2xs mb-10">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-[#F8ECE9] flex items-center justify-center text-[#C48273] shrink-0">
              <Truck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-sm font-medium text-[#1F2E24]">Same-Day Delivery</h3>
              <p className="text-xs text-[#5C5855] font-light mt-0.5">
                Across Barrow, Walney, Dalton, Ulverston and Furness.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-[#F8ECE9] flex items-center justify-center text-[#C48273] shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-sm font-medium text-[#1F2E24]">Fresh Morning Stems</h3>
              <p className="text-xs text-[#5C5855] font-light mt-0.5">
                Conditioned and hand-tied fresh in our 4 Napier Street studio.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-[#F8ECE9] flex items-center justify-center text-[#C48273] shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-sm font-medium text-[#1F2E24]">Bespoke Requests</h3>
              <p className="text-xs text-[#5C5855] font-light mt-0.5">
                Custom palettes and sympathy tributes tailored to your wishes.
              </p>
            </div>
          </div>
        </div>

        {/* Minimal Studio Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#F8ECE9]/30 border border-[#ECD2CC]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="font-serif text-xl sm:text-2xl text-[#1F2E24] font-normal">
              Need a bespoke floral design?
            </h2>
            <p className="text-xs text-[#5C5855] font-light mt-0.5">
              Contact our Barrow studio directly for specific blooms, sizes, or celebration tributes.
            </p>
          </div>

          <Button href="/#contact" variant="primary" size="sm" className="shrink-0 rounded-full">
            Contact Studio
            <ArrowRight className="w-3.5 h-3.5 ml-1.5 text-[#C48273]" />
          </Button>
        </div>

      </div>
    </div>
  );
}
