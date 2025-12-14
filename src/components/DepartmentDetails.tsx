"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const departments = [
  {
    id: "gyn-oncology",
    title: "Ayurvedic Gynecologic Oncology",
    shortTitle: "Gyn. Oncology",
    description:
      "Our specialized department focuses on women's reproductive cancers including ovarian, cervical, and uterine cancers. We combine ancient Ayurvedic wisdom with modern diagnostics to provide comprehensive care that addresses the root cause while managing symptoms and side effects of conventional treatments.",
    image: "/images/Vector 1.svg",
    features: [
      "Personalized hormone balancing",
      "Rasayana therapy for tissue rejuvenation",
      "Stress management & counseling",
      "Dietary protocols for women's health",
    ],
  },
  {
    id: "gi-oncology",
    title: "Gastrointestinal Oncology",
    shortTitle: "GI Oncology",
    description:
      "Focusing on cancers of the digestive system such as stomach, liver, colorectal, and pancreatic cancers. Our treatments aim to restore Agni (digestive fire), improve metabolism, and enhance the body's natural detoxification processes.",
    image: "/images/Vector 1 (1).svg",
    features: [
      "Deep detoxification (Panchakarma)",
      "Metabolic restoration",
      "Liver health support",
      "Gut immunity enhancement",
    ],
  },
  {
    id: "immuno-oncology",
    title: "Integrative Immuno-Oncology",
    shortTitle: "Immuno-Oncology",
    description:
      "A specialized approach for boosting the body's immune defense against various types of tumors. This department works on strengthening Ojas (vitality) and building resistance against recurrence.",
    image: "/images/Vector 1 (2).svg",
    features: [
      "Immunomodulatory herbs",
      "Ojas-building therapies",
      "Cellular rejuvenation",
      "Recurrence prevention protocols",
    ],
  },
  {
    id: "palliative-care",
    title: "Palliative & Supportive Care",
    shortTitle: "Palliative Care",
    description:
      "Focused on improving the quality of life for patients with advanced illness. We provide symptomatic relief from pain, fatigue, and other side effects using safe, gentle Ayurvedic therapies.",
    image: "/images/Vector 1 (3).svg",
    features: [
      "Pain management therapies",
      "Mental & emotional support",
      "Sleep quality improvement",
      "Family counseling",
    ],
  },
  {
    id: "preventive-oncology",
    title: "Preventive Oncology",
    shortTitle: "Preventive Care",
    description:
      "Designed for individuals at high risk or those in remission. We focus on lifestyle modifications, dietary plans, and seasonal cleansing to maintain health and prevent disease occurrence.",
    image: "/images/Vector 1 (4).svg",
    features: [
      "Genetic risk assessment",
      "Seasonal detox plans",
      "Lifestyle correction",
      "Nutritional guidance",
    ],
  },
];

export default function DepartmentDetails() {
  const [activeTab, setActiveTab] = useState(departments[0].id);

  const activeDepartment =
    departments.find((d) => d.id === activeTab) || departments[0];

  return (
    <section className="py-16 md:py-24 bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Navigation */}
          <div className="w-full lg:w-1/4 shrink-0">
            <div className="sticky top-24 space-y-2">
              <h3 className="text-[#00256E] font-bold uppercase tracking-wider mb-6 px-2 text-sm">
                Select Department
              </h3>
              <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-4 lg:pb-0 scrollbar-hide">
                {departments.map((dept) => (
                  <button
                    key={dept.id}
                    onClick={() => setActiveTab(dept.id)}
                    className={`text-left px-5 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-between whitespace-nowrap lg:whitespace-normal group ${
                      activeTab === dept.id
                        ? "bg-[#17899B] text-white shadow-lg shadow-teal-700/20"
                        : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-100"
                    }`}
                  >
                    <span>{dept.shortTitle}</span>
                    {activeTab === dept.id && (
                      <ChevronRight
                        size={18}
                        className="hidden lg:block ml-2 animate-in fade-in slide-in-from-left-2"
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="w-full lg:w-3/4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-gray-100"
              >
                <div className="flex flex-col lg:flex-row gap-10 items-start">
                  {/* Content Side */}
                  <div className="w-full lg:w-3/5 space-y-6">
                    <h2 className="text-3xl font-bold text-[#333333] leading-tight">
                      {activeDepartment.title}
                    </h2>
                    <p className="text-[#4F4F4F] leading-relaxed text-lg">
                      {activeDepartment.description}
                    </p>

                    <hr className="border-gray-100 my-6" />

                    <h4 className="font-bold text-[#00256E] text-sm uppercase tracking-wide">
                      Key Focus Areas
                    </h4>
                    <ul className="grid grid-cols-1 gap-3">
                      {activeDepartment.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 bg-teal-50/50 p-3 rounded-lg"
                        >
                          <CheckCircle2 className="shrink-0 w-5 h-5 text-[#17899B] mt-0.5" />
                          <span className="text-gray-700 font-medium">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <motion.button
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center gap-2 text-[#17899B] font-bold text-lg mt-4 group"
                    >
                      Get Detailed Info{" "}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>

                  {/* Image Side */}
                  <div className="w-full lg:w-2/5">
                    <div className="relative aspect-4/5 rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-gray-100">
                      <Image
                        src={activeDepartment.image}
                        alt={activeDepartment.title}
                        fill
                        className="object-cover"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-[#17899B]/20 to-transparent mix-blend-multiply"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
