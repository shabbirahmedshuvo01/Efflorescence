import { NavItem } from "@/types";

export const navItems: NavItem[] = [
  { label: "Shop Flowers", href: "#shop" },
  { label: "Weddings", href: "#weddings" },
  { label: "Workshops", href: "#workshops" },
  { label: "Bereavements", href: "#bereavements" },
  { label: "Celebrations", href: "#celebrations" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];

export const footerLinks = {
  shop: [
    { label: "Hand-Tied Bouquets", href: "#shop" },
    { label: "Gift Box Designs", href: "#shop" },
    { label: "Luxury Hat Boxes", href: "#shop" },
    { label: "Seasonal Collections", href: "#shop" },
    { label: "Same-Day Barrow Delivery", href: "#contact" }
  ],
  services: [
    { label: "Bespoke Weddings", href: "#weddings" },
    { label: "Wedding Packages (£500 - £1,500)", href: "#weddings" },
    { label: "Wreath Masterclasses", href: "#workshops" },
    { label: "Funeral & Bereavement Tributes", href: "#bereavements" },
    { label: "Baby Showers & Party Styling", href: "#celebrations" }
  ]
};
