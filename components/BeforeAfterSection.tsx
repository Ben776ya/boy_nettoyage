"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import ScrollReveal from "./ScrollReveal";

interface ComparisonItem {
  title: string;
  beforeDesc: string;
  afterDesc: string;
  beforeImage: string;
  afterImage: string;
  rating: number;
}

const comparisons: ComparisonItem[] = [
  {
    title: "Canapé en tissu",
    beforeDesc: "Taches tenaces, couleurs ternes",
    afterDesc: "Comme neuf, couleurs ravivées",
    beforeImage: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=400&fit=crop&sat=-100&bri=-10",
    afterImage: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=400&fit=crop",
    rating: 5,
  },
  {
    title: "Matelas Premium",
    beforeDesc: "Taches jaunes, acariens, odeurs",
    afterDesc: "Désinfecté, hygiénique, frais",
    beforeImage: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=400&fit=crop&sat=-100&bri=-10",
    afterImage: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=400&fit=crop",
    rating: 5,
  },
  {
    title: "Tapis Berbère",
    beforeDesc: "Poussière incrustée, couleurs fanées",
    afterDesc: "Fibres nettoyées, couleurs vives",
    beforeImage: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=400&fit=crop&sat=-100&bri=-10",
    afterImage: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=400&fit=crop",
    rating: 5,
  },
];

export default function BeforeAfterSection() {
  return (
    <section id="resultats" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-light-bg via-white to-light-bg"></div>
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary-teal/5 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-bright-blue/5 rounded-full blur-3xl -translate-y-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-700 text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              Résultats visibles
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-navy mb-4">
              La transformation{" "}
              <span className="gradient-text">parle d&apos;elle-même</span>
            </h2>
            <p className="text-text-gray text-lg max-w-2xl mx-auto">
              Découvrez la différence spectaculaire qu&apos;apporte notre nettoyage
              professionnel. Cliquez sur les boutons pour comparer !
            </p>
          </div>
        </ScrollReveal>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {comparisons.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 150}>
              <ComparisonCard item={item} />
            </ScrollReveal>
          ))}
        </div>

        {/* Stats Row */}
        <ScrollReveal>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "100%", label: "Satisfaction client" },
              { value: "24h", label: "Délai d'intervention" },
              { value: "10+", label: "Années d'expérience" },
              { value: "20k+", label: "Projets réalisés" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-2xl bg-white shadow-lg shadow-primary-navy/5 border border-border/50 card-hover">
                <p className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</p>
                <p className="text-sm text-text-gray">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function ComparisonCard({ item }: { item: ComparisonItem }) {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-xl shadow-primary-navy/10 border border-border/50 card-hover">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {/* Before Image */}
        <div
          className={cn(
            "absolute inset-0 transition-opacity duration-500",
            showAfter ? "opacity-0" : "opacity-100"
          )}
        >
          <Image
            src={item.beforeImage}
            alt={`${item.title} - Avant`}
            fill
            className="object-cover grayscale"
          />
          {/* Before badge */}
          <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-gray-800/90 text-white text-xs font-bold shadow-lg">
            AVANT
          </div>
        </div>

        {/* After Image */}
        <div
          className={cn(
            "absolute inset-0 transition-opacity duration-500",
            showAfter ? "opacity-100" : "opacity-0"
          )}
        >
          <Image
            src={item.afterImage}
            alt={`${item.title} - Après`}
            fill
            className="object-cover"
          />
          {/* After badge */}
          <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold shadow-lg">
            APRÈS
          </div>
        </div>

        {/* Toggle Buttons */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          <button
            onClick={() => setShowAfter(false)}
            className={cn(
              "px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 cursor-pointer",
              !showAfter
                ? "bg-gray-800 text-white shadow-lg"
                : "bg-white/90 text-gray-700 hover:bg-white shadow-md"
            )}
          >
            Avant
          </button>
          <button
            onClick={() => setShowAfter(true)}
            className={cn(
              "px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 cursor-pointer",
              showAfter
                ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg"
                : "bg-white/90 text-gray-700 hover:bg-white shadow-md"
            )}
          >
            Après
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-primary-navy">{item.title}</h3>
          <div className="flex gap-0.5">
            {[...Array(item.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className={cn(
            "p-3 rounded-xl transition-all duration-300",
            !showAfter ? "bg-gray-200 ring-2 ring-gray-400" : "bg-gray-100"
          )}>
            <p className="text-[10px] uppercase tracking-wider text-text-gray font-semibold mb-1">Avant</p>
            <p className="text-sm text-text-gray">{item.beforeDesc}</p>
          </div>
          <div className={cn(
            "p-3 rounded-xl transition-all duration-300",
            showAfter ? "bg-gradient-to-br from-green-100 to-emerald-100 ring-2 ring-green-400" : "bg-gradient-to-br from-green-50 to-emerald-50"
          )}>
            <p className="text-[10px] uppercase tracking-wider text-green-600 font-semibold mb-1">Après</p>
            <p className="text-sm text-green-700">{item.afterDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
