export type Locale = "fr" | "en";
export type ProjectKind = "mobile" | "web";

export type Project = {
  slug: string;
  kind: ProjectKind;
  accent: "blue" | "indigo" | "violet";
  featured?: boolean;
  image: string;
  preview?: string;
  gallery: string[];
  galleryLabels?: Record<Locale, string[]>;
  href?: string;
  repo?: string;
  year?: string;
  role?: Record<Locale, string>;
  context?: Record<Locale, string>;
  challenge?: Record<Locale, string>;
  solution?: Record<Locale, string>;
  stack: string[];
  title: Record<Locale, string>;
  category: Record<Locale, string>;
  summary: Record<Locale, string>;
  description: Record<Locale, string>;
  highlights: Record<Locale, string[]>;
  modules?: Record<Locale, string[]>;
};

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const social = {
  github: "https://github.com/Adem-Yac",
  instagram: "https://www.instagram.com/cay_dev/",
  facebook: "https://www.facebook.com/profile.php?id=61587266611203",
  linkedin: "https://www.linkedin.com/in/adem-yac/",
  email: "yacefadem03@gmail.com",
  emails: ["yacefadem03@gmail.com"] as const,
  phone: "+213773101094",
  whatsapp: "https://wa.me/213773101094",
  phoneLabel: "+213 773 10 10 94",
  location: { fr: "Alger, Algérie", en: "Algiers, Algeria" },
};

