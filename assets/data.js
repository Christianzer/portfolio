/* ============ CONTENT DATA (FR / EN) ============ */

const SKILLS = [
  { ico:"</>", title:{fr:"Langages",en:"Languages"},
    items:["TypeScript","JavaScript","PHP","Java","Python","SQL","VBA"] },
  { ico:"⚡", title:{fr:"Frameworks",en:"Frameworks"},
    items:["NestJS","Vue 3","Nuxt 3","Laravel","Flutter","Java Spring","AngularJS","AdonisJS","Quasar"] },
  { ico:"◈", title:{fr:"Architecture",en:"Architecture"},
    items:["Microservices","API RESTful","Architecture hexagonale","MVC","Repository","DDD"] },
  { ico:"🗄", title:{fr:"Bases de données",en:"Databases"},
    items:["PostgreSQL","MySQL / MariaDB","Oracle","SQL Server","SQLite","TypeORM"] },
  { ico:"☁", title:{fr:"DevOps & Cloud",en:"DevOps & Cloud"},
    items:["GitHub Actions (CI/CD)","VPS Ubuntu","Nginx","Linux","O2Switch","Capacitor / Electron"] },
  { ico:"🛠", title:{fr:"Outils & Modélisation",en:"Tools & Modeling"},
    items:["Git","Postman / Insomnia","Puppeteer","Webpack","UML","MERISE","ADR","Power BI"] },
];

const EXPERIENCE = [
  {
    when:{fr:"Depuis janv. 2024 · 2 ans+",en:"Since Jan 2024 · 2+ yrs"},
    role:{fr:"Responsable Informatique & Architecte Logiciel",en:"IT Manager & Software Architect"},
    org:{fr:"CIAT — Cie Internationale d'Aménagement de Terrain",en:"CIAT — Intl. Land Development Company"}, place:"Abidjan, CI",
    points:{
      fr:["Architecture technique des applications internes (microservices NestJS, Nuxt 3, MySQL) — performance, sécurité, évolutivité.",
          "Conception d'une plateforme BI (cross-filtering, drag-and-drop, drill-down) sur la base bdgesope.",
          "Spécifications d'architecture (diagrammes de classes, séquences, déploiement — UML/MERISE).",
          "Pipelines CI/CD via GitHub Actions, déploiement automatisé sur VPS Ubuntu.",
          "Encadrement de l'équipe, revue de code, standards (clean code, design patterns MVC/Repository)."],
      en:["Technical architecture of internal apps (NestJS microservices, Nuxt 3, MySQL) — performance, security, scalability.",
          "Designed a BI platform (cross-filtering, drag-and-drop, drill-down) on the bdgesope database.",
          "Architecture specs (class, sequence & deployment diagrams — UML/MERISE).",
          "CI/CD pipelines via GitHub Actions, automated deployment to Ubuntu VPS.",
          "Team leadership, code review, standards (clean code, MVC/Repository patterns)."]
    }
  },
  {
    when:{fr:"Juil. 2022 — Janv. 2024 · 1 an",en:"Jul 2022 — Jan 2024 · 1 yr"},
    role:{fr:"Chef de projet IT & Développeur Full Stack",en:"IT Project Manager & Full Stack Developer"},
    org:{fr:"CIAT — Cie Internationale d'Aménagement de Terrain",en:"CIAT — Intl. Land Development Company"}, place:"Cocody, CI",
    points:{
      fr:["Pilotage des projets IT (délais, budget, qualité).",
          "Conception & développement de la plateforme institutionnelle ciatci.com.",
          "Patterns d'intégration entre modules (API RESTful, architecture orientée services).",
          "Coordination des développements internes et prestataires externes."],
      en:["IT project management (deadlines, budget, quality).",
          "Designed & built the institutional platform ciatci.com.",
          "Integration patterns across modules (RESTful API, service-oriented architecture).",
          "Coordinated internal development and external vendors."]
    }
  },
  {
    when:{fr:"Févr. 2021 — Déc. 2021 · 10 mois",en:"Feb 2021 — Dec 2021 · 10 mos"},
    role:{fr:"Développeur d'application Full Stack",en:"Full Stack Application Developer"},
    org:{fr:"Université Félix Houphouët-Boigny",en:"Félix Houphouët-Boigny University"}, place:"Abidjan, CI",
    points:{
      fr:["Application de gestion du service scolarité.",
          "Système de gestion des inscriptions et des frais universitaires.",
          "Collaboration avec les équipes pédagogiques pour optimiser les processus.",
          "Documentation technique complète."],
      en:["Registrar / academic services management app.",
          "Enrolment and tuition-fee management system.",
          "Collaboration with academic teams to streamline processes.",
          "Complete technical documentation."]
    }
  },
  {
    when:{fr:"Depuis avr. 2020 · 6 ans",en:"Since Apr 2020 · 6 yrs"},
    role:{fr:"Lead Developer Full Stack",en:"Lead Full Stack Developer"},
    org:{fr:"Nexar Solutions — Solutions logicielles",en:"Nexar Solutions — Software Solutions"},
    place:"Cocody Riviera, Abidjan — CI", brand:true, web:"nexar-solutions.ci",
    points:{
      fr:["Architectures techniques multi-secteurs : éducation (DUBASS), fintech (Mobile Money Master), beauté (Beautelic), conformité fiscale (FNE/DGI).",
          "APIs RESTful (Symfony / NestJS) + intégration frontend Vue.js / TypeScript.",
          "Apps mobiles Flutter : géolocalisation, Mobile Money (Wave, MTN, Orange), push & messagerie temps réel.",
          "Modélisation BDD (MySQL, PostgreSQL), rédaction des CDC et documentation."],
      en:["Multi-sector technical architectures: education (DUBASS), fintech (Mobile Money Master), beauty (Beautelic), tax compliance (FNE/DGI).",
          "RESTful APIs (Symfony / NestJS) + Vue.js / TypeScript frontend integration.",
          "Flutter mobile apps: geolocation, Mobile Money (Wave, MTN, Orange), push & real-time chat.",
          "Database modeling (MySQL, PostgreSQL), functional specs & documentation."]
    }
  }
];

