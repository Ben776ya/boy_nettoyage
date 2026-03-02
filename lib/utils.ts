import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Company Information
export const COMPANY_NAME = "BOY NETTOYAGE PRO";
export const COMPANY_TAGLINE = "La propreté au service de votre confort et de votre image";
export const YEAR_FOUNDED = "2016";
export const YEARS_EXPERIENCE = "8+";

// Contact Information
export const PHONE_MAIN = "+212 6 61 40 85 77";
export const PHONE_SECONDARY = "+212 6 61 53 85 07";
export const PHONE_FIXED = "+212 5 22 98 06 21";
export const PHONE_NUMBER = "0661408577"; // For display
export const WHATSAPP_URL = "https://wa.me/212661408577";
export const EMAIL_PRIMARY = "boynettoyagepro@gmail.com";
export const EMAIL_SECONDARY = "info@boynettoyagepro.ma";
export const ADDRESS = "30 rue Abou Ishak Chirazi, Etage 2, Maarif, Casablanca";
export const OPERATING_HOURS = "24h/24, Lundi – Dimanche";

// Service Categories for Form (Particuliers)
export const SERVICES = [
  { value: "villas-maisons", label: "Nettoyage Villas & Maisons" },
  { value: "appartements", label: "Nettoyage Appartements" },
  { value: "copropriete", label: "Nettoyage Copropriété" },
  { value: "post-chantier", label: "Nettoyage Post-Chantier" },
  { value: "marbre-parquet", label: "Cristallisation Marbre & Parquet" },
  { value: "nettoyage-sec", label: "Nettoyage Sec (Tapis/Textiles)" },
  { value: "deratisation", label: "Dératisation" },
  { value: "desinsectisation", label: "Désinsectisation" },
  { value: "personnel", label: "Personnel de maison" },
];

// Service Categories for Form (Professionnels)
export const SERVICES_PRO = [
  { value: "industriel", label: "Nettoyage Industriel" },
  { value: "bureaux-commercial", label: "Nettoyage Bureaux & Commercial" },
  { value: "hotels-restaurants", label: "Nettoyage Hôtels & Restaurants" },
  { value: "evenementiel", label: "Nettoyage Événementiel" },
  { value: "facades", label: "Nettoyage Façades" },
  { value: "post-chantier", label: "Nettoyage Post-Chantier" },
  { value: "marbre-parquet", label: "Cristallisation Marbre & Parquet" },
  { value: "deratisation", label: "Dératisation" },
  { value: "desinsectisation", label: "Désinsectisation" },
  { value: "assainissement", label: "Assainissement & Hygiène" },
  { value: "personnel", label: "Personnel Qualifié" },
  { value: "contrat-entretien", label: "Contrat d'entretien régulier" },
];

export const FREQUENCES = [
  { value: "ponctuel", label: "Ponctuel (une fois)" },
  { value: "hebdomadaire", label: "Hebdomadaire" },
  { value: "bimensuel", label: "Bimensuel" },
  { value: "mensuel", label: "Mensuel" },
  { value: "sur-mesure", label: "Sur mesure" },
];

// Testimonials
export const TESTIMONIALS = [
  {
    name: "Fatima L.",
    location: "Casablanca",
    text: "Boy Nettoyage Pro a transformé notre villa ! L'équipe est ponctuelle, méticuleuse et très professionnelle. Chaque recoin a été parfaitement nettoyé.",
    rating: 5,
  },
  {
    name: "Youssef M.",
    location: "Rabat",
    text: "Excellente expérience. Le personnel est courtois et bien équipé. Le service est rapide, efficace et fiable.",
    rating: 5,
  },
  {
    name: "Khadija B.",
    location: "Marrakech",
    text: "Nous les avons sollicités pour notre résidence et sommes ravis. Ils ont un vrai souci du détail et respectent nos demandes spécifiques.",
    rating: 5,
  },
];
