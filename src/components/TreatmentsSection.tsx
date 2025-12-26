/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Ribbon } from "lucide-react";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function TreatmentsSection({ dictionary }: { dictionary: any }) {
  const { label, heading, items } = dictionary.treatmentsSection;

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h3 className="text-[#00256E] font-bold uppercase tracking-wider mb-2 text-sm md:text-base">
            {label}
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold text-[#333333]">
            {heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {items.map((treatment: any, index: number) => (
            <div key={index} className="flex gap-4">
              <div
                className="shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-white"
                style={{
                  background:
                    "linear-gradient(184.51deg, #17899B 4.02%, #109C8E 96.72%)",
                }}
              >
                <Ribbon size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#333333] mb-2">
                  {treatment.title}
                </h3>
                <p className="text-[#4F4F4F] leading-relaxed text-base">
                  {treatment.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
