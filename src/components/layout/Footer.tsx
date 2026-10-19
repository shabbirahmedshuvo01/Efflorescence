import React from "react";
import Link from "next/link";
import { businessInfo } from "@/data/businessInfo";
import { footerLinks, socialLinks } from "@/data/navigation";
import { Phone, Mail, MapPin, Heart, ArrowUp } from "lucide-react";
import { CurrentYear } from "@/components/ui/CurrentYear";

function InstagramIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="url(#footer-instagram-gradient)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="footer-instagram-gradient" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#833AB4" />
          <stop offset="25%" stopColor="#C13584" />
          <stop offset="50%" stopColor="#E1306C" />
          <stop offset="75%" stopColor="#FD1D1D" />
          <stop offset="90%" stopColor="#F56040" />
          <stop offset="100%" stopColor="#FCAF45" />
        </linearGradient>
      </defs>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <circle cx="17.5" cy="6.5" r="1.25" fill="url(#footer-instagram-gradient)" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#1877F2"
      className={className}
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function PinterestIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#BD081C"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2a10 10 0 0 0-3.6 19.3c-.04-.84-.08-2.14.02-3.06.09-.83.58-5.32.58-5.32s-.15-.3-.15-.74c0-.69.4-1.21.9-1.21.43 0 .63.32.63.7 0 .43-.27 1.07-.42 1.67-.12.5.25.92.75.92 1 0 1.77-1.05 1.77-2.58 0-1.35-.97-2.3-2.36-2.3-1.6 0-2.54 1.2-2.54 2.44 0 .48.19 1 .42 1.28.05.05.05.1.04.16-.04.16-.14.58-.16.66-.02.1-.08.12-.18.07-.67-.31-1.08-1.28-1.08-2.06 0-1.68 1.22-3.22 3.52-3.22 1.85 0 3.28 1.32 3.28 3.08 0 1.84-1.16 3.32-2.77 3.32-.54 0-1.05-.28-1.22-.61l-.33 1.27c-.12.47-.45 1.05-.67 1.41A10 10 0 1 0 12 2z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-white text-[#263B2D] border-t border-[#EBE6DD] pt-14 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-10 border-b border-[#EBE6DD]">
          
          {/* Column 1: Brand Info, Studio Address & Social Area */}
          <div className="lg:col-span-2 space-y-3.5">
            <Link href="/" className="inline-block focus-visible:outline-none group">
              <span className="font-serif text-2xl tracking-[0.24em] uppercase text-[#1F2E24] font-light transition-colors group-hover:text-[#C48273]">
                Efflorescence
              </span>
              <span className="block text-[9px] tracking-[0.32em] uppercase text-[#8A9A86] font-medium -mt-1">
                Florist · Barrow-in-Furness
              </span>
            </Link>

            <p className="text-xs text-[#5C5855] leading-relaxed max-w-sm font-light">
              Award-winning independent floral studio specializing in bespoke weddings, daily bouquets, and workshops in Cumbria.
            </p>

            <div className="pt-2 space-y-2 text-xs text-[#5C5855] font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C48273] shrink-0 mt-0.5" />
                <span>{businessInfo.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C48273] shrink-0" />
                <a
                  href={`tel:${businessInfo.contact.phone}`}
                  className="hover:text-[#C48273] transition-colors font-medium text-[#1F2E24]"
                >
                  {businessInfo.contact.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C48273] shrink-0" />
                <a
                  href={`mailto:${businessInfo.contact.email}`}
                  className="hover:text-[#C48273] transition-colors"
                >
                  {businessInfo.contact.email}
                </a>
              </div>
            </div>

            {/* Social Media Area: Clean, restrained & non-navigating until official URLs are confirmed */}
            <div className="pt-2">
              <span className="text-[10px] uppercase tracking-[0.16em] text-[#8A9A86] font-medium block mb-2">
                Follow Studio
              </span>
              <div className="flex items-center gap-2">
                {socialLinks.map((item) => {
                  const Icon =
                    item.platform === "Instagram"
                      ? InstagramIcon
                      : item.platform === "Facebook"
                      ? FacebookIcon
                      : PinterestIcon;

                  if (item.url) {
                    return (
                      <a
                        key={item.platform}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.ariaLabel}
                        className="p-2 rounded-full bg-[#FAF8F5] border border-[#EBE6DD] hover:bg-white hover:border-[#C48273]/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C48273] shadow-2xs"
                      >
                        <Icon className="w-3.5 h-3.5 shrink-0" />
                        <span className="sr-only">{item.platform}</span>
                      </a>
                    );
                  }

                  return (
                    <span
                      key={item.platform}
                      role="img"
                      aria-label={item.ariaLabel}
                      title={`${item.platform} (official profile awaiting client confirmation)`}
                      className="group relative inline-flex items-center justify-center p-2 rounded-full bg-[#FAF8F5] border border-[#EBE6DD] cursor-default select-none transition-colors hover:bg-white hover:border-[#C48273]/50 shadow-2xs"
                    >
                      <Icon className="w-3.5 h-3.5 shrink-0" />
                      <span className="sr-only">({item.platform} profile awaiting client confirmation)</span>
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block px-2 py-1 rounded bg-[#1F2E24] text-white text-[10px] whitespace-nowrap shadow-md z-30"
                      >
                        {item.platform}: Pending client confirmation
                      </span>
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column 2: Floral Collections */}
          <div>
            <h4 className="font-serif text-base text-[#1F2E24] mb-3 tracking-wide font-normal">
              Flowers
            </h4>
            <ul className="space-y-2 text-xs text-[#5C5855] font-light">
              {footerLinks.shop.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="hover:text-[#1F2E24] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Event & Bespoke Services */}
          <div>
            <h4 className="font-serif text-base text-[#1F2E24] mb-3 tracking-wide font-normal">
              Services
            </h4>
            <ul className="space-y-2 text-xs text-[#5C5855] font-light">
              {footerLinks.services.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="hover:text-[#1F2E24] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Studio & Hours */}
          <div>
            <h4 className="font-serif text-base text-[#1F2E24] mb-3 tracking-wide font-normal">
              Hours
            </h4>
            <ul className="space-y-2 text-xs text-[#5C5855] font-light">
              {businessInfo.openingHours.map((slot, idx) => (
                <li key={idx} className="pb-1.5 border-b border-[#EBE6DD]/60 last:border-none">
                  <span className="block text-[#1F2E24] font-medium">{slot.days}</span>
                  <span className="text-[#8A9A86] text-[11px]">{slot.hours}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Legal Links & Back-to-Top */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8A9A86] font-light">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p>© <CurrentYear fallback={2026} /> Efflorescence Ltd. All rights reserved.</p>
            <span className="hidden sm:inline text-[#EBE6DD]" aria-hidden="true">
              ·
            </span>
            <nav aria-label="Legal & Policies" className="flex items-center gap-3 text-[11px]">
              {footerLinks.legal.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-[#1F2E24] transition-colors underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C48273] rounded-xs"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-xs text-[#5C5855]">
              Handcrafted in Cumbria <Heart className="w-3.5 h-3.5 text-[#C48273] fill-[#C48273]" />
            </span>
            <a
              href="#top"
              aria-label="Back to top"
              className="p-2 rounded-full bg-white border border-[#EBE6DD] text-[#263B2D] hover:bg-[#F8ECE9] hover:text-[#C48273] transition-colors shadow-xs cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C48273]"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
