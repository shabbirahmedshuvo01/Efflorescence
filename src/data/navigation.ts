import { NavItem } from "@/types";

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  {
    label: "Services",
    href: "/#services",
    children: [
      {
        label: "Weddings",
        href: "/weddings",
        description: "Bridal bouquets, packages & bespoke Lake District styling"
      },
      {
        label: "Bereavements",
        href: "/#bereavements",
        description: "Sympathy sprays, funeral tributes & sensitive liaison"
      },
      {
        label: "Workshops",
        href: "/workshops",
        description: "Seasonal floral masterclasses & wreath workshops"
      },
      {
        label: "Events & Styling",
        href: "/workshops#parties",
        description: "Celebration floral backdrops & private party floristry"
      }
    ]
  },
  { label: "Contact", href: "/#contact" }
];

export const footerLinks = {
  shop: [
    { label: "All Flowers", href: "/shop" },
    { label: "Hand-Tied Bouquets", href: "/shop?type=bunch" },
    { label: "Gift Box Designs", href: "/shop?type=box" },
    { label: "Hat Box Collections", href: "/shop?type=box" },
    { label: "Same-Day Delivery", href: "/#contact" }
  ],
  services: [
    { label: "Weddings & Packages", href: "/weddings" },
    { label: "Bereavements & Tributes", href: "/#bereavements" },
    { label: "Workshops & Masterclasses", href: "/workshops" },
    { label: "Event Floristry & Parties", href: "/workshops#parties" },
    { label: "Studio Consultations", href: "/#contact" }
  ],
  legal: [
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Cookie Policy", href: "/cookies" }
  ]
};
