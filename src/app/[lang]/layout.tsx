import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "../globals.css";
import TopBanner from "@/components/TopBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UnderDevelopmentPopup from "@/components/UnderDevelopmentPopup";
import { Locale } from "../../i18n-config";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sambhavna Clinic",
  description: "Cancer Clinic Treatment",
};

import { getDictionary } from "../../get-dictionary";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}>) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  return (
    <html lang={lang} suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${notoSans.variable} antialiased flex flex-col min-h-screen font-sans overflow-x-hidden`}
      >
        <TopBanner />
        <Header dictionary={dictionary.navigation} />
        <main className="grow">{children}</main>
        <Footer dictionary={dictionary.footer} />
        {/* <UnderDevelopmentPopup /> */}
      </body>
    </html>
  );
}
