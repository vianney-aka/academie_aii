# 🎨 Guide d'Utilisation du Logo AII

## 📋 Description du Logo

Le logo de l'**Académie Internationale Interuniversitaire (AII)** représente visuellement les valeurs et la mission de l'institution :

### Éléments du Logo

1. **Toque de Graduation (Bleu clair)** 
   - Symbolise l'excellence académique
   - Représente l'enseignement supérieur et la formation

2. **Figure Humaine Dynamique**
   - **Orange** : Énergie, créativité, innovation
   - **Vert** : Croissance, développement durable, espoir
   - **Rouge** : Passion, engagement, détermination
   - Position dynamique symbolisant le mouvement et le progrès

3. **Cercle Bleu Englobant**
   - Unité et cohésion du réseau universitaire
   - Protection et soutien des membres
   - Continuité et pérennité

4. **Texte "Académie Internationale Interuniversitaire"**
   - Identité claire et professionnelle
   - Positionnement autour du cercle (sens de rotation)

---

## 🎯 Intégration sur le Site

### Header (Navigation)
- **Taille normale** : 64px de hauteur (h-16)
- **Taille scrolled** : 48px de hauteur (h-12)
- **Position** : En haut à gauche
- **Fond** : Transparent ou bleu (#0064B0 / #0095D9)
- **Effet hover** : Opacité 90%
- **Transition** : Smooth 300ms

```tsx
<img 
  src="/logo.png" 
  alt="Académie Internationale Interuniversitaire" 
  className={`transition-all duration-300 ${isScrolled ? 'h-12' : 'h-16'}`}
/>
```

### Footer
- **Taille** : 80px de hauteur (h-20)
- **Position** : En haut du footer, centré ou aligné à gauche
- **Fond** : Gris clair (#f3f4f6)
- **Bordure inférieure** : Séparation subtile
- **Effet hover** : Opacité 90%

```tsx
<img 
  src="/logo.png" 
  alt="Académie Internationale Interuniversitaire" 
  className="h-20 hover:opacity-90 transition"
/>
```

### Favicon
- **Fichier** : `/logo.png`
- **Type** : PNG
- **Recommandation** : Créer une version carrée optimisée 512x512px pour un meilleur rendu

---

## ✅ Bonnes Pratiques

### À FAIRE ✅

- **Toujours** inclure l'attribut `alt` descriptif
- **Respecter** les proportions originales (ne pas étirer)
- **Utiliser** sur fond neutre (blanc, gris, bleu institutionnel)
- **Maintenir** une zone de respiration autour du logo (padding)
- **Optimiser** le PNG pour le web (compression sans perte)
- **Tester** la lisibilité sur différents écrans et tailles

### À ÉVITER ❌

- ❌ Ne pas déformer le logo (étirement, compression)
- ❌ Ne pas modifier les couleurs du logo
- ❌ Ne pas ajouter d'effets (ombres portées, dégradés, 3D)
- ❌ Ne pas placer sur fond trop coloré ou texturé
- ❌ Ne pas utiliser une résolution trop basse (pixelisation)
- ❌ Ne pas séparer les éléments du logo
- ❌ Ne pas utiliser une taille inférieure à 40px de hauteur

---

## 📐 Spécifications Techniques

### Dimensions Actuelles
- **Fichier source** : `public/logo.png`
- **Format** : PNG avec transparence
- **Dimensions recommandées** : 
  - Largeur : Variable (maintenir le ratio)
  - Hauteur min : 40px
  - Hauteur max : 200px (pour impression)

### Palette de Couleurs du Site
Pour assurer l'harmonie visuelle, le logo s'intègre avec la palette du site :

- **Bleu Principal** : `#0064B0` (header, CTA)
- **Bleu Secondaire** : `#0095D9` (hover, accents)
- **Gris Fond** : `#f3f4f6` (footer, sections)
- **Blanc** : `#ffffff` (texte sur bleu)
- **Texte Principal** : `#1f2937` (contenu)

---

## 🎨 Variantes du Logo à Créer

Pour une utilisation optimale, voici les variantes recommandées :

### 1. **Logo Complet** (actuel)
- Avec toque + figure + texte
- Utilisation : Header, Footer, documents officiels
- Taille : 200-400px de largeur

### 2. **Logo Mark** (à créer)
- Uniquement toque + figure + cercle (sans texte)
- Utilisation : Favicon, icônes app, réseaux sociaux
- Taille : Carré 512x512px

### 3. **Logo Horizontal**
- Logo mark + texte sur une ligne
- Utilisation : Signatures email, documents
- Taille : 1200x300px

### 4. **Logo Monochrome** (optionnel)
- Version tout en blanc pour fonds sombres
- Version tout en bleu pour fonds clairs
- Utilisation : Situations de contraste

---

## 📱 Responsive Design

### Mobile (< 768px)
```css
.logo-mobile {
  height: 48px;
  max-width: 150px;
}
```

### Tablet (768px - 1024px)
```css
.logo-tablet {
  height: 56px;
  max-width: 200px;
}
```

### Desktop (> 1024px)
```css
.logo-desktop {
  height: 64px;
  max-width: 250px;
}
```

---

## 🔗 Accessibilité

### Attribut Alt
Toujours utiliser un texte alternatif descriptif :

```html
<img 
  src="/logo.png" 
  alt="Académie Internationale Interuniversitaire - Logo officiel"
  loading="lazy"
/>
```

### Contraste
- Le logo doit être visible sur tous les fonds
- Ratio de contraste minimum : 4.5:1 (WCAG AA)

---

## 📦 Optimisation

### Compression PNG
- **Outil recommandé** : TinyPNG, ImageOptim
- **Objectif** : < 50KB pour une utilisation web fluide
- **Qualité** : Conserver 100% de qualité visuelle

### Formats Alternatifs
Pour améliorer les performances :
- **WebP** : Version moderne pour navigateurs récents
- **SVG** : Si possible, vectoriser pour une scalabilité infinie

```html
<picture>
  <source srcset="/logo.webp" type="image/webp">
  <source srcset="/logo.png" type="image/png">
  <img src="/logo.png" alt="AII Logo" />
</picture>
```

---

## 📄 Fichiers Logo Disponibles

| Fichier | Usage | Taille | Format |
|---------|-------|--------|--------|
| `public/logo.png` | Principal (site web) | ~200x200px | PNG |
| `public/favicon.ico` | ⚠️ À créer | 32x32px | ICO |
| `public/logo-512.png` | ⚠️ À créer | 512x512px | PNG |
| `public/logo.svg` | ⚠️ À créer (optionnel) | Vectoriel | SVG |

---

## 🚀 Prochaines Actions Recommandées

### Priorité Haute 🔴
1. **Créer un favicon.ico** optimisé (32x32px)
2. **Optimiser le logo.png** actuel (compression)
3. **Créer logo-512.png** pour PWA et réseaux sociaux

### Priorité Moyenne 🟡
4. Créer une version WebP pour performance
5. Créer des variantes monochrome (blanc/bleu)
6. Documenter le logo dans un guide de marque complet

### Priorité Basse 🟢
7. Vectoriser en SVG (si source disponible)
8. Créer des templates pour documents officiels
9. Préparer des kits médias pour partenaires

---

## 📞 Contact

Pour toute question sur l'utilisation du logo ou demande de fichiers spécifiques, contactez :

**Équipe Communication AII**  
📧 communication@aii-academy.org

---

**Date de création** : 8 Novembre 2025  
**Version** : 1.0  
**Dernière mise à jour** : 8 Novembre 2025

---

## 📜 Droits et Propriété Intellectuelle

Le logo de l'AII est la propriété exclusive de l'**Académie Internationale Interuniversitaire**. Toute utilisation non autorisée est interdite. Les partenaires et membres doivent respecter ces guidelines lors de toute communication impliquant la marque AII.

---

**Le logo AII ne parle pas que visuellement. Il incarne une vision, une mission, une communauté. Utilisons-le avec fierté et respect.** ✨
