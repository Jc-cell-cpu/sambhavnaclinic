"use client";

import React from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

export interface TestimonialProps {
  id: number | string;
  name: string;
  role: string;
  image: string;
  text: string;
  rating?: number;
}

export default function TestimonialCard({
  name,
  role,
  image,
  text,
  rating = 5,
}: TestimonialProps) {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 relative group h-full flex flex-col hover:-translate-y-2 transition-transform duration-300">
      {/* Quote Icon Background */}
      <div className="absolute top-6 right-6 text-teal-50 opacity-50 group-hover:opacity-100 transition-opacity">
        <Quote size={80} strokeWidth={0} fill="currentColor" />
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={`${
              i < rating
                ? "fill-amber-400 text-amber-400"
                : "fill-gray-200 text-gray-200"
            }`}
          />
        ))}
      </div>

      {/* Text */}
      <p className="text-gray-600 text-lg leading-relaxed italic mb-8 relative z-10 grow">
        &quot;{text}&quot;
      </p>

      {/* User Info */}
      <div className="flex items-center gap-4 mt-auto">
        <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
        <div>
          <h4 className="font-bold text-[#333333] text-lg">{name}</h4>
          <p className="text-[#17899B] font-medium text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
}
