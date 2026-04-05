import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";

export const metadata: Metadata = {
  title: "Nettoyage Professionnel à Casablanca — Devis Gratuit 24h/24",
  description:
    "BOY NETTOYAGE PRO, votre expert nettoyage à Casablanca depuis 2016. Villas, appartements, bureaux, industrie, tapis, canapés, dératisation. Équipe qualifiée, disponible 24h/24. Devis gratuit.",
  alternates: {
    canonical: "https://www.boynettoyage.ma",
  },
};

import TrustBar from "@/components/TrustBar";
import DevisForm from "@/components/DevisForm";
import ServicesCarousel from "@/components/ServicesCarousel";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import B2BContactSection from "@/components/B2BContactSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <DevisForm />
      <ServicesCarousel />
      <BeforeAfterSection />
      <TestimonialsSection />
      <B2BContactSection />
      <CTASection />
    </>
  );
}
