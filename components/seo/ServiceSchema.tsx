interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  provider?: string;
  areaServed?: string[];
  price?: string;
}

export default function ServiceSchema({
  name,
  description,
  url,
  provider = "BOY NETTOYAGE PRO",
  areaServed = ["Casablanca", "Maroc"],
  price,
}: ServiceSchemaProps) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "LocalBusiness",
      name: provider,
      url: "https://www.boynettoyage.ma",
    },
    areaServed: areaServed.map((city) => ({
      "@type": "City",
      name: city,
    })),
  };

  if (price) {
    data.offers = {
      "@type": "Offer",
      description: "Devis gratuit sous 24h",
      price,
      priceCurrency: "MAD",
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
