
import Departments from "@/components/Departments";
import AppointmentWithTestimonials from "@/components/AppointmentWithTestimonials";
import MeetOurDoctors from "@/components/MeetOurDoctors";
import Hero from "@/components/Hero";

import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import AboutUs from "@/components/AboutUs";
// import ContactUs from "@/components/ContactUs";
import FAQSection from "@/components/FAQSection";
import ClinicMap from "@/components/ClinicMap";
// import TrustedExperts from "@/components/TrustedExperts";
import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Hero dictionary={dictionary.hero} />
      <AboutUs />
      <WhyChooseUsSection />
      <Departments />
      <MeetOurDoctors />
      <FAQSection />
      <AppointmentWithTestimonials />
      {/* <ContactUs /> */}
      <ClinicMap />
    </>
  );
}
