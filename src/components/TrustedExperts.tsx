"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function TrustedExperts() {
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
              We’re Trusted Experts in Ayurvedic Cancer Healing
            </h2>
            <p className="text-[#4B5563] text-base md:text-lg leading-relaxed">
              Ayurveda, the science of life, offers natural and effective cancer
              care. Our Ayurvedic doctors use centuries-old wisdom and
              personalized herbal treatments to support healing, reduce side
              effects, and enhance quality of life for patients at every stage.
            </p>
          </div>

          {/* Features and Stat Card Row */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Features List */}
            <div className="flex-1 space-y-8">
              {/* Feature 1 */}
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-[#056271] flex items-center justify-center text-white">
                  <Image
                    src="/images/RedcrosImage.svg"
                    alt="Leaf Icon"
                    width={29}
                    height={29}
                    className="w-9 h-9"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1F2933] mb-1">
                    Cancer Treatment
                  </h3>
                  <p className="text-[#4B5563] text-sm leading-relaxed">
                    We provide natural, personalized care using Ayurvedic herbs,
                    detox, diet, and lifestyle adjustments.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-[#056271] flex items-center justify-center text-white">
                  <Image
                    src="/images/RedcrosImage.svg"
                    alt="Leaf Icon"
                    width={29}
                    height={29}
                    className="w-9 h-9"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1F2933] mb-1">
                    Easy Booking
                  </h3>
                  <p className="text-[#4B5563] text-sm leading-relaxed">
                    We providing quality healthcare services to our community
                  </p>
                </div>
              </div>
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
                <div className="text-4xl font-semibold mb-5">25+</div>
                <div className="text-sm font-medium opacity-90 leading-tight">
                  Certified Ayurvedic
                  <br />
                  Experts
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
              Book Appointment
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
