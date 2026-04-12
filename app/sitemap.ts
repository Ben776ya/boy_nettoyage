import { MetadataRoute } from "next";
import { SERVICES_DETAIL } from "@/lib/services-detail-data";
import { CITY_PAGES } from "@/lib/city-data";
import { BLOG_POSTS } from "@/lib/blog-data";
import { QUARTIERS } from "@/lib/quartiers-data";

const BASE_URL = "https://www.boynettoyage.ma";

// Services prioritaires SEO - keywords: société de nettoyage casablanca / maroc
const HIGH_PRIORITY_SERVICES = [
  "nettoyage-appartements-villas",
  "nettoyage-bureaux",
  "nettoyage-industriel",
  "nettoyage-de-chantier",
  "hygiene-traitement-4d",
  "cristallisation-marbre",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceUrls = SERVICES_DETAIL.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: HIGH_PRIORITY_SERVICES.includes(service.slug) ? 0.9 : 0.8,
  }));

  const cityUrls = CITY_PAGES.map((city) => ({
    url: `${BASE_URL}/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    // Casablanca = priorité max car keyword principal
    priority: city.slug === "nettoyage-casablanca" ? 0.95 : 0.85,
  }));

  const blogUrls = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Pages quartiers Casablanca - keywords: société de nettoyage [quartier] casablanca
  const quartierUrls = QUARTIERS.map((q) => ({
    url: `${BASE_URL}/nettoyage-casablanca/${q.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [
    // ===== PAGE D'ACCUEIL =====
    // Keyword: société de nettoyage casablanca | société de nettoyage maroc
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },

    // ===== PAGES PRINCIPALES =====
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/qui-sommes-nous`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.65,
    },

    // ===== SERVICES (dynamique depuis SERVICES_DETAIL) =====
    ...serviceUrls,

    // ===== PAGES VILLES (dynamique depuis CITY_PAGES) =====
    // Keywords: nettoyage casablanca | nettoyage rabat | nettoyage marrakech | nettoyage agadir
    ...cityUrls,

    // ===== QUARTIERS CASABLANCA =====
    // Keywords: société de nettoyage maarif | anfa | ain-diab | racine | gauthier...
    ...quartierUrls,

    // ===== BLOG (dynamique depuis BLOG_POSTS) =====
    ...blogUrls,
  ];
}
