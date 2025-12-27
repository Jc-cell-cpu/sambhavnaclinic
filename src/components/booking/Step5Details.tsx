"use client";

import { Input } from "@/components/ui/input";
import { User, Mail, FileText, Info, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

interface Step5DetailsProps {
  formData: {
    mobile: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    note: string;
  };
  updateField: (field: string, value: string) => void;
  labels: {
    title: string;
    subtitle: string;
    firstName: string;
    firstNamePlaceholder: string;
    lastName: string;
    lastNamePlaceholder: string;
    mobile: string;
    mobilePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    note: string;
    notePlaceholder: string;
    verified: string;
    optional: string;
    contactNote: string;
    confirmationLanguage: string;
    receiveDetailsIn: string;
    hindi: string;
    english: string;
  };
  errors?: Record<string, string>;
  emailLanguage: "en" | "hi";
  setEmailLanguage: (lang: "en" | "hi") => void;
}

export default function Step5Details({
  formData,
  updateField,
  labels,
  errors,
  emailLanguage,
  setEmailLanguage,
}: Step5DetailsProps) {
  const isInitialContactEmail = formData.mobile.includes("@");

  // Sync initial contact from Step 1 to the corresponding field in Step 5
  useEffect(() => {
    if (isInitialContactEmail) {
      if (formData.email !== formData.mobile) {
        updateField("email", formData.mobile);
      }
    } else {
      if (formData.phoneNumber !== formData.mobile) {
        updateField("phoneNumber", formData.mobile);
      }
    }
  }, [
    formData.mobile,
    isInitialContactEmail,
    formData.email,
    formData.phoneNumber,
    updateField,
  ]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const renderError = (field: string) => {
    if (!errors?.[field]) return null;
    return (
      <p className="text-red-500 text-[10px] font-bold uppercase tracking-wider mt-1 ml-1 animate-in fade-in slide-in-from-top-1">
        {errors[field]}
      </p>
    );
  };

  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      <div className="text-left border-l-4 border-[#17899B] pl-4 py-1">
        <h2 className="text-2xl font-black text-[#0e5a65] tracking-tight">
          {labels.title}
        </h2>
        <p className="text-gray-500 text-sm font-medium mt-1">
          {labels.subtitle}
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* First Name */}
        <motion.div variants={itemVariants} className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-black text-gray-700 uppercase tracking-wider ml-1">
            <User className="w-4 h-4 text-[#17899B]" />
            {labels.firstName}
            <span className="text-red-500">*</span>
          </label>
          <Input
            placeholder={labels.firstNamePlaceholder}
            value={formData.firstName}
            onChange={(e) => updateField("firstName", e.target.value)}
            className={`rounded-2xl py-7 px-5 border-2 bg-gray-50/50 transition-all duration-300 shadow-sm font-medium
              ${
                errors?.firstName
                  ? "border-red-400 focus:border-red-500"
                  : "border-gray-100 focus:border-[#17899B] focus:bg-white focus:ring-4 focus:ring-teal-500/5"
              }`}
          />
          {renderError("firstName")}
        </motion.div>

        {/* Last Name */}
        <motion.div variants={itemVariants} className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-black text-gray-700 uppercase tracking-wider ml-1">
            <User className="w-4 h-4 text-[#17899B]" />
            {labels.lastName}
            <span className="text-red-500">*</span>
          </label>
          <Input
            placeholder={labels.lastNamePlaceholder}
            value={formData.lastName}
            onChange={(e) => updateField("lastName", e.target.value)}
            className={`rounded-2xl py-7 px-5 border-2 bg-gray-50/50 transition-all duration-300 shadow-sm font-medium
              ${
                errors?.lastName
                  ? "border-red-400 focus:border-red-500"
                  : "border-gray-100 focus:border-[#17899B] focus:bg-white focus:ring-4 focus:ring-teal-500/5"
              }`}
          />
          {renderError("lastName")}
        </motion.div>

        {/* Mobile Number */}
        <motion.div variants={itemVariants} className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-black text-gray-700 uppercase tracking-wider ml-1">
            <Smartphone className="w-4 h-4 text-[#17899B]" />
            {labels.mobile}
            {!isInitialContactEmail && (
              <span className="text-[#17899B] ml-1 text-[10px] lowercase">
                ({labels.verified})
              </span>
            )}
            {isInitialContactEmail && <span className="text-red-500">*</span>}
          </label>
          <Input
            placeholder={labels.mobilePlaceholder}
            value={formData.phoneNumber}
            onChange={(e) => updateField("phoneNumber", e.target.value)}
            readOnly={!isInitialContactEmail}
            className={`rounded-2xl py-7 px-5 border-2 transition-all duration-300 shadow-sm font-medium
              ${
                !isInitialContactEmail
                  ? "bg-teal-50/30 border-teal-100 text-[#0e5a65] cursor-not-allowed opacity-80"
                  : errors?.phoneNumber
                  ? "border-red-400 focus:border-red-500"
                  : "border-gray-100 bg-gray-50/50 focus:border-[#17899B] focus:bg-white focus:ring-4 focus:ring-teal-500/5"
              }`}
          />
          {renderError("phoneNumber")}
        </motion.div>

        {/* Email Address */}
        <motion.div variants={itemVariants} className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-black text-gray-700 uppercase tracking-wider ml-1">
            <Mail className="w-4 h-4 text-[#17899B]" />
            {labels.email}
            {isInitialContactEmail && (
              <span className="text-[#17899B] ml-1 text-[10px] lowercase">
                ({labels.verified})
              </span>
            )}
            {!isInitialContactEmail && (
              <span className="text-gray-400 font-medium text-[10px] ml-1 lowercase">
                ({labels.optional})
              </span>
            )}
          </label>
          <Input
            type="email"
            placeholder={labels.emailPlaceholder}
            value={formData.email}
            onChange={(e) => updateField("email", e.target.value)}
            readOnly={isInitialContactEmail}
            className={`rounded-2xl py-7 px-5 border-2 transition-all duration-300 shadow-sm font-medium
              ${
                isInitialContactEmail
                  ? "bg-teal-50/30 border-teal-100 text-[#0e5a65] cursor-not-allowed opacity-80"
                  : errors?.email
                  ? "border-red-400 bg-red-50/30 focus:border-red-500"
                  : "border-gray-100 bg-gray-50/50 focus:border-[#17899B] focus:bg-white focus:ring-4 focus:ring-teal-500/5"
              }`}
          />
          {renderError("email")}
        </motion.div>

        {/* Language Selection for Email Confirmation */}
        <motion.div variants={itemVariants} className="md:col-span-2 space-y-3">
          <div className="flex items-center justify-between p-4 bg-teal-50/50 rounded-2xl border border-teal-100/50">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white rounded-lg shadow-sm border border-teal-50">
                <Mail className="w-4 h-4 text-[#17899B]" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#0e5a65]">
                  {labels.confirmationLanguage}
                </p>
                <p className="text-xs text-gray-500">
                  {labels.receiveDetailsIn}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setEmailLanguage("en")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                  emailLanguage === "en"
                    ? "bg-[#0e5a65] text-white shadow-md shadow-teal-900/10"
                    : "bg-white text-gray-600 hover:bg-white/80 border border-teal-100"
                }`}
              >
                {labels.english}
              </button>
              <button
                onClick={() => setEmailLanguage("hi")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                  emailLanguage === "hi"
                    ? "bg-[#0e5a65] text-white shadow-md shadow-teal-900/10"
                    : "bg-white text-gray-600 hover:bg-white/80 border border-teal-100"
                }`}
              >
                {labels.hindi}
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="md:col-span-2">
          <div className="flex items-start gap-2 p-4 bg-teal-50/50 rounded-2xl border border-teal-100/50 animate-in fade-in slide-in-from-top-2">
            <div className="p-1.5 bg-white rounded-lg shadow-sm border border-teal-50 shrink-0">
              <Info className="w-4 h-4 text-[#17899B]" />
            </div>
            <p className="text-xs text-[#0e5a65]/80 font-bold leading-relaxed">
              {labels.contactNote}
            </p>
          </div>
        </motion.div>

        {/* Note */}
        <motion.div variants={itemVariants} className="md:col-span-2 space-y-2">
          <label className="flex items-center gap-2 text-sm font-black text-gray-700 uppercase tracking-wider ml-1">
            <FileText className="w-4 h-4 text-[#17899B]" />
            {labels.note}
          </label>
          <textarea
            placeholder={labels.notePlaceholder}
            value={formData.note}
            onChange={(e) => updateField("note", e.target.value)}
            className="flex min-h-[120px] w-full rounded-2xl border-2 border-gray-100 bg-gray-50/50 px-5 py-4 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:border-[#17899B] focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-teal-500/5 placeholder:text-gray-400 shadow-sm"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
