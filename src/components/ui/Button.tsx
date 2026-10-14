import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "terracotta" | "dark-outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  href,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium tracking-[0.14em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C48273] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-lg text-xs uppercase cursor-pointer select-none active:scale-[0.99]";

  const sizeStyles = {
    sm: "px-4 py-2.5 text-[10px] tracking-[0.16em]",
    md: "px-6 py-3 text-[11px] tracking-[0.16em]",
    lg: "px-8 py-3.5 text-xs tracking-[0.18em]",
  };

  const variantStyles = {
    primary:
      "bg-[#263B2D] text-[#FBF9F5] hover:bg-[#1C2C22] active:bg-[#15231B] border border-[#263B2D]",
    secondary:
      "bg-[#8A9A86] text-[#FBF9F5] hover:bg-[#687964] active:bg-[#596756] border border-[#8A9A86]",
    terracotta:
      "bg-[#C48273] text-[#FBF9F5] hover:bg-[#AA6B5D] active:bg-[#8F4F42] border border-[#C48273]",
    outline:
      "border border-[#263B2D] text-[#263B2D] bg-transparent hover:bg-[#263B2D] hover:text-[#FBF9F5]",
    "dark-outline":
      "border border-[#E7ECE5]/40 text-[#FBF9F5] bg-transparent hover:bg-[#FBF9F5] hover:text-[#263B2D]",
    ghost:
      "text-[#263B2D] hover:bg-[#F3EFE8] border border-transparent",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
