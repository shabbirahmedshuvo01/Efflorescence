import React from "react";
import Image from "next/image";
import { businessInfo } from "@/data/businessInfo";
import { Button } from "@/components/ui/Button";
import { Phone, Home, HeartHandshake } from "lucide-react";

export function BereavementSection() {
  return (
    <section id="bereavements" className="py-16 md:py-24 bg-[#152019] text-[#FBF9F5] border-b border-[#2C4033]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7">
            <span className="text-[10px] uppercase tracking-[0.24em] text-[#8A9A86] font-semibold block mb-2.5">
              Sympathy &amp; Funeral Tributes
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FBF9F5] font-light tracking-tight mb-5">
              Thoughtful Floral Farewells, Handcrafted with Care
            </h2>
            <p className="text-sm md:text-base text-[#E7ECE5]/85 font-light leading-relaxed mb-7">
              At such a sensitive time, we help you choose or create personal tributes that honour your loved one. From traditional coffin top casket sprays to bespoke memorial shapes, cushions, and lettering.
            </p>

            {/* Compassionate Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
              <div className="p-4 sm:p-5 rounded-xl bg-[#1C2B21] border border-[#2C4033]">
                <div className="flex items-center gap-2 mb-1.5 text-[#C48273]">
                  <Home className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wider font-medium text-[#FBF9F5]">
                    Home Consultations
                  </span>
                </div>
                <p className="text-xs text-[#E7ECE5]/75 leading-relaxed font-light">
                  We offer home visits to discuss tribute options in a calm, unhurried setting.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-[#1C2B21] border border-[#2C4033]">
                <div className="flex items-center gap-2 mb-1.5 text-[#C48273]">
                  <HeartHandshake className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wider font-medium text-[#FBF9F5]">
                    Funeral Director Liaison
                  </span>
                </div>
                <p className="text-xs text-[#E7ECE5]/75 leading-relaxed font-light">
                  We liaise directly with local funeral directors and deliver tributes on time to their premises.
                </p>
              </div>
            </div>

            {/* Direct Out-of-Hours Line Card */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#24352A] border border-[#8A9A86]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-7">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#8A9A86] block font-medium">
                  Out-of-Hours Bereavement Assistance
                </span>
                <p className="text-xs text-[#FBF9F5] mt-0.5 font-light">
                  Need immediate guidance outside studio hours? Call our direct mobile line.
                </p>
              </div>

              <a
                href={`tel:${businessInfo.contact.mobileEmergency}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#C48273] text-[#FBF9F5] text-xs uppercase tracking-wider font-medium hover:bg-[#AA6B5D] transition-colors shrink-0 shadow-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                {businessInfo.contact.mobileEmergencyDisplay}
              </a>
            </div>

            <div className="mt-7">
              <Button href="#contact" variant="dark-outline" size="md">
                Enquire for Sympathy Arrangements
              </Button>
            </div>
          </div>

          {/* Right Imagery Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-md bg-[#111B14] border border-[#2C4033]/60">
              <Image
                src="https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?q=80&w=1200&auto=format&fit=crop"
                alt="Efflorescence sympathy and casket floral tributes"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover opacity-90 transition-transform duration-500 hover:scale-103"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
