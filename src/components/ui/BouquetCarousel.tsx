"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { featuredProducts } from "@/data/products";
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from "lucide-react";

export function BouquetCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScrollState = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);

    // Calculate approximate active item index
    const cardWidth = el.querySelector("article")?.clientWidth || 280;
    const gap = 16;
    const index = Math.round(el.scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.min(Math.max(index, 0), featuredProducts.length - 1));
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    checkScrollState();
    el.addEventListener("scroll", checkScrollState, { passive: true });
    window.addEventListener("resize", checkScrollState);

    return () => {
      el.removeEventListener("scroll", checkScrollState);
      window.removeEventListener("resize", checkScrollState);
    };
  }, [checkScrollState]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const cardWidth = el.querySelector("article")?.clientWidth || 280;
    const scrollAmount = (cardWidth + 16) * (direction === "left" ? -1 : 1);
    el.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      scroll("left");
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      scroll("right");
    }
  };

  return (
    <div
      className="relative w-full"
      role="region"
      aria-roledescription="carousel"
      aria-label="Handcrafted Flower Bouquets & Gift Boxes"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Top Carousel Navigation Controls & Slide Counter */}
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C48273] animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#8A9A86] font-semibold">
            Swipe Bunches ({activeIndex + 1}/{featuredProducts.length})
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Previous flower bunch"
            className={`p-2 rounded-full border transition-all cursor-pointer ${
              canScrollLeft
                ? "bg-white text-[#1F2E24] border-[#EBE6DD] hover:bg-[#F8ECE9] hover:text-[#C48273] shadow-xs"
                : "bg-white/50 text-[#C4C0BA] border-[#EBE6DD]/60 cursor-not-allowed opacity-40"
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Next flower bunch"
            className={`p-2 rounded-full border transition-all cursor-pointer ${
              canScrollRight
                ? "bg-white text-[#1F2E24] border-[#EBE6DD] hover:bg-[#F8ECE9] hover:text-[#C48273] shadow-xs"
                : "bg-white/50 text-[#C4C0BA] border-[#EBE6DD]/60 cursor-not-allowed opacity-40"
            }`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Swipeable Horizontal Scroll Track */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-none focus:outline-none scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {featuredProducts.map((product, idx) => (
          <article
            key={product.id}
            aria-label={`${product.name}, £${product.price.toFixed(2)}`}
            className="snap-start shrink-0 w-[240px] sm:w-[270px] md:w-[290px] bg-white rounded-2xl border border-[#EBE6DD] overflow-hidden shadow-xs hover:shadow-md hover:border-[#8A9A86]/50 transition-all duration-300 flex flex-col group"
          >
            {/* Bouquet Image Frame */}
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#FAF8F5]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 240px, 290px"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                priority={idx < 2}
              />

              {/* Tag/Badge Overlay */}
              {product.badge && (
                <div className="absolute top-2.5 left-2.5 z-10">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[9px] uppercase tracking-[0.16em] font-medium bg-white/95 text-[#263B2D] border border-[#EBE6DD] shadow-xs backdrop-blur-xs">
                    {product.badge}
                  </span>
                </div>
              )}

              {/* Quick Type Pill */}
              <div className="absolute bottom-2.5 right-2.5 z-10">
                <span className="inline-block px-2 py-0.5 rounded-md text-[9px] uppercase tracking-wider font-medium bg-[#263B2D]/85 text-white backdrop-blur-xs">
                  {product.arrangementType === "box" ? "Box Arrangement" : "Hand-Tied Bunch"}
                </span>
              </div>
            </div>

            {/* Bouquet Details & Action */}
            <div className="p-3.5 sm:p-4 flex flex-col flex-1 justify-between bg-white">
              <div>
                <div className="flex items-baseline justify-between gap-2 mb-1">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#8A9A86] font-medium truncate">
                    {product.colorLabel || product.category}
                  </span>
                  <span className="text-base font-serif font-medium text-[#1F2E24] tracking-tight">
                    {product.currency}{product.price.toFixed(2)}
                  </span>
                </div>

                <h3 className="font-serif text-sm sm:text-base text-[#1F2E24] leading-snug font-normal line-clamp-1 group-hover:text-[#AA6B5D] transition-colors mb-1.5">
                  {product.name}
                </h3>

                <p className="text-[11px] text-[#5C5855] line-clamp-2 font-light leading-relaxed mb-3">
                  {product.description}
                </p>
              </div>

              <div className="pt-2.5 border-t border-[#EBE6DD]/70 flex items-center justify-between">
                <span className="text-[10px] text-[#8E8A85] flex items-center gap-1 font-light">
                  <Sparkles className="w-3 h-3 text-[#C48273]" />
                  Same-day delivery
                </span>

                <Link
                  href="/shop"
                  className="inline-flex items-center gap-1 text-[11px] font-medium uppercase tracking-wider text-[#263B2D] hover:text-[#C48273] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C48273] rounded-sm py-1"
                >
                  <span>Select</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Mobile Swipe Cue */}
      <div className="sm:hidden flex items-center justify-center pt-1 text-[10px] text-[#8A9A86] font-light">
        <span>← Swipe to explore more stems →</span>
      </div>
    </div>
  );
}
