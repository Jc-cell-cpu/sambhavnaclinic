"use client";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface Step3TreatmentProps {
  selectedTreatment: string | null;
  setTreatment: (value: string) => void;
  labels: {
    title: string;
    durationLabel: string;
    priceLabel: string;
    treatments: { [key: string]: string };
  };
}

const treatments = [
  {
    id: "breast-cancer",
    duration: "30 Min",
    price: "Rs500",
  },
  {
    id: "skin-cancer",
    duration: "30 Min",
    price: "Rs500",
  },
  {
    id: "lung-cancer",
    duration: "30 Min",
    price: "Rs500",
  },
  {
    id: "prostate-cancer",
    duration: "30 Min",
    price: "Rs500",
  },
  {
    id: "colon-cancer",
    duration: "30 Min",
    price: "Rs500",
  },
  { id: "leukemia", duration: "30 Min", price: "Rs500" },
  { id: "lymphoma", duration: "30 Min", price: "Rs500" },
  {
    id: "thyroid-cancer",
    duration: "30 Min",
    price: "Rs500",
  },
  {
    id: "stomach-cancer",
    duration: "30 Min",
    price: "Rs500",
  },
];

export default function Step3Treatment({
  selectedTreatment,
  setTreatment,
  labels,
}: Step3TreatmentProps) {
  return (
    <div className="space-y-6">
      <div className="text-left">
        <h2 className="text-xl font-bold text-[#0e5a65]">{labels.title}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {treatments.map((treatment) => {
          const isSelected = selectedTreatment === treatment.id;
          return (
            <div
              key={treatment.id}
              onClick={() => setTreatment(treatment.id)}
              className={`relative cursor-pointer flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 bg-white shadow-sm hover:shadow-md ${
                isSelected
                  ? "border-2 border-[#0e5a65] ring-1 ring-[#0e5a65]/20"
                  : "border-gray-100 hover:border-teal-200"
              }`}
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-lg bg-linear-to-r from-[#17899B] to-[#109C8E] flex items-center justify-center shrink-0">
                {/* Ribbon Icon */}
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.705 3.328a2 2 0 00-1.41 0c-1.85.67-6.295 2.508-6.295 7.672 0 4.316 2.478 8.167 6.138 9.94a2 2 0 001.724 0c3.66-1.773 6.138-5.624 6.138-9.94 0-5.164-4.445-7.002-6.295-7.672zm-2.12 7.086c0-1.657 1.343-3 3-3s3 1.343 3 3a2.98 2.98 0 01-.194 1.054l-1.685 4.492a.75.75 0 01-1.408-.528l1.458-3.886a1.49 1.49 0 00-.171-1.132 1.5 1.5 0 00-2.586 1.132v.25a.75.75 0 01-1.5 0v-.25c0-.368.081-.715.226-1.028a3.001 3.001 0 01-.14-.104z" />
                  {/* Simplified Ribbon Path */}
                  <path
                    d="M11.962 1.834a3.5 3.5 0 00-2.43.085c-2.31 1.023-5.532 3.193-5.532 8.081 0 5.483 3.428 9.873 7.558 11.832a.75.75 0 00.916-.145c.012-.012.022-.025.031-.039 3.99-2.025 7.495-6.386 7.495-11.648 0-4.888-3.222-7.058-5.532-8.081a3.5 3.5 0 00-2.506 0zM12 4.25a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5zM12.92 14.187l1.768-4.714a.75.75 0 10-1.408-.528l-1.398 3.726a3.736 3.736 0 01-1.053-.42.75.75 0 10-.75 1.3 5.253 5.253 0 003.58.556 5.3 5.3 0 00-.739.08z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              {/* Details */}
              <div className="flex flex-col">
                <h3 className="font-bold text-gray-900 leading-tight">
                  {labels.treatments[treatment.id]}
                </h3>
                <div className="flex items-center gap-3 text-sm mt-1">
                  <span className="text-gray-500">
                    {labels.durationLabel}{" "}
                    <span className="font-medium">{treatment.duration}</span>
                  </span>
                  <span className="font-semibold text-[#0e5a65]">
                    {labels.priceLabel} {treatment.price}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
