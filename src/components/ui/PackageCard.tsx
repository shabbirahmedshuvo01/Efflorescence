import React from "react";
import { WeddingPackage } from "@/types";
import { Button } from "./Button";
import { Badge } from "./Badge";
import { Check, Sparkles } from "lucide-react";

interface PackageCardProps {
  pkg: WeddingPackage;
}

export function PackageCard({ pkg }: PackageCardProps) {
  return (
    <div
      className={`relative flex flex-col justify-between p-7 sm:p-8 rounded-2xl transition-all duration-300 ${
        pkg.featured
          ? "bg-[#263B2D] text-[#FBF9F5] shadow-lg border-2 border-[#8A9A86]/40 lg:-translate-y-2"
          : "bg-white text-[#242220] border border-[#EBE6DD] shadow-xs hover:border-[#8A9A86]/40"
      }`}
    >
      {/* Featured Ribbon / Badge */}
      {pkg.featured && (
        <div className="absolute -top-3 left-6">
          <Badge variant="terracotta" className="px-3 py-1 text-[9px] tracking-[0.2em] font-medium shadow-xs">
            Signature Selection
          </Badge>
        </div>
      )}

      <div>
        <div className="mb-5">
          <span
            className={`text-[10px] uppercase tracking-[0.2em] font-medium block mb-1.5 ${
              pkg.featured ? "text-[#E7ECE5]" : "text-[#8A9A86]"
            }`}
          >
            Curated Wedding Package
          </span>
          <h3
            className={`font-serif text-2xl tracking-tight mb-2 font-normal ${
              pkg.featured ? "text-[#FBF9F5]" : "text-[#1F2E24]"
            }`}
          >
            {pkg.name}
          </h3>
          <p
            className={`text-xs leading-relaxed font-light ${
              pkg.featured ? "text-[#E7ECE5]/80" : "text-[#5C5855]"
            }`}
          >
            {pkg.tagline}
          </p>
        </div>

        {/* Pricing Display */}
        <div className="py-4 my-3 border-y border-current/15 flex items-baseline gap-2">
          <span
            className={`font-serif text-4xl font-light tracking-tight ${
              pkg.featured ? "text-[#FBF9F5]" : "text-[#1F2E24]"
            }`}
          >
            £{pkg.price}
          </span>
          <span
            className={`text-xs tracking-wider uppercase font-medium ${
              pkg.featured ? "text-[#E7ECE5]/70" : "text-[#8E8A85]"
            }`}
          >
            Guide Price
          </span>
        </div>

        {/* Inclusions List */}
        <div className="mb-6">
          <div
            className={`text-[11px] font-medium uppercase tracking-[0.16em] mb-3.5 ${
              pkg.featured ? "text-[#E7ECE5]" : "text-[#1F2E24]"
            }`}
          >
            Package Inclusions:
          </div>
          <ul className="space-y-3">
            {pkg.inclusions.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs leading-normal">
                <Check
                  className={`w-4 h-4 shrink-0 mt-0.5 ${
                    pkg.featured ? "text-[#8A9A86]" : "text-[#C48273]"
                  }`}
                />
                <span className={`font-light ${pkg.featured ? "text-[#FBF9F5]" : "text-[#242220]"}`}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        {/* Booking Terms Note */}
        <div
          className={`p-3.5 rounded-xl text-[11px] leading-relaxed mb-6 border ${
            pkg.featured
              ? "bg-[#1C2C22] border-[#8A9A86]/25 text-[#E7ECE5]/80"
              : "bg-[#F7F4EE] border-[#EBE6DD] text-[#5C5855]"
          }`}
        >
          <div className="flex items-center gap-1.5 font-medium mb-1 text-[10px] uppercase tracking-wider">
            <Sparkles className="w-3 h-3 text-[#C48273]" />
            <span>Package Note:</span>
          </div>
          <p className="text-[10px] leading-relaxed font-light">{pkg.termsNote}</p>
        </div>

        <Button
          href="#contact"
          variant={pkg.featured ? "terracotta" : "primary"}
          size="md"
          className="w-full justify-center"
        >
          Enquire About Availability
        </Button>
      </div>
    </div>
  );
}
