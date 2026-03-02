"use client";

import { Star, Quote, MapPin } from "lucide-react";
import { TESTIMONIALS, COMPANY_NAME } from "@/lib/utils";
import ScrollReveal from "./ScrollReveal";

export default function TestimonialsSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-light-bg to-white"></div>
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary-teal/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-bright-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-100 to-amber-100 text-amber-700 text-sm font-semibold mb-4">
              <Star className="w-4 h-4 fill-amber-500" />
              Témoignages clients
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-navy mb-4">
              Ce que disent{" "}
              <span className="gradient-text">nos clients</span>
            </h2>
            <p className="text-text-gray text-lg max-w-2xl mx-auto">
              La satisfaction de nos clients est notre priorité absolue.
              Découvrez leurs témoignages.
            </p>
          </div>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index * 100}>
              <div className="group relative bg-white rounded-3xl p-8 border border-border/50 shadow-xl shadow-primary-navy/5 hover:shadow-2xl transition-all duration-500 h-full flex flex-col card-hover overflow-hidden">
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Quote icon */}
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-100 to-yellow-100 flex items-center justify-center mb-6">
                  <Quote className="w-6 h-6 text-amber-500" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-text-gray leading-relaxed mb-6 flex-grow italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author info */}
                <div className="flex items-center gap-3 pt-6 border-t border-border/50">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-teal to-bright-blue flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-primary-navy">
                      {testimonial.name}
                    </p>
                    <div className="flex items-center gap-1 text-sm text-text-gray">
                      <MapPin className="w-3 h-3" />
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Trust badge */}
        <ScrollReveal>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-white shadow-lg border border-border/50">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <div className="h-8 w-px bg-border"></div>
              <div className="text-left">
                <p className="font-bold text-primary-navy">Note moyenne 5/5</p>
                <p className="text-sm text-text-gray">Basée sur +20 000 clients</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
