"use client";

import { Ribbon } from "lucide-react";
import React from "react";

const treatments = [
  {
    title: "Breast Cancer",
    description:
      "By balancing the Tridoshas, customized Rasayana therapies and formulations such as Haridra boost the immune system.",
  },
  {
    title: "Lung Cancer",
    description:
      "By balancing the Tridoshas, customized Rasayana therapies and formulations such as Haridra boost the immune system.",
  },
  {
    title: "Colorectal Cancer",
    description:
      "By balancing the Tridoshas, customized Rasayana therapies and formulations such as Haridra boost the immune system.",
  },
  {
    title: "Prostate Cancer",
    description:
      "By balancing the Tridoshas, customized Rasayana therapies and formulations such as Haridra boost the immune system.",
  },
  {
    title: "Ovarian Cancer",
    description:
      "By balancing the Tridoshas, customized Rasayana therapies and formulations such as Haridra boost the immune system.",
  },
  {
    title: "Liver Cancer",
    description:
      "By balancing the Tridoshas, customized Rasayana therapies and formulations such as Haridra boost the immune system.",
  },
  {
    title: "Leukemia",
    description:
      "By balancing the Tridoshas, customized Rasayana therapies and formulations such as Haridra boost the immune system.",
  },
  {
    title: "Brain Cancer",
    description:
      "By balancing the Tridoshas, customized Rasayana therapies and formulations such as Haridra boost the immune system.",
  },
  {
    title: "Skin Cancer",
    description:
      "By balancing the Tridoshas, customized Rasayana therapies and formulations such as Haridra boost the immune system.",
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
