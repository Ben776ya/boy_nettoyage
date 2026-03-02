"use client";

import {
  Phone,
  Clock,
  MapPin,
  MessageCircle,
  ArrowUpRight,
  Shield,
  HeartHandshake,
  Sparkles,
  Building2,
  Zap,
  Mail,
} from "lucide-react";
import {
  PHONE_NUMBER,
  PHONE_MAIN,
  PHONE_SECONDARY,
  PHONE_FIXED,
  WHATSAPP_URL,
  COMPANY_NAME,
  EMAIL_PRIMARY,
  ADDRESS,
  OPERATING_HOURS,
} from "@/lib/utils";
import ScrollReveal from "./ScrollReveal";

export default function B2BContactSection() {
  return (
    <section id="contact" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-light-bg to-white"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-bright-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-teal/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-bright-blue text-sm font-semibold mb-4">
                <Building2 className="w-4 h-4" />
                Pour les professionnels
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-navy">
                Engagez une expertise
                <br />
                <span className="gradient-text">à la hauteur de vos exigences</span>
              </h2>
            </div>
            <div className="lg:max-w-md">
              <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-bright-blue before:to-primary-teal before:rounded-full">
                <p className="text-text-gray text-lg">
                  Une assistance dédiée pour les entreprises, syndics, hôtels
                  et gestionnaires d&apos;établissements à Casablanca et partout au Maroc.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Company Info Card */}
          <ScrollReveal>
            <div className="relative bg-gradient-to-br from-primary-navy via-primary-navy to-[#0f2744] rounded-3xl p-6 text-white h-full overflow-hidden group">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary-teal/10 rounded-full blur-2xl"></div>

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-teal to-bright-blue flex items-center justify-center shadow-lg">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="font-bold text-lg">{COMPANY_NAME}</span>
                    <p className="text-xs text-gray-400">Casablanca • Maroc</p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="group/item">
                    <p className="text-[10px] uppercase tracking-wider text-gray-400 mb-1.5 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-whatsapp"></span>
                      WhatsApp / Téléphone
                    </p>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-white hover:text-whatsapp transition-colors cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover/item:bg-whatsapp/20 transition-colors">
                        <MessageCircle className="w-4 h-4" />
                      </div>
                      <span className="font-medium">{PHONE_MAIN}</span>
                    </a>
                  </div>

                  <div className="group/item">
                    <p className="text-[10px] uppercase tracking-wider text-gray-400 mb-1.5 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                      Disponibilité
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-medium">{OPERATING_HOURS}</p>
                        <p className="text-xs text-gray-400">
                          Service d&apos;urgence inclus
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group/item">
                    <p className="text-[10px] uppercase tracking-wider text-gray-400 mb-1.5 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-bright-blue"></span>
                      Adresse
                    </p>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-medium text-sm leading-relaxed">{ADDRESS}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* WhatsApp Card */}
          <ScrollReveal delay={100}>
            <div className="relative bg-white rounded-3xl p-6 border border-border/50 h-full flex flex-col shadow-xl shadow-primary-navy/5 overflow-hidden group card-hover">
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-whatsapp to-green-400"></div>

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-whatsapp/20 to-green-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-7 h-7 text-whatsapp" />
              </div>
              <h3 className="text-xl font-bold text-primary-navy mb-2">
                WhatsApp Business
              </h3>
              <p className="text-text-gray text-sm mb-6 flex-grow">
                Envoyez des photos de vos espaces pour un chiffrage express et
                précis en quelques minutes.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-whatsapp to-green-500 text-white font-medium hover:shadow-lg hover:shadow-whatsapp/30 transition-all duration-300 hover:-translate-y-0.5 btn-shine"
              >
                Démarrer la discussion
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </ScrollReveal>

          {/* Email Card */}
          <ScrollReveal delay={200}>
            <div className="relative bg-white rounded-3xl p-6 border border-border/50 h-full flex flex-col shadow-xl shadow-primary-navy/5 overflow-hidden group card-hover">
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-bright-blue to-indigo-500"></div>

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-bright-blue/20 to-indigo-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-7 h-7 text-bright-blue" />
              </div>
              <h3 className="text-xl font-bold text-primary-navy mb-2">
                Email Professionnel
              </h3>
              <p className="text-text-gray text-sm mb-6 flex-grow">
                Envoyez-nous votre cahier des charges pour un devis détaillé
                et personnalisé.
              </p>
              <a
                href={`mailto:${EMAIL_PRIMARY}`}
                className="inline-flex items-center justify-center gap-2 py-3.5 rounded-xl border-2 border-primary-navy text-primary-navy font-medium hover:bg-primary-navy hover:text-white transition-all duration-300 group/btn"
              >
                {EMAIL_PRIMARY}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Blue Banner */}
        <ScrollReveal>
          <div className="relative bg-gradient-to-r from-bright-blue via-indigo-500 to-bright-blue rounded-3xl p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 overflow-hidden shadow-2xl shadow-bright-blue/20">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-white/5 blur-3xl"></div>

            <div className="relative text-white">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-yellow-300" />
                <span className="text-sm font-medium text-blue-100">Réponse sous 2h</span>
              </div>
              <p className="font-bold text-xl md:text-2xl mb-1">
                Vous préférez un devis formel ?
              </p>
              <p className="text-blue-100">
                Remplissez notre formulaire en ligne pour un chiffrage précis et détaillé.
              </p>
            </div>
            <a
              href="/#devis"
              className="relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-bright-blue font-semibold hover:bg-blue-50 transition-all duration-300 hover:shadow-xl whitespace-nowrap group"
            >
              Demander un devis
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </ScrollReveal>

        {/* Trust Bar */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-border/50">
            <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white shadow-sm border border-border/50">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-teal/20 to-green-100 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary-teal" />
              </div>
              <span className="text-sm font-semibold text-primary-navy">Personnel qualifié</span>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white shadow-sm border border-border/50">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                <HeartHandshake className="w-5 h-5 text-green-600" />
              </div>
              <span className="text-sm font-semibold text-primary-navy">Discrétion & rigueur</span>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white shadow-sm border border-border/50">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                <Clock className="w-5 h-5 text-bright-blue" />
              </div>
              <span className="text-sm font-semibold text-primary-navy">Disponible 24/7</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
