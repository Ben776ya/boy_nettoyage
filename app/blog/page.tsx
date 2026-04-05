import { Metadata } from "next";
import BlogListingContent from "@/components/BlogListingContent";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

const BASE_URL = "https://www.boynettoyage.ma";

export const metadata: Metadata = {
  title: "Blog & Conseils Nettoyage | BOY NETTOYAGE PRO Casablanca",
  description:
    "Conseils d\u2019experts en nettoyage, guides d\u2019hygi\u00e8ne et actualit\u00e9s de BOY NETTOYAGE PRO. Tout ce que vous devez savoir pour un espace propre et sain.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog & Conseils Nettoyage | BOY NETTOYAGE PRO Casablanca",
    description:
      "Conseils d\u2019experts en nettoyage, guides d\u2019hygi\u00e8ne et actualit\u00e9s de BOY NETTOYAGE PRO.",
  },
};

export default function BlogPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Accueil", url: `${BASE_URL}/` },
          { name: "Blog", url: `${BASE_URL}/blog` },
        ]}
      />
      <BlogListingContent />
    </>
  );
}
