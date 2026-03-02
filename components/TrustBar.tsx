"use client";

import { BadgeCheck, Clock, Star, Award, Users, Shield } from "lucide-react";
import { YEARS_EXPERIENCE } from "@/lib/utils";
import ScrollReveal from "./ScrollReveal";

export default function TrustBar() {
  const items = [
    { icon: Users, label: "Personnel", value: "Qualifié" },
    { icon: Clock, label: "Disponible", value: "24/7" },
    { icon: Award, label: "Produits", value: "Premium" },
    { icon: Shield, label: "Discrétion", value: "Totale" },
    { icon: Star, label: "Satisfaction", value: "100%" },
    { icon: BadgeCheck, label: "Expérience", value: YEARS_EXPERIENCE },
  ];

  return (
    <section className="relative py-6 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-navy via-primary-teal to-bright-blue"></div>

      {/* Animated pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-pattern-light"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-12">
            {items.map((item, index) => (
              <div
                key={item.label}
                className="flex items-center gap-3 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-white">
                  <p className="text-lg font-bold leading-none">{item.value}</p>
                  <p className="text-xs text-white/70 font-medium">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
    </section>
  );
}
