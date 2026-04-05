import { MetadataRoute } from "next";
import { SERVICES_DETAIL } from "@/lib/services-detail-data";
import { CITY_PAGES } from "@/lib/city-data";

const BASE_URL = "https://www.boynettoyage.ma";

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceUrls = SERVICES_DETAIL.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const cityUrls = CITY_PAGES.map((city) => ({
    url: `${BASE_URL}/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: city.slug === "nettoyage-casablanca" ? 0.9 : 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/qui-sommes-nous`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...serviceUrls,
    ...cityUrls,
  ];
}
