import type { Locale } from "@/data/portfolio";

// What I offer and what is built in, each item backed by projects that already ship it.
// Slugs must exist in `projects` (checked at render: unknown slugs are skipped).

type Item = { title: string; body: string; projects: string[] };

export const offer: Record<
  Locale,
  {
    proofLabels: { projects: string; split: string; languages: string; tests: string };
    servicesTitle: string;
    servicesLead: string;
    seeIn: string;
    services: Item[];
    otherTitle: string;
    otherBody: string;
    otherCta: string;
    qualityTitle: string;
    qualityLead: string;
    quality: Item[];
  }
> = {
  fr: {
    proofLabels: {
      projects: "projets présentés, avec captures réelles",
      split: "web et mobile",
      languages: "langues gérées : FR, EN et AR (RTL)",
      tests: "tests unitaires sur Tibigoo",
    },
    servicesTitle: "Ce que je peux faire pour vous",
    servicesLead: "De l’application mobile au logiciel interne. Chaque service renvoie à un projet qui le montre.",
    seeIn: "Voir dans",
    services: [
      {
        title: "Applications mobiles",
        body: "Apps Flutter iOS et Android : connexion sécurisée, notifications, hors-ligne, et build prêt pour le store.",
        projects: ["justsell", "noor-al-iman", "kaizen"],
      },
      {
        title: "Sites et plateformes web",
        body: "Sites Next.js rapides, branchés à votre back-office, avec formulaires, analytics et SEO.",
        projects: ["tibigoo", "king-livraison"],
      },
      {
        title: "Logiciels métier",
        body: "Outils internes Laravel / Filament : RH, pointage, livraisons, rôles et permissions, tableaux de bord.",
        projects: ["nexteco", "kaizen"],
      },
      {
        title: "E-commerce",
        body: "Catalogue, fiche produit, panier, commandes, et l’app qui permet au marchand de tout gérer depuis son téléphone.",
        projects: ["mecad", "justsell"],
      },
    ],
    otherTitle: "Autre chose en tête ?",
    otherBody: "Dites-moi ce dont vous avez besoin. Si ce n’est pas mon domaine, je vous le dirai aussi.",
    otherCta: "Me contacter",
    qualityTitle: "Intégré dès le départ, pas ajouté à la fin",
    qualityLead: "Ce que vos utilisateurs ne voient pas, mais qui fait qu’une app tient en production.",
    quality: [
      {
        title: "Connexion sécurisée",
        body: "OAuth Google, 2FA, Cloudflare Turnstile, session en stockage sécurisé, rôles et permissions côté serveur.",
        projects: ["justsell", "nexteco"],
      },
      {
        title: "FR, EN et AR, avec le RTL",
        body: "Interfaces traduites et mise en page de droite à gauche pour l’arabe, sans casser l’affichage.",
        projects: ["noor-al-iman", "kaizen"],
      },
      {
        title: "Marche hors-ligne",
        body: "Données préchargées et stockage local : l’app reste utile sans réseau.",
        projects: ["noor-al-iman", "souri"],
      },
      {
        title: "Tests et recette",
        body: "Tests unitaires, code organisé par domaines et checklist de recette avant chaque mise en ligne.",
        projects: ["tibigoo"],
      },
      {
        title: "Démarrage rapide",
        body: "Cache d’authentification, redirection au splash et timeouts : l’app s’ouvre vite, même sur un réseau lent.",
        projects: ["justsell", "kaizen"],
      },
      {
        title: "Mesure et référencement",
        body: "Tracking GA4 / Firebase, UTM, sitemap et données structurées pour savoir ce qui marche.",
        projects: ["tibigoo"],
      },
    ],
  },
  en: {
    proofLabels: {
      projects: "projects shown, with real screenshots",
      split: "web and mobile",
      languages: "languages supported: FR, EN and AR (RTL)",
      tests: "unit tests on Tibigoo",
    },
    servicesTitle: "What I can build for you",
    servicesLead: "From a mobile app to internal software. Each service links to a project that shows it.",
    seeIn: "See it in",
    services: [
      {
        title: "Mobile apps",
        body: "Flutter apps for iOS and Android: secure sign-in, notifications, offline mode and a store-ready build.",
        projects: ["justsell", "noor-al-iman", "kaizen"],
      },
      {
        title: "Websites and web platforms",
        body: "Fast Next.js sites wired to your back office, with forms, analytics and SEO.",
        projects: ["tibigoo", "king-livraison"],
      },
      {
        title: "Business software",
        body: "Internal Laravel / Filament tools: HR, attendance, deliveries, roles and permissions, dashboards.",
        projects: ["nexteco", "kaizen"],
      },
      {
        title: "E-commerce",
        body: "Catalogue, product page, cart, orders, and the app that lets the merchant run it all from a phone.",
        projects: ["mecad", "justsell"],
      },
    ],
    otherTitle: "Something else in mind?",
    otherBody: "Tell me what you need. If it’s not something I do well, I’ll tell you that too.",
    otherCta: "Contact me",
    qualityTitle: "Built in from the start, not bolted on",
    qualityLead: "What your users don’t see, but what keeps an app standing in production.",
    quality: [
      {
        title: "Secure sign-in",
        body: "Google OAuth, 2FA, Cloudflare Turnstile, session in secure storage, server-side roles and permissions.",
        projects: ["justsell", "nexteco"],
      },
      {
        title: "FR, EN and AR, with RTL",
        body: "Translated interfaces and right-to-left layout for Arabic, without breaking the screens.",
        projects: ["noor-al-iman", "kaizen"],
      },
      {
        title: "Works offline",
        body: "Prefetched data and local storage: the app stays useful without a network.",
        projects: ["noor-al-iman", "souri"],
      },
      {
        title: "Tests and acceptance",
        body: "Unit tests, code split by domain and an acceptance checklist before every release.",
        projects: ["tibigoo"],
      },
      {
        title: "Fast startup",
        body: "Auth cache, splash redirect and timeouts: the app opens quickly, even on a slow network.",
        projects: ["justsell", "kaizen"],
      },
      {
        title: "Measurement and SEO",
        body: "GA4 / Firebase tracking, UTM, sitemap and structured data, so you know what works.",
        projects: ["tibigoo"],
      },
    ],
  },
};
