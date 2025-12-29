import HeroSection from "@/components/HeroSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import VideoTestimonials from "@/components/VideoTestimonials";
import AppointmentWithTestimonials from "@/components/AppointmentWithTestimonials";
import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";

export default async function Testimonials({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <div className="font-sans">
      <HeroSection
        title={dictionary.pages.testimonials.title}
        subtitle={dictionary.pages.testimonials.subtitle}
        backgroundImage="/images/About-us.svg"
        currentPage={dictionary.pages.testimonials.breadcrumb}
      />
      <TestimonialsCarousel dictionary={dictionary} />
      <VideoTestimonials dictionary={dictionary} />
      {/* Reusing this component as a CTA section, though it also contains some testimonials. 
          Ideally, we might want a simpler 'Book Appointment' section here, but this works for now 
          as a robust conversion element. */}
      <AppointmentWithTestimonials dictionary={dictionary} lang={lang} />
    </div>
  );
}
