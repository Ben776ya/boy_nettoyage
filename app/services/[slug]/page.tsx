import { notFound } from "next/navigation";
import { Metadata } from "next";
import { SERVICES_DETAIL, getServiceBySlug } from "@/lib/services-detail-data";
import ServiceDetailPageContent from "@/components/ServiceDetailPageContent";
import FAQSchema from "@/components/seo/FAQSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

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

  const title = `${service.title} à Casablanca`;
  const description = `BOY NETTOYAGE PRO assure le ${service.title.toLowerCase()} professionnel à Casablanca et partout au Maroc. Équipe qualifiée, produits certifiés, devis gratuit sous 24h.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title: `${service.title} à Casablanca | BOY NETTOYAGE PRO`,
      description,
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Accueil", url: `${BASE_URL}/` },
          { name: "Services", url: `${BASE_URL}/services` },
          { name: service.title, url: `${BASE_URL}/services/${slug}` },
        ]}
      />
      <FAQSchema
        faqs={service.faq.map((item) => ({
          question: item.q,
          answer: item.a,
        }))}
      />
      <ServiceDetailPageContent slug={slug} />
    </>
  );
}
