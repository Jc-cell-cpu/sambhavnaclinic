import AboutUsSection from "@/components/AboutUs";
import AppointmentWithTestimonials from "@/components/AppointmentWithTestimonials";
import HeroSection from "@/components/HeroSection";
import HistoryTimeline from "@/components/HistoryTimeline";
import MeetOurDoctors from "@/components/MeetOurDoctors";
import MoreAboutUs from "@/components/MoreAboutUs";
import MoreInfo from "@/components/MoreInfo";
import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";
// import WhyChooseUsSection from "@/components/WhyChooseUsSection";

export default async function AboutUs({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const { title, subtitle, breadcrumb } = dictionary.pages.aboutUs;

  return (
    <div className="font-sans">
      <HeroSection
        title={title}
        subtitle={subtitle}
        backgroundImage="/images/About-us.svg"
        currentPage={breadcrumb}
      />
      <AboutUsSection dictionary={dictionary} />
      <HistoryTimeline dictionary={dictionary} />
      <MoreAboutUs dictionary={dictionary} />
      {/* <WhyChooseUsSection /> */}
      <MoreInfo dictionary={dictionary} />
      <AppointmentWithTestimonials dictionary={dictionary} lang={lang} />
      <MeetOurDoctors dictionary={dictionary} />
    </div>
  );
}
