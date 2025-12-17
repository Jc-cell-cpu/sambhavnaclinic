"use client";

import { Input } from "../ui/input";

interface Step2OTPProps {
  otp: string;
  setOtp: (value: string) => void;
  mobile: string;
}

export default function Step2OTP({ otp, setOtp, mobile }: Step2OTPProps) {
  // Simulate OTP focus/input
  return (
    <div className="w-full h-full flex flex-col items-center justify-center min-h-[400px]">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-xl font-bold text-[#0e5a65]">
            Verify Mobile Number
          </h2>
          <p className="text-sm text-gray-500">
            Enter the OTP sent to{" "}
            <span className="font-semibold text-gray-900">
              {mobile || "+91 XXXXX XXXXX"}
            </span>
          </p>
        </div>

        <div className="space-y-4">
          <Input
            type="text"
            maxLength={6}
            placeholder="Enter 6-digit OTP"
            value={otp}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setOtp(e.target.value)
            }
            className="w-full px-4 py-6 text-2xl text-center letter-spacing-widest rounded-xl border-gray-200 focus:ring-[#0e5a65] focus:border-[#0e5a65] tracking-[0.5em]"
          />
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Didn&apos;t receive code?</span>
            <button className="text-[#0e5a65] font-semibold hover:underline">
              Resend OTP
            </button>
          </div>
        </div>

        {/* Placeholder Icon */}
        <div className="flex justify-center py-8">
          <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center text-[#0e5a65]">
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
