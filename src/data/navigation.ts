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
  ]
};
