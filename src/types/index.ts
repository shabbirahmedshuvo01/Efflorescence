export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  currency: string;
  description: string;
  image: string;
  badge?: string;
  deliveryTime?: string;
  arrangementType?: "box" | "bunch";
  colorGroup?: "white" | "pastel" | "warm" | "green";
  colorLabel?: string;
}

export interface WeddingPackage {
  id: string;
  name: string;
  price: number;
  tagline: string;
  idealFor: string;
  featured?: boolean;
  inclusions: string[];
  termsNote: string;
}

export interface WorkshopItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  venueName: string;
  price: number;
  duration: string;
  description: string;
  image: string;
  availableSpots: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: {
    label: string;
    href: string;
    description?: string;
  }[];
}

