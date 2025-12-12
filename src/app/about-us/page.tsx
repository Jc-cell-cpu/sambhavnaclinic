import Aboutus from "@/components/Aboutus";
import AppointmentWithTestimonials from "@/components/AppointmentWithTestimonials";
import HeroSection from "@/components/HeroSection";
import HistoryTimeline from "@/components/HistoryTimeline";
import MeetOurDoctors from "@/components/MeetOurDoctors";
import MoreAboutUs from "@/components/MoreAboutUs";
import MoreInfo from "@/components/MoreInfo";
// import WhyChooseUsSection from "@/components/WhyChooseUsSection";

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
      {/* <WhyChooseUsSection /> */}
      <MoreInfo />
      <AppointmentWithTestimonials />
      <MeetOurDoctors />
    </div>
  );
}
