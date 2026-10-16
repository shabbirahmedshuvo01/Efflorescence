import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { FeaturedProductsSection } from "@/components/sections/FeaturedProductsSection";
import { WeddingPackagesSection } from "@/components/sections/WeddingPackagesSection";
import { WorkshopsSection } from "@/components/sections/WorkshopsSection";
import { BereavementSection } from "@/components/sections/BereavementSection";
import { PartiesSection } from "@/components/sections/PartiesSection";
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
        {/* 3. Large Editorial Hero */}
        <HeroSection />

        {/* 4. Verified Trust & Recognition */}
        <TrustSection />

        {/* 5. Featured Flower Collections & Product Cards */}
        <FeaturedProductsSection />

        {/* 6. Wedding Flowers Showcase & Three Curated Packages */}
        <WeddingPackagesSection />

        {/* 7. Events & Workshops Section */}
        <WorkshopsSection />

        {/* 8. Bereavement & Sympathy Tributes Section */}
        <BereavementSection />

        {/* 9. Baby Showers & Private Celebrations */}
        <PartiesSection />

        {/* 10. About Efflorescence Studio Craft */}
        <AboutSection />

        {/* 11. Testimonials: Omitted per prompt rule as unverified quotes are not present on live site */}

        {/* 12. Contact, Studio Visit & Local Delivery Information */}
        <ContactDeliverySection />
      </main>

      {/* 13. Comprehensive Footer */}
      <Footer />
    </div>
  );
}
