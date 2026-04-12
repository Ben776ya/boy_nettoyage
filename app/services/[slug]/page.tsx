import { notFound } from "next/navigation";
import { Metadata } from "next";
import { SERVICES_DETAIL, getServiceBySlug } from "@/lib/services-detail-data";
import ServiceDetailPageContent from "@/components/ServiceDetailPageContent";
import FAQSchema from "@/components/seo/FAQSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import ServiceSchema from "@/components/seo/ServiceSchema";

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

  const hasLocation = /casablanca|maroc/i.test(service.title);
  const titleBase = hasLocation ? service.title : `${service.title} à Casablanca`;
  const title = `${titleBase} | BOY NETTOYAGE PRO — Devis Gratuit`;
  const description = `BOY NETTOYAGE PRO, société de nettoyage professionnelle à Casablanca. ${service.description} Équipe qualifiée, produits certifiés, devis gratuit sous 24h. ☎ +212 6 61 40 85 77`;
  const ogTitle = hasLocation ? `${service.title} | BOY NETTOYAGE PRO` : `${service.title} à Casablanca | BOY NETTOYAGE PRO`;

  return {
    title,
    description,
    keywords: [
      `${service.title.toLowerCase()} casablanca`,
      `société de nettoyage casablanca`,
      `nettoyage professionnel maroc`,
      slug.replace(/-/g, " "),
    ],
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title: ogTitle,
      description,
      images: [
        {
          url: service.image ?? "/logo.png",
          width: 1200,
          height: 630,
          alt: ogTitle,
        },
      ],
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  return (
    <>
      <ServiceSchema
        name={service.title}
        description={service.description}
        url={`${BASE_URL}/services/${slug}`}
        price={service.pricing}
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
