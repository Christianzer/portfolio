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
  { key:"data",    label:{fr:"Data / BI",en:"Data / BI"} },
];

const PROJECTS = [
  { id:"khadim", cat:"erp", flag:true, catLabel:{fr:"Gestion / ERP",en:"ERP"},
    name:"Khadim (Master)",
    type:{fr:"Web + Mobile Android",en:"Web + Android Mobile"},
    desc:{fr:"ERP de gestion financière : suivi clients, transactions et opérations d'agents de terrain. Une seule base Vue/Quasar déployée en web et mobile Android, adossée à une API Laravel sécurisée.",
          en:"Financial-management ERP: client tracking, transactions and field-agent operations. A single Vue/Quasar codebase shipped as web and Android app, backed by a secure Laravel API."},
    tags:["Laravel 8","Vue 3","Quasar","Capacitor","MySQL"] },

  { id:"fne", cat:"fintech", flag:true, catLabel:{fr:"Fintech",en:"Fintech"},
    name:"FNE — Facture Normalisée",
    type:{fr:"API + Web + Mobile + Desktop · Conformité DGI",en:"API + Web + Mobile + Desktop · DGI compliance"},
    desc:{fr:"Suite de Facturation Normalisée Électronique conforme DGI : microservice NestJS de signature & transmission, intégration Sage 100 via ODBC, génération PDF (QR code, logo FNE) via Puppeteer — B2B / B2C / B2G / B2F.",
          en:"DGI-compliant Electronic Standard Invoicing suite: NestJS signing & transmission microservice, Sage 100 integration over ODBC, PDF generation (QR code, FNE logo) via Puppeteer — B2B / B2C / B2G / B2F."},
    tags:["NestJS","TypeScript","Puppeteer","Sage ODBC","MySQL"] },

  { id:"nalacare", cat:"health", flag:true, catLabel:{fr:"Santé",en:"Health"},
    name:"NalaCare",
    type:{fr:"API + Back-office + Site vitrine",en:"API + Back-office + Landing"},
    desc:{fr:"Plateforme de gestion de rendez-vous médicaux axée sur l'accompagnement maternel & infantile. API NestJS (PostgreSQL/TypeORM), notifications temps réel Socket.IO, back-office Vue/Nuxt et vitrine multilingue.",
          en:"Medical-appointment platform focused on maternal & infant care. NestJS API (PostgreSQL/TypeORM), real-time Socket.IO notifications, Vue/Nuxt back-office and a multilingual landing site."},
    tags:["NestJS","PostgreSQL","Socket.IO","Nuxt","JWT"] },

  { id:"dubass", cat:"edu", flag:true, catLabel:{fr:"Éducation",en:"Education"},
    name:"DUBASS",
    type:{fr:"Plateforme web multi-établissements · dubass.edu.ci",en:"Multi-school web platform · dubass.edu.ci"},
    desc:{fr:"Gestion scolaire multi-établissements (enseignants, élèves, parents, admins) : structures de frais complexes (groupes de niveaux, remises fratrie, paiements par tranche), CI/CD GitHub Actions sur VPS Ubuntu, infra Nginx/PHP.",
          en:"Multi-school management (teachers, students, parents, admins): complex fee structures (level groups, sibling discounts, instalment payments), GitHub Actions CI/CD on Ubuntu VPS, Nginx/PHP infra."},
    tags:["Laravel","Alpine.js","Tailwind","CI/CD","Nginx"] },

  { id:"beautelic", cat:"ecom", flag:true, catLabel:{fr:"Mobile",en:"Mobile"},
    name:"Beautelic",
    type:{fr:"App mobile (client + prestataire) + API",en:"Mobile app (client + provider) + API"},
    desc:{fr:"Application de prestations de beauté à domicile : géolocalisation temps réel, réservation de services, abonnements, paiements Mobile Money (Wave, MTN, Orange), messagerie instantanée & notifications push.",
          en:"At-home beauty-services app: real-time geolocation, service booking, subscriptions, Mobile Money payments (Wave, MTN, Orange), instant messaging & push notifications."},
    tags:["Flutter","NestJS","Mobile Money","Socket.IO"] },

  { id:"mmm", cat:"fintech", flag:true, catLabel:{fr:"Fintech",en:"Fintech"},
    name:"Mobile Money Master",
    type:{fr:"Plateforme financière + App agents",en:"Financial platform + Agents app"},
    desc:{fr:"Plateforme d'opérateur Mobile Money : distribution de cash/UV, gestion des agents, commissions et rapports dynamiques, avec sécurisation des données et audit des opérations.",
          en:"Mobile Money operator platform: cash/e-value distribution, agent management, commissions and dynamic reports, with data security and operation auditing."},
    tags:["Architecture","API REST","Mobile","BI"] },

  { id:"qiryna", cat:"edu", catLabel:{fr:"Éducation",en:"Education"},
    name:"Qiryna",
    type:{fr:"Web (client + back-office) + API",en:"Web (client + back-office) + API"},
    desc:{fr:"Plateforme « Étudier à l'étranger » : profilage étudiant, catalogue d'écoles & MBA, coaching, prise de rendez-vous, paiement en ligne et suivi des commandes.",
          en:"\"Study abroad\" platform: student profiling, school & MBA catalogue, coaching, meeting booking, online payment and order tracking."},
    tags:["Laravel","Vue 3","Vite","Tailwind"] },

  { id:"kolivri", cat:"ecom", catLabel:{fr:"Logistique",en:"Logistics"},
    name:"Kolivri",
    type:{fr:"PWA multi-acteurs + API",en:"Multi-role PWA + API"},
    desc:{fr:"Plateforme de livraison du dernier kilomètre (client, coursier, marchand, admin) : cycle complet pickup → livraison, abonnements et système de crédits, en PWA installable.",
          en:"Last-mile delivery platform (client, courier, merchant, admin): full pickup → delivery cycle, subscriptions and a credit system, as an installable PWA."},
    tags:["NestJS","Nuxt","PWA","Tailwind"] },

  { id:"classeia", cat:"edu", catLabel:{fr:"Éducation",en:"Education"},
    name:"Classe IA",
    type:{fr:"Web · e-learning (API + frontend)",en:"Web · e-learning (API + frontend)"},
    desc:{fr:"Plateforme d'apprentissage en ligne : classes virtuelles, cours, sessions et plannings, avec espaces différenciés administrateur, enseignant et étudiant.",
          en:"Online learning platform: virtual classes, courses, sessions and schedules, with dedicated admin, teacher and student spaces."},
    tags:["NestJS","Nuxt","Vue 3"] },

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

  { id:"ciat", cat:"data", catLabel:{fr:"Data / BI",en:"Data / BI"},
    name:"ciatci.com + BI",
    type:{fr:"Plateforme institutionnelle + Business Intelligence",en:"Institutional platform + Business Intelligence"},
    desc:{fr:"Plateforme web institutionnelle ciatci.com et plateforme BI (cross-filtering, drag-and-drop, drill-down) sur la base bdgesope, déployées via CI/CD sur VPS Ubuntu.",
          en:"Institutional web platform ciatci.com plus a BI platform (cross-filtering, drag-and-drop, drill-down) on the bdgesope database, deployed via CI/CD on an Ubuntu VPS."},
    tags:["NestJS","Nuxt 3","MySQL","Power BI","CI/CD"] },

  { id:"multimarket", cat:"erp", catLabel:{fr:"Desktop",en:"Desktop"},
    name:"MultiMarket",
    type:{fr:"Application desktop Windows · POS",en:"Windows desktop app · POS"},
    desc:{fr:"Logiciel de gestion commerciale et de point de vente (POS) packagé en application Windows native, distribué en version installable (v5.5.3).",
          en:"Commercial-management and point-of-sale (POS) software packaged as a native Windows app, shipped as an installable build (v5.5.3)."},
    tags:["Electron","Vue 3","Vite"] },

  { id:"modelis", cat:"data", catLabel:{fr:"Démo technique",en:"Tech demo"},
    name:"Modelis Tech",
    type:{fr:"Web cartographique (test technique)",en:"Geospatial web app (tech test)"},
    desc:{fr:"Cartographie de points d'intérêt géolocalisés : carte interactive Leaflet, CRUD, filtrage par catégorie/recherche et requêtes spatiales (points dans une zone), interface responsive.",
          en:"Geolocated points-of-interest mapping: interactive Leaflet map, CRUD, category/search filtering and spatial queries (points within an area), responsive UI."},
    tags:["NestJS","Vue 3","Leaflet","Geospatial"] },
];