export const projects: Project[] = [
  {
    slug: "souri",
    kind: "mobile",
    accent: "blue",
    image: "/projects/souri/cover-hero.png",
    gallery: [
      "/projects/souri/cover-hero.png",
      "/projects/souri/g1.png",
      "/projects/souri/g2.png",
      "/projects/souri/g3.png",
      "/projects/souri/g4.png",
      "/projects/souri/g5.png",
    ],
    stack: ["Flutter", "Dart", "BLoC", "Hive"],
    title: { fr: "Souri", en: "Souri" },
    category: { fr: "Application santé", en: "Health app" },
    summary: {
      fr: "Rappels de médicaments hors-ligne, interface premium iOS et Android, notifications locales et suivi des prises.",
      en: "Offline medication reminders for iOS and Android, with a premium UI and daily intake tracking.",
    },
    description: {
      fr: "Souri aide à ne plus manquer une prise : rappels locaux, historique et une interface calme pensée pour un usage quotidien, même sans réseau.",
      en: "Souri helps you never miss a dose: local reminders, history and a calm interface designed for daily use, even offline.",
    },
    highlights: {
      fr: ["Mode hors-ligne avec Hive", "Notifications locales", "Architecture BLoC", "Interface iOS soignée"],
      en: ["Offline-first with Hive", "Local notifications", "BLoC architecture", "Polished iOS-style UI"],
    },
  },
  {
    slug: "noor-al-iman",
    kind: "mobile",
    accent: "indigo",
    image: "/projects/noor-al-iman/cover-hero.png",
    gallery: [
      "/projects/noor-al-iman/cover-hero.png",
      "/projects/noor-al-iman/g1.png",
      "/projects/noor-al-iman/g2.png",
      "/projects/noor-al-iman/g3.png",
      "/projects/noor-al-iman/g4.png",
      "/projects/noor-al-iman/g5.png",
      "/projects/noor-al-iman/g6.png",
    ],
    stack: ["Flutter", "Dart", "Clean Architecture"],
    title: { fr: "Noor Al Iman", en: "Noor Al Iman" },
    category: { fr: "Application spirituelle", en: "Spiritual app" },
    summary: {
      fr: "Coran, horaires de prière, hadiths et invocations dans une application Flutter claire, pensée pour le quotidien.",
      en: "Quran, prayer times, hadiths and duas in a calm Flutter app designed for daily use.",
    },
    description: {
      fr: "Noor Al Iman rassemble lecture du Coran, horaires de prière, hadiths et douas dans une navigation simple, avec une architecture propre pour évoluer sereinement.",
      en: "Noor Al Iman brings Quran reading, prayer times, hadiths and duas into a simple navigation, with a clean architecture that can grow over time.",
    },
    highlights: {
      fr: ["Lecture du Coran", "Horaires de prière", "Hadiths et invocations", "Clean Architecture"],
      en: ["Quran reader", "Prayer times", "Hadiths and duas", "Clean architecture"],
    },
  },
  {
    slug: "studyai",
    kind: "mobile",
    accent: "violet",
    featured: true,
    image: "/projects/studyai/cover.png",
    gallery: [
      "/projects/studyai/cover.png",
      "/projects/studyai/g1.png",
      "/projects/studyai/g2.png",
      "/projects/studyai/g3.png",
      "/projects/studyai/g4.png",
      "/projects/studyai/g5.png",
      "/projects/studyai/g6.png",
      "/projects/studyai/g7.png",
      "/projects/studyai/g8.png",
    ],
    year: "2026",
    role: {
      fr: "Mobile — Flutter, IA et Firebase",
      en: "Mobile — Flutter, AI and Firebase",
    },
    context: {
      fr: "App d'étude pour transformer un cours (PDF ou notes) en outils de révision : chat, quiz et flashcards.",
      en: "Study app that turns a course (PDF or notes) into revision tools: chat, quizzes and flashcards.",
    },
    challenge: {
      fr: "Les étudiants perdent du temps à relire des PDF sans savoir ce qu'ils n'ont pas compris.",
      en: "Students waste time rereading PDFs without knowing what they still don't understand.",
    },
    solution: {
      fr: "Gemini génère quiz et flashcards depuis le document. Firebase Auth + Storage pour le compte et les fichiers. State management BLoC pour un flux de révision clair.",
      en: "Gemini generates quizzes and flashcards from the document. Firebase Auth + Storage for the account and files. BLoC keeps the revision flow predictable.",
    },
    stack: ["Flutter", "Firebase", "Gemini", "BLoC"],
    title: { fr: "StudyAI", en: "StudyAI" },
    category: { fr: "Assistant étudiant", en: "Study assistant" },
    summary: {
      fr: "Assistant étudiant propulsé par Gemini et Firebase : chat, quiz, PDF et flashcards pour réviser plus vite.",
      en: "Student assistant powered by Gemini and Firebase: chat, quizzes, PDFs and flashcards.",
    },
    description: {
      fr: "StudyAI transforme cours et PDF en quiz, flashcards et conversations avec Gemini. Authentification Firebase, stockage cloud et parcours de révision guidé.",
      en: "StudyAI turns courses and PDFs into quizzes, flashcards and Gemini chats. Firebase auth, cloud storage and a guided revision flow.",
    },
    highlights: {
      fr: ["Chat Gemini", "Quiz et flashcards", "Import PDF", "Firebase Auth"],
      en: ["Gemini chat", "Quizzes and flashcards", "PDF import", "Firebase Auth"],
    },
  },
  {
    slug: "fintrack",
    kind: "mobile",
    accent: "blue",
    featured: true,
    image: "/projects/fintrack/cover-hero.png",
    gallery: [
      "/projects/fintrack/cover-hero.png",
      "/projects/fintrack/g1.png",
      "/projects/fintrack/g2.png",
      "/projects/fintrack/g3.png",
      "/projects/fintrack/g4.png",
      "/projects/fintrack/g5.png",
      "/projects/fintrack/g6.png",
    ],
    galleryLabels: {
      fr: [
        "Cover — iPhone FinTrack",
        "Tableau de bord — solde et opérations",
        "Historique des transactions",
        "Nouvelle opération",
        "Statistiques et évolution",
        "Statistiques et devises",
        "Budgets et rapports",
      ],
      en: [
        "Cover — FinTrack iPhone",
        "Dashboard — balance and activity",
        "Transaction history",
        "Add transaction",
        "Stats and trends",
        "Stats and FX rates",
        "Budgets and reports",
      ],
    },
    year: "2025",
    role: {
      fr: "Full-stack — Flutter + API Laravel",
      en: "Full-stack — Flutter + Laravel API",
    },
    context: {
      fr: "Suivi d'argent personnel : dépenses, budgets et graphiques, avec un vrai backend plutôt qu'un stockage local seul.",
      en: "Personal money tracking: expenses, budgets and charts, with a real backend instead of local storage only.",
    },
    challenge: {
      fr: "Tenir des budgets par catégorie et un historique fiable, synchronisé, sans tableur.",
      en: "Keep category budgets and a reliable, synced history without a spreadsheet.",
    },
    solution: {
      fr: "App Flutter branchée sur une API Laravel / MySQL : catégories, budgets, tableaux de bord et historique des transactions.",
      en: "Flutter app on a Laravel / MySQL API: categories, budgets, dashboards and transaction history.",
    },
    stack: ["Flutter", "Laravel", "MySQL"],
    title: { fr: "FinTrack", en: "FinTrack" },
    category: { fr: "Finance personnelle", en: "Personal finance" },
    summary: {
      fr: "Suivi des dépenses, budgets et tableaux de bord financiers avec une application mobile et un backend Laravel.",
      en: "Expense tracking, budgets and financial dashboards with a mobile app and a Laravel backend.",
    },
    description: {
      fr: "FinTrack relie une app Flutter à une API Laravel : catégories, budgets, graphiques et historique des transactions pour suivre son argent au quotidien.",
      en: "FinTrack connects a Flutter app to a Laravel API: categories, budgets, charts and transaction history for day-to-day money tracking.",
    },
    highlights: {
      fr: ["Tableaux de bord", "Budgets par catégorie", "API Laravel", "Base MySQL"],
      en: ["Dashboards", "Category budgets", "Laravel API", "MySQL database"],
    },
  },
  {
    slug: "moknin",
    kind: "mobile",
    accent: "indigo",
    image: "/projects/moknin/cover-hero.png",
    gallery: [
      "/projects/moknin/cover-hero.png",
      "/projects/moknin/g1.png",
      "/projects/moknin/g2.png",
      "/projects/moknin/g3.png",
      "/projects/moknin/g4.png",
      "/projects/moknin/g5.png",
      "/projects/moknin/g6.png",
    ],
    stack: ["Flutter", "Laravel", "Docker"],
    title: { fr: "Moknin Delivery", en: "Moknin Delivery" },
    category: { fr: "Livraison multi-rôles", en: "Multi-role delivery" },
    summary: {
      fr: "Écosystème de livraison : clients, commerces et livreurs, commandes, stocks et suivi des colis.",
      en: "Delivery ecosystem for customers, stores and couriers, with orders, inventory and tracking.",
    },
    description: {
      fr: "Moknin Delivery couvre trois rôles : client, commerce et livreur. Commandes, détail magasin, profil et backend Laravel conteneurisé.",
      en: "Moknin Delivery covers three roles: customer, store and courier. Orders, store detail, profile and a containerized Laravel backend.",
    },
    highlights: {
      fr: ["Trois applications métier", "Suivi des commandes", "Backend Laravel", "Déploiement Docker"],
      en: ["Three business apps", "Order tracking", "Laravel backend", "Docker deploy"],
    },
  },
  {
    slug: "king-livraison",
    kind: "web",
    accent: "blue",
    featured: true,
    image: "/projects/king-livraison/cover-hero.png",
    gallery: [
      "/projects/king-livraison/cover-hero.png",
      "/projects/king-livraison/g1.png",
      "/projects/king-livraison/g2.png",
      "/projects/king-livraison/g3.png",
      "/projects/king-livraison/g4.png",
      "/projects/king-livraison/g5.png",
      "/projects/king-livraison/g6.png",
      "/projects/king-livraison/g7.png",
    ],
    galleryLabels: {
      fr: [
        "Cover — laptop et mobile",
        "Landing desktop",
        "Landing page complète",
        "Connexion",
        "Redirection dashboard",
        "Maquette GPS Live",
        "Maquette livraisons",
        "Maquette dashboard flotte",
      ],
      en: [
        "Cover — laptop and mobile",
        "Desktop landing",
        "Full landing page",
        "Login",
        "Dashboard redirect",
        "Live GPS mockup",
        "Deliveries mockup",
        "Fleet dashboard mockup",
      ],
    },
    year: "2026",
    role: {
      fr: "Full-stack — produit web opérationnel",
      en: "Full-stack — operations web product",
    },
    context: {
      fr: "Plateforme métier pour une flotte de motos à Alger : livraison, location, GPS et maintenance dans un seul back-office.",
      en: "Operations platform for a moto fleet in Algiers: delivery, rental, GPS and maintenance in one back office.",
    },
    challenge: {
      fr: "Piloter en temps réel des motos, des livreurs et des contrats sans multiplier les outils (tableurs, WhatsApp, GPS séparés).",
      en: "Run bikes, couriers and contracts in real time without spreading work across spreadsheets, WhatsApp and a separate GPS tool.",
    },
    solution: {
      fr: "Cockpit Next.js : carte GPS, statuts de flotte, courses, location B2B, radar de vidanges et fiches employés. Données opérationnelles (Supabase) et app Flutter pour le terrain.",
      en: "Next.js cockpit: GPS map, fleet statuses, jobs, B2B rental, oil-change radar and staff cards. Operational data on Supabase and a Flutter app in the field.",
    },
    stack: ["Next.js", "Supabase", "Flutter", "Tailwind", "Maps"],
    title: { fr: "King Livraison", en: "King Livraison" },
    category: { fr: "Plateforme logistique", en: "Logistics platform" },
    summary: {
      fr: "Cockpit flotte : GPS live, livraisons, location, employés et radar maintenance — pensé pour des opérations terrain à Alger.",
      en: "Fleet cockpit: live GPS, deliveries, rental, staff and maintenance radar — built for field ops in Algiers.",
    },
    description: {
      fr: "King Livraison centralise une flotte de motos (8 véhicules dans le prototype), le GPS, les courses, la location B2B et la maintenance. Le dashboard affiche motos actives, courses en livraison, alertes vidange et livreurs. Le module GPS Live pose les véhicules sur la carte (Bouzaréah / Alger) avec filtres En livraison, Disponible, Location, Maintenance. La gestion de flotte suit matricule, km, vitesse, traceur GPS (GT06, Coban, Teltonika) et moteur ON/OFF. Côté métier : contrats de location, module livraison avec revenus, fiches employés liées aux motos, et un radar d'entretien (urgences / à surveiller / OK) avec historique des interventions.",
      en: "King Livraison centralizes a moto fleet (8 vehicles in the prototype), GPS, jobs, B2B rental and maintenance. The dashboard shows active bikes, deliveries in progress, oil-change alerts and couriers. Live GPS plots vehicles on the map (Bouzaréah / Algiers) with filters for In delivery, Available, Rental and Maintenance. Fleet management tracks plate, km, speed, GPS tracker (GT06, Coban, Teltonika) and engine ON/OFF. Business side: rental contracts, a delivery module with revenue, staff cards tied to bikes, and a maintenance radar (urgent / watch / OK) with service history.",
    },
    highlights: {
      fr: [
        "GPS live + filtres de statut",
        "Radar de vidange par km",
        "Location B2B et facturation",
        "Fiches livreurs liées aux motos",
        "FR / EN / AR et thème clair-sombre",
      ],
      en: [
        "Live GPS + status filters",
        "Oil-change radar by km",
        "B2B rental and billing",
        "Courier cards linked to bikes",
        "FR / EN / AR and light-dark theme",
      ],
    },
    modules: {
      fr: [
        "Dashboard opérationnel",
        "Flotte motos",
        "GPS Live",
        "Livraison",
        "Location",
        "Employés",
        "Maintenance",
        "Paramètres i18n",
      ],
      en: [
        "Ops dashboard",
        "Moto fleet",
        "Live GPS",
        "Delivery",
        "Rental",
        "Staff",
        "Maintenance",
        "i18n settings",
      ],
    },
  },
  {
    slug: "mecad",
    kind: "web",
    accent: "indigo",
    image: "/projects/mecad/cover-hero.png",
    gallery: [
      "/projects/mecad/cover-hero.png",
      "/projects/mecad/g1.png",
      "/projects/mecad/g2.png",
      "/projects/mecad/g3.png",
      "/projects/mecad/g4.png",
      "/projects/mecad/g5.png",
      "/projects/mecad/g6.png",
      "/projects/mecad/g7.png",
    ],
    stack: ["PHP", "JavaScript", "Vercel"],
    title: { fr: "MeCad 3D", en: "MeCad 3D" },
    category: { fr: "Boutique fichiers CNC", en: "CNC file store" },
    summary: {
      fr: "Boutique de fichiers CNC, DXF et plans CAD 3D prêts pour laser, plasma et routage, avec back-office catalogue.",
      en: "Store for CNC, DXF and 3D CAD files ready for laser, plasma and routing, with a catalog back office.",
    },
    description: {
      fr: "MeCad vend des fichiers de découpe (DXF, PDF, plans 3D) : boutique, fiche produit, panier et administration du catalogue.",
      en: "MeCad sells cut files (DXF, PDF, 3D drawings): storefront, product page, cart and catalog admin.",
    },
    highlights: {
      fr: ["Catalogue CNC", "Fiches produit", "Back-office", "Hébergement Vercel"],
      en: ["CNC catalog", "Product pages", "Back office", "Vercel hosting"],
    },
  },
  {
    slug: "tibigoo",
    kind: "web",
    accent: "violet",
    image: "/projects/tibigoo/cover.png",
    gallery: [
      "/projects/tibigoo/cover.png",
      "/projects/tibigoo/g1.png",
      "/projects/tibigoo/g2.png",
      "/projects/tibigoo/g3.jpg",
      "/projects/tibigoo/g4.png",
    ],
    href: "https://www.tibigoo.com",
    stack: ["Next.js", "Firebase", "App Router"],
    title: { fr: "Tibigoo", en: "Tibigoo" },
    category: { fr: "Marketplace restauration", en: "Food marketplace" },
    summary: {
      fr: "Site vitrine restaurateurs et livreurs, codes promo dynamiques et contenus pilotés par le back-office.",
      en: "Landing for restaurants and couriers, with dynamic promo codes and back-office driven content.",
    },
    description: {
      fr: "Tibigoo présente l'offre aux restaurateurs et livreurs. Codes promo, logos partenaires et contacts viennent de l'API du back-office.",
      en: "Tibigoo presents the offer to restaurants and couriers. Promo codes, partner logos and contacts come from the back-office API.",
    },
    highlights: {
      fr: ["Landing Next.js", "Codes promo dynamiques", "Espaces restaurateur et livreur", "Site en ligne"],
      en: ["Next.js landing", "Dynamic promo codes", "Restaurant and courier pages", "Live website"],
    },
  },
  {
    slug: "nexteco",
    kind: "web",
    accent: "blue",
    featured: true,
    image: "/projects/nexteco/cover-hero.png",
    gallery: [
      "/projects/nexteco/cover-hero.png",
      "/projects/nexteco/g1.png",
      "/projects/nexteco/g2.png",
      "/projects/nexteco/g3.png",
      "/projects/nexteco/g4.png",
    ],
    galleryLabels: {
      fr: [
        "Cover — SIRH et terminal ZKTeco",
        "Capture produit 1",
        "Capture produit 2",
        "Capture produit 3",
        "Capture produit 4",
      ],
      en: [
        "Cover — HRIS and ZKTeco terminal",
        "Product shot 1",
        "Product shot 2",
        "Product shot 3",
        "Product shot 4",
      ],
    },
    year: "2025",
    role: {
      fr: "Backend Laravel / Filament + intégration hardware",
      en: "Laravel / Filament backend + hardware integration",
    },
    context: {
      fr: "SIRH pour une entreprise qui pointe avec des terminaux ZKTeco : GRH d'un côté, espace employé de l'autre.",
      en: "HRIS for a company that clocks in on ZKTeco devices: HR on one side, employee space on the other.",
    },
    challenge: {
      fr: "Relier des terminaux biométriques à un vrai métier RH (congés, paie, réclamations) sans Excel ni double saisie.",
      en: "Connect biometric terminals to real HR workflows (leave, payroll, claims) without Excel or double entry.",
    },
    solution: {
      fr: "Laravel + Filament : ingestion des logs ZKTeco, tableaux de présence/retard/absence, rôles GRH vs Employé, PDF (fiches de paie) et back-office (shifts, avances, primes, départements).",
      en: "Laravel + Filament: ingest ZKTeco logs, attendance/late/absence dashboards, HR vs employee roles, PDFs (payslips) and ops back office (shifts, advances, bonuses, departments).",
    },
    repo: "https://github.com/Adem-Yac/NexTeco",
    stack: ["Laravel", "Filament", "PHP 8", "ZKTeco", "MySQL"],
    title: { fr: "NexTeco", en: "NexTeco" },
    category: { fr: "SIRH et pointage biométrique", en: "HRIS and biometric attendance" },
    summary: {
      fr: "SIRH Laravel / Filament branché sur ZKTeco : pointage biométrique, présences, congés, paie et espace employé.",
      en: "Laravel / Filament HRIS wired to ZKTeco: biometric punches, attendance, leave, payroll and employee space.",
    },
    description: {
      fr: "NexTeco est une application de gestion du personnel. Le portail sépare GRH et Employé. Côté GRH : indicateurs (effectifs, taux de présence, retard, absence), départements, congés et réclamations en attente, graphiques de présence, pointage biométrique (type d'utilisateur, horodatage, filtres période / enregistrements supprimés), shifts, avances, primes et configuration du dispositif ZKTeco. Côté employé : fiches de paie, demandes de congé, réclamations et « Mes présences » (check-in / check-out, état Retard). Le profil admin gère le compte et le thème clair / sombre. Le dépôt est public sur GitHub.",
      en: "NexTeco is a staff-management app. The portal splits HR and Employee. HR side: KPIs (headcount, attendance, late, absence), departments, pending leave and claims, attendance charts, biometric punches (user type, timestamps, period / deleted-record filters), shifts, advances, bonuses and ZKTeco device setup. Employee side: payslips, leave requests, claims and My attendance (check-in / check-out, Late status). The admin profile handles the account and light / dark theme. The repo is public on GitHub.",
    },
    highlights: {
      fr: [
        "Intégration terminaux ZKTeco",
        "Rôles GRH et Employé",
        "Dashboard présence / retard / absence",
        "Fiches de paie PDF",
        "Congés, réclamations, shifts, primes",
      ],
      en: [
        "ZKTeco device integration",
        "HR and employee roles",
        "Attendance / late / absence dashboard",
        "PDF payslips",
        "Leave, claims, shifts, bonuses",
      ],
    },
    modules: {
      fr: [
        "Dashboard RH",
        "Pointage biométrique",
        "Présences employé",
        "Fiches de paie",
        "Demandes de congé",
        "Réclamations",
        "Shifts / avances / primes",
        "Dispositif ZKTeco",
      ],
      en: [
        "HR dashboard",
        "Biometric punches",
        "Employee attendance",
        "Payslips",
        "Leave requests",
        "Claims",
        "Shifts / advances / bonuses",
        "ZKTeco device",
      ],
    },
  },
];

