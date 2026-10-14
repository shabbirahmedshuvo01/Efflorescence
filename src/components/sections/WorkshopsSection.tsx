import React from "react";
import Image from "next/image";
import { upcomingWorkshops } from "@/data/workshops";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Calendar, Clock, MapPin, Sparkles, Users, Check } from "lucide-react";

export function WorkshopsSection() {
  const workshop = upcomingWorkshops[0];

  return (
    <section id="workshops" className="py-16 md:py-24 bg-[#FBF9F5] border-b border-[#EBE6DD]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Workshop Craft Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden rounded-2xl shadow-sm bg-[#E7ECE5] border border-[#EBE6DD]">
              <Image
                src={workshop.image}
                alt={workshop.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 hover:scale-103"
              />
              <div className="absolute top-4 left-4">
                <Badge variant="terracotta" className="shadow-xs font-medium">
                  <Sparkles className="w-3 h-3 mr-1.5 inline text-[#8F4F42]" /> Seasonal Masterclass
                </Badge>
              </div>
            </div>

            {/* Inclusions Strip */}
            <div className="mt-4 p-4 rounded-xl bg-white border border-[#EBE6DD] flex items-center justify-between text-xs text-[#5C5855] shadow-xs">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#8A9A86] shrink-0" />
                All spruce, pine, ribbons &amp; mossed frames provided
              </span>
              <span className="font-serif text-base font-medium text-[#1F2E24] shrink-0">
                £{workshop.price.toFixed(2)} / ticket
              </span>
            </div>
          </div>

          {/* Right Column: Workshop Information */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#8A9A86] font-semibold mb-2">
              Creative Floristry Classes
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1F2E24] font-light tracking-tight mb-4">
              {workshop.title}
            </h2>
            <p className="text-sm md:text-base text-[#5C5855] font-light leading-relaxed mb-6">
              {workshop.description}
            </p>

            {/* Event Key Detail Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full mb-8">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-[#EBE6DD]">
                <div className="w-8 h-8 rounded-lg bg-[#F8ECE9] flex items-center justify-center text-[#C48273] shrink-0">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-[#8E8A85]">
                    Scheduled Dates
                  </span>
                  <span className="text-xs font-medium text-[#1F2E24]">{workshop.date}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-[#EBE6DD]">
                <div className="w-8 h-8 rounded-lg bg-[#F8ECE9] flex items-center justify-center text-[#C48273] shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-[#8E8A85]">
                    Time &amp; Duration
                  </span>
                  <span className="text-xs font-medium text-[#1F2E24]">
                    {workshop.time} ({workshop.duration})
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-[#EBE6DD]">
                <div className="w-8 h-8 rounded-lg bg-[#F8ECE9] flex items-center justify-center text-[#C48273] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-[#8E8A85]">
                    Host Venue
                  </span>
                  <span className="text-xs font-medium text-[#1F2E24]">{workshop.venueName}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-[#EBE6DD]">
                <div className="w-8 h-8 rounded-lg bg-[#F8ECE9] flex items-center justify-center text-[#C48273] shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-[#8E8A85]">
                    Capacity
                  </span>
                  <span className="text-xs font-medium text-[#1F2E24]">
                    {workshop.availableSpots}
                  </span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <Button href="#contact" variant="primary" size="md">
                Reserve Workshop Ticket
              </Button>
              <Button href="#contact" variant="outline" size="md">
                Private Group Booking
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
