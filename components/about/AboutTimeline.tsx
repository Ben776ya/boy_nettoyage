"use client";

import { Rocket, Target, Award, Users, CheckCircle, Calendar } from "lucide-react";
import { COMPANY_NAME } from "@/lib/utils";
import ScrollReveal from "../ScrollReveal";

const milestones = [
  {
    badge: "Création",
    badgeColor: "bg-green-cta text-white",
    content: `Fondation de ${COMPANY_NAME} à Casablanca avec une vision claire : offrir un nettoyage professionnel de qualité.`,
    bullets: [],
    isLeft: true,
    icon: Calendar,
    iconColor: "from-green-cta to-emerald-500",
  },
  {
    badge: "Marchés cibles",
    badgeColor: "bg-bright-blue text-white",
    content: "",
    bullets: [
      "Particuliers ayant besoin de services de nettoyage spécifiques",
      "Entreprises souhaitant déléguer leurs besoins de nettoyage pour se concentrer sur leur activité principale",
    ],
    isLeft: false,
    icon: Target,
    iconColor: "from-bright-blue to-indigo-500",
  },
  {
    badge: "Accomplissements",
    badgeColor: "bg-primary-teal text-white",
    content: "",
    bullets: [
      "Une réputation solide basée sur la qualité et la fiabilité de nos services",
      "Fidélisation d'une clientèle diverse grâce à des services personnalisés et flexibles",
    ],
    isLeft: true,
    icon: Award,
    iconColor: "from-primary-teal to-cyan-500",
  },
  {
    badge: "Projets futurs",
    badgeColor: "bg-primary-navy text-white",
    content: "",
    bullets: [
      "Expansion de nos services à de nouvelles régions",
      "Diversification des services proposés",
      "Adoption de technologies innovantes pour renforcer le processus de nettoyage",
    ],
    isLeft: false,
    icon: Rocket,
    iconColor: "from-primary-navy to-slate-600",
  },
];

export default function AboutTimeline() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-light-bg">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-bright-blue/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bright-blue/10 text-bright-blue text-xs font-semibold uppercase tracking-wider mb-4">
              <Calendar className="w-4 h-4" />
              Notre Parcours
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-primary-navy mb-4">
              Une histoire de <span className="text-bright-blue">croissance</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-cta via-bright-blue via-primary-teal to-primary-navy -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-8 md:space-y-0">
            {milestones.map((milestone, index) => (
              <ScrollReveal
                key={milestone.badge}
                delay={index * 150}
              >
                <div
                  className={`relative md:flex md:items-start ${
                    milestone.isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } md:mb-16`}
                >
                  {/* Content Card */}
                  <div className="md:w-1/2 md:px-8">
                    <div
                      className={`relative bg-white rounded-2xl p-7 shadow-lg shadow-primary-navy/5 border border-border ${
                        milestone.isLeft ? "md:mr-auto" : "md:ml-auto"
                      } md:max-w-md group hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
                    >
                      {/* Badge */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${milestone.iconColor} flex items-center justify-center shadow-lg`}>
                          <milestone.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className={`px-3 py-1.5 rounded-full ${milestone.badgeColor} text-xs font-semibold`}>
                          {milestone.badge}
                        </span>
                      </div>

                      {/* Content */}
                      {milestone.content && (
                        <p className="text-text-gray leading-relaxed mb-4">
                          {milestone.content}
                        </p>
                      )}

                      {/* Bullet Points */}
                      {milestone.bullets.length > 0 && (
                        <ul className="space-y-3">
                          {milestone.bullets.map((bullet, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-text-gray">
                              <div className="w-5 h-5 rounded-full bg-bright-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <div className="w-2 h-2 rounded-full bg-bright-blue"></div>
                              </div>
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Footer */}
                      <div className="flex items-center gap-2 mt-5 pt-4 border-t border-border/50">
                        <span className="w-2 h-2 rounded-full bg-green-cta animate-pulse"></span>
                        <span className="text-xs text-text-gray font-medium">
                          Étape clé • {COMPANY_NAME}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className={`absolute left-1/2 top-5 w-5 h-5 rounded-full bg-gradient-to-br ${milestone.iconColor} border-4 border-white shadow-lg -translate-x-1/2 hidden md:flex items-center justify-center z-10`}>
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                  </div>

                  {/* Empty space for other side */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
