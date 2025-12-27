"use client";

import { Input } from "../ui/input";
import { Phone, User, MessageSquare } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface Step1ContactProps {
  mobile: string;
  setMobile: (value: string) => void;
  labels: {
    title: string;
    subtitle: string;
    placeholder: string;
    helper: string;
    sendIn: string;
    illustrationText: string;
  };
  emailLanguage: "en" | "hi";
  setEmailLanguage: (lang: "en" | "hi") => void;
  error?: string;
}

export default function Step1Contact({
  mobile,
  setMobile,
  emailLanguage,
  setEmailLanguage,
  labels,
  error,
}: Step1ContactProps) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center py-6 md:py-10">
      <div className="w-full max-w-lg space-y-10">
        {/* Header Section */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center p-3 bg-teal-50 rounded-2xl mb-2">
            <User className="w-8 h-8 text-[#0e5a65]" />
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0e5a65]">
            {labels.title}
          </h2>
          <p className="text-gray-500 max-w-sm mx-auto font-medium">
            {labels.subtitle}
          </p>
        </div>

        {/* Input Area */}
        <div className="relative group max-w-md mx-auto">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#17899B] transition-colors duration-200">
            {mobile.includes("@") ? (
              <MessageSquare className="w-5 h-5" />
            ) : (
              <Phone className="w-5 h-5" />
            )}
          </div>
          <Input
            type="text"
            placeholder={labels.placeholder}
            value={mobile}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setMobile(e.target.value)
            }
            className={`w-full pl-12 pr-4 py-7 text-lg rounded-2xl border-2 transition-all duration-300 bg-gray-50/50
              ${
                error
                  ? "border-red-400 bg-red-50/30 focus:border-red-500 ring-red-100"
                  : "border-gray-100 focus:border-[#17899B] focus:bg-white focus:ring-4 focus:ring-teal-500/10"
              }`}
          />
        </div>
        {error && (
          <p className="text-red-500 text-xs font-bold text-center animate-in fade-in">
            {error}
          </p>
        )}

        {/* Language Selection for Email OTP */}
        {mobile.includes("@") && (
          <div className="max-w-md mx-auto p-4 bg-teal-50/50 rounded-2xl border border-teal-100/50 animate-in fade-in slide-in-from-top-2">
            <p className="text-sm font-semibold text-[#0e5a65] mb-3 text-center">
              {labels.sendIn}
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setEmailLanguage("en")}
                className={`px-6 py-2 rounded-xl text-sm font-bold transition-all duration-200 ${
                  emailLanguage === "en"
                    ? "bg-[#0e5a65] text-white shadow-md shadow-teal-900/10"
                    : "bg-white text-gray-600 hover:bg-white/80 border border-teal-100"
                }`}
              >
                English
              </button>
              <button
                onClick={() => setEmailLanguage("hi")}
                className={`px-6 py-2 rounded-xl text-sm font-bold transition-all duration-200 ${
                  emailLanguage === "hi"
                    ? "bg-[#0e5a65] text-white shadow-md shadow-teal-900/10"
                    : "bg-white text-gray-600 hover:bg-white/80 border border-teal-100"
                }`}
              >
                हिन्दी
              </button>
            </div>
          </div>
        )}

        {/* Visual Element / Helper */}
        <div className="pt-4">
          <div className="p-6 bg-linear-to-br from-teal-50 to-white rounded-3xl border border-teal-100/50 flex items-start gap-4">
            <div className="p-2 bg-white rounded-xl shadow-sm border border-teal-50">
              <svg
                className="w-5 h-5 text-[#17899B]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="text-sm text-[#0e5a65]/80 font-medium leading-relaxed">
              {labels.helper ||
                "Enter your registered mobile number to quickly fetch your previous medical history and save time."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
