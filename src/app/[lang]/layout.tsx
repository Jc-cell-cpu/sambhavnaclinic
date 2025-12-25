import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "../globals.css";
import TopBanner from "@/components/TopBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UnderDevelopmentPopup from "@/components/UnderDevelopmentPopup";
import { i18n, type Locale } from "../../i18n-config";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sambhavna Clinic",
  description: "Cancer Clinic Treatment",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

import { getDictionary } from "../../get-dictionary";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dictionary = await getDictionary(locale);
  return (
    <html lang={locale} suppressHydrationWarning>
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
