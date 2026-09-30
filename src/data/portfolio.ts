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

const slugAliases: Record<string, string> = {
  moknin: "kaizen",
};

export function getProject(slug: string) {
  const resolved = slugAliases[slug] ?? slug;
  return projects.find((project) => project.slug === resolved);
}

export const projects: Project[] = [
  {
    slug: "souri",
    kind: "mobile",
    accent: "blue",
    image: "/projects/souri/cover.png",
    gallery: [
      "/projects/souri/cover.png",
      "/projects/souri/g1.png",
      "/projects/souri/g2.png",
      "/projects/souri/g3.png",
      "/projects/souri/g4.png",
      "/projects/souri/g5.png",
      "/projects/souri/g6.png",
      "/projects/souri/g7.png",
      "/projects/souri/g8.png",
      "/projects/souri/g9.png",
      "/projects/souri/g10.png",
    ],
    galleryLabels: {
      fr: [
        "Cover — trio iPhone Souri",
        "Accueil — prochaine dose et prises du jour",
        "Onboarding — rappels doux",
        "Confirmation — « C’est pris »",
        "Permission — notifications locales",
        "Nouveau traitement — posologie et rappels",
        "Onboarding — app iPhone",
        "Profil — proches et confidentialité",
        "Progrès — série et adhérence",
        "Rappel local — Magnésium",
        "Traitements — actifs et stock",
      ],
      en: [
        "Cover — Souri iPhone trio",
        "Home — next dose and today’s intakes",
        "Onboarding — gentle reminders",
        "Confirmation — dose taken",
        "Permission — local notifications",
        "New treatment — dosage and reminders",
        "Onboarding — iPhone-like app",
        "Profile — caregivers and privacy",
        "Progress — streak and adherence",
        "Local reminder — Magnesium",
        "Treatments — active list and stock",
      ],
    },
    year: "2026",
    role: {
      fr: "Mobile — Flutter, 100 % hors-ligne",
      en: "Mobile — Flutter, fully offline",
    },
    context: {
      fr: "Beaucoup de gens oublient une prise, surtout sans réseau. Souri est une app iOS/Android de rappels médicaments qui reste entièrement sur l’appareil : aucun compte cloud, aucun Wi-Fi requis.",
      en: "People miss doses, especially without a network. Souri is an iOS/Android medication reminder that stays on-device: no cloud account, no Wi-Fi required.",
    },
    challenge: {
      fr: "Construire un suivi de traitement fiable hors-ligne, avec des notifications locales à l’heure, un historique des prises et une UI calme — sans backend ni fuite de données de santé.",
      en: "Ship a reliable offline treatment tracker, with on-time local notifications, intake history and a calm UI — no backend and no health-data leak.",
    },
    solution: {
      fr: "Flutter + BLoC (Cubit) + Hive. Cookie d’install local (SharedPreferences), traitements et prises stockés par user_id, notifications `flutter_local_notifications`, navigation go_router. UI iOS premium (thème crème, mascotte soleil).",
      en: "Flutter + BLoC (Cubit) + Hive. Local install cookie (SharedPreferences), treatments and intakes keyed by user_id, `flutter_local_notifications`, go_router. Premium iOS-like UI (cream theme, sun mascot).",
    },
    stack: ["Flutter", "Dart", "BLoC", "Hive", "go_router"],
    title: { fr: "Souri", en: "Souri" },
    category: { fr: "Application santé", en: "Health app" },
    summary: {
      fr: "Rappels de médicaments 100 % hors-ligne : Hive, notifications locales, série de prises et interface iOS calme.",
      en: "Fully offline medication reminders: Hive, local notifications, intake streaks and a calm iOS-like UI.",
    },
    description: {
      fr: "Souri aide à ne plus manquer une prise. Accueil avec prochaine dose et liste du jour, confirmation en un tap, traitements (actifs / en pause), progrès (adhérence, série), rappels locaux et profil. Tout reste sur le téléphone.",
      en: "Souri helps you never miss a dose. Home with the next dose and today’s list, one-tap confirmation, treatments (active / paused), progress (adherence, streak), local reminders and profile. Everything stays on the phone.",
    },
    highlights: {
      fr: [
        "100 % hors-ligne (Hive + cookie d’install)",
        "Notifications locales à l’heure",
        "Architecture UI → Cubit → Repository",
        "Suivi d’adhérence et série de jours",
      ],
      en: [
        "Fully offline (Hive + install cookie)",
        "On-time local notifications",
        "UI → Cubit → Repository architecture",
        "Adherence tracking and day streaks",
      ],
    },
    modules: {
      fr: ["Onboarding", "Accueil", "Traitements", "Rappels", "Progrès", "Profil"],
      en: ["Onboarding", "Home", "Treatments", "Reminders", "Progress", "Profile"],
    },
  },
  {
    slug: "noor-al-iman",
    kind: "mobile",
    accent: "indigo",
    image: "/projects/noor-al-iman/cover.png",
    gallery: [
      "/projects/noor-al-iman/cover.png",
      "/projects/noor-al-iman/g1.png",
      "/projects/noor-al-iman/g2.png",
      "/projects/noor-al-iman/g3.png",
      "/projects/noor-al-iman/g4.png",
      "/projects/noor-al-iman/g5.png",
      "/projects/noor-al-iman/g6.png",
      "/projects/noor-al-iman/g7.png",
    ],
    galleryLabels: {
      fr: [
        "Cover — iPhone accueil",
        "Trio — Coran, prière, douas",
        "Accueil — prochaine salat et verset du jour",
        "Lecteur du Coran",
        "Horaires de prière",
        "Hadiths",
        "Invocations (douas)",
        "Réglages et langue",
      ],
      en: [
        "Cover — home on iPhone",
        "Trio — Quran, prayer, duas",
        "Home — next salah and verse of the day",
        "Quran reader",
        "Prayer times",
        "Hadiths",
        "Duas",
        "Settings and language",
      ],
    },
    year: "2026",
    role: {
      fr: "Mobile — Flutter, Firebase et contenu islamique",
      en: "Mobile — Flutter, Firebase and Islamic content",
    },
    context: {
      fr: "Les apps spirituelles empilent souvent trop de fonctions. Noor Al Iman rassemble Coran, horaires de prière, hadiths et douas dans une navigation unique, FR / EN / AR, avec un compte Firebase optionnel.",
      en: "Spiritual apps often pile on too many features. Noor Al Iman brings Quran, prayer times, hadiths and duas into one navigation, FR / EN / AR, with optional Firebase auth.",
    },
    challenge: {
      fr: "Servir du contenu (Coran, tafsir, adhan) de façon lisible, calculer les prières selon la position, et rester utilisable hors-ligne après préchargement — sans casser l’arabe RTL.",
      en: "Serve content (Quran, tafsir, adhan) readably, compute prayer times from location, and stay usable offline after prefetch — without breaking Arabic RTL.",
    },
    solution: {
      fr: "Flutter, Clean Architecture, BLoC, go_router. APIs Ummah (Coran, hadiths, douas, prière), géolocalisation, notifications d’adhan, audio (takbir / adhan), Firebase Auth + Google Sign-In, prefetch hors-ligne.",
      en: "Flutter, clean architecture, BLoC, go_router. Ummah APIs (Quran, hadiths, duas, prayer), geolocation, adhan notifications, audio (takbir / adhan), Firebase Auth + Google Sign-In, offline prefetch.",
    },
    stack: ["Flutter", "Firebase", "BLoC", "Clean Architecture"],
    title: { fr: "Noor Al Iman", en: "Noor Al Iman" },
    category: { fr: "Application spirituelle", en: "Spiritual app" },
    summary: {
      fr: "Coran, horaires de prière, hadiths et douas — Flutter, Firebase, FR / EN / AR, avec adhan et mode hors-ligne.",
      en: "Quran, prayer times, hadiths and duas — Flutter, Firebase, FR / EN / AR, with adhan and offline mode.",
    },
    description: {
      fr: "Accueil avec prochaine salat, accès rapide Coran / Hadith / Prière / Douas, verset du jour. Lecteur du Coran et tafsir, horaires géolocalisés, collections de hadiths, catégories d’invocations, compte Firebase et réglages (langue, notifications).",
      en: "Home with the next salah, quick access to Quran / Hadith / Prayer / Duas, verse of the day. Quran reader and tafsir, geolocated times, hadith collections, dua categories, Firebase account and settings (language, notifications).",
    },
    highlights: {
      fr: [
        "Lecteur Coran + tafsir",
        "Horaires de prière et adhan",
        "Hadiths et douas par catégorie",
        "FR / EN / AR et prefetch hors-ligne",
      ],
      en: [
        "Quran reader + tafsir",
        "Prayer times and adhan",
        "Hadiths and duas by category",
        "FR / EN / AR and offline prefetch",
      ],
    },
    modules: {
      fr: ["Accueil", "Coran", "Prière", "Hadiths", "Douas", "Auth Firebase", "Réglages"],
      en: ["Home", "Quran", "Prayer", "Hadiths", "Duas", "Firebase auth", "Settings"],
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
      "/projects/studyai/g9.png",
      "/projects/studyai/g10.png",
      "/projects/studyai/g11.png",
    ],
    galleryLabels: {
      fr: [
        "Cover — accueil iPhone",
        "Mockup — chat et quiz",
        "Mockup — PDF et flashcards",
        "Onboarding — synthèse IA",
        "Connexion Firebase / Google",
        "Accueil — cours et progression",
        "Chat Gemini",
        "Documents — import PDF",
        "Détail d’un cours + synthèse",
        "Quiz généré",
        "Suivi et badges",
        "Profil et préférences IA",
      ],
      en: [
        "Cover — home on iPhone",
        "Mockup — chat and quiz",
        "Mockup — PDF and flashcards",
        "Onboarding — AI notes",
        "Firebase / Google sign-in",
        "Home — courses and progress",
        "Gemini chat",
        "Documents — PDF import",
        "Course detail + summary",
        "Generated quiz",
        "Progress and badges",
        "Profile and AI preferences",
      ],
    },
    year: "2026",
    role: {
      fr: "Mobile — Flutter, Gemini et Firebase",
      en: "Mobile — Flutter, Gemini and Firebase",
    },
    context: {
      fr: "Les étudiants relisent des PDF sans savoir ce qu’ils n’ont pas compris. StudyAI transforme un cours (PDF, notes, photos) en chat, quiz et flashcards, avec un vrai compte Firebase.",
      en: "Students reread PDFs without knowing what they still miss. StudyAI turns a course (PDF, notes, photos) into chat, quizzes and flashcards, with a real Firebase account.",
    },
    challenge: {
      fr: "Relier extraction de texte (PDF / images), Gemini, et un parcours de révision (quiz, flashcards, stats) sans données fictives — auth email, Google ou invité, fichiers isolés par utilisateur.",
      en: "Wire text extraction (PDF / images), Gemini, and a revision flow (quizzes, flashcards, stats) with no fake data — email, Google or guest auth, files isolated per user.",
    },
    solution: {
      fr: "Flutter + BLoC + get_it. Firebase Auth, Firestore, Storage. Gemini via Firebase AI (sinon clé locale). Import PDF, chat contextualisé, génération de quiz et decks, progression réelle.",
      en: "Flutter + BLoC + get_it. Firebase Auth, Firestore, Storage. Gemini via Firebase AI (or a local key). PDF import, contextual chat, quiz and deck generation, real progress.",
    },
    stack: ["Flutter", "Firebase", "Gemini", "BLoC"],
    title: { fr: "StudyAI", en: "StudyAI" },
    category: { fr: "Assistant étudiant", en: "Study assistant" },
    summary: {
      fr: "Assistant d’étude Gemini + Firebase : chat, import PDF, quiz et flashcards générés depuis le cours.",
      en: "Gemini + Firebase study assistant: chat, PDF import, quizzes and flashcards generated from the course.",
    },
    description: {
      fr: "StudyAI 2.0 : onboarding, auth Firebase / Google, accueil (cours, série, quiz recommandés), chat Gemini (résumer, expliquer, générer un quiz), documents, quiz, flashcards et profil. Les données ne sont plus simulées.",
      en: "StudyAI 2.0: onboarding, Firebase / Google auth, home (courses, streak, recommended quizzes), Gemini chat (summarize, explain, generate a quiz), documents, quizzes, flashcards and profile. No more simulated data.",
    },
    highlights: {
      fr: ["Chat Gemini contextualisé", "Quiz et flashcards depuis un PDF", "Auth Firebase, Google et invité", "Progression et badges réels"],
      en: ["Contextual Gemini chat", "Quizzes and flashcards from a PDF", "Firebase, Google and guest auth", "Real progress and badges"],
    },
    modules: {
      fr: ["Onboarding", "Auth", "Accueil", "Chat IA", "Documents", "Quiz", "Flashcards", "Profil"],
      en: ["Onboarding", "Auth", "Home", "AI chat", "Documents", "Quizzes", "Flashcards", "Profile"],
    },
  },
  {
    slug: "fintrack",
    kind: "mobile",
    accent: "blue",
    featured: true,
    image: "/projects/fintrack/cover.png",
    gallery: [
      "/projects/fintrack/cover.png",
      "/projects/fintrack/g1.png",
      "/projects/fintrack/g2.png",
      "/projects/fintrack/g3.png",
      "/projects/fintrack/g4.png",
      "/projects/fintrack/g5.png",
      "/projects/fintrack/g6.png",
      "/projects/fintrack/g7.png",
      "/projects/fintrack/g8.png",
      "/projects/fintrack/g9.png",
      "/projects/fintrack/g10.png",
      "/projects/fintrack/g11.png",
    ],
    galleryLabels: {
      fr: [
        "Cover — trio iPhone",
        "Mockup — tableau de bord sombre",
        "Splash — édition Algérie / DA",
        "Onboarding",
        "Connexion",
        "Création de compte",
        "Tableau de bord — solde et opérations",
        "Historique des transactions",
        "Nouvelle opération",
        "Statistiques",
        "Statistiques et devises",
        "Budgets et objectifs d’épargne",
      ],
      en: [
        "Cover — iPhone trio",
        "Mockup — dark dashboard",
        "Splash — Algeria / DZD edition",
        "Onboarding",
        "Sign in",
        "Create account",
        "Dashboard — balance and activity",
        "Transaction history",
        "Add transaction",
        "Statistics",
        "Statistics and FX rates",
        "Budgets and savings goals",
      ],
    },
    year: "2026",
    role: {
      fr: "Full-stack — Flutter + API Laravel",
      en: "Full-stack — Flutter + Laravel API",
    },
    context: {
      fr: "Suivi d’argent personnel en dinar algérien : dépenses, budgets, objectifs et taux de change, avec un vrai backend plutôt qu’un tableur ou un stockage local seul.",
      en: "Personal money tracking in Algerian dinar: expenses, budgets, goals and FX rates, with a real backend instead of a spreadsheet or local storage only.",
    },
    challenge: {
      fr: "Tenir un historique synchronisé, des budgets par catégorie et un convertisseur fiable (DA, EUR, USD), en FR / EN / AR, sans perdre le hors-ligne de courte durée.",
      en: "Keep a synced history, category budgets and a reliable converter (DZD, EUR, USD), in FR / EN / AR, without losing short-term offline use.",
    },
    solution: {
      fr: "App Flutter (BLoC, Dio, go_router, sqflite en cache) branchée sur une API Laravel / MySQL : auth, catégories, transactions, budgets, stats, devises. Édition Algérie (DA, CIB, espèces).",
      en: "Flutter app (BLoC, Dio, go_router, sqflite cache) on a Laravel / MySQL API: auth, categories, transactions, budgets, stats, FX. Algeria edition (DZD, CIB, cash).",
    },
    stack: ["Flutter", "Laravel", "MySQL", "BLoC"],
    title: { fr: "FinTrack", en: "FinTrack" },
    category: { fr: "Finance personnelle", en: "Personal finance" },
    summary: {
      fr: "Finance perso en DA : dashboard, transactions, budgets, objectifs et taux de change — Flutter + API Laravel.",
      en: "Personal finance in DZD: dashboard, transactions, budgets, goals and FX — Flutter + Laravel API.",
    },
    description: {
      fr: "FinTrack relie une app Flutter à Laravel. Tableau de bord (solde, revenus / dépenses, graphiques), historique filtrable, saisie d’opération (dépense / revenu, catégories, CIB ou espèces), stats, convertisseur et marchés, budgets mensuels et objectifs d’épargne.",
      en: "FinTrack connects a Flutter app to Laravel. Dashboard (balance, income / spend, charts), filterable history, add transaction (expense / income, categories, CIB or cash), stats, converter and markets, monthly budgets and savings goals.",
    },
    highlights: {
      fr: ["Conçu pour le dinar algérien", "Budgets et objectifs d’épargne", "Taux de change en direct", "API Laravel + cache local"],
      en: ["Built for Algerian dinar", "Budgets and savings goals", "Live FX rates", "Laravel API + local cache"],
    },
    modules: {
      fr: ["Auth", "Tableau de bord", "Transactions", "Budgets", "Statistiques", "Devises"],
      en: ["Auth", "Dashboard", "Transactions", "Budgets", "Statistics", "FX rates"],
    },
  },
  {
    slug: "kaizen",
    kind: "mobile",
    accent: "indigo",
    image: "/projects/kaizen/cover.png",
    gallery: [
      "/projects/kaizen/g1.png",
      "/projects/kaizen/g2.png",
      "/projects/kaizen/g3.png",
      "/projects/kaizen/g4.png",
      "/projects/kaizen/g5.png",
      "/projects/kaizen/g6.png",
    ],
    galleryLabels: {
      fr: [
        "Connexion livreur / commerce",
        "Accueil livreur — solde et colis",
        "Liste des colis",
        "Fiche boutique",
        "Profil",
        "Espace commerce — solde et colis",
      ],
      en: [
        "Courier / store sign-in",
        "Courier home — balance and parcels",
        "Parcel list",
        "Store detail",
        "Profile",
        "Store space — balance and parcels",
      ],
    },
    year: "2025",
    role: {
      fr: "Full-stack — Flutter + Laravel / Vue",
      en: "Full-stack — Flutter + Laravel / Vue",
    },
    context: {
      fr: "Kaizen Delivery (plateforme Moknin) : un écosystème de livraison pour commerces, livreurs et clients. Colis, soldes, boutiques et suivi de statut dans plusieurs rôles, au lieu de groupes WhatsApp et de tableurs.",
      en: "Kaizen Delivery (Moknin platform): a delivery ecosystem for stores, couriers and customers. Parcels, balances, shops and status tracking across roles, instead of WhatsApp groups and spreadsheets.",
    },
    challenge: {
      fr: "Faire cohabiter plusieurs métiers (admin, magasin, livreur) avec les mêmes colis : statuts, finances, documents et zones, plus une app terrain lisible.",
      en: "Make several jobs (admin, store, courier) share the same parcels: statuses, money, documents and zones, plus a readable field app.",
    },
    solution: {
      fr: "Backend Laravel 11 + Vue 3 (Pinia, i18n FR/EN/AR, dark mode), API Sanctum, MySQL, Docker. Apps Flutter par rôle : connexion, accueil livreur (solde, en attente / en cours / livrés / retours), colis, fiche boutique, profil, et espace commerce (solde magasin, nouveau colis).",
      en: "Laravel 11 + Vue 3 backend (Pinia, FR/EN/AR i18n, dark mode), Sanctum API, MySQL, Docker. Flutter apps per role: sign-in, courier home (balance, pending / in progress / delivered / returns), parcels, store detail, profile, and store space (shop balance, new parcel).",
    },
    stack: ["Flutter", "Laravel", "Vue.js", "MySQL", "Docker"],
    title: { fr: "Kaizen", en: "Kaizen" },
    category: { fr: "Livraison multi-rôles", en: "Multi-role delivery" },
    summary: {
      fr: "App livraison Kaizen : livreurs et commerces, colis, soldes et boutiques — Flutter sur un backend Laravel / Vue.",
      en: "Kaizen delivery app: couriers and stores, parcels, balances and shops — Flutter on a Laravel / Vue backend.",
    },
    description: {
      fr: "Kaizen couvre le terrain : login, dashboard livreur (livraisons du mois, frais, gains), pipeline de colis, détail magasin, profil, et home commerce (prêts / enlevés / livrés, nouveau colis). Le back-office Moknin gère magasins, livreurs, vans, transactions et RTL arabe.",
      en: "Kaizen covers the field: login, courier dashboard (monthly jobs, fees, earnings), parcel pipeline, store detail, profile, and store home (ready / picked up / delivered, new parcel). The Moknin back office manages shops, couriers, vans, transactions and Arabic RTL.",
    },
    highlights: {
      fr: [
        "Rôles livreur et commerce",
        "Suivi des colis et retours",
        "Soldes et frais du mois",
        "Backend Laravel + Vue, i18n FR/EN/AR",
      ],
      en: [
        "Courier and store roles",
        "Parcel tracking and returns",
        "Monthly balances and fees",
        "Laravel + Vue backend, FR/EN/AR i18n",
      ],
    },
    modules: {
      fr: ["Connexion", "Accueil livreur", "Colis", "Boutiques", "Finances", "Espace commerce", "Profil"],
      en: ["Sign-in", "Courier home", "Parcels", "Stores", "Finance", "Store space", "Profile"],
    },
  },
  {
    slug: "king-livraison",
    kind: "web",
    accent: "blue",
    featured: true,
    image: "/projects/king-livraison/cover.png",
    gallery: [
      "/projects/king-livraison/cover.png",
      "/projects/king-livraison/g1.png",
      "/projects/king-livraison/g2.png",
      "/projects/king-livraison/g3.png",
      "/projects/king-livraison/g4.png",
      "/projects/king-livraison/g5.png",
      "/projects/king-livraison/g6.png",
    ],
    galleryLabels: {
      fr: [
        "Cover — laptop et mobile",
        "Landing desktop",
        "Landing page complète",
        "Connexion",
        "GPS Live — carte flotte",
        "Module livraisons",
        "Dashboard flotte",
      ],
      en: [
        "Cover — laptop and mobile",
        "Desktop landing",
        "Full landing page",
        "Login",
        "Live GPS — fleet map",
        "Deliveries module",
        "Fleet dashboard",
      ],
    },
    year: "2026",
    role: {
      fr: "Full-stack — cockpit web + app Flutter terrain",
      en: "Full-stack — web cockpit + Flutter field app",
    },
    context: {
      fr: "King Livraison est un OS de flotte moto : livraison, location B2B, GPS et maintenance dans un seul back-office, plus une app Flutter pour le terrain.",
      en: "King Livraison is a moto fleet OS: delivery, B2B rental, GPS and maintenance in one back office, plus a Flutter app in the field.",
    },
    challenge: {
      fr: "Piloter véhicules, livreurs, courses, contrats et vidanges en temps réel sans Excel, WhatsApp et un GPS séparé — avec des rôles (super admin, GRH, société).",
      en: "Run vehicles, couriers, jobs, contracts and oil changes in real time without Excel, WhatsApp and a separate GPS tool — with roles (super admin, HR, company).",
    },
    solution: {
      fr: "Next.js + Supabase + Leaflet : landing, auth, dashboard, GPS live, flotte, livraisons, location, employés, maintenance, revenus, acomptes, admin et réglages i18n (FR / EN / AR). App Flutter pour les livreurs.",
      en: "Next.js + Supabase + Leaflet: landing, auth, dashboard, live GPS, fleet, deliveries, rental, staff, maintenance, revenue, advances, admin and i18n settings (FR / EN / AR). Flutter app for couriers.",
    },
    stack: ["Next.js", "Supabase", "Flutter", "Leaflet", "Tailwind"],
    title: { fr: "King Livraison", en: "King Livraison" },
    category: { fr: "Plateforme logistique", en: "Logistics platform" },
    summary: {
      fr: "Cockpit flotte moto : GPS live, livraisons, location, maintenance et revenus — Next.js, Supabase, Flutter.",
      en: "Moto fleet cockpit: live GPS, deliveries, rental, maintenance and revenue — Next.js, Supabase, Flutter.",
    },
    description: {
      fr: "King Livraison centralise la flotte, le GPS, les courses, la location et l’entretien. Le dashboard affiche motos actives, courses, alertes vidange. GPS Live pose les véhicules sur la carte avec filtres de statut. La flotte suit matricule, km, traceur et moteur. Côté métier : contrats, livraisons, fiches employés, radar maintenance, revenus et acomptes.",
      en: "King Livraison centralizes the fleet, GPS, jobs, rental and maintenance. The dashboard shows active bikes, jobs, oil-change alerts. Live GPS plots vehicles with status filters. Fleet tracks plate, km, tracker and engine. Business side: contracts, deliveries, staff cards, maintenance radar, revenue and advances.",
    },
    highlights: {
      fr: [
        "GPS live + filtres de statut",
        "Radar de vidange par km",
        "Location B2B, revenus et acomptes",
        "Rôles super admin / GRH / société",
        "FR / EN / AR et thème clair-sombre",
      ],
      en: [
        "Live GPS + status filters",
        "Oil-change radar by km",
        "B2B rental, revenue and advances",
        "Super admin / HR / company roles",
        "FR / EN / AR and light-dark theme",
      ],
    },
    modules: {
      fr: [
        "Landing",
        "Dashboard",
        "GPS Live",
        "Flotte",
        "Livraison",
        "Location",
        "Employés",
        "Maintenance",
        "Revenus / acomptes",
        "Admin",
      ],
      en: [
        "Landing",
        "Dashboard",
        "Live GPS",
        "Fleet",
        "Delivery",
        "Rental",
        "Staff",
        "Maintenance",
        "Revenue / advances",
        "Admin",
      ],
    },
  },
  {
    slug: "mecad",
    kind: "web",
    accent: "indigo",
    image: "/projects/mecad/cover.png",
    gallery: [
      "/projects/mecad/cover.png",
      "/projects/mecad/g1.png",
      "/projects/mecad/g2.png",
      "/projects/mecad/g3.png",
      "/projects/mecad/g4.png",
      "/projects/mecad/g5.png",
      "/projects/mecad/g6.png",
      "/projects/mecad/g7.png",
      "/projects/mecad/g8.png",
    ],
    galleryLabels: {
      fr: [
        "Cover — accueil desktop et mobile",
        "Accueil — catalogue CNC",
        "Boutique",
        "Fiche produit",
        "Panier",
        "Checkout",
        "Support",
        "Page MeCad",
        "Parcours utilisateur",
      ],
      en: [
        "Cover — home desktop and mobile",
        "Home — CNC catalog",
        "Store",
        "Product page",
        "Cart",
        "Checkout",
        "Support",
        "MeCad page",
        "User journey",
      ],
    },
    year: "2025",
    role: {
      fr: "Full-stack — boutique PHP et front",
      en: "Full-stack — PHP storefront and front-end",
    },
    context: {
      fr: "MeCad 3D vend des fichiers prêts à usiner : DXF, plans CAD 3D pour laser, plasma et routage. Il fallait une boutique simple (catalogue, fiche, panier, paiement) et un back-office catalogue, pas un CMS générique.",
      en: "MeCad 3D sells ready-to-cut files: DXF and 3D CAD drawings for laser, plasma and routing. It needed a simple store (catalog, product, cart, checkout) and a catalog back office, not a generic CMS.",
    },
    challenge: {
      fr: "Présenter des fichiers techniques (aperçus, formats, usages) et encaisser sans alourdir le parcours — du catalogue au checkout, plus une page support.",
      en: "Show technical files (previews, formats, use cases) and take payment without a heavy journey — from catalog to checkout, plus a support page.",
    },
    solution: {
      fr: "Site PHP / JavaScript / Tailwind : accueil, boutique, fiche produit, panier, checkout, support et pages atelier. Catalogue administrable, hébergement Vercel.",
      en: "PHP / JavaScript / Tailwind site: home, store, product, cart, checkout, support and workshop pages. Admin-managed catalog, hosted on Vercel.",
    },
    repo: "https://github.com/Adem-Yac/mecad-3d",
    stack: ["PHP", "JavaScript", "Tailwind", "Vercel"],
    title: { fr: "MeCad 3D", en: "MeCad 3D" },
    category: { fr: "Boutique fichiers CNC", en: "CNC file store" },
    summary: {
      fr: "Boutique de fichiers CNC / DXF / CAD 3D : catalogue, fiche produit, panier et checkout — PHP sur Vercel.",
      en: "CNC / DXF / 3D CAD file store: catalog, product page, cart and checkout — PHP on Vercel.",
    },
    description: {
      fr: "MeCad expose un catalogue de fichiers de découpe. L’accueil présente catégories et projets, la boutique filtre, la fiche détaille formats et usage, le panier et le checkout bouclent l’achat, le support et la page atelier rassurent. Le dépôt est public.",
      en: "MeCad exposes a catalog of cut files. Home shows categories and projects, the store filters, the product page details formats and use, cart and checkout close the sale, support and workshop pages reassure. The repo is public.",
    },
    highlights: {
      fr: ["Catalogue CNC / DXF / 3D", "Parcours panier → checkout", "Back-office catalogue", "Repo GitHub public"],
      en: ["CNC / DXF / 3D catalog", "Cart → checkout flow", "Catalog back office", "Public GitHub repo"],
    },
    modules: {
      fr: ["Accueil", "Boutique", "Fiche produit", "Panier", "Checkout", "Support", "Atelier"],
      en: ["Home", "Store", "Product", "Cart", "Checkout", "Support", "Workshop"],
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
      "/projects/tibigoo/g4.jpg",
      "/projects/tibigoo/g5.png",
    ],
    galleryLabels: {
      fr: [
        "Cover — laptop et mobile",
        "Mockup desktop — landing",
        "Mockup mobile",
        "Devenir restaurateur",
        "Devenir livreur",
        "Contact",
      ],
      en: [
        "Cover — laptop and mobile",
        "Desktop mockup — landing",
        "Mobile mockup",
        "Become a restaurant",
        "Become a courier",
        "Contact",
      ],
    },
    year: "2026",
    role: {
      fr: "Front — landing Next.js branchée au back-office",
      en: "Front-end — Next.js landing wired to the back office",
    },
    context: {
      fr: "TIBIGOO est une marketplace de repas. Le site vitrine (Conakry) doit convertir restaurateurs et livreurs, tout en affichant codes promo et logos partenaires pilotés par l’API du back-office.",
      en: "TIBIGOO is a meal marketplace. The marketing site (Conakry) has to convert restaurants and couriers, while showing promo codes and partner logos driven by the back-office API.",
    },
    challenge: {
      fr: "Garder un design figé et du SEO solide, mais du contenu vivant (promos, contacts, logos) sans redéployer — et relayer les webhooks WhatsApp / Meta vers la messagerie agents.",
      en: "Keep a fixed design and solid SEO, but live content (promos, contacts, logos) without a redeploy — and relay WhatsApp / Meta webhooks to the agent inbox.",
    },
    solution: {
      fr: "Next.js App Router : landing, pages restaurateur / livreur, légales, sitemap. `GET /config/landing` pour codes promo et contacts. Logos des restaurants validés. Relais `POST /api/webhooks/meta` vers le back-office.",
      en: "Next.js App Router: landing, restaurant / courier pages, legal, sitemap. `GET /config/landing` for promo codes and contacts. Logos of validated restaurants. `POST /api/webhooks/meta` relay to the back office.",
    },
    href: "https://www.tibigoo.com",
    stack: ["Next.js", "App Router", "SEO"],
    title: { fr: "Tibigoo", en: "Tibigoo" },
    category: { fr: "Marketplace restauration", en: "Food marketplace" },
    summary: {
      fr: "Landing TIBIGOO en ligne : restaurateurs, livreurs, codes promo dynamiques et SEO — Next.js branché au back-office.",
      en: "Live TIBIGOO landing: restaurants, couriers, dynamic promo codes and SEO — Next.js wired to the back office.",
    },
    description: {
      fr: "Le site présente la réservation de repas, les stores, et deux tunnels (devenir restaurateur, devenir livreur). Le bandeau promo et le pied de page viennent du back-office. Les logos partenaires apparaissent dès qu’un restaurant validé charge son visuel. En production sur tibigoo.com.",
      en: "The site presents meal booking, stores, and two funnels (become a restaurant, become a courier). The promo banner and footer come from the back office. Partner logos appear as soon as a validated restaurant uploads artwork. Live at tibigoo.com.",
    },
    highlights: {
      fr: ["Site en ligne tibigoo.com", "Codes promo et contacts API", "Pages restaurateur et livreur", "SEO, sitemap et JSON-LD"],
      en: ["Live at tibigoo.com", "Promo codes and contacts from the API", "Restaurant and courier pages", "SEO, sitemap and JSON-LD"],
    },
    modules: {
      fr: ["Landing", "Restaurateur", "Livreur", "Codes promo", "Partenaires", "Contact / légal"],
      en: ["Landing", "Restaurant", "Courier", "Promo codes", "Partners", "Contact / legal"],
    },
  },
  {
    slug: "nexteco",
    kind: "web",
    accent: "blue",
    featured: true,
    image: "/projects/nexteco/cover.png",
    gallery: [
      "/projects/nexteco/cover.png",
      "/projects/nexteco/g1.png",
      "/projects/nexteco/g2.png",
      "/projects/nexteco/g3.png",
      "/projects/nexteco/g4.png",
      "/projects/nexteco/g5.png",
      "/projects/nexteco/g6.png",
      "/projects/nexteco/g7.png",
    ],
    galleryLabels: {
      fr: [
        "Cover — terminal ZKTeco et SIRH",
        "Mockup bureau — login, dashboard, employés",
        "Portail d’accueil GRH / Employé",
        "Connexion GRH",
        "Dashboard GRH — présence",
        "Dashboard employé",
        "Annuaire employés",
        "Présences et pointages",
      ],
      en: [
        "Cover — ZKTeco terminal and HRIS",
        "Desk mockup — login, dashboard, staff",
        "HR / employee portal home",
        "HR login",
        "HR dashboard — attendance",
        "Employee dashboard",
        "Staff directory",
        "Attendance and punches",
      ],
    },
    year: "2026",
    role: {
      fr: "Backend Laravel / Filament + intégration ZKTeco",
      en: "Laravel / Filament backend + ZKTeco integration",
    },
    context: {
      fr: "NexTeco est un SIRH pour une entreprise qui pointe sur des terminaux ZKTeco : l’espace GRH d’un côté, l’espace employé de l’autre, sans double saisie Excel.",
      en: "NexTeco is an HRIS for a company that clocks in on ZKTeco devices: HR on one side, employee space on the other, without Excel double entry.",
    },
    challenge: {
      fr: "Ingérer les logs biométriques et les relier au métier RH (présences, retards, congés, paie, réclamations, shifts, avances, primes) avec deux portails distincts.",
      en: "Ingest biometric logs and wire them to real HR work (attendance, lateness, leave, payroll, claims, shifts, advances, bonuses) with two distinct portals.",
    },
    solution: {
      fr: "Laravel 12 + Filament 3 + package ZKTeco, MySQL, PDF (DomPDF). Widgets présence / effectifs, ressources employés, pointages, congés, fiches de paie, réclamations, départements, dispositif biométrique. Thème clair / sombre.",
      en: "Laravel 12 + Filament 3 + ZKTeco package, MySQL, PDFs (DomPDF). Attendance / headcount widgets, staff, punches, leave, payslips, claims, departments, biometric device. Light / dark theme.",
    },
    repo: "https://github.com/Adem-Yac/NexTeco",
    stack: ["Laravel", "Filament", "PHP 8", "ZKTeco", "MySQL"],
    title: { fr: "NexTeco", en: "NexTeco" },
    category: { fr: "SIRH et pointage biométrique", en: "HRIS and biometric attendance" },
    summary: {
      fr: "SIRH Laravel / Filament branché sur ZKTeco : pointage, présences, congés, paie PDF et espace employé.",
      en: "Laravel / Filament HRIS wired to ZKTeco: punches, attendance, leave, PDF payroll and employee space.",
    },
    description: {
      fr: "Le portail sépare GRH et Employé. GRH : KPIs (effectifs, présence, retard, absence), employés, pointages biométriques, shifts, avances, primes, départements, config ZKTeco. Employé : fiches de paie, congés, réclamations, « Mes présences ». Dépôt public sur GitHub.",
      en: "The portal splits HR and Employee. HR: KPIs (headcount, attendance, late, absence), staff, biometric punches, shifts, advances, bonuses, departments, ZKTeco setup. Employee: payslips, leave, claims, My attendance. Public GitHub repo.",
    },
    highlights: {
      fr: [
        "Terminaux ZKTeco → présences",
        "Rôles GRH et Employé",
        "Dashboard présence / retard / absence",
        "Fiches de paie PDF",
        "Congés, réclamations, shifts, primes",
      ],
      en: [
        "ZKTeco devices → attendance",
        "HR and employee roles",
        "Attendance / late / absence dashboard",
        "PDF payslips",
        "Leave, claims, shifts, bonuses",
      ],
    },
    modules: {
      fr: [
        "Portail GRH / Employé",
        "Dashboard présence",
        "Employés",
        "Pointage biométrique",
        "Fiches de paie",
        "Congés",
        "Réclamations",
        "Dispositif ZKTeco",
      ],
      en: [
        "HR / employee portal",
        "Attendance dashboard",
        "Staff",
        "Biometric punches",
        "Payslips",
        "Leave",
        "Claims",
        "ZKTeco device",
      ],
    },
  },
];

