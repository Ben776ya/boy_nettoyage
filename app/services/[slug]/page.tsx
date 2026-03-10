import { notFound } from "next/navigation";
import { Metadata } from "next";
import { SERVICES_DETAIL, getServiceBySlug } from "@/lib/services-detail-data";
import ServiceDetailPageContent from "@/components/ServiceDetailPageContent";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES_DETAIL.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: `${service.title} | Eden Plaza Nettoyage - Nettoyage Professionnel au Maroc`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  return <ServiceDetailPageContent slug={slug} />;
}
