import type { Metadata } from "next";
import { Baloo_2, Nunito } from "next/font/google";
import "./globals.css";

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
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
