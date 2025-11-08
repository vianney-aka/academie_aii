# 🌍 UNESCO - Site Web

Site web moderne et responsive reproduisant fidèlement le design UNESCO basé sur la maquette fournie.

## ✨ Fonctionnalités

- **Design Fidèle** - Reproduction exacte de la maquette UNESCO
- **Responsive** - Optimisé pour tous les appareils (mobile, tablette, desktop)
- **Modern Stack** - React 19, TypeScript, TailwindCSS, Vite
- **Performance** - Chargement rapide et optimisé
- **Composants Réutilisables** - Architecture modulaire et maintenable

## 🚀 Démarrage Rapide

### Prérequis

- Node.js 18+ 
- npm ou yarn

### Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Le site sera accessible sur http://localhost:5173
```

### Build de Production

```bash
# Créer le build de production
npm run build

# Prévisualiser le build
npm run preview
```

## 📁 Structure du Projet

```
unesco-site/
├── src/
│   ├── components/          # Composants React
│   │   ├── Header.tsx       # En-tête avec navigation
│   │   ├── Hero.tsx         # Section héro
│   │   ├── ContentSection.tsx # Sections de contenu
│   │   ├── NewsGrid.tsx     # Grille d'actualités
│   │   ├── StatsCards.tsx   # Cartes statistiques
│   │   └── Footer.tsx       # Pied de page
│   ├── data/
│   │   └── constants.ts     # Données centralisées
│   ├── App.tsx              # Composant principal
│   ├── main.tsx             # Point d'entrée
│   └── index.css            # Styles Tailwind
├── public/                  # Assets statiques
└── PROJET.md               # Documentation détaillée
```

## 🎨 Technologies

- **React 19** - Framework UI
- **TypeScript** - Typage statique
- **TailwindCSS 3** - Framework CSS utility-first
- **Vite** - Build tool ultra-rapide
- **PostCSS** - Traitement CSS

## 📱 Sections Implémentées

1. ✅ **Header** - Navigation responsive avec menu mobile
2. ✅ **Hero Section** - Image de fond avec titre et CTA
3. ✅ **Sections de Contenu** - Layout alterné avec images
4. ✅ **Grille d'Actualités** - Cards avec hover effects
5. ✅ **Cartes Statistiques** - Compteurs animés avec backgrounds
6. ✅ **Footer** - Liens et réseaux sociaux

## 🎯 Commandes Disponibles

| Commande | Description |
|----------|-------------|
| `npm install` | Installer les dépendances |
| `npm run dev` | Lancer le serveur de développement |
| `npm run build` | Créer le build de production |
| `npm run preview` | Prévisualiser le build |
| `npm run lint` | Vérifier le code |

## 🔧 Configuration

### TailwindCSS

La configuration se trouve dans `tailwind.config.js` :
- Couleurs personnalisées UNESCO
- Extensions de thème
- Purge automatique pour optimiser le CSS

### Vite

Configuration dans `vite.config.ts` pour un build optimisé.

## 📝 Personnalisation

Pour personnaliser le contenu :

1. **Données** : Modifier `src/data/constants.ts`
2. **Styles** : Ajuster les classes Tailwind ou `index.css`
3. **Composants** : Éditer les fichiers dans `src/components/`

## 🌐 Déploiement

Le site peut être déployé sur :
- **Netlify** - `npm run build` puis déployer le dossier `dist/`
- **Vercel** - Connexion directe au repo
- **GitHub Pages** - Avec GitHub Actions

## 📄 Documentation Complète

Voir `PROJET.md` pour la documentation détaillée du projet.

## 🤝 Contribution

Ce projet est une reproduction de démonstration. Pour toute modification :

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📧 Contact

Pour toute question concernant ce projet, veuillez consulter la documentation UNESCO officielle.

---

**Développé avec ❤️ en utilisant React et TailwindCSS**
