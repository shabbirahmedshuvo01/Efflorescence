import { NavItem } from "@/types";

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Shop Flowers", href: "/shop" },
  { label: "Weddings", href: "/weddings" },
  { label: "Workshops", href: "/workshops" },
  { label: "Bereavements", href: "/#bereavements" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" }
];

export const footerLinks = {
  shop: [
    { label: "All Flowers", href: "/shop" },
    { label: "Hand-Tied Bouquets", href: "/shop" },
    { label: "Gift Box Designs", href: "/shop" },
    { label: "Luxury Hat Boxes", href: "/shop" },
    { label: "Same-Day Delivery", href: "/#contact" }
  ],
  services: [
    { label: "Bespoke Weddings", href: "/weddings" },
    { label: "Wedding Packages", href: "/weddings" },
    { label: "Wreath Masterclasses", href: "/workshops" },
    { label: "Events & Styling", href: "/workshops" },
    { label: "Funeral Tributes", href: "/#bereavements" }
  ],
  legal: [
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Cookie Policy", href: "/cookies" }
  ]
};

export interface SocialLink {
  platform: "Instagram" | "Facebook" | "Pinterest";
  url: string | null;
  ariaLabel: string;
  statusNote: string;
}

/**
 * Social media links are stored centrally and kept null until the client (Sajjad) confirms official URLs.
 * Icons render in an inactive state without external navigation until an official URL is assigned.
 */
export const socialLinks: SocialLink[] = [
  {
    platform: "Instagram",
    url: null,
    ariaLabel: "Efflorescence on Instagram (official link awaiting client confirmation)",
    statusNote: "Awaiting confirmation"
  },
  {
    platform: "Facebook",
    url: null,
    ariaLabel: "Efflorescence on Facebook (official link awaiting client confirmation)",
    statusNote: "Awaiting confirmation"
  },
  {
    platform: "Pinterest",
    url: null,
    ariaLabel: "Efflorescence on Pinterest (official link awaiting client confirmation)",
    statusNote: "Awaiting confirmation"
  }
];
