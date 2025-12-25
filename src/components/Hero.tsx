"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Activity,
  ShieldCheck,
  Stethoscope,
  Utensils,
  Calendar,
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const SLIDES = [
  {
    image: "/images/heroone.jpg",
  },
  {
    image: "/images/hero.jpg",
  },
];

export default function Hero({
  dictionary,
}: {
  dictionary: {
    cta: string;
    slides: {
      title: string;
      subtitle: string;
      description: string;
    }[];
    cards: {
      title: string;
    }[];
  };
}) {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 30 }, [
    Autoplay({ delay: 6000, stopOnInteraction: false }),
  ]);

  const [cardsRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      breakpoints: {
        "(min-width: 768px)": { active: false },
      },
    },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );

  return (
    <section className="relative w-full min-h-[85vh] flex flex-col justify-between overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0 z-0 bg-black/40" ref={emblaRef}>
        <div className="flex h-full w-full">
          {SLIDES.map((slide, index) => (
            <div
              key={index}
              className="relative flex-[0_0_100%] w-full h-full min-h-[85vh]"
            >
              <Image
                src={slide.image}
                alt={dictionary.slides[index].title}
                fill
                className="object-cover object-top brightness-[0.7]"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-linear-to-r from-black/60 to-transparent" />

              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-start pt-24 md:pt-0 md:items-center md:pb-24">
                <div className="container mx-auto px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-2xl text-white"
                  >
                    <h1 className="text-3xl md:text-6xl font-bold leading-tight mb-2 drop-shadow-md">
                      {dictionary.slides[index].title}
                    </h1>
                    <h2 className="text-2xl md:text-5xl font-bold leading-tight mb-4 md:mb-6 text-teal-300 drop-shadow-md">
                      {dictionary.slides[index].subtitle}
                    </h2>
                    <p className="text-base md:text-xl mb-6 md:mb-8 text-white/95 max-w-xl leading-relaxed drop-shadow-sm">
                      {dictionary.slides[index].description}
                    </p>
                    <Button
                      asChild
                      size="lg"
                      className="text-white text-base md:text-lg px-6 md:px-8 py-4 md:py-6 rounded-full shadow-[0_4px_14px_0_rgba(23,137,155,0.39)] hover:shadow-[0_6px_20px_rgba(23,137,155,0.23)] hover:scale-105 transition-all duration-300 border-none relative overflow-hidden active:scale-95"
                      style={{
                        background:
                          "linear-gradient(184.51deg, #17899B 4.02%, #109C8E 96.72%)",
                      }}
                    >
                      <Link
                        href="/appointment"
                        className="flex items-center gap-2"
                      >
                        <Calendar className="w-5 h-5" />
                        <span>{dictionary.cta}</span>
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Spacing for content to push cards down */}
      <div className="grow"></div>

      {/* Cards Section */}
      <div className="container mx-auto px-4 relative z-20 pb-10 md:pb-0 transform md:translate-y-0">
        <div ref={cardsRef} className="overflow-hidden md:overflow-visible">
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-0 shadow-none md:shadow-xl rounded-xl md:rounded-none">
            {/* Card 1: Cancer Care */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="shrink-0 w-[85vw] md:w-auto bg-[#005f6b] text-white p-6 md:p-8 flex items-center gap-4 h-24 md:h-40 cursor-pointer group hover:bg-[#004e57] transition-colors rounded-xl md:rounded-none mr-4 md:mr-0"
            >
              <div className="bg-white rounded-full p-2 md:p-3 shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Activity className="w-6 h-6 md:w-8 md:h-8 text-[#005f6b]" />
              </div>
              <h3 className="text-lg md:text-xl font-bold">
                {dictionary.cards[0].title}
              </h3>
            </motion.div>

            {/* Card 2: Detox and Immunity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="shrink-0 w-[85vw] md:w-auto bg-white dark:bg-zinc-900 text-[#005f6b] dark:text-teal-400 p-6 md:p-8 flex items-center gap-4 h-24 md:h-40 border-r border-gray-100 dark:border-zinc-800 cursor-pointer group hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors rounded-xl md:rounded-none mr-4 md:mr-0"
            >
              <div className="bg-gray-100 dark:bg-zinc-800 rounded-full p-2 md:p-3 shadow-sm shrink-0 group-hover:scale-110 transition-transform duration-300 group-hover:bg-white dark:group-hover:bg-zinc-700">
                <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-[#005f6b] dark:text-teal-400" />
              </div>
              <h3 className="text-lg md:text-xl font-bold">
                {dictionary.cards[1].title}
              </h3>
            </motion.div>

            {/* Card 3: Expert Doctors */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -5 }}
              className="shrink-0 w-[85vw] md:w-auto bg-white dark:bg-zinc-900 text-[#005f6b] dark:text-teal-400 p-6 md:p-8 flex items-center gap-4 h-24 md:h-40 border-r border-gray-100 dark:border-zinc-800 cursor-pointer group hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors rounded-xl md:rounded-none mr-4 md:mr-0"
            >
              <div className="bg-gray-100 dark:bg-zinc-800 rounded-full p-2 md:p-3 shadow-sm shrink-0 group-hover:scale-110 transition-transform duration-300 group-hover:bg-white dark:group-hover:bg-zinc-700">
                <Stethoscope className="w-6 h-6 md:w-8 md:h-8 text-[#005f6b] dark:text-teal-400" />
              </div>
              <h3 className="text-lg md:text-xl font-bold">
                {dictionary.cards[2].title}
              </h3>
            </motion.div>

            {/* Card 4: Lifestyle and Diet */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ y: -5 }}
              className="shrink-0 w-[85vw] md:w-auto bg-white dark:bg-zinc-900 text-[#005f6b] dark:text-teal-400 p-6 md:p-8 flex items-center gap-4 h-24 md:h-40 cursor-pointer group hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors rounded-xl md:rounded-none mr-4 md:mr-0"
            >
              <div className="bg-gray-100 dark:bg-zinc-800 rounded-full p-2 md:p-3 shadow-sm shrink-0 group-hover:scale-110 transition-transform duration-300 group-hover:bg-white dark:group-hover:bg-zinc-700">
                <Utensils className="w-6 h-6 md:w-8 md:h-8 text-[#005f6b] dark:text-teal-400" />
              </div>
              <h3 className="text-lg md:text-xl font-bold">
                {dictionary.cards[3].title}
              </h3>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
