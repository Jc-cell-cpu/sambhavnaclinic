"use client";

import Image from "next/image";
import { Phone, Mail, MessageCircle } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function NeedHelp({ dictionary }: { dictionary: any }) {
  const {
    title,
    bannerText,
    phoneLabel,
    emailLabel,
    whatsappLabel,
    phoneValue,
    emailValue,
    whatsappValue,
  } = dictionary.needHelp;

  return (
    <section className="py-16 bg-[#F0F8FF]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#17899B] mb-10">
          {title}
        </h2>

        {/* className="relative w-full max-w-7xl mx-auto rounded-full flex items-center justify-center px-6 md:px-16 py-4 md:py-6 mb-12 shadow-lg overflow-visible" */}

        {/* Gradient Banner */}
        <div
          className="relative w-full max-w-7xl mx-auto rounded-full flex items-center justify-center px-6 md:px-16 py-6 md:py-10 mb-12 shadow-lg overflow-visible"
          style={{
            background:
              "linear-gradient(184.51deg, #17899B 4.02%, #109C8E 96.72%)",
          }}
        >
          {/* Left Illustration */}
          <div className="absolute left-0 bottom-0 w-32 h-36 md:w-56 md:h-56 shrink-0 md:-ml-4">
            <Image
              src="/images/call_center.svg"
              alt="Support Staff"
              fill
              className="object-contain object-bottom"
            />
          </div>

          {/* Centered Text */}
          <div className="text-white z-10 pl-20 md:pl-0">
            <p className="text-lg md:text-3xl font-semibold leading-tight text-center">
              {bannerText}
            </p>
          </div>
        </div>

        {/* Contact Info Row */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          {/* Phone */}
          <div className="flex flex-col items-center gap-3">
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center shadow-md"
              style={{
                background:
                  "linear-gradient(184.51deg, #17899B 4.02%, #109C8E 96.72%)",
              }}
            >
              <Phone className="w-8 h-8 text-white" />
            </div>
            <div className="text-center">
              <p className="text-gray-500 font-medium text-sm uppercase tracking-wider">
                {phoneLabel}
              </p>
              <p className="text-gray-800 font-bold text-lg">{phoneValue}</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center gap-3">
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center shadow-md"
              style={{
                background:
                  "linear-gradient(184.51deg, #17899B 4.02%, #109C8E 96.72%)",
              }}
            >
              <Mail className="w-8 h-8 text-white" />
            </div>
            <div className="text-center">
              <p className="text-gray-500 font-medium text-sm uppercase tracking-wider">
                {emailLabel}
              </p>
              <p className="text-gray-800 font-bold text-lg">{emailValue}</p>
            </div>
          </div>

          {/* Whatsapp */}
          <div className="flex flex-col items-center gap-3">
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center shadow-md"
              style={{
                background:
                  "linear-gradient(184.51deg, #17899B 4.02%, #109C8E 96.72%)",
              }}
            >
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <div className="text-center">
              <p className="text-gray-500 font-medium text-sm uppercase tracking-wider">
                {whatsappLabel}
              </p>
              <p className="text-gray-800 font-bold text-lg">{whatsappValue}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
