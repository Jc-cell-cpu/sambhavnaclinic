import BookingWizard from "@/components/booking/BookingWizard";
import NeedHelp from "@/components/NeedHelp";

export default function AppointmentPage() {
  return (
    <main className="min-h-screen bg-cyan-50/30">
      <BookingWizard />
      <NeedHelp />
    </main>
  );
}
