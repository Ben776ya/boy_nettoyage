import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const BASE_URL = "https://www.boynettoyage.ma";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default:
      "BOY NETTOYAGE PRO | Société de Nettoyage Professionnel à Casablanca",
    template: "%s | BOY NETTOYAGE PRO",
  },

  description:
    "Société de nettoyage professionnel à Casablanca depuis 2016. Nettoyage villas, appartements, bureaux, fin de chantier, marbre, vitres, canapés, tapis, dératisation et désinsectisation. Devis gratuit.",

  keywords: [
    // General
    "société de nettoyage Casablanca",
    "entreprise de nettoyage Casablanca",
    "nettoyage professionnel Casablanca",
    "société de nettoyage Maroc",
    "entreprise nettoyage Maroc",
    "prestataire nettoyage Maroc",
    "nettoyage Casablanca",
    "nettoyage casa",
    "nettoyage à domicile Casablanca",
    "BOY NETTOYAGE PRO",

    // Villas / maisons / appartements
    "nettoyage villa Casablanca",
    "nettoyage villas Casablanca",
    "nettoyage maison Casablanca",
    "nettoyage maisons Casablanca",
    "nettoyage appartement Casablanca",
    "nettoyage appartements Casablanca",

    // Bureaux / professionnels
    "nettoyage bureaux Casablanca",
    "société nettoyage bureaux Casablanca",
    "nettoyage professionnel bureaux Casablanca",
    "nettoyage industriel Casablanca",
    "nettoyage hôtel Casablanca",
    "nettoyage hôtels Casablanca",
    "nettoyage commerce Casablanca",
    "nettoyage locaux professionnels Casablanca",

    // Chantier
    "nettoyage fin de chantier Casablanca",
    "nettoyage après chantier Casablanca",
    "nettoyage après travaux Casablanca",
    "nettoyage chantier Casablanca",

    // Marbre / sols
    "cristallisation marbre Casablanca",
    "polissage marbre Casablanca",
    "ponçage marbre Casablanca",
    "nettoyage marbre Casablanca",
    "ponçage parquet Casablanca",
    "vitrification parquet Casablanca",
    "nettoyage parquet Casablanca",
    "décapage carrelage Casablanca",
    "nettoyage carrelage Casablanca",

    // Vitres / façades
    "nettoyage vitres Casablanca",
    "lavage vitres Casablanca",
    "nettoyage façade Casablanca",
    "nettoyage façades Casablanca",

    // Mobilier / textile
    "nettoyage canapé Casablanca",
    "nettoyage canapé à domicile Casablanca",
    "nettoyage fauteuil Casablanca",
    "nettoyage tapis Casablanca",
    "nettoyage moquette Casablanca",
    "nettoyage matelas Casablanca",
    "nettoyage textile Casablanca",

    // Hygiène / nuisibles
    "désinsectisation Casablanca",
    "dératisation Casablanca",
    "désinfection Casablanca",
    "traitement nuisibles Casablanca",

    // Airbnb
    "nettoyage Airbnb Casablanca",
    "ménage Airbnb Casablanca",

    // Locations
    "société de nettoyage Dar Bouazza",
    "nettoyage Dar Bouazza",
    "société de nettoyage Bouskoura",
    "nettoyage Bouskoura",
    "société de nettoyage Mohammedia",
    "nettoyage Mohammedia",
    "société de nettoyage Rabat",
    "nettoyage Rabat",
    "société de nettoyage Marrakech",
    "nettoyage Marrakech",
    "société de nettoyage Agadir",
    "nettoyage Agadir",
    "société de nettoyage Tanger",
    "nettoyage Tanger",
  ],

  authors: [{ name: "BOY NETTOYAGE PRO" }],
  creator: "BOY NETTOYAGE PRO",
  publisher: "BOY NETTOYAGE PRO",

  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },

  openGraph: {
    title: "BOY NETTOYAGE PRO | Société de Nettoyage à Casablanca",
    description:
      "Nettoyage professionnel à Casablanca pour particuliers et entreprises : villas, bureaux, fin de chantier, marbre, vitres, canapés et dératisation.",
    url: BASE_URL,
    siteName: "BOY NETTOYAGE PRO",
    locale: "fr_MA",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "BOY NETTOYAGE PRO - Société de nettoyage à Casablanca",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "BOY NETTOYAGE PRO | Société de Nettoyage à Casablanca",
    description:
      "Services professionnels de nettoyage à Casablanca pour particuliers et entreprises.",
    images: ["/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "CleaningService"],
  "@id": `${BASE_URL}/#business`,

  name: "BOY NETTOYAGE PRO",
  alternateName: "Boy Nettoyage Pro",

  description:
    "BOY NETTOYAGE PRO propose des services professionnels de nettoyage pour particuliers et entreprises à Casablanca et dans plusieurs villes du Maroc.",

  url: `${BASE_URL}/`,

  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/logo.png`,
  },

  telephone: [
    "+212661408577",
    "+212661538507",
    "+212522980621",
  ],

  email: "contact@boynettoyage.ma",

  address: {
    "@type": "PostalAddress",
    streetAddress: "30 rue Abou Ishak Chirazi, Etage 2",
    addressLocality: "Casablanca",
    addressRegion: "Casablanca-Settat",
    postalCode: "20100",
    addressCountry: "MA",
  },

  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.5731,
    longitude: -7.6298,
  },

  areaServed: [
    {
      "@type": "City",
      name: "Casablanca",
    },
    {
      "@type": "City",
      name: "Dar Bouazza",
    },
    {
      "@type": "City",
      name: "Bouskoura",
    },
    {
      "@type": "City",
      name: "Mohammedia",
    },
    {
      "@type": "City",
      name: "Rabat",
    },
    {
      "@type": "City",
      name: "Marrakech",
    },
    {
      "@type": "City",
      name: "Tanger",
    },
    {
      "@type": "City",
      name: "Agadir",
    },
    {
      "@type": "Country",
      name: "Maroc",
    },
  ],

  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],

  slogan: "La propreté au service de votre confort et de votre image",

  priceRange: "MAD",

  foundingDate: "2016",

  hasMap:
    "https://maps.google.com/?q=30+rue+Abou+Ishak+Chirazi+Maarif+Casablanca",

  currenciesAccepted: "MAD",

  paymentAccepted: "Cash, Virement bancaire",

  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+212661408577",
    contactType: "customer service",
    availableLanguage: ["French", "Arabic"],
    areaServed: "MA",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,

  name: "BOY NETTOYAGE PRO",

  alternateName: "Boy Nettoyage",

  url: `${BASE_URL}/`,

  description:
    "Société de nettoyage professionnel à Casablanca et au Maroc.",

  inLanguage: "fr-MA",

  publisher: {
    "@id": `${BASE_URL}/#business`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${plusJakartaSans.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              localBusinessSchema,
              websiteSchema,
            ]),
          }}
        />

        <Navbar />

        <main>{children}</main>

        <Footer />

        <WhatsAppButton />
      </body>
    </html>
  );
}