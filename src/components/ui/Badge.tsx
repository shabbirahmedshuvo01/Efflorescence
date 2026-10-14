import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "botanical" | "eucalyptus" | "terracotta" | "neutral" | "light";
  className?: string;
}

export function Badge({
  children,
  variant = "eucalyptus",
  className = "",
}: BadgeProps) {
  const variantStyles = {
    botanical: "bg-[#1F2E24] text-[#FBF9F5] border border-[#2C4033]",
    eucalyptus: "bg-[#E7ECE5] text-[#1F2E24] border border-[#D1DCD0]",
    terracotta: "bg-[#F8ECE9] text-[#8F4F42] border border-[#ECD2CC]",
    neutral: "bg-[#F3EFE8] text-[#5C5855] border border-[#E0D9CE]",
    light: "bg-white/90 backdrop-blur-sm text-[#1F2E24] border border-[#EBE6DD] shadow-xs",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.18em] font-medium transition-colors ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
