# 🏗️ Architecture Multi-Pages du Site AII

## 📋 Vue d'ensemble

Le site de l'Académie Internationale Interuniversitaire (AII) a été transformé d'une landing page unique en une **application web multi-pages complète** utilisant React Router pour la navigation.

---

## 🗺️ Structure des Pages

### 1. **Page d'Accueil** (`/`)
**Fichier:** `src/pages/Home.tsx`

**Contenu:**
- Hero Section avec message principal
- Sections de contenu sur le Programme VEA et la Gouvernance
- HighlightSection (4 domaines d'action)
- Actualités (4 articles mis en avant)
- NewsGrid (actualités internationales)
- VideoSection (impact de l'AII)
- Statistiques clés
- Mission de l'AII
- Call to Action
- Publications et recherche
- Événements à venir

---

### 2. **Programme VEA** (`/programme-vea`)
**Fichier:** `src/pages/ProgrammeVEA.tsx`

**Sections:**
- **Hero Section**: Présentation du programme
- **Introduction**: Vision et objectifs du programme
- **Objectifs du Programme**: 3 piliers principaux
  - Renforcement des capacités
  - Mobilité académique
  - Reconnaissance internationale
- **Axes Stratégiques**: 4 axes détaillés
  1. Formation Continue et Certifications
  2. Bourses de Mobilité Académique
  3. Projets de Recherche Collaborative
  4. Valorisation et Communication
- **Chiffres Clés**: Statistiques du programme VEA
- **Call to Action**

---

### 3. **Gouvernance** (`/gouvernance`)
**Fichier:** `src/pages/Gouvernance.tsx`

**Sections:**
- **Hero Section**: Gouvernance démocratique
- **Principes de Gouvernance**: Introduction
- **Organes de Décision**:
  - Assemblée Générale (instance suprême)
  - Conseil d'Administration (organe exécutif)
  - Bureau Exécutif (direction opérationnelle)
- **Comités Techniques**:
  - Comité Académique
  - Comité Scientifique
  - Comité des Partenariats
  - Comité de Contrôle Financier
- **Engagement pour la Transparence**:
  - Rapports d'activité
  - Comptes certifiés
  - Documents officiels
- **Call to Action**

---

### 4. **Formations** (`/formations`)
**Fichier:** `src/pages/Formations.tsx`

**Sections:**
- **Hero Section**: Formations continues
- **Introduction**: Offre de formation
- **Parcours Certifiants**: 3 formations détaillées
  1. **Pédagogie Numérique Avancée** (6 mois)
     - 120h de formation
     - Projet pratique
     - Format hybride
  2. **Méthodologie de la Recherche Collaborative** (8 mois)
     - 150h de formation
     - Projet interuniversitaire
     - Ateliers d'écriture scientifique
  3. **Management et Leadership Académique** (10 mois)
     - 180h avec coaching
     - Études de cas
     - Réseau d'anciens
- **Format Hybride**: Avantages online + présentiel
- **Témoignages**: 3 alumni
- **Call to Action**

---

### 5. **Recherche** (`/recherche`)
**Fichier:** `src/pages/Recherche.tsx`

**Sections:**
- **Hero Section**: Recherche collaborative
- **Introduction**: Approche collaborative
- **Axes de Recherche Prioritaires**: 6 domaines
  - Développement Durable
  - Santé Publique
  - Éducation & Formation
  - Technologies & Innovation
  - Gouvernance & Société
  - Économie & Développement
- **Programmes de Financement**: 4 types
  1. Projets de Recherche Collaborative (10-50k€)
  2. Bourses de Recherche Doctorale (5-15k€)
  3. Mobilité Scientifique (2-8k€)
  4. Valorisation et Publications (1-10k€)
- **Processus de Soumission**: 5 étapes détaillées
- **Publications Scientifiques**: Chiffres clés
- **Call to Action**

---

### 6. **À Propos** (`/a-propos`)
**Fichier:** `src/pages/APropos.tsx`

**Sections:**
- **Hero Section**: Présentation de l'AII
- **Notre Histoire**: Création et développement
- **Mission et Vision**: 2 encadrés distincts
- **Nos Valeurs**: 4 valeurs fondamentales
  - Excellence
  - Collaboration
  - Innovation
  - Équité
- **Statistiques**: Chiffres clés de l'AII
- **Réseau de Partenaires**: Répartition géographique
  - Afrique de l'Ouest (18 universités)
  - Afrique Centrale (15 universités)
  - Afrique de l'Est (12 universités)
  - Diaspora (8 institutions)
  - Partenaires institutionnels (15 partenaires)
- **Notre Équipe**: Appel aux talents
- **Call to Action**

---

## 🔧 Technologies Utilisées

### Core
- **React 19** - Framework JavaScript
- **TypeScript** - Typage statique
- **Vite** - Build tool
- **React Router DOM** - Navigation multi-pages

### Styling
- **TailwindCSS** - Framework CSS utility-first
- **CSS Gradients** - Pour les hero sections

### Structure
```
src/
├── pages/              # Pages de l'application
│   ├── Home.tsx
│   ├── ProgrammeVEA.tsx
│   ├── Gouvernance.tsx
│   ├── Formations.tsx
│   ├── Recherche.tsx
│   └── APropos.tsx
├── components/         # Composants réutilisables
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ContentSection.tsx
│   ├── NewsGrid.tsx
│   ├── StatsCards.tsx
│   ├── CallToAction.tsx
│   └── ...
├── data/
│   └── constants.ts    # Configuration et données centralisées
├── App.tsx            # Configuration du routing
└── main.tsx           # Point d'entrée
```

---

## 🚀 Navigation

### Menu Principal (Header)
```typescript
const NAVIGATION_LINKS = [
  { label: 'Programme VEA', href: '/programme-vea' },
  { label: 'Gouvernance', href: '/gouvernance' },
  { label: 'Formations', href: '/formations' },
  { label: 'Recherche', href: '/recherche' },
  { label: 'À propos', href: '/a-propos' },
];
```

### Routes Configurées
```tsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/programme-vea" element={<ProgrammeVEA />} />
  <Route path="/gouvernance" element={<Gouvernance />} />
  <Route path="/formations" element={<Formations />} />
  <Route path="/recherche" element={<Recherche />} />
  <Route path="/a-propos" element={<APropos />} />
</Routes>
```

---

## 🎨 Palette de Couleurs par Page

| Page | Couleur Principale | Usage |
|------|-------------------|-------|
| **Home** | Bleu (`#0095D9`) | Hero, CTA |
| **Programme VEA** | Bleu (`#0064B0` → `#0095D9`) | Hero gradient |
| **Gouvernance** | Violet (`purple-900` → `purple-700`) | Hero gradient |
| **Formations** | Vert (`green-700` → `green-500`) | Hero gradient |
| **Recherche** | Indigo (`indigo-900` → `indigo-700`) | Hero gradient |
| **À Propos** | Bleu (`#0064B0` → `#0095D9`) | Hero gradient |

---

## 📱 Responsive Design

Toutes les pages sont entièrement responsives avec:
- **Mobile First**: Design optimisé pour mobile
- **Breakpoints TailwindCSS**:
  - `sm:` 640px
  - `md:` 768px
  - `lg:` 1024px
  - `xl:` 1280px
- **Menu Mobile**: Navigation adaptée avec hamburger menu
- **Grids Adaptatives**: 1 col mobile → 2-3 cols desktop

---

## 🔗 Liens Internes

### Header
- Logo → `/` (Home)
- Navigation principale → Pages dédiées
- Menu mobile → Navigation complète

### Footer
Liens vers sections et pages internes (ancres et routes)

### Call to Action
Présent sur toutes les pages sauf Home (déjà inclus)

---

## 📊 Contenu Dynamique

### Depuis constants.ts
- `SITE_CONFIG` - Configuration du site
- `NAVIGATION_LINKS` - Menu de navigation
- `FOOTER_LINKS` - Liens du footer
- `SOCIAL_LINKS` - Réseaux sociaux
- `STATS` - Statistiques AII
- `HERO_CONTENT` - Contenu hero page d'accueil
- `CONTENT_SECTIONS` - Sections de contenu
- `NEWS_ITEMS` - Actualités
- `ACTIVITIES_ITEMS` - Événements

---

## ✅ Fonctionnalités Implémentées

- ✅ Navigation multi-pages avec React Router
- ✅ 6 pages complètes avec contenu riche
- ✅ Header sticky avec comportement au scroll
- ✅ Menu mobile responsive
- ✅ Liens de navigation fonctionnels
- ✅ Composants réutilisables
- ✅ Données centralisées dans constants.ts
- ✅ Design cohérent avec palette de couleurs
- ✅ Call to Action sur chaque page
- ✅ Images optimisées (Unsplash)
- ✅ Animations et transitions CSS
- ✅ Typographie hiérarchisée

---

## 🚀 Lancement du Site

```bash
# Installation des dépendances
npm install

# Lancement en développement
npm run dev

# Build pour production
npm run build

# Prévisualisation du build
npm run preview
```

**URL locale:** http://localhost:5174

---

## 📝 Prochaines Étapes Possibles

1. **SEO**: Ajouter meta tags, sitemap, robots.txt
2. **Analytics**: Intégrer Google Analytics ou Plausible
3. **Formulaires**: Ajouter formulaires de contact/inscription
4. **Blog**: Section actualités dynamique
5. **Espace Membre**: Zone réservée aux membres
6. **Multilingue**: i18n pour FR/EN
7. **API**: Backend pour contenu dynamique
8. **CMS**: Intégration Strapi ou Sanity
9. **Tests**: Tests unitaires et e2e
10. **Accessibilité**: Audit WCAG et améliorations

---

## 👥 Maintenance

### Ajout d'une Nouvelle Page

1. Créer le fichier dans `src/pages/NomPage.tsx`
2. Ajouter la route dans `App.tsx`
3. Ajouter le lien dans `NAVIGATION_LINKS` (constants.ts)
4. Mettre à jour ce document

### Modification du Contenu

- Éditer `src/data/constants.ts` pour le contenu global
- Éditer directement les fichiers pages pour du contenu spécifique

---

**Date de création:** 7 Novembre 2025  
**Architecte:** Transformation UNESCO → AII Multi-Pages  
**Version:** 2.0 - Application Web Complète