export const brandName = "AdemYac";

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
    filterMobile: "Mobile",
    filterWeb: "Web",
    github: "Code GitHub",
    live: "Voir le projet",
    liveSite: "Site en ligne",
    noPublicLink: "Pas de lien public pour le moment.",
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
    reviewsTitle: "Avis des clients",
    reviewsLead: "Le client indique son nom, le nom de son projet et son commentaire. Seuls les avis réellement publiés s’affichent.",
    reviewName: "Nom du client",
    reviewProject: "Nom du projet",
    reviewComment: "Commentaire",
    reviewSubmit: "Publier l’avis",
    reviewOk: "Merci. Votre avis est visible à côté.",
    reviewError: "Impossible de publier l’avis. Réessayez.",
    reviewEmpty: "Pas encore d’avis. Soyez le premier.",
    footerNote: "Conception d'architectures logicielles, applications web et écosystèmes mobiles.",
    rights: "© 2026 AdemYac. Tous droits réservés.",
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
    noPublicLink: "No public link yet.",
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
    reviewsTitle: "Client reviews",
    reviewsLead: "The client enters their name, their project name and their comment. Only reviews they publish appear here.",
    reviewName: "Client name",
    reviewProject: "Project name",
    reviewComment: "Comment",
    reviewSubmit: "Post review",
    reviewOk: "Thank you. Your review is visible alongside.",
    reviewError: "Could not publish the review. Please retry.",
    reviewEmpty: "No reviews yet. Be the first.",
    footerNote:
      "Modern software architecture, interactive web apps and high-performance mobile systems.",
    rights: "© 2026 AdemYac. All rights reserved.",
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
