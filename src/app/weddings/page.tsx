import { Metadata } from "next";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WeddingsPageContent } from "./WeddingsPageContent";

export const metadata: Metadata = {
  title: "Weddings Floristry & Packages | Efflorescence Cumbria",
  description: "Award-winning bespoke wedding flowers, bridal bouquets, buttonholes, and ceremony styling across Cumbria and the Lake District.",
};

export default function WeddingsPage() {
  return (
    <div id="top" className="min-h-screen flex flex-col bg-white text-[#1A1A1A]">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1">
        <WeddingsPageContent />
      </main>

      <Footer />
    </div>
  );
}

