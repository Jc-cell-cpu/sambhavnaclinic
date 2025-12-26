"use client";

import { Calendar, User } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface Step6SummaryProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formData: any; // Using any for brevity in this specific props interface, but better to use shared type
  labels: {
    title: string;
    subtitle: string;
    patientName: string;
    dateTime: string;
    treatment: string;
    dateNotSelected: string;
    disclaimer: string;
  };
}

export default function Step6Summary({ formData, labels }: Step6SummaryProps) {
  // Format Date
  const dateStr = formData.date
    ? formData.date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : labels.dateNotSelected;

  return (
    <div className="space-y-8 flex flex-col items-center">
      {/* Doctor/Success Illustration */}
      <div className="w-full h-48 bg-teal-50/50 rounded-2xl flex items-center justify-center relative overflow-hidden">
        {/* Placeholder for illustration */}
        <div className="flex flex-col items-center gap-2 text-teal-300">
          <User className="w-16 h-16 opacity-50" />
          <span className="text-xs font-semibold uppercase tracking-widest">
            {labels.title}
          </span>
        </div>
      </div>

      <div className="text-center space-y-2">
        <h2 className="text-xl font-bold text-gray-900">{labels.title}</h2>
        <p className="text-sm text-gray-500">{labels.subtitle}</p>
      </div>

      <div className="w-full max-w-lg space-y-4">
        {/* Patient Name Card */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#0e5a65] rounded-xl flex items-center justify-center text-white shrink-0">
            <User className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs text-gray-400 font-medium uppercase">
              {labels.patientName}
            </p>
            <p className="font-semibold text-gray-700 text-lg">
              {formData.firstName} {formData.lastName || ""}
            </p>
          </div>
        </div>

        {/* Date Time Card */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#0e5a65] rounded-xl flex items-center justify-center text-white shrink-0">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs text-gray-400 font-medium uppercase">
              {labels.dateTime}
            </p>
            <p className="font-semibold text-gray-700">
              {dateStr}, {formData.timeSlot}
            </p>
          </div>
        </div>

        {/* Treatment Card */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#0e5a65] rounded-xl flex items-center justify-center text-white shrink-0">
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12.705 3.328a2 2 0 00-1.41 0c-1.85.67-6.295 2.508-6.295 7.672 0 4.316 2.478 8.167 6.138 9.94a2 2 0 001.724 0c3.66-1.773 6.138-5.624 6.138-9.94 0-5.164-4.445-7.002-6.295-7.672zm-2.12 7.086c0-1.657 1.343-3 3-3s3 1.343 3 3a2.98 2.98 0 01-.194 1.054l-1.685 4.492a.75.75 0 01-1.408-.528l1.458-3.886a1.49 1.49 0 00-.171-1.132 1.5 1.5 0 00-2.586 1.132v.25a.75.75 0 01-1.5 0v-.25c0-.368.081-.715.226-1.028a3.001 3.001 0 01-.14-.104z" />
            </svg>
          </div>
          <div>
            <p className="text-xs text-gray-400 font-medium uppercase">
              {labels.treatment}
            </p>
            <p className="font-semibold text-gray-700 text-lg">
              {/* Map ID to name if we had the list here, or just capitalize */}
              {formData.treatment
                ?.split("-")
                .map((s: string) => s.charAt(0).toUpperCase() + s.slice(1))
                .join(" ")}
            </p>
          </div>
        </div>

        {/* Disclaimer / Note */}
        <div className="bg-gray-50 rounded-xl p-4 flex gap-3 items-start mt-4">
          <span className="text-yellow-500 text-xl">📄</span>
          <p className="text-xs text-gray-500 leading-relaxed">
            {labels.disclaimer}
          </p>
        </div>
      </div>
    </div>
  );
}
