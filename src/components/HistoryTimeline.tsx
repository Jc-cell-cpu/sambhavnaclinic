/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function HistoryTimeline({ dictionary }: { dictionary: any }) {
  const { label, heading, timeline } = dictionary.historyTimeline;
  const [activeYear, setActiveYear] = useState("2000");

  const currentData = timeline.find((data: any) => data.year === activeYear);

  return (
    <section className="py-20 px-4 md:px-8 bg-cyan-50 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-blue-900 font-bold uppercase tracking-wider text-sm mb-4">
            {label}
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            {heading}
          </h2>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-8 lg:gap-16">
          {/* Left Column: Timeline Sidebar */}
          <div className="relative flex flex-col items-center pt-2">
            {/* Dashed Vertical Line */}
            <div className="absolute top-4 bottom-4 left-1/2 w-0.5 -translate-x-1/2 border-l-2 border-dashed border-teal-800/40 z-0 hidden lg:block" />

            {/* Year List */}
            <div className="flex flex-row lg:flex-col gap-12 lg:gap-20 overflow-x-auto lg:overflow-visible w-full justify-between lg:justify-center items-center py-4 lg:py-0 relative z-10 px-2 lg:px-0 scrollbar-hide">
              {timeline.map((data: any) => (
                <button
                  key={data.year}
                  onClick={() => setActiveYear(data.year)}
                  className={cn(
                    "relative z-20 py-1 transition-all duration-300 bg-cyan-50 px-3 md:px-4",
                    activeYear === data.year
                      ? "text-4xl font-bold text-[#0e5c66] border-b-4 border-[#0e5c66]"
                      : "text-xl text-gray-800 font-medium hover:text-[#0e5c66]"
                  )}
                >
                  {data.year}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Dynamic Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeYear}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              {/* Part A: Main Image */}
              <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src={currentData?.mainImage || ""}
                  alt={currentData?.title || ""}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Part B: Info & Gallery */}
              <div className="flex flex-col h-full justify-center">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {currentData?.year} – {currentData?.title}
                </h3>
                <p className="text-gray-500 leading-relaxed mb-8">
                  {currentData?.description}
                </p>

                {/* Gallery Images */}
                <div className="grid grid-cols-2 gap-4">
                  {currentData?.galleryImages.map(
                    (img: string, idx: number) => (
                      <div
                        key={idx}
                        className="relative h-40 rounded-2xl overflow-hidden shadow-md bg-white"
                      >
                        <Image
                          src={img}
                          alt={`Gallery ${idx + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
