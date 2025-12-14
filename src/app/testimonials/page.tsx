import HeroSection from "@/components/HeroSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import VideoTestimonials from "@/components/VideoTestimonials";
import AppointmentWithTestimonials from "@/components/AppointmentWithTestimonials";

export default function Testimonials() {
  return (
    <div className="font-sans">
      <HeroSection
        title="Patient Testimonials"
        subtitle="Read and watch the inspiring stories of recovery and hope from our patients."
        backgroundImage="/images/About-us.svg"
        currentPage="Testimonials"
      />
      <TestimonialsCarousel />
      <VideoTestimonials />
      {/* Reusing this component as a CTA section, though it also contains some testimonials. 
          Ideally, we might want a simpler 'Book Appointment' section here, but this works for now 
          as a robust conversion element. */}
      <AppointmentWithTestimonials />
    </div>
  );
}
