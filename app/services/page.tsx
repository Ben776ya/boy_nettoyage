import ServicesPageContent from "@/components/ServicesPageContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Services de Nettoyage Professionnel à Casablanca",
  description:
    "Découvrez nos 25 services de nettoyage et d'hygiène professionnelle à Casablanca et partout au Maroc. Villas, bureaux, hôtels, industrie, dératisation et plus.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Nos Services de Nettoyage Professionnel à Casablanca | BOY NETTOYAGE PRO",
    description:
      "Découvrez nos 25 services de nettoyage et d'hygiène professionnelle à Casablanca et partout au Maroc. Villas, bureaux, hôtels, industrie, dératisation et plus.",
  },
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
