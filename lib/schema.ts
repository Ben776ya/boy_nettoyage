const BASE_URL = "https://www.boynettoyage.ma";

export function buildServiceSchema(
  name: string,
  description: string,
  url: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    description,
    url,
    provider: {
      "@type": "LocalBusiness",
      name: "BOY NETTOYAGE PRO",
      url: BASE_URL,
    },
    areaServed: {
      "@type": "City",
      name: "Casablanca",
    },
    serviceType: name,
  };
}
