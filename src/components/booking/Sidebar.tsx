"use client";

import { Check } from "lucide-react";

interface SidebarProps {
  currentStep: number;
}

export default function Sidebar({ currentStep }: SidebarProps) {
  // Steps configuration mapped to UI states

  // Steps 1 & 2 are preliminary (Contact & OTP) and might not need to be shown as active "Treatment" steps yet,
  // or we can map them.
  // Based on the user request: "Left Sidebar (Progress): Displays the steps (Treatment, Date & Time, Basic Details, Summary)."
  // This implies the sidebar starts tracking mainly from the core booking flow, but we need to handle the initial contact steps.
  // Let's assume Steps 1 & 2 are part of a "Details" or "Login" phase that might map to the first item or be separate.
  // Looking at the mockup, the first item is "Details" (icon looks like contact/login?) or "Treatment"?
  // Re-reading: "Left Sidebar... (Treatment, Date & Time, Basic Details, Summary)"
  // Wait, the mockup screenshot 1 shows: "Details", "Treatment", "Date and Time", "Basic Details", "Summary".
  // Actually, let's look at the user prompt again: "Left Sidebar (Progress): Displays the steps (Treatment, Date & Time, Basic Details, Summary)."
  // BUT the first step is "user should add mobile number/email id".
  // Let's reconcile. I will add a "Details" or "Login" step to the sidebar if it makes sense, or just highlight "Treatment" once we get there.
  // The user prompt lists steps 1-6.
  // Let's try to map them to the 4 visible sidebar items requested, or maybe 5 items if we include the initial login.
  // Let's stick to the prompt's list for the sidebar: "Treatment, Date & Time, Basic Details, Summary".
  // This might mean Steps 1 & 2 are considered "pre-wizard" or part of the first step.
  // However, for better UX, I'll add a "Details" step at the top if the user is in step 1/2.
  // Actually, let's look at the provided text: "Step 1: user should add mobile number/email id... Step 3: Select Treatment".
  // Let's make the Sidebar items:
  // 1. Details (Steps 1, 2)
  // 2. Treatment (Step 3)
  // 3. Date & Time (Step 4)
  // 4. Basic Details (Step 5)
  // 5. Summary (Step 6)
  // The user prompt said: "Displays the steps (Treatment, Date & Time, Basic Details, Summary)." - that's 4 items.
  // Maybe "Details" is implied or skipped in the description but present in the logical flow. I will add "Details" as the first icon for clarity.

  const sidebarItems = [
    {
      label: "Details",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      activeSteps: [1, 2],
    },
    {
      label: "Treatment",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
      activeSteps: [3],
    },
    {
      label: "Date and Time",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      activeSteps: [4],
    },
    {
      label: "Basic Details",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      activeSteps: [5],
    },
    {
      label: "Summary",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      ),
      activeSteps: [6],
    },
  ];

  return (
    <div className="w-full md:w-64 bg-white rounded-2xl shadow-sm border border-teal-100 p-6 h-fit">
      <div className="space-y-6">
        {sidebarItems.map((item, index) => {
          // Determine state
          const isActive = item.activeSteps.includes(currentStep);
          // Check if passed (any step in activeSteps is less than currentStep, but simpler: check if the *last* active step for this item is < currentStep)
          const isCompleted = Math.max(...item.activeSteps) < currentStep;

          return (
            <div key={index} className="flex items-center gap-4 group">
              <div
                className={`relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${
                  isActive
                    ? "bg-[#0e5a65] text-white shadow-lg shadow-teal-900/20"
                    : isCompleted
                    ? "bg-teal-50 text-teal-600 border border-teal-200"
                    : "bg-white text-gray-400 border border-gray-100"
                }`}
              >
                {isCompleted ? <Check className="w-6 h-6" /> : item.icon}

                {/* Connector Line (except for last item) */}
                {index !== sidebarItems.length - 1 && (
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-gray-100 -z-10" />
                )}
              </div>
              <span
                className={`font-semibold text-sm transition-colors duration-300 ${
                  isActive
                    ? "text-[#0e5a65]"
                    : isCompleted
                    ? "text-teal-900"
                    : "text-gray-400"
                }`}
              >
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
