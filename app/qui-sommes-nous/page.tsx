import AboutHeader from "@/components/about/AboutHeader";
import ThreePillars from "@/components/about/ThreePillars";
import AboutValues from "@/components/about/AboutValues";
import AboutTimeline from "@/components/about/AboutTimeline";
import KeyFigures from "@/components/about/KeyFigures";
import AboutCTA from "@/components/about/AboutCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos — Entreprise de Nettoyage Professionnel à Casablanca",
  description:
    "Depuis 2016, BOY NETTOYAGE PRO est votre partenaire de confiance pour le nettoyage professionnel à Casablanca. Équipe qualifiée, produits certifiés, disponible 24h/24.",
  alternates: {
    canonical: "/qui-sommes-nous",
  },
  openGraph: {
    title: "À Propos — Entreprise de Nettoyage Professionnel à Casablanca | BOY NETTOYAGE PRO",
    description:
      "Depuis 2016, BOY NETTOYAGE PRO est votre partenaire de confiance pour le nettoyage professionnel à Casablanca. Équipe qualifiée, produits certifiés, disponible 24h/24.",
  },
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
