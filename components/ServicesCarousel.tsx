"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { FEATURED_SERVICES } from "@/lib/services-data";
import ScrollReveal from "./ScrollReveal";

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(FEATURED_SERVICES.length / itemsPerPage);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const visibleServices = FEATURED_SERVICES.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

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

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-border flex items-center justify-center text-primary-navy hover:bg-primary-teal hover:text-white transition-all duration-300 cursor-pointer"
            aria-label="Previous services"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-border flex items-center justify-center text-primary-navy hover:bg-primary-teal hover:text-white transition-all duration-300 cursor-pointer"
            aria-label="Next services"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 transition-all duration-500">
            {visibleServices.map((service, index) => (
              <div
                key={service.id}
                className="group bg-white rounded-3xl overflow-hidden border border-border/50 shadow-lg shadow-primary-navy/5 hover:shadow-2xl hover:shadow-primary-navy/10 transition-all duration-500 h-full flex flex-col card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
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
                  <a
                    href="/#devis"
                    className={`group/btn w-full py-3 rounded-xl bg-gradient-to-r ${service.color} text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 btn-shine cursor-pointer`}
                  >
                    Demander un devis
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Pagination */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentIndex
                    ? "bg-primary-teal w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View All Button */}
        <ScrollReveal>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary-navy to-primary-teal text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 btn-shine group"
            >
              Voir tous nos services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
