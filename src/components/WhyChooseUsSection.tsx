/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function WhyChooseUsSection({
  dictionary,
}: {
  dictionary: any;
}) {
  const leftBullets = dictionary.whyChooseUs.leftBullets;
  const rightBullets = dictionary.whyChooseUs.rightBullets;

  const BulletItem = ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => (
    <div className="flex flex-row items-start gap-4">
      {/* Icon Circle */}
      <div className="shrink-0 w-[44px] h-[44px] rounded-full bg-[#E0F4F4] flex items-center justify-center">
        <Image
          src="/images/LeafImage.svg"
          alt="Leaf Icon"
          width={24}
          height={24}
          className="w-6 h-6"
        />
      </div>
      {/* Text Content */}
      <div className="flex flex-col gap-1">
        <h3 className="text-sm md:text-base font-semibold text-slate-900">
          {title}
        </h3>
        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );

  return (
    <section className="w-full py-12 md:py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto bg-[#F3FAFF] rounded-3xl shadow-sm py-16 px-6 md:py-5 md:px-10">
        {/* Top Heading Area */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[#00256E] text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3 md:mb-4">
            {dictionary.whyChooseUs.label}
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#373737]">
            {dictionary.whyChooseUs.heading}
          </h3>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)_minmax(0,1.1fr)] gap-10 lg:items-center">
          {/* Left Column (Bullets) */}
          <div className="space-y-8 order-3 lg:order-1">
            {leftBullets.map((item: any, index: number) => (
              <BulletItem
                key={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>

          {/* Center Column (Doctor Image) */}
          <div className="flex justify-center order-2 lg:order-2">
            <div className="relative w-full max-w-[300px] md:max-w-[350px] lg:max-w-full -mb-5 aspect-3/4 lg:aspect-auto lg:h-[500px]">
              <Image
                src="/images/doco.png"
                alt="Ayurvedic doctor"
                fill
                className="object-contain object-center"
              />
            </div>
          </div>

          {/* Right Column (Bullets) */}
          <div className="space-y-8 order-4 lg:order-3">
            {rightBullets.map((item: any, index: number) => (
              <BulletItem
                key={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Trusted Experts Section */}
      <div className="max-w-7xl mx-auto mt-16 md:mt-24">
        <TrustedExperts content={dictionary.whyChooseUs.trustedExperts} />
      </div>
    </section>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function TrustedExperts({ content }: { content: any }) {
  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 lg:p-0 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Column - Visuals */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-full min-h-[400px] lg:min-h-[500px] flex items-end"
        >
          {/* Main Background Image (Gray Card with Ribbon) */}
          <div className="absolute top-0 left-0 w-[90%] h-[80%] rounded-tr-[50px] rounded-br-[50px] overflow-hidden">
            <Image
              src="/images/WCULeftImage.svg"
              alt="Background Shape"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Right Column - Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="space-y-8 py-12 pr-8 lg:pr-16"
        >
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#373737] mb-6 leading-tight">
              {content.heading}
            </h2>
            <p className="text-[#4B5563] text-base md:text-lg leading-relaxed">
              {content.description}{" "}
              <span className="font-semibold text-[#056271]">
                {content.highlight}
              </span>
            </p>
          </div>

          {/* Features and Stat Card Row */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Features List */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-6">
              {content.features.map((item: string, index: number) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-[#E0F4F4] flex items-center justify-center text-[#056271]">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span className="text-[#1F2933] font-semibold text-sm md:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Stat Card */}
            <div className="shrink-0 w-full md:w-auto">
              <div className="rounded-2xl p-6 bg-[linear-gradient(184.51deg,#17899B_4.02%,#109C8E_96.72%)] text-white min-w-[180px] shadow-lg">
                <div className="w-12 h-12 flex mb-2">
                  <Image
                    src="/images/DoctorIcon.svg"
                    alt="Doctor"
                    width={39}
                    height={39}
                  />
                </div>
                <div className="text-4xl font-semibold mb-5">
                  {content.statCard.value}
                </div>
                <div className="text-sm font-medium opacity-90 leading-tight">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: content.statCard.label.replace(" ", "<br />"),
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Button */}
          <div className="pt-2">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-3 bg-[#056271] text-white px-8 py-4 rounded-full font-semibold shadow-md hover:shadow-lg transition-all"
            >
              <div className="w-5 h-5 relative">
                <Image
                  src="/images/CalenderIcon.svg"
                  alt="Calendar"
                  fill
                  className="object-contain"
                />
              </div>
              <Link href={"/appointment"}>{content.cta}</Link>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
