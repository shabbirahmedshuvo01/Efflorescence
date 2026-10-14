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
    email: "",
    phone: "",
    serviceType: "Wedding Floristry Consultation",
    eventDate: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission state without false claims
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#F7F4EE] border-b border-[#EBE6DD]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C48273]" />
            <span className="text-[10px] uppercase tracking-[0.24em] text-[#8A9A86] font-semibold">
              Get In Touch
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1F2E24] font-light tracking-tight mb-3">
            Studio Visit, Local Delivery &amp; Enquiries
          </h2>
          <p className="text-sm md:text-base text-[#5C5855] font-light leading-relaxed">
            Whether you wish to order flowers for local delivery, arrange an in-person wedding consultation, or enquire about workshop dates, our studio team is here to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Studio Information & Coverage */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Contact Details Card */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#EBE6DD] shadow-xs">
              <h3 className="font-serif text-2xl text-[#1F2E24] mb-5 font-normal">
                Efflorescence Florist Studio
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#F8ECE9] flex items-center justify-center text-[#C48273] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-medium text-[#1F2E24] block">Studio Address:</span>
                    <p className="text-[#5C5855] mt-0.5 font-light">{businessInfo.address.full}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#F8ECE9] flex items-center justify-center text-[#C48273] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-medium text-[#1F2E24] block">Telephone:</span>
                    <a
                      href={`tel:${businessInfo.contact.phone}`}
                      className="text-[#1F2E24] font-semibold hover:text-[#C48273] transition-colors"
                    >
                      {businessInfo.contact.phoneDisplay}
                    </a>
                    <span className="block text-[11px] text-[#8E8A85] mt-0.5">
                      Out of Hours: {businessInfo.contact.mobileEmergencyDisplay}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#F8ECE9] flex items-center justify-center text-[#C48273] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
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

                <div className="flex items-start gap-3.5 pt-4 border-t border-[#EBE6DD]">
                  <div className="w-8 h-8 rounded-lg bg-[#F8ECE9] flex items-center justify-center text-[#C48273] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="w-full">
                    <span className="font-medium text-[#1F2E24] block mb-1">Opening Times:</span>
                    <ul className="text-xs text-[#5C5855] space-y-1 font-light">
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
            <div className="bg-[#263B2D] text-[#FBF9F5] p-6 sm:p-7 rounded-2xl border border-[#354E3E]">
              <div className="flex items-center gap-2 mb-2.5 text-[#C48273]">
                <Truck className="w-4 h-4" />
                <span className="text-[10px] uppercase tracking-widest font-semibold text-[#FBF9F5]">
                  Local Delivery Coverage
                </span>
              </div>
              <p className="text-xs text-[#E7ECE5]/80 leading-relaxed mb-3.5 font-light">
                Local doorstep floral delivery across Furness peninsula and South Cumbria:
              </p>
              <div className="flex flex-wrap gap-2">
                {businessInfo.deliveryAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] px-3 py-1 rounded-md bg-[#1C2C22] text-[#E7ECE5] border border-[#8A9A86]/20 font-light"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Direct Consultation / Enquiry Form */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-9 rounded-2xl border border-[#EBE6DD] shadow-xs">
            {isSubmitted ? (
              <div className="py-10 text-center flex flex-col items-center">
                <div className="w-14 h-14 bg-[#E7ECE5] rounded-full flex items-center justify-center text-[#263B2D] mb-4">
                  <CheckCircle2 className="w-8 h-8 text-[#8A9A86]" />
                </div>
                <h3 className="font-serif text-2xl text-[#1F2E24] mb-2 font-normal">
                  Thank You, {formData.name || "friend"}
                </h3>
                <p className="text-xs sm:text-sm text-[#5C5855] max-w-md leading-relaxed mb-6 font-light">
                  Your enquiry has been recorded in the prototype form preview. Our studio team will be in touch with detailed advice.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      serviceType: "Wedding Floristry Consultation",
                      eventDate: "",
                      message: "",
                    });
                  }}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="mb-3">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[#8A9A86] font-semibold block mb-1">
                    Direct Studio Enquiry
                  </span>
                  <h3 className="font-serif text-2xl text-[#1F2E24] font-normal">
                    Send Us a Message or Request a Quote
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="form-name"
                      className="block text-xs uppercase tracking-wider font-medium text-[#242220] mb-1.5"
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
                      className="w-full px-3.5 py-2.5 rounded-lg text-xs bg-[#F7F4EE] border border-[#EBE6DD] focus:border-[#C48273] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C48273] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="form-email"
                      className="block text-xs uppercase tracking-wider font-medium text-[#242220] mb-1.5"
                    >
                      Email Address <span className="text-[#8F4F42]" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="form-email"
                      required
                      aria-required="true"
                      type="email"
                      placeholder="e.g. sarah@example.co.uk"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg text-xs bg-[#F7F4EE] border border-[#EBE6DD] focus:border-[#C48273] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C48273] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="form-phone"
                      className="block text-xs uppercase tracking-wider font-medium text-[#242220] mb-1.5"
                    >
                      Telephone / Mobile <span className="text-[#8F4F42]" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="form-phone"
                      required
                      aria-required="true"
                      type="tel"
                      placeholder="e.g. 07700 900123"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg text-xs bg-[#F7F4EE] border border-[#EBE6DD] focus:border-[#C48273] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C48273] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="form-service"
                      className="block text-xs uppercase tracking-wider font-medium text-[#242220] mb-1.5"
                    >
                      Service of Interest
                    </label>
                    <select
                      id="form-service"
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg text-xs bg-[#F7F4EE] border border-[#EBE6DD] focus:border-[#C48273] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C48273] transition-colors cursor-pointer"
                    >
                      <option>Wedding Floristry Consultation</option>
                      <option>The Simplicity Package (£500)</option>
                      <option>The Elegance Package (£850)</option>
                      <option>The Romance Package (£1,500)</option>
                      <option>Daily Bouquet / Gift Order</option>
                      <option>Wreath Masterclass Booking</option>
                      <option>Sympathy &amp; Bereavement Tributes</option>
                      <option>Baby Shower &amp; Party Styling</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="form-date"
                    className="block text-xs uppercase tracking-wider font-medium text-[#242220] mb-1.5"
                  >
                    Event / Desired Delivery Date
                  </label>
                  <input
                    id="form-date"
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg text-xs bg-[#F7F4EE] border border-[#EBE6DD] focus:border-[#C48273] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C48273] transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="form-message"
                    className="block text-xs uppercase tracking-wider font-medium text-[#242220] mb-1.5"
                  >
                    Tell Us About Your Floral Vision <span className="text-[#8F4F42]" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="form-message"
                    required
                    aria-required="true"
                    rows={4}
                    placeholder="Provide details about your floral style, color palette, venue, or card message..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg text-xs bg-[#F7F4EE] border border-[#EBE6DD] focus:border-[#C48273] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C48273] transition-colors resize-none"
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? (
                    "Sending Message..."
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-3.5 h-3.5 text-[#C48273]" /> Send Studio Enquiry
                    </span>
                  )}
                </Button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
