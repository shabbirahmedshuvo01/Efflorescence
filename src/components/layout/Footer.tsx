import React from "react";
import Link from "next/link";
import { businessInfo } from "@/data/businessInfo";
import { footerLinks } from "@/data/navigation";
import { Phone, Mail, MapPin, Heart, ArrowUp } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

function PinterestIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.332 1.365-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-white text-[#263B2D] border-t border-[#EBE6DD] pt-12 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8 pb-10 border-b border-[#EBE6DD]">
          
          {/* Column 1: Brand Info & Studio Address */}
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

            <div className="pt-1 space-y-1.5 text-xs text-[#5C5855] font-light">
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

            {/* Social Profile Icons (Unconfirmed - No dummy links) */}
            <div className="pt-2 flex items-center gap-2.5">
              <span
                role="button"
                tabIndex={0}
                aria-label="Instagram (channel pending client confirmation)"
                title="Instagram (channel pending client confirmation)"
                className="w-8 h-8 rounded-full border border-[#EBE6DD] bg-white text-[#5C5855] hover:text-[#C48273] hover:border-[#C48273] transition-colors flex items-center justify-center shadow-2xs cursor-default"
              >
                <InstagramIcon className="w-4 h-4" />
              </span>
              <span
                role="button"
                tabIndex={0}
                aria-label="Facebook (channel pending client confirmation)"
                title="Facebook (channel pending client confirmation)"
                className="w-8 h-8 rounded-full border border-[#EBE6DD] bg-white text-[#5C5855] hover:text-[#C48273] hover:border-[#C48273] transition-colors flex items-center justify-center shadow-2xs cursor-default"
              >
                <FacebookIcon className="w-4 h-4" />
              </span>
              <span
                role="button"
                tabIndex={0}
                aria-label="Pinterest (channel pending client confirmation)"
                title="Pinterest (channel pending client confirmation)"
                className="w-8 h-8 rounded-full border border-[#EBE6DD] bg-white text-[#5C5855] hover:text-[#C48273] hover:border-[#C48273] transition-colors flex items-center justify-center shadow-2xs cursor-default"
              >
                <PinterestIcon className="w-3.5 h-3.5" />
              </span>
              <span className="text-[10px] text-[#8E8A85] font-light">
                Channels pending client confirmation
              </span>
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
              Studio Hours
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

        {/* Bottom Bar: Copyright & Legal Draft Links */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8A9A86] font-light">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
            <p>© 2026 Efflorescence Ltd. All rights reserved.</p>
            <div className="flex items-center gap-3 text-[11px]">
              <Link href="/terms" className="hover:text-[#1F2E24] transition-colors">
                Terms (Draft)
              </Link>
              <span>·</span>
              <Link href="/privacy" className="hover:text-[#1F2E24] transition-colors">
                Privacy (Draft)
              </Link>
              <span>·</span>
              <Link href="/cookies" className="hover:text-[#1F2E24] transition-colors">
                Cookies (Draft)
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-xs text-[#5C5855]">
              Handcrafted in Cumbria <Heart className="w-3.5 h-3.5 text-[#C48273] fill-[#C48273]" />
            </span>
            <a
              href="#top"
              aria-label="Back to top"
              className="p-2 rounded-full bg-white border border-[#EBE6DD] text-[#263B2D] hover:bg-[#F8ECE9] hover:text-[#C48273] transition-colors shadow-2xs cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
