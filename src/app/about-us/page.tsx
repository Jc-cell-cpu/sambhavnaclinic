import Aboutus from "@/components/Aboutus";
import HeroSection from "@/components/HeroSection";

export default function AboutUs() {
  return (
    <div className="font-sans">
      <HeroSection
        title="About"
        subtitle="Tincidunt suspendisse semper integer elementum maecenas."
        backgroundImage="/images/About-us.svg"
        currentPage="About"
      />
      <Aboutus />
    </div>
  );
}
