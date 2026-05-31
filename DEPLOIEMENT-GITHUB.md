# 🚀 Guide complet — Déployer le portfolio sur GitHub Pages

Ce guide explique, **pas à pas**, comment publier ton portfolio en ligne gratuitement avec
**GitHub Pages**. Le site est 100 % statique : il n'y a **rien à compiler**, on envoie juste
les fichiers sur GitHub.

À la fin, ton site sera accessible publiquement à une adresse du type :
- `https://christianzer.github.io`  (recommandé), ou
- `https://christianzer.github.io/portfolio/`

---

## 🧭 Sommaire
1. [Pré-requis](#1-pré-requis)
2. [Comprendre le dossier à publier](#2-comprendre-le-dossier-à-publier)
3. [Choisir le nom du dépôt (important)](#3-choisir-le-nom-du-dépôt-important)
4. [Méthode A — Interface web (la plus simple)](#4-méthode-a--interface-web-la-plus-simple-glisser-déposer)
5. [Méthode B — Ligne de commande Git (recommandée)](#5-méthode-b--ligne-de-commande-git-recommandée)
6. [Méthode C — GitHub CLI (`gh`)](#6-méthode-c--github-cli-gh-rapide)
7. [Activer GitHub Pages](#7-activer-github-pages)
8. [Mettre à jour le site plus tard](#8-mettre-à-jour-le-site-plus-tard)
9. [Domaine personnalisé (optionnel)](#9-domaine-personnalisé-optionnel)
10. [Dépannage (erreurs fréquentes)](#10-dépannage-erreurs-fréquentes)
11. [Checklist finale](#11-checklist-finale)

---

## 1. Pré-requis

| Élément | Comment vérifier / obtenir |
|---|---|
| **Compte GitHub** | Tu en as déjà un : **@Christianzer** → https://github.com |
| **Git installé** | Déjà installé sur ton PC (Git 2.47). Vérifie : `git --version` |
| **Le dossier du site** | `C:\Users\christian.aka\Desktop\portfolio\web` |

> 💡 Si tu n'utilises que l'interface web (Méthode A), **Git n'est même pas obligatoire**.

---

## 2. Comprendre le dossier à publier

⚠️ **Très important** : on publie le **contenu du dossier `web/`**, PAS tout le dossier
`portfolio/` (qui contient aussi tes fichiers d'analyse `.txt`, le CV, etc.).

Le dépôt GitHub doit avoir **`index.html` à la racine** :

```
(racine du dépôt)
├── index.html          ✅ doit être ici, à la racine
├── README.md
├── .gitignore
└── assets/
    ├── styles.css
    ├── i18n.js
    ├── data.js
    ├── app.js
    └── img/
        ├── kolivri.jpeg
        ├── nalacare.jpeg
        ├── qiryna.jpeg
        └── multimarket.jpg
```

---

## 3. Choisir le nom du dépôt (important)

Tu as **deux options** :

### Option 1 — Site personnel (URL la plus propre) ✅ recommandé
- Nom du dépôt **exactement** : `Christianzer.github.io`
- URL finale : **`https://christianzer.github.io`**
- Pages s'active quasi automatiquement.

### Option 2 — Dépôt de projet classique
- Nom du dépôt : `portfolio` (ou ce que tu veux)
- URL finale : **`https://christianzer.github.io/portfolio/`**
- Il faudra activer Pages manuellement (étape 7).

> Dans la suite, remplace `Christianzer` par ton pseudo si besoin (il est déjà correct ici).

---

## 4. Méthode A — Interface web (la plus simple, glisser-déposer)

Idéale si tu ne veux pas toucher au terminal.

1. Va sur https://github.com/new
2. **Repository name** : `Christianzer.github.io` (Option 1) ou `portfolio` (Option 2).
3. Laisse en **Public**. **Ne coche PAS** « Add a README » (le tien existe déjà).
4. Clique **Create repository**.
5. Sur la page du dépôt vide, clique le lien **« uploading an existing file »**
   (ou onglet **Add file ▸ Upload files**).
6. Ouvre `C:\Users\christian.aka\Desktop\portfolio\web` dans l'explorateur Windows.
7. **Sélectionne tout** (`index.html`, `assets`, `README.md`, `.gitignore`) et
   **glisse-dépose** dans la zone d'upload du navigateur.
   - ✅ Le dossier `assets` (avec `img/`) est envoyé avec sa structure.
8. En bas, écris un message (« Initial commit ») puis clique **Commit changes**.
9. Passe à l'[étape 7 — Activer GitHub Pages](#7-activer-github-pages).

> ⚠️ Vérifie bien qu'`index.html` apparaît **à la racine** du dépôt, et non dans un
> sous-dossier `web/`. Si tu as glissé le dossier `web` entier par erreur, supprime et
> recommence en sélectionnant **le contenu** du dossier.

---

## 5. Méthode B — Ligne de commande Git (recommandée)

> Dans Claude Code, tu peux exécuter ces commandes en les tapant précédées de `!`
> (ex. `!git --version`). Sinon, ouvre **Git Bash** ou **PowerShell** dans le dossier `web`.

### 5.1 Configurer Git (la première fois seulement)
```bash
git config --global user.name "Christian De Pacques AKA"
git config --global user.email "christianaka65@gmail.com"
```

### 5.2 Créer le dépôt VIDE sur GitHub
Va sur https://github.com/new → crée `Christianzer.github.io` (ou `portfolio`),
**Public**, sans README. Copie l'URL HTTPS proposée, elle ressemble à :
`https://github.com/Christianzer/Christianzer.github.io.git`

### 5.3 Initialiser et pousser (dans le dossier `web`)
```bash
cd C:\Users\christian.aka\Desktop\portfolio\web

git init
git add .
git commit -m "Initial commit — portfolio"
git branch -M main

# Remplace l'URL si tu as choisi un autre nom de dépôt :
git remote add origin https://github.com/Christianzer/Christianzer.github.io.git

git push -u origin main
```

### 5.4 Authentification au moment du `push`
GitHub n'accepte **plus le mot de passe** classique. À la première poussée :
- **Git pour Windows** ouvre une **fenêtre de navigateur** (Git Credential Manager) →
  connecte-toi à GitHub et autorise. C'est automatique ensuite.
- Sinon, crée un **Personal Access Token** :
  GitHub ▸ *Settings ▸ Developer settings ▸ Personal access tokens ▸ Tokens (classic)*
  ▸ *Generate new token* ▸ coche **`repo`** ▸ génère, copie le token, et **colle-le à la
  place du mot de passe** quand Git le demande.

Puis passe à l'[étape 7](#7-activer-github-pages).

---

## 6. Méthode C — GitHub CLI (`gh`, rapide)

Si tu installes l'outil officiel **GitHub CLI** (https://cli.github.com) :

```bash
gh auth login          # connexion (suivre les instructions, via navigateur)

cd C:\Users\christian.aka\Desktop\portfolio\web
git init
git add .
git commit -m "Initial commit — portfolio"
git branch -M main

# Crée le dépôt ET pousse en une commande :
gh repo create Christianzer.github.io --public --source=. --remote=origin --push
```

---

## 7. Activer GitHub Pages

> Si tu as choisi **Option 1** (`Christianzer.github.io`), Pages s'active souvent tout
> seul — vérifie quand même les réglages ci-dessous.

1. Sur la page du dépôt, va dans **Settings** (⚙️).
2. Menu de gauche ▸ **Pages**.
3. Section **Build and deployment** :
   - **Source** : `Deploy from a branch`
   - **Branch** : `main`  ▸  dossier `/ (root)`  ▸  **Save**
4. Attends **1 à 3 minutes** (GitHub construit le site).
5. Recharge la page **Pages** : un encadré vert affiche l'URL :
   - Option 1 → `https://christianzer.github.io`
   - Option 2 → `https://christianzer.github.io/portfolio/`
6. Clique **Visit site** 🎉

---

## 8. Mettre à jour le site plus tard

À chaque modification (texte, image, projet…), republie :

**En ligne de commande :**
```bash
cd C:\Users\christian.aka\Desktop\portfolio\web
git add .
git commit -m "Mise à jour : <décris ta modif>"
git push
```
Le site se met à jour automatiquement en 1–2 minutes.

**Par l'interface web :** dépôt ▸ *Add file ▸ Upload files* (pour remplacer/ajouter),
ou édite un fichier directement avec le crayon ✏️.

> 📸 **Ajouter une capture d'un projet** : dépose l'image dans `assets/img/` en la nommant
> avec l'identifiant du projet (ex. `fne.png`, `beautelic.jpg`). La liste des identifiants
> est dans `assets/img/README.txt`. Formats acceptés : `.png`, `.jpg`, `.jpeg`, `.webp`.

---

## 9. Domaine personnalisé (optionnel)

Pour utiliser un domaine à toi (ex. `christian-aka.com`) :

1. Achète le domaine (Namecheap, OVH, Gandi…).
2. Dépôt ▸ **Settings ▸ Pages ▸ Custom domain** → saisis ton domaine ▸ **Save**.
   (Cela crée un fichier `CNAME` dans le dépôt.)
3. Chez ton registrar, configure le DNS :
   - **Domaine apex** (`exemple.com`) → 4 enregistrements **A** vers :
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - **Sous-domaine** (`www.exemple.com`) → un **CNAME** vers `christianzer.github.io`
4. Reviens dans **Pages** et coche **Enforce HTTPS** (après propagation DNS, ~1 h).

> ⚠️ Le domaine fictif `nexar-solutions.ci` utilisé dans le portfolio est **purement
> décoratif** : ne le configure pas, il n'existe pas.

---

## 10. Dépannage (erreurs fréquentes)

| Problème | Cause / Solution |
|---|---|
| **Page blanche ou 404** | `index.html` n'est pas à la **racine** du dépôt (il est dans un sous-dossier `web/`). Replace les fichiers à la racine. |
| **Le CSS/JS ne se charge pas** | Les chemins sont **relatifs** (`assets/...`) → c'est bon pour Pages. Vérifie juste que le dossier `assets/` a bien été envoyé. |
| **Une image projet ne s'affiche pas** | GitHub Pages tourne sous **Linux : sensible à la casse**. Le nom du fichier doit correspondre **exactement** à l'identifiant (minuscules) : `kolivri.jpeg`, pas `Kolivri.JPEG`. |
| **Mes modifs n'apparaissent pas** | Cache du navigateur → recharge avec `Ctrl + Maj + R`. Ou attends 2 min (déploiement). |
| **`git push` refuse le mot de passe** | Normal : utilise le **navigateur (GCM)** ou un **Personal Access Token** (voir 5.4). |
| **`fatal: remote origin already exists`** | `git remote set-url origin <URL>` pour corriger l'URL. |
| **Polices Google non chargées hors-ligne** | Normal : le site a besoin d'Internet pour les polices/Google Fonts. En ligne sur Pages, aucun souci. |
| **L'onglet Pages dit « not built »** | Vérifie Branch = `main` + dossier `/(root)`, puis attends quelques minutes. |

---

## 11. Checklist finale

- [ ] `index.html` est à la **racine** du dépôt
- [ ] Le dossier `assets/` (avec `img/`) est présent
- [ ] Dépôt en **Public**
- [ ] **Settings ▸ Pages** : Source = `main` / `/(root)`
- [ ] L'URL verte s'affiche et le site s'ouvre
- [ ] Test du **switch FR/EN**, du **mode dark/light** et du **splash**
- [ ] Les **images projets** s'affichent (vérifier la casse des noms)
- [ ] Tester sur **mobile** (menu burger)

---

🎉 **Bravo, ton portfolio est en ligne !**
Pense à ajouter le lien dans ton CV, ton GitHub (bio) et ton LinkedIn.

*Pour republier après une modif : `git add . && git commit -m "maj" && git push`*
