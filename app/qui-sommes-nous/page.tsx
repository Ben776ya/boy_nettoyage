import AboutHeader from "@/components/about/AboutHeader";
import ThreePillars from "@/components/about/ThreePillars";
import AboutValues from "@/components/about/AboutValues";
import AboutTimeline from "@/components/about/AboutTimeline";
import KeyFigures from "@/components/about/KeyFigures";
import AboutCTA from "@/components/about/AboutCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qui Sommes Nous — BOY NETTOYAGE PRO Casablanca",
  description:
    "Fondée en 2016, BOY NETTOYAGE PRO est une entreprise de nettoyage professionnel à Casablanca. Personnel qualifié, produits premium, disponible 24h/24 partout au Maroc.",
  alternates: {
    canonical: "https://www.boynettoyage.ma/qui-sommes-nous",
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
