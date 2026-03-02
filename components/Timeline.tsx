"use client";

import { COMPANY_NAME, YEAR_FOUNDED } from "@/lib/utils";
import { Calendar, Target, Award, Rocket, CheckCircle, Users, Building2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const timelineItems = [
  {
    badge: "Création",
    year: YEAR_FOUNDED,
    icon: Calendar,
    items: [
      "Fondation de l'entreprise à Casablanca",
      "Spécialisation dans le nettoyage résidentiel",
    ],
    color: "from-blue-500 to-indigo-500",
    isLeft: true,
  },
  {
    badge: "Nos marchés",
    year: null,
    icon: Target,
    items: [
      "Particuliers : villas, appartements, copropriétés",
      "Professionnels : bureaux, industrie, hôtellerie",
      "Services spécialisés : dératisation, désinsectisation",
    ],
    color: "from-green-500 to-emerald-500",
    isLeft: false,
  },
  {
    badge: "Nos atouts",
    year: null,
    icon: Award,
    items: [
      "Réputation solide basée sur la qualité et la fiabilité",
      "Fidélisation d'une clientèle diverse et exigeante",
      "Personnel qualifié, discret et rigoureux",
    ],
    color: "from-amber-500 to-orange-500",
    isLeft: true,
  },
  {
    badge: "Avenir",
    year: null,
    icon: Rocket,
    items: [
      "Expansion à de nouvelles régions du Maroc",
      "Diversification des services proposés",
      "Adoption de technologies et méthodes innovantes",
    ],
    color: "from-purple-500 to-pink-500",
    isLeft: false,
  },
];

export default function Timeline() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-light-bg to-white"></div>
      <div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-primary-teal/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-teal/10 to-bright-blue/10 text-primary-teal text-sm font-semibold mb-4">
              <Calendar className="w-4 h-4" />
              Notre Parcours
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-navy mb-4">
              Depuis {YEAR_FOUNDED}, une{" "}
              <span className="gradient-text">croissance continue</span>
            </h2>
            <p className="text-text-gray text-lg max-w-2xl mx-auto">
              Découvrez les étapes clés qui ont façonné {COMPANY_NAME}
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line - Gradient */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-green-500 via-amber-500 to-purple-500 -translate-x-1/2 hidden md:block rounded-full"></div>

          <div className="space-y-8 md:space-y-0">
            {timelineItems.map((item, index) => (
              <ScrollReveal key={item.badge} delay={index * 150}>
                <div
                  className={`relative md:flex md:items-center ${
                    item.isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } md:mb-16`}
                >
                  {/* Content Card */}
                  <div className="md:w-1/2 md:px-8">
                    <div
                      className={`relative bg-white rounded-3xl p-6 shadow-xl shadow-primary-navy/5 border border-border/50 ${
                        item.isLeft ? "md:mr-auto" : "md:ml-auto"
                      } md:max-w-md group hover:shadow-2xl transition-all duration-300 overflow-hidden`}
                    >
                      {/* Gradient accent */}
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`}></div>

                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="px-3 py-1 rounded-full bg-gradient-to-r from-gray-100 to-gray-50 text-text-gray text-xs font-semibold">
                          {item.badge}
                        </span>
                      </div>

                      {item.year && (
                        <div className="text-4xl font-bold gradient-text mb-4">
                          {item.year}
                        </div>
                      )}

                      {item.items.length > 0 && (
                        <ul className="space-y-3">
                          {item.items.map((listItem, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-sm text-text-gray"
                            >
                              <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                <CheckCircle className="w-3 h-3 text-white" />
                              </div>
                              {listItem}
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className="flex items-center gap-2 mt-5 pt-4 border-t border-border/50">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-xs text-text-gray font-medium">
                          {COMPANY_NAME}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className={`absolute left-1/2 top-6 w-6 h-6 rounded-full bg-gradient-to-br ${item.color} border-4 border-white shadow-lg -translate-x-1/2 hidden md:flex items-center justify-center`}>
                    <div className="w-2 h-2 rounded-full bg-white"></div>
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
