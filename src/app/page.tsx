import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedProductsSection } from "@/components/sections/FeaturedProductsSection";
import { WeddingPreviewSection } from "@/components/sections/WeddingPreviewSection";
import { WorkshopsPreviewSection } from "@/components/sections/WorkshopsPreviewSection";
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

      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Responsive Header & Navigation */}
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* 3. Hero Introduction & Direct CTAs */}
        <HeroSection />

        {/* 4. Featured Flowers (Curated 4 Cards + Browse All CTA) */}
        <FeaturedProductsSection />

        {/* 5. Wedding Flowers & Packages Preview */}
        <WeddingPreviewSection />

        {/* 6. Workshops & Celebrations Preview */}
        <WorkshopsPreviewSection />

        {/* 7. Sympathy & Bereavement Tributes Callout */}
        <BereavementSection />

        {/* 8. About Efflorescence Studio Preview */}
        <AboutSection />

        {/* 9. Contact, Studio Visit & Local Delivery Information */}
        <ContactDeliverySection />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}
