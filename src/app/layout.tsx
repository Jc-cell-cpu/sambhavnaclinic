import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import TopBanner from "@/components/TopBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UnderDevelopmentPopup from "@/components/UnderDevelopmentPopup";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sambhavna Clinic",
  description: "Cancer Clinic Treatment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${notoSans.variable} antialiased flex flex-col min-h-screen font-sans overflow-x-hidden`}
      >
        <TopBanner />
        <Header />
        <main className="grow">{children}</main>
        <Footer />
        {/* <UnderDevelopmentPopup /> */}
      </body>
    </html>
  );
}
