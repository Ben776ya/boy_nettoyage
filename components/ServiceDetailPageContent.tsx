"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Home,
  Phone,
  CheckCircle,
  Users,
  MapPin,
  Star,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { SERVICES_DETAIL, getOtherServices } from "@/lib/services-detail-data";
import ScrollReveal from "./ScrollReveal";
import { PHONE_MAIN } from "@/lib/utils";

const PHONE_TEL = "tel:+212661408577";

interface ServiceDetailPageContentProps {
  slug: string;
}

export default function ServiceDetailPageContent({
  slug,
}: ServiceDetailPageContentProps) {
  const service = SERVICES_DETAIL.find((s) => s.slug === slug)!;
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const otherServices = getOtherServices(slug);

  return (
    <>
      {/* ─── 1. HERO SECTION ─────────────────────────────────────────── */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
        {/* Gradient background: dark green → primary green */}
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
              <Home className="w-4 h-4" />
              Accueil
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">{service.title}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">
            {/* Left: text content */}
            <div className="flex-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-semibold mb-6">
                <service.icon className="w-4 h-4" />
                Service Professionnel
              </div>

              {/* H1 */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
                {service.title} à Casablanca — BOY NETTOYAGE PRO
              </h1>

              {/* Intro paragraph */}
              <p className="text-white/85 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                {service.intro}
              </p>

              {/* CTA buttons */}
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

            {/* Right: service image */}
            <div className="flex-shrink-0 w-full lg:w-[420px]">
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
                <Image
                  src={service.image}
                  alt={`${service.title} professionnel à Casablanca`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. MAIN CONTENT ─────────────────────────────────────────── */}
      <section className="relative py-16 md:py-20 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* ── LEFT COLUMN (2/3) ── */}
            <div className="flex-1 min-w-0 space-y-10">

              {/* 2a. Prestations */}
              <ScrollReveal>
                <div className="bg-white rounded-2xl border border-[#E5E7EB] p-6 md:p-8 shadow-sm">
                  <h2 className="flex items-center gap-3 text-xl font-bold text-[#1B3A5C] mb-6">
                    <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#0D7377]/10">
                      <CheckCircle className="w-5 h-5 text-[#0D7377]" />
                    </span>
                    Nos Prestations
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.prestations.map((item, i) => (
                      <ScrollReveal key={i} delay={i * 60}>
                        <div className="flex items-start gap-3 p-4 rounded-xl border border-[#E5E7EB] bg-[#F7F9FC] hover:border-[#0D7377]/30 hover:bg-[#0D7377]/5 transition-colors">
                          <span className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-gradient-to-br from-[#0D7377] to-[#064e3b] flex items-center justify-center">
                            <CheckCircle className="w-3.5 h-3.5 text-white" />
                          </span>
                          <span className="text-sm text-[#374151] leading-snug">{item}</span>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* 2b. Target Clients */}
              <ScrollReveal delay={100}>
                <div className="bg-white rounded-2xl border border-[#E5E7EB] p-6 md:p-8 shadow-sm">
                  <h2 className="flex items-center gap-3 text-xl font-bold text-[#1B3A5C] mb-4">
                    <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#0D7377]/10">
                      <Users className="w-5 h-5 text-[#0D7377]" />
                    </span>
                    À qui s&apos;adresse ce service ?
                  </h2>
                  <p className="text-[#374151] leading-relaxed">{service.clients}</p>
                </div>
              </ScrollReveal>

              {/* 2c. Coverage Area */}
              <ScrollReveal delay={100}>
                <div className="bg-white rounded-2xl border border-[#E5E7EB] p-6 md:p-8 shadow-sm">
                  <h2 className="flex items-center gap-3 text-xl font-bold text-[#1B3A5C] mb-4">
                    <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#0D7377]/10">
                      <MapPin className="w-5 h-5 text-[#0D7377]" />
                    </span>
                    Zone d&apos;intervention
                  </h2>
                  <p className="text-[#374151] leading-relaxed">{service.coverage}</p>
                </div>
              </ScrollReveal>

              {/* 2d. Why Choose Us */}
              <ScrollReveal delay={100}>
                <div className="bg-white rounded-2xl border border-[#E5E7EB] p-6 md:p-8 shadow-sm">
                  <h2 className="flex items-center gap-3 text-xl font-bold text-[#1B3A5C] mb-6">
                    <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#0D7377]/10">
                      <Star className="w-5 h-5 text-[#0D7377]" />
                    </span>
                    Pourquoi nous choisir ?
                  </h2>
                  <ul className="space-y-3">
                    {service.whyUs.map((item, i) => (
                      <ScrollReveal key={i} delay={i * 70}>
                        <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#F7F9FC] transition-colors">
                          <span className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#0D7377] to-[#064e3b]" />
                          <span className="text-[#374151]">{item}</span>
                        </li>
                      </ScrollReveal>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* 2e. FAQ */}
              <ScrollReveal delay={100}>
                <div className="bg-white rounded-2xl border border-[#E5E7EB] p-6 md:p-8 shadow-sm">
                  <h2 className="text-xl font-bold text-[#1B3A5C] mb-6">
                    Questions fréquentes
                  </h2>
                  <div className="space-y-3">
                    {service.faq.map((item, i) => (
                      <div
                        key={i}
                        className="border border-[#E5E7EB] rounded-xl overflow-hidden"
                      >
                        <button
                          onClick={() => setOpenFaq(openFaq === i ? null : i)}
                          className="w-full flex items-center justify-between gap-3 p-4 text-left font-semibold text-[#1B3A5C] hover:bg-[#F7F9FC] transition-colors"
                        >
                          <span>{item.q}</span>
                          <ChevronDown
                            className={`flex-shrink-0 w-5 h-5 text-[#0D7377] transition-transform duration-300 ${
                              openFaq === i ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {openFaq === i && (
                          <div className="px-4 pb-4 text-[#374151] leading-relaxed border-t border-[#E5E7EB] pt-4 bg-[#F7F9FC]">
                            {item.a}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* ── RIGHT COLUMN / SIDEBAR (1/3) ── */}
            <div className="w-full lg:w-80 xl:w-96 flex-shrink-0 space-y-6">

              {/* Block A — Mobile CTA (hidden on desktop) */}
              <div className="lg:hidden rounded-2xl overflow-hidden bg-gradient-to-br from-[#064e3b] to-[#0D7377] p-6 text-white shadow-lg">
                <h3 className="text-lg font-bold mb-2">Besoin d&apos;un devis rapide ?</h3>
                <p className="text-white/80 text-sm mb-5">
                  Contactez-nous pour une réponse dans les 24h.
                </p>
                <div className="flex flex-col gap-3">
                  <Link
                    href="/#devis"
                    className="text-center py-2.5 rounded-xl bg-white text-[#064e3b] font-bold text-sm hover:bg-white/90 transition-colors"
                  >
                    Devis Gratuit
                  </Link>
                  <a
                    href={PHONE_TEL}
                    className="text-center py-2.5 rounded-xl border border-white/50 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
                  >
                    Appeler
                  </a>
                </div>
              </div>

              {/* Block B — Other Services Panel */}
              <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm overflow-hidden">
                <div className="p-4 border-b border-[#E5E7EB]">
                  <h3 className="font-bold text-[#1B3A5C] text-base">
                    Nos autres services
                  </h3>
                </div>
                <div className="max-h-[480px] overflow-y-auto divide-y divide-[#E5E7EB]">
                  {otherServices.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-[#0D7377]/5 group transition-colors"
                    >
                      <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#0D7377]/10 flex items-center justify-center group-hover:bg-[#0D7377]/20 transition-colors">
                        <s.icon className="w-4 h-4 text-[#0D7377]" />
                      </span>
                      <span className="text-sm text-[#374151] group-hover:text-[#0D7377] transition-colors leading-snug">
                        {s.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Block C — Desktop Sticky CTA (hidden on mobile) */}
              <div className="hidden lg:block sticky top-24 rounded-2xl overflow-hidden bg-gradient-to-br from-[#064e3b] to-[#0D7377] p-6 text-white shadow-xl">
                <h3 className="text-lg font-bold mb-2">
                  Demandez votre devis gratuit
                </h3>
                <p className="text-white/80 text-sm mb-6 leading-relaxed">
                  Nos experts vous répondent rapidement et vous proposent une
                  solution adaptée à vos besoins.
                </p>
                <div className="flex flex-col gap-3">
                  <Link
                    href="/#devis"
                    className="text-center py-3 rounded-xl bg-white text-[#064e3b] font-bold text-sm hover:bg-white/90 transition-colors shadow-md"
                  >
                    Devis Gratuit
                  </Link>
                  <a
                    href={PHONE_TEL}
                    className="flex items-center justify-center gap-2 py-3 rounded-xl border border-white/50 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Nous Appeler
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STICKY MOBILE BOTTOM BAR (hidden lg+) ───────────────────── */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-[#E5E7EB] shadow-[0_-4px_24px_rgba(0,0,0,0.10)] flex gap-2 px-4 py-3"
        style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom, 0px))" }}
      >
        <Link
          href="/#devis"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#064e3b] to-[#0D7377] text-white text-sm font-bold shadow-md"
        >
          <ArrowRight className="w-4 h-4" />
          Devis Gratuit
        </Link>
        <a
          href={PHONE_TEL}
          className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border-2 border-[#0D7377] text-[#0D7377] text-sm font-bold"
        >
          <Phone className="w-4 h-4" />
          Appeler
        </a>
      </div>

      {/* ─── 3. BOTTOM CTA SECTION ───────────────────────────────────── */}
      <section className="relative py-16 md:py-20 bg-white pb-28 lg:pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1B3A5C] mb-4">
              Prêt à nous confier votre projet ?
            </h2>
            <p className="text-[#6B7280] text-base md:text-lg mb-10 max-w-xl mx-auto">
              Obtenez un devis personnalisé et gratuit en quelques minutes.
              Notre équipe vous contacte rapidement.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/#devis"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#064e3b] to-[#0D7377] text-white font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                Demander un Devis
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-[#0D7377] text-[#0D7377] font-bold hover:bg-[#0D7377]/5 transition-all duration-300"
              >
                Retour à l&apos;accueil
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
