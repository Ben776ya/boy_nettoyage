import { notFound } from "next/navigation";
import { Metadata } from "next";
import { SERVICES_DETAIL, getServiceBySlug } from "@/lib/services-detail-data";
import ServiceDetailPageContent from "@/components/ServiceDetailPageContent";
import { COMPANY_NAME } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const BASE_URL = "https://boynettoyagepro.ma";

export async function generateStaticParams() {
  return SERVICES_DETAIL.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: `${service.title} | ${COMPANY_NAME} - Nettoyage Professionnel au Maroc`,
    description: service.description,
    alternates: {
      canonical: `/services/${slug}`,
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
      "@id": `${BASE_URL}/#business`,
    },
    areaServed: {
      "@type": "Country",
      name: "Maroc",
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceSchema, breadcrumbSchema]),
        }}
      />
      <ServiceDetailPageContent slug={slug} />
    </>
  );
}
