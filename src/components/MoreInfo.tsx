"use client";

import Image from "next/image";
import { Phone, Mail, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { i18n } from "@/i18n-config";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function MoreInfo({ dictionary }: { dictionary: any }) {
  const {
    getStarted,
    bookCare,
    bookNow,
    guidanceHeading,
    guidanceDescription,
    emergencyCall,
    sendEmail,
    visitSite,
  } = dictionary.moreInfo;

  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || i18n.defaultLocale;

  return (
    <section className="relative w-full py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative flex flex-col lg:flex-row items-center">
        {/* Right Section (Dark Background) */}
        <div className="w-full lg:w-full lg:ml-auto bg-[#056271] rounded-[30px] relative overflow-hidden text-white p-8 md:p-12 lg:py-16 lg:pl-60 lg:pr-12 flex flex-col justify-center min-h-[400px] lg:min-h-[500px] mt-10 lg:mt-0 order-2 lg:order-2 shadow-sm">
          <div className="relative z-10 max-w-lg ml-auto">
            <h4 className="text-[#4fdbd0] uppercase text-xs font-bold tracking-[0.2em] mb-4">
              {getStarted}
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-8">
              {bookCare}
            </h2>
            <button className="flex items-center gap-3 px-8 py-3.5 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white hover:text-[#0e5a65] transition-all group w-fit">
              <Link href={`/${currentLocale}/appointment`}>{bookNow}</Link>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Decoration - Top Left */}
          <div className="absolute top-2 left-2 w-24 h-24 md:w-28 md:h-28 opacity-60 pointer-events-none">
            <Image
              src="/images/TopLeft.svg"
              alt="Decoration"
              fill
              className="object-contain object-top-left"
            />
          </div>

          {/* Decoration - Bottom Right */}
          <div className="absolute bottom-2 right-2 w-24 h-24 md:w-28 md:h-28 opacity-60 pointer-events-none">
            <Image
              src="/images/BottomRight.svg"
              alt="Decoration"
              fill
              className="object-contain object-bottom-right"
            />
          </div>
        </div>

        {/* Left Section (Light Card) - Overlapping */}
        <div className="w-full lg:w-[35%] lg:h-[550px] lg:ml-60 bg-[#f0fdfd] rounded-[30px] relative z-20 shadow-xl p-8 md:p-10 lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 order-1 lg:order-1 flex flex-col justify-center">
          {/* Decorations */}
          <div className="absolute top-0 left-0 w-32 h-32 pointer-events-none opacity-60">
            <Image
              src="/images/TopLeft.svg"
              alt="Decoration"
              fill
              className="object-contain object-top-left"
            />
          </div>
          <div className="absolute top-8 right-8 w-14 h-14">
            <Image
              src="/images/ColoredBowl.svg"
              alt="Bowl Icon"
              fill
              className="object-contain"
            />
          </div>

          <div className="relative z-10 mt-6">
            <h3 className="text-2xl font-bold text-[#0e5a65] mb-6 leading-snug max-w-[80%]">
              {guidanceHeading}
            </h3>
            <p className="text-[#5b6c6c] text-sm leading-relaxed mb-10">
              {guidanceDescription}
            </p>

            <div className="space-y-7">
              {/* Contact Item 1 */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-[#1a7683] flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[#5b6c6c] font-medium mb-0.5">
                    {emergencyCall}
                  </p>
                  <p className="text-[#0e5a65] font-bold text-sm">
                    (+91) 8709185622
                  </p>
                </div>
              </div>

              {/* Contact Item 2 */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-[#1a7683] flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[#5b6c6c] font-medium mb-0.5">
                    {sendEmail}
                  </p>
                  <p className="text-[#0e5a65] font-bold text-sm break-all">
                    Shambhavnaclinic@gmail.com
                  </p>
                </div>
              </div>

              {/* Contact Item 3 */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-[#1a7683] flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[#5b6c6c] font-medium mb-0.5">
                    {visitSite}
                  </p>
                  <p className="text-[#0e5a65] font-bold text-sm">
                    Shambhavnaclinic.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
