"use client";

import { Sparkles, ArrowRight, MessageCircle } from "lucide-react";
import { PHONE_MAIN, WHATSAPP_URL } from "@/lib/utils";
import ScrollReveal from "../ScrollReveal";

export default function AboutCTA() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-[#F0F8F4]">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-primary-teal/10 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-bright-blue/10 rounded-full blur-3xl -translate-y-1/2"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="bg-white rounded-3xl p-10 md:p-14 shadow-2xl shadow-primary-navy/10 border border-border text-center">
            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-bright-blue to-indigo-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-bright-blue/30">
              <Sparkles className="w-7 h-7 text-white" />
            </div>

            {/* Heading */}
            <h2 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-primary-navy mb-4 leading-tight">
              Prêt à Donner à Votre Espace<br className="hidden md:block" />
              La Propreté Qu&apos;il Mérite ?
            </h2>

            {/* Subtitle */}
            <p className="text-text-gray text-lg mb-10 max-w-lg mx-auto">
              Rejoignez les milliers de clients satisfaits qui nous font confiance.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/#devis"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-bright-blue text-white font-semibold shadow-lg shadow-bright-blue/30 hover:shadow-xl hover:shadow-bright-blue/40 transition-all duration-300 hover:-translate-y-0.5 btn-shine group"
              >
                Réserver maintenant
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-whatsapp text-white font-semibold shadow-lg shadow-whatsapp/30 hover:bg-whatsapp/90 transition-all duration-300 group cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                {PHONE_MAIN}
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
