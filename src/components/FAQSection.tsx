"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Do you accept health insurance?",
    answer:
      "Yes, we accept major health insurance providers. Please contact our front desk with your policy details so we can verify your coverage for Ayurvedic treatments.",
  },
  {
    question: "What should I bring to my first appointment?",
    answer:
      "Please bring your past medical records, a list of current medications, and any recent lab reports. This helps our doctors create the most effective personalized treatment plan for you.",
  },
  {
    question: "Are the consultations available online?",
    answer:
      "Yes, we offer video consultations for patients who cannot visit the clinic in person. Medicines can be shipped to your location after the consultation.",
  },
  {
    question: "How long does a typical treatment last?",
    answer:
      "Treatment duration varies depending on the type and stage of cancer, as well as the patient's overall health. A typical course may last from 3 to 6 months, with regular follow-ups.",
  },
  {
    question: "Is Ayurvedic treatment safe during chemotherapy?",
    answer:
      "Our Rasayana therapies are designed to be complementary. They can often be safely taken alongside conventional treatments to help reduce side effects and boost immunity, but always consult with your oncologist and our doctors first.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h3 className="text-[#00256E] font-bold uppercase tracking-wider mb-2 text-sm md:text-base">
            COMMON QUESTIONS
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold text-[#333333]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl overflow-hidden border transition-all duration-300 ${
                openIndex === index
                  ? "border-[#17899B] shadow-md"
                  : "border-gray-100 hover:border-gray-200"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span
                  className={`text-lg font-semibold ${
                    openIndex === index ? "text-[#17899B]" : "text-[#333333]"
                  }`}
                >
                  {faq.question}
                </span>
                <span
                  className={`shrink-0 ml-4 p-1 rounded-full border transition-colors ${
                    openIndex === index
                      ? "bg-[#17899B] border-[#17899B] text-white"
                      : "border-gray-200 text-gray-400"
                  }`}
                >
                  {openIndex === index ? (
                    <Minus size={18} />
                  ) : (
                    <Plus size={18} />
                  )}
                </span>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index
                    ? "max-h-48 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 text-[#4F4F4F] leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
