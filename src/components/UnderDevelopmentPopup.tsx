"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, AlertTriangle } from "lucide-react";

export default function UnderDevelopmentPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
          >
            <div
              className="p-6 text-center relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(184.51deg, #17899B 4.02%, #109C8E 96.72%)",
              }}
            >
              {/* Decorative circle */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 mx-auto bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                Under Development
              </h3>
              <p className="text-white/80 text-sm md:text-base">
                Welcome to Sambhavna Clinic
              </p>

              <button
                onClick={closePopup}
                className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 md:p-8 text-center">
              <p className="text-gray-600 mb-8 leading-relaxed">
                This website is currently under active development. Some
                features may not be fully functional, and content is being
                updated regularly.
              </p>

              <button
                onClick={closePopup}
                className="w-full text-white font-semibold py-3 px-6 rounded-xl transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#056271]/20"
                style={{
                  background:
                    "linear-gradient(184.51deg, #17899B 4.02%, #109C8E 96.72%)",
                }}
              >
                I Understand
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
