"use client";

import React from "react";
import {
  Beaker,
  BedDouble,
  Activity,
  Pill,
  Microscope,
  Ambulance,
} from "lucide-react";

const facilities = [
  {
    icon: Beaker,
    title: "Advanced Lab",
    description:
      "State-of-the-art diagnostic laboratory for precise and timely reports.",
  },
  {
    icon: BedDouble,
    title: "In-Patient Services",
    description:
      "Comfortable and hygienic rooms for patients requiring extended care.",
  },
  {
    icon: Activity,
    title: "Panchakarma Center",
    description:
      "Dedicated facility for specialized detox and rejuvenation therapies.",
  },
  {
    icon: Pill,
    title: "Ayurvedic Pharmacy",
    description:
      "In-house pharmacy compliant with GMP standards for authentic medicines.",
  },
  {
    icon: Microscope,
    title: "Research Wing",
    description: "Ongoing clinical research to enhance treatment efficacy.",
  },
  {
    icon: Ambulance,
    title: "Emergency Support",
    description:
      "24/7 medical support and ambulance services for critical needs.",
  },
];

export default function MedicalFacilities() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h3 className="text-[#00256E] font-bold uppercase tracking-wider mb-2 text-sm md:text-base">
            INFRASTRUCTURE
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold text-[#333333]">
            World-Class Medical Facilities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#17899B] hover:shadow-md transition-all duration-300 group"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-white mb-6 transition-transform group-hover:scale-110 duration-300"
                style={{
                  background:
                    "linear-gradient(184.51deg, #17899B 4.02%, #109C8E 96.72%)",
                }}
              >
                <facility.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">
                {facility.title}
              </h3>
              <p className="text-[#4F4F4F] leading-relaxed">
                {facility.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