export const copy = {
  fr: {
    nav: [
      { href: "#accueil", label: "Accueil" },
      { href: "#a-propos", label: "À Propos" },
      { href: "#competences", label: "Compétences" },
      { href: "#outils", label: "Outils" },
      { href: "#projets", label: "Projets" },
      { href: "#track-record", label: "Parcours" },
      { href: "#contact", label: "Contact" },
    ],
    role: "Développeur web et mobile",
    available: "Disponible freelance et missions",
    kicker: "Web et mobile",
    headlineRole: "Développeur Web & Mobile Polyvalent",
    heroLead:
      "Passionné par l'architecture logicielle et l'innovation, je conçois et déploie des solutions numériques haute performance, ergonomiques et résolument centrées utilisateur.",
    ctaProject: "Discuter d'un projet",
    ctaProfile: "Découvrir mon profil",
    aboutKicker: "01 // PROFIL",
    aboutTitle: "À Propos de Moi",
    aboutLead:
      "Je construis les produits de bout en bout : les écrans que vos utilisateurs voient, et tout ce qui, en dessous, les maintient rapides, sécurisés et fiables. Technicien supérieur en développement web et mobile, je livre des architectures pérennes plutôt qu’un prototype jetable.",
    aboutWhoTitle: "Qui je suis",
    aboutWho:
      "Développeur web et mobile polyvalent, basé à Alger. Passionné par l’innovation, je crée des solutions logicielles efficaces et centrées sur l’utilisateur : apps Flutter, plateformes Next.js / Laravel, et outils métier (RH, flotte, e-commerce).",
    aboutBringTitle: "Ce que j’apporte",
    aboutBring: [
      "Livraison de bout en bout : conception, développement, déploiement et maintenance.",
      "Stack : Flutter / Dart, React, Next.js, Laravel / PHP, MySQL, Firebase.",
      "Bases solides : auth, APIs REST, rôles, performance, i18n (FR / EN / AR) et recette.",
    ],
    aboutCards: [
      {
        title: "Développement Web",
        body: "Applications modernes avec React, Next.js, Laravel et des écosystèmes cloud performants.",
        meta: "React.js & Laravel",
      },
      {
        title: "Applications Mobile",
        body: "Apps multiplateformes élégantes avec Flutter et Dart, iOS et Android.",
        meta: "Flutter",
      },
      {
        title: "Bases de Données",
        body: "Modélisation MySQL, Firebase et stratégies de cache pour des APIs rapides.",
        meta: "MySQL & Firebase",
      },
      {
        title: "Solutions Complètes",
        body: "Accompagnement de la spécification au déploiement en production.",
        meta: "De bout en bout",
      },
    ],
    skillsKicker: "02 // SAVOIR-FAIRE",
    skillsTitle: "Mes Compétences Techniques",
    skillsLead:
      "Une expertise équilibrée entre front-end, applications mobiles réactives et backends modulaires.",
    toolsKicker: "03 // ENVIRONNEMENT & DEVOPS",
    toolsTitle: "Outils & Environnements de Travail",
    toolsLead:
      "Versioning, environnements de développement, architectures et pipelines de livraison.",
    projectsKicker: "04 // RÉALISATIONS",
    projectsTitle: "Mes Projets",
    projectsLead:
      "D’abord les plateformes web, puis les applications mobile.",
    webSection: "Projets web",
    mobileSection: "Projets mobile",
    moreTitle: "Autres réalisations",
    moreLead: "D’autres apps et sites du même atelier.",
    filterAll: "Tous",
    choosePhoto: "Choisir une capture",
    photoOf: "Capture",
    challengeLabel: "Problème",
    solutionLabel: "Approche",
    modulesLabel: "Modules",
    roleLabel: "Rôle",
    yearLabel: "Année",
    contextLabel: "Contexte",
    filterMobile: "Projets mobile",
    filterWeb: "Projets web",
    github: "Code GitHub",
    live: "Voir le projet",
    liveSite: "Site en ligne",
    back: "Retour aux projets",
    overview: "Présentation",
    gallery: "Galerie",
    highlights: "Points clés",
    stackLabel: "Technologies",
    links: "Liens",
    kindMobile: "Mobile",
    kindWeb: "Web",
    navTitle: "Navigation",
    ready: "Prêt // Alger",
    heroRoleCode: "Développeur mobile et web",
    labelEmail: "E-mail",
    labelPhone: "WhatsApp",
    labelLinkedin: "LinkedIn",
    labelGithub: "GitHub",
    socialsTitle: "Réseaux",
    trackKicker: "05 // HISTORIQUE ET CERTIFICATIONS",
    trackTitle: "Parcours",
    trackLead:
      "Missions professionnelles concrètes et socle académique en ingénierie logicielle.",
    expTitle: "Parcours Professionnel & Expériences",
    eduTitle: "Diplômes & Formations Certifiantes",
    contactKicker: "06 // CONTACT",
    contactTitle: "Initier une Collaboration",
    contactLead:
      "Un projet web, une application mobile ou une mission technique ? Échangeons.",
    coords: "Coordonnées Directes",
    coordsLead:
      "Joignable par e-mail ou WhatsApp pour étudier vos besoins techniques.",
    remote: "Disponible sur site ou à distance",
    formName: "Votre Nom / Entreprise",
    formEmail: "Votre Email Professionnel",
    formType: "Typologie du Projet",
    formMessage: "Détails & Objectifs de votre mission",
    formSubmit: "Transmettre ma demande",
    formOk: "Message envoyé.",
    formOkLead: "Un e-mail a été transmis à yacefadem03@gmail.com.",
    formError: "Impossible d'envoyer le message. Réessayez ou écrivez-moi directement.",
    footerNote: "Conception d'architectures logicielles, applications web et écosystèmes mobiles.",
    rights: "© 2026 Adem Yacef. Tous droits réservés.",
    types: [
      { value: "web", label: "Site web" },
      { value: "mobile", label: "Application mobile" },
      { value: "software", label: "Logiciel" },
    ],
  },
  en: {
    nav: [
      { href: "#accueil", label: "Home" },
      { href: "#a-propos", label: "About" },
      { href: "#competences", label: "Skills" },
      { href: "#outils", label: "Tools" },
      { href: "#projets", label: "Work" },
      { href: "#track-record", label: "Experience" },
      { href: "#contact", label: "Contact" },
    ],
    role: "Web and mobile developer",
    available: "Available for freelance and missions",
    kicker: "Web and mobile",
    headlineRole: "Versatile Web & Mobile Developer",
    heroLead:
      "I design and ship high-performance digital products: clean architecture, careful UX, and production-ready delivery.",
    ctaProject: "Discuss a project",
    ctaProfile: "See my profile",
    aboutKicker: "01 // PROFILE",
    aboutTitle: "About Me",
    aboutLead:
      "I build products end to end: the screens your users see, and everything underneath that keeps them fast, secure and reliable. Trained as a senior technician in web and mobile development, I ship durable architecture — not a throwaway prototype.",
    aboutWhoTitle: "Who I am",
    aboutWho:
      "Versatile web and mobile developer based in Algiers. I build efficient, user-centered software: Flutter apps, Next.js / Laravel platforms, and business tools (HR, fleet, e-commerce).",
    aboutBringTitle: "What I bring",
    aboutBring: [
      "End-to-end delivery: planning, development, deploy and maintenance.",
      "Stack: Flutter / Dart, React, Next.js, Laravel / PHP, MySQL, Firebase.",
      "Solid foundations: auth, REST APIs, roles, performance, i18n (FR / EN / AR) and QA.",
    ],
    aboutCards: [
      {
        title: "Web Development",
        body: "Modern apps with React, Next.js, Laravel and reliable cloud stacks.",
        meta: "React.js & Laravel",
      },
      {
        title: "Mobile Apps",
        body: "Cross-platform products with Flutter and Dart for iOS and Android.",
        meta: "Flutter",
      },
      {
        title: "Databases",
        body: "MySQL modeling, Firebase and caching strategies for fast APIs.",
        meta: "MySQL & Firebase",
      },
      {
        title: "Complete solutions",
        body: "From specification to production deploy, with ownership of the full path.",
        meta: "End to end",
      },
    ],
    skillsKicker: "02 // CRAFT",
    skillsTitle: "Technical Skills",
    skillsLead:
      "Balanced expertise across interactive front-end, reactive mobile apps and modular backends.",
    toolsKicker: "03 // ENVIRONMENT & DEVOPS",
    toolsTitle: "Tools & Work Environment",
    toolsLead:
      "Versioning, development environments, architecture methods and delivery pipelines.",
    projectsKicker: "04 // WORK",
    projectsTitle: "Selected Projects",
    projectsLead:
      "Web platforms first, then mobile apps.",
    webSection: "Web projects",
    mobileSection: "Mobile projects",
    moreTitle: "More work",
    moreLead: "Other apps and sites from the same studio.",
    filterAll: "All",
    choosePhoto: "Choose a screenshot",
    photoOf: "Shot",
    challengeLabel: "Problem",
    solutionLabel: "Approach",
    modulesLabel: "Modules",
    roleLabel: "Role",
    yearLabel: "Year",
    contextLabel: "Context",
    filterMobile: "Mobile",
    filterWeb: "Web",
    github: "GitHub code",
    live: "View project",
    liveSite: "Live website",
    back: "Back to projects",
    overview: "Overview",
    gallery: "Gallery",
    highlights: "Highlights",
    stackLabel: "Tech stack",
    links: "Links",
    kindMobile: "Mobile",
    kindWeb: "Web",
    navTitle: "Navigation",
    ready: "Ready // Algiers",
    heroRoleCode: "Mobile and web developer",
    labelEmail: "Email",
    labelPhone: "WhatsApp",
    labelLinkedin: "LinkedIn",
    labelGithub: "GitHub",
    socialsTitle: "Social",
    trackKicker: "05 // HISTORY AND CERTIFICATIONS",
    trackTitle: "Experience",
    trackLead:
      "Hands-on missions and a formal software engineering foundation.",
    expTitle: "Professional Experience",
    eduTitle: "Degrees & Certifications",
    contactKicker: "06 // CONTACT",
    contactTitle: "Start a Collaboration",
    contactLead:
      "A web product, a mobile app, or a technical mission? Let’s talk.",
    coords: "Direct Contact",
    coordsLead: "Reachable by email or WhatsApp.",
    remote: "On-site or remote",
    formName: "Your name / company",
    formEmail: "Work email",
    formType: "Project type",
    formMessage: "Details & goals",
    formSubmit: "Send request",
    formOk: "Message sent.",
    formOkLead: "A notification email was sent to yacefadem03@gmail.com.",
    formError: "Could not send. Please retry or email me directly.",
    footerNote:
      "Modern software architecture, interactive web apps and high-performance mobile systems.",
    rights: "© 2026 Adem Yacef. All rights reserved.",
    types: [
      { value: "web", label: "Website" },
      { value: "mobile", label: "Mobile app" },
      { value: "software", label: "Software" },
    ],
  },
};

