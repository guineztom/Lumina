// ============================================================
// LUMINA AI — DONNÉES DES OUTILS
// Pour ajouter un outil : copiez le modèle commenté ci-dessous.
// ============================================================

const SECTEURS = [
  {
    id: "creation-site",
    label: "Créer un site web",
    headline: "Créez votre site web avec l'IA",
    sub: "Indépendants, coachs, micro-entrepreneurs : lancez votre présence en ligne en quelques minutes sans coder une seule ligne.",
    photo: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80"
  },
  {
    id: "redaction-seo",
    label: "Rédaction & SEO",
    headline: "Rédigez plus vite, rankez plus haut",
    sub: "Des outils pour produire du contenu optimisé SEO, des articles de blog, des descriptions produits et des textes marketing — sans être rédacteur pro.",
    photo: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=80"
  },
  {
    id: "reseaux-sociaux",
    label: "Réseaux sociaux",
    headline: "Automatisez vos réseaux sociaux",
    sub: "Planifiez, générez et publiez du contenu sur Instagram, LinkedIn, Twitter et TikTok — sans y passer vos journées.",
    photo: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80"
  },
  {
    id: "image-design",
    label: "Image & Design",
    headline: "Créez des visuels professionnels sans designer",
    sub: "Générez des images, des logos, des bannières et des maquettes en quelques secondes — sans compétences en design.",
    photo: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80"
  },
  {
    id: "video-audio",
    label: "Vidéo & Audio",
    headline: "Créez des vidéos sans monter, sans caméra",
    sub: "Transformez un texte en vidéo, créez des avatars qui parlent, générez une musique de fond — sans logiciel de montage.",
    photo: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&q=80"
  },
  {
    id: "business-marketing",
    label: "Business & Marketing",
    headline: "Développez votre activité avec l'IA",
    sub: "Copywriting, prospection, idées business, automatisation marketing — des outils pour trouver des clients et faire grandir votre activité.",
    photo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
  }
];

// ============================================================
// MODÈLE POUR AJOUTER UN OUTIL :
// {
//   id: "nom-unique",
//   name: "Nom de l'outil",
//   tagline: "Description courte — une phrase.",
//   category: "website-builder",
//   sector: ["creation-site"],
//   priceDetails: "Gratuit / 14 $/mois (Pro)",
//   priceType: "Freemium",   // Gratuit | Freemium | Payant | Sur devis
//   logo: "https://logo.clearbit.com/domaine.com",
//   url: "#",   // remplacer par lien affilié plus tard
//   tags: ["Tag1", "Tag2"],
//   description: "Description courte (3-4 phrases).",
//   features: ["Fonctionnalité 1", "Fonctionnalité 2"],
//   useCases: ["Pour qui et pourquoi 1", "Pour qui et pourquoi 2"],
// },
// ============================================================

