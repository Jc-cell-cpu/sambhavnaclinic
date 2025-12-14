"use client";

import React, { useRef } from "react";
import TestimonialCard, { TestimonialProps } from "./TestimonialCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Dummy Data
const testimonials: TestimonialProps[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Breast Cancer Survivor",
    image: "/images/testimonial-1.jpg",
    text: "The care I received was exceptional. The doctors were attentive and the holistic approach really helped me through my recovery journey. I felt supported every step of the way.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Patient",
    image: "/images/testimonial-2.jpg",
    text: "Professional, compassionate, and knowledgeable. The combination of modern medicine and Ayurvedic treatments made a huge difference in my energy levels.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amanda Doe",
    role: "Ovarian Cancer Survivor",
    image: "/images/testimonial-3.jpg",
    text: "I cannot thank the team enough. They treated me like family and the facility is top-notch. Highly recommended for anyone seeking comprehensive cancer care.",
    rating: 5,
  },
  {
    id: 4,
    name: "Michael Chen",
    role: "Family Member",
    image: "/images/testimonial-2.jpg", // Recycling for placeholder
    text: "My father received excellent palliative care here. The pain management techniques used were very effective and gentle.",
    rating: 5,
  },
  {
    id: 5,
    name: "Priya Patel",
    role: "Preventive Care",
    image: "/images/testimonial-1.jpg",
    text: "The preventive oncology program gave me peace of mind. The lifestyle guidance and seasonal detox plans have improved my overall health significantly.",
    rating: 4,
  },
];

export default function TestimonialsCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400; // Approx card width + gap
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
    <section className="py-16 md:py-24 bg-gray-50/50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="text-center md:text-left max-w-2xl">
            <h3 className="text-[#00256E] font-bold uppercase tracking-wider mb-2 text-sm md:text-base">
              PATIENT STORIES
            </h3>
            <h2 className="text-3xl md:text-5xl font-bold text-[#333333] leading-tight">
              Real Stories of Hope
              <br className="hidden md:block" /> and Healing
            </h2>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-gray-200 hover:border-[#17899B] hover:bg-[#17899B] hover:text-white flex items-center justify-center transition-all duration-300 text-gray-400 bg-white"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-gray-200 hover:border-[#17899B] hover:bg-[#17899B] hover:text-white flex items-center justify-center transition-all duration-300 text-gray-400 bg-white"
              aria-label="Next Testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:-mx-0 md:px-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="min-w-[300px] md:min-w-[400px] snap-center h-auto"
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
