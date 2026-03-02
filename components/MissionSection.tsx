"use client";

import { Users, CheckCircle, Clock, ArrowRight, Target, Sparkles, Award, Shield } from "lucide-react";
import { COMPANY_NAME, YEARS_EXPERIENCE } from "@/lib/utils";
import ScrollReveal from "./ScrollReveal";

export default function MissionSection() {
  const keyFigures = [
    { icon: Award, value: YEARS_EXPERIENCE, label: "Années d'expérience", color: "from-blue-500 to-indigo-500" },
    { icon: Users, value: "20,000+", label: "Clients satisfaits", color: "from-green-500 to-emerald-500" },
    { icon: Shield, value: "Premium", label: "Produits & méthodes", color: "from-amber-500 to-orange-500" },
    { icon: Clock, value: "24/7", label: "Disponibilité totale", color: "from-purple-500 to-pink-500" },
  ];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-light-bg to-white"></div>
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary-teal/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column */}
          <ScrollReveal>
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-teal/10 to-green-100 text-primary-teal text-sm font-semibold mb-6">
                <Target className="w-4 h-4" />
                Notre Mission
              </span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-navy mb-6 leading-tight">
                Propreté & hygiène{" "}
                <span className="gradient-text">premium</span> pour tous
              </h2>

              <p className="text-text-gray text-lg leading-relaxed mb-8">
                Fournir des services de nettoyage et d&apos;hygiène de haute qualité pour
                les particuliers et les professionnels. Villas, bureaux, industrie,
                hôtels, fin de chantier, dératisation — nous couvrons tous vos besoins
                avec expertise et rigueur.
              </p>

              <div className="space-y-4">
                {[
                  "Garantir la satisfaction de nos clients",
                  "Créer des environnements propres et sains",
                  "Développer les opportunités pour nos employés",
                  "Utiliser des produits et méthodes premium",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-cta to-emerald-500 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-primary-navy font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column - Key Figures Card */}
          <ScrollReveal delay={200}>
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute -top-4 -right-4 w-full h-full rounded-3xl bg-gradient-to-br from-bright-blue/10 to-primary-teal/10 -z-10"></div>

              <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-primary-navy/10 border border-border/50">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-bright-blue to-indigo-500 flex items-center justify-center shadow-lg shadow-bright-blue/30">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-navy">
                      {COMPANY_NAME}
                    </h3>
                    <p className="text-sm text-text-gray">en chiffres</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {keyFigures.map((figure) => (
                    <div
                      key={figure.label}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-light-bg to-white border border-border/50 group hover:shadow-lg transition-all duration-300 cursor-default"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${figure.color} flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <figure.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-primary-navy">
                          {figure.value}
                        </div>
                        <div className="text-sm text-text-gray">
                          {figure.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href="/#devis"
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-gradient-to-r from-bright-blue to-indigo-500 text-white font-semibold shadow-lg shadow-bright-blue/30 hover:shadow-xl hover:shadow-bright-blue/40 transition-all duration-300 hover:-translate-y-0.5 btn-shine group"
                >
                  Demander un devis gratuit
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
