"use client";

import { Heart, Shield, Crosshair, Users, Sparkles } from "lucide-react";
import ScrollReveal from "../ScrollReveal";

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "Nous aimons ce que nous faisons et cela se voit dans chaque intervention",
    iconBg: "from-red-100 to-pink-100",
    iconColor: "text-red-500",
  },
  {
    icon: Shield,
    title: "Intégrité",
    description: "Honnêteté et transparence dans toutes nos relations avec nos clients",
    iconBg: "from-blue-100 to-indigo-100",
    iconColor: "text-bright-blue",
  },
  {
    icon: Crosshair,
    title: "Excellence",
    description: "Nous visons toujours le plus haut niveau de qualité possible",
    iconBg: "from-teal-100 to-cyan-100",
    iconColor: "text-primary-teal",
  },
  {
    icon: Users,
    title: "Respect",
    description: "Respect de vos espaces, de votre temps et de votre confiance",
    iconBg: "from-blue-100 to-sky-100",
    iconColor: "text-blue-500",
  },
];

export default function AboutValues() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-white">
      {/* Background decorations */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-bright-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bright-blue/10 text-bright-blue text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-4 h-4" />
              Nos Valeurs
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-primary-navy mb-4">
              Ce qui nous <span className="text-bright-blue">guide</span>
            </h2>
            <p className="text-text-gray text-lg max-w-xl mx-auto">
              Nos valeurs sont le fondement de chaque interaction avec nos clients.
            </p>
          </div>
        </ScrollReveal>

        {/* Four Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <ScrollReveal key={value.title} delay={index * 100}>
              <div className="group bg-white rounded-2xl p-7 border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className={`w-6 h-6 ${value.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-primary-navy mb-3">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-text-gray text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
