import { notFound } from "next/navigation";
import { Metadata } from "next";
import { SERVICES_DETAIL, getServiceBySlug } from "@/lib/services-detail-data";
import ServiceDetailPageContent from "@/components/ServiceDetailPageContent";
import { COMPANY_NAME } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const BASE_URL = "https://www.boynettoyage.ma";

export async function generateStaticParams() {
  return SERVICES_DETAIL.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  const description = `${service.title} à Casablanca par ${COMPANY_NAME}. ${service.description} Devis gratuit 24h/24. Appelez le 0661 408 577.`;

  return {
    title: `${service.title} à Casablanca | ${COMPANY_NAME}`,
    description: description.length > 160 ? description.slice(0, 157) + "..." : description,
    alternates: {
      canonical: `${BASE_URL}/services/${slug}`,
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BASE_URL}/services/${slug}#service`,
    name: service.title,
    description: service.description,
    url: `${BASE_URL}/services/${slug}`,
    provider: {
      "@type": "LocalBusiness",
      name: "BOY NETTOYAGE PRO",
      url: BASE_URL,
    },
    areaServed: {
      "@type": "City",
      name: "Casablanca",
    },
    serviceType: service.title,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: `${BASE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${BASE_URL}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `${BASE_URL}/services/${slug}`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceSchema, breadcrumbSchema, faqSchema]),
        }}
      />
      <ServiceDetailPageContent slug={slug} />
    </>
  );
}
