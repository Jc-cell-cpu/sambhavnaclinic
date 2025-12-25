"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Department {
  title: string;
  description: string;
  image: string;
}

const departments: Department[] = [
  {
    title: "Gynaecology (Ayurvedic)",
    description:
      "Specialized Ayurvedic care for women's reproductive health, hormonal balance, and wellness.",
    image: "/images/Vector 1.svg",
  },
  {
    title: "Oncology (Ayurvedic Cancer Care)",
    description:
      "Comprehensive cancer treatment focusing on stopping tumor growth and reducing side effects naturally.",
    image: "/images/Vector 1 (3).svg",
  },
  {
    title: "Orthopaedics",
    description:
      "Natural treatments for joint pain, arthritis, and musculoskeletal disorders using Vata-balancing therapies.",
    image: "/images/Vector 1 (5).svg",
  },
];

export default function Departments() {
  return (
    <section
      id="departments"
      className="bg-cyan-50 py-20 px-4 md:px-8 font-sans"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-blue-900 font-bold uppercase tracking-wider text-sm mb-4">
            Our Departments
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
            We deliver holistic Ayurvedic Cancer Care Services
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="relative aspect-4/5 md:aspect-square lg:aspect-4/5 group"
            >
              {/* Card Shape Wrapper - this one gets the clip/mask and background */}
              {/* Using a specific mask to cut the top-right corner */}
              <div
                className="absolute inset-0 rounded-tl-3xl rounded-bl-3xl rounded-br-3xl overflow-hidden"
                style={{
                  maskImage:
                    "radial-gradient(circle at top right, transparent 3rem, black 3.5rem)",
                  WebkitMaskImage:
                    "radial-gradient(circle at top right, transparent 3rem, black 3.5rem)",
                }}
              >
                {/* Background Image with Zoom Effect */}
                <div className="absolute inset-0">
                  <Image
                    src={dept.image}
                    alt={dept.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Dark Gradient Overlay */}
                {/* <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" /> */}

                {/* Content */}
                <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                  <h3 className="text-white text-xl font-bold mb-2">
                    {dept.title}
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed line-clamp-3">
                    {dept.description}
                  </p>
                </div>
              </div>

              {/* Floating Button - positioned in the empty space */}
              <Link href={"/departments"}>
                {" "}
                <button
                  className="absolute top-8 right-0 w-12 h-12 hover:bg-teal-600 text-teal-600 hover:text-white border-teal-600 border transition-colors duration-300 rounded-full flex items-center justify-center shadow-lg z-20"
                  aria-label={`Learn more about ${dept.title}`}
                >
                  <ArrowRight className="w-5 h-5" />
                </button>{" "}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
