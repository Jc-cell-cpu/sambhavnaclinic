import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Heart,
  Wind,
  Droplet,
  Activity,
  ShieldAlert,
  Zap,
  Flame,
  Dna,
  Atom,
} from "lucide-react";

interface Step3TreatmentProps {
  selectedTreatment: string | null;
  setTreatment: (value: string) => void;
  labels: {
    title: string;
    durationLabel: string;
    priceLabel: string;
    treatments: { [key: string]: string };
  };
  error?: string;
}

const treatments = [
  { id: "breast-cancer", duration: "30 Min", price: "Rs500", icon: Heart },
  { id: "skin-cancer", duration: "30 Min", price: "Rs500", icon: ShieldAlert },
  { id: "lung-cancer", duration: "30 Min", price: "Rs500", icon: Wind },
  { id: "prostate-cancer", duration: "30 Min", price: "Rs500", icon: Activity },
  { id: "colon-cancer", duration: "30 Min", price: "Rs500", icon: Zap },
  { id: "leukemia", duration: "30 Min", price: "Rs500", icon: Droplet },
  { id: "lymphoma", duration: "30 Min", price: "Rs500", icon: Dna },
  { id: "thyroid-cancer", duration: "30 Min", price: "Rs500", icon: Flame },
  { id: "stomach-cancer", duration: "30 Min", price: "Rs500", icon: Atom },
];

export default function Step3Treatment({
  selectedTreatment,
  setTreatment,
  labels,
  error,
}: Step3TreatmentProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div className="space-y-8">
      <div className="text-left border-l-4 border-[#17899B] pl-4 py-1">
        <h2 className="text-2xl font-black text-[#0e5a65] tracking-tight">
          {labels.title}
        </h2>
        <p className="text-gray-500 text-sm font-medium mt-1">
          Select the specialized treatment center you require
        </p>
        {error && (
          <p className="text-red-500 text-xs font-black uppercase tracking-wider mt-2 animate-pulse">
            ⚠️ {error}
          </p>
        )}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {treatments.map((treatment) => {
          const isSelected = selectedTreatment === treatment.id;
          const Icon = treatment.icon;
          return (
            <motion.div
              key={treatment.id}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setTreatment(treatment.id)}
              className={`group relative cursor-pointer overflow-hidden rounded-3xl border-2 transition-all duration-300 bg-white p-5
                ${
                  isSelected
                    ? "border-[#17899B] shadow-xl shadow-teal-500/10 bg-linear-to-b from-[#f0f9fa] to-white"
                    : "border-gray-100 hover:border-teal-200 shadow-sm"
                }`}
            >
              <AnimatePresence>
                {isSelected && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="absolute top-4 right-4 z-10 p-1.5 bg-[#17899B] rounded-full text-white shadow-lg"
                  >
                    <Check className="w-4 h-4" strokeWidth={3} />
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex items-start gap-5">
                {/* Icon Container with Glow */}
                <div className="relative shrink-0">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300
                    ${
                      isSelected
                        ? "bg-[#17899B] text-white shadow-lg shadow-teal-500/30"
                        : "bg-teal-50 text-[#17899B] group-hover:bg-[#17899B] group-hover:text-white"
                    }`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  {isSelected && (
                    <div className="absolute inset-0 bg-[#17899B] blur-xl opacity-20" />
                  )}
                </div>

                <div className="space-y-2">
                  <h3
                    className={`text-lg font-extrabold transition-colors duration-300
                    ${isSelected ? "text-[#0e5a65]" : "text-gray-800"}`}
                  >
                    {labels.treatments[treatment.id]}
                  </h3>

                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 font-bold uppercase tracking-wider">
                      <span className="opacity-60">{labels.durationLabel}</span>
                      <span className={isSelected ? "text-[#17899B]" : ""}>
                        {treatment.duration}
                      </span>
                    </div>
                    <div className="text-sm font-black text-[#0e5a65]">
                      {labels.priceLabel}{" "}
                      <span className="text-lg">{treatment.price}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Element */}
              <div
                className={`absolute -bottom-6 -right-6 w-16 h-16 rounded-full transition-all duration-500
                ${
                  isSelected
                    ? "bg-[#17899B] opacity-5 scale-150"
                    : "bg-gray-100 opacity-0"
                }`}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
