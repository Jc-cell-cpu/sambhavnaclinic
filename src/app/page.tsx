import Departments from "@/components/Departments";
import AppointmentWithTestimonials from "@/components/AppointmentWithTestimonials";
import MeetOurDoctors from "@/components/MeetOurDoctors";
import Hero from "@/components/Hero";

import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import Aboutus from "@/components/Aboutus";
// import TrustedExperts from "@/components/TrustedExperts";

export default function Home() {
  return (
    <>
      <Hero />
      <Aboutus />
      <WhyChooseUsSection />
      <Departments />
      <AppointmentWithTestimonials />
      <MeetOurDoctors />
    </>
  );
}
