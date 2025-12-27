"use client";

import { ChevronLeft, ChevronRight, Clock, Check } from "lucide-react";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";

interface Step4DateTimeProps {
  selectedDate: Date | null;
  setDate: (date: Date) => void;
  selectedSlot: string | null;
  setSlot: (slot: string) => void;
  labels: {
    title: string;
    morning: string;
    afternoon: string;
  };
  error?: string;
}

// Helper to generate OPD slots from 9 AM to 5 PM
const generateSlots = () => {
  const slots = [];
  let hour = 9;
  let min = 0;

  while (hour < 17) {
    const startHour = hour > 12 ? hour - 12 : hour;
    const endHour =
      min === 30 ? (hour + 1 > 12 ? hour + 1 - 12 : hour + 1) : startHour;
    const startMin = min === 0 ? "00" : "30";
    const endMin = min === 0 ? "30" : "00";
    const startPeriod = hour >= 12 ? "pm" : "am";
    const endPeriod = (hour === 11 && min === 30) || hour >= 12 ? "pm" : "am";

    slots.push(
      `${startHour
        .toString()
        .padStart(2, "0")}:${startMin} ${startPeriod} - ${endHour
        .toString()
        .padStart(2, "0")}:${endMin} ${endPeriod}`
    );

    if (min === 30) {
      hour++;
      min = 0;
    } else {
      min = 30;
    }
  }
  return slots;
};

const allSlots = generateSlots();
const morningSlots = allSlots.filter(
  (s) => s.includes("am") || s.startsWith("12:00 pm")
);
const afternoonSlots = allSlots.filter((s) => !morningSlots.includes(s));

