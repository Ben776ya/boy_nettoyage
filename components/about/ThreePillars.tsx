"use client";

import { Eye, Target, Flag, Sparkles } from "lucide-react";
import ScrollReveal from "../ScrollReveal";

const pillars = [
  {
    icon: Eye,
    title: "Notre Vision",
    description: "Offrir des services de nettoyage fiables et de haute qualité pour tous types d'espaces.",
    bullets: [
      "Être une référence dans le nettoyage professionnel.",
      "Offrir une qualité constante et durable.",
      "Valoriser la confiance et la satisfaction client.",
    ],
    iconBg: "from-primary-teal/20 to-teal-100",
    iconColor: "text-primary-teal",
    dotColor: "bg-primary-teal",
  },
  {
    icon: Target,
    title: "Notre Mission",
    description: "Garantir des environnements propres, sains et professionnels grâce à une équipe qualifiée.",
    bullets: [
      "Assurer des services de nettoyage efficaces.",
      "Utiliser des méthodes modernes et sûres.",
      "Répondre aux besoins de chaque client.",
    ],
    iconBg: "from-bright-blue/20 to-blue-100",
    iconColor: "text-bright-blue",
    dotColor: "bg-bright-blue",
  },
  {
    icon: Flag,
    title: "Notre Objectif",
    description: "Satisfaire nos clients par des prestations efficaces, régulières et sur mesure.",
    bullets: [
      "Maintenir des espaces propres et sains.",
      "Construire des partenariats durables.",
      "Garantir un service fiable et régulier.",
    ],
    iconBg: "from-green-cta/20 to-emerald-100",
    iconColor: "text-green-cta",
    dotColor: "bg-green-cta",
  },
];

export default function ThreePillars() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-light-bg">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary-teal/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-bright-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bright-blue/10 text-bright-blue text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-4 h-4" />
              Notre Engagement
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-primary-navy mb-4">
              Ce qui nous <span className="text-primary-teal">définit</span>
            </h2>
            <p className="text-text-gray text-lg max-w-xl mx-auto">
              Trois piliers fondamentaux guident chacune de nos interventions.
            </p>
          </div>
        </ScrollReveal>

        {/* Three Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => (
            <ScrollReveal key={pillar.title} delay={index * 100}>
              <div className="group bg-white rounded-2xl p-8 border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.iconBg} flex items-center justify-center mb-5`}>
                  <pillar.icon className={`w-6 h-6 ${pillar.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="text-[22px] font-bold text-primary-navy mb-3">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-text-gray text-[15px] leading-relaxed mb-4">
                  {pillar.description}
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-border my-4"></div>

                {/* Bullet Points */}
                <ul className="space-y-3 flex-grow">
                  {pillar.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full ${pillar.dotColor} flex-shrink-0 mt-2`}></div>
                      <span className="text-text-gray text-sm leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
