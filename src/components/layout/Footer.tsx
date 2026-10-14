import React from "react";
import { businessInfo } from "@/data/businessInfo";
import { footerLinks } from "@/data/navigation";
import { Phone, Mail, MapPin, Heart, ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#111B14] text-[#FBF9F5] border-t border-[#2C4033] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#2C4033]/70">
          
          {/* Column 1: Brand Info & Studio Address */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#top" className="inline-block focus-visible:outline-none group">
              <span className="font-serif text-3xl tracking-[0.24em] uppercase text-[#FBF9F5] font-light transition-colors group-hover:text-[#C48273]">
                Efflorescence
              </span>
              <span className="block text-[9px] tracking-[0.32em] uppercase text-[#8A9A86] font-medium -mt-1">
                Florist · Barrow-in-Furness · Cumbria
              </span>
            </a>

            <p className="text-xs text-[#E7ECE5]/80 leading-relaxed max-w-sm font-light">
              Award-winning independent floral studio specializing in bespoke wedding flowers, thoughtful bereavement tributes, artisan daily bouquets, and creative community workshops.
            </p>

            <div className="pt-2 space-y-2.5 text-xs text-[#E7ECE5]/90 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C48273] shrink-0 mt-0.5" />
                <span>{businessInfo.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C48273] shrink-0" />
                <a
                  href={`tel:${businessInfo.contact.phone}`}
                  className="hover:text-[#C48273] transition-colors font-medium"
                >
                  Studio: {businessInfo.contact.phoneDisplay}
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
          </div>

          {/* Column 2: Floral Collections */}
          <div>
            <h4 className="font-serif text-base text-[#FBF9F5] mb-4 tracking-wide font-normal">
              Shop Collections
            </h4>
            <ul className="space-y-2.5 text-xs text-[#E7ECE5]/75 font-light">
              {footerLinks.shop.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-[#FBF9F5] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Event & Bespoke Services */}
          <div>
            <h4 className="font-serif text-base text-[#FBF9F5] mb-4 tracking-wide font-normal">
              Services &amp; Events
            </h4>
            <ul className="space-y-2.5 text-xs text-[#E7ECE5]/75 font-light">
              {footerLinks.services.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-[#FBF9F5] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Studio & Hours */}
          <div>
            <h4 className="font-serif text-base text-[#FBF9F5] mb-4 tracking-wide font-normal">
              Studio Hours
            </h4>
            <ul className="space-y-2.5 text-xs text-[#E7ECE5]/75 font-light">
              {businessInfo.openingHours.map((slot, idx) => (
                <li key={idx} className="pb-2 border-b border-[#2C4033]/40 last:border-none">
                  <span className="block text-[#FBF9F5] font-medium">{slot.days}</span>
                  <span className="text-[#8A9A86] text-[11px]">{slot.hours}</span>
                  {slot.note && (
                    <span className="block text-[10px] text-[#E7ECE5]/60 italic mt-0.5">
                      {slot.note}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A9A86] font-light">
          <p>© 2026 Efflorescence Ltd. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-xs">
              Crafted with <Heart className="w-3.5 h-3.5 text-[#C48273] fill-[#C48273]" /> in Cumbria
            </span>
            <a
              href="#top"
              aria-label="Back to top"
              className="p-2.5 rounded-lg bg-[#24352A] text-[#FBF9F5] hover:bg-[#C48273] transition-colors shadow-sm cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
