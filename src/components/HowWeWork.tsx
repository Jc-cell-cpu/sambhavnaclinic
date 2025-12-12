import React from "react";

const steps = [
  {
    number: "01",
    title: "Schedule Online",
    description:
      "Eget leo facilisi at egestas massa in libero pretium. Dictum tortor nibh enim vivamus arcu volutpat. Integer mi at nunc amet.",
  },
  {
    number: "02",
    title: "Join Secure Video Call",
    description:
      "Eget leo facilisi at egestas massa in libero pretium. Dictum tortor nibh enim vivamus arcu volutpat. Integer mi at nunc amet.",
  },
  {
    number: "03",
    title: "Join Secure Video Call",
    description:
      "Eget leo facilisi at egestas massa in libero pretium. Dictum tortor nibh enim vivamus arcu volutpat. Integer mi at nunc amet.",
  },
  {
    number: "04",
    title: "Join Secure Video Call",
    description:
      "Eget leo facilisi at egestas massa in libero pretium. Dictum tortor nibh enim vivamus arcu volutpat. Integer mi at nunc amet.",
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-[#EEFCFE] py-16 px-4 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Headings */}
        <div className="text-center mb-12">
          <h3 className="uppercase text-[#00256E] font-bold tracking-wider mb-4 text-sm md:text-base opacity-80">
            How We Work
          </h3>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#333333] max-w-4xl mx-auto leading-tight">
            Nec et tristique aenean leo est. Orci in eget amet ut amet sed
            rutrum fringilla. Rhoncus dolor eget vitae feugiat.
          </h2>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-md shadow-lg p-6 md:p-8 flex items-start gap-6 hover:shadow-xl hover:shadow-emerald-700 transition-shadow duration-300"
            >
              {/* Number Badge */}
              <div
                className="shrink-0 w-14 h-14 rounded-lg flex items-center justify-center text-white text-xl font-bold"
                style={{
                  background:
                    "linear-gradient(184.51deg, #17899B 4.02%, #109C8E 96.72%)",
                }}
              >
                {step.number}
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-2 pt-1">
                <h4 className="text-lg md:text-xl font-bold text-gray-900">
                  {step.title}
                </h4>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
