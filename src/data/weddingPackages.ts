import { WeddingPackage } from "@/types";

export const weddingPackages: WeddingPackage[] = [
  {
    id: "simplicity",
    name: "The Simplicity Package",
    price: 500,
    tagline: "Understated elegance for intimate celebrations and registry ceremonies.",
    idealFor: "Ideal for intimate micro-weddings and civil ceremonies",
    featured: false,
    inclusions: [
      "1 × Bride's Handtied Bouquet",
      "2 × Bridesmaids' Handtied Bouquets",
      "6 × Gents' Buttonholes",
      "6 × Simple Table Vase Centrepiece Designs",
      "1 × Registrar Table Floral Arrangement"
    ],
    termsNote: "Seasonal date supplements may apply during Valentine's, Mother's Day & Christmas peak weeks."
  },
  {
    id: "elegance",
    name: "The Elegance Package",
    price: 850,
    tagline: "A cohesive floral styling package designed for full bridal party and reception presence.",
    idealFor: "A balanced floral arrangement for classic wedding celebrations",
    featured: true,
    inclusions: [
      "1 × Bride's Handtied Signature Bouquet",
      "2 × Bridesmaids' Bouquets",
      "6 × Gents' Classic Buttonholes",
      "2 × Ladies' Fancy Floral Buttonholes",
      "6 × Table Posy Centrepieces",
      "1 × Registrar / Ceremony Table Design"
    ],
    termsNote: "Minimum wedding service spend is £150. £50 booking fee secures your date upon quotation."
  },
  {
    id: "romance",
    name: "The Romance Package",
    price: 1500,
    tagline: "The complete luxury floral experience, from dramatic aisle styling to reception grandeur.",
    idealFor: "Perfect for large celebrations seeking immersive floral styling",
    featured: false,
    inclusions: [
      "1 × Bride's Handtied or Cascading Shower Bouquet",
      "3 × Bridesmaids' Bouquets",
      "8 × Gents' Buttonholes",
      "2 × Ladies' Delicate Corsages",
      "8 × Luxurious Table Centre Designs",
      "1 × Top Table Statement Floral Decoration",
      "Aisle & Ceremony Venue Floral Accents"
    ],
    termsNote: "Includes morning-of-wedding delivery, complete venue styling, and next-day prop collection."
  }
];
