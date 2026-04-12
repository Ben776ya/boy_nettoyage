import { Metadata } from "next";
import { getCityBySlug } from "@/lib/city-data";
import CityLandingPageContent from "@/components/CityLandingPageContent";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

const BASE_URL = "https://www.boynettoyage.ma";
const city = getCityBySlug("nettoyage-casablanca")!;

export const metadata: Metadata = {
  title: `Société de Nettoyage ${city.city} — BOY NETTOYAGE PRO | Devis Gratuit`,
  description: `BOY NETTOYAGE PRO, société de nettoyage professionnelle à ${city.city} depuis 2016. Appartements, villas, bureaux, dératisation, cristallisation marbre. Devis gratuit sous 24h. ☎ +212 6 61 40 85 77`,
  keywords: [
    `société de nettoyage ${city.city.toLowerCase()}`,
    `entreprise nettoyage ${city.city.toLowerCase()}`,
    `nettoyage professionnel ${city.city.toLowerCase()}`,
    `nettoyage bureaux ${city.city.toLowerCase()}`,
    `nettoyage villas ${city.city.toLowerCase()}`,
    `dératisation ${city.city.toLowerCase()}`,
    "société de nettoyage maroc",
  ],
  alternates: {
    canonical: `/${city.slug}`,
  },
  openGraph: {
    title: `Société de Nettoyage ${city.city} | BOY NETTOYAGE PRO`,
    description: `Société de nettoyage professionnel à ${city.city} depuis 2016. Appartements, villas, bureaux, dératisation. Devis gratuit sous 24h.`,
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: `BOY NETTOYAGE PRO — Société de Nettoyage ${city.city}` }],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "BOY NETTOYAGE PRO",
  image: `${BASE_URL}/logo.png`,
  url: BASE_URL,
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

export default function NettoyageCasablancaPage() {
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
