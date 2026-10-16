"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { navItems } from "@/data/navigation";
import { businessInfo } from "@/data/businessInfo";
import { Button } from "@/components/ui/Button";
import { Menu, X, ShoppingBag, Phone } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
           ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-[#EBE6DD]/80 py-1.5"
           : "bg-white border-b border-[#EBE6DD]/60 py-2.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Editorial Wordmark Logo */}
          <Link
            href="/"
            className="flex flex-col items-start group focus-visible:outline-none"
            aria-label="Efflorescence Florist Home"
          >
            <span className="font-serif text-2xl md:text-3xl tracking-[0.24em] uppercase text-[#1F2E24] font-light transition-colors group-hover:text-[#AA6B5D]">
              Efflorescence
            </span>
            <span className="text-[9px] tracking-[0.32em] uppercase text-[#8A9A86] font-medium -mt-1">
              Barrow-in-Furness · Cumbria
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[11px] uppercase tracking-[0.2em] text-[#5C5855] hover:text-[#1F2E24] transition-colors relative py-1.5 font-medium after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-[#C48273] hover:after:w-full after:transition-all after:duration-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`tel:${businessInfo.contact.phone}`}
              aria-label="Call studio"
              className="p-2.5 rounded-full text-[#5C5855] hover:text-[#1F2E24] hover:bg-[#F3EFE8] transition-all"
            >
              <Phone className="w-4 h-4" />
            </a>

            <Button href="/shop" variant="primary" size="sm" className="shadow-xs hover:shadow-md rounded-full">
              <ShoppingBag className="w-3.5 h-3.5 mr-2 text-[#C48273]" />
              Order Flowers
            </Button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center space-x-2.5 lg:hidden">
            <Button href="/shop" variant="primary" size="sm" className="px-4 py-2 text-[10px] rounded-full">
              Order
            </Button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              className="p-2.5 rounded-full text-[#1F2E24] hover:bg-[#F3EFE8] transition-colors cursor-pointer"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Collapsible Navigation Drawer */}
      {isOpen && (
        <div className="lg:hidden mx-4 mt-2 mb-4 bg-white/95 backdrop-blur-md border border-[#EBE6DD] rounded-2xl p-5 shadow-2xl animate-fade-in">
          <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="px-3.5 py-2.5 rounded-xl text-xs uppercase tracking-[0.18em] font-medium text-[#1F2E24] hover:bg-[#F8ECE9] hover:text-[#AA6B5D] transition-all"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="pt-4 mt-3 border-t border-[#EBE6DD] flex flex-col gap-3">
            <div className="text-xs text-[#5C5855] px-3 space-y-1">
              <p className="font-medium text-[#1F2E24]">Studio at 4 Napier Street</p>
              <p className="text-[11px]">Tue–Fri: 9am–1pm · Sat: 9am–12pm</p>
            </div>
            <a
              href={`tel:${businessInfo.contact.phone}`}
              className="flex items-center justify-center gap-2 py-3 px-4 bg-[#263B2D] rounded-lg text-xs uppercase tracking-wider font-medium text-[#FBF9F5] shadow-xs hover:bg-[#1A281F] transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#C48273]" />
              Call Studio: {businessInfo.contact.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
