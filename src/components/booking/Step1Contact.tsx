"use client";

import { Input } from "../ui/input";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface Step1ContactProps {
  mobile: string;
  setMobile: (value: string) => void;
  labels: {
    title: string;
    subtitle: string;
    placeholder: string;
    helper: string;
    illustrationText: string;
  };
}

export default function Step1Contact({
  mobile,
  setMobile,
  labels,
}: Step1ContactProps) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center min-h-[400px]">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-xl font-bold text-[#0e5a65]">{labels.title}</h2>
          <p className="text-sm text-gray-500">{labels.subtitle}</p>
        </div>

        <Input
          type="tel"
          placeholder={labels.placeholder}
          value={mobile}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMobile(e.target.value)
          }
          className="w-full px-4 py-6 text-lg rounded-xl border-gray-200 focus:ring-[#0e5a65] focus:border-[#0e5a65]"
        />

        {/* Illustration */}
        <div className="relative w-full h-64 bg-indigo-50/50 rounded-2xl flex items-center justify-center overflow-hidden border border-indigo-100">
          {/* Placeholder for illustration */}
          <div className="flex flex-col items-center gap-4 text-indigo-300">
            <svg
              className="w-24 h-24"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
            <span className="text-sm font-medium">
              {labels.illustrationText}
            </span>
          </div>
        </div>

        <p className="text-center text-sm font-semibold text-[#0e5a65]">
          {labels.helper}
        </p>
      </div>
    </div>
  );
}
