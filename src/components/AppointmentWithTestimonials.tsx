/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect, useActionState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Star, User, Loader2 } from "lucide-react";
import { submitQuickAppointment } from "@/app/actions/appointment";

const initialState = {
  success: false,
  message: "",
  errors: {},
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function AppointmentWithTestimonials({
  dictionary,
}: {
  dictionary: any;
}) {
  const {
    appointmentHeading,
    form,
    testimonialLabel,
    testimonialHeading,
    testimonials,
  } = dictionary.testimonialSection;
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [state, formAction, isPending] = useActionState(
    submitQuickAppointment,
    initialState
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section
      id="testimonials"
      className="py-20 px-4 md:px-8 font-sans bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0">
          {/* Left Column: Appointment Form (approx 60%) */}
          <div className="w-full lg:w-[60%] lg:pr-16 lg:border-r lg:border-gray-200">
            <h2 className="text-3xl font-bold text-teal-800 mb-8 uppercase tracking-wide">
              {appointmentHeading}
            </h2>

            {state.success ? (
              <div className="bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-xl">
                <h3 className="text-lg font-bold mb-2">Request Sent!</h3>
                <p>{state.message}</p>
              </div>
            ) : (
              <form action={formAction} className="space-y-6">
                {state.message && !state.success && (
                  <div className="p-3 bg-red-50 text-red-600 rounded-md text-sm">
                    {state.message}
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Row 1 */}
                  <div className="space-y-2">
                    <input
                      type="text"
                      name="firstName"
                      placeholder={form.firstName}
                      className="w-full px-6 py-4 rounded-xl bg-blue-50/50 border border-[#17889B]/50 focus:outline-none focus:ring-2 focus:ring-teal-500/20 text-gray-700 placeholder-gray-400"
                    />
                    {state.errors?.firstName && (
                      <p className="text-red-500 text-sm ml-1">
                        {state.errors.firstName[0]}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <input
                      type="text"
                      name="lastName"
                      placeholder={form.lastName}
                      className="w-full px-6 py-4 rounded-xl bg-blue-50/50 border border-[#17889B]/50 focus:outline-none focus:ring-2 focus:ring-teal-500/20 text-gray-700 placeholder-gray-400"
                    />
                    {state.errors?.lastName && (
                      <p className="text-red-500 text-sm ml-1">
                        {state.errors.lastName[0]}
                      </p>
                    )}
                  </div>

                  {/* Row 2 */}
                  <div className="space-y-2">
                    <input
                      type="email"
                      name="email"
                      placeholder={form.email}
                      className="w-full px-6 py-4 rounded-xl bg-blue-50/50 border border-[#17889B]/50 focus:outline-none focus:ring-2 focus:ring-teal-500/20 text-gray-700 placeholder-gray-400"
                    />
                    {state.errors?.email && (
                      <p className="text-red-500 text-sm ml-1">
                        {state.errors.email[0]}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <input
                      type="tel"
                      name="phone"
                      placeholder={form.phone}
                      className="w-full px-6 py-4 rounded-xl bg-blue-50/50 border border-[#17889B]/50 focus:outline-none focus:ring-2 focus:ring-teal-500/20 text-gray-700 placeholder-gray-400"
                    />
                    {state.errors?.phone && (
                      <p className="text-red-500 text-sm ml-1">
                        {state.errors.phone[0]}
                      </p>
                    )}
                  </div>

                  {/* Row 3 */}
                  <div className="space-y-2">
                    <input
                      type="date"
                      name="date"
                      className="w-full px-6 py-4 rounded-xl bg-blue-50/50 border border-[#17889B]/50 focus:outline-none focus:ring-2 focus:ring-teal-500/20 text-gray-700 placeholder-gray-400"
                    />
                    {state.errors?.date && (
                      <p className="text-red-500 text-sm ml-1">
                        {state.errors.date[0]}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <input
                      type="time"
                      name="time"
                      className="w-full px-6 py-4 rounded-xl bg-blue-50/50 border border-[#17889B]/50 focus:outline-none focus:ring-2 focus:ring-teal-500/20 text-gray-700 placeholder-gray-400"
                    />
                    {state.errors?.time && (
                      <p className="text-red-500 text-sm ml-1">
                        {state.errors.time[0]}
                      </p>
                    )}
                  </div>
                </div>

                {/* Textarea */}
                <div className="space-y-2">
                  <textarea
                    rows={5}
                    name="message"
                    placeholder={form.messagePlaceholder}
                    className="w-full px-6 py-4 rounded-xl bg-blue-50/50 border border-[#17889B]/50 focus:outline-none focus:ring-2 focus:ring-teal-500/20 text-gray-700 placeholder-gray-400 resize-none"
                  ></textarea>
                  {state.errors?.message && (
                    <p className="text-red-500 text-sm ml-1">
                      {state.errors.message[0]}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full md:w-auto bg-teal-800 hover:bg-teal-700 text-white font-bold py-4 px-8 rounded-full flex items-center justify-center gap-3 transition-colors shadow-lg mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isPending ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <span>{form.submitButton}</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Testimonial Slider (approx 40%) */}
          <div className="w-full lg:w-[40%] flex flex-col justify-center lg:pl-16">
            <div className="mb-8">
              <h4 className="text-[#00256E] font-bold uppercase tracking-widest text-sm mb-2">
                {testimonialLabel}
              </h4>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                {testimonialHeading}
              </h2>
            </div>

            <hr className="border-gray-200 mb-8" />

            <div className="relative h-80 w-full">
              {" "}
              {/* Height container for slider */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex flex-col justify-start gap-9"
                >
                  <div className="space-y-6">
                    {/* Stars */}
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-5 h-5 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-gray-500 text-lg leading-relaxed italic">
                      {testimonials[currentTestimonial].text}
                    </p>
                  </div>

                  {/* User Profile */}
                  <div className="flex items-center gap-4">
                    {/* Placeholder for image if authentic image not available */}
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 border-2 border-white shadow-md shrink-0 flex items-center justify-center">
                      {/* In a real app we'd use Next/Image with valid src, here utilizing a fallback or the User icon if image fails/is mock */}
                      <User className="w-8 h-8 text-gray-400" />
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-teal-600 font-medium">
                        {testimonials[currentTestimonial].title}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
