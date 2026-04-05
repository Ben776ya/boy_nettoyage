import { Metadata } from "next";
import { getCityBySlug } from "@/lib/city-data";
import CityLandingPageContent from "@/components/CityLandingPageContent";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

const BASE_URL = "https://www.boynettoyage.ma";
const city = getCityBySlug("nettoyage-rabat")!;

export const metadata: Metadata = {
  title: `Nettoyage Professionnel à ${city.city} | BOY NETTOYAGE PRO`,
  description: `BOY NETTOYAGE PRO — Service de nettoyage professionnel à ${city.city}. Appartements, villas, bureaux, dératisation. Équipe qualifiée, devis gratuit sous 24h. ☎ +212 6 61 40 85 77`,
  alternates: {
    canonical: `/${city.slug}`,
  },
  openGraph: {
    title: `Nettoyage Professionnel à ${city.city} | BOY NETTOYAGE PRO`,
    description: `Service de nettoyage professionnel à ${city.city}. Appartements, villas, bureaux, dératisation. Devis gratuit sous 24h.`,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "BOY NETTOYAGE PRO",
  image: `${BASE_URL}/logo.png`,
  url: BASE_URL,
  telephone: ["+212661408577", "+212661538507", "+212522980621"],
  email: "boynettoyagepro@gmail.com",
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
    latitude: city.geo.latitude,
    longitude: city.geo.longitude,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  priceRange: "$$",
  areaServed: { "@type": "City", name: city.city },
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: city.geo.latitude,
      longitude: city.geo.longitude,
    },
    geoRadius: "50000",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: `Services de Nettoyage Professionnel à ${city.city}`,
    itemListElement: city.services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title },
    })),
  },
  sameAs: ["https://wa.me/212661408577"],
};

export default function NettoyageRabatPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Accueil", url: `${BASE_URL}/` },
          { name: `Nettoyage à ${city.city}`, url: `${BASE_URL}/${city.slug}` },
        ]}
      />
      <CityLandingPageContent city={city} />
    </>
  );
}
