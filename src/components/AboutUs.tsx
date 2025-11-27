"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion, useReducedMotion, useInView, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useRef } from "react"

// Counter component for animated numbers
function CountUp({ end, duration = 2, decimals = 0, suffix = "" }: { end: number; duration?: number; decimals?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: duration * 1000 })
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      motionValue.set(end)
    }
  }, [isInView, end, motionValue])

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toFixed(decimals) + suffix
      }
    })
    return () => unsubscribe()
  }, [springValue, decimals, suffix])

  return <span ref={ref}>0{suffix}</span>
}

export default function AboutUs() {
  const shouldReduceMotion = useReducedMotion()

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
    }
  }

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }
    }
  }

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 }
    }
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <section className="relative py-12 md:py-20 lg:py-24 overflow-hidden bg-white">
      {/* Top Right Bowl Decoration with Floating Animation */}
      <motion.div
        initial={shouldReduceMotion ? {} : "hidden"}
        whileInView={shouldReduceMotion ? {} : "visible"}
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        animate={shouldReduceMotion ? {} : {
          y: [0, -15, 0],
          rotate: [13.64, 18, 13.64],
          transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        className="absolute top-20 -right-20 md:top-35 md:right-16 pointer-events-none opacity-50 md:opacity-100"
        style={{
          width: "254px",
          height: "254px",
          transform: "rotate(13.64deg) translate(30%, -30%)",
        }}
      >
        <Image src="/images/bowl.png" alt="" width={234} height={234} />
      </motion.div>

      {/* Bottom Left Bowl Decoration */}
      <motion.div
        initial={shouldReduceMotion ? {} : "hidden"}
        whileInView={shouldReduceMotion ? {} : "visible"}
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className="absolute -bottom-20 -left-20 md:bottom-60 md:left-5 pointer-events-none opacity-50 md:opacity-100"
        style={{
          width: "366px",
          height: "366px",
          transform: "rotate(-15deg) translate(-30%, 30%)",
        }}
      >
        <Image src="/images/bottomleftbowl.png" alt="" width={366} height={366} />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 xl:gap-24">
          {/* Left Side - Child Image */}
          <motion.div
            initial={shouldReduceMotion ? {} : "hidden"}
            whileInView={shouldReduceMotion ? {} : "visible"}
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInLeft}
            className="relative w-full lg:w-1/2 max-w-lg lg:max-w-none mx-auto"
          >
            <div className="relative">
              {/* Image container */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-4/5 lg:aspect-auto">
                <Image
                  src="/images/child.png"
                  alt="Smiling child patient at Sambhavna Clinic"
                  width={600}
                  height={720}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            {/* About Us Label */}
            <motion.p
              initial={shouldReduceMotion ? {} : "hidden"}
              whileInView={shouldReduceMotion ? {} : "visible"}
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3 md:mb-4"
              style={{ color: "#00256E" }}
            >
              ABOUT US
            </motion.p>

            {/* Heading */}
            <motion.h2
              initial={shouldReduceMotion ? {} : "hidden"}
              whileInView={shouldReduceMotion ? {} : "visible"}
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.7rem] font-bold leading-[1.1] mb-4 md:mb-6"
              style={{ color: "#0D3B4C" }}
            >
              Holistic Cancer Care Through Ayurvedic Wisdom
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={shouldReduceMotion ? {} : "hidden"}
              whileInView={shouldReduceMotion ? {} : "visible"}
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-2xl mx-auto lg:mx-0"
            >
              We provide compassionate, natural treatments rooted in ancient Ayurvedic principles. Our approach
              strengthens the body, mind, and spirit—supporting recovery and long-term well-being. Every patient
              receives personalized care through herbal therapies, detox programs, and dietary plans.
            </motion.p>

            {/* Stats Cards */}
            <motion.div
              initial={shouldReduceMotion ? {} : "hidden"}
              whileInView={shouldReduceMotion ? {} : "visible"}
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10 text-left"
            >
              {/* Card 1 - Patients Healed */}
              <motion.div
                variants={fadeInUp}
                className="p-5 md:p-6 rounded-2xl text-white flex flex-col justify-between min-h-[160px] md:min-h-[180px]"
                style={{ backgroundColor: "#056271" }}
              >
                <div className="mb-3 md:mb-4">
                  <Image src="/icons/lotous.png" alt="Lotus icon" width={40} height={40} className="w-8 h-8 md:w-10 md:h-10" />
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold mb-7">
                    <CountUp end={6000} duration={2.5} suffix="+" />
                  </p>
                  <p className="text-xs md:text-sm font-normal opacity-90 leading-tight">Patients Healed Naturally</p>
                </div>
              </motion.div>

              {/* Card 2 - Satisfaction Score */}
              <motion.div
                variants={fadeInUp}
                className="p-5 md:p-6 rounded-2xl flex flex-col justify-between min-h-[160px] md:min-h-[180px]"
                style={{ backgroundColor: "#E0F4F4" }}
              >
                <div className="mb-3 md:mb-4">
                  <Image src="/icons/leaf.png" alt="Leaf icon" width={40} height={40} className="w-8 h-8 md:w-10 md:h-10" />
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold mb-3" style={{ color: "#056271" }}>
                    <CountUp end={4.95} duration={2.5} decimals={2} suffix="/5" />
                  </p>
                  <p className="text-xs md:text-sm font-medium leading-tight" style={{ color: "#056271" }}>
                    Healing Satisfaction Score
                  </p>
                </div>
              </motion.div>

              {/* Card 3 - Wait Time */}
              <motion.div
                variants={fadeInUp}
                className="p-5 md:p-6 rounded-2xl flex flex-col justify-between min-h-[160px] md:min-h-[180px] sm:col-span-2 lg:col-span-1"
                style={{ backgroundColor: "#E0F4F4" }}
              >
                <div className="mb-3 md:mb-4">
                  <Image src="/icons/clock.png" alt="Clock icon" width={30} height={30} className="w-8 h-8 md:w-9 md:h-9" />
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold mb-7" style={{ color: "#056271" }}>
                    <CountUp end={1} duration={1.5} suffix=" Day" />
                  </p>
                  <p className="text-xs md:text-sm font-medium leading-tight" style={{ color: "#056271" }}>
                    Average Wait Time
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Learn More Button */}
            <motion.button
              initial={shouldReduceMotion ? {} : "hidden"}
              whileInView={shouldReduceMotion ? {} : "visible"}
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-full text-white font-semibold text-sm md:text-base transition-all hover:opacity-95 hover:gap-3"
              style={{ backgroundColor: "#056271" }}
            >
              Learn More
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
