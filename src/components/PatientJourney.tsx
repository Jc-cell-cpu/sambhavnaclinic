"use client";

import React from "react";
import { Calendar, Stethoscope, HeartPulse, Smile } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function PatientJourney({ dictionary }: { dictionary: any }) {
  const {
    tagline,
    title,
    stepLabel,
    steps: localizedSteps,
  } = dictionary.patientJourney;

  // Icons array to map with steps
  const icons = [Calendar, Stethoscope, HeartPulse, Smile];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h3 className="text-[#00256E] font-bold uppercase tracking-wider mb-2 text-sm md:text-base">
            {tagline}
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold text-[#333333]">
            {title}
          </h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gray-100 -z-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {localizedSteps.map((step: any, index: number) => {
              const Icon = icons[index];
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center group"
                >
                  <div
                    className="w-24 h-24 rounded-full flex items-center justify-center text-white mb-6 shadow-lg relative bg-white group-hover:-translate-y-2 transition-transform duration-300"
                    style={{ zIndex: 1 }}
                  >
                    <div
                      className="absolute inset-0 rounded-full opacity-100"
                      style={{
                        background:
                          "linear-gradient(184.51deg, #17899B 4.02%, #109C8E 96.72%)",
                      }}
                    ></div>
                    <Icon size={32} className="relative z-10" />
                    <div className="absolute -bottom-2 bg-[#00256E] text-white text-xs font-bold px-2 py-1 rounded-full">
                      {stepLabel} {index + 1}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#333333] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#4F4F4F] text-sm leading-relaxed px-2">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
