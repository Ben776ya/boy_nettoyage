import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, MapPin, ArrowUpRight, Clock, Mail } from "lucide-react";
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

export default function Footer() {
  const services = [
    "Nettoyage Villas & Maisons",
    "Nettoyage Bureaux & Commercial",
    "Nettoyage Industriel",
    "Fin de Chantier",
    "Dératisation & 3D",
    "Cristallisation Marbre",
  ];

  const links = [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Qui sommes nous ?", href: "/qui-sommes-nous" },
    { label: "Résultats", href: "/#resultats" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-primary-navy via-[#122d47] to-[#0a1929] text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary-teal/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-bright-blue/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-teal to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt={COMPANY_NAME}
                  width={140}
                  height={52}
                  className="h-14 w-auto object-contain brightness-0 invert"
                />
              </Link>
              <p className="text-xs text-gray-400 mt-2">Casablanca • Maroc</p>
            </div>
            <p className="text-sm text-gray-300 mb-6 leading-relaxed">
              Votre expert en nettoyage et hygiène professionnelle. Villas, bureaux,
              industrie, fin de chantier, dératisation et plus encore.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-xs">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              {OPERATING_HOURS}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-6">
              Nos Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/#services"
                    className="group flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-teal group-hover:bg-white transition-colors"></span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    <ArrowUpRight className="w-3 h-3 text-primary-teal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="group flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-primary-teal/20 transition-colors">
                    <Phone className="w-4 h-4 text-primary-teal" />
                  </div>
                  <div>
                    <p className="font-medium text-white">{PHONE_MAIN}</p>
                    <p className="text-xs text-gray-400">Mobile / WhatsApp</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-whatsapp/20 transition-colors">
                    <MessageCircle className="w-4 h-4 text-whatsapp" />
                  </div>
                  <div>
                    <p className="font-medium text-white">WhatsApp</p>
                    <p className="text-xs text-gray-400">Réponse rapide</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL_PRIMARY}`}
                  className="group flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-bright-blue/20 transition-colors">
                    <Mail className="w-4 h-4 text-bright-blue" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <p className="text-xs text-gray-400">{EMAIL_PRIMARY}</p>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-primary-teal" />
                </div>
                <div>
                  <p className="font-medium text-white">Adresse</p>
                  <p className="text-xs text-gray-400 leading-relaxed">{ADDRESS}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} {COMPANY_NAME}. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-xs text-gray-500">
                Nettoyage & Hygiène Professionnelle
              </span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xs">★</span>
                ))}
                <span className="text-xs text-gray-400 ml-1">5.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
