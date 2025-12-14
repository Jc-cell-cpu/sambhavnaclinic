import Departments from "@/components/Departments";
import AppointmentWithTestimonials from "@/components/AppointmentWithTestimonials";
import MeetOurDoctors from "@/components/MeetOurDoctors";
import Hero from "@/components/Hero";

import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
// import TrustedExperts from "@/components/TrustedExperts";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <WhyChooseUsSection />
      <Departments />
      <AppointmentWithTestimonials />
      <MeetOurDoctors />
      <ContactUs />
    </>
  );
}
