const localBusinessData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "BOY NETTOYAGE PRO",
  "image": "https://www.boynettoyage.ma/logo.png",
  "url": "https://www.boynettoyage.ma",
  "telephone": ["+212661408577", "+212661538507", "+212522980621"],
  "email": "boynettoyagepro@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "30 rue Abou Ishak Chirazi, Etage 2",
    "addressLocality": "Casablanca",
    "addressRegion": "Casablanca-Settat",
    "postalCode": "20100",
    "addressCountry": "MA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 33.5731,
    "longitude": -7.5898
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "priceRange": "$$",
  "areaServed": [
    { "@type": "City", "name": "Casablanca" },
    { "@type": "City", "name": "Rabat" },
    { "@type": "City", "name": "Marrakech" },
    { "@type": "City", "name": "Fès" },
    { "@type": "City", "name": "Agadir" },
    { "@type": "City", "name": "Tanger" },
    { "@type": "City", "name": "Mohammedia" },
    { "@type": "City", "name": "El Jadida" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services de Nettoyage Professionnel",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Nettoyage Appartements & Villas"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Nettoyage Bureaux & Commercial"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Nettoyage Industriel"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Dératisation & Traitement 4D"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cristallisation Marbre & Parquet"
        }
      }
    ]
  },
  "sameAs": [
    "https://wa.me/212661408577"
  ]
};

export default function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
    />
  );
}
