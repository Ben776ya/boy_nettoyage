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

const BASE_URL = "https://boynettoyagepro.ma";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "BOY NETTOYAGE PRO | Nettoyage & Hygiène Professionnelle à Casablanca",
  description:
    "BOY NETTOYAGE PRO - La propreté au service de votre confort et de votre image. Services premium de nettoyage pour particuliers et professionnels : villas, bureaux, industrie, hôtels, fin de chantier, dératisation. Casablanca et tout le Maroc. Disponible 24/7.",
  keywords: [
    "nettoyage",
    "Maroc",
    "Casablanca",
    "nettoyage professionnel",
    "nettoyage villas",
    "nettoyage bureaux",
    "nettoyage industriel",
    "fin de chantier",
    "dératisation",
    "désinsectisation",
    "nettoyage hôtels",
    "cristallisation marbre",
    "hygiène professionnelle",
    "Boy Nettoyage Pro",
  ],
  authors: [{ name: "BOY NETTOYAGE PRO" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BOY NETTOYAGE PRO | Nettoyage & Hygiène Professionnelle",
    description:
      "La propreté au service de votre confort et de votre image. Services premium de nettoyage à Casablanca et tout le Maroc.",
    url: BASE_URL,
    siteName: "BOY NETTOYAGE PRO",
    locale: "fr_MA",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BOY NETTOYAGE PRO - Services de nettoyage professionnel à Casablanca",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BOY NETTOYAGE PRO | Nettoyage & Hygiène Professionnelle",
    description:
      "Services premium de nettoyage professionnel à Casablanca et tout le Maroc. Disponible 24/7.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "CleaningService"],
  "@id": `${BASE_URL}/#business`,
  name: "BOY NETTOYAGE PRO",
  alternateName: "Boy Nettoyage Pro",
  description:
    "BOY NETTOYAGE PRO — Services premium de nettoyage professionnel pour particuliers et professionnels à Casablanca et dans tout le Maroc. Disponible 24h/24, 7j/7.",
  url: `${BASE_URL}/`,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/logo.png`,
  },
  telephone: ["+212661408577", "+212661538507", "+212522980621"],
  email: "boynettoyagepro@gmail.com",
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
    longitude: -7.5898,
  },
  areaServed: [
    { "@type": "City", name: "Casablanca" },
    { "@type": "City", name: "Rabat" },
    { "@type": "City", name: "Marrakech" },
    { "@type": "City", name: "Tanger" },
    { "@type": "City", name: "Agadir" },
    { "@type": "Country", name: "Maroc" },
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
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    bestRating: "5",
    worstRating: "1",
    reviewCount: "20000",
  },
  slogan: "La propreté au service de votre confort et de votre image",
  priceRange: "MAD",
  foundingDate: "2016",
  sameAs: ["https://wa.me/212661408577"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  name: "BOY NETTOYAGE PRO",
  url: `${BASE_URL}/`,
  description:
    "Services premium de nettoyage professionnel à Casablanca et dans tout le Maroc.",
  inLanguage: "fr",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([localBusinessSchema, websiteSchema]),
          }}
        />
      </head>
      <body className={`${plusJakartaSans.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