export const skills = [
  {
    title: { fr: "Ingénierie front-end", en: "Front-end engineering" },
    subtitle: {
      fr: "Interfaces web réactives & ergonomiques",
      en: "Reactive, usable web interfaces",
    },
    level: 95,
    note: { fr: "Prêt pour la production", en: "Production ready" },
    tags: ["HTML5", "CSS3 / Tailwind", "JavaScript ES6+", "ReactJS", "Next.js"],
    accent: "blue",
  },
  {
    title: { fr: "Développement Mobile", en: "Mobile Development" },
    subtitle: {
      fr: "Applications multiplateformes iOS & Android",
      en: "Cross-platform iOS & Android apps",
    },
    level: 92,
    note: { fr: "60 FPS", en: "60 FPS" },
    tags: ["Flutter SDK", "Dart", "BLoC Pattern"],
    accent: "indigo",
  },
  {
    title: { fr: "Back-End & Services API", en: "Back-End & APIs" },
    subtitle: {
      fr: "Services modulaires, sécurité et APIs robustes",
      en: "Modular services, security and solid APIs",
    },
    level: 90,
    note: { fr: "REST & Microservices", en: "REST & services" },
    tags: ["Laravel", "PHP 8+", "Next.js API", "REST APIs", "JWT & Auth"],
    accent: "violet",
  },
  {
    title: { fr: "Bases de Données", en: "Databases" },
    subtitle: {
      fr: "Modélisation, transactions et scalabilité",
      en: "Modeling, transactions and scale",
    },
    level: 88,
    note: { fr: "Optimisation SQL", en: "SQL optimization" },
    tags: ["MySQL", "Firebase Firestore"],
    accent: "blue",
  },
];

