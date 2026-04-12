import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";

export const metadata: Metadata = {
  title: "Société de Nettoyage Casablanca | BOY NETTOYAGE PRO — Devis Gratuit",
  description:
    "BOY NETTOYAGE PRO, société de nettoyage à Casablanca depuis 2016. Nettoyage villas, bureaux, industrie, dératisation, cristallisation marbre. Intervention 24h/24 au Maroc. ☎ +212 6 61 40 85 77",
  keywords: [
    "société de nettoyage casablanca",
    "société de nettoyage maroc",
    "entreprise nettoyage casablanca",
    "nettoyage professionnel casablanca",
    "nettoyage bureaux casablanca",
    "nettoyage villas casablanca",
    "dératisation casablanca",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Société de Nettoyage Casablanca | BOY NETTOYAGE PRO",
    description:
      "Société de nettoyage professionnel à Casablanca depuis 2016. Villas, bureaux, industrie, dératisation, cristallisation marbre. Devis gratuit 24h/24.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "BOY NETTOYAGE PRO — Société de Nettoyage Casablanca",
      },
    ],
  },
};

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import TrustBar from "@/components/TrustBar";
import DevisForm from "@/components/DevisForm";
import ServicesCarousel from "@/components/ServicesCarousel";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import B2BContactSection from "@/components/B2BContactSection";
import CTASection from "@/components/CTASection";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import { BLOG_POSTS, BLOG_CATEGORIES, CATEGORY_COLORS } from "@/lib/blog-data";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      <HeroSection />
      <TrustBar />
      <DevisForm />
      <ServicesCarousel />
      <BeforeAfterSection />
      <TestimonialsSection />

      {/* Derniers Articles */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-navy mb-3">
              Conseils &amp; Guides
            </h2>
            <p className="text-text-gray max-w-xl mx-auto">
              Nos experts partagent leurs conseils pour un environnement plus
              sain
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.slice(0, 3).map((post) => {
              const colors = CATEGORY_COLORS[post.category];
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden hover:-translate-y-1"
                >
                  {/* Cover image */}
                  <div className="relative h-44 bg-gradient-to-br from-primary-teal/10 to-bright-blue/10 overflow-hidden">
                    {post.coverImage ? (
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-5xl opacity-20">✨</div>
                    )}
                    <span
                      className={cn(
                        "absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-xs font-semibold",
                        colors.bg,
                        colors.text
                      )}
                    >
                      {BLOG_CATEGORIES[post.category]}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-base font-bold text-primary-navy mb-2 group-hover:text-primary-teal transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-text-gray line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 text-xs text-text-gray">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readingTime} min
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-teal">
                        Lire <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-teal hover:underline"
            >
              Voir tous les articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <B2BContactSection />
      <CTASection />
    </>
  );
}
