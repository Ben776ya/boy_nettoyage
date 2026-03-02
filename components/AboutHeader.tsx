"use client";

import { ArrowRight, Phone, Clock, CheckCircle, Sparkles, Award, Users, Shield, Eye } from "lucide-react";
import { PHONE_NUMBER, PHONE_MAIN, COMPANY_NAME, YEAR_FOUNDED, YEARS_EXPERIENCE, ADDRESS } from "@/lib/utils";
import ScrollReveal from "./ScrollReveal";

export default function AboutHeader() {
  const features = [
    "Personnel qualifié et formé",
    "Produits certifiés & matériel pro",
    "Discrétion et rigueur absolues",
    "Couverture Casablanca et régions",
  ];

  const stats = [
    { value: YEARS_EXPERIENCE, label: "EXPÉRIENCE", icon: Award },
    { value: "24/7", label: "DISPONIBLE", icon: Clock },
    { value: "100%", label: "SATISFACTION", icon: Shield },
  ];

  return (
    <section className="relative pt-28 md:pt-36 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-light-bg via-white to-light-bg"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-teal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-bright-blue/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column */}
          <ScrollReveal>
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-navy/10 to-primary-teal/10 text-primary-navy text-sm font-semibold mb-6">
                <Sparkles className="w-4 h-4 text-primary-teal" />
                À Propos • Depuis {YEAR_FOUNDED}
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-navy mb-6 leading-tight">
                Qui est{" "}
                <span className="gradient-text">{COMPANY_NAME}</span> ?
              </h1>

              <p className="text-text-gray text-lg leading-relaxed mb-8">
                {COMPANY_NAME} est une entreprise leader basée à Casablanca, spécialisée dans
                les services de nettoyage et d&apos;hygiène pour les particuliers et les professionnels.
                Avec plus de {YEARS_EXPERIENCE} ans d&apos;expérience, nos équipes sont formées pour
                délivrer des résultats haut de gamme en utilisant des procédures rigoureuses
                et un équipement professionnel.
              </p>

              <p className="text-text-gray text-lg leading-relaxed mb-8">
                Qu&apos;il s&apos;agisse d&apos;un nettoyage ponctuel en profondeur ou d&apos;un contrat
                d&apos;entretien régulier, nous garantissons des espaces sains, propres et valorisés.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/#devis"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-green-cta to-emerald-600 text-white font-semibold shadow-xl shadow-green-cta/30 hover:shadow-2xl hover:shadow-green-cta/40 transition-all duration-300 hover:-translate-y-1 btn-shine group"
                >
                  Demander un devis
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border-2 border-primary-navy text-primary-navy font-semibold hover:bg-primary-navy hover:text-white transition-all duration-300 group"
                >
                  <Phone className="w-5 h-5 group-hover:animate-bounce" />
                  {PHONE_MAIN}
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column - Procedures Card */}
          <ScrollReveal delay={200}>
            <div className="relative">
              {/* Background image card */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl bg-gradient-to-br from-primary-teal/20 to-bright-blue/20 -z-10"></div>

              <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-primary-navy/10 border border-border/50 overflow-hidden">
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-teal/10 to-transparent rounded-bl-[100px]"></div>

                <div className="relative">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-100 to-gray-50 text-text-gray text-xs font-semibold mb-5">
                    <Eye className="w-3 h-3 text-primary-teal" />
                    Notre engagement qualité
                  </div>

                  <h2 className="text-2xl font-bold text-primary-navy mb-3">
                    Expertise, Fiabilité, Solutions sur mesure
                  </h2>

                  <p className="text-text-gray mb-6">
                    Notre objectif : offrir un service fiable, planifié et contrôlé
                    — adapté aux exigences des particuliers comme des entreprises.
                  </p>

                  <div className="space-y-3 mb-8">
                    {features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-light-bg to-white border border-border/50 group hover:shadow-md transition-all duration-300"
                      >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-bright-blue/20 to-indigo-100 flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-bright-blue" />
                        </div>
                        <span className="text-sm font-medium text-primary-navy">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/50">
                    {stats.map((stat) => (
                      <div key={stat.label} className="text-center group">
                        <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-gradient-to-br from-primary-teal/10 to-bright-blue/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <stat.icon className="w-5 h-5 text-primary-teal" />
                        </div>
                        <div className="text-xl font-bold gradient-text">
                          {stat.value}
                        </div>
                        <div className="text-[10px] text-text-gray uppercase tracking-wider">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