const OUTILS = [

  // ── CRÉER UN SITE WEB ──────────────────────────────────────

  {
    id: "durable",
    name: "Durable",
    tagline: "Créez un site web complet en 30 secondes grâce à l'IA.",
    category: "website-builder",
    sector: ["creation-site"],
    priceDetails: "Gratuit (limité) / 12 $/mois (Starter) / 20 $/mois (Business)",
    priceType: "Freemium",
    logo: "https://logo.clearbit.com/durable.co",
    url: "#",
    tags: ["Site web", "IA générative", "No-code"],
    description: "Durable génère automatiquement un site web complet — textes, images, structure — à partir de votre secteur d'activité et de votre nom. Idéal pour les indépendants et micro-entrepreneurs qui veulent une présence en ligne rapide sans budget web ni compétences techniques.",
    features: [
      "Génération de site en 30 secondes",
      "Éditeur visuel drag & drop",
      "Formulaire de contact intégré",
      "Optimisation SEO de base incluse",
      "Nom de domaine personnalisé (offres payantes)"
    ],
    useCases: [
      "Coach ou thérapeute qui veut un site vitrine rapidement",
      "Artisan ou prestataire qui lance son activité",
      "Freelance qui a besoin d'une page de présentation professionnelle"
    ]
  },
  {
    id: "framer-ai",
    name: "Framer AI",
    tagline: "Le constructeur de sites web le plus créatif, propulsé par l'IA.",
    category: "website-builder",
    sector: ["creation-site"],
    priceDetails: "Gratuit / 10 $/mois (Mini) / 20 $/mois (Basic) / 35 $/mois (Pro)",
    priceType: "Freemium",
    logo: "https://logo.clearbit.com/framer.com",
    url: "#",
    tags: ["Site web", "Design haut de gamme", "No-code"],
    description: "Framer combine un éditeur visuel ultra-puissant avec une IA capable de générer des sections, du texte et des mises en page à la demande. Les résultats sont visuellement bien au-dessus de la moyenne des builders classiques. Courbe d'apprentissage légèrement plus élevée, mais résultat haut de gamme.",
    features: [
      "Génération de sections et textes par prompt IA",
      "Animations et interactions avancées sans code",
      "Responsive design automatique",
      "Publication sur domaine personnalisé",
      "CMS intégré pour blog et contenu dynamique"
    ],
    useCases: [
      "Créatif ou designer qui veut un portfolio percutant",
      "Indépendant qui veut se démarquer visuellement",
      "Consultant qui veut une landing page d'impact"
    ]
  },
  {
    id: "10web",
    name: "10Web",
    tagline: "Créez et hébergez un site WordPress optimisé avec l'IA.",
    category: "website-builder",
    sector: ["creation-site"],
    priceDetails: "À partir de 10 $/mois (hébergement + builder inclus)",
    priceType: "Payant",
    logo: "https://logo.clearbit.com/10web.io",
    url: "#",
    tags: ["WordPress", "Hébergement", "IA"],
    description: "10Web combine un générateur de site IA avec un hébergement WordPress managé haute performance. Vous décrivez votre activité, l'IA construit un site WordPress complet que vous personnalisez ensuite. Parfait pour ceux qui veulent la puissance de WordPress sans la complexité technique.",
    features: [
      "Génération de site WordPress par l'IA",
      "Hébergement managé (cache, sécurité, sauvegardes)",
      "Éditeur Elementor intégré",
      "Score PageSpeed 90+ garanti",
      "Migration depuis un site existant"
    ],
    useCases: [
      "Entrepreneur qui veut WordPress sans gérer l'hébergement",
      "Blogueur qui veut un site rapide et optimisé SEO",
      "Indépendant qui délègue la partie technique"
    ]
  },
  {
    id: "hostinger-ai",
    name: "Hostinger AI",
    tagline: "L'hébergeur abordable avec un builder IA intégré.",
    category: "website-builder",
    sector: ["creation-site"],
    priceDetails: "À partir de 2,99 $/mois (hébergement + builder inclus)",
    priceType: "Payant",
    logo: "https://logo.clearbit.com/hostinger.com",
    url: "#",
    tags: ["Hébergement", "Site web", "Petit budget"],
    description: "Hostinger propose l'un des meilleurs rapports qualité-prix du marché : hébergement web fiable + builder IA pour créer son site, le tout à moins de 3 $/mois. L'IA génère textes et structure à partir d'un brief simple. Idéal pour démarrer avec un budget serré.",
    features: [
      "Builder IA avec génération de contenu",
      "Hébergement inclus dans l'abonnement",
      "Domaine gratuit la première année",
      "Certificat SSL inclus",
      "Emails professionnels inclus"
    ],
    useCases: [
      "Auto-entrepreneur qui lance son premier site avec un petit budget",
      "Association qui a besoin d'une présence simple en ligne",
      "Particulier qui veut créer un blog ou portfolio sans se ruiner"
    ]
  },
  {
    id: "bookmark-ai",
    name: "Bookmark AI (AIDA)",
    tagline: "Votre assistant IA personnel qui construit et améliore votre site.",
    category: "website-builder",
    sector: ["creation-site"],
    priceDetails: "Gratuit (sous-domaine) / 12 $/mois (Standard) / 24 $/mois (Pro)",
    priceType: "Freemium",
    logo: "https://logo.clearbit.com/bookmark.com",
    url: "#",
    tags: ["Site web", "Assistant IA", "E-commerce"],
    description: "Bookmark propose AIDA, un assistant IA qui construit votre site en posant quelques questions simples, puis continue à vous suggérer des améliorations au fil du temps. Il intègre des fonctionnalités e-commerce complètes et est particulièrement adapté aux petits commerces et prestataires de services.",
    features: [
      "Assistant IA conversationnel pour créer le site",
      "E-commerce intégré (boutique, panier, paiement)",
      "Suggestions d'amélioration continues",
      "Réservations et prise de RDV intégrées",
      "Templates spécifiques par secteur d'activité"
    ],
    useCases: [
      "Commerçant ou artisan qui veut un site avec boutique en ligne",
      "Thérapeute ou coach qui veut intégrer un système de réservation",
      "Prestataire qui veut un site qui évolue avec son activité"
    ]
  },

  // ── RÉDACTION & SEO ────────────────────────────────────────

  {
    id: "koala-ai",
    name: "Koala AI",
    tagline: "Générez des articles de blog SEO publiables en un clic.",
    category: "seo-writing",
    sector: ["redaction-seo"],
    priceDetails: "À partir de 9 $/mois (100 crédits) — plusieurs paliers disponibles",
    priceType: "Payant",
    logo: "https://logo.clearbit.com/koala.sh",
    url: "#",
    tags: ["SEO", "Blog", "Contenu long"],
    description: "Koala AI génère des articles de blog longs, bien structurés et optimisés SEO directement depuis un mot-clé. Il intègre les résultats de recherche en temps réel pour que le contenu soit actuel et factuel. L'un des meilleurs rapports qualité-prix pour la production de contenu SEO.",
    features: [
      "Génération d'articles de 1500 à 3000 mots",
      "Intégration des SERPs en temps réel",
      "Structure H1/H2/H3 automatique",
      "Images Unsplash intégrées automatiquement",
      "Export direct vers WordPress"
    ],
    useCases: [
      "Blogueur qui veut publier régulièrement sans tout rédiger",
      "Freelance SEO qui gère plusieurs clients en parallèle",
      "E-commerçant qui veut des articles et fiches produits optimisés"
    ]
  },
  {
    id: "neuronwriter",
    name: "NeuronWriter",
    tagline: "L'outil SEO qui vous dit exactement quoi écrire pour ranker.",
    category: "seo-writing",
    sector: ["redaction-seo"],
    priceDetails: "À partir de 19 $/mois (Bronze) — Bronze / Silver / Gold / Platinum",
    priceType: "Payant",
    logo: "https://logo.clearbit.com/neuronwriter.com",
    url: "#",
    tags: ["SEO", "Analyse concurrents", "Optimisation"],
    description: "NeuronWriter analyse les 30 premiers résultats Google sur votre mot-clé et vous indique précisément quels termes sémantiques inclure, quelle longueur cibler, quelle structure adopter. L'IA rédige ensuite un contenu aligné sur ces recommandations.",
    features: [
      "Analyse sémantique des concurrents top 30",
      "Score d'optimisation en temps réel",
      "Rédaction assistée par IA",
      "Gestion de projets et briefs SEO",
      "Intégration WordPress et Google Search Console"
    ],
    useCases: [
      "Blogueur ambitieux qui veut dépasser ses concurrents sur Google",
      "Freelance SEO qui produit des contenus à fort potentiel",
      "Créateur de site de niche qui construit son autorité"
    ]
  },
  {
    id: "surgeograph",
    name: "SurgeGraph",
    tagline: "Créez une stratégie de contenu SEO complète et rédigez en masse.",
    category: "seo-writing",
    sector: ["redaction-seo"],
    priceDetails: "À partir de 29 $/mois",
    priceType: "Payant",
    logo: "https://logo.clearbit.com/surgegraph.io",
    url: "#",
    tags: ["SEO", "Stratégie contenu", "Génération en volume"],
    description: "SurgeGraph permet de construire une stratégie de cocon sémantique complète : il identifie les clusters de mots-clés, planifie les articles et les génère en masse. Particulièrement adapté aux sites qui veulent accélérer leur croissance SEO organique rapidement.",
    features: [
      "Cartographie de clusters de mots-clés",
      "Génération d'articles en lot",
      "Optimisation SERP intégrée",
      "Planificateur de contenu visuel",
      "Export multi-format"
    ],
    useCases: [
      "Créateur de sites de niche qui veut scaler rapidement son contenu",
      "Entrepreneur qui lance un blog et veut dominer un sujet",
      "Indépendant qui construit son trafic organique sur le long terme"
    ]
  },
  {
    id: "outranking",
    name: "Outranking",
    tagline: "Planifiez, rédigez et optimisez votre contenu SEO dans un seul outil.",
    category: "seo-writing",
    sector: ["redaction-seo"],
    priceDetails: "29 $/mois (Starter) / 79 $/mois (Solo) / 159 $/mois (Pro)",
    priceType: "Payant",
    logo: "https://logo.clearbit.com/outranking.io",
    url: "#",
    tags: ["SEO", "Rédaction", "Stratégie"],
    description: "Outranking couvre tout le cycle de vie du contenu SEO : recherche de mots-clés, brief automatique, rédaction assistée et optimisation post-publication. Son tableau de bord de suivi de positionnement en fait une plateforme tout-en-un pour les créateurs de contenu sérieux.",
    features: [
      "Brief SEO automatique basé sur les concurrents",
      "Rédaction assistée avec score d'optimisation",
      "Suivi de positionnement intégré",
      "Intégration WordPress et Google Docs",
      "Stratégie de maillage interne suggérée"
    ],
    useCases: [
      "Blogueur qui veut une stratégie SEO structurée sur le long terme",
      "Freelance SEO qui gère plusieurs sites clients",
      "Entrepreneur qui construit son trafic organique"
    ]
  },
  {
    id: "ink-ai",
    name: "INK AI",
    tagline: "Rédigez et optimisez SEO simultanément avec l'IA.",
    category: "seo-writing",
    sector: ["redaction-seo"],
    priceDetails: "Gratuit (limité) / 49 $/mois (Pro) / 99 $/mois (Team)",
    priceType: "Freemium",
    logo: "https://logo.clearbit.com/inkforall.com",
    url: "#",
    tags: ["SEO", "Rédaction", "Score en direct"],
    description: "INK AI combine rédaction assistée et optimisation SEO dans un seul éditeur. Son score SEO en temps réel guide la rédaction pour que chaque article soit optimisé dès sa création. Il intègre aussi un mode de protection contre les pénalités IA des moteurs de recherche.",
    features: [
      "Éditeur avec score SEO en temps réel",
      "Génération de contenu assistée par IA",
      "Mode protection anti-pénalités IA Google",
      "Recherche de mots-clés intégrée",
      "Templates pour tous types de contenus marketing"
    ],
    useCases: [
      "Rédacteur web qui veut optimiser son contenu pendant qu'il écrit",
      "Blogueur qui veut éviter les pénalités Google pour contenu IA",
      "Marketeur qui crée des landing pages et emails optimisés"
    ]
  },
  {
    id: "writerzen",
    name: "WriterZen",
    tagline: "Découvrez des mots-clés à fort potentiel et créez du contenu optimisé.",
    category: "seo-writing",
    sector: ["redaction-seo"],
    priceDetails: "À partir de 23 $/mois (Basic)",
    priceType: "Payant",
    logo: "https://logo.clearbit.com/writerzen.net",
    url: "#",
    tags: ["Mots-clés", "Cluster SEO", "Rédaction"],
    description: "WriterZen est un outil de recherche de mots-clés et de création de contenu SEO. Sa force : le Golden Filter qui identifie automatiquement les mots-clés les plus faciles à ranker avec le meilleur potentiel de trafic. Combiné à son éditeur IA, il couvre tout le workflow SEO.",
    features: [
      "Recherche de mots-clés avec Golden Filter",
      "Cartographie de clusters sémantiques",
      "Éditeur de contenu assisté par IA",
      "Analyse de la concurrence",
      "Plagiat checker intégré"
    ],
    useCases: [
      "Créateur de site de niche qui cherche des mots-clés peu compétitifs",
      "Blogueur qui veut construire une stratégie sémantique complète",
      "Indépendant qui veut trouver des sujets rentables avant de rédiger"
    ]
  },
  {
    id: "longshot-ai",
    name: "LongShot AI",
    tagline: "Rédigez des contenus longs vérifiés et sourcés avec l'IA.",
    category: "seo-writing",
    sector: ["redaction-seo"],
    priceDetails: "Gratuit (limité) / 19 $/mois (Pro) / 49 $/mois (Team)",
    priceType: "Freemium",
    logo: "https://logo.clearbit.com/longshot.ai",
    url: "#",
    tags: ["Rédaction", "Vérification des faits", "Contenu long"],
    description: "LongShot AI se distingue par sa vérification des faits intégrée — une fonctionnalité rare qui réduit les hallucinations typiques des IA génératives. Idéal pour les contenus qui engagent votre crédibilité : guides experts, études de cas, articles de fond.",
    features: [
      "Vérification des faits en temps réel",
      "Templates pour 50+ types de contenu",
      "Génération de FAQ optimisées pour le référencement",
      "Mode rédaction longue form",
      "Détecteur de plagiat intégré"
    ],
    useCases: [
      "Expert ou consultant qui publie des contenus qui engagent sa crédibilité",
      "Formateur qui crée des guides et ressources détaillées",
      "Indépendant qui veut produire du contenu factuel et sourcé"
    ]
  },
  {
    id: "ghostwriter-ai",
    name: "Ghostwriter AI",
    tagline: "Un assistant de rédaction IA qui apprend et conserve votre style.",
    category: "copywriting",
    sector: ["redaction-seo", "business-marketing"],
    priceDetails: "À partir de 9 $/mois",
    priceType: "Payant",
    logo: "https://logo.clearbit.com/ghostwriter.ai",
    url: "#",
    tags: ["Rédaction", "Style personnel", "Newsletter"],
    description: "Ghostwriter AI se distingue par sa capacité à apprendre et reproduire votre style d'écriture. Après quelques exemples de vos textes, il génère des contenus qui sonnent comme vous : newsletters, posts LinkedIn, scripts, articles. Idéal pour scaler sa production sans perdre sa voix.",
    features: [
      "Apprentissage de votre style d'écriture personnel",
      "Templates pour newsletters, posts sociaux, scripts",
      "Éditeur collaboratif",
      "Mode voix de marque mémorisable",
      "Générateur de plans et structures"
    ],
    useCases: [
      "Newsletter writer qui veut accélérer sans perdre son ton",
      "Coach ou expert qui crée du contenu dans sa voix",
      "Créateur LinkedIn qui veut publier plus fréquemment"
    ]
  },

  // ── RÉSEAUX SOCIAUX ────────────────────────────────────────

  {
    id: "ocoya",
    name: "Ocoya",
    tagline: "Planifiez et générez vos posts réseaux sociaux avec l'IA.",
    category: "social-media",
    sector: ["reseaux-sociaux"],
    priceDetails: "À partir de 15 $/mois (Bronze) — jusqu'à 99 $/mois (Diamond)",
    priceType: "Payant",
    logo: "https://logo.clearbit.com/ocoya.com",
    url: "#",
    tags: ["Planification", "Multi-plateformes", "Contenu social"],
    description: "Ocoya combine un générateur de contenu IA avec un planificateur de réseaux sociaux et un éditeur de visuels. Une plateforme tout-en-un pour créer, programmer et publier sur Instagram, LinkedIn, Twitter, Facebook et TikTok depuis un seul endroit.",
    features: [
      "Génération de captions IA en 26 langues",
      "Planificateur de publications multi-plateformes",
      "Éditeur de visuels intégré (type Canva)",
      "Bibliothèque de templates prêts à l'emploi",
      "Analyses de performance intégrées"
    ],
    useCases: [
      "Solopreneur qui gère ses réseaux sans community manager",
      "Coach qui veut maintenir une présence quotidienne sur LinkedIn",
      "Boutique en ligne qui automatise ses posts produits"
    ]
  },
  {
    id: "predis-ai",
    name: "Predis.ai",
    tagline: "Générez des posts visuels et des vidéos pour les réseaux en secondes.",
    category: "social-media",
    sector: ["reseaux-sociaux"],
    priceDetails: "Gratuit (5 posts/mois) / 29 $/mois (Solo) / 59 $/mois (Starter)",
    priceType: "Freemium",
    logo: "https://logo.clearbit.com/predis.ai",
    url: "#",
    tags: ["Instagram", "Contenu visuel", "Carousels"],
    description: "Predis.ai génère automatiquement des visuels, des carousels et des vidéos courtes pour les réseaux sociaux à partir d'un simple texte ou d'une URL. Ses templates sont pensés pour l'engagement et la conversion sur Instagram et LinkedIn.",
    features: [
      "Génération de visuels et carousels IA",
      "Création de Reels et vidéos courtes",
      "Analyse des posts concurrents",
      "Planificateur de publications intégré",
      "Hashtags suggérés automatiquement"
    ],
    useCases: [
      "Entrepreneur qui veut des visuels professionnels sans designer",
      "Infopreneur qui crée des carousels Instagram engageants",
      "E-commerçant qui automatise ses posts produits"
    ]
  },
  {
    id: "taplio",
    name: "Taplio",
    tagline: "Développez votre audience et votre business sur LinkedIn avec l'IA.",
    category: "social-media",
    sector: ["reseaux-sociaux"],
    priceDetails: "39 $/mois (Essential) / 65 $/mois (Pro) — essai gratuit 7 jours",
    priceType: "Payant",
    logo: "https://logo.clearbit.com/taplio.com",
    url: "#",
    tags: ["LinkedIn", "Personal branding", "Croissance"],
    description: "Taplio est l'outil de référence pour développer son personal branding sur LinkedIn. Il génère des idées de posts, rédige du contenu, analyse les performances et facilite l'engagement avec votre réseau. Très utilisé par les coachs, consultants et créateurs de contenu B2B.",
    features: [
      "Génération de posts LinkedIn par IA",
      "Bibliothèque de posts viraux pour s'inspirer",
      "Planificateur et scheduling",
      "CRM LinkedIn pour gérer ses contacts",
      "Analyses de croissance détaillées"
    ],
    useCases: [
      "Consultant ou coach qui veut construire son autorité sur LinkedIn",
      "Freelance qui cherche des clients via LinkedIn",
      "Entrepreneur qui veut documenter et partager son parcours"
    ]
  },
  {
    id: "publer-ai",
    name: "Publer AI",
    tagline: "Planifiez et automatisez toute votre présence social media.",
    category: "social-media",
    sector: ["reseaux-sociaux"],
    priceDetails: "Gratuit (3 comptes) / 12 $/mois (Professional) / 21 $/mois (Business)",
    priceType: "Freemium",
    logo: "https://logo.clearbit.com/publer.io",
    url: "#",
    tags: ["Planification", "Automation", "Multi-comptes"],
    description: "Publer est un planificateur social media complet avec fonctionnalités IA intégrées : génération de captions, suggestions de hashtags, analyse des meilleurs horaires de publication. Compatible avec Instagram, Facebook, LinkedIn, Twitter, TikTok, Pinterest et Google My Business.",
    features: [
      "Planification sur 8 plateformes simultanément",
      "Génération de captions par IA",
      "Recyclage automatique des meilleurs posts",
      "Collaboration en équipe",
      "Analyse des performances"
    ],
    useCases: [
      "Solopreneur qui veut automatiser sa présence sur tous les réseaux",
      "Créateur de contenu qui recycle intelligemment son contenu",
      "Indépendant qui programme ses posts à l'avance"
    ]
  },
  {
    id: "tweet-hunter",
    name: "Tweet Hunter",
    tagline: "Automatisez votre croissance sur X (Twitter) avec l'IA.",
    category: "social-media",
    sector: ["reseaux-sociaux"],
    priceDetails: "49 $/mois (Basic) / 99 $/mois (Pro) — essai gratuit 7 jours",
    priceType: "Payant",
    logo: "https://logo.clearbit.com/tweethunter.io",
    url: "#",
    tags: ["Twitter / X", "Croissance", "Automatisation"],
    description: "Tweet Hunter est conçu pour les créateurs et entrepreneurs qui veulent bâtir une audience sur X rapidement. Il génère des tweets et threads, programme les publications, automatise l'engagement et dispose d'une base de données de tweets viraux pour s'inspirer.",
    features: [
      "Génération de tweets et threads par IA",
      "Base de données de 2M+ tweets viraux",
      "Planificateur et auto-retweet",
      "CRM pour gérer ses DMs et contacts",
      "Automatisation de l'engagement"
    ],
    useCases: [
      "Créateur de contenu qui veut percer sur X",
      "Entrepreneur qui partage son parcours en public",
      "Expert qui veut devenir une référence dans sa niche"
    ]
  },
  {
    id: "hypefury",
    name: "Hypefury",
    tagline: "Publiez, planifiez et monétisez votre audience sur X et Instagram.",
    category: "social-media",
    sector: ["reseaux-sociaux"],
    priceDetails: "19 $/mois (Standard) / 49 $/mois (Premium)",
    priceType: "Payant",
    logo: "https://logo.clearbit.com/hypefury.com",
    url: "#",
    tags: ["Twitter / X", "Instagram", "Monétisation"],
    description: "Hypefury va au-delà de la planification : il aide à monétiser son audience via des promotions automatiques de produits ou newsletters après chaque post viral. Particulièrement adapté aux créateurs qui vendent des formations, ebooks ou services en ligne.",
    features: [
      "Planification X et Instagram depuis un seul endroit",
      "Auto-promotion après vos posts viraux",
      "Génération de contenu assistée",
      "Statistiques de croissance",
      "Templates de threads performants"
    ],
    useCases: [
      "Infopreneur qui vend des formations et veut automatiser la promotion",
      "Créateur de newsletter qui veut convertir ses followers",
      "Coach qui génère des leads depuis ses réseaux sociaux"
    ]
  },

  // ── IMAGE & DESIGN ─────────────────────────────────────────

  {
    id: "looka",
    name: "Looka",
    tagline: "Créez un logo professionnel et une identité visuelle complète avec l'IA.",
    category: "branding",
    sector: ["image-design"],
    priceDetails: "Logo unique : 20 $ / Brand Kit : 96 $/an",
    priceType: "Payant",
    logo: "https://logo.clearbit.com/looka.com",
    url: "#",
    tags: ["Logo", "Identité visuelle", "Branding"],
    description: "Looka génère des dizaines de propositions de logos basées sur votre secteur, vos couleurs préférées et votre style. Vous choisissez, personnalisez, puis téléchargez en haute résolution. Le Brand Kit inclut carte de visite, signature email, favicon et templates réseaux sociaux.",
    features: [
      "Génération illimitée de logos IA",
      "Personnalisation complète (couleurs, typos, icônes)",
      "Téléchargement en SVG, PNG, PDF haute résolution",
      "Brand Kit complet (cartes, réseaux, emails)",
      "Accès illimité aux révisions"
    ],
    useCases: [
      "Auto-entrepreneur qui lance son activité et a besoin d'un logo rapidement",
      "Freelance qui veut professionnaliser son image de marque",
      "Porteur de projet qui teste une identité visuelle avant de payer un designer"
    ]
  },
  {
    id: "logoai",
    name: "LogoAI",
    tagline: "Un logo IA minimaliste et élégant en quelques clics.",
    category: "branding",
    sector: ["image-design"],
    priceDetails: "À partir de 29 $ (logo seul) — packs jusqu'à 199 $",
    priceType: "Payant",
    logo: "https://logo.clearbit.com/logoai.com",
    url: "#",
    tags: ["Logo", "Minimaliste", "Paiement unique"],
    description: "LogoAI propose une approche épurée de la création de logo : saisissez votre nom, votre secteur et votre style, et l'IA génère des propositions au rendu professionnel. Les logos sont disponibles immédiatement en haute résolution pour tous les formats d'utilisation.",
    features: [
      "Génération de logos en style vectoriel",
      "Styles variés (minimaliste, moderne, vintage, tech)",
      "Export SVG et PNG sans fond",
      "Déclinaisons couleurs incluses",
      "Animateur de logo (GIF/vidéo)"
    ],
    useCases: [
      "Créateur de contenu qui veut une identité simple et reconnaissable",
      "Restaurateur ou artisan qui veut un logo pour ses réseaux",
      "Porteur de projet qui teste sa marque avant d'investir dans un graphiste"
    ]
  },
  {
    id: "brandmark",
    name: "Brandmark",
    tagline: "Créez une identité de marque complète et cohérente avec l'IA.",
    category: "branding",
    sector: ["image-design", "business-marketing"],
    priceDetails: "25 $ (Basic) / 65 $ (Designer) / 175 $ (Enterprise) — paiement unique",
    priceType: "Payant",
    logo: "https://logo.clearbit.com/brandmark.io",
    url: "#",
    tags: ["Branding", "Identité complète", "Paiement unique"],
    description: "Brandmark génère une identité de marque complète : logo, palette de couleurs, typographies, mockups et guidelines de marque. Tout en paiement unique sans abonnement. Le rendu est très professionnel et les fichiers livrés couvrent tous les usages (print, web, réseaux).",
    features: [
      "Logo vectoriel haute résolution",
      "Palette de couleurs et typographies cohérentes",
      "Mockups réalistes (cartes, tshirt, tasse, etc.)",
      "Guide de marque téléchargeable",
      "Paiement unique sans abonnement"
    ],
    useCases: [
      "Fondateur qui lance sa marque et veut une identité solide dès le départ",
      "E-commerçant qui crée une marque de produit",
      "Freelance qui veut se démarquer avec un branding professionnel"
    ]
  },
  {
    id: "stockimg-ai",
    name: "Stockimg AI",
    tagline: "Générez des images stock, illustrations et visuels sur mesure avec l'IA.",
    category: "image-gen",
    sector: ["image-design"],
    priceDetails: "Gratuit (5 img/mois) / 19 $/mois (Starter) / 29 $/mois (Premium)",
    priceType: "Freemium",
    logo: "https://logo.clearbit.com/stockimg.ai",
    url: "#",
    tags: ["Génération image", "Stock photo", "Illustrations"],
    description: "Stockimg AI génère des images dans de nombreux styles : photo réaliste, illustration, icône, poster, couverture de livre, maquette UI. Très utile pour les entrepreneurs qui ont besoin de visuels variés sans abonnement à des banques d'images ou contrat avec un illustrateur.",
    features: [
      "12+ catégories d'images (stock, illus, UI, poster...)",
      "Génération par prompt texte en français",
      "Suppression d'arrière-plan intégrée",
      "Upscaling haute résolution",
      "Droits commerciaux inclus"
    ],
    useCases: [
      "Blogueur qui a besoin d'images d'illustration uniques pour ses articles",
      "Vendeur e-commerce qui veut des photos produits stylisées",
      "Créateur qui veut des couvertures de contenu cohérentes"
    ]
  },
  {
    id: "playground-ai",
    name: "Playground AI",
    tagline: "Créez des images IA réalistes et artistiques — 500 générations gratuites par jour.",
    category: "image-gen",
    sector: ["image-design"],
    priceDetails: "Gratuit (500 img/jour) / 15 $/mois (Pro) / 45 $/mois (Turbo)",
    priceType: "Freemium",
    logo: "https://logo.clearbit.com/playgroundai.com",
    url: "#",
    tags: ["Génération image", "Gratuit généreux", "Art IA"],
    description: "Playground AI est l'un des générateurs d'images IA les plus accessibles avec une offre gratuite très généreuse (500 images par jour). Il supporte plusieurs modèles et est optimisé pour les portraits et les illustrations stylisées.",
    features: [
      "500 générations gratuites par jour",
      "Éditeur d'images avancé (inpainting, outpainting)",
      "Styles variés (réaliste, anime, artistique, 3D...)",
      "Canvas collaboratif",
      "Bibliothèque de prompts communautaires"
    ],
    useCases: [
      "Curieux qui veut explorer la génération d'images IA sans payer",
      "Artiste ou illustrateur qui explore de nouveaux styles",
      "Marketeur qui génère des visuels pour ses campagnes"
    ]
  },
  {
    id: "nightcafe",
    name: "NightCafe",
    tagline: "Créez de l'art IA et rejoignez une communauté de créateurs.",
    category: "image-gen",
    sector: ["image-design"],
    priceDetails: "Gratuit (5 crédits/jour) / À partir de 10 $/mois",
    priceType: "Freemium",
    logo: "https://logo.clearbit.com/nightcafe.studio",
    url: "#",
    tags: ["Art IA", "Communauté", "Génération créative"],
    description: "NightCafe est à la fois un générateur d'art IA et une communauté de créateurs. Il supporte de nombreux modèles (DALL-E, Stable Diffusion, SDXL) et offre des styles artistiques très variés. Ses challenges créatifs quotidiens en font un endroit idéal pour apprendre et s'inspirer.",
    features: [
      "Accès à plusieurs modèles IA (SDXL, DALL-E, etc.)",
      "Styles artistiques variés (peinture, photo, illustration)",
      "Communauté et challenges créatifs quotidiens",
      "Impression sur demande (posters, t-shirts)",
      "Crédits offerts chaque jour"
    ],
    useCases: [
      "Artiste qui explore de nouveaux styles visuels",
      "Particulier qui veut créer des œuvres décoratives personnalisées",
      "Créateur qui veut des visuels uniques pour ses projets"
    ]
  },
  {
    id: "artsmart",
    name: "ArtSmart",
    tagline: "Générez des images IA avec un contrôle précis sur le résultat.",
    category: "image-gen",
    sector: ["image-design"],
    priceDetails: "Gratuit (essai) / 29 $/mois (Starter) / 69 $/mois (Pro)",
    priceType: "Freemium",
    logo: "https://logo.clearbit.com/artsmart.ai",
    url: "#",
    tags: ["Génération image", "Fine-tuning", "Avatars"],
    description: "ArtSmart propose un générateur d'images IA avec un niveau de contrôle élevé sur le rendu : poses, styles, éclairages, compositions. Il supporte le fine-tuning sur vos propres photos pour créer des avatars ou des personnages cohérents sur la durée.",
    features: [
      "Génération réaliste haute qualité",
      "Fine-tuning sur vos propres images",
      "Contrôle avancé (pose, style, éclairage)",
      "Création d'avatars personnalisés cohérents",
      "Droits commerciaux inclus"
    ],
    useCases: [
      "Créateur de contenu qui veut un avatar IA cohérent pour sa marque",
      "Photographe qui explore des retouches et styles IA",
      "Marketeur qui génère des personnages pour ses campagnes"
    ]
  },
  {
    id: "cleanup-pictures",
    name: "Cleanup.pictures",
    tagline: "Supprimez n'importe quel élément indésirable d'une photo en un clic.",
    category: "image-editing",
    sector: ["image-design"],
    priceDetails: "Gratuit (usage limité) / 9 $/mois (Pro)",
    priceType: "Freemium",
    logo: "https://logo.clearbit.com/cleanup.pictures",
    url: "#",
    tags: ["Retouche", "Suppression d'objets", "Photo"],
    description: "Cleanup.pictures utilise l'IA pour effacer proprement des objets, des personnes, des textes ou des imperfections sur n'importe quelle photo. L'IA reconstruit intelligemment l'arrière-plan après suppression. Pas besoin de Photoshop, ça fonctionne depuis le navigateur.",
    features: [
      "Suppression d'objets par simple pinceau",
      "Reconstruction intelligente du fond",
      "Fonctionne sur mobile et desktop",
      "Interface ultra-simple",
      "Traitement en haute résolution (offre Pro)"
    ],
    useCases: [
      "Vendeur qui veut nettoyer ses photos produits avant publication",
      "Photographe amateur qui retire un élément gênant d'une photo",
      "Marketeur qui retouche rapidement des visuels pour ses campagnes"
    ]
  },
  {
    id: "clipdrop",
    name: "Clipdrop",
    tagline: "La suite complète de retouche et génération d'images par Stability AI.",
    category: "image-editing",
    sector: ["image-design"],
    priceDetails: "Gratuit (usage limité) / 9 $/mois (Pro)",
    priceType: "Freemium",
    logo: "https://logo.clearbit.com/clipdrop.co",
    url: "#",
    tags: ["Retouche", "Suite complète", "Stability AI"],
    description: "Clipdrop by Stability AI regroupe en une seule plateforme : suppression de fond, débruitage, agrandissement d'image, relighting et génération d'images. C'est la boîte à outils visuelle complète pour les créateurs qui veulent tout faire sans ouvrir Photoshop.",
    features: [
      "Suppression de fond instantanée",
      "Relighting (modification de l'éclairage après prise de vue)",
      "Upscaling IA x4 sans perte de qualité",
      "Générateur d'images Stable Diffusion",
      "Extension de cadre (outpainting)"
    ],
    useCases: [
      "E-commerçant qui veut des photos produits sur fond blanc parfait",
      "Créateur de contenu qui améliore rapidement ses photos",
      "Designer qui prépare des assets pour ses projets"
    ]
  },
  {
    id: "remove-bg",
    name: "Remove.bg",
    tagline: "Supprimez l'arrière-plan de n'importe quelle image en 5 secondes.",
    category: "image-editing",
    sector: ["image-design"],
    priceDetails: "Gratuit (aperçu basse résolution) / À partir de 1,20 $/image HD (packs crédits)",
    priceType: "Freemium",
    logo: "https://logo.clearbit.com/remove.bg",
    url: "#",
    tags: ["Détourage", "Fond blanc", "Photo produit"],
    description: "Remove.bg est la référence mondiale pour le détourage automatique. En un upload, l'IA isole parfaitement le sujet — même les cheveux, la fourrure ou les éléments complexes — et supprime l'arrière-plan. Utilisé par des millions d'e-commerçants et marketeurs.",
    features: [
      "Détourage automatique en 5 secondes",
      "Précision sur les éléments fins (cheveux, transparences)",
      "Téléchargement PNG sans fond",
      "API disponible pour automatisation",
      "Intégration Canva, Photoshop, Figma"
    ],
    useCases: [
      "Vendeur en ligne qui veut des photos produits sur fond blanc",
      "Photographe qui gagne du temps sur le détourage",
      "Marketeur qui crée des compositions visuelles rapidement"
    ]
  },
  {
    id: "luma-ai",
    name: "Luma AI",
    tagline: "Créez des modèles 3D et des vidéos IA depuis votre smartphone.",
    category: "3d-video",
    sector: ["image-design", "video-audio"],
    priceDetails: "Gratuit (usage limité) / Plans Pro disponibles",
    priceType: "Freemium",
    logo: "https://logo.clearbit.com/lumalabs.ai",
    url: "#",
    tags: ["3D", "Vidéo IA", "Scan 3D"],
    description: "Luma AI utilise la technologie NeRF pour créer des modèles 3D photoréalistes depuis une vidéo tournée avec un smartphone. Son outil Dream Machine génère aussi des vidéos courtes à partir de texte ou d'images. Idéal pour les présentations immersives de produits.",
    features: [
      "Scan 3D depuis vidéo smartphone (NeRF)",
      "Générateur de vidéos IA (Dream Machine)",
      "Rendu photoréaliste haute qualité",
      "Export pour AR/VR et web",
      "Intégration dans des apps 3D"
    ],
    useCases: [
      "E-commerçant qui veut une vue 3D de ses produits",
      "Agent immobilier qui crée des visites virtuelles",
      "Créateur qui génère des vidéos courtes stylisées"
    ]
  },

  // ── VIDÉO & AUDIO ──────────────────────────────────────────

  {
    id: "heygen",
    name: "HeyGen",
    tagline: "Créez des vidéos avec un avatar IA qui parle à votre place.",
    category: "video-avatar",
    sector: ["video-audio"],
    priceDetails: "Gratuit (1 min crédit) / 29 $/mois (Creator) / 89 $/mois (Business)",
    priceType: "Freemium",
    logo: "https://logo.clearbit.com/heygen.com",
    url: "#",
    tags: ["Avatar IA", "Vidéo sans caméra", "Multilangue"],
    description: "HeyGen permet de créer des vidéos professionnelles avec un avatar IA réaliste qui lit votre script. Vous pouvez cloner votre propre voix et apparence, ou utiliser l'un des 100+ avatars disponibles. Sa fonctionnalité de traduction vidéo avec lip sync est impressionnante.",
    features: [
      "100+ avatars IA réalistes disponibles",
      "Clonage de voix et d'apparence personnelle",
      "Traduction vidéo en 40+ langues avec lip sync",
      "Templates de présentation intégrés",
      "Export HD"
    ],
    useCases: [
      "Formateur en ligne qui crée des modules vidéo sans se filmer",
      "Entrepreneur qui veut une vidéo de présentation professionnelle",
      "Marketeur qui adapte ses vidéos en plusieurs langues"
    ]
  },
  {
    id: "d-id",
    name: "D-ID",
    tagline: "Animez des photos et créez des présentateurs IA parlants.",
    category: "video-avatar",
    sector: ["video-audio"],
    priceDetails: "Gratuit (20 crédits) / 5,90 $/mois (Lite) / 49,90 $/mois (Pro)",
    priceType: "Freemium",
    logo: "https://logo.clearbit.com/d-id.com",
    url: "#",
    tags: ["Avatar IA", "Animation photo", "Agents vidéo"],
    description: "D-ID anime n'importe quelle photo pour lui faire prononcer un texte ou un audio. Vous pouvez aussi créer des agents conversationnels vidéo en temps réel. Utilisé pour des présentations, l'e-learning et les chatbots vidéo.",
    features: [
      "Animation de photos par script ou fichier audio",
      "Création d'agents vidéo conversationnels",
      "Génération d'avatars IA personnalisés",
      "API disponible pour intégration",
      "Support de 100+ langues"
    ],
    useCases: [
      "Coach qui crée des vidéos pédagogiques sans se filmer",
      "Entrepreneur qui veut un présentateur virtuel pour son site",
      "Créateur qui anime des personnages illustrés pour sa chaîne"
    ]
  },
  {
    id: "fliki",
    name: "Fliki",
    tagline: "Transformez un texte ou un article de blog en vidéo avec voix-off IA.",
    category: "video-gen",
    sector: ["video-audio"],
    priceDetails: "Gratuit (5 min/mois) / 21 $/mois (Standard) / 66 $/mois (Premium)",
    priceType: "Freemium",
    logo: "https://logo.clearbit.com/fliki.ai",
    url: "#",
    tags: ["Text to video", "Voix-off", "Repurposing contenu"],
    description: "Fliki convertit automatiquement un texte, un script ou une URL d'article en vidéo avec voix-off IA. Il sélectionne des visuels pertinents depuis des banques d'images et synchronise le tout. Parfait pour recycler son contenu écrit en vidéo sans effort de montage.",
    features: [
      "Conversion texte → vidéo automatique",
      "900+ voix IA en 75 langues",
      "Bibliothèque de 10M+ médias libres de droits",
      "Sous-titres automatiques",
      "Formats adaptés pour YouTube, Reels, TikTok"
    ],
    useCases: [
      "Blogueur qui recycle ses articles en vidéos YouTube",
      "Créateur de newsletter qui transforme ses éditions en contenu vidéo",
      "Marketeur qui produit des vidéos explicatives rapidement"
    ]
  },
  {
    id: "steve-ai",
    name: "Steve AI",
    tagline: "Créez des vidéos animées ou live-action depuis un script en minutes.",
    category: "video-gen",
    sector: ["video-audio"],
    priceDetails: "À partir de 20 $/mois (Basic) — plusieurs tiers disponibles",
    priceType: "Payant",
    logo: "https://logo.clearbit.com/steve.ai",
    url: "#",
    tags: ["Vidéo animée", "Script to video", "Explainer"],
    description: "Steve AI crée des vidéos marketing, pédagogiques ou de présentation à partir d'un simple script texte. Il propose deux modes : vidéo live-action avec images réelles, ou vidéo animée. Très utilisé pour les explainers et les publicités vidéo à petit budget.",
    features: [
      "Conversion script → vidéo animée ou live-action",
      "1000+ templates professionnels",
      "Voix-off IA naturelle",
      "Personnalisation couleurs et logo (branding)",
      "Export en HD"
    ],
    useCases: [
      "Entrepreneur qui veut une vidéo d'explication pour son produit ou service",
      "Formateur qui crée des modules e-learning visuels",
      "Marketeur qui produit des publicités vidéo à petit budget"
    ]
  },
  {
    id: "colossyan",
    name: "Colossyan",
    tagline: "Créez des vidéos de formation avec des présentateurs IA professionnels.",
    category: "video-avatar",
    sector: ["video-audio"],
    priceDetails: "À partir de 28 $/mois (Starter)",
    priceType: "Payant",
    logo: "https://logo.clearbit.com/colossyan.com",
    url: "#",
    tags: ["E-learning", "Formation", "Avatar IA"],
    description: "Colossyan est spécialisé dans la création de vidéos de formation professionnelle. Il propose des présentateurs IA réalistes, des quiz interactifs intégrables, et une mise à jour facile du contenu sans re-filmer. Idéal pour les formateurs indépendants et coachs.",
    features: [
      "Présentateurs IA multilingues réalistes",
      "Quiz et éléments interactifs intégrés",
      "Mise à jour du script sans re-tourner la vidéo",
      "Scènes et templates e-learning",
      "Export SCORM (compatible LMS)"
    ],
    useCases: [
      "Formateur indépendant qui crée des cours en ligne",
      "Coach qui produit des programmes vidéo pour ses clients",
      "Entrepreneur qui digitalise ses formations"
    ]
  },
  {
    id: "elai-io",
    name: "Elai.io",
    tagline: "Convertissez un article ou un PDF en vidéo avec présentateur IA en un clic.",
    category: "video-avatar",
    sector: ["video-audio"],
    priceDetails: "Gratuit (1 min) / 29 $/mois (Basic) / 125 $/mois (Advanced)",
    priceType: "Freemium",
    logo: "https://logo.clearbit.com/elai.io",
    url: "#",
    tags: ["Article to video", "Avatar IA", "E-learning"],
    description: "Elai.io est particulièrement apprécié pour sa conversion d'article ou de PDF en vidéo avec présentateur IA en un clic. Disponible en 65+ langues, il permet de localiser du contenu sans re-filmer. Parfait pour les formateurs et créateurs de contenu.",
    features: [
      "Conversion article/PDF → vidéo automatique",
      "80+ avatars IA multilingues",
      "Clonage d'avatar personnalisé",
      "Éditeur slide-based simple à prendre en main",
      "Export vers LMS et réseaux sociaux"
    ],
    useCases: [
      "Formateur qui transforme ses ressources écrites en vidéos",
      "Entrepreneur qui crée des onboarding vidéo",
      "Créateur de cours en ligne qui veut du contenu multilingue"
    ]
  },
  {
    id: "hour-one",
    name: "Hour One",
    tagline: "La plateforme vidéo IA dédiée à la communication professionnelle.",
    category: "video-avatar",
    sector: ["video-audio"],
    priceDetails: "Plans sur devis — essai gratuit disponible",
    priceType: "Sur devis",
    logo: "https://logo.clearbit.com/hourone.ai",
    url: "#",
    tags: ["Vidéo corporate", "Avatar IA", "Communication"],
    description: "Hour One est positionné sur les vidéos de communication professionnelle. Il propose des présentateurs IA très réalistes, un éditeur collaboratif et des intégrations avec les outils courants. Adapté aux indépendants et PME qui veulent un niveau de finition professionnel.",
    features: [
      "Présentateurs IA haute fidélité",
      "Éditeur collaboratif",
      "Templates corporate et marketing",
      "Intégration Slack, Teams, LMS",
      "Personnalisation de l'avatar à votre image"
    ],
    useCases: [
      "Indépendant qui crée des présentations commerciales vidéo",
      "Coach qui produit du contenu e-learning professionnel",
      "Entrepreneur qui communique régulièrement en vidéo"
    ]
  },
  {
    id: "kaiber",
    name: "Kaiber",
    tagline: "Transformez vos photos ou musiques en œuvres d'art animées avec l'IA.",
    category: "video-gen",
    sector: ["video-audio"],
    priceDetails: "Gratuit (limité) / 10 $/mois (Explorer) / 25 $/mois (Pro)",
    priceType: "Freemium",
    logo: "https://logo.clearbit.com/kaiber.ai",
    url: "#",
    tags: ["Vidéo artistique", "Animation IA", "Musique"],
    description: "Kaiber génère des vidéos artistiques époustouflantes à partir de photos, de musique ou de prompts texte. Très prisé par les artistes, musiciens et créateurs de contenu pour ses effets visuels uniques. Parfait pour les intros, clips musicaux et visuels de marque.",
    features: [
      "Transformation photo → vidéo animée stylisée",
      "Synchronisation musique → animation",
      "Styles visuels variés (abstrait, réaliste, anime...)",
      "Flux vidéo continus",
      "Contrôle de la cohérence visuelle"
    ],
    useCases: [
      "Musicien qui veut un clip vidéo sans budget production",
      "Artiste qui crée des contenus visuels uniques",
      "Créateur qui veut des visuels animés pour sa chaîne YouTube"
    ]
  },
  {
    id: "peech",
    name: "Peech",
    tagline: "Transformez vos vidéos longues en clips courts optimisés pour les réseaux.",
    category: "video-editing",
    sector: ["video-audio", "reseaux-sociaux"],
    priceDetails: "À partir de 83 $/mois (Growth) — plans annuels disponibles",
    priceType: "Payant",
    logo: "https://logo.clearbit.com/peech.tech",
    url: "#",
    tags: ["Montage automatique", "Repurposing", "Clips courts"],
    description: "Peech analyse vos vidéos longues (interviews, webinaires, podcasts vidéo) et en extrait automatiquement les meilleurs moments pour créer des clips courts avec sous-titres, branding et mise en forme pour Reels, TikTok ou LinkedIn.",
    features: [
      "Identification automatique des moments forts",
      "Génération de clips courts formatés",
      "Sous-titres automatiques précis",
      "Branding et personnalisation intégrés",
      "Gestion multi-format (vertical, carré, horizontal)"
    ],
    useCases: [
      "Podcasteur vidéo qui recycle ses épisodes en Reels",
      "Coach qui transforme ses webinaires en contenu social",
      "Créateur qui veut maximiser chaque contenu vidéo long"
    ]
  },
  {
    id: "mubert",
    name: "Mubert",
    tagline: "Générez de la musique de fond libre de droits en quelques secondes.",
    category: "audio",
    sector: ["video-audio"],
    priceDetails: "Gratuit (usage personnel) / 14 $/mois (Creator) / 39 $/mois (Pro)",
    priceType: "Freemium",
    logo: "https://logo.clearbit.com/mubert.com",
    url: "#",
    tags: ["Musique IA", "Libre de droits", "Fond sonore"],
    description: "Mubert génère de la musique d'ambiance unique et libre de droits sur demande. Vous spécifiez l'ambiance, le tempo, la durée et le genre — l'IA compose une piste inédite. Idéal pour les YouTubeurs et podcasteurs qui veulent éviter les problèmes de copyright.",
    features: [
      "Génération de musique par ambiance, genre et durée",
      "Droits commerciaux inclus (offres payantes)",
      "API pour intégration dans des applications",
      "Styles variés (lo-fi, ambient, électronique, acoustique...)",
      "Pistes sans coupures (parfaites pour le loop)"
    ],
    useCases: [
      "YouTubeur qui cherche une musique de fond sans copyright",
      "Podcasteur qui veut un générique ou jingle personnalisé",
      "Créateur de vidéo qui veut de l'ambiance sonore"
    ]
  },
  {
    id: "soundraw",
    name: "Soundraw",
    tagline: "Composez votre propre musique IA, personnalisable segment par segment.",
    category: "audio",
    sector: ["video-audio"],
    priceDetails: "16,99 $/mois (Creator) / 29,99 $/mois (Artist, droits complets)",
    priceType: "Payant",
    logo: "https://logo.clearbit.com/soundraw.io",
    url: "#",
    tags: ["Musique IA", "Composition", "Personnalisable"],
    description: "Soundraw génère de la musique originale que vous pouvez personnaliser segment par segment : montez ou baissez l'intensité d'un passage, changez les instruments, ajustez le rythme. Un niveau de contrôle créatif rare parmi les outils de musique IA.",
    features: [
      "Personnalisation segment par segment",
      "Genres variés (pop, cinematic, hip-hop, jazz...)",
      "Ajustement de l'énergie, de l'humeur et des instruments",
      "Téléchargement MP3/WAV",
      "Droits commerciaux inclus"
    ],
    useCases: [
      "Créateur vidéo qui veut une musique qui suit le rythme de ses coupes",
      "Podcasteur ou streamer qui veut une signature sonore unique",
      "Indépendant qui crée une ambiance sonore pour ses contenus"
    ]
  },
  {
    id: "boomy",
    name: "Boomy",
    tagline: "Créez de la musique en quelques clics et monétisez-la sur les plateformes.",
    category: "audio",
    sector: ["video-audio"],
    priceDetails: "Gratuit (25 chansons/mois) / 9,99 $/mois (Personal) / 29,99 $/mois (Pro)",
    priceType: "Freemium",
    logo: "https://logo.clearbit.com/boomy.com",
    url: "#",
    tags: ["Musique IA", "Monétisation", "Streaming"],
    description: "Boomy est unique : il permet de créer de la musique IA en quelques secondes, mais aussi de la soumettre directement sur Spotify, Apple Music et 40+ plateformes pour la monétiser. Idéal pour les curieux et créateurs qui veulent tester une source de revenus passifs via la musique.",
    features: [
      "Création de chansons en quelques clics",
      "Genres variés (lo-fi, électronique, pop, metal, jazz...)",
      "Distribution sur 40+ plateformes musicales",
      "Monétisation des streams",
      "Droits de propriété conservés par l'utilisateur"
    ],
    useCases: [
      "Musicien amateur qui veut publier sans studio d'enregistrement",
      "Entrepreneur qui teste une source de revenus passifs musicaux",
      "Créateur de contenu qui veut une musique signature originale"
    ]
  },
  {
    id: "speechify",
    name: "Speechify",
    tagline: "Écoutez n'importe quel texte lu à voix haute par une IA ultra-réaliste.",
    category: "audio",
    sector: ["video-audio"],
    priceDetails: "Gratuit / 139 $/an (Premium) / 199 $/an (AI Studio)",
    priceType: "Freemium",
    logo: "https://logo.clearbit.com/speechify.com",
    url: "#",
    tags: ["Text to speech", "Productivité", "Voix-off"],
    description: "Speechify convertit n'importe quel document, PDF, email ou page web en audio lu par une voix IA naturelle. Disponible sur mobile et desktop, il permet de consommer du contenu en déplacement, d'accélérer sa formation ou de générer des voix-off pour ses vidéos.",
    features: [
      "Lecture de PDFs, emails, pages web, Google Docs",
      "Voix IA ultraréalistes (dont voix de célébrités)",
      "Vitesse réglable jusqu'à 4,5x",
      "Application mobile iOS et Android",
      "Extension Chrome pour lire les pages web"
    ],
    useCases: [
      "Entrepreneur qui se forme en écoutant des ressources pendant ses déplacements",
      "Créateur de contenu qui génère des voix-off pour ses vidéos",
      "Personne dyslexique ou qui préfère l'audio au texte"
    ]
  },
  {
    id: "resemble-ai",
    name: "Resemble AI",
    tagline: "Clonez votre voix et créez des voix-off IA personnalisées à l'infini.",
    category: "audio",
    sector: ["video-audio"],
    priceDetails: "Gratuit (essai) / 0,006 $/seconde en API — forfaits sur devis",
    priceType: "Sur devis",
    logo: "https://logo.clearbit.com/resemble.ai",
    url: "#",
    tags: ["Clonage de voix", "Voix-off", "API"],
    description: "Resemble AI permet de cloner une voix à partir de quelques minutes d'enregistrement, puis de générer autant de voix-off que nécessaire. Utilisé par les podcasteurs, créateurs de cours et développeurs pour gagner du temps sur la production audio.",
    features: [
      "Clonage de voix en quelques minutes d'audio",
      "Génération de voix-off illimitée",
      "Contrôle des émotions et de l'intonation",
      "API temps réel pour intégration dans des apps",
      "Détection et étiquetage de voix synthétiques"
    ],
    useCases: [
      "Podcasteur qui génère des intro/outro sans se réenregistrer",
      "Formateur qui met à jour ses cours sans re-tourner",
      "Développeur qui intègre une voix personnalisée dans une application"
    ]
  },
  {
    id: "voicemod-ai",
    name: "Voicemod AI",
    tagline: "Modifiez votre voix en temps réel et créez votre persona sonore.",
    category: "audio",
    sector: ["video-audio"],
    priceDetails: "Gratuit (basique) / 36 $/an (Pro) / 60 $/an (AI voices)",
    priceType: "Freemium",
    logo: "https://logo.clearbit.com/voicemod.net",
    url: "#",
    tags: ["Voix IA", "Streaming", "Modification en temps réel"],
    description: "Voicemod permet de modifier sa voix en temps réel lors d'appels, streams ou enregistrements. Il propose des centaines d'effets et des voix IA personnalisables. Très utilisé par les streamers, gamers et créateurs de contenus pour créer un univers sonore distinctif.",
    features: [
      "Modification de voix en temps réel",
      "Création de voix IA personnalisées",
      "Soundboard pour effets sonores",
      "Compatible Twitch, Discord, OBS, Teams, Zoom",
      "Bibliothèque de voix et effets"
    ],
    useCases: [
      "Streamer ou YouTubeur qui veut un personnage vocal reconnaissable",
      "Podcasteur fictif ou créateur de contenu narratif",
      "Gamer qui veut personnaliser son expérience sonore"
    ]
  },

  // ── BUSINESS & MARKETING ───────────────────────────────────

  {
    id: "anyword",
    name: "Anyword",
    tagline: "Générez des copies marketing qui convertissent, optimisées par les données.",
    category: "copywriting",
    sector: ["business-marketing"],
    priceDetails: "39 $/mois (Starter) / 79 $/mois (Data-Driven) / 349 $/mois (Business)",
    priceType: "Payant",
    logo: "https://logo.clearbit.com/anyword.com",
    url: "#",
    tags: ["Copywriting", "Conversion", "Publicité"],
    description: "Anyword est l'outil de copywriting IA le plus orienté performance : chaque texte généré est associé à un score de conversion prédictif basé sur des millions de campagnes analysées. Idéal pour les publicités Facebook/Google, les landing pages et les emails marketing.",
    features: [
      "Score de performance prédictif pour chaque variation",
      "Templates pour ads, emails, landing pages, SMS",
      "Analyse de l'audience cible",
      "Tests A/B assistés par IA",
      "Ton de marque personnalisable et mémorisable"
    ],
    useCases: [
      "Entrepreneur qui veut des publicités Facebook qui convertissent",
      "E-commerçant qui optimise ses fiches produits et emails",
      "Freelance en copywriting qui veut accélérer sa production"
    ]
  },
  {
    id: "wordhero",
    name: "WordHero",
    tagline: "Générez du contenu marketing illimité à un tarif imbattable.",
    category: "copywriting",
    sector: ["business-marketing"],
    priceDetails: "49 $/mois ou 89 $ à vie (offres LTD régulières)",
    priceType: "Payant",
    logo: "https://logo.clearbit.com/wordhero.co",
    url: "#",
    tags: ["Copywriting", "Illimité", "Rapport qualité-prix"],
    description: "WordHero se distingue par son modèle de prix : des offres à vie régulièrement disponibles pour un accès illimité. Plus de 60 outils d'écriture pour créer des posts sociaux, des descriptions produits, des titres, des scripts vidéo et plus encore.",
    features: [
      "60+ outils d'écriture marketing",
      "Génération de contenu illimitée",
      "Éditeur long-form intégré",
      "Support de 100+ langues",
      "Mode brainstorming pour idées et angles"
    ],
    useCases: [
      "Solopreneur qui veut un outil de rédaction sans abonnement mensuel",
      "Marketeur qui génère de nombreux assets texte régulièrement",
      "Entrepreneur qui teste différents messages pour son marché"
    ]
  },
  {
    id: "hypotenuse-ai",
    name: "Hypotenuse AI",
    tagline: "Générez des descriptions produits et contenus e-commerce en masse.",
    category: "copywriting",
    sector: ["business-marketing"],
    priceDetails: "29 $/mois (Individual) / 59 $/mois (Teams)",
    priceType: "Payant",
    logo: "https://logo.clearbit.com/hypotenuse.ai",
    url: "#",
    tags: ["E-commerce", "Fiches produits", "Génération en masse"],
    description: "Hypotenuse AI est spécialisé dans la création de contenu e-commerce : descriptions produits SEO, articles de blog, publicités, emails promotionnels. Sa fonctionnalité phare est la génération en masse depuis un catalogue CSV — des centaines de fiches en quelques minutes.",
    features: [
      "Génération en masse depuis un fichier CSV",
      "Fiches produits optimisées SEO",
      "Ton de marque mémorisable et cohérent",
      "Intégration Shopify et WooCommerce",
      "Détection de plagiat intégrée"
    ],
    useCases: [
      "E-commerçant qui gère un catalogue avec des centaines de produits",
      "Dropshipper qui veut des fiches produits uniques rapidement",
      "Vendeur Amazon qui optimise ses listings"
    ]
  },
  {
    id: "copysmith",
    name: "Copysmith",
    tagline: "Générez et gérez tous vos assets marketing depuis une seule plateforme.",
    category: "copywriting",
    sector: ["business-marketing"],
    priceDetails: "À partir de 19 $/mois (Starter)",
    priceType: "Payant",
    logo: "https://logo.clearbit.com/copysmith.ai",
    url: "#",
    tags: ["Copywriting", "Campagnes", "Google Ads"],
    description: "Copysmith génère du contenu marketing (ads, emails, fiches produits) avec des intégrations notables vers Google Ads et WooCommerce. Conçu pour gérer des campagnes complètes depuis un seul endroit, avec une logique de branding cohérente.",
    features: [
      "Génération de copy pour ads, emails, fiches produits",
      "Intégration directe Google Ads et WooCommerce",
      "Gestion de campagnes complètes",
      "Bibliothèque de marque centralisée",
      "Collaboration possible en équipe"
    ],
    useCases: [
      "E-commerçant qui synchronise son contenu avec Google Shopping",
      "Marketeur indépendant qui gère des campagnes multi-formats",
      "Freelance qui gère plusieurs clients avec des voix distinctes"
    ]
  },
  {
    id: "nichesss",
    name: "Nichesss",
    tagline: "Trouvez des idées de business rentables et générez du contenu en un clic.",
    category: "business-ideas",
    sector: ["business-marketing"],
    priceDetails: "89 $/mois ou offres LTD ponctuelles",
    priceType: "Payant",
    logo: "https://logo.clearbit.com/nichesss.com",
    url: "#",
    tags: ["Idées business", "Niche", "Brainstorming"],
    description: "Nichesss aide les entrepreneurs à identifier des niches de marché rentables et à générer rapidement tous les assets nécessaires : nom de marque, slogan, description, posts sociaux, emails. Un outil de brainstorming business très pratique pour les side-projecteurs.",
    features: [
      "Générateur d'idées de business par niche",
      "Analyse de la demande et de la concurrence",
      "Génération de nom de marque et slogan",
      "Templates marketing complets (posts, emails, ads)",
      "Mode brainstorming illimité"
    ],
    useCases: [
      "Entrepreneur qui cherche une niche rentable à exploiter",
      "Side-projecteur qui veut tester rapidement une idée",
      "Créateur de contenu qui cherche un positionnement différenciant"
    ]
  },
  {
    id: "ideabuddy",
    name: "IdeaBuddy",
    tagline: "Transformez votre idée de business en plan d'action structuré.",
    category: "business-planning",
    sector: ["business-marketing"],
    priceDetails: "Gratuit (limité) / 10 $/mois (Dreamer) / 20 $/mois (Founder)",
    priceType: "Freemium",
    logo: "https://logo.clearbit.com/ideabuddy.com",
    url: "#",
    tags: ["Business plan", "Validation", "Entrepreneuriat"],
    description: "IdeaBuddy guide pas-à-pas depuis l'idée brute jusqu'au business plan complet. L'IA aide à valider les hypothèses, identifier les risques, définir le modèle économique et structurer les étapes de lancement. Une sorte de mentor business virtuel pour les primo-entrepreneurs.",
    features: [
      "Guide pas-à-pas de l'idée au plan d'action",
      "Validation d'hypothèses assistée par IA",
      "Modélisation financière simplifiée",
      "Analyse SWOT guidée",
      "Export du business plan en PDF"
    ],
    useCases: [
      "Particulier qui a une idée et ne sait pas par où commencer",
      "Micro-entrepreneur qui structure son projet avant de se lancer",
      "Porteur de projet qui prépare un dossier de financement"
    ]
  },
  {
    id: "validator-ai",
    name: "Validator AI",
    tagline: "Faites challenger votre idée de business par l'IA avant d'investir.",
    category: "business-planning",
    sector: ["business-marketing"],
    priceDetails: "Gratuit (basique) — plans payants disponibles",
    priceType: "Freemium",
    logo: "https://logo.clearbit.com/validator.ai",
    url: "#",
    tags: ["Validation", "Business idea", "Analyse"],
    description: "Validator AI analyse votre idée de startup ou de business et retourne une évaluation détaillée : forces, faiblesses, concurrence potentielle, taille de marché estimée et recommandations actionnables. Un moyen rapide de challenger son idée avant d'y investir du temps et de l'argent.",
    features: [
      "Évaluation détaillée de l'idée en quelques secondes",
      "Analyse des forces et faiblesses",
      "Identification de la concurrence potentielle",
      "Estimation du marché potentiel",
      "Recommandations actionnables"
    ],
    useCases: [
      "Entrepreneur qui veut un regard externe objectif sur son idée",
      "Développeur qui veut savoir si son projet a du potentiel marché",
      "Porteur de projet qui prépare un pitch pour des investisseurs"
    ]
  }
];
