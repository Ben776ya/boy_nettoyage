import ServicesPageContent from "@/components/ServicesPageContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services Nettoyage Casablanca & Maroc — BOY NETTOYAGE PRO | 25 Prestations",
  description:
    "BOY NETTOYAGE PRO propose 25 services de nettoyage et d'hygiène professionnelle à Casablanca et partout au Maroc : villas, bureaux, hôtels, industrie, dératisation, cristallisation marbre. Devis gratuit.",
  keywords: [
    "services nettoyage casablanca",
    "société de nettoyage casablanca",
    "nettoyage professionnel maroc",
    "nettoyage bureaux casablanca",
    "nettoyage villas casablanca",
    "dératisation casablanca",
    "cristallisation marbre casablanca",
    "nettoyage industriel maroc",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services de Nettoyage Professionnel Casablanca & Maroc | BOY NETTOYAGE PRO",
    description:
      "25 services de nettoyage professionnels à Casablanca et au Maroc. Villas, bureaux, hôtels, industrie, dératisation. Devis gratuit sous 24h.",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "BOY NETTOYAGE PRO — Services Nettoyage Casablanca" }],
  },
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
