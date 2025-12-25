"use client";

import React from "react";
import {
  Stethoscope,
  Snowflake,
  TestTube,
  Scan,
  Droplet,
  CircleDot,
  Activity,
  Leaf,
  Ambulance,
  ShieldCheck,
} from "lucide-react";

const facilities = [
  {
    icon: Stethoscope,
    title: "OPD & IPD Facilities",
    description:
      "Comprehensive Out-Patient and In-Patient departments for complete care.",
  },
  // {
  //   icon: Snowflake,
  //   title: "Fully Air-Conditioned Rooms",
  //   description:
  //     "Comfortable, temperature-controlled environment for patient recovery.",
  // },
  {
    icon: TestTube,
    title: "Advanced Laboratory Tests",
    description:
      "High-precision diagnostic testing for accurate health assessments.",
  },
  {
    icon: Scan,
    title: "Ultrasound & X-Ray Services",
    description: "Modern imaging diagnositics available on-site.",
  },
  {
    icon: Droplet,
    title: "Blood Testing Facilities",
    description: "Full-spectrum hematology and blood investigations.",
  },
  {
    icon: CircleDot,
    title: "Cupping Therapy",
    description: "Traditional Hijama and cupping therapies for pain and detox.",
  },
  {
    icon: Activity,
    title: "Regimental Therapy",
    description: "Specialized Ilaj-bit-Tadbeer therapies for holistic healing.",
  },
  {
    icon: Leaf,
    title: "Panchkarma Treatment",
    description:
      "Complete Ayurvedic detoxification and rejuvenation procedures.",
  },
  {
    icon: Ambulance,
    title: "24×7 Emergency Services",
    description: "Round-the-clock emergency support and rapid response.",
  },
  {
    icon: ShieldCheck,
    title: "Clean, Safe & Patient-Friendly",
    description: "Hygienic environment focused on patient safety and comfort.",
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