export const tools = [
  {
    title: { fr: "Versions et collaboration", en: "Versioning and collaboration" },
    body: {
      fr: "Gestion de versions, revues de code et workflows GitHub.",
      en: "Version control, code reviews and GitHub workflows.",
    },
    items: ["Git CLI", "GitHub & Workflows", "Branching & PR Reviews", "CI"],
  },
  {
    title: { fr: "Environnements & IDE", en: "Environments & IDEs" },
    body: {
      fr: "Espaces de développement, émulateurs et tests d'API.",
      en: "Dev environments, emulators and API testing.",
    },
    items: ["Visual Studio Code", "Android Studio & SDK", "Postman"],
  },
  {
    title: { fr: "Architectures et méthodes", en: "Architecture and methods" },
    body: {
      fr: "Structures découplées, clean architecture et BLoC.",
      en: "Decoupled structures, clean architecture and BLoC.",
    },
    items: ["MVC & Service Layer", "Clean Architecture", "BLoC"],
  },
  {
    title: { fr: "Déploiement et CI/CD", en: "Deploy and CI/CD" },
    body: {
      fr: "Pipelines, conteneurisation et hébergement cloud.",
      en: "Pipelines, containers and cloud hosting.",
    },
    items: ["Vercel", "Docker"],
  },
];

