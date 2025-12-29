import HeroSection from "@/components/HeroSection";
import DepartmentDetails from "@/components/DepartmentDetails";
import MedicalFacilities from "@/components/MedicalFacilities";
import DepartmentDoctors from "@/components/DepartmentDoctors";
import AppointmentWithTestimonials from "@/components/AppointmentWithTestimonials";
import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";

export default async function Departments({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const { title, subtitle, breadcrumb } = dictionary.pages.departments;

  return (
    <div className="font-sans">
      <HeroSection
        title={title}
        subtitle={subtitle}
        backgroundImage="/images/About-us.svg"
        currentPage={breadcrumb}
      />
      <DepartmentDetails dictionary={dictionary} />
      <MedicalFacilities dictionary={dictionary} />
      <DepartmentDoctors dictionary={dictionary} />
      <AppointmentWithTestimonials dictionary={dictionary} lang={lang} />
    </div>
  );
}
