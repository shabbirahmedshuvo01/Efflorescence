"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { weddingPackages } from "@/data/weddingPackages";
import { PackageCard } from "@/components/ui/PackageCard";
import { Button } from "@/components/ui/Button";
import {
  Sparkles,
  Calendar,
  Clock,
  ShieldCheck,
  HeartHandshake,
  ArrowLeft,
  CheckCircle2,
  Send,
  Camera,
} from "lucide-react";

export function WeddingsPageContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    weddingDate: "",
    venue: "",
    packagePreference: "The Elegance Package (£850)",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
      title: "Ceremony Arch & Aisle Accents",
      location: "Lake District Venue",
    },
    {
      src: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=1200&auto=format&fit=crop",
      title: "Wild Botanical Bridal Bouquet",
      location: "Hand-Tied Studio Design",
    },
    {
      src: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1200&auto=format&fit=crop",
      title: "Reception Posies & Table Setting",
      location: "Bespoke Marquee Styling",
    },
    {
      src: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=1200&auto=format&fit=crop",
      title: "Bridal Party Floral Details",
      location: "Buttonholes & Corsages",
    },
  ];

  return (
    <div className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center justify-between text-xs text-[#8E8A85]">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 hover:text-[#1F2E24] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>
          <span>Award-Winning Wedding Florist Cumbria</span>
        </div>

        {/* Funky Editorial Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium tracking-[0.16em] uppercase bg-white border border-[#EBE6DD] text-[#263B2D] shadow-xs mb-3">
            <Sparkles className="w-3 h-3 text-[#C48273]" />
            Bespoke Wedding Portfolio
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1F2E24] font-light tracking-tight mb-4">
            Weddings, styled with <br />
            <span className="italic font-normal text-[#C48273] underline decoration-[#ECD2CC] decoration-wavy decoration-1 underline-offset-8">
              wild seasonal grace.
            </span>
          </h1>
          <p className="text-sm sm:text-base text-[#5C5855] font-light max-w-xl leading-relaxed">
            From intimate ceremonies to marquee celebrations throughout Cumbria and the Lake District. Voted by couples for authentic craftsmanship and personal care.
          </p>
        </div>

        {/* Curated Wedding Packages */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#8A9A86] font-semibold block mb-1">
                Transparent Pricing
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1F2E24] font-light">
                Curated Wedding Packages
              </h2>
            </div>
            <span className="hidden sm:inline-block text-xs text-[#8E8A85] font-light">
              Custom floral packages also available
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {weddingPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>

        {/* Floral Portfolio Grid */}
        <div className="mb-20">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#8A9A86] font-semibold block mb-1">
                Visual Showcase
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1F2E24] font-light">
                Recent Wedding Craft
              </h2>
            </div>
            <span className="text-xs text-[#8E8A85] flex items-center gap-1 font-light">
              <Camera className="w-3.5 h-3.5 text-[#C48273]" /> Studio Styling Portfolio
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((item, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col bg-white rounded-3xl border border-[#EBE6DD] overflow-hidden shadow-xs hover:shadow-md transition-all duration-300"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#F8ECE9]/20">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-104"
                  />
                </div>
                <div className="p-4 bg-white">
                  <span className="text-[10px] uppercase tracking-wider text-[#8A9A86] block font-medium">
                    {item.location}
                  </span>
                  <h3 className="font-serif text-base text-[#1F2E24] font-medium mt-0.5">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Wedding Commitment Banner */}
        <div className="bg-white rounded-3xl border border-[#EBE6DD] p-8 sm:p-10 shadow-xs mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#F8ECE9] flex items-center justify-center text-[#C48273] shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg text-[#1F2E24] font-medium">14-Day Date Hold</h3>
                <p className="text-xs text-[#5C5855] font-light leading-relaxed mt-1">
                  Itemised quote provided within 7 days of your consultation. Dates held for 14 days without obligation.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#F8ECE9] flex items-center justify-center text-[#C48273] shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg text-[#1F2E24] font-medium">Morning Delivery</h3>
                <p className="text-xs text-[#5C5855] font-light leading-relaxed mt-1">
                  We personally deliver bridal bouquets, buttonholes, and ceremony installations on the morning of your event.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#F8ECE9] flex items-center justify-center text-[#C48273] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg text-[#1F2E24] font-medium">Setup &amp; Prop Hire</h3>
                <p className="text-xs text-[#5C5855] font-light leading-relaxed mt-1">
                  Vases, pedestals, and ceremony arches styled directly on-site in coordination with your venue coordinator.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dedicated Consultation Enquiry Form */}
        <div id="enquire" className="max-w-3xl mx-auto p-8 sm:p-12 rounded-3xl bg-white border border-[#EBE6DD] shadow-sm">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.16em] font-medium bg-[#F8ECE9] text-[#8F4F42] shadow-xs mb-2">
              <HeartHandshake className="w-3.5 h-3.5 text-[#C48273]" />
              Check Wedding Availability
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1F2E24] font-light">
              Book a Wedding Consultation
            </h2>
            <p className="text-xs sm:text-sm text-[#5C5855] font-light mt-2 max-w-md mx-auto">
              Tell us your date and venue. We will confirm date availability and arrange an initial conversation.
            </p>
          </div>

          {isSubmitted ? (
            <div className="py-8 text-center flex flex-col items-center">
              <div className="w-14 h-14 bg-[#F8ECE9] rounded-full flex items-center justify-center text-[#C48273] mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl text-[#1F2E24] mb-2 font-normal">
                Thank You, {formData.name || "friend"}
              </h3>
              <p className="text-xs sm:text-sm text-[#5C5855] max-w-md leading-relaxed mb-6 font-light">
                Your wedding enquiry has been registered in this prototype. We look forward to creating your wedding flowers.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    weddingDate: "",
                    venue: "",
                    packagePreference: "The Elegance Package (£850)",
                    notes: "",
                  });
                }}
              >
                Send Another Enquiry
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="w-name" className="block text-xs uppercase tracking-wider font-medium text-[#242220] mb-1.5">
                    Full Name <span className="text-[#8F4F42]">*</span>
                  </label>
                  <input
                    id="w-name"
                    required
                    type="text"
                    placeholder="e.g. Jessica Taylor"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-[#F8ECE9]/20 border border-[#EBE6DD] focus:border-[#C48273] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C48273]"
                  />
                </div>

                <div>
                  <label htmlFor="w-email" className="block text-xs uppercase tracking-wider font-medium text-[#242220] mb-1.5">
                    Email Address <span className="text-[#8F4F42]">*</span>
                  </label>
                  <input
                    id="w-email"
                    required
                    type="email"
                    placeholder="e.g. jessica@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-[#F8ECE9]/20 border border-[#EBE6DD] focus:border-[#C48273] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C48273]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="w-phone" className="block text-xs uppercase tracking-wider font-medium text-[#242220] mb-1.5">
                    Contact Phone <span className="text-[#8F4F42]">*</span>
                  </label>
                  <input
                    id="w-phone"
                    required
                    type="tel"
                    placeholder="e.g. 07700 900123"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-[#F8ECE9]/20 border border-[#EBE6DD] focus:border-[#C48273] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C48273]"
                  />
                </div>

                <div>
                  <label htmlFor="w-date" className="block text-xs uppercase tracking-wider font-medium text-[#242220] mb-1.5">
                    Wedding Date <span className="text-[#8F4F42]">*</span>
                  </label>
                  <input
                    id="w-date"
                    required
                    type="date"
                    value={formData.weddingDate}
                    onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-[#F8ECE9]/20 border border-[#EBE6DD] focus:border-[#C48273] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C48273]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="w-venue" className="block text-xs uppercase tracking-wider font-medium text-[#242220] mb-1.5">
                    Venue / Location
                  </label>
                  <input
                    id="w-venue"
                    type="text"
                    placeholder="e.g. Abbey House Hotel or Windermere"
                    value={formData.venue}
                    onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-[#F8ECE9]/20 border border-[#EBE6DD] focus:border-[#C48273] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C48273]"
                  />
                </div>

                <div>
                  <label htmlFor="w-package" className="block text-xs uppercase tracking-wider font-medium text-[#242220] mb-1.5">
                    Package Preference
                  </label>
                  <select
                    id="w-package"
                    value={formData.packagePreference}
                    onChange={(e) => setFormData({ ...formData, packagePreference: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-[#F8ECE9]/20 border border-[#EBE6DD] focus:border-[#C48273] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C48273] cursor-pointer"
                  >
                    <option>The Simplicity Package (£500)</option>
                    <option>The Elegance Package (£850)</option>
                    <option>The Romance Package (£1,500)</option>
                    <option>Bespoke Styling Enquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="w-notes" className="block text-xs uppercase tracking-wider font-medium text-[#242220] mb-1.5">
                  Floral Style, Colour Palette &amp; Details
                </label>
                <textarea
                  id="w-notes"
                  rows={3}
                  placeholder="Share any preferred flowers, theme, bridal party size, or questions..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-[#F8ECE9]/20 border border-[#EBE6DD] focus:border-[#C48273] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C48273] resize-none"
                />
              </div>

              <div className="pt-2 text-center">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto rounded-full"
                >
                  {isSubmitting ? (
                    "Checking availability..."
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-3.5 h-3.5 text-[#C48273]" /> Submit Wedding Date Enquiry
                    </span>
                  )}
                </Button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}

