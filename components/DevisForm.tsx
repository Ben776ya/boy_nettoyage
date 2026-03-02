"use client";

import { useState } from "react";
import Image from "next/image";
import {
  User,
  Phone,
  Mail,
  Calendar,
  MessageSquare,
  Building2,
  MapPin,
  FileText,
  Home,
  Building,
  ArrowRight,
  CheckCircle,
  Sparkles,
  ClipboardList,
  Award,
  Shield,
  Clock,
  Loader2,
} from "lucide-react";
import { cn, SERVICES, SERVICES_PRO, FREQUENCES } from "@/lib/utils";
import ScrollReveal from "./ScrollReveal";

type ClientType = "particulier" | "professionnel";

interface FormData {
  nom_complet: string;
  telephone: string;
  email: string;
  service: string;
  date_souhaitee: string;
  message: string;
  responsable: string;
  entreprise: string;
  ice: string;
  adresse: string;
  frequence: string;
}

const initialFormData: FormData = {
  nom_complet: "",
  telephone: "",
  email: "",
  service: "",
  date_souhaitee: "",
  message: "",
  responsable: "",
  entreprise: "",
  ice: "",
  adresse: "",
  frequence: "",
};

export default function DevisForm() {
  const [clientType, setClientType] = useState<ClientType>("particulier");
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: clientType, ...formData }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        setFormData(initialFormData);
      } else {
        setError(data.message || "Une erreur est survenue");
      }
    } catch {
      setError("Erreur de connexion. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    {
      icon: Sparkles,
      title: "Devis sur mesure",
      description: "Réponse détaillée sous 24h ouvrées.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: ClipboardList,
      title: "Rapport d'intervention",
      description: "Documentation complète pour vos audits.",
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: Award,
      title: "Expertise certifiée",
      description: "Personnel formé aux exigences pro.",
      color: "from-amber-500 to-orange-500",
    },
  ];

  if (isSuccess) {
    return (
      <section id="devis" className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-light-bg to-white"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-xl shadow-green-500/30 animate-bounce-gentle">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-primary-navy mb-4">
              Demande envoyée avec succès !
            </h2>
            <p className="text-text-gray text-lg mb-8">
              Notre équipe vous contactera sous 24h pour discuter de votre projet et vous fournir un devis personnalisé.
            </p>
            <button
              onClick={() => setIsSuccess(false)}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-primary-teal to-bright-blue text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 btn-shine"
            >
              Faire une nouvelle demande
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="devis" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-light-bg to-white"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-teal/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-bright-blue/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Marketing */}
          <ScrollReveal>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 text-sm font-semibold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Disponible maintenant
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-navy mb-6 leading-tight">
                Propulsez votre{" "}
                <span className="gradient-text-animated">Hygiène Pro.</span>
              </h2>

              <p className="text-text-gray text-lg mb-10 leading-relaxed">
                Obtenez une évaluation gratuite de vos locaux. Nos experts vous
                répondent avec une solution personnalisée sous 24h.
              </p>

              {/* Features */}
              <div className="space-y-4 mb-10">
                {features.map((feature, index) => (
                  <div
                    key={feature.title}
                    className="group flex items-start gap-4 p-4 rounded-2xl bg-white shadow-lg shadow-primary-navy/5 border border-border/50 hover:shadow-xl transition-all duration-300 card-hover"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary-navy mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-text-gray">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-text-gray">
                  <Shield className="w-5 h-5 text-primary-teal" />
                  <span>100% Sécurisé</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-text-gray">
                  <Clock className="w-5 h-5 text-primary-teal" />
                  <span>Réponse en 24h</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column - Form */}
          <ScrollReveal delay={200}>
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-teal/20 to-bright-blue/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-green-cta/20 to-emerald-500/20 rounded-full blur-xl"></div>

              <div className="relative bg-white rounded-3xl shadow-2xl shadow-primary-navy/10 border border-border/50 p-6 md:p-8 overflow-hidden">
                {/* Form gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-teal via-bright-blue to-green-cta"></div>

                {/* Tab Switcher */}
                <div className="flex rounded-2xl bg-light-bg p-1.5 mb-8">
                  <button
                    type="button"
                    onClick={() => setClientType("particulier")}
                    className={cn(
                      "flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer select-none",
                      clientType === "particulier"
                        ? "bg-white shadow-lg text-primary-navy"
                        : "text-text-gray hover:text-primary-navy hover:bg-white/50"
                    )}
                  >
                    <Home className="w-4 h-4" />
                    Particulier
                  </button>
                  <button
                    type="button"
                    onClick={() => setClientType("professionnel")}
                    className={cn(
                      "flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer select-none",
                      clientType === "professionnel"
                        ? "bg-white shadow-lg text-primary-navy"
                        : "text-text-gray hover:text-primary-navy hover:bg-white/50"
                    )}
                  >
                    <Building className="w-4 h-4" />
                    Professionnel
                  </button>
                </div>

                {/* Form Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-primary-navy">
                    {clientType === "particulier"
                      ? "Demande de devis"
                      : "Devis Professionnel"}
                  </h3>
                  <p className="text-text-gray">
                    {clientType === "particulier"
                      ? "Simple, rapide et sans engagement."
                      : "Avec facture pour votre entreprise."}
                  </p>
                </div>

                {error && (
                  <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  {clientType === "particulier" ? (
                    <>
                      <InputField
                        label="Nom complet"
                        name="nom_complet"
                        value={formData.nom_complet}
                        onChange={handleChange}
                        placeholder="Votre nom complet"
                        icon={User}
                        required
                      />
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <InputField
                          label="Téléphone"
                          name="telephone"
                          type="tel"
                          value={formData.telephone}
                          onChange={handleChange}
                          placeholder="06 -- -- -- --"
                          icon={Phone}
                          required
                        />
                        <InputField
                          label="Email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="votre@email.com"
                          icon={Mail}
                          required
                        />
                      </div>
                      <SelectField
                        label="Service souhaité"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        options={SERVICES}
                        required
                      />
                      <InputField
                        label="Date souhaitée"
                        name="date_souhaitee"
                        type="date"
                        value={formData.date_souhaitee}
                        onChange={handleChange}
                        icon={Calendar}
                        required
                      />
                      <TextareaField
                        label="Message (optionnel)"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Décrivez votre besoin..."
                        icon={MessageSquare}
                      />
                    </>
                  ) : (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <InputField
                          label="Responsable"
                          name="responsable"
                          value={formData.responsable}
                          onChange={handleChange}
                          placeholder="Nom du responsable"
                          icon={User}
                          required
                        />
                        <InputField
                          label="Entreprise"
                          name="entreprise"
                          value={formData.entreprise}
                          onChange={handleChange}
                          placeholder="Nom de la société"
                          icon={Building2}
                          required
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <InputField
                          label="ICE"
                          name="ice"
                          value={formData.ice}
                          onChange={handleChange}
                          placeholder="Numéro ICE"
                          icon={FileText}
                          required
                        />
                        <InputField
                          label="Téléphone"
                          name="telephone"
                          type="tel"
                          value={formData.telephone}
                          onChange={handleChange}
                          placeholder="06 -- -- -- --"
                          icon={Phone}
                          required
                        />
                      </div>
                      <InputField
                        label="Adresse"
                        name="adresse"
                        value={formData.adresse}
                        onChange={handleChange}
                        placeholder="Adresse complète"
                        icon={MapPin}
                        required
                      />
                      <InputField
                        label="Email professionnel"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="contact@entreprise.com"
                        icon={Mail}
                        required
                      />
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <SelectField
                          label="Service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          options={SERVICES_PRO}
                          required
                        />
                        <SelectField
                          label="Fréquence"
                          name="frequence"
                          value={formData.frequence}
                          onChange={handleChange}
                          options={FREQUENCES}
                          required
                        />
                      </div>
                      <InputField
                        label="Date souhaitée"
                        name="date_souhaitee"
                        type="date"
                        value={formData.date_souhaitee}
                        onChange={handleChange}
                        icon={Calendar}
                        required
                      />
                      <TextareaField
                        label="Cahier des charges"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Décrivez vos besoins, superficie..."
                        icon={MessageSquare}
                      />
                    </>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-gradient-to-r from-primary-teal to-bright-blue text-white font-semibold shadow-xl shadow-primary-teal/25 hover:shadow-2xl hover:shadow-primary-teal/30 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 btn-shine"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        {clientType === "particulier"
                          ? "Envoyer ma demande"
                          : "Demander mon devis Pro"}
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  {clientType === "professionnel" && (
                    <p className="text-xs text-text-gray text-center flex items-center justify-center gap-2 pt-2">
                      <FileText className="w-4 h-4 text-primary-teal" />
                      Devis détaillé avec facture envoyé sous 24h
                    </p>
                  )}
                </form>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  icon: React.ElementType;
  required?: boolean;
}

function InputField({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  icon: Icon,
  required,
}: InputFieldProps) {
  return (
    <div className="group">
      <label className="block text-xs uppercase tracking-wider text-text-gray font-semibold mb-2">
        {label}
      </label>
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-gray group-focus-within:text-primary-teal transition-colors">
          <Icon className="w-5 h-5" />
        </div>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-border bg-white text-primary-navy placeholder:text-gray-400 focus:outline-none focus:border-primary-teal focus:ring-4 focus:ring-primary-teal/10 transition-all duration-300"
        />
      </div>
    </div>
  );
}

interface SelectFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
  required?: boolean;
}

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  required,
}: SelectFieldProps) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-text-gray font-semibold mb-2">
        {label}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3.5 rounded-xl border-2 border-border bg-white text-primary-navy focus:outline-none focus:border-primary-teal focus:ring-4 focus:ring-primary-teal/10 transition-all duration-300 appearance-none cursor-pointer"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%230D7377'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 16px center",
          backgroundSize: "20px",
        }}
      >
        <option value="">Sélectionnez...</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

interface TextareaFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  icon: React.ElementType;
}

function TextareaField({
  label,
  name,
  value,
  onChange,
  placeholder,
  icon: Icon,
}: TextareaFieldProps) {
  return (
    <div className="group">
      <label className="block text-xs uppercase tracking-wider text-text-gray font-semibold mb-2">
        {label}
      </label>
      <div className="relative">
        <div className="absolute left-4 top-4 text-text-gray group-focus-within:text-primary-teal transition-colors">
          <Icon className="w-5 h-5" />
        </div>
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={3}
          className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-border bg-white text-primary-navy placeholder:text-gray-400 focus:outline-none focus:border-primary-teal focus:ring-4 focus:ring-primary-teal/10 transition-all duration-300 resize-none"
        />
      </div>
    </div>
  );
}
