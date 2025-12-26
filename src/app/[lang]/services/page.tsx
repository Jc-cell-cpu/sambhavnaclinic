import AppointmentWithTestimonials from "@/components/AppointmentWithTestimonials";
import HeroSection from "@/components/HeroSection";
import HowWeWork from "@/components/HowWeWork";
import MoreInfo from "@/components/MoreInfo";
import OurServices from "@/components/OurServices";
import TreatmentsSection from "@/components/TreatmentsSection";
import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";

export default async function Services({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const { title, subtitle, breadcrumb } = dictionary.pages.services;

  return (
    <div className="font-sans">
      <HeroSection
        title={title}
        subtitle={subtitle}
        backgroundImage="/images/About-us.svg"
        currentPage={breadcrumb}
      />
      <OurServices dictionary={dictionary} />
      <HowWeWork dictionary={dictionary} />
      <TreatmentsSection dictionary={dictionary} />
      <MoreInfo dictionary={dictionary} />
      <AppointmentWithTestimonials dictionary={dictionary} />
    </div>
  );
}
