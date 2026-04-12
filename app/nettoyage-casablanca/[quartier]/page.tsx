import { Metadata } from "next";
import { notFound } from "next/navigation";
import { QUARTIERS, getQuartierBySlug } from "@/lib/quartiers-data";
import QuartierPageContent from "@/components/QuartierPageContent";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

const BASE_URL = "https://www.boynettoyage.ma";

interface PageProps {
  params: Promise<{ quartier: string }>;
}

export async function generateStaticParams() {
  return QUARTIERS.map((q) => ({ quartier: q.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { quartier: slug } = await params;
  const quartier = getQuartierBySlug(slug);
  if (!quartier) return {};

  return {
    title: `Société de Nettoyage ${quartier.name} Casablanca | BOY NETTOYAGE PRO`,
    description: quartier.description,
    keywords: [
      `société de nettoyage ${quartier.name.toLowerCase()}`,
      `nettoyage ${quartier.name.toLowerCase()} casablanca`,
      `entreprise nettoyage ${quartier.name.toLowerCase()}`,
      `nettoyage professionnel ${quartier.name.toLowerCase()}`,
      "société de nettoyage casablanca",
      "société de nettoyage maroc",
    ],
    alternates: {
      canonical: `/nettoyage-casablanca/${slug}`,
    },
    openGraph: {
      title: `Société de Nettoyage ${quartier.name} Casablanca | BOY NETTOYAGE PRO`,
      description: quartier.description,
      images: [{ url: "/logo.png", width: 1200, height: 630, alt: `BOY NETTOYAGE PRO — Nettoyage ${quartier.name} Casablanca` }],
    },
  };
}

export default async function QuartierPage({ params }: PageProps) {
  const { quartier: slug } = await params;
  const quartier = getQuartierBySlug(slug);

  if (!quartier) notFound();

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "BOY NETTOYAGE PRO",
    image: `${BASE_URL}/logo.png`,
    url: `${BASE_URL}/nettoyage-casablanca/${slug}`,
    telephone: ["+212661408577", "+212661538507", "+212522980621"],
    email: "contact@boynettoyage.ma",
    address: {
      "@type": "PostalAddress",
      streetAddress: "30 rue Abou Ishak Chirazi, Etage 2",
      addressLocality: "Casablanca",
      addressRegion: "Casablanca-Settat",
      postalCode: "20100",
      addressCountry: "MA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: quartier.geo.latitude,
      longitude: quartier.geo.longitude,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "$$",
    areaServed: {
      "@type": "Place",
      name: `${quartier.name}, Casablanca`,
    },
    sameAs: ["https://wa.me/212661408577"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Accueil", url: `${BASE_URL}/` },
          { name: "Nettoyage Casablanca", url: `${BASE_URL}/nettoyage-casablanca` },
          { name: `Nettoyage ${quartier.name}`, url: `${BASE_URL}/nettoyage-casablanca/${slug}` },
        ]}
      />
      <QuartierPageContent quartier={quartier} />
    </>
  );
}
