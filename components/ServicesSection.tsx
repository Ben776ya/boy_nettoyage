"use client";

import Image from "next/image";
import {
  Home,
  Building2,
  Factory,
  Hotel,
  Sparkles,
  Shield,
  Users,
  Wrench,
  ArrowRight,
  Check,
  Bug,
  Gem,
  CalendarDays,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    icon: Home,
    title: "Villas & Maisons",
    description: "Nettoyage en profondeur pour villas et maisons. Un intérieur impeccable pour votre confort quotidien.",
    bullets: [
      "Nettoyage complet des pièces",
      "Traitement des sols et surfaces",
      "Désinfection sanitaires",
    ],
    service: "villas-maisons",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-600",
  },
  {
    icon: Building2,
    title: "Bureaux & Commercial",
    description: "Entretien professionnel pour entreprises, showrooms et espaces commerciaux.",
    bullets: [
      "Bureaux & open-spaces",
      "Sanitaires impeccables",
      "Contrat régulier disponible",
    ],
    service: "bureaux-commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-500/10",
    textColor: "text-violet-600",
  },
  {
    icon: Factory,
    title: "Nettoyage Industriel",
    description: "Solutions spécialisées pour usines, entrepôts et sites de production.",
    bullets: [
      "Grandes surfaces industrielles",
      "Équipement professionnel",
      "Normes de sécurité respectées",
    ],
    service: "industriel",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&h=300&fit=crop",
    color: "from-slate-500 to-gray-600",
    bgColor: "bg-slate-500/10",
    textColor: "text-slate-600",
  },
  {
    icon: Hotel,
    title: "Hôtels & Restaurants",
    description: "Standards d'hygiène premium pour l'hôtellerie et la restauration.",
    bullets: [
      "Chambres & parties communes",
      "Cuisines professionnelles",
      "Normes HACCP",
    ],
    service: "hotels-restaurants",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-500/10",
    textColor: "text-amber-600",
  },
  {
    icon: Wrench,
    title: "Fin de Chantier",
    description: "Remise en état complète après travaux de construction ou rénovation.",
    bullets: [
      "Poussières & résidus",
      "Vitres & menuiseries",
      "Prêt à habiter",
    ],
    service: "post-chantier",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-500/10",
    textColor: "text-emerald-600",
  },
  {
    icon: Gem,
    title: "Marbre & Parquet",
    description: "Cristallisation et rénovation pour redonner éclat à vos sols nobles.",
    bullets: [
      "Cristallisation marbre",
      "Vitrification parquet",
      "Polissage professionnel",
    ],
    service: "marbre-parquet",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-500/10",
    textColor: "text-pink-600",
  },
  {
    icon: Bug,
    title: "Dératisation & 3D",
    description: "Lutte contre les nuisibles : rats, cafards, punaises, fourmis et autres.",
    bullets: [
      "Dératisation efficace",
      "Désinsectisation complète",
      "Traitement préventif",
    ],
    service: "deratisation",
    image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=400&h=300&fit=crop",
    color: "from-red-500 to-rose-600",
    bgColor: "bg-red-500/10",
    textColor: "text-red-600",
  },
  {
    icon: Users,
    title: "Personnel Qualifié",
    description: "Mise à disposition de femmes de ménage, agents de sécurité et hôtesses.",
    bullets: [
      "Personnel formé",
      "Service discret & rigoureux",
      "Flexibilité totale",
    ],
    service: "personnel",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
    color: "from-sky-500 to-blue-500",
    bgColor: "bg-sky-500/10",
    textColor: "text-sky-600",
  },
  {
    icon: CalendarDays,
    title: "Nettoyage Événementiel",
    description: "Nettoyage avant, pendant et après vos événements professionnels.",
    bullets: [
      "Préparation des espaces",
      "Entretien pendant l'événement",
      "Remise en état après",
    ],
    service: "evenementiel",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop",
    color: "from-indigo-500 to-violet-500",
    bgColor: "bg-indigo-500/10",
    textColor: "text-indigo-600",
  },
];

export default function ServicesSection() {
  const scrollToForm = (service: string) => {
    const form = document.getElementById("devis");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        const serviceSelect = document.querySelector(
          'select[name="service"]'
        ) as HTMLSelectElement;
        if (serviceSelect) {
          serviceSelect.value = service;
          serviceSelect.dispatchEvent(new Event("change", { bubbles: true }));
        }
      }, 500);
    }
  };

  return (
    <section id="services" className="relative py-20 md:py-28 overflow-hidden">
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
              Nos Services
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-navy mb-4">
              Une expertise complète pour{" "}
              <span className="gradient-text">tous vos besoins</span>
            </h2>
            <p className="text-text-gray text-lg max-w-2xl mx-auto">
              Particuliers ou professionnels, découvrez notre gamme complète de services
              de nettoyage et d&apos;hygiène à Casablanca et partout au Maroc.
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 100}>
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
                  <button
                    onClick={() => scrollToForm(service.service)}
                    className={`group/btn w-full py-3 rounded-xl bg-gradient-to-r ${service.color} text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 btn-shine`}
                  >
                    Demander un devis
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
