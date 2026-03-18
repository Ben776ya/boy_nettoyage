import {
  HardHat,
  Home,
  Armchair,
  Building2,
  Factory,
  Briefcase,
  Gem,
  Layers,
  HeartPulse,
  Hotel,
  UtensilsCrossed,
  Shield,
  Grip,
  Key,
  Building,
  ShoppingBag,
  Users,
  CalendarDays,
  Droplets,
  MousePointer2,
  Bug,
  Sparkles,
  Leaf,
  Wrench,
  Waves,
} from "lucide-react";

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  description: string;
  intro: string;
  prestations: string[];
  clients: string;
  coverage: string;
  whyUs: string[];
  faq: ServiceFAQ[];
  icon: React.ComponentType<{ className?: string }>;
  image: string;
}

export const SERVICES_DETAIL: ServiceDetail[] = [
  {
    slug: "nettoyage-de-chantier",
    title: "Nettoyage de chantier",
    description:
      "Remise en état parfaite après chantier pour une livraison impeccable de vos espaces.",
    intro:
      "Votre chantier est terminé et vous avez besoin d'une remise en état impeccable ? Eden Plaza Nettoyage intervient pour un nettoyage fin de chantier professionnel, afin de livrer des espaces propres et prêts à l'usage.",
    prestations: [
      "Dépoussiérage complet des surfaces, plafonds et murs",
      "Nettoyage des sols (carrelage, béton, parquet) après travaux",
      "Lavage des vitres, cadres et menuiseries",
      "Enlèvement des résidus de peinture, plâtre et ciment",
      "Nettoyage des sanitaires et équipements installés",
      "Évacuation des déchets de chantier",
    ],
    clients:
      "Promoteurs immobiliers, entreprises de construction, architectes, particuliers en rénovation",
    coverage:
      "Casablanca, Rabat, Mohammedia, El Jadida, Marrakech, Fès, Tanger, Agadir… et toutes les villes du Maroc sur demande.",
    whyUs: [
      "Équipes spécialisées en nettoyage post-construction",
      "Matériel professionnel adapté aux chantiers",
      "Respect des délais de livraison",
      "Interventions planifiées ou en urgence, 7j/7",
      "Devis gratuit et personnalisé",
    ],
    faq: [
      {
        q: "Quand intervenir pour un nettoyage fin de chantier ?",
        a: "Nous intervenons dès la fin des travaux, avant la livraison ou la réception des locaux. Nous pouvons aussi intervenir entre les phases de chantier.",
      },
      {
        q: "Nettoyez-vous aussi les façades extérieures après chantier ?",
        a: "Oui, nous proposons le nettoyage des façades, vitres extérieures et espaces communs dans le cadre de la remise en état post-chantier.",
      },
      {
        q: "Combien de temps dure un nettoyage de chantier ?",
        a: "Cela dépend de la superficie et du type de travaux réalisés. Nous fournissons une estimation précise après visite des lieux.",
      },
    ],
    icon: HardHat,
    image:
      "/services/Nettoyage de chantier.png",
  },
  {
    slug: "nettoyage-airbnb",
    title: "Nettoyage Airbnb",
    description:
      "Service express entre locataires. Nettoyage complet, changement de linge et vérifications qualité.",
    intro:
      "Vous gérez un ou plusieurs logements Airbnb et souhaitez offrir une expérience impeccable à chaque voyageur ? Eden Plaza Nettoyage assure un service express et méticuleux entre chaque locataire.",
    prestations: [
      "Nettoyage complet de l'appartement ou de la maison",
      "Changement du linge de lit et de toilette",
      "Nettoyage de la cuisine et des électroménagers",
      "Désinfection des sanitaires",
      "Vérification qualité selon checklist personnalisée",
      "Réapprovisionnement des consommables (savon, papier, etc.)",
    ],
    clients:
      "Hôtes Airbnb, gestionnaires de locations saisonnières, agences de conciergerie",
    coverage:
      "Casablanca, Rabat, Marrakech, Tanger, Agadir… et toutes les villes du Maroc sur demande.",
    whyUs: [
      "Interventions rapides entre deux réservations",
      "Checklist qualité personnalisable selon vos standards",
      "Équipes discrètes et ponctuelles",
      "Disponibilité 7j/7, y compris les jours fériés",
      "Devis gratuit et personnalisé",
    ],
    faq: [
      {
        q: "En combien de temps nettoyez-vous un Airbnb ?",
        a: "En général, entre 1h30 et 3h selon la taille du logement. Nous nous adaptons à vos horaires de check-in/check-out.",
      },
      {
        q: "Fournissez-vous le linge de maison ?",
        a: "Nous pouvons gérer le changement de votre linge existant. La fourniture de linge peut être organisée sur demande.",
      },
      {
        q: "Pouvez-vous intervenir le même jour ?",
        a: "Oui, nous proposons des interventions express le jour même sous réserve de disponibilité.",
      },
    ],
    icon: Home,
    image:
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&h=500&fit=crop",
  },
  {
    slug: "nettoyage-canape-fauteuil",
    title: "Nettoyage Canapé & Fauteuil",
    description:
      "Nettoyage et détachage professionnel par injection/extraction et vapeur.",
    intro:
      "Vos canapés et fauteuils ont perdu leur éclat ? Eden Plaza Nettoyage redonne vie à vos meubles rembourrés grâce à des techniques professionnelles d'injection/extraction et de nettoyage vapeur.",
    prestations: [
      "Nettoyage par injection/extraction en profondeur",
      "Nettoyage vapeur haute température",
      "Détachage de taches tenaces (café, vin, encre, graisse)",
      "Désodorisation et élimination des odeurs",
      "Traitement anti-acariens et désinfection",
      "Nettoyage de tous types de tissus et cuirs",
    ],
    clients:
      "Particuliers, hôtels, restaurants, salles d'attente, espaces de coworking",
    coverage:
      "Casablanca, Rabat, Mohammedia, El Jadida, Marrakech, Fès, Tanger, Agadir… et toutes les villes du Maroc sur demande.",
    whyUs: [
      "Techniques professionnelles adaptées à chaque tissu",
      "Produits écologiques et sans danger",
      "Résultats visibles immédiatement",
      "Intervention à domicile ou sur site",
      "Devis gratuit et personnalisé",
    ],
    faq: [
      {
        q: "Combien de temps faut-il pour que le canapé sèche ?",
        a: "En général, le séchage prend entre 2 et 6 heures selon le tissu et la ventilation de la pièce.",
      },
      {
        q: "Nettoyez-vous les canapés en cuir ?",
        a: "Oui, nous utilisons des produits spécifiques adaptés au cuir pour nettoyer, nourrir et protéger vos canapés en cuir.",
      },
      {
        q: "Les taches anciennes peuvent-elles être enlevées ?",
        a: "La plupart des taches anciennes peuvent être significativement atténuées voire complètement éliminées grâce à nos techniques professionnelles.",
      },
    ],
    icon: Armchair,
    image:
      "/services/Nettoyage Canapé & Fauteuil.png",
  },
  {
    slug: "nettoyage-vitres-facades",
    title: "Nettoyage Vitres et Façades",
    description:
      "Nettoyage spécialisé pour redonner éclat et transparence à vos bâtiments.",
    intro:
      "Des vitres et façades impeccables reflètent le professionnalisme de votre entreprise. Eden Plaza Nettoyage intervient avec des techniques spécialisées pour redonner éclat et transparence à vos bâtiments.",
    prestations: [
      "Nettoyage de vitres intérieures et extérieures",
      "Nettoyage de façades vitrées et murs rideaux",
      "Lavage de baies vitrées et vérandas",
      "Nettoyage de vitrines commerciales",
      "Traitement hydrofuge anti-pluie",
      "Interventions en hauteur avec équipements sécurisés",
    ],
    clients:
      "Immeubles de bureaux, centres commerciaux, hôtels, résidences, commerces de détail",
    coverage:
      "Casablanca, Rabat, Mohammedia, El Jadida, Marrakech, Fès, Tanger, Agadir… et toutes les villes du Maroc sur demande.",
    whyUs: [
      "Techniciens formés au travail en hauteur",
      "Équipements professionnels et sécurisés",
      "Produits écologiques sans traces",
      "Interventions planifiées ou en urgence, 7j/7",
      "Devis gratuit et personnalisé",
    ],
    faq: [
      {
        q: "Intervenez-vous en hauteur pour les immeubles ?",
        a: "Oui, nos équipes sont formées et équipées pour intervenir en hauteur en toute sécurité, y compris sur les façades d'immeubles.",
      },
      {
        q: "À quelle fréquence faut-il nettoyer les vitres ?",
        a: "Pour un résultat optimal, nous recommandons un nettoyage mensuel ou bimensuel selon l'exposition et l'environnement.",
      },
      {
        q: "Proposez-vous des contrats d'entretien régulier ?",
        a: "Oui, nous proposons des contrats d'entretien hebdomadaires, bimensuels ou mensuels adaptés à vos besoins.",
      },
    ],
    icon: Building2,
    image:
      "/services/Nettoyage Vitres et Façades.png",
  },
  {
    slug: "nettoyage-industriel",
    title: "Nettoyage Industriel",
    description:
      "Entretien pour usines, ateliers et entrepôts avec équipements et normes de sécurité renforcées.",
    intro:
      "Votre site industriel a besoin d'un nettoyage rigoureux et sécurisé ? Eden Plaza Nettoyage propose des interventions professionnelles adaptées aux environnements industriels, entrepôts, usines et zones sensibles.",
    prestations: [
      "Nettoyage de sols industriels (béton, résine, carrelage)",
      "Dégraissage d'équipements, lignes de production et machines",
      "Nettoyage de murs, plafonds, conduits et surfaces techniques",
      "Évacuation des déchets, résidus industriels et huiles usagées",
      "Assainissement des zones sensibles (agroalimentaire, pharmaceutique)",
      "Utilisation d'autolaveuses, monobrosse, vapeur et produits spécialisés",
    ],
    clients:
      "Usines, ateliers, laboratoires, entrepôts logistiques, hangars, plateformes industrielles",
    coverage:
      "Casablanca, Rabat, Mohammedia, El Jadida, Marrakech, Fès, Tanger, Agadir… et toutes les villes du Maroc sur demande.",
    whyUs: [
      "Techniciens formés aux normes HSE et sécurité industrielle",
      "Équipements professionnels haute performance",
      "Respect des protocoles, horaires et exigences de site",
      "Interventions planifiées ou en urgence, 7j/7",
      "Devis gratuit et personnalisé",
    ],
    faq: [
      {
        q: "Intervenez-vous dans les zones agroalimentaires ?",
        a: "Oui, nos équipes sont formées aux protocoles d'hygiène spécifiques aux zones agroalimentaires et pharmaceutiques.",
      },
      {
        q: "Pouvez-vous intervenir en dehors des heures de production ?",
        a: "Absolument, nous planifions nos interventions selon vos horaires pour minimiser l'impact sur votre activité.",
      },
      {
        q: "Quels types de déchets industriels prenez-vous en charge ?",
        a: "Nous gérons l'évacuation des résidus industriels courants, huiles usagées et déchets non dangereux. Pour les déchets spéciaux, nous travaillons avec des partenaires agréés.",
      },
    ],
    icon: Factory,
    image:
      "/services/Nettoyage Industriel.png",
  },
  {
    slug: "nettoyage-bureaux",
    title: "Nettoyage Bureaux",
    description:
      "Services complets pour espaces professionnels, magasins et entrepôts. Hygiène & Sécurité.",
    intro:
      "Un environnement de travail propre booste la productivité et renforce votre image professionnelle. Eden Plaza Nettoyage assure l'entretien régulier de vos bureaux, locaux commerciaux et espaces de travail.",
    prestations: [
      "Nettoyage quotidien ou périodique des bureaux",
      "Dépoussiérage du mobilier, écrans et équipements",
      "Aspiration et lavage des sols",
      "Nettoyage et désinfection des sanitaires",
      "Vidage des corbeilles et gestion des déchets",
      "Nettoyage des espaces communs (cuisine, salle de réunion, accueil)",
    ],
    clients:
      "Entreprises, cabinets, agences, espaces de coworking, commerces, administrations",
    coverage:
      "Casablanca, Rabat, Mohammedia, El Jadida, Marrakech, Fès, Tanger, Agadir… et toutes les villes du Maroc sur demande.",
    whyUs: [
      "Personnel formé et discret",
      "Interventions en dehors des heures de bureau si souhaité",
      "Produits écologiques et professionnels",
      "Contrats d'entretien flexibles (quotidien, hebdomadaire, mensuel)",
      "Devis gratuit et personnalisé",
    ],
    faq: [
      {
        q: "Pouvez-vous intervenir le soir ou le week-end ?",
        a: "Oui, nous adaptons nos horaires d'intervention pour ne pas perturber votre activité. Interventions possibles le soir, tôt le matin ou le week-end.",
      },
      {
        q: "Proposez-vous des contrats mensuels ?",
        a: "Oui, nous proposons des formules d'entretien régulier avec des contrats flexibles adaptés à votre budget et à vos besoins.",
      },
      {
        q: "Fournissez-vous les consommables (savon, papier) ?",
        a: "Nous pouvons inclure la fourniture et le réapprovisionnement des consommables sanitaires dans nos prestations sur demande.",
      },
    ],
    icon: Briefcase,
    image:
      "/services/Nettoyage Bureaux.png",
  },
  {
    slug: "cristallisation-marbre",
    title: "Cristallisation du Marbre",
    description:
      "Ponçage, polissage et cristallisation professionnelle pour redonner éclat et brillance à vos sols en marbre.",
    intro:
      "Vos sols en marbre ont perdu leur brillance naturelle ? Eden Plaza Nettoyage redonne vie et éclat à votre marbre grâce à des techniques professionnelles de ponçage, polissage et cristallisation.",
    prestations: [
      "Ponçage et polissage de sols en marbre et granit",
      "Cristallisation pour une brillance durable",
      "Traitement hydrofuge et anti-taches",
      "Rénovation de sols ternis ou rayés",
      "Lustrage et protection des surfaces en marbre",
      "Entretien régulier pour maintenir l'éclat",
    ],
    clients: "Hôtels, halls d'immeubles, villas, bureaux, showrooms, espaces de luxe",
    coverage:
      "Casablanca, Rabat, Mohammedia, El Jadida, Marrakech, Fès, Tanger, Agadir… et toutes les villes du Maroc sur demande.",
    whyUs: [
      "Expertise technique en traitement de marbre et pierres naturelles",
      "Machines professionnelles de ponçage et cristallisation",
      "Produits haut de gamme adaptés au marbre",
      "Résultats visibles immédiatement",
      "Devis gratuit et personnalisé",
    ],
    faq: [
      {
        q: "Quelle est la différence entre polissage et cristallisation du marbre ?",
        a: "Le polissage redonne de la brillance en lissant la surface, tandis que la cristallisation crée une couche protectrice chimique qui renforce la dureté et l'éclat du marbre de manière durable.",
      },
      {
        q: "Combien de temps dure l'effet de la cristallisation ?",
        a: "L'effet dure généralement entre 6 mois et 1 an selon le passage et l'entretien. Nous recommandons un entretien régulier pour maintenir les résultats.",
      },
      {
        q: "Traitez-vous tous les types de marbre ?",
        a: "Oui, nous traitons le marbre blanc, coloré, le granit et toutes les pierres naturelles avec des produits et techniques adaptés à chaque type.",
      },
    ],
    icon: Gem,
    image:
      "/services/Cristallisation du Marbre.jpg",
  },
  {
    slug: "cristallisation-parquet",
    title: "Cristallisation du Parquet",
    description:
      "Vitrification, ponçage et traitement de parquets pour redonner brillance et protection à vos sols en bois.",
    intro:
      "Vos sols en parquet ont perdu leur éclat d'origine ? Eden Plaza Nettoyage redonne brillance et protection à vos parquets grâce à des techniques professionnelles de vitrification et traitement du bois.",
    prestations: [
      "Ponçage de parquets massifs et contrecollés",
      "Vitrification et traitement de parquets",
      "Application d'huile et de cire pour parquet",
      "Traitement hydrofuge et anti-rayures",
      "Rénovation de parquets ternis ou abîmés",
      "Entretien régulier pour maintenir l'éclat",
    ],
    clients: "Particuliers, hôtels, bureaux, villas, showrooms",
    coverage:
      "Casablanca, Rabat, Mohammedia, El Jadida, Marrakech, Fès, Tanger, Agadir… et toutes les villes du Maroc sur demande.",
    whyUs: [
      "Expertise technique en traitement et rénovation de parquets",
      "Machines professionnelles de ponçage",
      "Produits haut de gamme adaptés au bois",
      "Résultats visibles immédiatement",
      "Devis gratuit et personnalisé",
    ],
    faq: [
      {
        q: "Traitez-vous tous les types de parquet ?",
        a: "Oui, nous traitons les parquets massifs, contrecollés et stratifiés avec des produits et techniques adaptés à chaque type.",
      },
      {
        q: "Le ponçage enlève-t-il les rayures profondes ?",
        a: "Oui, le ponçage professionnel permet d'éliminer la plupart des rayures, griffes et marques d'usure sur votre parquet.",
      },
      {
        q: "Combien de temps faut-il pour que le vernis sèche ?",
        a: "En général, la vitrification demande 24 à 48 heures de séchage complet. Nous vous conseillons d'éviter de marcher dessus pendant cette période.",
      },
    ],
    icon: Layers,
    image:
      "/services/Cristallisation du Parquet.webp",
  },
  {
    slug: "nettoyage-hopitaux",
    title: "Nettoyage Hôpitaux",
    description:
      "Protocoles stricts de désinfection pour garantir une hygiène irréprochable dans les établissements de santé.",
    intro:
      "Un environnement médical propre est essentiel pour la sécurité des patients et du personnel. Eden Plaza Nettoyage applique des protocoles stricts de désinfection pour garantir une hygiène irréprochable dans les hôpitaux, cliniques et cabinets médicaux.",
    prestations: [
      "Désinfection des chambres, couloirs et zones de soins",
      "Nettoyage des blocs opératoires et salles d'examen",
      "Traitement des surfaces à contact fréquent (poignées, rampes, interrupteurs)",
      "Gestion et élimination des déchets médicaux courants",
      "Entretien des sanitaires et zones sensibles",
      "Application de protocoles d'hygiène certifiés",
    ],
    clients:
      "Hôpitaux, cliniques, cabinets médicaux, laboratoires d'analyses, pharmacies",
    coverage:
      "Casablanca, Rabat, Mohammedia, El Jadida, Marrakech, Fès, Tanger, Agadir… et toutes les villes du Maroc sur demande.",
    whyUs: [
      "Protocoles stricts conformes aux normes sanitaires",
      "Personnel formé aux environnements médicaux",
      "Produits désinfectants homologués et certifiés",
      "Interventions planifiées pour ne pas perturber les soins",
      "Devis gratuit et personnalisé",
    ],
    faq: [
      {
        q: "Utilisez-vous des produits homologués pour les environnements médicaux ?",
        a: "Oui, nous utilisons exclusivement des désinfectants homologués et certifiés conformes aux exigences des établissements de santé.",
      },
      {
        q: "Intervenez-vous dans les blocs opératoires ?",
        a: "Oui, nos équipes sont formées aux protocoles spécifiques pour le nettoyage des blocs opératoires et zones stériles.",
      },
      {
        q: "Pouvez-vous intervenir la nuit pour ne pas perturber les soins ?",
        a: "Absolument, nous adaptons nos horaires d'intervention pour minimiser tout impact sur l'activité médicale.",
      },
    ],
    icon: HeartPulse,
    image:
      "/services/Nettoyage Hôpitaux.jpg",
  },
  {
    slug: "nettoyage-hotels",
    title: "Nettoyage Hôtels",
    description:
      "Nettoyage complet et discret des chambres et espaces communs pour une expérience client premium.",
    intro:
      "Offrez à vos clients une expérience irréprochable dès leur arrivée. Nos équipes assurent un nettoyage complet et discret des chambres, espaces communs et zones de service pour maintenir un niveau de qualité premium.",
    prestations: [
      "Nettoyage complet des chambres et suites",
      "Changement et arrangement du linge de lit",
      "Nettoyage des salles de bains et sanitaires",
      "Entretien des espaces communs (lobby, couloirs, ascenseurs)",
      "Nettoyage des restaurants et salles de conférence",
      "Désinfection et vérification selon standards hôteliers",
    ],
    clients: "Hôtels, riads, résidences hôtelières, appart-hôtels, auberges",
    coverage:
      "Casablanca, Rabat, Mohammedia, El Jadida, Marrakech, Fès, Tanger, Agadir… et toutes les villes du Maroc sur demande.",
    whyUs: [
      "Personnel discret et formé aux standards hôteliers",
      "Interventions coordonnées avec la réception",
      "Checklist qualité adaptée à vos standards",
      "Disponibilité 7j/7 pour s'adapter aux rotations",
      "Devis gratuit et personnalisé",
    ],
    faq: [
      {
        q: "Pouvez-vous vous adapter à nos standards hôteliers ?",
        a: "Oui, nous personnalisons notre intervention selon vos standards et exigences spécifiques pour garantir une qualité homogène.",
      },
      {
        q: "Intervenez-vous pendant que les clients sont présents ?",
        a: "Nos équipes sont formées pour intervenir discrètement, dans le respect de la tranquillité des clients présents dans l'établissement.",
      },
      {
        q: "Proposez-vous des contrats d'entretien réguliers ?",
        a: "Oui, nous proposons des contrats journaliers ou hebdomadaires adaptés à vos besoins et à votre taux d'occupation.",
      },
    ],
    icon: Hotel,
    image:
      "/services/Nettoyage Hôtels.png",
  },
  {
    slug: "nettoyage-restos-cafes",
    title: "Nettoyage Resto-Cafés",
    description:
      "Entretien et désinfection de vos cuisines, salles et terrasses dans le respect des normes d'hygiène alimentaire.",
    intro:
      "La propreté est un élément clé de votre réputation. Eden Plaza Nettoyage garantit l'entretien et la désinfection de vos cuisines, salles et terrasses, en respectant les normes d'hygiène alimentaire.",
    prestations: [
      "Nettoyage en profondeur des cuisines professionnelles",
      "Dégraissage des équipements, hottes et surfaces de cuisson",
      "Désinfection des plans de travail et zones alimentaires",
      "Nettoyage des salles et terrasses",
      "Entretien des sanitaires et vestiaires",
      "Respect des normes HACCP et hygiène alimentaire",
    ],
    clients:
      "Restaurants, cafés, brasseries, fast-foods, traiteurs, cantines d'entreprise",
    coverage:
      "Casablanca, Rabat, Mohammedia, El Jadida, Marrakech, Fès, Tanger, Agadir… et toutes les villes du Maroc sur demande.",
    whyUs: [
      "Respect strict des normes d'hygiène alimentaire (HACCP)",
      "Personnel formé aux environnements de restauration",
      "Interventions hors heures de service",
      "Produits désinfectants adaptés aux surfaces alimentaires",
      "Devis gratuit et personnalisé",
    ],
    faq: [
      {
        q: "Intervenez-vous avant ou après le service ?",
        a: "Nous adaptons nos horaires à vos contraintes, avant l'ouverture, après la fermeture ou entre les services.",
      },
      {
        q: "Respectez-vous les normes HACCP ?",
        a: "Oui, nos interventions sont conformes aux normes HACCP et aux exigences d'hygiène alimentaire en vigueur.",
      },
      {
        q: "Proposez-vous des contrats de nettoyage quotidien ?",
        a: "Oui, nous proposons des contrats d'entretien quotidien ou hebdomadaire adaptés à votre activité et à votre budget.",
      },
    ],
    icon: UtensilsCrossed,
    image:
      "/services/Nettoyage Resto-Cafés.png",
  },
  {
    slug: "hygiene-traitement-4d",
    title: "Hygiène Traitement 4D",
    description:
      "Désinfection, Dératisation, Désinsectisation et Déréptilisation avec produits homologués.",
    intro:
      "Protégez vos espaces contre les nuisibles et les risques sanitaires. Eden Plaza Nettoyage propose un traitement 4D complet : Désinfection, Dératisation, Désinsectisation et Déréptilisation avec des produits homologués et sûrs.",
    prestations: [
      "Désinfection complète des locaux (virus, bactéries, moisissures)",
      "Dératisation : élimination et prévention contre les rongeurs",
      "Désinsectisation : traitement contre cafards, moustiques, punaises, fourmis",
      "Déréptilisation : protection contre les reptiles et serpents",
      "Traitement préventif et curatif",
      "Utilisation de produits homologués et respectueux de la santé",
    ],
    clients:
      "Restaurants, hôtels, usines agroalimentaires, entrepôts, résidences, bureaux, commerces",
    coverage:
      "Casablanca, Rabat, Mohammedia, El Jadida, Marrakech, Fès, Tanger, Agadir… et toutes les villes du Maroc sur demande.",
    whyUs: [
      "Techniciens certifiés en hygiène et lutte antiparasitaire",
      "Produits homologués sans danger pour les occupants",
      "Diagnostic gratuit avant intervention",
      "Suivi post-traitement et garantie de résultats",
      "Devis gratuit et personnalisé",
    ],
    faq: [
      {
        q: "Les produits utilisés sont-ils dangereux pour les enfants ou animaux ?",
        a: "Non, nous utilisons des produits homologués et sûrs. Nous vous donnerons les consignes de sécurité spécifiques à chaque traitement.",
      },
      {
        q: "Faut-il quitter les lieux pendant le traitement ?",
        a: "Cela dépend du type de traitement. Pour certaines désinfections, une évacuation temporaire de quelques heures peut être nécessaire.",
      },
      {
        q: "Combien de passages sont nécessaires ?",
        a: "En général, un à trois passages suffisent selon le niveau d'infestation. Nous assurons un suivi pour garantir l'efficacité du traitement.",
      },
    ],
    icon: Shield,
    image:
      "/services/Hygiène Traitement 4D.png",
  },
  {
    slug: "nettoyage-moquettes-tapis",
    title: "Nettoyage Moquettes & Tapis",
    description:
      "Nettoyage en profondeur pour éliminer acariens, taches et impuretés.",
    intro:
      "Vos moquettes et tapis accumulent poussières, acariens et taches au fil du temps. Eden Plaza Nettoyage les nettoie en profondeur pour un résultat sain, frais et éclatant.",
    prestations: [
      "Nettoyage en profondeur par injection/extraction",
      "Nettoyage vapeur haute température",
      "Détachage de taches tenaces et anciennes",
      "Traitement anti-acariens et désodorisation",
      "Nettoyage de moquettes murales et de sol",
      "Intervention sur site ou enlèvement pour traitement en atelier",
    ],
    clients:
      "Particuliers, hôtels, bureaux, mosquées, salles de conférence, espaces commerciaux",
    coverage:
      "Casablanca, Rabat, Mohammedia, El Jadida, Marrakech, Fès, Tanger, Agadir… et toutes les villes du Maroc sur demande.",
    whyUs: [
      "Techniques professionnelles adaptées à chaque fibre",
      "Produits écologiques et sans danger",
      "Résultats visibles immédiatement",
      "Intervention rapide à domicile ou sur site",
      "Devis gratuit et personnalisé",
    ],
    faq: [
      {
        q: "Pouvez-vous nettoyer les tapis berbères et orientaux ?",
        a: "Oui, nous avons l'expertise pour nettoyer tous types de tapis, y compris les tapis berbères, orientaux et de luxe, avec des produits adaptés.",
      },
      {
        q: "Le nettoyage abîme-t-il les fibres du tapis ?",
        a: "Non, nos techniques professionnelles sont conçues pour nettoyer en profondeur tout en préservant la qualité et la texture des fibres.",
      },
      {
        q: "Combien de temps faut-il pour le séchage ?",
        a: "Le séchage prend généralement entre 3 et 8 heures selon l'épaisseur du tapis et la ventilation de l'espace.",
      },
    ],
    icon: Grip,
    image:
      "/services/Nettoyage Moquettes & Tapis.png",
  },
  {
    slug: "nettoyage-appartements-villas",
    title: "Nettoyage appartements / maisons / villas",
    description:
      "Nettoyage complet et en profondeur de vos espaces résidentiels pour un cadre de vie sain et impeccable.",
    intro:
      "Votre appartement, maison ou villa mérite un entretien irréprochable. Eden Plaza Nettoyage intervient pour un nettoyage complet et en profondeur de tous vos espaces résidentiels, pour un cadre de vie sain, propre et agréable.",
    prestations: [
      "Nettoyage complet de toutes les pièces",
      "Dépoussiérage des meubles, plafonds et surfaces",
      "Aspiration et lavage des sols (carrelage, marbre, parquet)",
      "Nettoyage et désinfection des sanitaires et cuisines",
      "Nettoyage des vitres et fenêtres",
      "Élimination des traces, taches et impuretés",
    ],
    clients:
      "Particuliers, propriétaires, locataires, agences immobilières, gestionnaires de biens",
    coverage:
      "Casablanca, Rabat, Mohammedia, El Jadida, Marrakech, Fès, Tanger, Agadir… et toutes les villes du Maroc sur demande.",
    whyUs: [
      "Équipes discrètes et de confiance",
      "Nettoyage personnalisé selon vos besoins",
      "Produits écologiques sans danger pour la famille",
      "Disponibilité 7j/7, à l'heure convenue",
      "Devis gratuit et personnalisé",
    ],
    faq: [
      {
        q: "Dois-je être présent pendant le nettoyage ?",
        a: "Non, vous pouvez nous confier vos clés en toute sécurité. Nos équipes sont formées et fiables.",
      },
      {
        q: "Nettoyez-vous après un déménagement ?",
        a: "Oui, nous proposons des nettoyages de fin de bail et de pré-installation pour remettre votre logement en parfait état.",
      },
      {
        q: "Quelle est la fréquence recommandée ?",
        a: "Selon vos besoins : nettoyage ponctuel, hebdomadaire ou mensuel. Nous proposons des formules d'abonnement avantageuses.",
      },
    ],
    icon: Key,
    image:
      "/services/Nettoyage appartements.png",
  },
  {
    slug: "nettoyage-residences-immeubles",
    title: "Nettoyage résidences, immeubles",
    description:
      "Entretien des parties communes, halls d'entrée et espaces partagés de vos résidences et immeubles.",
    intro:
      "La propreté des parties communes est essentielle à la qualité de vie des résidents. Eden Plaza Nettoyage assure l'entretien régulier de vos halls d'entrée, escaliers, couloirs et espaces extérieurs.",
    prestations: [
      "Nettoyage des halls d'entrée et couloirs",
      "Entretien des escaliers et cages d'escalier",
      "Nettoyage des ascenseurs",
      "Entretien des parkings et sous-sols",
      "Nettoyage des espaces extérieurs et abords",
      "Gestion des ordures et propreté des locaux à poubelles",
    ],
    clients:
      "Syndics de copropriété, gérants d'immeubles, promoteurs immobiliers, résidences privées",
    coverage:
      "Casablanca, Rabat, Mohammedia, El Jadida, Marrakech, Fès, Tanger, Agadir… et toutes les villes du Maroc sur demande.",
    whyUs: [
      "Interventions régulières selon un planning défini",
      "Personnel formé et identifié",
      "Matériel professionnel adapté aux grands espaces",
      "Rapport d'intervention fourni sur demande",
      "Devis gratuit et personnalisé",
    ],
    faq: [
      {
        q: "À quelle fréquence intervenez-vous dans les résidences ?",
        a: "Nous proposons des passages quotidiens, hebdomadaires ou bimensuels selon vos besoins et le trafic de votre immeuble.",
      },
      {
        q: "Gérez-vous également les espaces verts extérieurs ?",
        a: "Oui, nous pouvons prendre en charge l'entretien des espaces verts et des abords extérieurs de votre résidence.",
      },
      {
        q: "Proposez-vous des contrats annuels ?",
        a: "Oui, nous proposons des contrats d'entretien annuels avec des tarifs préférentiels pour les résidences et immeubles.",
      },
    ],
    icon: Building,
    image:
      "/services/Nettoyage résidences, immeubles.png",
  },
  {
    slug: "nettoyage-centres-commerciaux",
    title: "Nettoyage centres commerciaux",
    description:
      "Nettoyage professionnel des espaces commerciaux, galeries et zones de passage à fort trafic.",
    intro:
      "Un centre commercial propre et accueillant est un gage de qualité pour vos clients. Eden Plaza Nettoyage assure l'entretien complet de vos galeries marchandes, zones de restauration et espaces communs.",
    prestations: [
      "Nettoyage des galeries et allées de circulation",
      "Entretien des sanitaires publics",
      "Nettoyage des vitrines et devantures",
      "Aspiration et lavage mécanisé des sols",
      "Nettoyage des zones de restauration",
      "Gestion des déchets et entretien des bacs",
    ],
    clients:
      "Centres commerciaux, galeries marchandes, supermarchés, zones commerciales, complexes multiservices",
    coverage:
      "Casablanca, Rabat, Mohammedia, El Jadida, Marrakech, Fès, Tanger, Agadir… et toutes les villes du Maroc sur demande.",
    whyUs: [
      "Équipes disponibles avant, pendant et après les heures d'ouverture",
      "Matériel de lavage mécanisé haute performance",
      "Interventions discrètes et rapides",
      "Respect des normes d'hygiène publique",
      "Devis gratuit et personnalisé",
    ],
    faq: [
      {
        q: "Intervenez-vous pendant les heures d'ouverture ?",
        a: "Oui, nos équipes peuvent intervenir en continu pendant les heures d'ouverture avec du matériel silencieux et discret.",
      },
      {
        q: "Prenez-vous en charge les grandes surfaces de sol ?",
        a: "Oui, nous disposons d'autolaveuses et de matériel mécanisé adapté aux grandes surfaces de sol.",
      },
      {
        q: "Proposez-vous des contrats mensuels pour centres commerciaux ?",
        a: "Oui, nous proposons des contrats d'entretien sur mesure adaptés à la taille et aux exigences de votre centre commercial.",
      },
    ],
    icon: ShoppingBag,
    image:
      "/services/Nettoyage centres commerciaux.png",
  },
  {
    slug: "nettoyage-coproprietes",
    title: "Nettoyage copropriétés",
    description:
      "Gestion complète de la propreté des parties communes de vos copropriétés.",
    intro:
      "La gestion de la propreté d'une copropriété nécessite rigueur et régularité. Eden Plaza Nettoyage prend en charge l'entretien des parties communes pour garantir un cadre de vie agréable à tous les résidents.",
    prestations: [
      "Nettoyage hebdomadaire des parties communes",
      "Entretien des halls, paliers et escaliers",
      "Nettoyage des locaux techniques et caves",
      "Lavage des vitres des parties communes",
      "Entretien des boîtes aux lettres et interphones",
      "Suivi et rapport d'intervention mensuel",
    ],
    clients:
      "Syndics de copropriété, conseils syndicaux, résidences privées, promoteurs",
    coverage:
      "Casablanca, Rabat, Mohammedia, El Jadida, Marrakech, Fès, Tanger, Agadir… et toutes les villes du Maroc sur demande.",
    whyUs: [
      "Prestataire de confiance pour les syndics",
      "Planning d'intervention régulier et transparent",
      "Équipe dédiée à votre copropriété",
      "Communication fluide avec le conseil syndical",
      "Devis gratuit et personnalisé",
    ],
    faq: [
      {
        q: "Comment se déroule la prise en charge d'une copropriété ?",
        a: "Nous effectuons d'abord une visite technique gratuite pour établir un devis adapté, puis nous mettons en place un planning d'intervention régulier.",
      },
      {
        q: "Gérez-vous aussi les situations d'urgence ?",
        a: "Oui, nous pouvons intervenir en urgence en cas de sinistre, dégât des eaux ou nettoyage exceptionnel.",
      },
      {
        q: "Fournissez-vous un compte-rendu d'intervention ?",
        a: "Oui, nous fournissons un rapport mensuel détaillant les interventions réalisées, disponible pour le conseil syndical.",
      },
    ],
    icon: Users,
    image:
      "/services/nettoyage corprorietes.png",
  },
  {
    slug: "nettoyage-evenementiel",
    title: "Nettoyage événementiel",
    description:
      "Préparation et remise en état de vos espaces avant, pendant et après tout type d'événement.",
    intro:
      "Votre événement mérite un cadre impeccable. Eden Plaza Nettoyage intervient avant, pendant et après vos manifestations pour assurer une propreté irréprochable tout au long de votre événement.",
    prestations: [
      "Nettoyage et préparation des lieux avant l'événement",
      "Entretien en continu pendant la manifestation",
      "Remise en état complète après l'événement",
      "Gestion des déchets et évacuation des ordures",
      "Nettoyage des sanitaires mobiles et fixes",
      "Intervention rapide sur appel en cas de besoin",
    ],
    clients:
      "Organisateurs d'événements, mariages, conférences, salons, concerts, foires, séminaires",
    coverage:
      "Casablanca, Rabat, Mohammedia, El Jadida, Marrakech, Fès, Tanger, Agadir… et toutes les villes du Maroc sur demande.",
    whyUs: [
      "Réactivité et flexibilité selon le déroulé de l'événement",
      "Équipes disponibles 7j/7, nuit et jour",
      "Gestion discrète pour ne pas perturber vos invités",
      "Matériel complet pour tous types de surfaces",
      "Devis gratuit et personnalisé",
    ],
    faq: [
      {
        q: "Intervenez-vous pendant les mariages et réceptions privées ?",
        a: "Oui, nous assurons la propreté des lieux tout au long de vos réceptions, de façon discrète et efficace.",
      },
      {
        q: "Pouvez-vous gérer de grands événements avec plusieurs milliers de personnes ?",
        a: "Oui, nous disposons des équipes et du matériel nécessaires pour gérer des événements de toutes tailles.",
      },
      {
        q: "Combien de temps après l'événement la remise en état est-elle effectuée ?",
        a: "Nous pouvons intervenir dès la fin de l'événement pour une remise en état rapide et complète.",
      },
    ],
    icon: CalendarDays,
    image:
      "/services/Nettoyage événementiel.png",
  },
  {
    slug: "assainissement",
    title: "Assainissement",
    description:
      "Services d'assainissement professionnel pour garantir un environnement sain et conforme aux normes.",
    intro:
      "L'assainissement de vos espaces est essentiel pour garantir la santé et la sécurité de vos occupants. Eden Plaza Nettoyage propose des services d'assainissement professionnels pour tous types de locaux.",
    prestations: [
      "Traitement et assainissement des réseaux d'eaux usées",
      "Débouchage et curage des canalisations",
      "Désinfection des zones humides et sanitaires",
      "Traitement des odeurs et émanations",
      "Assainissement après sinistre ou inondation",
      "Contrôle et vérification de la conformité sanitaire",
    ],
    clients:
      "Restaurants, hôtels, industries agroalimentaires, collectivités, immeubles, particuliers",
    coverage:
      "Casablanca, Rabat, Mohammedia, El Jadida, Marrakech, Fès, Tanger, Agadir… et toutes les villes du Maroc sur demande.",
    whyUs: [
      "Techniciens qualifiés en assainissement",
      "Matériel de débouchage et curage haute pression",
      "Intervention rapide 7j/7",
      "Produits conformes aux normes sanitaires",
      "Devis gratuit et personnalisé",
    ],
    faq: [
      {
        q: "Intervenez-vous en urgence pour les canalisations bouchées ?",
        a: "Oui, nous proposons des interventions d'urgence pour déboucher rapidement vos canalisations.",
      },
      {
        q: "L'assainissement nécessite-t-il d'évacuer les locaux ?",
        a: "Cela dépend du type d'intervention. Nous vous informons en amont des précautions à prendre.",
      },
      {
        q: "Proposez-vous un suivi après assainissement ?",
        a: "Oui, nous assurons un suivi post-intervention pour vérifier l'efficacité du traitement et prévenir toute récidive.",
      },
    ],
    icon: Droplets,
    image:
      "/services/assainissement.png",
  },
  {
    slug: "deratisation",
    title: "Dératisation",
    description:
      "Élimination et prévention des rongeurs avec des produits homologués et des techniques éprouvées.",
    intro:
      "La présence de rongeurs représente un danger sanitaire et économique sérieux. Eden Plaza Nettoyage propose des interventions de dératisation efficaces et sécurisées pour éliminer et prévenir les infestations de rats et souris.",
    prestations: [
      "Diagnostic et inspection de l'infestation",
      "Pose d'appâts rodenticides homologués",
      "Installation de pièges mécaniques",
      "Traitement des points d'entrée et voies d'accès",
      "Suivi post-traitement et contrôle d'efficacité",
      "Conseils préventifs pour éviter les récidives",
    ],
    clients:
      "Restaurants, entrepôts, industries agroalimentaires, hôtels, résidences, commerces",
    coverage:
      "Casablanca, Rabat, Mohammedia, El Jadida, Marrakech, Fès, Tanger, Agadir… et toutes les villes du Maroc sur demande.",
    whyUs: [
      "Techniciens certifiés en lutte antiparasitaire",
      "Produits homologués et sûrs pour l'environnement",
      "Diagnostic gratuit avant intervention",
      "Garantie de résultats avec suivi post-traitement",
      "Devis gratuit et personnalisé",
    ],
    faq: [
      {
        q: "Les produits utilisés sont-ils dangereux pour mes enfants ou animaux ?",
        a: "Nous utilisons des produits homologués et vous fournissons toutes les consignes de sécurité avant intervention.",
      },
      {
        q: "Combien de passages sont nécessaires pour éliminer les rongeurs ?",
        a: "En général, 2 à 3 passages suffisent. Nous assurons un suivi pour garantir l'efficacité totale du traitement.",
      },
      {
        q: "Comment prévenir le retour des rongeurs ?",
        a: "Nous vous prodiguons des conseils pratiques et pouvons mettre en place des dispositifs préventifs durables.",
      },
    ],
    icon: MousePointer2,
    image:
      "/services/Dératisation.png",
  },
  {
    slug: "desinsectisation",
    title: "Désinsectisation",
    description:
      "Traitement professionnel contre les insectes nuisibles : cafards, moustiques, punaises et fourmis.",
    intro:
      "Les insectes nuisibles représentent un risque sanitaire et peuvent nuire à votre réputation. Eden Plaza Nettoyage propose des traitements de désinsectisation efficaces contre tous types d'insectes indésirables.",
    prestations: [
      "Traitement contre les cafards et blattes",
      "Traitement anti-moustiques et moucherons",
      "Élimination des punaises de lit",
      "Traitement contre les fourmis et termites",
      "Désinsectisation des cuisines professionnelles",
      "Pose de pièges et dispositifs préventifs",
    ],
    clients:
      "Restaurants, hôtels, résidences, entrepôts, hôpitaux, commerces, particuliers",
    coverage:
      "Casablanca, Rabat, Mohammedia, El Jadida, Marrakech, Fès, Tanger, Agadir… et toutes les villes du Maroc sur demande.",
    whyUs: [
      "Techniciens certifiés en désinsectisation",
      "Produits homologués et efficaces",
      "Traitement ciblé selon le type d'insecte",
      "Suivi post-traitement inclus",
      "Devis gratuit et personnalisé",
    ],
    faq: [
      {
        q: "Faut-il vider les placards avant l'intervention ?",
        a: "Pour certains traitements, oui. Nous vous communiquons toutes les instructions de préparation avant notre passage.",
      },
      {
        q: "Le traitement est-il efficace contre les punaises de lit ?",
        a: "Oui, nous utilisons des méthodes spécifiques combinant traitement chimique et thermique pour éliminer les punaises de lit.",
      },
      {
        q: "L'odeur des produits est-elle forte ?",
        a: "Nos produits modernes ont des odeurs réduites. Nous vous conseillons néanmoins d'aérer les pièces après l'intervention.",
      },
    ],
    icon: Bug,
    image:
      "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&h=500&fit=crop",
  },
  {
    slug: "desinfection",
    title: "Désinfection",
    description:
      "Désinfection complète de vos espaces contre virus, bactéries et agents pathogènes.",
    intro:
      "La désinfection de vos locaux est indispensable pour protéger la santé de vos collaborateurs et clients. Eden Plaza Nettoyage propose des traitements de désinfection complets avec des produits homologués et des techniques éprouvées.",
    prestations: [
      "Désinfection par brumisation ou nébulisation",
      "Traitement des surfaces à contact fréquent",
      "Désinfection des systèmes de ventilation et climatisation",
      "Traitement anti-moisissures et champignons",
      "Désinfection post-COVID et maladies infectieuses",
      "Certification de désinfection fournie sur demande",
    ],
    clients:
      "Hôpitaux, cliniques, restaurants, hôtels, écoles, crèches, bureaux, résidences",
    coverage:
      "Casablanca, Rabat, Mohammedia, El Jadida, Marrakech, Fès, Tanger, Agadir… et toutes les villes du Maroc sur demande.",
    whyUs: [
      "Produits désinfectants homologués et certifiés",
      "Techniques de désinfection de pointe",
      "Personnel formé aux protocoles sanitaires",
      "Intervention rapide et disponibilité 7j/7",
      "Devis gratuit et personnalisé",
    ],
    faq: [
      {
        q: "Quelle est la différence entre nettoyage et désinfection ?",
        a: "Le nettoyage élimine les salissures visibles, tandis que la désinfection tue les micro-organismes pathogènes invisibles à l'œil nu.",
      },
      {
        q: "Faut-il évacuer les locaux pendant la désinfection ?",
        a: "Oui, généralement une évacuation de 1 à 3 heures est nécessaire selon le type de désinfectant utilisé.",
      },
      {
        q: "Fournissez-vous un certificat de désinfection ?",
        a: "Oui, nous pouvons fournir un certificat de désinfection attestant de l'intervention réalisée.",
      },
    ],
    icon: Sparkles,
    image:
      "/services/Désinfection.jpg",
  },
  {
    slug: "jardinage",
    title: "Jardinage",
    description:
      "Entretien et aménagement de vos jardins, espaces verts et terrasses pour un cadre verdoyant.",
    intro:
      "Un jardin bien entretenu est le reflet de votre soin pour votre environnement. Eden Plaza Nettoyage propose des services de jardinage et d'entretien des espaces verts pour particuliers et professionnels.",
    prestations: [
      "Tonte de pelouse et entretien du gazon",
      "Taille des haies, arbustes et arbres",
      "Désherbage et entretien des massifs",
      "Plantation et aménagement paysager",
      "Arrosage et fertilisation",
      "Nettoyage des terrasses et allées",
    ],
    clients:
      "Particuliers, villas, hôtels, résidences, entreprises, collectivités",
    coverage:
      "Casablanca, Rabat, Mohammedia, El Jadida, Marrakech, Fès, Tanger, Agadir… et toutes les villes du Maroc sur demande.",
    whyUs: [
      "Jardiniers qualifiés et passionnés",
      "Matériel professionnel de jardinage",
      "Conseils personnalisés pour votre espace vert",
      "Entretien régulier selon saison et besoins",
      "Devis gratuit et personnalisé",
    ],
    faq: [
      {
        q: "À quelle fréquence faut-il entretenir un jardin ?",
        a: "Cela dépend de la saison et de la végétation. Nous recommandons un entretien mensuel minimum pour maintenir un jardin propre et soigné.",
      },
      {
        q: "Proposez-vous l'aménagement de nouveaux espaces verts ?",
        a: "Oui, nous pouvons concevoir et aménager de nouveaux espaces verts selon vos souhaits et votre budget.",
      },
      {
        q: "Intervenez-vous pour les petits jardins d'appartement ou terrasses ?",
        a: "Oui, nous intervenons pour tout type d'espace vert, des balcons et terrasses aux grands jardins.",
      },
    ],
    icon: Leaf,
    image:
      "/services/Jardinage.jpg",
  },
  {
    slug: "nettoyage-piscine",
    title: "Nettoyage de Piscine",
    description:
      "Entretien complet de vos piscines privées et publiques : nettoyage, traitement de l'eau et maintenance régulière.",
    intro:
      "Une piscine propre et bien entretenue est synonyme de plaisir et de sécurité pour vous et vos proches. Eden Plaza Nettoyage assure l'entretien complet de vos piscines privées, d'hôtels ou de résidences, du nettoyage des parois au traitement chimique de l'eau.",
    prestations: [
      "Nettoyage des parois, fond et margelles de la piscine",
      "Aspiration des dépôts et débris au fond du bassin",
      "Traitement et équilibrage chimique de l'eau (pH, chlore, algicides)",
      "Nettoyage et entretien des filtres et pompes de filtration",
      "Désinfection et traitement anti-algues",
      "Nettoyage des plages, terrasses et abords de la piscine",
    ],
    clients:
      "Particuliers, villas, hôtels, résidences, clubs sportifs, complexes touristiques",
    coverage:
      "Casablanca, Rabat, Mohammedia, El Jadida, Marrakech, Fès, Tanger, Agadir… et toutes les villes du Maroc sur demande.",
    whyUs: [
      "Techniciens formés au traitement et à l'entretien des piscines",
      "Analyse et équilibrage précis des paramètres de l'eau",
      "Produits de traitement homologués et sans danger",
      "Contrats d'entretien régulier adaptés à vos besoins",
      "Devis gratuit et personnalisé",
    ],
    faq: [
      {
        q: "À quelle fréquence faut-il entretenir une piscine ?",
        a: "Pour une eau saine et cristalline, nous recommandons un entretien hebdomadaire en période d'utilisation. En hiver ou hors saison, un passage mensuel suffit généralement.",
      },
      {
        q: "Traitez-vous les piscines envahies par les algues ?",
        a: "Oui, nous proposons des traitements choc anti-algues efficaces pour remettre rapidement votre piscine en état, même en cas d'infestation avancée.",
      },
      {
        q: "Intervenez-vous aussi pour la remise en eau après l'hivernage ?",
        a: "Absolument, nous assurons la remise en service complète de votre piscine après l'hivernage : nettoyage, remontée en eau, équilibrage chimique et vérification du système de filtration.",
      },
    ],
    icon: Waves,
    image:
      "/services/Nettoyage de Piscine.jpg",
  },
  {
    slug: "entretien-renovation",
    title: "Entretien et rénovation",
    description:
      "Services complets d'entretien courant et de rénovation légère pour vos espaces professionnels et résidentiels.",
    intro:
      "Au-delà du nettoyage, Eden Plaza Nettoyage propose des services d'entretien courant et de petite rénovation pour maintenir vos espaces en parfait état et préserver la valeur de vos biens.",
    prestations: [
      "Entretien courant des installations et équipements",
      "Petits travaux de rénovation et remise en état",
      "Peinture intérieure et ravalement",
      "Réparations diverses (plomberie, menuiserie légère)",
      "Remplacement d'équipements défectueux",
      "Mise aux normes et amélioration des espaces",
    ],
    clients:
      "Particuliers, entreprises, hôtels, résidences, propriétaires bailleurs, agences immobilières",
    coverage:
      "Casablanca, Rabat, Mohammedia, El Jadida, Marrakech, Fès, Tanger, Agadir… et toutes les villes du Maroc sur demande.",
    whyUs: [
      "Équipe polyvalente pour tous types de travaux",
      "Intervention rapide et devis transparent",
      "Qualité des travaux garantie",
      "Coordination complète des interventions",
      "Devis gratuit et personnalisé",
    ],
    faq: [
      {
        q: "Prenez-vous en charge les petits travaux de plomberie ?",
        a: "Oui, nos équipes peuvent gérer les petites réparations de plomberie et autres travaux courants.",
      },
      {
        q: "Peut-on combiner entretien et nettoyage dans un même contrat ?",
        a: "Oui, nous proposons des contrats combinés entretien + nettoyage pour une gestion simplifiée de vos espaces.",
      },
      {
        q: "Intervenez-vous pour la rénovation avant une mise en location ?",
        a: "Oui, nous proposons des forfaits remise en état complets pour préparer vos biens à la location ou à la vente.",
      },
    ],
    icon: Wrench,
    image:
      "/services/Entretien et rénovation.jpg",
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return SERVICES_DETAIL.find((s) => s.slug === slug);
}

export function getOtherServices(currentSlug: string): ServiceDetail[] {
  return SERVICES_DETAIL.filter((s) => s.slug !== currentSlug);
}
