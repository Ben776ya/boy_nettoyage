"use client";

import Image from "next/image";
import { ArrowRight, Phone, Star, Shield, Clock, CheckCircle, Users, Award } from "lucide-react";
import { PHONE_NUMBER, PHONE_MAIN, COMPANY_NAME, COMPANY_TAGLINE, YEAR_FOUNDED, YEARS_EXPERIENCE } from "@/lib/utils";
import ScrollReveal from "./ScrollReveal";

export default function HeroSection() {
  return (
    <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute top-20 left-0 w-96 h-96 bg-primary-teal/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-bright-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial opacity-50"></div>

      {/* Floating shapes */}
      <div className="absolute top-32 right-20 w-20 h-20 border-2 border-primary-teal/20 rounded-full animate-float-slow hidden lg:block"></div>
      <div className="absolute bottom-32 left-20 w-12 h-12 bg-bright-blue/10 rounded-xl rotate-45 animate-float hidden lg:block"></div>
      <div className="absolute top-1/2 right-10 w-6 h-6 bg-green-cta/20 rounded-full animate-bounce-gentle hidden lg:block"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <ScrollReveal>
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-lg shadow-primary-navy/5 border border-border/50 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-xs font-medium text-primary-navy">
                  Excellence depuis {YEAR_FOUNDED} • Casablanca
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-navy leading-[1.1] mb-6 text-shadow">
                <span className="relative inline-block">
                  <span className="gradient-text-animated">Propreté</span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                    <path d="M2 8C50 2 150 2 198 8" stroke="url(#gradient)" strokeWidth="4" strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#0D7377"/>
                        <stop offset="100%" stopColor="#2563EB"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                {" "}& Hygiène
                <br />
                <span className="text-primary-teal">Professionnelle</span>
              </h1>

              {/* Tagline */}
              <p className="text-text-gray text-lg leading-relaxed mb-8 max-w-xl">
                {COMPANY_TAGLINE}. Services premium de nettoyage pour{" "}
                <span className="text-primary-navy font-medium">particuliers</span> et{" "}
                <span className="text-primary-navy font-medium">professionnels</span> à Casablanca et partout au Maroc.
              </p>

              {/* Features/USPs */}
              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  { icon: Users, text: "Équipe Qualifiée" },
                  { icon: Clock, text: "Disponible 24/7" },
                  { icon: Award, text: "Produits Premium" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2 text-sm text-text-gray">
                    <div className="w-8 h-8 rounded-lg bg-primary-teal/10 flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-primary-teal" />
                    </div>
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#devis"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary-teal to-bright-blue text-white font-semibold shadow-xl shadow-primary-teal/25 hover:shadow-2xl hover:shadow-primary-teal/30 transition-all duration-300 hover:-translate-y-1 btn-shine"
                >
                  Devis gratuit
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white border-2 border-primary-navy/10 text-primary-navy font-semibold hover:border-primary-teal hover:text-primary-teal transition-all duration-300 hover:shadow-lg"
                >
                  <Phone className="w-5 h-5 group-hover:animate-bounce-gentle" />
                  {PHONE_MAIN}
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column - Image */}
          <ScrollReveal delay={200}>
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-3xl border-2 border-dashed border-primary-teal/20 animate-spin-slow"></div>

              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary-navy/20">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop"
                    alt="Équipe BOY NETTOYAGE PRO - Services de nettoyage professionnel"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/40 via-transparent to-transparent"></div>
                </div>

                {/* Floating Badge - Top Right - Years Experience */}
                <div className="absolute top-4 right-4 glass rounded-2xl px-4 py-3 text-center animate-float">
                  <span className="text-3xl font-bold gradient-text">{YEARS_EXPERIENCE}</span>
                  <p className="text-xs uppercase tracking-wider text-text-gray font-medium">Ans d&apos;expérience</p>
                </div>

                {/* Floating Badge - Bottom Left - Clients */}
                <div className="absolute bottom-4 left-4 glass rounded-2xl px-4 py-3 animate-float-slow">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <Image
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                        alt="Client satisfait"
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full border-2 border-white object-cover"
                      />
                      <Image
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
                        alt="Client satisfait"
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full border-2 border-white object-cover"
                      />
                      <Image
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                        alt="Client satisfait"
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full border-2 border-white object-cover"
                      />
                      <div className="w-8 h-8 rounded-full bg-primary-teal text-white text-xs font-bold flex items-center justify-center border-2 border-white">
                        +
                      </div>
                    </div>
                    <div>
                      <span className="text-lg font-bold text-primary-navy">20k+</span>
                      <p className="text-xs text-text-gray">Clients satisfaits</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust badge */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-green-cta to-emerald-600 rounded-2xl shadow-xl hidden sm:flex items-center justify-center rotate-12 hover:rotate-0 transition-transform duration-300">
                <div className="text-center text-white -rotate-12 hover:rotate-0 transition-transform duration-300">
                  <span className="text-2xl font-bold">100%</span>
                  <p className="text-[10px] uppercase tracking-wider">Satisfaction</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
