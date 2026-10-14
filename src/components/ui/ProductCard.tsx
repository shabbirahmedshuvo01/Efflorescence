"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Product } from "@/types";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { Sparkles, Check } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isAdded, setIsAdded] = useState(false);

  const handleQuickAdd = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2200);
  };

  return (
    <article className="group flex flex-col bg-white rounded-xl border border-[#EBE6DD] overflow-hidden shadow-xs transition-all duration-300 hover:shadow-md hover:border-[#8A9A86]/50">
      {/* Clean Image Container without distracting overlays */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#F3EFE8]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-104"
        />

        {/* Subtle Category/Status Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <Badge variant="terracotta">
              {product.badge}
            </Badge>
          </div>
        )}
      </div>

      {/* Product Details Area */}
      <div className="p-5 flex flex-col flex-1 justify-between bg-white">
        <div>
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="text-[10px] uppercase tracking-[0.18em] text-[#8A9A86] font-medium">
              {product.category}
            </span>
            <span className="text-base font-serif font-medium text-[#1F2E24] tracking-tight">
              {product.currency}{product.price.toFixed(2)}
            </span>
          </div>

          <h3 className="font-serif text-lg leading-snug text-[#1F2E24] mb-2 font-normal group-hover:text-[#AA6B5D] transition-colors">
            {product.name}
          </h3>

          <p className="text-xs text-[#5C5855] line-clamp-2 leading-relaxed mb-4 font-light">
            {product.description}
          </p>
        </div>

        <div className="pt-3 border-t border-[#EBE6DD] flex flex-col gap-3">
          <div className="flex items-center justify-between text-[11px] text-[#8E8A85]">
            <span className="flex items-center gap-1.5 font-light">
              <Sparkles className="w-3 h-3 text-[#C48273]" />
              {product.deliveryTime || "Hand-tied market stems"}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-[#5C5855] font-medium">
              Furness Delivery
            </span>
          </div>

          <Button
            size="sm"
            variant={isAdded ? "secondary" : "primary"}
            onClick={handleQuickAdd}
            className="w-full text-[10px] py-2"
          >
            {isAdded ? (
              <span className="flex items-center justify-center gap-1.5">
                <Check className="w-3.5 h-3.5" /> Added to Order Preview
              </span>
            ) : (
              "Order This Arrangement"
            )}
          </Button>
        </div>
      </div>
    </article>
  );
}