const EDUCATION = [
  { when:{fr:"Depuis 2021",en:"Since 2021"},
    title:{fr:"Ingénieur de conception en informatique (BAC+5)",en:"Computer Engineering — Master's (MSc)"},
    org:"MIAGE — Univ. Félix Houphouët-Boigny, Abidjan" },
  { when:{fr:"2016 — 2018",en:"2016 — 2018"},
    title:{fr:"Licence en informatique (BAC+3)",en:"BSc in Computer Science"},
    org:"MIAGE — Univ. Félix Houphouët-Boigny, Abidjan" },
];

const CATEGORIES = [
  { key:"all",     label:{fr:"Tous",en:"All"} },
  { key:"erp",     label:{fr:"Gestion / ERP",en:"Management / ERP"} },
  { key:"fintech", label:{fr:"Fintech / Facturation",en:"Fintech / Billing"} },
  { key:"edu",     label:{fr:"Éducation",en:"Education"} },
  { key:"health",  label:{fr:"Santé",en:"Health"} },
  { key:"ecom",    label:{fr:"E-commerce / Mobile",en:"E-commerce / Mobile"} },
];

const PROJECTS = [
  { id:"smaster", cat:"fintech", flag:true, catLabel:{fr:"Fintech / ERP",en:"Fintech / ERP"},
    name:"Succès Master",
    type:{fr:"ERP de collecte financière · API Laravel + App agents",en:"Field-collection ERP · Laravel API + agents app"},
    desc:{fr:"ERP de collecte financière sur le terrain : suivi des clients, transactions (encaissements / décaissements) et bordereaux, avec application mobile pour agents (Quasar/Capacitor) — géolocalisation temps réel, notifications push Firebase, messagerie, challenges & gamification (classements, bonus par créneaux) et exports PDF/Excel.",
          en:"Field cash-collection ERP: client tracking, transactions (cash-in / cash-out) and deposit slips, with a Quasar/Capacitor mobile app for agents — real-time geolocation, Firebase push notifications, messaging, challenges & gamification (rankings, time-slot bonuses) and PDF/Excel exports."},
    link:"https://succesemaster.com",
    tags:["Laravel 8","Quasar","Vue 3","Firebase","Sanctum"] },

  { id:"moyo", cat:"fintech", catLabel:{fr:"Fintech / Éducation",en:"Fintech / Education"},
    name:"MOYO",
    type:{fr:"Super-app familiale · App mobile + API + back-office",en:"Family super-app · Mobile app + API + back-office"},
    desc:{fr:"Super-application familiale autour de la scolarité : gestion des écoles, classes et enfants, paiement des frais scolaires, porte-monnaie & cagnotte (coffre, carte, solde), marketplace de fournitures (marchands, librairies), abonnements et reversements. App mobile Android adossée à une API Laravel (Stripe, Firebase) et un back-office Vue.",
          en:"Family super-app built around schooling: management of schools, classes and children, school-fee payments, digital wallet & savings pot (vault, card, balance), supplies marketplace (merchants, bookshops), subscriptions and payouts. Android mobile app backed by a Laravel API (Stripe, Firebase) and a Vue back-office."},
    link:"https://play.google.com/store/apps/details?id=com.guystephane.Moyo&hl=fr",
    tags:["Laravel","Vue 3","Stripe","Firebase","Sanctum"] },

  { id:"fne", cat:"fintech", flag:true, catLabel:{fr:"Fintech",en:"Fintech"},
    name:"FNE — Facture Normalisée",
    type:{fr:"API + Web + Mobile + Desktop · Conformité DGI",en:"API + Web + Mobile + Desktop · DGI compliance"},
    desc:{fr:"Suite de Facturation Normalisée Électronique conforme DGI : microservice NestJS de signature & transmission, intégration Sage 100 via ODBC, génération PDF (QR code, logo FNE) via Puppeteer — B2B / B2C / B2G / B2F. Décliné en app mobile « Anouanzé » (certification + stock).",
          en:"DGI-compliant Electronic Standard Invoicing suite: NestJS signing & transmission microservice, Sage 100 integration over ODBC, PDF generation (QR code, FNE logo) via Puppeteer — B2B / B2C / B2G / B2F. Shipped as the \"Anouanzé\" mobile app (certification + stock)."},
    link:"https://anouanze.succesemaster.com/",
    tags:["NestJS","TypeScript","Puppeteer","Sage ODBC","MySQL"] },

  { id:"nalacare", cat:"health", flag:true, catLabel:{fr:"Santé",en:"Health"},
    name:"NalaCare",
    type:{fr:"API + Back-office + Site vitrine",en:"API + Back-office + Landing"},
    desc:{fr:"Plateforme de gestion de rendez-vous médicaux axée sur l'accompagnement maternel & infantile. API NestJS (PostgreSQL/TypeORM), notifications temps réel Socket.IO, back-office Vue/Nuxt et vitrine multilingue.",
          en:"Medical-appointment platform focused on maternal & infant care. NestJS API (PostgreSQL/TypeORM), real-time Socket.IO notifications, Vue/Nuxt back-office and a multilingual landing site."},
    link:"https://nalacare.be",
    tags:["NestJS","PostgreSQL","Socket.IO","Nuxt","JWT"] },

  { id:"dubass", cat:"edu", flag:true, catLabel:{fr:"Éducation",en:"Education"},
    name:"DUBASS",
    type:{fr:"Plateforme web multi-établissements · dubass.edu.ci",en:"Multi-school web platform · dubass.edu.ci"},
    desc:{fr:"Gestion scolaire multi-établissements (enseignants, élèves, parents, admins) : structures de frais complexes (groupes de niveaux, remises fratrie, paiements par tranche), CI/CD GitHub Actions sur VPS Ubuntu, infra Nginx/PHP.",
          en:"Multi-school management (teachers, students, parents, admins): complex fee structures (level groups, sibling discounts, instalment payments), GitHub Actions CI/CD on Ubuntu VPS, Nginx/PHP infra."},
    link:"https://dubass.edu.ci/",
    tags:["Laravel","Alpine.js","Tailwind","CI/CD","Nginx"] },

  { id:"beautelic", cat:"ecom", flag:true, catLabel:{fr:"Mobile",en:"Mobile"},
    name:"Beautelic",
    type:{fr:"App mobile (client + prestataire) + API",en:"Mobile app (client + provider) + API"},
    desc:{fr:"Application de prestations de beauté à domicile : géolocalisation temps réel, réservation de services, abonnements, paiements Mobile Money (Wave, MTN, Orange), messagerie instantanée & notifications push.",
          en:"At-home beauty-services app: real-time geolocation, service booking, subscriptions, Mobile Money payments (Wave, MTN, Orange), instant messaging & push notifications."},
    link:"https://play.google.com/store/apps/details?id=com.beautelic.app&hl=fr",
    tags:["Flutter","NestJS","Mobile Money","Socket.IO"] },

  { id:"kolivri", cat:"ecom", catLabel:{fr:"Logistique",en:"Logistics"},
    name:"Kolivri",
    type:{fr:"PWA multi-acteurs + API",en:"Multi-role PWA + API"},
    desc:{fr:"Plateforme de livraison du dernier kilomètre (client, coursier, marchand, admin) : cycle complet pickup → livraison, abonnements et système de crédits, en PWA installable.",
          en:"Last-mile delivery platform (client, courier, merchant, admin): full pickup → delivery cycle, subscriptions and a credit system, as an installable PWA."},
    link:"https://kolivri.store/",
    tags:["NestJS","Nuxt","PWA","Tailwind"] },

  { id:"bulan", cat:"ecom", catLabel:{fr:"E-commerce",en:"E-commerce"},
    name:"BULAN Cosmetics",
    type:{fr:"E-commerce K-beauty · Boutique + back-office",en:"K-beauty e-commerce · Storefront + back-office"},
    desc:{fr:"Boutique en ligne de cosmétiques coréens (K-beauty) : catalogue produits, panier et commandes, parcours d'achat soigné et back-office de gestion (catégories, produits, commandes), adossé à une API.",
          en:"Korean-beauty (K-beauty) online cosmetics store: product catalogue, cart and orders, a polished shopping journey and a management back-office (categories, products, orders), backed by an API."},
    link:"https://www.bulancosmetics.com/",
    tags:["Laravel","Vue 3","Tailwind","E-commerce"] },

  { id:"syge", cat:"edu", catLabel:{fr:"Éducation",en:"Education"},
    name:"SYGE-UFHB",
    type:{fr:"Plateforme universitaire · Gestion des enseignements",en:"University platform · Teaching management"},
    desc:{fr:"Système de Gestion des Enseignements de l'Université Félix Houphouët-Boigny : gestion du service scolarité, inscriptions et frais universitaires, avec espaces différenciés étudiants, enseignants et administration.",
          en:"Teaching Management System for Félix Houphouët-Boigny University: registrar services, enrolment and tuition-fee management, with dedicated student, teacher and admin spaces."},
    link:"https://syge-ufhb.net",
    tags:["Laravel","Vue 3","MySQL"] },

  { id:"eimmo", cat:"erp", catLabel:{fr:"Immobilier",en:"Real-estate"},
    name:"e-immo",
    type:{fr:"Web · Gestion locative",en:"Web · Rental management"},
    desc:{fr:"Gestion locative multi-propriétaires : suivi des loyers, alertes impayés, recouvrement, tableaux de bord financiers et analyse de rentabilité.",
          en:"Multi-landlord rental management: rent tracking, late-payment alerts, debt recovery, financial dashboards and profitability analysis."},
    tags:["Laravel","MySQL","Reporting"] },

  { id:"gesope", cat:"erp", catLabel:{fr:"Immobilier",en:"Real-estate"},
    name:"GESOPE",
    type:{fr:"Web · Programmes immobiliers / lotissements",en:"Web · Real-estate programs / land plots"},
    desc:{fr:"Gestion commerciale de programmes immobiliers : prospection → réservation → contrat → livraison, gestion des désistements, localisation des lots et courbes de vente.",
          en:"Commercial management of real-estate programs: prospecting → reservation → contract → handover, cancellations, plot mapping and sales curves."},
    tags:["Laravel","MySQL","BI"] },

  { id:"ciatsite", cat:"erp", catLabel:{fr:"Immobilier",en:"Real-estate"},
    name:"CIAT — ciatci.com",
    type:{fr:"Site institutionnel · Aménagement de terrains",en:"Corporate website · Land development"},
    desc:{fr:"Site institutionnel de la CIAT (Compagnie Internationale d'Aménagement de Terrains), acteur du Top 3 de l'immobilier en Côte d'Ivoire : présentation des programmes immobiliers et lotissements (résidentiel, ventes de terrains, achats échelonnés/groupés), services CIAT PLUS, dépôt de propositions foncières et pôle énergies renouvelables (SODEN).",
          en:"Corporate website of CIAT (Compagnie Internationale d'Aménagement de Terrains), a Top-3 real-estate player in Côte d'Ivoire: showcase of property programs and land subdivisions (residential, land sales, instalment/group purchases), CIAT PLUS services, land-proposal submissions and a renewable-energy division (SODEN)."},
    link:"https://ciatci.com",
    tags:["Nuxt 3","NestJS","Tailwind","SEO","CI/CD"] },

  { id:"multimarket", cat:"erp", catLabel:{fr:"Desktop",en:"Desktop"},
    name:"MultiMarket",
    type:{fr:"Application desktop Windows · POS",en:"Windows desktop app · POS"},
    desc:{fr:"Logiciel de gestion commerciale et de point de vente (POS) packagé en application Windows native, distribué en version installable (v5.5.3).",
          en:"Commercial-management and point-of-sale (POS) software packaged as a native Windows app, shipped as an installable build (v5.5.3)."},
    link:"https://multimarket.ciatci.com",
    tags:["Electron","Vue 3","Vite"] },

];
