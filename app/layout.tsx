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
    default: "BOY NETTOYAGE PRO | Nettoyage & Hygiène Professionnelle à Casablanca",
    template: "%s | BOY NETTOYAGE PRO",
  },
  description:
    "Services de nettoyage professionnel à Casablanca depuis 2016. Villas, bureaux, hôtels, dératisation, cristallisation marbre. Devis gratuit sous 24h.",
  keywords: [
    "nettoyage professionnel Casablanca",
    "nettoyage appartement Casablanca",
    "nettoyage bureaux Casablanca",
    "dératisation Casablanca",
    "cristallisation marbre Casablanca",
  ],
  authors: [{ name: "BOY NETTOYAGE PRO" }],
  creator: "BOY NETTOYAGE PRO",
  publisher: "BOY NETTOYAGE PRO",
  formatDetection: { telephone: true, email: true, address: true },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BOY NETTOYAGE PRO | Nettoyage Professionnel à Casablanca",
    description:
      "Services de nettoyage et hygiène professionnelle à Casablanca depuis 2016.",
    url: BASE_URL,
    siteName: "BOY NETTOYAGE PRO",
    locale: "fr_MA",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "BOY NETTOYAGE PRO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BOY NETTOYAGE PRO | Nettoyage Professionnel à Casablanca",
    description:
      "Services de nettoyage et hygiène professionnelle à Casablanca.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
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
    "BOY NETTOYAGE PRO — Services premium de nettoyage professionnel pour particuliers et professionnels à Casablanca et dans tout le Maroc. Disponible 24h/24, 7j/7.",
  url: `${BASE_URL}/`,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/logo.png`,
  },
  telephone: ["+212661408577", "+212661538507", "+212522980621"],
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
  slogan: "La propreté au service de votre confort et de votre image",
  priceRange: "MAD",
  foundingDate: "2016",
  hasMap: "https://maps.google.com/?q=30+rue+Abou+Ishak+Chirazi+Maarif+Casablanca",
  currenciesAccepted: "MAD",
  paymentAccepted: "Cash, Virement bancaire",
  sameAs: ["https://wa.me/212661408577"],
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
      <body className={`${plusJakartaSans.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([localBusinessSchema, websiteSchema]),
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
