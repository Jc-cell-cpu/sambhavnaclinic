import ContactUs from "@/components/ContactUs";
import ClinicMap from "@/components/ClinicMap";
import FAQSection from "@/components/FAQSection";
import PatientJourney from "@/components/PatientJourney";
import HeroSection from "@/components/HeroSection";
// import HowWeWork from "@/components/HowWeWork";
// import MoreInfo from "@/components/MoreInfo";
// import OurServices from "@/components/OurServices";
export default function Contact() {
  return (
    <div className="font-sans">
      <HeroSection
        title="Contact Us"
        subtitle="This Site is under Devlopement Please wait until we complete it"
        backgroundImage="/images/About-us.svg"
        currentPage="Contact Us"
      />
      <ContactUs />
      <PatientJourney />
      <ClinicMap />
      <FAQSection />
    </div>
  );
}
