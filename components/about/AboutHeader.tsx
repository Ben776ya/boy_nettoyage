"use client";

import { ArrowRight, MessageCircle, CheckCircle, Building2, FileText } from "lucide-react";
import { PHONE_MAIN, COMPANY_NAME, WHATSAPP_URL } from "@/lib/utils";
import ScrollReveal from "../ScrollReveal";

export default function AboutHeader() {
  const checklistItems = [
    "Équipe expérimentée et formée.",
    "Services complets et personnalisés.",
    "Interventions hebdomadaires ou bimensuelles.",
    "Réservation, gestion et paiement simplifiés.",
  ];

  const procedureFeatures = [
    "Interventions planifiées (hors horaires)",
    "Produits certifiés & matériel pro",
    "Rapports d'intervention sur demande",
    "Couverture multi-villes",
  ];

  const stats = [
    { value: "+150", label: "CLIENTS" },
    { value: "24/7", label: "SUPPORT" },
    { value: "100%", label: "SÉCURITÉ" },
  ];

  return (
    <section className="relative pt-28 md:pt-36 pb-20 overflow-hidden bg-white">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-teal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-bright-blue/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column - 55% */}
          <div className="lg:col-span-7">
            <ScrollReveal>
              {/* Badge */}
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-teal/10 to-bright-blue/10 text-primary-teal text-xs font-semibold uppercase tracking-wider mb-6">
                <Building2 className="w-4 h-4" />
                À Propos • Notre Histoire
              </span>

              {/* Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-primary-navy mb-6 leading-tight">
                À Propos de{" "}
                <span className="text-bright-blue">{COMPANY_NAME}</span>
              </h1>

              {/* Paragraph */}
              <p className="text-text-gray text-lg leading-relaxed mb-8 max-w-[580px]">
                Nous mettons à votre service une équipe qualifiée et expérimentée,
                engagée à offrir des prestations de nettoyage fiables, efficaces et
                adaptées à vos besoins. Grâce à notre savoir-faire et à notre organisation
                rigoureuse, nous assurons un environnement propre, sain et agréable,
                que ce soit pour des espaces professionnels ou résidentiels.
              </p>

              {/* Checklist */}
              <div className="space-y-3 mb-8">
                {checklistItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-cta to-emerald-500 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-primary-navy font-medium text-[15px]">{item}</span>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/#devis"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-bright-blue text-white font-semibold shadow-lg shadow-bright-blue/30 hover:shadow-xl hover:shadow-bright-blue/40 transition-all duration-300 hover:-translate-y-0.5 btn-shine group"
                >
                  Demander un devis
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-whatsapp text-white font-semibold hover:bg-whatsapp/90 shadow-lg shadow-whatsapp/30 transition-all duration-300 group cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                  {PHONE_MAIN}
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column - Procedures Card - 45% */}
          <div className="lg:col-span-5">
            <ScrollReveal delay={200}>
              <div className="relative">
                {/* Background decoration */}
                <div className="absolute -top-3 -left-3 w-full h-full rounded-2xl bg-gradient-to-br from-primary-teal/10 to-bright-blue/10 -z-10"></div>

                <div className="bg-light-bg rounded-2xl p-8 lg:p-10 border border-border/50">
                  {/* Badge */}
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-text-gray text-xs font-medium mb-5 border border-border/50">
                    <FileText className="w-3 h-3 text-primary-teal" />
                    Devis • Contrat • Facture
                  </span>

                  {/* Card Heading */}
                  <h2 className="text-2xl font-bold text-primary-navy mb-3">
                    Une équipe structurée, des procédures claires.
                  </h2>

                  {/* Card Paragraph */}
                  <p className="text-text-gray text-sm mb-6">
                    Notre objectif : offrir un service fiable, planifié et contrôlé
                    — adapté aux exigences des entreprises.
                  </p>

                  {/* Feature Rows */}
                  <div className="space-y-2 mb-8">
                    {procedureFeatures.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-white border-l-4 border-bright-blue shadow-sm"
                      >
                        <div className="w-2 h-2 rounded-full bg-bright-blue flex-shrink-0"></div>
                        <span className="text-sm font-medium text-primary-navy">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/50">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl md:text-[28px] font-bold text-primary-teal">
                          {stat.value}
                        </div>
                        <div className="text-[11px] text-text-gray uppercase tracking-wider font-medium">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
