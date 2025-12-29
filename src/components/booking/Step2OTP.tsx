"use client";

import { Input } from "../ui/input";
import { ShieldCheck, MessageSquare } from "lucide-react";

interface Step2OTPProps {
  otp: string;
  setOtp: (value: string) => void;
  mobile: string;
  labels: {
    title: string;
    subtitle: string;
    placeholder: string;
    resend: string;
    didntReceive: string;
  };
  onResend?: () => void;
  isResending?: boolean;
  error?: string;
}

export default function Step2OTP({
  otp,
  setOtp,
  mobile,
  labels,
  onResend,
  isResending,
  error,
}: Step2OTPProps) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center py-6 md:py-10">
      <div className="w-full max-w-lg space-y-10">
        {/* Header Section */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center p-3 bg-teal-50 rounded-2xl mb-2">
            <ShieldCheck className="w-8 h-8 text-[#0e5a65]" />
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0e5a65]">
            {labels.title}
          </h2>
          <div className="flex flex-col items-center gap-1">
            <p className="text-gray-500 font-medium">{labels.subtitle}</p>
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
              <span className="text-[#0e5a65] font-bold">
                {mobile || "+91 XXXXX XXXXX"}
              </span>
            </div>
          </div>
        </div>

        {/* OTP Input Area */}
        <div className="max-w-xs mx-auto space-y-6">
          <Input
            type="text"
            maxLength={6}
            placeholder={labels.placeholder}
            value={otp}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setOtp(e.target.value)
            }
            className={`w-full px-4 py-8 text-3xl text-center rounded-2xl border-2 bg-gray-50/50 transition-all duration-300 tracking-[0.4em] font-bold placeholder:tracking-normal placeholder:text-lg
              ${
                error
                  ? "border-red-400 bg-red-50/30 focus:border-red-500 ring-red-100"
                  : "border-gray-100 focus:border-[#17899B] focus:bg-white focus:ring-4 focus:ring-teal-500/10"
              }`}
          />
          {error && (
            <p className="text-red-500 text-xs font-bold text-center mt-2">
              {error}
            </p>
          )}

          <div className="flex items-center justify-center gap-2 text-sm font-medium">
            <span className="text-gray-500">{labels.didntReceive}</span>
            <button
              onClick={onResend}
              disabled={isResending}
              className="text-[#17899B] hover:text-[#0e5a65] transition-colors border-b border-transparent hover:border-[#0e5a65] disabled:opacity-50"
            >
              {isResending ? "Resending..." : labels.resend}
            </button>
          </div>
        </div>

        {/* Visual Element / Helper */}
        <div className="pt-4">
          <div className="p-6 bg-linear-to-br from-teal-50/50 to-white rounded-3xl border border-teal-100/30 flex items-start gap-4">
            <div className="p-2 bg-white rounded-xl shadow-sm border border-teal-50">
              <MessageSquare className="w-5 h-5 text-[#17899B]" />
            </div>
            <p className="text-sm text-[#0e5a65]/80 font-medium leading-relaxed">
              For security, we&apos;ve sent a 6-digit verification code to your
              {mobile.includes("@") ? " email address" : " mobile number"}.
              Please enter it above to proceed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