export const experience = [
  {
    dates: { fr: "juil. 2026 – août 2026", en: "Jul 2026 – Aug 2026" },
    kind: { fr: "CDD / mission", en: "Contract" },
    title: {
      fr: "KATECH — Optimisation digitale du service marketing",
      en: "KATECH — Marketing digital operations",
    },
    body: {
      fr: "Outils internes pour le pôle marketing : flux d'acquisition, reporting et interconnexion analytique.",
      en: "Internal tools for marketing: acquisition flows, reporting and analytics wiring.",
    },
    tags: { fr: ["Web et mobile", "Automatisation"], en: ["Web and mobile", "Automation"] },
  },
  {
    dates: { fr: "oct. 2025 – avr. 2026 · 7 mois", en: "Oct 2025 – Apr 2026 · 7 months" },
    kind: { fr: "Temps plein · Hybride", en: "Full-time · Hybrid" },
    title: {
      fr: "Développeur PHP — IT Solutions DZ",
      en: "PHP developer — IT Solutions DZ",
    },
    body: {
      fr: "Développement PHP en temps plein chez IT Solutions DZ, à Mohammadia (Alger), en hybride. Conception et maintenance d’applications métier.",
      en: "Full-time PHP development at IT Solutions DZ in Mohammadia (Algiers), hybrid. Building and maintaining business applications.",
    },
    tags: { fr: ["PHP", "Mohammadia, Alger"], en: ["PHP", "Mohammadia, Algiers"] },
  },
  {
    dates: { fr: "sept. 2025 – déc. 2025", en: "Sep 2025 – Dec 2025" },
    kind: { fr: "Stage", en: "Internship" },
    title: {
      fr: "Développeur web — Web JustSell",
      en: "Web developer — Web JustSell",
    },
    body: {
      fr: "Stage développeur web : sites et applications, intégration front et maintenance au sein de l’équipe JustSell.",
      en: "Web developer internship: sites and apps, front-end integration and maintenance with the JustSell team.",
    },
    tags: { fr: ["Web", "JustSell"], en: ["Web", "JustSell"] },
  },
  {
    dates: { fr: "avr. 2025 – sept. 2025", en: "Apr 2025 – Sep 2025" },
    kind: { fr: "Stage", en: "Internship" },
    title: {
      fr: "SARL Myndall — Stage pratique",
      en: "SARL Myndall — Practical internship",
    },
    body: {
      fr: "Applications métier, maintenance, revues de code et tests au sein d'une équipe agile.",
      en: "Business apps, maintenance, code reviews and tests in an agile team.",
    },
    tags: { fr: ["Logiciel métier", "Méthode agile"], en: ["Business software", "Agile"] },
  },
];

