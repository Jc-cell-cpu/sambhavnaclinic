"use client";
import { Play } from "lucide-react";

export default function VideoTestimonials() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h3 className="text-[#00256E] font-bold uppercase tracking-wider mb-2 text-sm md:text-base">
            WATCH THEIR JOURNEY
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold text-[#333333]">
            Patient Video Testimonials
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, idx) => (
            <div
              key={idx}
              className="group relative aspect-video rounded-3xl overflow-hidden bg-gray-100 shadow-lg cursor-pointer"
            >
              {/* Thumbnail Placeholder */}
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 font-medium">
                  Video Thumbnail
                </span>
              </div>
              {/* Real thumbnail implementation would be:
                 <Image src="/path/to/thumb" fill className="object-cover" />
                 */}

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>

              {/* Play Button */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform duration-300">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#17899B] shadow-lg">
                  <Play size={24} fill="currentColor" className="ml-1" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 text-white bg-linear-to-t from-black/80 to-transparent">
                <h4 className="font-bold text-lg">
                  Patient Success Story {idx + 1}
                </h4>
                <p className="text-sm opacity-90">
                  Recovery from Stage 2 Cancer
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