export default function Step4DateTime({
  selectedDate,
  setDate,
  selectedSlot,
  setSlot,
  labels,
  error,
}: Step4DateTimeProps) {
  const [navDate, setNavDate] = useState(new Date());
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const daysInMonth = useMemo(
    () => new Date(navDate.getFullYear(), navDate.getMonth() + 1, 0).getDate(),
    [navDate]
  );
  const firstDayOfMonth = useMemo(
    () => new Date(navDate.getFullYear(), navDate.getMonth(), 1).getDay(),
    [navDate]
  );

  // Start week from Monday (1). Sunday is 0.
  const startingEmptyCells = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyCells = Array.from({ length: startingEmptyCells }, (_, i) => i);

  const handlePrevMonth = () => {
    setNavDate(new Date(navDate.getFullYear(), navDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setNavDate(new Date(navDate.getFullYear(), navDate.getMonth() + 1, 1));
  };

  const isSelected = (day: number) => {
    if (!selectedDate) return false;
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === navDate.getMonth() &&
      selectedDate.getFullYear() === navDate.getFullYear()
    );
  };

  const isPast = (day: number) => {
    const d = new Date(navDate.getFullYear(), navDate.getMonth(), day);
    return d < today;
  };

  const containerVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { staggerChildren: 0.03 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div className="text-left border-l-4 border-[#17899B] pl-4 py-1">
        <h2 className="text-2xl font-black text-[#0e5a65] tracking-tight">
          {labels.title}
        </h2>
        <p className="text-gray-500 text-sm font-medium mt-1">
          Pick your preferred date and time for the consultation
        </p>
        {error && (
          <p className="text-red-500 text-xs font-black uppercase tracking-wider mt-2 animate-pulse">
            ⚠️ {error}
          </p>
        )}
      </div>

      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* Calendar Section */}
        <div className="w-full lg:w-[400px] shrink-0">
          <div className="bg-white rounded-[2.5rem] border-2 border-teal-50 shadow-2xl shadow-teal-900/5 p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-[#17899B] to-[#109C8E]" />

            <div className="flex items-center justify-between mb-8 px-2">
              <button
                onClick={handlePrevMonth}
                className="p-2.5 hover:bg-teal-50 rounded-2xl text-[#17899B] transition-colors border border-transparent hover:border-teal-100"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="text-center">
                <span className="text-lg font-black text-[#0e5a65]">
                  {navDate.toLocaleString("default", {
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
              <button
                onClick={handleNextMonth}
                className="p-2.5 hover:bg-teal-50 rounded-2xl text-[#17899B] transition-colors border border-transparent hover:border-teal-100"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-4">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
                <div
                  key={d}
                  className="text-[10px] font-black text-gray-400 uppercase tracking-widest text-center py-2"
                >
                  {d}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
              {emptyCells.map((i) => (
                <div key={`empty-${i}`} className="aspect-square" />
              ))}
              {days.map((d) => {
                const past = isPast(d);
                const active = isSelected(d);
                return (
                  <button
                    key={d}
                    disabled={past}
                    onClick={() =>
                      setDate(
                        new Date(navDate.getFullYear(), navDate.getMonth(), d)
                      )
                    }
                    className={`relative aspect-square flex flex-col items-center justify-center rounded-2xl text-sm font-bold transition-all duration-300
                      ${
                        active
                          ? "bg-[#17899B] text-white shadow-lg shadow-teal-500/40 scale-105"
                          : past
                          ? "text-gray-200 cursor-not-allowed"
                          : "text-gray-600 hover:bg-teal-50 hover:text-[#17899B] hover:scale-105"
                      }`}
                  >
                    {d}
                    {active && (
                      <motion.div
                        layoutId="activeCircle"
                        className="absolute -bottom-1.5 w-1.5 h-1.5 bg-white rounded-full shadow-sm"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Slots Section */}
        <div className="flex-1 w-full space-y-8 pr-2">
          {/* Morning Slots */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 px-2">
              <div className="p-2 bg-orange-50 rounded-xl">
                <Clock className="w-4 h-4 text-orange-500" />
              </div>
              <h3 className="text-sm font-black text-[#0e5a65] uppercase tracking-wider">
                {labels.morning}{" "}
                <span className="text-gray-400 font-medium ml-2 text-xs">
                  (9 AM - 12 PM)
                </span>
              </h3>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {morningSlots.map((slot) => (
                <motion.button
                  key={slot}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSlot(slot)}
                  className={`group relative py-4 px-5 flex items-center justify-between rounded-2xl border-2 transition-all duration-300
                    ${
                      selectedSlot === slot
                        ? "bg-linear-to-r from-[#17899B] to-[#109C8E] border-transparent text-white shadow-xl shadow-teal-500/20"
                        : "bg-white border-gray-100 text-gray-700 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-900/5"
                    }`}
                >
                  <span className="text-xs font-black tracking-tight">
                    {slot}
                  </span>
                  {selectedSlot === slot && (
                    <div className="p-1 bg-white/20 rounded-full">
                      <Check className="w-3 h-3 text-white" strokeWidth={4} />
                    </div>
                  )}
                </motion.button>
              ))}
            </motion.div>
          </div>

          {/* Afternoon Slots */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 px-2">
              <div className="p-2 bg-teal-50 rounded-xl">
                <Clock className="w-4 h-4 text-[#17899B]" />
              </div>
              <h3 className="text-sm font-black text-[#0e5a65] uppercase tracking-wider">
                {labels.afternoon}{" "}
                <span className="text-gray-400 font-medium ml-2 text-xs">
                  (12 PM - 5 PM)
                </span>
              </h3>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {afternoonSlots.map((slot) => (
                <motion.button
                  key={slot}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSlot(slot)}
                  className={`group relative py-4 px-5 flex items-center justify-between rounded-2xl border-2 transition-all duration-300
                    ${
                      selectedSlot === slot
                        ? "bg-linear-to-r from-[#17899B] to-[#109C8E] border-transparent text-white shadow-xl shadow-teal-500/20"
                        : "bg-white border-gray-100 text-gray-700 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-900/5"
                    }`}
                >
                  <span className="text-xs font-black tracking-tight">
                    {slot}
                  </span>
                  {selectedSlot === slot && (
                    <div className="p-1 bg-white/20 rounded-full">
                      <Check className="w-3 h-3 text-white" strokeWidth={4} />
                    </div>
                  )}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
