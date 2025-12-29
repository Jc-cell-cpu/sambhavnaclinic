import ContactUs from "@/components/ContactUs";
import ClinicMap from "@/components/ClinicMap";
import FAQSection from "@/components/FAQSection";
import PatientJourney from "@/components/PatientJourney";
import HeroSection from "@/components/HeroSection";
import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";
// import HowWeWork from "@/components/HowWeWork";
// import MoreInfo from "@/components/MoreInfo";
// import OurServices from "@/components/OurServices";

export default async function Contact({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <div className="font-sans">
      <HeroSection
        title={dictionary.contactHero.title}
        subtitle={dictionary.contactHero.subtitle}
        backgroundImage="/images/About-us.svg"
        currentPage={dictionary.contactHero.breadcrumb}
      />
      <ContactUs dictionary={dictionary} lang={lang} />
      <PatientJourney dictionary={dictionary} />
      <ClinicMap dictionary={dictionary} />
      <FAQSection dictionary={dictionary} />
    </div>
  );
}
