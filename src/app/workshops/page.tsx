import { Metadata } from "next";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WorkshopsPageContent } from "./WorkshopsPageContent";

export const metadata: Metadata = {
  title: "Workshops & Celebrations | Festive Wreaths & Event Styling | Efflorescence",
  description: "Seasonal floral masterclasses at Abbey House Hotel and private event styling for baby showers and celebrations across Cumbria.",
};

export default function WorkshopsPage() {
  return (
    <div id="top" className="min-h-screen flex flex-col bg-white text-[#1A1A1A]">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1">
        <WorkshopsPageContent />
      </main>

      <Footer />
    </div>
  );
}

