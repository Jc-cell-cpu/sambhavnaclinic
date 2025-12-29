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
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dictionary = await getDictionary(locale);

  return (
    <>
      <Hero dictionary={dictionary.hero} />
      <AboutUs dictionary={dictionary} />
      <WhyChooseUsSection dictionary={dictionary} />
      <Departments dictionary={dictionary} />
      <MeetOurDoctors dictionary={dictionary} />
      <FAQSection dictionary={dictionary} />
      <AppointmentWithTestimonials dictionary={dictionary} lang={locale} />
      {/* <ContactUs /> */}
      <ClinicMap dictionary={dictionary} />
    </>
  );
}
