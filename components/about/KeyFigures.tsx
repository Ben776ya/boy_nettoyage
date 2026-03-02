"use client";

import { User, Users, CheckCircle, Clock, ArrowRight, TrendingUp } from "lucide-react";
import ScrollReveal from "../ScrollReveal";

const figures = [
  {
    icon: User,
    value: "10+",
    label: "Années d'expérience",
    iconBg: "from-bright-blue to-indigo-500",
  },
  {
    icon: Users,
    value: "20,000+",
    label: "Clients satisfaits",
    iconBg: "from-primary-teal to-cyan-500",
  },
  {
    icon: CheckCircle,
    value: "Qualité",
    label: "Résultats constants",
    iconBg: "from-green-cta to-emerald-500",
  },
  {
    icon: Clock,
    value: "24-48h",
    label: "Intervention rapide",
    iconBg: "from-amber-500 to-orange-500",
  },
];

export default function KeyFigures() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-white">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary-teal/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - 60% */}
          <div className="lg:col-span-7">
            <ScrollReveal>
              {/* Badge */}
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bright-blue/10 text-bright-blue text-xs font-semibold uppercase tracking-wider mb-6">
                <TrendingUp className="w-4 h-4" />
                Notre Impact
              </span>

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-primary-navy mb-6 leading-tight">
                Une propreté{" "}
                <span className="text-bright-blue">exceptionnelle</span> pour tous
              </h2>

              {/* Paragraph */}
              <p className="text-text-gray text-lg leading-relaxed max-w-xl">
                Nous mettons à votre service une équipe qualifiée et expérimentée,
                engagée à offrir des prestations de nettoyage fiables, efficaces et
                adaptées à vos besoins. Grâce à notre savoir-faire et à notre organisation
                rigoureuse, nous assurons un environnement propre, sain et agréable.
              </p>
            </ScrollReveal>
          </div>

          {/* Right Column - Key Figures Card - 40% */}
          <div className="lg:col-span-5">
            <ScrollReveal delay={200}>
              <div className="bg-white rounded-2xl p-8 shadow-xl shadow-primary-navy/10 border border-border">
                {/* Card Title */}
                <h3 className="text-xl font-bold text-primary-navy mb-6">
                  Chiffres clés
                </h3>

                {/* Metric Rows */}
                <div className="space-y-3 mb-6">
                  {figures.map((figure, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 rounded-xl bg-light-bg border border-border/50 group hover:shadow-md transition-all duration-300"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${figure.iconBg} flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <figure.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary-navy">
                          {figure.value}
                        </div>
                        <div className="text-sm text-text-gray">
                          {figure.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href="/#devis"
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-bright-blue text-white font-semibold shadow-lg shadow-bright-blue/30 hover:shadow-xl hover:shadow-bright-blue/40 transition-all duration-300 hover:-translate-y-0.5 btn-shine group"
                >
                  Demander un devis
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
