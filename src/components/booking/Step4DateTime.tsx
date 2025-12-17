"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface Step4DateTimeProps {
  selectedDate: Date | null;
  setDate: (date: Date) => void;
  selectedSlot: string | null;
  setSlot: (slot: string) => void;
}

// Mock slots
const morningSlots = [
  "09:00 am - 10:00 am",
  "09:00 am - 10:00 am",
  "09:00 am - 10:00 am",
  "09:00 am - 10:00 am",
];
const afternoonSlots = [
  "09:00 am - 10:00 am",
  "09:00 am - 10:00 am",
  "09:00 am - 10:00 am",
  "09:00 am - 10:00 am",
];

// Helper to generate calendar days
const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};

const getFirstDayOfMonth = (year: number, month: number) => {
  return new Date(year, month, 1).getDay(); // 0 is Sunday
};

export default function Step4DateTime({
  selectedDate,
  setDate,
  selectedSlot,
  setSlot,
}: Step4DateTimeProps) {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 9, 1)); // Oct 2025 as per mockup
  const daysInMonth = getDaysInMonth(
    currentDate.getFullYear(),
    currentDate.getMonth()
  );
  const firstDay = getFirstDayOfMonth(
    currentDate.getFullYear(),
    currentDate.getMonth()
  );

  // Adjust first day to start from Monday (if needed, but standard US/INTL is usually Sunday=0, let's assume standard grid)
  // Mockup shows: M T W TH F S SU
  // So Monday is first column.
  const startingEmptyCells = firstDay === 0 ? 6 : firstDay - 1;

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyCells = Array.from({ length: startingEmptyCells }, (_, i) => i);

  return (
    <div className="space-y-6">
      <div className="text-left">
        <h2 className="text-xl font-bold text-[#0e5a65] mb-4">
          Select Date and Time
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Calendar Section */}
        <div className="flex-1 lg:max-w-[400px]">
          <div className="border border-gray-200 rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
              <button className="p-1 hover:bg-gray-50 rounded-full text-gray-400">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="font-semibold text-gray-700">October 2025</span>
              <button className="p-1 hover:bg-gray-50 rounded-full text-gray-400">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Grid */}
            <div className="p-4">
              <div className="grid grid-cols-7 mb-2 text-center">
                {["M", "T", "W", "TH", "F", "S", "SU"].map((d) => (
                  <div
                    key={d}
                    className="text-xs font-semibold text-gray-400 py-1"
                  >
                    {d}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1 text-center">
                {emptyCells.map((i) => (
                  <div key={`empty-${i}`} />
                ))}
                {days.map((d) => {
                  const isSelected = selectedDate?.getDate() === d;
                  // Hardcode "29" as selected in mockup style if selectedDate is null initially?
                  // Or just use real selection logic.
                  return (
                    <button
                      key={d}
                      onClick={() => {
                        const newDate = new Date(
                          currentDate.getFullYear(),
                          currentDate.getMonth(),
                          d
                        );
                        setDate(newDate);
                      }}
                      className={`aspect-square flex items-center justify-center rounded-lg text-sm transition-all duration-200 ${
                        isSelected
                          ? "bg-[#0e5a65] text-white shadow-md shadow-teal-700/20 font-semibold"
                          : "text-gray-400 hover:bg-teal-50 hover:text-[#0e5a65]"
                      }`}
                    >
                      {d}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Slots Section */}
        <div className="flex-1 space-y-6 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
          {/* Morning */}
          <div>
            <h3 className="text-[#0e5a65]/80 font-bold mb-3 text-sm">
              Morning
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {morningSlots.map((slot, i) => (
                <button
                  key={`morning-${i}`}
                  onClick={() => setSlot(slot)}
                  className={`py-3 px-4 text-xs font-medium border rounded-xl transition-all duration-200 ${
                    selectedSlot === slot
                      ? "bg-teal-50 border-[#0e5a65] text-[#0e5a65]"
                      : "border-gray-100 text-gray-600 hover:border-teal-200 hover:text-[#0e5a65]"
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          {/* Afternoon */}
          <div>
            <h3 className="text-[#0e5a65]/80 font-bold mb-3 text-sm">
              Afternoon
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {afternoonSlots.map((slot, i) => (
                <button
                  key={`afternoon-${i}`}
                  onClick={() => setSlot(slot)}
                  className={`py-3 px-4 text-xs font-medium border rounded-xl transition-all duration-200 ${
                    selectedSlot === slot
                      ? "bg-teal-50 border-[#0e5a65] text-[#0e5a65]"
                      : "border-gray-100 text-gray-600 hover:border-teal-200 hover:text-[#0e5a65]"
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
