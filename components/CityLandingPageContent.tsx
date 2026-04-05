"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Home as HomeIcon,
  Phone,
  Clock,
  ShieldCheck,
  FileText,
  Users,
  Briefcase,
  HardHat,
  Shield,
  Gem,
  Hotel,
} from "lucide-react";
import type { CityData, CityIconName } from "@/lib/city-data";
import ScrollReveal from "./ScrollReveal";
import { PHONE_MAIN } from "@/lib/utils";

const ICON_MAP: Record<CityIconName, React.ComponentType<{ className?: string }>> = {
  Home: HomeIcon,
  Briefcase,
  HardHat,
  Shield,
  Gem,
  Hotel,
};

const PHONE_TEL = "tel:+212661408577";

const TRUST_BADGES = [
  {
    icon: Users,
    title: "Équipe locale",
    description: "Agents qualifiés basés dans votre ville",
  },
  {
    icon: Clock,
    title: "Disponible 24h/24",
    description: "Interventions 7j/7, y compris jours fériés",
  },
  {
    icon: ShieldCheck,
    title: "Produits certifiés",
    description: "Écologiques et sans danger pour la santé",
  },
  {
    icon: FileText,
    title: "Devis gratuit",
    description: "Réponse personnalisée sous 24h",
  },
];

export default function CityLandingPageContent({ city }: { city: CityData }) {
  return (
    <>
      {/* ─── 1. HERO ─────────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#052e16] via-[#064e3b] to-[#0D7377]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-black/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-8">
            <Link
              href="/"
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <HomeIcon className="w-4 h-4" />
              Accueil
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">
              Nettoyage à {city.city}
            </span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-semibold mb-6">
              <ShieldCheck className="w-4 h-4" />
              Service Professionnel — {city.city}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Nettoyage Professionnel à {city.city}
            </h1>

            <p className="text-white/85 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              {city.subtitle}
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/#devis"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-[#064e3b] font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-sm sm:text-base"
              >
                Demander un Devis
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={PHONE_TEL}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border-2 border-white/50 text-white font-semibold hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="hidden sm:inline">{PHONE_MAIN}</span>
                <span className="sm:hidden">Appeler</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. SERVICES GRID ────────────────────────────────────────── */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F7F9FC] to-white" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0D7377]/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4">
                Nos services à {city.city}
              </h2>
              <p className="text-[#6B7280] text-base md:text-lg max-w-2xl mx-auto">
                Découvrez nos prestations de nettoyage professionnel disponibles
                à {city.city} et dans la région {city.region}.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {city.services.map((service, index) => {
              const Icon = ICON_MAP[service.iconName];
              return (
              <ScrollReveal key={service.slug} delay={(index % 3) * 100}>
                <div className="group bg-white rounded-3xl overflow-hidden border border-[#E5E7EB]/50 shadow-lg shadow-[#1B3A5C]/5 hover:shadow-2xl hover:shadow-[#1B3A5C]/10 transition-all duration-500 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover scale-110 blur-md opacity-60"
                      aria-hidden="true"
                    />
                    <Image
                      src={service.image}
                      alt={`${service.title} à ${city.city}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain group-hover:scale-110 transition-transform duration-700 relative"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#064e3b]/70 to-[#0D7377]/30 opacity-70 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                    <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white drop-shadow-lg">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-[#6B7280] text-sm mb-6 leading-relaxed flex-grow">
                      {service.description}
                    </p>

                    <Link
                      href={`/services/${service.slug}`}
                      className="group/btn w-full py-3 rounded-xl bg-gradient-to-r from-[#064e3b] to-[#0D7377] text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Voir le service
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 3. POURQUOI NOUS CHOISIR ────────────────────────────────── */}
      <section className="relative py-16 md:py-20 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4">
                Pourquoi nous choisir à {city.city} ?
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_BADGES.map((badge, i) => (
              <ScrollReveal key={badge.title} delay={i * 100}>
                <div className="bg-white rounded-2xl border border-[#E5E7EB] p-6 text-center shadow-sm hover:shadow-md hover:border-[#0D7377]/30 transition-all duration-300">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#0D7377] to-[#064e3b] flex items-center justify-center">
                    <badge.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-[#1B3A5C] mb-2">
                    {badge.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    {badge.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. CITY PARAGRAPH ───────────────────────────────────────── */}
      <section className="relative py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-[#F7F9FC] rounded-2xl border border-[#E5E7EB] p-8 md:p-10">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1B3A5C] mb-4">
                Nettoyage professionnel à {city.city} et dans la région{" "}
                {city.region}
              </h2>
              <p className="text-[#374151] leading-relaxed text-base">
                {city.paragraph}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Nettoyage résidentiel",
                  "Nettoyage bureaux",
                  "Dératisation",
                  "Cristallisation marbre",
                  "Nettoyage hôtels",
                  city.city,
                  city.region,
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex px-3 py-1 rounded-full bg-[#0D7377]/10 text-[#0D7377] text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 5. BOTTOM CTA ───────────────────────────────────────────── */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B3A5C] via-[#1a4a6c] to-[#0D7377]" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Besoin d&apos;un nettoyage à {city.city} ?
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
                Contactez-nous pour un devis personnalisé adapté à vos besoins.
                Réponse garantie sous 24h.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/#devis"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#1B3A5C] font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  Demander un devis gratuit
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href={PHONE_TEL}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/50 text-white font-bold hover:bg-white/10 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Appeler maintenant
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
