"use client";

import React from "react";
import { Calendar, Stethoscope, HeartPulse, Smile } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    title: "Book Appointment",
    description:
      "Schedule your visit online or via phone. Our team will guide you through the initial requirements.",
  },
  {
    icon: Stethoscope,
    title: "Initial Consultation",
    description:
      "Meet with our Ayurvedic experts for a detailed pulse diagnosis (Nadi Pariksha) and health assessment.",
  },
  {
    icon: HeartPulse,
    title: "Personalized Treatment",
    description:
      "Receive a customized plan including Rasayana therapies, dietary changes, and herbal medicines.",
  },
  {
    icon: Smile,
    title: "Recovery & Follow-up",
    description:
      "Regular monitoring and support to ensure your path to holistic healing and well-being.",
  },
];

export default function PatientJourney() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h3 className="text-[#00256E] font-bold uppercase tracking-wider mb-2 text-sm md:text-base">
            YOUR PATH TO HEALTH
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold text-[#333333]">
            What to Expect
          </h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gray-100 -z-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
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
                  <step.icon size={32} className="relative z-10" />
                  <div className="absolute -bottom-2 bg-[#00256E] text-white text-xs font-bold px-2 py-1 rounded-full">
                    Step {index + 1}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#333333] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#4F4F4F] text-sm leading-relaxed px-2">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
