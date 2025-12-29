"use client";

import {
  Check,
  User,
  Stethoscope,
  Calendar,
  FileText,
  ClipboardCheck,
} from "lucide-react";
import { motion } from "framer-motion";

interface SidebarProps {
  currentStep: number;
  labels: {
    details: string;
    treatment: string;
    dateTime: string;
    basicDetails: string;
    summary: string;
    inProgress: string;
    completed: string;
  };
}

export default function Sidebar({ currentStep, labels }: SidebarProps) {
  const sidebarItems = [
    {
      label: labels.details,
      icon: <User className="w-5 h-5" />,
      activeSteps: [1, 2],
    },
    {
      label: labels.treatment,
      icon: <Stethoscope className="w-5 h-5" />,
      activeSteps: [3],
    },
    {
      label: labels.dateTime,
      icon: <Calendar className="w-5 h-5" />,
      activeSteps: [4],
    },
    {
      label: labels.basicDetails,
      icon: <FileText className="w-5 h-5" />,
      activeSteps: [5],
    },
    {
      label: labels.summary,
      icon: <ClipboardCheck className="w-5 h-5" />,
      activeSteps: [6],
    },
  ];

  return (
    <div className="w-full md:w-80 bg-white rounded-3xl shadow-xl shadow-teal-900/5 border border-teal-50 p-8 h-fit sticky top-24">
      <div className="relative">
        {/* Background Track Line (Desktop) */}
        <div className="absolute left-[23px] top-6 bottom-6 w-0.5 bg-gray-100 hidden md:block rounded-full" />

        <div className="space-y-10 relative">
          {sidebarItems.map((item, index) => {
            const isActive = item.activeSteps.includes(currentStep);
            const isCompleted = Math.max(...item.activeSteps) < currentStep;

            return (
              <div
                key={index}
                className="flex items-center gap-6 relative z-10 group"
              >
                {/* Icon Container */}
                <motion.div
                  initial={false}
                  animate={{
                    backgroundColor: isActive
                      ? "#0e5a65"
                      : isCompleted
                      ? "#ecfdf5"
                      : "#ffffff",
                    borderColor: isActive
                      ? "#0e5a65"
                      : isCompleted
                      ? "#10b981"
                      : "#e5e7eb",
                    scale: isActive ? 1.15 : 1,
                    boxShadow: isActive
                      ? "0 10px 25px -5px rgba(14, 90, 101, 0.4)"
                      : "0 0 0 0 rgba(0,0,0,0)",
                  }}
                  transition={{ duration: 0.4, type: "spring", bounce: 0.4 }}
                  className={`relative flex items-center justify-center w-12 h-12 rounded-2xl border-2 shrink-0 transition-colors duration-300
                    ${
                      isCompleted
                        ? "text-teal-600"
                        : isActive
                        ? "text-white"
                        : "text-gray-300"
                    }
                    `}
                >
                  {isCompleted ? (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Check className="w-6 h-6 stroke-3" />
                    </motion.div>
                  ) : (
                    item.icon
                  )}

                  {/* Connecting Line Segment */}
                  {index !== sidebarItems.length - 1 && (
                    <div className="absolute -bottom-[42px] left-1/2 -translate-x-1/2 w-0.5 h-[42px] hidden md:block overflow-hidden pointer-events-none">
                      <motion.div
                        className="w-full bg-teal-500 origin-top"
                        initial={{ height: "0%" }}
                        animate={{ height: isCompleted ? "100%" : "0%" }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      />
                    </div>
                  )}
                </motion.div>

                {/* Label & Status */}
                <motion.div
                  animate={{
                    x: isActive ? 5 : 0,
                    opacity: isActive || isCompleted ? 1 : 0.6,
                  }}
                  className="flex flex-col justify-center"
                >
                  <span
                    className={`font-bold text-base transition-colors duration-300 ${
                      isActive
                        ? "text-[#0e5a65]"
                        : isCompleted
                        ? "text-teal-800"
                        : "text-gray-400 group-hover:text-gray-500"
                    }`}
                  >
                    {item.label}
                  </span>
                  {isActive && (
                    <motion.span
                      initial={{ opacity: 0, height: 0, y: -5 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      className="text-xs text-teal-600 font-semibold tracking-wide uppercase mt-0.5"
                    >
                      {labels.inProgress}
                    </motion.span>
                  )}
                  {isCompleted && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-xs text-emerald-600 font-medium mt-0.5"
                    >
                      {labels.completed}
                    </motion.span>
                  )}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
