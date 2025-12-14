import HeroSection from "@/components/HeroSection";
import DepartmentDetails from "@/components/DepartmentDetails";
import MedicalFacilities from "@/components/MedicalFacilities";
import DepartmentDoctors from "@/components/DepartmentDoctors";
import AppointmentWithTestimonials from "@/components/AppointmentWithTestimonials";

export default function Departments() {
  return (
    <div className="font-sans">
      <HeroSection
        title="Our Departments"
        subtitle="Specialized care units combining Ayurvedic wisdom with modern oncology for holistic healing."
        backgroundImage="/images/About-us.svg"
        currentPage="Departments"
      />
      <DepartmentDetails />
      <MedicalFacilities />
      <DepartmentDoctors />
      <AppointmentWithTestimonials />
    </div>
  );
}
