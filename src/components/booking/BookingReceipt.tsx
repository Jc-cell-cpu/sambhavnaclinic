"use client";

import { useState } from "react";
import { User, Phone, Calendar, MapPin, Stethoscope } from "lucide-react";

interface BookingReceiptProps {
  formData: {
    mobile: string;
    firstName: string;
    lastName: string;
    email: string;
    treatment: string | null;
    date: Date | null;
    timeSlot: string | null;
    note: string;
  };
  labels: {
    receiptHeader: string;
    receiptSubheader: string;
    patientDetails: string;
    appointmentDetails: string;
    clinicDetails: string;
    verifiedLabel: string;
    treatmentLabel: string;
    dateLabel: string;
    timeLabel: string;
    noteLabel: string;
    signatureLabel: string;
    thankYou: string;
  };
}

export default function BookingReceipt({
  formData,
  labels,
}: BookingReceiptProps) {
  const [receiptId] = useState(() =>
    Math.random().toString(36).substr(2, 9).toUpperCase()
  );

  const dateStr = new Date(formData.date || new Date()).toLocaleDateString(
    "en-US",
    {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="bg-white w-full max-w-3xl mx-auto shadow-2xl relative overflow-hidden print:shadow-none print:w-full print:max-w-none">
      {/* Decorative Background Elements (Screen Only) */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-50 rounded-full blur-3xl -mr-32 -mt-32 opacity-60 pointer-events-none print:hidden" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-50 rounded-full blur-3xl -ml-32 -mb-32 opacity-60 pointer-events-none print:hidden" />

      {/* Main Content Container */}
      <div className="relative z-10 p-6 md:p-12 space-y-8 md:space-y-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b-2 border-teal-50 pb-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-linear-to-br from-[#0e5a65] to-[#17899B] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-teal-900/10 print:shadow-none">
              <Stethoscope className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-black text-[#0e5a65] tracking-tight uppercase">
                Sambhavna
              </h1>
              <p className="text-xs font-bold text-[#17899B] tracking-widest uppercase mt-1">
                {labels.receiptSubheader}
              </p>
            </div>
          </div>

          <div className="flex flex-row md:flex-col justify-between w-full md:w-auto md:text-right gap-4">
            <div>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                Receipt No.
              </p>
              <p className="text-xl font-black text-[#0e5a65] font-mono">
                #{receiptId}
              </p>
            </div>
            <div className="md:hidden h-10 w-px bg-gray-100"></div>
            <div>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                Date
              </p>
              <p className="text-sm font-bold text-gray-600">
                {new Date().toLocaleDateString(undefined, {
                  dateStyle: "medium",
                })}
              </p>
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Patient Details Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-2 border-b border-teal-50 pb-2">
              <div className="p-1.5 bg-teal-50 rounded-lg text-[#0e5a65]">
                <User className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-black text-[#0e5a65] uppercase tracking-widest">
                {labels.patientDetails}
              </h3>
            </div>

            <div className="space-y-5 pl-2">
              <div className="relative pl-4 border-l-2 border-gray-100 hover:border-[#17899B] transition-colors duration-300">
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">
                  Name
                </p>
                <p className="font-bold text-gray-800 text-lg">
                  {formData.firstName} {formData.lastName}
                </p>
              </div>

              <div className="relative pl-4 border-l-2 border-gray-100 hover:border-[#17899B] transition-colors duration-300">
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">
                  Contact
                </p>
                <p className="font-semibold text-gray-700">{formData.mobile}</p>
              </div>

              <div className="relative pl-4 border-l-2 border-gray-100 hover:border-[#17899B] transition-colors duration-300">
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">
                  Email
                </p>
                <p className="font-semibold text-gray-700 break-all">
                  {formData.email}
                </p>
              </div>
            </div>
          </div>

          {/* Appointment Details Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-2 border-b border-teal-50 pb-2">
              <div className="p-1.5 bg-teal-50 rounded-lg text-[#0e5a65]">
                <Calendar className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-black text-[#0e5a65] uppercase tracking-widest">
                {labels.appointmentDetails}
              </h3>
            </div>

            <div className="space-y-5 pl-2">
              <div className="relative pl-4 border-l-2 border-gray-100 hover:border-[#17899B] transition-colors duration-300">
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">
                  {labels.treatmentLabel}
                </p>
                <p className="font-bold text-gray-800 text-lg capitalize">
                  {formData.treatment?.replace(/-/g, " ")}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative pl-4 border-l-2 border-gray-100 hover:border-[#17899B] transition-colors duration-300">
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">
                    {labels.dateLabel}
                  </p>
                  <p className="font-semibold text-gray-700">{dateStr}</p>
                </div>

                <div className="relative pl-4 border-l-2 border-gray-100 hover:border-[#17899B] transition-colors duration-300">
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">
                    {labels.timeLabel}
                  </p>
                  <p className="font-semibold text-gray-700">
                    {formData.timeSlot}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Note Section */}
        {formData.note && (
          <div className="mt-8 p-6 bg-gray-50/50 rounded-2xl border border-dashed border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                {labels.noteLabel}
              </span>
            </div>
            <p className="text-gray-600 text-sm font-medium italic leading-relaxed">
              &quot;{formData.note}&quot;
            </p>
          </div>
        )}

        {/* Footer / Clinic Info */}
        <div className="pt-8 border-t-2 border-teal-50">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="w-full md:w-auto space-y-3">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1 bg-teal-50 rounded text-[#0e5a65]">
                  <MapPin className="w-3 h-3" />
                </div>
                <span className="text-[10px] font-black text-[#0e5a65] uppercase tracking-wider">
                  Clinic Address
                </span>
              </div>
              <p className="text-xs text-gray-500 font-medium leading-relaxed max-w-xs">
                E-66 Saradhapuri Phase-2, opposite Kailashi, Kanker Khera,
                Baypass, Meerut, UP 250001
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-[#17899B] pt-1">
                <Phone className="w-3 h-3" />
                <span>+91 91781 53131</span>
              </div>
            </div>

            <div className="w-full md:w-auto text-center md:text-right">
              <div className="h-16 flex items-end justify-center md:justify-end pb-2 opacity-20">
                {/* Digital Signature Placeholder */}
                <span className="font-cursive text-2xl text-gray-800">
                  Authorized
                </span>
              </div>
              <div className="border-t border-gray-300 w-40 mx-auto md:ml-auto" />
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-2">
                {labels.signatureLabel}
              </p>
            </div>
          </div>

          <div className="mt-8 text-center bg-teal-50/50 py-3 rounded-lg print:bg-transparent">
            <p className="text-xs font-bold text-[#0e5a65]">
              {labels.thankYou}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
