import ServicesPageContent from "@/components/ServicesPageContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tous Nos Services de Nettoyage à Casablanca — 25 Prestations",
  description:
    "Découvrez les 25 services de nettoyage et hygiène de BOY NETTOYAGE PRO à Casablanca : villas, bureaux, industrie, hôtels, dératisation, cristallisation marbre et plus. Devis gratuit.",
  alternates: {
    canonical: "https://www.boynettoyage.ma/services",
  },
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
