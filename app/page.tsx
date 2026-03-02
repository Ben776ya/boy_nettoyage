import HeroSection from "@/components/HeroSection";
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
