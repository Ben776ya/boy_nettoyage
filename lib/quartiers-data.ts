const BASE_URL = "https://www.boynettoyage.ma";

export interface QuartierData {
  slug: string;
  name: string;
  description: string;
  paragraph: string;
  geo: { latitude: number; longitude: number };
  nearbyQuartiers: string[];
}

export const QUARTIERS: QuartierData[] = [
  {
    slug: "maarif",
    name: "Maârif",
    description: "Société de nettoyage professionnelle au Maârif, Casablanca. Appartements, bureaux, villas. Devis gratuit sous 24h.",
    paragraph: "Le Maârif est l'un des quartiers les plus dynamiques de Casablanca, mêlant résidences haut standing, bureaux d'entreprises, commerces et restaurants. BOY NETTOYAGE PRO y est basé et intervient quotidiennement pour des particuliers, syndics de copropriété et entreprises. Que vous ayez besoin d'un nettoyage d'appartement, d'un entretien de bureaux ou d'une dératisation, nos équipes sont disponibles 7j/7 et répondent à votre demande sous 24h.",
    geo: { latitude: 33.5785, longitude: -7.6358 },
    nearbyQuartiers: ["anfa", "ain-diab", "racine"],
  },
  {
    slug: "anfa",
    name: "Anfa",
    description: "Nettoyage professionnel à Anfa, Casablanca. Villas, résidences de luxe, bureaux. BOY NETTOYAGE PRO intervient 7j/7.",
    paragraph: "Anfa est le quartier résidentiel le plus prisé de Casablanca, connu pour ses villas luxueuses, ses résidences de standing et son ambiance paisible. BOY NETTOYAGE PRO propose des services de nettoyage haut de gamme adaptés aux exigences de ce quartier : nettoyage de villas, cristallisation de marbre, entretien de jardins et piscines. Nos agents sont formés aux matériaux nobles et aux espaces de grand standing.",
    geo: { latitude: 33.5897, longitude: -7.6589 },
    nearbyQuartiers: ["maarif", "ain-diab", "california"],
  },
  {
    slug: "ain-diab",
    name: "Aïn Diab",
    description: "Nettoyage professionnel à Aïn Diab, Casablanca. Résidences balnéaires, villas, hôtels. Devis gratuit 24h/24.",
    paragraph: "Aïn Diab, quartier balnéaire par excellence de Casablanca, concentre villas, résidences de luxe, hôtels et restaurants en bord de mer. Le climat côtier impose des contraintes spécifiques en matière de nettoyage : humidité, sel marin, sable. BOY NETTOYAGE PRO maîtrise ces particularités et intervient avec les produits et techniques adaptés pour l'entretien des résidences, hôtels et espaces professionnels de Aïn Diab.",
    geo: { latitude: 33.5933, longitude: -7.6789 },
    nearbyQuartiers: ["anfa", "california", "sidi-maarouf"],
  },
  {
    slug: "racine",
    name: "Racine",
    description: "Nettoyage professionnel à Racine, Casablanca. Bureaux, appartements haut standing, commerces. Intervention rapide.",
    paragraph: "Racine est un quartier central de Casablanca très apprécié pour ses immeubles modernes, ses cabinets médicaux, ses bureaux et ses commerces de proximité. BOY NETTOYAGE PRO intervient régulièrement dans ce quartier pour l'entretien de bureaux professionnels, de cabinets, de copropriétés et d'appartements. Notre équipe connaît bien ce secteur et peut intervenir rapidement, y compris en dehors des heures de travail.",
    geo: { latitude: 33.5821, longitude: -7.6412 },
    nearbyQuartiers: ["maarif", "gauthier", "california"],
  },
  {
    slug: "gauthier",
    name: "Gauthier",
    description: "Nettoyage professionnel à Gauthier, Casablanca. Bureaux, ambassades, résidences. BOY NETTOYAGE PRO, disponible 7j/7.",
    paragraph: "Le Gauthier est l'un des quartiers les plus centraux de Casablanca, abritant de nombreuses ambassades, sièges sociaux, cabinets d'avocats et de médecins, ainsi que des résidences haut de gamme. BOY NETTOYAGE PRO y assure l'entretien régulier de locaux professionnels avec un niveau d'exigence adapté aux standards de ce quartier. Discrétion, ponctualité et qualité sont nos engagements pour chaque intervention.",
    geo: { latitude: 33.5891, longitude: -7.6234 },
    nearbyQuartiers: ["racine", "maarif", "centre-ville"],
  },
  {
    slug: "sidi-maarouf",
    name: "Sidi Maârouf",
    description: "Nettoyage professionnel à Sidi Maârouf, Casablanca. Parcs d'activités, bureaux, résidences. Devis gratuit sous 24h.",
    paragraph: "Sidi Maârouf est le principal pôle d'activités tertiaires de Casablanca, regroupant des centaines d'entreprises, parcs de bureaux, centres de formation et résidences modernes. BOY NETTOYAGE PRO est un partenaire privilégié des entreprises de ce secteur pour l'entretien quotidien ou hebdomadaire de leurs locaux. Nous proposons des contrats adaptés aux besoins des TPE, PME et grandes entreprises du technopole.",
    geo: { latitude: 33.5312, longitude: -7.6534 },
    nearbyQuartiers: ["ain-diab", "bouskoura", "hay-hassani"],
  },
  {
    slug: "hay-hassani",
    name: "Hay Hassani",
    description: "Nettoyage professionnel à Hay Hassani, Casablanca. Appartements, commerces, bureaux. Équipe qualifiée, tarifs accessibles.",
    paragraph: "Hay Hassani est un quartier populaire et résidentiel de Casablanca avec une forte densité de logements, de commerces et de petites entreprises. BOY NETTOYAGE PRO propose des prestations de nettoyage accessibles et de qualité pour les particuliers et professionnels de ce quartier. Nettoyage d'appartements, entretien de locaux commerciaux, désinfection et dératisation — nous couvrons l'ensemble des besoins du quartier.",
    geo: { latitude: 33.5534, longitude: -7.6712 },
    nearbyQuartiers: ["sidi-maarouf", "hay-mohammadi", "ain-chock"],
  },
  {
    slug: "california",
    name: "California",
    description: "Nettoyage professionnel à California, Casablanca. Résidences fermées, villas, bureaux. BOY NETTOYAGE PRO, devis gratuit.",
    paragraph: "California est un quartier résidentiel moderne de Casablanca, apprécié pour ses résidences fermées sécurisées, ses villas contemporaines et sa tranquillité. BOY NETTOYAGE PRO intervient dans les résidences et copropriétés de California pour des prestations complètes : nettoyage des parties communes, entretien des appartements et villas, cristallisation de marbre et traitement 4D. Nos équipes respectent les règles de sécurité des résidences fermées.",
    geo: { latitude: 33.5756, longitude: -7.6634 },
    nearbyQuartiers: ["anfa", "ain-diab", "racine"],
  },
];

export function getQuartierBySlug(slug: string): QuartierData | undefined {
  return QUARTIERS.find((q) => q.slug === slug);
}
