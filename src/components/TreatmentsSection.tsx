"use client";

import { Ribbon } from "lucide-react";
import React from "react";

const treatments = [
  {
    title: "Liver Cancer",
    description:
      "Ayurvedic care to support liver function, detoxify the body (Yakrut Shodhan), and boost immunity using targeted herbal therapies.",
  },
  {
    title: "Kidney Cancer",
    description:
      "Focusing on restoring kidney health (Vrikka health) and balancing bodily fluids through specialized herbs and dietary adjustments.",
  },
  {
    title: "Breast Cancer",
    description:
      "Holistic management focusing on hormonal balance, lymphatic drainage, and reducing tumor progression through natural remedies.",
  },
  {
    title: "Urinary Bladder Cancer",
    description:
      "Natural therapies to soothe the urinary tract, reduce inflammation, and strengthen bladder function (Basti health).",
  },
  {
    title: "Blood Cancer",
    description:
      "Purification therapies (Raktamokshana) and immunity-enhancing herbs to support healthy blood cell production and vitality.",
  },
  {
    title: "Prostate Cancer",
    description:
      "Specialized care for men's health focusing on reducing prostate enlargement and balancing male hormones naturally.",
  },
];

export default function TreatmentsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h3 className="text-[#00256E] font-bold uppercase tracking-wider mb-2 text-sm md:text-base">
            TREATMENTS
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold text-[#333333]">
            All Types of Cancer Treatment Under One Roof
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {treatments.map((treatment, index) => (
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
