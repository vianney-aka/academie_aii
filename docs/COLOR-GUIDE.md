# Guide des Couleurs AII

## Palette de Couleurs

### Couleurs Principales
- **Bleu Principal** : `#0064B0` (aii-primary)
  - Utilisé pour: Header, boutons principaux, liens
- **Bleu Secondaire** : `#0095D9` (aii-secondary)
  - Utilisé pour: Hover states, accents

### Nuances de Gris
- **Gray 100** : `#f8f9fa` - Fonds très clairs
- **Gray 200** : `#e9ecef` - Bordures claires
- **Gray 300** : `#dee2e6` - Fonds de sections
- **Gray 400** : `#ced4da` - Éléments désactivés
- **Gray 500** : `#6c757d` - Texte secondaire
- **Gray 600** : `#495057` - Texte standard
- **Gray 700** : `#343a40` - Fonds sombres
- **Gray 800** : `#212529` - Footer, sections dark
- **Gray 900** : `#0f0f0f` - Texte très sombre

### Couleurs d'Accent
- **Rouge** : `#dc3545` - Alertes, erreurs
- **Vert** : `#28a745` - Succès, validation
- **Jaune** : `#ffc107` - Avertissements
- **Rose** : `#e91e63` - Éléments spéciaux

## Utilisation dans Tailwind

### Classes de couleurs de fond
```html
<div class="bg-aii-primary">...</div>
<div class="bg-aii-secondary">...</div>
<div class="bg-aii-gray-100">...</div>
```

### Classes de couleurs de texte
```html
<p class="text-aii-primary">...</p>
<p class="text-aii-secondary">...</p>
<p class="text-aii-gray-500">...</p>
```

### Classes de bordures
```html
<div class="border-aii-primary">...</div>
<div class="border-aii-secondary">...</div>
```

## Classes Utilitaires Personnalisées

### Boutons
```html
<!-- Bouton principal -->
<button class="btn-unesco-primary">Cliquez ici</button>

<!-- Bouton secondaire -->
<button class="btn-unesco-secondary">En savoir plus</button>
```

### Cartes
```html
<div class="card-unesco">
  <h3>Titre de la carte</h3>
  <p>Contenu...</p>
</div>

<div class="card-unesco-overlay">
  <img src="..." alt="..." />
  <div class="content">...</div>
</div>
```

### Badges
```html
<span class="badge-unesco-primary">Nouveau</span>
<span class="badge-unesco-success">Actif</span>
<span class="badge-unesco-warning">En attente</span>
<span class="badge-unesco-danger">Urgent</span>
```

### Alertes
```html
<div class="alert-unesco-info">Information...</div>
<div class="alert-unesco-success">Succès!</div>
<div class="alert-unesco-warning">Attention...</div>
<div class="alert-unesco-danger">Erreur!</div>
```

### Sections
```html
<!-- Section avec fond gris clair -->
<section class="section-gray">
  ...
</section>

<!-- Section avec fond sombre -->
<section class="section-dark">
  ...
</section>
```

### Gradients
```html
<!-- Gradient principal -->
<div class="gradient-unesco">...</div>

<!-- Gradient sombre -->
<div class="gradient-unesco-dark">...</div>

<!-- Texte avec gradient -->
<h1 class="gradient-text">Titre avec gradient</h1>
```

## Variables CSS

Les couleurs sont aussi disponibles comme variables CSS:
```css
:root {
  --unesco-primary: #0064B0;
  --unesco-secondary: #0095D9;
  --unesco-dark: #1a1a1a;
  /* ... etc */
}
```

Utilisation en CSS pur:
```css
.custom-element {
  background-color: var(--unesco-primary);
  color: var(--unesco-secondary);
}
```

## Accessibilité

- Le contraste entre le bleu principal (#0064B0) et le blanc est **7.09:1** (AAA)
- Le contraste entre le gris foncé (#495057) et le blanc est **7.85:1** (AAA)
- Toujours vérifier le contraste pour l'accessibilité

## Exemples d'utilisation

### Header
```jsx
<header className="bg-unesco-primary text-white">
  <nav className="hover:bg-unesco-secondary">
    ...
  </nav>
</header>
```

### Card avec hover effect
```jsx
<div className="card-unesco hover:shadow-unesco-lg">
  <h3 className="text-unesco-dark">Titre</h3>
  <p className="text-unesco-gray-600">Description...</p>
  <button className="btn-unesco-primary">Action</button>
</div>
```

### Footer
```jsx
<footer className="bg-unesco-gray-800 text-white">
  <div className="border-t border-unesco-gray-700">
    ...
  </div>
</footer>
```
