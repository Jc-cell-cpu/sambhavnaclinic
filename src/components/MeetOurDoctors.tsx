/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { i18n } from "@/i18n-config";

export default function MeetOurDoctors({ dictionary }: { dictionary: any }) {
  const { featuredDoctor, teamDoctors } = dictionary.doctorsSection;
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || i18n.defaultLocale;

  return (
    <section className="py-20 px-4 font-sans bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-blue-900 font-bold uppercase tracking-wider text-sm mb-4">
            {dictionary.doctorsSection.label}
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            {dictionary.doctorsSection.heading}
          </h2>
        </div>

        {/* Content Container */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Column 1: Featured Doctor (Left Side - approx 40%) */}
          <div className="w-full lg:w-[40%] relative rounded-3xl overflow-hidden min-h-[500px] lg:min-h-[600px] group shadow-xl">
            <Image
              src={featuredDoctor.image}
              alt={featuredDoctor.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Glass Overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-white/5 backdrop-blur-2xl border-t border-white/20 flex flex-col justify-center items-center text-center p-8">
              <h3 className="text-white text-4xl font-bold mb-2">
                {featuredDoctor.name}
              </h3>
              <p className="text-gray-100 text-xl font-medium mb-6">
                {featuredDoctor.title}
              </p>

              <Link href={`/${currentLocale}/appointment`}>
                {" "}
                <button className="bg-white text-rose-500 border-2 border-rose-500 hover:bg-rose-50 font-bold py-3 px-8 rounded-full flex items-center gap-3 transition-colors shadow-lg">
                  <Image
                    src="/images/AlaramIcon.svg"
                    alt="Alarm"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                  <span>{featuredDoctor.cta}</span>
                </button>{" "}
              </Link>
            </div>
          </div>

          {/* Column 2: The Team Container (Right Side - approx 60%) */}
          <div className="w-full lg:w-[60%] bg-cyan-50 rounded-3xl p-8 lg:p-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 h-full items-center">
              {teamDoctors.map((doc: any, index: number) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative w-full aspect-2/4 rounded-4xl overflow-hidden mb-4 shadow-md bg-white">
                    <Image
                      src={doc.image}
                      alt={doc.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-gray-900 font-bold text-lg mb-1">
                    {doc.name}
                  </h4>
                  <p className="text-teal-600 font-medium">{doc.designation}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
