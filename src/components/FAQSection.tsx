/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function FAQSection({ dictionary }: { dictionary: any }) {
  const { label, heading, faqs } = dictionary.faqSection;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h3 className="text-[#00256E] font-bold uppercase tracking-wider mb-2 text-sm md:text-base">
            {label}
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold text-[#333333]">
            {heading}
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq: any, index: number) => (
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
