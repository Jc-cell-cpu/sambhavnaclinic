"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Activity, ShieldCheck, Stethoscope, Utensils } from "lucide-react"

export default function Hero() {
    return (
        <section className="relative w-full min-h-[85vh] flex flex-col justify-center">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <Image
                    src="/images/hero.jpg"
                    alt="Hero Background"
                    fill
                    className="object-cover object-top brightness-[0.8] scale-x-[-1]"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="container mx-auto px-4 py-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl text-white"
                >
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-2">We are No. 1</h1>
                    <h2 className="text-5xl md:text-5xl font-bold leading-tight mb-4">Cancer Clinic Treatment</h2>
                    <p className="text-lg md:text-xl mb-8 text-white/90 max-w-lg">
                        Explore our website today and discover how we can partner with you on your journey to better health.
                    </p>
                    <Button
                        className="text-white text-lg px-8 py-6 rounded-md border-0"
                        style={{
                            background: "linear-gradient(184.51deg, #17899B 4.02%, #109C8E 96.72%)",
                        }}
                    >
                        Book an Appointment
                    </Button>
                </motion.div>
            </div>


            {/* Cards Section */}
            <div className="container mx-auto px-4 relative z-20 mt-auto pb-10 md:pb-0 md:mb-1.5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 shadow-xl">
                    {/* Card 1: Cancer Care - Dark Teal Background */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-[#005f6b] text-white p-8 flex items-center gap-4 h-40"
                    >
                        <div className="bg-white rounded-full p-3 flex-shrink-0">
                            <Activity className="w-8 h-8 text-[#005f6b]" />
                        </div>
                        <h3 className="text-xl font-bold">Cancer Care</h3>
                    </motion.div>

                    {/* Card 2: Detox and Immunity - White Background */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white dark:bg-zinc-900 text-[#005f6b] dark:text-teal-400 p-8 flex items-center gap-4 h-40 border-r border-gray-100 dark:border-zinc-800"
                    >
                        <div className="bg-gray-100 dark:bg-zinc-800 rounded-full p-3 shadow-sm flex-shrink-0">
                            <ShieldCheck className="w-8 h-8 text-[#005f6b] dark:text-teal-400" />
                        </div>
                        <h3 className="text-xl font-bold">Detox and Immunity</h3>
                    </motion.div>

                    {/* Card 3: Expert Doctors - White Background */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white dark:bg-zinc-900 text-[#005f6b] dark:text-teal-400 p-8 flex items-center gap-4 h-40 border-r border-gray-100 dark:border-zinc-800"
                    >
                        <div className="bg-gray-100 dark:bg-zinc-800 rounded-full p-3 shadow-sm flex-shrink-0">
                            <Stethoscope className="w-8 h-8 text-[#005f6b] dark:text-teal-400" />
                        </div>
                        <h3 className="text-xl font-bold">Expert Doctors</h3>
                    </motion.div>

                    {/* Card 4: Lifestyle and Diet - White Background */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white dark:bg-zinc-900 text-[#005f6b] dark:text-teal-400 p-8 flex items-center gap-4 h-40"
                    >
                        <div className="bg-gray-100 dark:bg-zinc-800 rounded-full p-3 shadow-sm flex-shrink-0">
                            <Utensils className="w-8 h-8 text-[#005f6b] dark:text-teal-400" />
                        </div>
                        <h3 className="text-xl font-bold">Lifestyle and Diet</h3>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
