"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Sparkles, ChevronRight, Home } from "lucide-react";
import { ALL_SERVICES } from "@/lib/services-data";
import ScrollReveal from "./ScrollReveal";

export default function ServicesPageContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-navy via-[#1a3a5c] to-[#0f2840]"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-pattern-light"></div>
        </div>
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary-teal/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-bright-blue/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              {/* Breadcrumb */}
              <nav className="flex items-center justify-center gap-2 text-sm text-white/70 mb-6">
                <Link href="/" className="flex items-center gap-1 hover:text-white transition-colors">
                  <Home className="w-4 h-4" />
                  Accueil
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white font-medium">Nos Services</span>
              </nav>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Nos Services
              </h1>

              {/* Subtitle */}
              <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
                19 services de nettoyage professionnel pour répondre à tous vos besoins
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-light-bg to-white"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-teal/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-bright-blue/5 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-teal/10 to-bright-blue/10 text-primary-teal text-sm font-semibold mb-4">
                <Sparkles className="w-4 h-4" />
                Expertise Complète
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-navy mb-4">
                Une gamme complète de{" "}
                <span className="gradient-text">services premium</span>
              </h2>
              <p className="text-text-gray text-lg max-w-2xl mx-auto">
                Particuliers ou professionnels, découvrez notre gamme complète de services
                de nettoyage et d&apos;hygiène à Casablanca et partout au Maroc.
              </p>
            </div>
          </ScrollReveal>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {ALL_SERVICES.map((service, index) => (
              <ScrollReveal key={service.id} delay={(index % 3) * 100}>
                <div className="group bg-white rounded-3xl overflow-hidden border border-border/50 shadow-lg shadow-primary-navy/5 hover:shadow-2xl hover:shadow-primary-navy/10 transition-all duration-500 h-full flex flex-col card-hover">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60 mix-blend-multiply`}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                    {/* Icon Badge */}
                    <div className={`absolute top-4 left-4 w-12 h-12 rounded-2xl ${service.bgColor} backdrop-blur-sm flex items-center justify-center`}>
                      <service.icon className={`w-6 h-6 ${service.textColor}`} />
                    </div>

                    {/* Title on image */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white drop-shadow-lg">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-text-gray text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Bullets */}
                    <ul className="space-y-2 mb-6 flex-grow">
                      {service.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-center gap-2 text-sm">
                          <div className={`w-5 h-5 rounded-full ${service.bgColor} flex items-center justify-center flex-shrink-0`}>
                            <Check className={`w-3 h-3 ${service.textColor}`} />
                          </div>
                          <span className="text-text-gray">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <a
                      href="/#devis"
                      className={`group/btn w-full py-3 rounded-xl bg-gradient-to-r ${service.color} text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 btn-shine cursor-pointer`}
                    >
                      Demander un devis
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-navy via-[#1a4a6c] to-primary-teal"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-pattern-light"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Besoin d&apos;un service sur mesure ?
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
                Contactez-nous pour un devis personnalisé adapté à vos besoins spécifiques.
              </p>
              <a
                href="/#devis"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-primary-navy font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
              >
                Demander un devis gratuit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
