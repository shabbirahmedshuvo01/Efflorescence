"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { upcomingWorkshops } from "@/data/workshops";
import { Button } from "@/components/ui/Button";
import {
  Sparkles,
  Calendar,
  Clock,
  MapPin,
  Users,
  Check,
  PartyPopper,
  ArrowLeft,
  CheckCircle2,
  Send,
  Heart,
} from "lucide-react";

export function WorkshopsPageContent() {
  const workshop = upcomingWorkshops[0];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "Wreath Making Workshop (£45)",
    partySize: "1 Person",
    message: "",
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

  const partyServices = [
    {
      title: "Floral Backdrops & Arches",
      desc: "Statement photo moments with fresh florals and organic greenery.",
    },
    {
      title: "Table Centerpieces",
      desc: "Low posies, bud vase clusters, or dramatic elevated arrangements.",
    },
    {
      title: "Chair Covers & Sashes",
      desc: "Linen styling tailored to your celebration theme and colour scheme.",
    },
    {
      title: "Balloon Displays & Garlands",
      desc: "Organic balloon clouds intertwined with botanical eucalyptus.",
    },
    {
      title: "Welcome Easel Florals",
      desc: "Personalised welcome signage styled with fragrant seasonal blooms.",
    },
    {
      title: "Baby Showers & Birthdays",
      desc: "Full venue styling and setup so you can celebrate without stress.",
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
          <span>Creative Floral Experiences &amp; Styling</span>
        </div>

        {/* Funky Editorial Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium tracking-[0.16em] uppercase bg-white border border-[#EBE6DD] text-[#263B2D] shadow-xs mb-3">
            <Sparkles className="w-3 h-3 text-[#C48273]" />
            Hands-On Floristry &amp; Event Styling
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1F2E24] font-light tracking-tight mb-4">
            Floral workshops, <br />
            <span className="italic font-normal text-[#C48273] underline decoration-[#ECD2CC] decoration-wavy decoration-1 underline-offset-8">
              &amp; celebration styling.
            </span>
          </h1>
          <p className="text-sm sm:text-base text-[#5C5855] font-light max-w-xl leading-relaxed">
            Join our seasonal floristry classes hosted at Abbey House Hotel, or collaborate with us to style your baby shower, milestone anniversary, or private event.
          </p>
        </div>

        {/* Feature Workshop: Festive Wreath Masterclass */}
        <div className="bg-white rounded-3xl border border-[#EBE6DD] p-7 sm:p-10 lg:p-12 shadow-xs mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Imagery Frame with Funky Offset Badge */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-md bg-[#F8ECE9]/20 border border-[#EBE6DD]">
                <Image
                  src={workshop.image}
                  alt={workshop.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 hover:scale-103"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.16em] font-medium bg-white/95 text-[#263B2D] border border-[#EBE6DD] shadow-xs">
                    <Sparkles className="w-3 h-3 text-[#C48273]" /> Featured Workshop
                  </span>
                </div>
              </div>

              {/* Price & All-Inclusive Tag */}
              <div className="mt-4 p-4 rounded-2xl bg-white border border-[#EBE6DD] flex items-center justify-between text-xs text-[#5C5855] shadow-xs">
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#C48273] shrink-0" />
                  All spruce, pine, ribbons &amp; mossed frames provided
                </span>
                <span className="font-serif text-lg font-medium text-[#1F2E24] shrink-0">
                  £{workshop.price.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Right Information */}
            <div className="lg:col-span-6">
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#8A9A86] font-semibold mb-1 block">
                Upcoming Masterclass
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1F2E24] font-light mb-3">
                {workshop.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#5C5855] font-light leading-relaxed mb-6">
                {workshop.description}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="p-3.5 rounded-2xl bg-white border border-[#EBE6DD] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#F8ECE9] flex items-center justify-center text-[#C48273] shrink-0">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase tracking-wider text-[#8E8A85]">Dates</span>
                    <span className="text-xs font-medium text-[#1F2E24]">{workshop.date}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-[#EBE6DD] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#F8ECE9] flex items-center justify-center text-[#C48273] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase tracking-wider text-[#8E8A85]">Time</span>
                    <span className="text-xs font-medium text-[#1F2E24]">{workshop.time}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-[#EBE6DD] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#F8ECE9] flex items-center justify-center text-[#C48273] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase tracking-wider text-[#8E8A85]">Venue</span>
                    <span className="text-xs font-medium text-[#1F2E24]">{workshop.venueName}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-[#EBE6DD] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#F8ECE9] flex items-center justify-center text-[#C48273] shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase tracking-wider text-[#8E8A85]">Capacity</span>
                    <span className="text-xs font-medium text-[#1F2E24]">Limited Studio Seats</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button href="#enquire" variant="primary" size="md" className="rounded-full">
                  Reserve Workshop Ticket
                </Button>
                <Button href="#enquire" variant="outline" size="md" className="rounded-full">
                  Private Group Booking
                </Button>
              </div>
            </div>

          </div>
        </div>

        {/* Baby Showers & Celebration Styling Services */}
        <div className="mb-20">
          <div className="max-w-2xl mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.16em] font-medium bg-white border border-[#EBE6DD] text-[#263B2D] shadow-xs mb-2">
              <PartyPopper className="w-3.5 h-3.5 text-[#C48273]" />
              Event Styling &amp; Hire
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1F2E24] font-light mb-2">
              Baby Showers &amp; Private Celebrations
            </h2>
            <p className="text-xs sm:text-sm text-[#5C5855] font-light leading-relaxed">
              From intimate afternoon teas to large private banquets, we provide bespoke floral arches, table styling, and prop hire across Cumbria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partyServices.map((service, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-[#EBE6DD] shadow-xs hover:border-[#8A9A86]/50 transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-[#F8ECE9] flex items-center justify-center text-[#C48273] mb-4">
                  <Heart className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-lg text-[#1F2E24] font-medium mb-1.5">
                  {service.title}
                </h3>
                <p className="text-xs text-[#5C5855] font-light leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Event / Workshop Reservation Form */}
        <div id="enquire" className="max-w-3xl mx-auto p-8 sm:p-12 rounded-3xl bg-white border border-[#EBE6DD] shadow-sm">
          <div className="text-center mb-8">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#8A9A86] font-semibold block mb-1">
              Tickets &amp; Enquiries
            </span>
            <h2 className="font-serif text-3xl text-[#1F2E24] font-light">
              Reserve or Enquire for an Event
            </h2>
            <p className="text-xs sm:text-sm text-[#5C5855] font-light mt-1.5">
              Secure your workshop seat or request a quote for private event styling.
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
                Your reservation request has been recorded in this interactive prototype preview. In production, real-time ticket confirmation will be emailed.
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
                    type: "Wreath Making Workshop (£45)",
                    partySize: "1 Person",
                    message: "",
                  });
                }}
              >
                Book Another Seat
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="evt-name" className="block text-xs uppercase tracking-wider font-medium text-[#242220] mb-1.5">
                    Your Name <span className="text-[#8F4F42]">*</span>
                  </label>
                  <input
                    id="evt-name"
                    required
                    type="text"
                    placeholder="e.g. Claire Bennett"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-[#F8ECE9]/20 border border-[#EBE6DD] focus:border-[#C48273] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C48273]"
                  />
                </div>

                <div>
                  <label htmlFor="evt-email" className="block text-xs uppercase tracking-wider font-medium text-[#242220] mb-1.5">
                    Email Address <span className="text-[#8F4F42]">*</span>
                  </label>
                  <input
                    id="evt-email"
                    required
                    type="email"
                    placeholder="e.g. claire@example.co.uk"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-[#F8ECE9]/20 border border-[#EBE6DD] focus:border-[#C48273] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C48273]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="evt-phone" className="block text-xs uppercase tracking-wider font-medium text-[#242220] mb-1.5">
                    Phone Number <span className="text-[#8F4F42]">*</span>
                  </label>
                  <input
                    id="evt-phone"
                    required
                    type="tel"
                    placeholder="e.g. 07700 900456"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-[#F8ECE9]/20 border border-[#EBE6DD] focus:border-[#C48273] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C48273]"
                  />
                </div>

                <div>
                  <label htmlFor="evt-type" className="block text-xs uppercase tracking-wider font-medium text-[#242220] mb-1.5">
                    Experience / Event
                  </label>
                  <select
                    id="evt-type"
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-[#F8ECE9]/20 border border-[#EBE6DD] focus:border-[#C48273] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C48273] cursor-pointer"
                  >
                    <option>Wreath Making Workshop (£45)</option>
                    <option>Private Workshop Group</option>
                    <option>Baby Shower Styling</option>
                    <option>Milestone Party / Anniversary</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="evt-party" className="block text-xs uppercase tracking-wider font-medium text-[#242220] mb-1.5">
                    Party Size / Tickets
                  </label>
                  <select
                    id="evt-party"
                    value={formData.partySize}
                    onChange={(e) => setFormData({ ...formData, partySize: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-[#F8ECE9]/20 border border-[#EBE6DD] focus:border-[#C48273] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C48273] cursor-pointer"
                  >
                    <option>1 Person</option>
                    <option>2 People</option>
                    <option>3 - 5 People</option>
                    <option>6+ Group Booking</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="evt-notes" className="block text-xs uppercase tracking-wider font-medium text-[#242220] mb-1.5">
                  Questions, Dates or Styling Notes
                </label>
                <textarea
                  id="evt-notes"
                  rows={3}
                  placeholder="Tell us about your event theme, date preferences, or specific questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
                    "Sending Request..."
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-3.5 h-3.5 text-[#C48273]" /> Submit Booking Request
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

