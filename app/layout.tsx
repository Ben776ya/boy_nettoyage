import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "BOY NETTOYAGE PRO | Nettoyage & Hygiène Professionnelle à Casablanca",
  description:
    "BOY NETTOYAGE PRO - La propreté au service de votre confort et de votre image. Services premium de nettoyage pour particuliers et professionnels : villas, bureaux, industrie, hôtels, fin de chantier, dératisation. Casablanca et tout le Maroc. Disponible 24/7.",
  keywords: [
    "nettoyage",
    "Maroc",
    "Casablanca",
    "nettoyage professionnel",
    "nettoyage villas",
    "nettoyage bureaux",
    "nettoyage industriel",
    "fin de chantier",
    "dératisation",
    "désinsectisation",
    "nettoyage hôtels",
    "cristallisation marbre",
    "hygiène professionnelle",
    "Boy Nettoyage Pro",
  ],
  authors: [{ name: "BOY NETTOYAGE PRO" }],
  openGraph: {
    title: "BOY NETTOYAGE PRO | Nettoyage & Hygiène Professionnelle",
    description:
      "La propreté au service de votre confort et de votre image. Services premium de nettoyage à Casablanca et tout le Maroc.",
    url: "https://boynettoyagepro.ma",
    siteName: "BOY NETTOYAGE PRO",
    locale: "fr_MA",
    type: "website",
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
    <html lang="fr">
      <body className={`${plusJakartaSans.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
