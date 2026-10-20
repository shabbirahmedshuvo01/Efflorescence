import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ShortServicesSection } from "@/components/sections/ShortServicesSection";
import { WeddingsWorkshopsPreview } from "@/components/sections/WeddingsWorkshopsPreview";
import { BereavementSection } from "@/components/sections/BereavementSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactDeliverySection } from "@/components/sections/ContactDeliverySection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div id="top" className="min-h-screen flex flex-col bg-white text-[#1A1A1A]">
      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-[#263B2D] focus:text-white focus:text-xs focus:uppercase focus:tracking-wider focus:outline-none focus:ring-2 focus:ring-[#C48273]"
      >
        Skip to main content
      </a>

      {/* 1. Concise Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Simplified Header & Navigation */}
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* 3. Hero Bouquet Shopping Carousel (Swiping Bunches) */}
        <HeroSection />

        {/* 4. Short Visual Service Links */}
        <ShortServicesSection />

        {/* 5. Compact Weddings & Workshops Showcase */}
        <WeddingsWorkshopsPreview />

        {/* 6. Sympathy & Bereavement Care */}
        <BereavementSection />

        {/* 7. Concise Studio Introduction */}
        <AboutSection />

        {/* 8. Studio Visit, Contact & Local Delivery Coverage */}
        <ContactDeliverySection />
      </main>

      {/* 9. Complete Footer with Legal Drafts & Social Links */}
      <Footer />
    </div>
  );
}
