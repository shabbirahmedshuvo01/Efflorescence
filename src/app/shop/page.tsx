import { Metadata } from "next";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ShopCatalogClient } from "./ShopCatalogClient";

export const metadata: Metadata = {
  title: "Shop Flowers | Hand-Tied Bouquets & Gift Designs | Efflorescence",
  description: "Browse hand-tied floral bouquets, gift box arrangements, and luxury hat boxes handcrafted at our Barrow-in-Furness florist studio. Local delivery available.",
};

export default function ShopPage() {
  return (
    <div id="top" className="min-h-screen flex flex-col bg-white text-[#1A1A1A]">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1">
        <ShopCatalogClient />
      </main>

      <Footer />
    </div>
  );
}

