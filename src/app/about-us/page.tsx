import Aboutus from "@/components/Aboutus";
import HeroSection from "@/components/HeroSection";
import HistoryTimeline from "@/components/HistoryTimeline";
import MoreAboutUs from "@/components/MoreAboutUs";

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
      <HistoryTimeline />
      <MoreAboutUs />
    </div>
  );
}
