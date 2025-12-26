import BookingWizard from "@/components/booking/BookingWizard";
import NeedHelp from "@/components/NeedHelp";
import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";

export default async function AppointmentPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <main className="min-h-screen bg-cyan-50/30">
      <BookingWizard dictionary={dictionary} />
      <NeedHelp dictionary={dictionary} />
    </main>
  );
}
