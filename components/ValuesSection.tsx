"use client";

import { Heart, Shield, Target, Handshake, Sparkles } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const values = [
  {
    icon: Heart,
    title: "Passion",
    description:
      "Nous aimons ce que nous faisons et cela se voit dans chaque intervention",
    gradient: "from-red-500 to-pink-500",
    bgGradient: "from-red-50 to-pink-50",
    shadowColor: "shadow-red-500/20",
  },
  {
    icon: Shield,
    title: "Intégrité",
    description:
      "Honnêteté et transparence dans toutes nos relations avec nos clients",
    gradient: "from-blue-500 to-indigo-500",
    bgGradient: "from-blue-50 to-indigo-50",
    shadowColor: "shadow-blue-500/20",
  },
  {
    icon: Target,
    title: "Excellence",
    description:
      "Nous visons toujours le plus haut niveau de qualité possible",
    gradient: "from-amber-500 to-orange-500",
    bgGradient: "from-amber-50 to-orange-50",
    shadowColor: "shadow-amber-500/20",
  },
  {
    icon: Handshake,
    title: "Respect",
    description:
      "Respect de vos espaces, de votre temps et de votre confiance",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50",
    shadowColor: "shadow-green-500/20",
  },
];

export default function ValuesSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-light-bg via-white to-light-bg"></div>
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-bright-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-teal/10 to-bright-blue/10 text-primary-teal text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              Nos Valeurs
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-navy mb-4">
              Ce qui nous <span className="gradient-text">guide</span>
            </h2>
            <p className="text-text-gray text-lg max-w-2xl mx-auto">
              Nos valeurs sont le fondement de chaque interaction avec nos
              clients et de chaque intervention que nous réalisons.
            </p>
          </div>
        </ScrollReveal>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <ScrollReveal key={value.title} delay={index * 100}>
              <div className="group relative bg-white rounded-3xl p-6 border border-border/50 hover:shadow-2xl transition-all duration-500 h-full overflow-hidden card-hover">
                {/* Gradient accent on top */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.bgGradient} opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>

                <div className="relative">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-5 shadow-lg ${value.shadowColor} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-navy mb-3">
                    {value.title}
                  </h3>
                  <p className="text-text-gray leading-relaxed">{value.description}</p>
                </div>

                {/* Decorative corner */}
                <div className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl ${value.bgGradient} rounded-tl-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
