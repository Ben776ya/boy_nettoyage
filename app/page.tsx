import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";

export const metadata: Metadata = {
  title: "Nettoyage Professionnel à Casablanca",
  description:
    "BOY NETTOYAGE PRO — Entreprise de nettoyage professionnel à Casablanca depuis 2016. Villas, bureaux, industrie, dératisation, cristallisation marbre. Devis gratuit 24h/24.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nettoyage Professionnel à Casablanca | BOY NETTOYAGE PRO",
    description:
      "BOY NETTOYAGE PRO — Entreprise de nettoyage professionnel à Casablanca depuis 2016. Villas, bureaux, industrie, dératisation, cristallisation marbre. Devis gratuit 24h/24.",
  },
};

import TrustBar from "@/components/TrustBar";
import DevisForm from "@/components/DevisForm";
import ServicesCarousel from "@/components/ServicesCarousel";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import B2BContactSection from "@/components/B2BContactSection";
import CTASection from "@/components/CTASection";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
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
