import AboutHeader from "@/components/about/AboutHeader";
import ThreePillars from "@/components/about/ThreePillars";
import AboutValues from "@/components/about/AboutValues";
import AboutTimeline from "@/components/about/AboutTimeline";
import KeyFigures from "@/components/about/KeyFigures";
import AboutCTA from "@/components/about/AboutCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qui sommes nous ? | BOY NETTOYAGE PRO - Expert Nettoyage à Casablanca",
  description:
    "Découvrez BOY NETTOYAGE PRO, votre partenaire de confiance pour tous vos besoins en nettoyage et hygiène à Casablanca et au Maroc. Équipe qualifiée, produits premium, disponibilité 24/7.",
};

export default function QuiSommesNousPage() {
  return (
    <>
      <AboutHeader />
      <ThreePillars />
      <AboutValues />
      <AboutTimeline />
      <KeyFigures />
      <AboutCTA />
    </>
  );
}
