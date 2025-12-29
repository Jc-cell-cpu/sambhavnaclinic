/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  X,
  Printer,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import BookingReceipt from "./BookingReceipt";
import { usePathname } from "next/navigation";
import { i18n } from "@/i18n-config";

interface BookingSuccessProps {
  formData: any;
  labels: {
    title: string;
    message: string;
    backHome: string;
    viewDetails: string;
    receipt?: any;
  };
}

export default function BookingSuccess({
  formData,
  labels,
}: BookingSuccessProps) {
  const [showReceipt, setShowReceipt] = useState(false);
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || i18n.defaultLocale;

  // Disable scrolling when receipt is shown
  useEffect(() => {
    if (showReceipt) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showReceipt]);

  const dateStr = new Date(formData.date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <div
        className={`flex flex-col items-center justify-center py-12 px-4 text-center transition-opacity duration-300 ${
          showReceipt ? "opacity-0" : "opacity-100"
        }`}
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", damping: 12, stiffness: 200 }}
          className="w-24 h-24 bg-teal-50 rounded-full flex items-center justify-center mb-8"
        >
          <CheckCircle2 className="w-16 h-16 text-[#17899B]" />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-4 mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {labels.title}
          </h2>
          <p className="text-lg text-gray-500 max-w-md mx-auto">
            {labels.message}
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="w-full max-w-md bg-white rounded-3xl border border-teal-100 p-6 shadow-xl shadow-teal-900/5 mb-10"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-left">
              <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center text-[#17899B]">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                  Date
                </p>
                <p className="font-semibold text-gray-700">{dateStr}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-left">
              <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center text-[#17899B]">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                  Time Slot
                </p>
                <p className="font-semibold text-gray-700">
                  {formData.timeSlot}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-left">
              <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center text-[#17899B]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                  Location
                </p>
                <p className="font-semibold text-gray-700">
                  Sambhavna Clinic, Holistic Care
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link href={`/${currentLocale}`}>
            <Button
              variant="outline"
              className="border-gray-200 text-gray-600 hover:text-[#0e5a65] hover:bg-teal-50 px-8 py-6 rounded-2xl font-bold"
            >
              {labels.backHome}
            </Button>
          </Link>
          <Button
            className="bg-linear-to-r from-[#17899B] to-[#109C8E] text-white px-8 py-6 rounded-2xl font-bold shadow-lg shadow-teal-500/20 group"
            onClick={() => setShowReceipt(true)}
          >
            <span>{labels.viewDetails}</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>

      <AnimatePresence>
        {showReceipt && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md flex items-center justify-center p-4 print:p-0 print:bg-white print:block"
            onClick={() => setShowReceipt(false)}
          >
            {/* Close Button - Responsive Position */}
            <div className="absolute top-4 right-4 z-[110] print:hidden">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowReceipt(false);
                }}
                className="w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="Close Receipt"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl max-h-[90vh] overflow-y-auto no-scrollbar rounded-3xl bg-white relative shadow-2xl print:max-w-none print:max-h-none print:shadow-none print:rounded-none print:overflow-visible"
            >
              {/* Receipt Toolbar */}
              <div className="sticky top-0 z-20 flex justify-end gap-3 p-4 bg-white/80 backdrop-blur-sm border-b border-gray-100 print:hidden">
                <Button
                  onClick={handlePrint}
                  className="bg-[#0e5a65] text-white hover:bg-[#0b4d56] shadow-lg shadow-teal-900/10 font-bold rounded-xl px-6 py-2 transition-all active:scale-95"
                >
                  <Printer className="w-4 h-4 mr-2" />
                  Print Receipt
                </Button>
              </div>

              {/* Receipt Content */}
              <div className="p-2 md:p-6 print:p-0">
                <BookingReceipt
                  formData={formData}
                  labels={
                    labels.receipt || {
                      receiptHeader: "Appointment Receipt",
                      receiptSubheader:
                        "Sambhavna Clinic - Holistic Cancer Care",
                      patientDetails: "Patient Details",
                      appointmentDetails: "Appointment Details",
                      clinicDetails: "Clinic Location",
                      verifiedLabel: "Verified",
                      treatmentLabel: "Treatment Center",
                      dateLabel: "Scheduled Date",
                      timeLabel: "Time Slot",
                      noteLabel: "Patient Remarks",
                      signatureLabel: "Authorized Signature",
                      thankYou:
                        "Wishing you a path to holistic healing and recovery.",
                    }
                  }
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .print\:block,
          .print\:block * {
            visibility: visible;
          }
          .print\:block {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
          .print\:hidden {
            display: none !important;
          }
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
}
