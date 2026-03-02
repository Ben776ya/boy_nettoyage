"use client";

import { Sparkles, ArrowRight, Phone, Star, CheckCircle } from "lucide-react";
import { PHONE_NUMBER, COMPANY_NAME } from "@/lib/utils";
import ScrollReveal from "./ScrollReveal";

export default function CTASection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-light-bg via-white to-light-bg"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-primary-teal/5 via-bright-blue/5 to-primary-teal/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative bg-white rounded-[2.5rem] shadow-2xl shadow-primary-navy/10 border border-border/50 p-8 md:p-12 lg:p-16 text-center max-w-4xl mx-auto overflow-hidden">
            {/* Decorative gradient corners */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary-teal/10 to-transparent rounded-br-[100px]"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-bright-blue/10 to-transparent rounded-tl-[100px]"></div>

            {/* Floating decorative elements */}
            <div className="absolute top-8 right-8 md:right-16 animate-float">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-100 to-amber-100 flex items-center justify-center shadow-lg">
                <Star className="w-6 h-6 text-yellow-500 fill-yellow-400" />
              </div>
            </div>
            <div className="absolute bottom-8 left-8 md:left-16 animate-float" style={{ animationDelay: '1s' }}>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center shadow-lg">
                <CheckCircle className="w-5 h-5 text-green-500" />
              </div>
            </div>

            {/* Content */}
            <div className="relative">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-bright-blue to-indigo-500 shadow-xl shadow-bright-blue/30">
                <Sparkles className="w-10 h-10 text-white" />
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 text-sm font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Devis gratuit en 2 minutes
              </div>

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-navy mb-4">
                Prêt à découvrir la différence{" "}
                <span className="gradient-text">{COMPANY_NAME}</span> ?
              </h2>

              {/* Subtitle */}
              <p className="text-text-gray text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                Rejoignez les milliers de clients satisfaits qui nous font confiance
                pour des espaces impeccables.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#devis"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-green-cta to-emerald-600 text-white font-semibold shadow-xl shadow-green-cta/30 hover:shadow-2xl hover:shadow-green-cta/40 transition-all duration-300 hover:-translate-y-1 btn-shine group"
                >
                  Réserver maintenant
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-primary-navy text-primary-navy font-semibold hover:bg-primary-navy hover:text-white transition-all duration-300 group"
                >
                  <Phone className="w-5 h-5 group-hover:animate-bounce" />
                  {PHONE_NUMBER}
                </a>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center justify-center gap-6 mt-10 pt-8 border-t border-border/50">
                <div className="flex items-center gap-2 text-sm text-text-gray">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Sans engagement</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-text-gray">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Réponse rapide</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-text-gray">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>100% satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
