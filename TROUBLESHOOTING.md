# 🔧 Dépannage - Header Premium

## 🚨 Le nouveau design ne s'affiche pas

### Solutions Rapides

#### 1. Hard Refresh du Navigateur
**Windows/Linux** : `Ctrl + Shift + R`
**Mac** : `Cmd + Shift + R`

Cela vide le cache et recharge tous les fichiers.

#### 2. Vider le Cache Complètement
**Chrome/Edge** :
1. Ouvrir DevTools (F12)
2. Clic droit sur le bouton refresh
3. Sélectionner "Vider le cache et effectuer une actualisation forcée"

**Firefox** :
1. Ouvrir DevTools (F12)
2. Onglet Network
3. Cocher "Disable Cache"
4. Rafraîchir (F5)

#### 3. Redémarrer le Serveur
```bash
# Arrêter avec Ctrl+C
# Puis relancer
npm run dev
```

#### 4. Vérifier la Console
Ouvrir DevTools (F12) et vérifier s'il y a des erreurs dans :
- Console
- Network (fichiers qui ne chargent pas)

---

## ✅ Checklist de Vérification

### Fichiers Présents
- [ ] `src/components/HeaderPremium.tsx` existe
- [ ] `src/App.tsx` importe HeaderPremium
- [ ] `src/components/Hero.tsx` a les nouveaux margins

### Serveur
- [ ] Le serveur tourne sur http://localhost:5173
- [ ] Aucune erreur dans le terminal
- [ ] Hot reload fonctionne

### Navigation
- [ ] La bannière bleue s'affiche en haut
- [ ] Le header est transparent au top de page
- [ ] Le header devient opaque au scroll
- [ ] Les dropdowns fonctionnent

---

## 🔍 Commandes de Debug

```bash
# Arrêter le serveur actuel
# Ctrl+C

# Nettoyer et rebuild
npm run build

# Relancer
npm run dev
```

---

## 📞 Si Toujours Pas Visible

Le header utilise des classes Tailwind modernes. Vérifiez que votre `tailwind.config.js` inclut bien tous les fichiers :

```js
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
```