export const education = [
  {
    dates: "06/2026 – 08/2026",
    kind: { fr: "Certification", en: "Certification" },
    title: {
      fr: "BrainerX — Formation Intensive Flutter",
      en: "BrainerX — Intensive Flutter training",
    },
    body: {
      fr: "Flutter, Dart avancé, state management, animations et déploiement multiplateforme.",
      en: "Flutter, advanced Dart, state management, animation and cross-platform shipping.",
    },
    checks: {
      fr: ["Clean Architecture Flutter", "APIs & offline"],
      en: ["Flutter clean architecture", "APIs & offline"],
    },
  },
  {
    dates: "10/2022 – 09/2025",
    kind: { fr: "Diplôme d'État (TS)", en: "State diploma (TS)" },
    title: {
      fr: "Institut de Formation d'Ouled Fayet",
      en: "Ouled Fayet Training Institute",
    },
    body: {
      fr: "Technicien Supérieur en Développement Web et Mobile : algorithmique, POO, bases de données et génie logiciel.",
      en: "Senior Technician in Web & Mobile Development: algorithms, OOP, databases and software engineering.",
    },
    checks: {
      fr: ["Architectures logicielles", "Full-stack web & mobile"],
      en: ["Software architecture", "Full-stack web & mobile"],
    },
  },
];
