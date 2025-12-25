"use client";

import React, { useRef } from "react";
import Image from "next/image";
import {
  BadgeCheck,
  Stethoscope,
  ChevronLeft,
  ChevronRight,
  CalendarCheck,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const doctors = [
  {
    name: "Dr. Azad",
    speciality: "Oncologist (Ayurvedic Cancer Specialist)",
    experience: "20+ Years Exp",
    image: "/images/Doc_1.svg",
  },
  {
    name: "Dr. Nargish Tyagi",
    speciality: "Orthopaedic Specialist",
    experience: "15+ Years Exp",
    image: "/images/Doc_3.svg",
  },
  {
    name: "Dr. Malhotra",
    speciality: "Gastroenterologist",
    experience: "12+ Years Exp",
    image: "/images/Doc_1.svg",
  },
  {
    name: "Dr. Mohtram Tyagi",
    speciality: "BAMS, Ayurveda Chariya",
    experience: "10+ Years Exp",
    image: "/images/Doc_2.svg",
  },
];

export default function DepartmentDoctors() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350; // Approx card width + gap
      const newScrollLeft =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white relative">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-64 h-64 bg-teal-50 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-[10%] left-[5%] w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header with Navigation */}
        <div className="flex flex-col items-center mb-12 gap-8">
          <div className="text-center max-w-3xl">
            <h3 className="text-[#00256E] font-bold uppercase tracking-wider mb-2 text-sm md:text-base">
              OUR EXPERTS
            </h3>
            <h2 className="text-3xl md:text-5xl font-bold text-[#333333]">
              Led by Experienced Professionals
            </h2>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-gray-200 hover:border-[#17899B] hover:bg-[#17899B] hover:text-white flex items-center justify-center transition-all duration-300 text-gray-400"
              aria-label="Previous Doctor"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-gray-200 hover:border-[#17899B] hover:bg-[#17899B] hover:text-white flex items-center justify-center transition-all duration-300 text-gray-400"
              aria-label="Next Doctor"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:px-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {doctors.map((doc, index) => (
            <div
              key={index}
              className="min-w-full md:min-w-[320px] snap-center group relative bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:-translate-y-2 transition-transform duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-3/4 bg-teal-50">
                <Image
                  src={doc.image}
                  alt={doc.name}
                  fill
                  className="object-cover object-top"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-[#0e5c66]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Action Buttons on Hover */}
                <div className="absolute bottom-9 left-0 w-full px-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 flex flex-col gap-3">
                  <Button className="w-full border-accent bg-white hover:bg-[#0e5c66] hover:text-white text-[#0e5c66] font-bold rounded-xl shadow-lg border">
                    <CalendarCheck size={18} className="mr-2" />
                    Consult Now
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-white text-[#0e5c66] hover:bg-[#0e5c66] hover:text-white font-semibold rounded-xl  backdrop-blur-sm"
                  >
                    <User size={18} className="mr-2" />
                    View Profile
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-center relative grow flex flex-col justify-end">
                {/* Floating Icon */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md text-[#17899B] group-hover:scale-110 transition-transform">
                  <Stethoscope size={24} />
                </div>

                <div className="mt-4">
                  <h3 className="text-xl font-bold text-[#333333] mb-1 group-hover:text-[#17899B] transition-colors">
                    {doc.name}
                  </h3>
                  <p className="text-[#17899B] font-medium mb-3">
                    {doc.speciality}
                  </p>
                  <div className="items-center justify-center gap-2 text-gray-500 text-sm bg-gray-50 py-1.5 px-4 rounded-full inline-block">
                    <BadgeCheck
                      size={16}
                      className="text-green-500 inline mr-1"
                    />
                    <span>{doc.experience}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
