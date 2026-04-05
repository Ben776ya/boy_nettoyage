export type CityIconName =
  | "Home"
  | "Briefcase"
  | "HardHat"
  | "Shield"
  | "Gem"
  | "Hotel";

export interface CityServiceCard {
  slug: string;
  title: string;
  description: string;
  iconName: CityIconName;
  image: string;
}

export interface CityData {
  city: string;
  slug: string;
  region: string;
  subtitle: string;
  paragraph: string;
  geo: { latitude: number; longitude: number };
  services: CityServiceCard[];
}

const CITY_SERVICES: CityServiceCard[] = [
  {
    slug: "nettoyage-appartements-villas",
    title: "Nettoyage Appartements & Villas",
    description:
      "Nettoyage complet et en profondeur de vos espaces résidentiels pour un cadre de vie sain et impeccable.",
    iconName: "Home",
    image: "/services/Nettoyage appartements.png",
  },
  {
    slug: "nettoyage-bureaux",
    title: "Nettoyage Bureaux",
    description:
      "Entretien professionnel de vos espaces de travail, open spaces et salles de réunion.",
    iconName: "Briefcase",
    image: "/services/Nettoyage Bureaux.png",
  },
  {
    slug: "nettoyage-de-chantier",
    title: "Nettoyage de Chantier",
    description:
      "Remise en état après travaux de construction ou rénovation. Livraison impeccable garantie.",
    iconName: "HardHat",
    image: "/services/Nettoyage de chantier.png",
  },
  {
    slug: "hygiene-traitement-4d",
    title: "Dératisation & Traitement 4D",
    description:
      "Désinfection, dératisation, désinsectisation et déréptilisation avec produits homologués.",
    iconName: "Shield",
    image: "/services/Hygiène Traitement 4D.png",
  },
  {
    slug: "cristallisation-marbre",
    title: "Cristallisation Marbre",
    description:
      "Ponçage, polissage et cristallisation pour redonner éclat et brillance à vos sols en marbre.",
    iconName: "Gem",
    image: "/services/Cristallisation du Marbre.jpg",
  },
  {
    slug: "nettoyage-hotels",
    title: "Nettoyage Hôtels",
    description:
      "Standards d'hygiène premium pour l'hôtellerie. Chambres, parties communes et réception.",
    iconName: "Hotel",
    image: "/services/Nettoyage Hôtels.png",
  },
];

export const CITY_PAGES: CityData[] = [
  {
    city: "Casablanca",
    slug: "nettoyage-casablanca",
    region: "Casablanca-Settat",
    subtitle:
      "BOY NETTOYAGE PRO, votre expert en nettoyage professionnel à Casablanca depuis 2016. Résidentiel, commercial et industriel.",
    paragraph:
      "Basés au cœur de Casablanca, dans le quartier du Maarif, nous intervenons dans toute la métropole et sa région. De Ain Diab à Sidi Moumen, de Anfa à Hay Hassani, nos équipes couvrent l'ensemble des arrondissements de Casablanca ainsi que Mohammedia, Bouskoura et Dar Bouazza. En tant que capitale économique du Maroc, Casablanca concentre une forte demande en nettoyage de bureaux, espaces commerciaux, résidences haut standing et locaux industriels. Nos techniciens qualifiés interviennent 7j/7, 24h/24 avec des produits certifiés écologiques. Nettoyage après chantier, dératisation, cristallisation de marbre, entretien de copropriétés — nous proposons une gamme complète de services adaptés aux exigences de la ville. Demandez votre devis gratuit et recevez une réponse personnalisée sous 24h.",
    geo: { latitude: 33.5731, longitude: -7.5898 },
    services: CITY_SERVICES,
  },
  {
    city: "Rabat",
    slug: "nettoyage-rabat",
    region: "Rabat-Salé-Kénitra",
    subtitle:
      "BOY NETTOYAGE PRO intervient à Rabat et sa région pour tous vos besoins de nettoyage résidentiel et professionnel.",
    paragraph:
      "Présents à Rabat, Salé et Témara, nos équipes interviennent rapidement dans toute la région de Rabat-Salé-Kénitra. Que vous soyez particulier dans l'Agdal, Hay Riad ou Hassan, ou professionnel dans le centre d'affaires, nous adaptons nos horaires à vos contraintes. Nos agents qualifiés assurent un nettoyage en profondeur avec des produits certifiés écologiques, adaptés à chaque type de surface et d'espace. Résidences, bureaux, commerces ou chantiers — nous intervenons 7j/7 avec un engagement de qualité et de ponctualité. Demandez votre devis gratuit et recevez une réponse sous 24h.",
    geo: { latitude: 34.0209, longitude: -6.8417 },
    services: CITY_SERVICES,
  },
  {
    city: "Marrakech",
    slug: "nettoyage-marrakech",
    region: "Marrakech-Safi",
    subtitle:
      "BOY NETTOYAGE PRO intervient à Marrakech et sa région pour tous vos besoins de nettoyage résidentiel et professionnel.",
    paragraph:
      "À Marrakech, ville touristique par excellence, la propreté est essentielle pour les riads, hôtels, restaurants et résidences. Nos équipes interviennent dans la Médina, Guéliz, Hivernage et l'Agdal pour tous types de prestations. Des villas de luxe aux établissements hôteliers, nous garantissons un service discret et de haute qualité adapté aux standards de l'hospitalité marrakchie. Nos techniciens sont formés aux spécificités des matériaux locaux — zellige, tadelakt, marbre — et utilisent des produits respectueux de ces surfaces nobles. Contactez-nous pour un devis gratuit et personnalisé sous 24h.",
    geo: { latitude: 31.6295, longitude: -7.9811 },
    services: CITY_SERVICES,
  },
  {
    city: "Agadir",
    slug: "nettoyage-agadir",
    region: "Souss-Massa",
    subtitle:
      "BOY NETTOYAGE PRO intervient à Agadir et sa région pour tous vos besoins de nettoyage résidentiel et professionnel.",
    paragraph:
      "À Agadir et dans la région Souss-Massa, nous intervenons pour les particuliers, hôtels, résidences balnéaires et établissements professionnels. Notre équipe couvre Agadir, Inezgane, Aït Melloul et les communes environnantes. Le climat côtier d'Agadir impose des exigences particulières en matière de nettoyage — humidité, sable, corrosion saline — et nos équipes sont formées pour y répondre avec les produits et techniques adaptés. Résidences touristiques, appartements, bureaux ou locaux commerciaux, nous assurons un service rapide et professionnel 7j/7. Obtenez votre devis gratuit sous 24h.",
    geo: { latitude: 30.4278, longitude: -9.5981 },
    services: CITY_SERVICES,
  },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return CITY_PAGES.find((c) => c.slug === slug);
}
