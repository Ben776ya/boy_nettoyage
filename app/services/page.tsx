import ServicesPageContent from "@/components/ServicesPageContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Services | BOY NETTOYAGE PRO - Nettoyage Professionnel à Casablanca",
  description:
    "Découvrez tous nos services de nettoyage professionnel : villas, bureaux, hôtels, industrie, dératisation, désinsectisation et plus. BOY NETTOYAGE PRO à Casablanca.",
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
