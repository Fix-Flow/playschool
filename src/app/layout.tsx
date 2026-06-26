import type { Metadata } from "next";
import { Baloo_2, Nunito } from "next/font/google";
import "./globals.css";
import Loader from "@/components/ui/Loader";
import CustomCursor from "@/components/ui/CustomCursor";
import Ambient from "@/components/ui/Ambient";
import Navbar from "@/components/layout/Navbar";
import GlobalInteractions from "@/components/layout/GlobalInteractions";
import WhatsAppWidget from "@/components/layout/WhatsAppWidget";
import Footer from "@/components/layout/Footer";
const baloo2 = Baloo_2({
  variable: "--font-baloo-2",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PlaySchl — Where Learning Meets Play 🎨",
  description:
    "PlaySchl is a joyful playschool nurturing bright futures through play-based learning. Explore our programs, activities, and admissions for your child.",
  keywords: [
    "playschool",
    "preschool",
    "early childhood education",
    "play-based learning",
    "toddler school",
    "nursery school",
    "admissions",
    "kids school",
  ],
  openGraph: {
    title: "PlaySchl — Where Learning Meets Play 🎨",
    description:
      "A joyful, safe space where little ones learn through play, creativity, and wonder.",
    type: "website",
    locale: "en_IN",
    siteName: "PlaySchl",
  },
  twitter: {
    card: "summary_large_image",
    title: "PlaySchl — Where Learning Meets Play 🎨",
    description:
      "A joyful, safe space where little ones learn through play, creativity, and wonder.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${baloo2.variable} ${nunito.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Loader />
        <CustomCursor />
        <Ambient />
        <Navbar />

        {children}

        <Footer />
        <GlobalInteractions />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
