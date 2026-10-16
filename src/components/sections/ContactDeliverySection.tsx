"use client";

import React, { useState } from "react";
import { businessInfo } from "@/data/businessInfo";
import { Button } from "@/components/ui/Button";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Truck,
  CheckCircle2,
  Sparkles,
  Send,
} from "lucide-react";

export function ContactDeliverySection() {
  const [formData, setFormData] = useState({
    name: "",
    contactInfo: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate prototype submission state transparently
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-10 md:py-14 bg-white border-b border-[#EBE6DD]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.16em] font-medium bg-white border border-[#EBE6DD] text-[#263B2D] shadow-xs mb-2">
            <Sparkles className="w-3 h-3 text-[#C48273]" />
            Get In Touch
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1F2E24] font-light tracking-tight mb-2">
            Studio Visit &amp; Enquiries
          </h2>
          <p className="text-xs sm:text-sm text-[#5C5855] font-light leading-relaxed">
            Order for doorstep delivery, arrange a wedding consultation, or send us a quick note.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Column: Studio Information & Coverage */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Contact Details Card */}
            <div className="bg-[#FAF8F5] p-5 sm:p-6 rounded-2xl border border-[#EBE6DD] shadow-xs">
              <h3 className="font-serif text-lg sm:text-xl text-[#1F2E24] mb-4 font-normal">
                Studio &amp; Hours
              </h3>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#F8ECE9] flex items-center justify-center text-[#C48273] shrink-0 mt-0.5">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-medium text-[#1F2E24] block">Address:</span>
                    <p className="text-[#5C5855] font-light">{businessInfo.address.full}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#F8ECE9] flex items-center justify-center text-[#C48273] shrink-0 mt-0.5">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-medium text-[#1F2E24] block">Telephone:</span>
                    <a
                      href={`tel:${businessInfo.contact.phone}`}
                      className="text-[#1F2E24] font-medium hover:text-[#C48273] transition-colors"
                    >
                      {businessInfo.contact.phoneDisplay}
                    </a>
                    <span className="block text-[11px] text-[#8E8A85]">
                      Out of Hours: {businessInfo.contact.mobileEmergencyDisplay}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#F8ECE9] flex items-center justify-center text-[#C48273] shrink-0 mt-0.5">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-medium text-[#1F2E24] block">Email:</span>
                    <a
                      href={`mailto:${businessInfo.contact.email}`}
                      className="text-[#1F2E24] hover:text-[#C48273] transition-colors font-light"
                    >
                      {businessInfo.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-[#EBE6DD]">
                  <div className="w-7 h-7 rounded-full bg-[#F8ECE9] flex items-center justify-center text-[#C48273] shrink-0 mt-0.5">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <div className="w-full">
                    <span className="font-medium text-[#1F2E24] block mb-1">Opening Times:</span>
                    <ul className="text-xs text-[#5C5855] space-y-0.5 font-light">
                      {businessInfo.openingHours.map((slot, idx) => (
                        <li key={idx} className="flex justify-between gap-4">
                          <span>{slot.days}:</span>
                          <span className="font-medium text-[#1F2E24]">{slot.hours}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Local Delivery Coverage Card */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#EBE6DD] shadow-xs">
              <div className="flex items-center gap-2 mb-2 text-[#C48273]">
                <Truck className="w-3.5 h-3.5" />
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#1F2E24]">
                  Local Delivery Coverage
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {businessInfo.deliveryAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#F7F4EE] text-[#263B2D] border border-[#EBE6DD] font-light"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Direct Quick Message Prototype */}
          <div className="lg:col-span-7 bg-white p-5 sm:p-7 rounded-2xl border border-[#EBE6DD] shadow-xs">
            {isSubmitted ? (
              <div className="py-8 text-center flex flex-col items-center">
                <div className="w-12 h-12 bg-[#F8ECE9] rounded-full flex items-center justify-center text-[#C48273] mb-3">
                  <CheckCircle2 className="w-6 h-6 text-[#C48273]" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#1F2E24] mb-2 font-normal">
                  Thank You, {formData.name || "friend"}
                </h3>
                <p className="text-xs sm:text-sm text-[#5C5855] max-w-md leading-relaxed mb-5 font-light">
                  Your enquiry has been received in our prototype. Our Barrow studio team will respond promptly.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: "",
                      contactInfo: "",
                      message: "",
                    });
                  }}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="mb-3">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#8A9A86] font-semibold block mb-0.5">
                    Quick Message
                  </span>
                  <h3 className="font-serif text-xl text-[#1F2E24] font-normal">
                    How Can We Help You?
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label
                      htmlFor="form-name"
                      className="block text-xs uppercase tracking-wider font-medium text-[#242220] mb-1"
                    >
                      Your Full Name <span className="text-[#8F4F42]" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="form-name"
                      required
                      aria-required="true"
                      type="text"
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg text-xs bg-[#F7F4EE] border border-[#EBE6DD] focus:border-[#C48273] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C48273] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="form-contact"
                      className="block text-xs uppercase tracking-wider font-medium text-[#242220] mb-1"
                    >
                      Email or Telephone <span className="text-[#8F4F42]" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="form-contact"
                      required
                      aria-required="true"
                      type="text"
                      placeholder="e.g. sarah@example.co.uk or 07700..."
                      value={formData.contactInfo}
                      onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg text-xs bg-[#F7F4EE] border border-[#EBE6DD] focus:border-[#C48273] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C48273] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="form-message"
                    className="block text-xs uppercase tracking-wider font-medium text-[#242220] mb-1"
                  >
                    Your Message or Floral Request <span className="text-[#8F4F42]" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="form-message"
                    required
                    aria-required="true"
                    rows={3}
                    placeholder="Tell us about your floral request, preferred dates, bouquet styles, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg text-xs bg-[#F7F4EE] border border-[#EBE6DD] focus:border-[#C48273] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C48273] transition-colors resize-none"
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                  <p className="text-[11px] text-[#8E8A85] font-light">
                    For full wedding consultations, visit our <a href="/weddings#enquire" className="underline text-[#C48273] hover:text-[#1F2E24]">Weddings form</a>.
                  </p>

                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto rounded-full"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-3.5 h-3.5 text-[#C48273]" /> Send Message
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
