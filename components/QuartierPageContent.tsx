"use client";

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
  MapPin,
  Star,
} from "lucide-react";
import type { QuartierData } from "@/lib/quartiers-data";
import ScrollReveal from "./ScrollReveal";

const PHONE_TEL = "tel:+212661408577";
const PHONE_MAIN = "+212 6 61 40 85 77";

const SERVICES = [
  { label: "Nettoyage Appartements & Villas", href: "/services/nettoyage-appartements-villas" },
  { label: "Nettoyage Bureaux", href: "/services/nettoyage-bureaux" },
  { label: "Nettoyage Fin de Chantier", href: "/services/nettoyage-de-chantier" },
  { label: "Dératisation & Traitement 4D", href: "/services/hygiene-traitement-4d" },
  { label: "Cristallisation Marbre", href: "/services/cristallisation-marbre" },
  { label: "Nettoyage Moquettes & Canapés", href: "/services/nettoyage-canape-fauteuil" },
];

const TRUST_BADGES = [
  { icon: Users, title: "Équipe locale", description: "Agents qualifiés basés à Casablanca" },
  { icon: Clock, title: "Disponible 24h/24", description: "Interventions 7j/7, jours fériés inclus" },
  { icon: ShieldCheck, title: "Produits certifiés", description: "Écologiques et sans danger" },
  { icon: FileText, title: "Devis gratuit", description: "Réponse personnalisée sous 24h" },
];

export default function QuartierPageContent({ quartier }: { quartier: QuartierData }) {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#052e16] via-[#064e3b] to-[#0D7377]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-black/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-8 flex-wrap">
            <Link href="/" className="flex items-center gap-1 hover:text-white transition-colors">
              <HomeIcon className="w-4 h-4" />
              Accueil
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/nettoyage-casablanca" className="hover:text-white transition-colors">
              Casablanca
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">{quartier.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 mb-5">
                <MapPin className="w-4 h-4 text-green-300" />
                <span className="text-sm text-white/90 font-medium">Casablanca — {quartier.name}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
                Société de Nettoyage{" "}
                <span className="text-green-300">{quartier.name}</span>
                <br />
                <span className="text-xl sm:text-2xl font-medium text-white/80 mt-2 block">
                  BOY NETTOYAGE PRO — Casablanca
                </span>
              </h1>

              <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8">
                {quartier.paragraph}
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={PHONE_TEL}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-xl transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Appeler maintenant
                </a>
                <Link
                  href="/devis-gratuit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-colors"
                >
                  Devis gratuit 24h
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-4">
              {TRUST_BADGES.map((badge) => (
                <div key={badge.title} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5">
                  <badge.icon className="w-8 h-8 text-green-300 mb-3" />
                  <h3 className="text-white font-semibold mb-1">{badge.title}</h3>
                  <p className="text-white/70 text-sm">{badge.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─────────────────────────────────────────────── */}
      <ScrollReveal>
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary-navy mb-3">
                Nos Services à {quartier.name}
              </h2>
              <p className="text-text-gray max-w-xl mx-auto">
                BOY NETTOYAGE PRO intervient dans tout le quartier {quartier.name} pour l'ensemble de vos besoins en nettoyage professionnel.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICES.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group flex items-center gap-3 p-4 rounded-xl border border-border hover:border-primary-teal hover:shadow-md transition-all"
                >
                  <div className="w-2 h-2 rounded-full bg-primary-teal flex-shrink-0 group-hover:scale-150 transition-transform" />
                  <span className="text-sm font-medium text-primary-navy group-hover:text-primary-teal transition-colors">
                    {service.label}
                  </span>
                  <ArrowRight className="w-4 h-4 text-primary-teal ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── POURQUOI NOUS ────────────────────────────────────────── */}
      <ScrollReveal>
        <section className="py-16 bg-light-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-primary-navy mb-4">
                  Pourquoi choisir BOY NETTOYAGE PRO à {quartier.name} ?
                </h2>
                <p className="text-text-gray mb-6 leading-relaxed">
                  Présents à Casablanca depuis 2016, nous connaissons parfaitement le quartier {quartier.name} et ses spécificités. Nos équipes interviennent rapidement, avec du matériel professionnel et des produits certifiés écologiques.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    `Intervention rapide dans tout le quartier ${quartier.name}`,
                    "Équipes formées et encadrées par un chef d'équipe",
                    "Produits professionnels certifiés, sans danger",
                    "Assurance responsabilité civile professionnelle",
                    "Devis gratuit et détaillé sous 24h",
                    "Disponible 7j/7, y compris le weekend",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-text-gray">
                      <Star className="w-4 h-4 text-primary-teal flex-shrink-0 mt-0.5" fill="currentColor" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={PHONE_TEL}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-teal hover:bg-primary-teal/90 text-white font-semibold rounded-xl transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {PHONE_MAIN}
                </a>
              </div>

              {/* Quartiers voisins */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-border">
                <h3 className="text-lg font-bold text-primary-navy mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary-teal" />
                  Zones couvertes autour de {quartier.name}
                </h3>
                <p className="text-sm text-text-gray mb-5">
                  BOY NETTOYAGE PRO intervient à {quartier.name} et dans tous les quartiers voisins de Casablanca.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {quartier.nearbyQuartiers.map((q) => (
                    <Link
                      key={q}
                      href={`/nettoyage-casablanca/${q}`}
                      className="px-3 py-1.5 bg-primary-teal/10 text-primary-teal text-sm font-medium rounded-full hover:bg-primary-teal hover:text-white transition-colors capitalize"
                    >
                      {q.replace(/-/g, " ")}
                    </Link>
                  ))}
                  <Link
                    href="/nettoyage-casablanca"
                    className="px-3 py-1.5 bg-primary-navy/10 text-primary-navy text-sm font-medium rounded-full hover:bg-primary-navy hover:text-white transition-colors"
                  >
                    Tout Casablanca →
                  </Link>
                </div>
                <div className="border-t border-border pt-5">
                  <p className="text-sm font-semibold text-primary-navy mb-1">BOY NETTOYAGE PRO</p>
                  <p className="text-sm text-text-gray">30 rue Abou Ishak Chirazi, Maârif — Casablanca</p>
                  <a href={PHONE_TEL} className="text-sm text-primary-teal font-medium hover:underline">{PHONE_MAIN}</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── CTA FINAL ────────────────────────────────────────────── */}
      <ScrollReveal>
        <section className="py-16 bg-primary-navy text-white text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Besoin d'un nettoyage professionnel à {quartier.name} ?
            </h2>
            <p className="text-white/80 mb-8">
              Contactez-nous maintenant pour un devis gratuit et personnalisé. Réponse sous 24h, intervention possible dès le lendemain.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={PHONE_TEL}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl text-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
                {PHONE_MAIN}
              </a>
              <Link
                href="/devis-gratuit"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/30 transition-colors"
              >
                Demander un devis gratuit
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
