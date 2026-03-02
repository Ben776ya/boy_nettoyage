"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, ArrowRight } from "lucide-react";
import { cn, PHONE_NUMBER, PHONE_MAIN } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/qui-sommes-nous", label: "Qui sommes nous ?" },
    { href: "/#resultats", label: "Résultats" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "glass shadow-lg shadow-primary-navy/5 py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo.png"
              alt="BOY NETTOYAGE PRO"
              width={300}
              height={90}
              className="h-14 sm:h-16 md:h-16 lg:h-[90px] w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              priority
              style={{ height: 'auto', maxHeight: '90px' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-primary-navy hover:text-primary-teal transition-colors hover-underline"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-light-bg/80 text-primary-navy text-sm font-medium hover:bg-light-bg transition-all duration-300 hover:shadow-md group"
            >
              <Phone className="w-4 h-4 group-hover:animate-bounce-gentle" />
              <span className="hidden lg:inline">{PHONE_MAIN}</span>
            </a>
            <a
              href="/#devis"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-green-cta to-emerald-600 text-white text-sm font-medium shadow-lg shadow-green-cta/30 hover:shadow-xl hover:shadow-green-cta/40 transition-all duration-300 hover:-translate-y-0.5 btn-shine"
            >
              Devis gratuit
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-light-bg text-primary-navy shadow-sm"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-light-bg text-primary-navy shadow-sm transition-transform duration-300"
            >
              <div className={cn("transition-transform duration-300", isMobileMenuOpen && "rotate-90")}>
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-500 ease-in-out",
          isMobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="glass mt-2 mx-4 rounded-2xl shadow-xl">
          <nav className="flex flex-col py-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-6 py-3 text-sm font-medium text-primary-navy hover:bg-primary-teal/5 hover:text-primary-teal transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 py-3">
              <a
                href="/#devis"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full bg-gradient-to-r from-green-cta to-emerald-600 text-white text-sm font-medium shadow-lg"
              >
                Devis gratuit
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
