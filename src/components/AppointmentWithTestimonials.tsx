"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Star, User } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "The care I received was exceptional. The doctors were attentive and the holistic approach really helped me through my recovery journey. I felt supported every step of the way.",
    name: "Sarah Jenkins",
    title: "Breast Cancer Survivor",
    image: "/images/testimonial-1.jpg", // Placeholder - will use a generic avatar if not found or fall back to icon
  },
  {
    id: 2,
    text: "Professional, compassionate, and knowledgeable. The combination of modern medicine and Ayurvedic treatments made a huge difference in my energy levels.",
    name: "Rajesh Kumar",
    title: "Patient",
    image: "/images/testimonial-2.jpg",
  },
  {
    id: 3,
    text: "I cannot thank the team enough. They treated me like family and the facility is top-notch. Highly recommended for anyone seeking comprehensive cancer care.",
    name: "Amanda Doe",
    title: "Ovarian Cancer Survivor",
    image: "/images/testimonial-3.jpg",
  },
];

export default function AppointmentWithTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-4 md:px-8 font-sans bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0">
          {/* Left Column: Appointment Form (approx 60%) */}
          <div className="w-full lg:w-[60%] lg:pr-16 lg:border-r lg:border-gray-200">
            <h2 className="text-3xl font-bold text-teal-800 mb-8 uppercase tracking-wide">
              Get an APPOINTMENT NOW
            </h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Row 1 */}
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-6 py-4 rounded-xl bg-blue-50/50 border border-[#17889B]/50 focus:outline-none focus:ring-2 focus:ring-teal-500/20 text-gray-700 placeholder-gray-400"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-6 py-4 rounded-xl bg-blue-50/50 border border-[#17889B]/50 focus:outline-none focus:ring-2 focus:ring-teal-500/20 text-gray-700 placeholder-gray-400"
                />

                {/* Row 2 */}
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-6 py-4 rounded-xl bg-blue-50/50 border border-[#17889B]/50 focus:outline-none focus:ring-2 focus:ring-teal-500/20 text-gray-700 placeholder-gray-400"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-6 py-4 rounded-xl bg-blue-50/50 border border-[#17889B]/50 focus:outline-none focus:ring-2 focus:ring-teal-500/20 text-gray-700 placeholder-gray-400"
                />

                {/* Row 3 */}
                <input
                  type="date"
                  className="w-full px-6 py-4 rounded-xl bg-blue-50/50 border border-[#17889B]/50 focus:outline-none focus:ring-2 focus:ring-teal-500/20 text-gray-700 placeholder-gray-400"
                />
                <input
                  type="time"
                  className="w-full px-6 py-4 rounded-xl bg-blue-50/50 border border-[#17889B]/50 focus:outline-none focus:ring-2 focus:ring-teal-500/20 text-gray-700 placeholder-gray-400"
                />
              </div>

              {/* Textarea */}
              <textarea
                rows={5}
                placeholder="Brief your problem here..."
                className="w-full px-6 py-4 rounded-xl bg-blue-50/50 border border-[#17889B]/50 focus:outline-none focus:ring-2 focus:ring-teal-500/20 text-gray-700 placeholder-gray-400 resize-none"
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full md:w-auto bg-teal-800 hover:bg-teal-700 text-white font-bold py-4 px-8 rounded-full flex items-center justify-center gap-3 transition-colors shadow-lg mt-4"
              >
                {/* <Calendar className="w-5 h-5" /> */}
                <span>Submit</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Right Column: Testimonial Slider (approx 40%) */}
          <div className="w-full lg:w-[40%] flex flex-col justify-center lg:pl-16">
            <div className="mb-8">
              <h4 className="text-[#00256E] font-bold uppercase tracking-widest text-sm mb-2">
                Our Testimonial
              </h4>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                Feedback from our patients
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

            {/* Dots custom navigation (Optional visual cue) */}
            {/* <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    currentTestimonial === idx
                      ? "bg-teal-600 w-6"
                      : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
