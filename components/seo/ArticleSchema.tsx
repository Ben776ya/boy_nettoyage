interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  updatedAt?: string;
  authorName?: string;
  image?: string;
}

const BASE_URL = "https://www.boynettoyage.ma";

export default function ArticleSchema({
  title,
  description,
  url,
  publishedAt,
  updatedAt,
  authorName = "BOY NETTOYAGE PRO",
  image,
}: ArticleSchemaProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url,
    datePublished: publishedAt,
    dateModified: updatedAt ?? publishedAt,
    ...(image && { image }),
    author: {
      "@type": "Organization",
      name: authorName,
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "BOY NETTOYAGE PRO",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
