"use client";

import { useState } from "react";
import Image from "next/image";

export default function TopBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="hidden md:block text-primary-foreground py-2 px-4 text-sm relative"
      style={{
        background: "linear-gradient(184.51deg, #17899B 4.02%, #109C8E 96.72%)",
      }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-2">
        <div className="flex flex-wrap items-center gap-4 md:gap-6">
          <div className="flex items-center gap-2">
            <Image
              src="/icons/telephoneIcon.png"
              alt="Phone"
              width={16}
              height={16}
              className="invert brightness-0"
            />
            <span>70377 09494</span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/icons/MailIcon.png"
              alt="Email"
              width={16}
              height={16}
              className="invert brightness-0"
            />
            <span>Sambhavnaclinic@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/icons/globeIcon.png"
              alt="Website"
              width={16}
              height={16}
              className="invert brightness-0"
            />
            <span>Sambhavnaclinic.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/icons/TimeIcon.png"
              alt="Time"
              width={16}
              height={16}
              className="invert brightness-0"
            />
            <span>Monday - Sunday: 08:00 AM - 5:00 PM</span>
          </div>
        </div>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-80 transition-opacity"
        aria-label="Close banner"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  );
}
