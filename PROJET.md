# Site UNESCO - Documentation du Projet

## 🎯 Vue d'ensemble

Ce projet est une reproduction complète et professionnelle du site web UNESCO officiel (unesco.org/fr). Il a été développé avec les technologies modernes pour garantir une expérience utilisateur optimale, un design responsive et des performances exceptionnelles.

## 🛠️ Technologies Utilisées

- **React 19** - Framework JavaScript pour la construction de l'interface utilisateur
- **TypeScript** - Pour un code type-safe et maintenable
- **Vite** - Build tool moderne et rapide
- **TailwindCSS** - Framework CSS utility-first pour un design moderne
- **Unsplash** - API d'images pour le contenu visuel

## 📂 Structure du Projet

```
unesco-site/
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Navigation et logo
│   │   ├── Hero.tsx            # Section héro avec image de fond
│   │   ├── ContentSection.tsx  # Sections de contenu réutilisables
│   │   ├── NewsGrid.tsx        # Grille d'actualités
│   │   ├── StatsCards.tsx      # Cartes statistiques colorées
│   │   └── Footer.tsx          # Pied de page avec liens
│   ├── App.tsx                 # Composant principal
│   ├── main.tsx                # Point d'entrée
│   └── index.css               # Styles globaux
├── public/                     # Assets statiques
└── package.json                # Dépendances
```

## 🎨 Composants Principaux

### 1. Header
- Logo UNESCO
- Navigation responsive
- Menu burger pour mobile
- Barre de recherche

### 2. Hero Section
- Image de fond avec overlay
- Titre principal accrocheur
- Bouton call-to-action

### 3. Content Sections
- Mise en page alternée (image gauche/droite)
- Texte descriptif
- Boutons d'action
- Design responsive

### 4. News Grid
- Grille de 4 colonnes (responsive)
- Cards avec images et titres
- Dates d'actualités
- Effet hover interactif

### 5. Stats Cards
- 4 cartes statistiques colorées
- Images de fond
- Chiffres et labels
- Animations au survol

### 6. Footer
- 4 colonnes de liens
- Réseaux sociaux
- Copyright
- Design responsive

## 🎯 Fonctionnalités Implémentées

### ✅ Design Fidèle
- Reproduction exacte de la maquette
- Couleurs UNESCO (bleu #0095D9)
- Typographie moderne
- Espacement cohérent

### ✅ Responsive Design
- Mobile-first approach
- Breakpoints adaptatifs
- Menu mobile fonctionnel
- Grilles responsive

### ✅ Interactivité
- Effets hover sur les cartes
- Transitions fluides
- Menu déroulant mobile
- Boutons interactifs

### ✅ Performance
- Optimisation des images
- Lazy loading
- Build optimisé avec Vite
- CSS moderne avec TailwindCSS

## 🚀 Commandes Disponibles

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build de production
npm run build

# Prévisualiser le build
npm run preview

# Linter le code
npm run lint
```

## 🌐 Accès au Site

Le site est accessible sur : **http://localhost:5174**

## 📱 Responsive Breakpoints

- **Mobile** : < 640px
- **Tablet** : 640px - 1024px
- **Desktop** : > 1024px

## 🎨 Palette de Couleurs

- **UNESCO Blue** : #0095D9
- **Dark** : #1a1a1a
- **White** : #ffffff
- **Gray** : Variations de gray-50 à gray-900

## 🔧 Personnalisation

Pour personnaliser le site :

1. **Couleurs** : Modifier `tailwind.config.js`
2. **Contenu** : Éditer les données dans `App.tsx`
3. **Images** : Remplacer les URLs Unsplash
4. **Navigation** : Modifier `Header.tsx`

## 📝 Notes Importantes

- Les images utilisent l'API Unsplash pour le moment
- Le site est entièrement responsive
- Les liens sont des placeholders (#)
- Possibilité d'ajouter un backend pour le contenu dynamique

## 🔮 Améliorations Futures Possibles

- [ ] Intégration d'un CMS (Strapi, Contentful)
- [ ] Système de recherche fonctionnel
- [ ] Multilinguisme (i18n)
- [ ] Animations avancées (Framer Motion)
- [ ] SEO optimisé
- [ ] Formulaire de contact
- [ ] Newsletter
- [ ] Espace membre

## 📄 License

Ce projet est une reproduction à des fins de démonstration.

---

**Développé avec ❤️ pour UNESCO**
