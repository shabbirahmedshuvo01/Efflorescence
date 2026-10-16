import React from "react";
import { WeddingPackage } from "@/types";
import { Button } from "./Button";
import { Check, Sparkles } from "lucide-react";

interface PackageCardProps {
  pkg: WeddingPackage;
}

export function PackageCard({ pkg }: PackageCardProps) {
  return (
    <div
      className={`relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl transition-all duration-300 bg-white ${
        pkg.featured
          ? "border-2 border-[#C48273] shadow-md lg:-translate-y-2 ring-4 ring-[#F8ECE9]"
          : "border border-[#EBE6DD] shadow-xs hover:border-[#8A9A86]/50 hover:shadow-sm"
      }`}
    >
      {/* Featured Ribbon / Badge */}
      {pkg.featured && (
        <div className="absolute -top-3.5 left-6">
          <span className="px-3.5 py-1 rounded-full text-[9px] uppercase tracking-[0.2em] font-semibold bg-[#C48273] text-white shadow-xs">
            Signature Selection
          </span>
        </div>
      )}

      <div>
        <div className="mb-5">
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium block mb-1 text-[#8A9A86]">
            Curated Wedding Package
          </span>
          <h3 className="font-serif text-2xl tracking-tight mb-1.5 font-normal text-[#1F2E24]">
            {pkg.name}
          </h3>
          <p className="text-xs leading-relaxed font-light text-[#5C5855]">
            {pkg.tagline}
          </p>
        </div>

        {/* Pricing Display */}
        <div className="py-4 my-3 border-y border-[#EBE6DD] flex items-baseline gap-2">
          <span className="font-serif text-4xl font-light tracking-tight text-[#1F2E24]">
            £{pkg.price}
          </span>
          <span className="text-xs tracking-wider uppercase font-medium text-[#8E8A85]">
            Guide Price
          </span>
        </div>

        {/* Inclusions List */}
        <div className="mb-6">
          <div className="text-[11px] font-medium uppercase tracking-[0.16em] mb-3 text-[#1F2E24]">
            Inclusions:
          </div>
          <ul className="space-y-2.5">
            {pkg.inclusions.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs leading-normal">
                <Check className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#C48273]" />
                <span className="font-light text-[#242220]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        {/* Booking Terms Note */}
        <div className="p-3.5 rounded-2xl text-[11px] leading-relaxed mb-6 border bg-[#F8ECE9]/25 border-[#ECD2CC]/50 text-[#5C5855]">
          <div className="flex items-center gap-1.5 font-medium mb-1 text-[10px] uppercase tracking-wider text-[#C48273]">
            <Sparkles className="w-3 h-3 text-[#C48273]" />
            <span>Note:</span>
          </div>
          <p className="text-[10px] leading-relaxed font-light">{pkg.termsNote}</p>
        </div>

        <Button
          href="/weddings#enquire"
          variant={pkg.featured ? "primary" : "outline"}
          size="md"
          className="w-full justify-center rounded-full"
        >
          Check Availability
        </Button>
      </div>
    </div>
  );
}
