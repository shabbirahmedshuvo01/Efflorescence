"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { navItems } from "@/data/navigation";
import { businessInfo } from "@/data/businessInfo";
import { Button } from "@/components/ui/Button";
import { Menu, X, ShoppingBag, Phone, ChevronDown } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isServicesOpen) {
          setIsServicesOpen(false);
          servicesButtonRef.current?.focus();
        }
        if (isOpen) {
          setIsOpen(false);
        }
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        servicesButtonRef.current &&
        !servicesButtonRef.current.contains(e.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, isServicesOpen]);

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
            className="flex flex-col items-start group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C48273] rounded-md px-1"
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
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
            {navItems.map((item) => {
              if (item.children) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button
                      ref={servicesButtonRef}
                      type="button"
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      aria-haspopup="true"
                      aria-expanded={isServicesOpen}
                      className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-[#5C5855] hover:text-[#1F2E24] transition-colors relative py-1.5 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C48273] rounded-md cursor-pointer"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 text-[#8A9A86] ${
                          isServicesOpen ? "rotate-180 text-[#C48273]" : ""
                        }`}
                      />
                    </button>

                    {/* Services Dropdown Menu */}
                    {isServicesOpen && (
                      <div
                        ref={dropdownRef}
                        role="menu"
                        aria-label="Services Submenu"
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-72 z-50 animate-fade-in"
                      >
                        <div className="bg-white rounded-2xl border border-[#EBE6DD] shadow-xl p-2.5 backdrop-blur-md">
                          <div className="px-3 py-1.5 border-b border-[#EBE6DD]/60 mb-1">
                            <span className="text-[9px] uppercase tracking-[0.22em] text-[#8A9A86] font-semibold">
                              Floral Services
                            </span>
                          </div>
                          {item.children.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              role="menuitem"
                              onClick={() => setIsServicesOpen(false)}
                              className="group block px-3 py-2.5 rounded-xl hover:bg-[#F8ECE9]/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C48273]"
                            >
                              <div className="text-xs font-serif text-[#1F2E24] font-medium group-hover:text-[#AA6B5D] transition-colors">
                                {subItem.label}
                              </div>
                              {subItem.description && (
                                <p className="text-[10px] text-[#8E8A85] line-clamp-1 font-light mt-0.5">
                                  {subItem.description}
                                </p>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[11px] uppercase tracking-[0.2em] text-[#5C5855] hover:text-[#1F2E24] transition-colors relative py-1.5 font-medium after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-[#C48273] hover:after:w-full after:transition-all after:duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C48273] rounded-sm"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`tel:${businessInfo.contact.phone}`}
              aria-label={`Call studio at ${businessInfo.contact.phoneDisplay}`}
              className="p-2.5 rounded-full text-[#5C5855] hover:text-[#1F2E24] hover:bg-[#F3EFE8] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C48273]"
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
              Shop
            </Button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              className="p-2.5 rounded-full text-[#1F2E24] hover:bg-[#F3EFE8] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C48273]"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Collapsible Navigation Drawer */}
      {isOpen && (
        <div className="lg:hidden mx-4 mt-2 mb-4 bg-white/98 backdrop-blur-md border border-[#EBE6DD] rounded-2xl p-5 shadow-2xl animate-fade-in">
          <nav className="flex flex-col space-y-1.5" aria-label="Mobile Navigation">
            {navItems.map((item) => {
              if (item.children) {
                return (
                  <div key={item.label} className="border-y border-[#EBE6DD]/60 py-2 my-1">
                    <button
                      type="button"
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                      aria-expanded={isMobileServicesOpen}
                      className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl text-xs uppercase tracking-[0.18em] font-medium text-[#1F2E24] hover:bg-[#F8ECE9] hover:text-[#AA6B5D] transition-all text-left"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#8A9A86] transition-transform duration-200 ${
                          isMobileServicesOpen ? "rotate-180 text-[#C48273]" : ""
                        }`}
                      />
                    </button>

                    {isMobileServicesOpen && (
                      <div className="pl-4 pr-1 pt-1 space-y-1">
                        {item.children.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 rounded-lg text-xs font-serif text-[#5C5855] hover:text-[#1F2E24] hover:bg-[#FAF8F5] transition-colors"
                          >
                            <span className="font-medium text-[#1F2E24] block">{subItem.label}</span>
                            {subItem.description && (
                              <span className="text-[10px] text-[#8E8A85] block font-light">
                                {subItem.description}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3.5 py-2.5 rounded-xl text-xs uppercase tracking-[0.18em] font-medium text-[#1F2E24] hover:bg-[#F8ECE9] hover:text-[#AA6B5D] transition-all"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-4 mt-3 border-t border-[#EBE6DD] flex flex-col gap-3">
            <div className="text-xs text-[#5C5855] px-3 space-y-0.5">
              <p className="font-medium text-[#1F2E24]">Studio at 4 Napier Street, Barrow</p>
              <p className="text-[11px] text-[#8E8A85]">Tue–Fri: 9am–1pm · Sat: 9am–12pm</p>
            </div>
            <a
              href={`tel:${businessInfo.contact.phone}`}
              className="flex items-center justify-center gap-2 py-3 px-4 bg-[#263B2D] rounded-xl text-xs uppercase tracking-wider font-medium text-[#FBF9F5] shadow-xs hover:bg-[#1A281F] transition-all"
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
