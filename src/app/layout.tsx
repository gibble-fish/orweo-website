import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import { SplashLoader } from "@/components/SplashLoader";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "ORWEO – Visuals that make an impact",
  description:
    "Professionelle Drohnenaufnahmen für Immobilien, Architektur, Automotive, 360°-Panorama und Luftaufnahmen. Hochwertige visuelle Inhalte aus einzigartigen Perspektiven.",
  keywords: [
    "Drohnenfotografie",
    "Drohnenaufnahmen",
    "Luftaufnahmen",
    "Immobilienfotografie",
    "Architekturaufnahmen",
    "Automotive Drohnenaufnahmen",
    "360 Grad Panorama",
    "professionelle Luftbilder",
  ],
  authors: [{ name: "ORWEO" }],
  openGraph: {
    title: "ORWEO – Visuals that make an impact",
    description:
      "Professionelle Drohnenaufnahmen für Immobilien, Architektur, Automotive, 360°-Panorama und Luftaufnahmen.",
    type: "website",
    locale: "de_DE",
    siteName: "ORWEO",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${montserrat.variable} antialiased`}>
      <body className="min-h-screen bg-near-black text-off-white font-light">
        <SplashLoader />
        <Navigation />
        <main className="w-full">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
