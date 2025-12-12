import HeroSection from "@/components/HeroSection";
import HowWeWork from "@/components/HowWeWork";
import MoreInfo from "@/components/MoreInfo";
import OurServices from "@/components/OurServices";
export default function Services() {
  return (
    <div className="font-sans">
      <HeroSection
        title="Services"
        subtitle="Tincidunt suspendisse semper integer elementum maecenas."
        backgroundImage="/images/About-us.svg"
        currentPage="Services"
      />
      <OurServices />
      <HowWeWork />
      <MoreInfo />
    </div>
  );
}
