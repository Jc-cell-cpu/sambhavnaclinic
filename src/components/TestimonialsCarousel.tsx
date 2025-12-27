/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useRef } from "react";
import TestimonialCard, { TestimonialProps } from "./TestimonialCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function TestimonialsCarousel({
  dictionary,
}: {
  dictionary: any;
}) {
  const { label, heading, items } = dictionary.testimonialsCarousel;
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
              {label}
            </h3>
            <h2 className="text-3xl md:text-5xl font-bold text-[#333333] leading-tight">
              {heading}
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
          className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {items.map((testimonial: TestimonialProps) => (
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
