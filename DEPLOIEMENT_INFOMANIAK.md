# 🚀 Guide de Déploiement sur Infomaniak

Ce guide détaille toutes les étapes pour déployer votre site AII sur un hébergement Infomaniak.

---

## 📋 Prérequis

### Ce dont vous avez besoin

✅ Un compte Infomaniak avec un hébergement web actif  
✅ Un nom de domaine (ex: `aii-academie.org`)  
✅ Les identifiants FTP fournis par Infomaniak  
✅ Node.js installé sur votre machine locale (pour le build)

---

## 🏗️ Étape 1 : Préparer le Build de Production

### 1.1 Configuration du fichier `vite.config.ts`

Créez ou modifiez le fichier `vite.config.ts` à la racine du projet :

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Changez si votre site est dans un sous-dossier
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false, // Pour la production
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
  server: {
    port: 5174,
  },
})
```

### 1.2 Créer le fichier `.htaccess`

Créez un fichier `.htaccess` à la racine avec ce contenu (important pour React Router) :

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>

# Compression GZIP
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Cache navigateur
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType text/javascript "access plus 1 month"
  ExpiresByType application/pdf "access plus 1 month"
  ExpiresByType text/x-javascript "access plus 1 month"
  ExpiresByType image/x-icon "access plus 1 year"
  ExpiresDefault "access plus 2 days"
</IfModule>

# Sécurité
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
  Header always set Referrer-Policy "no-referrer-when-downgrade"
</IfModule>

# Désactiver le listing des répertoires
Options -Indexes

# Protection fichiers sensibles
<FilesMatch "\.(env|json|config\.js|md|log)$">
  Order allow,deny
  Deny from all
</FilesMatch>
```

### 1.3 Créer le fichier `robots.txt`

Créez `public/robots.txt` :

```
User-agent: *
Allow: /

Sitemap: https://votre-domaine.com/sitemap.xml
```

### 1.4 Builder le projet

Dans votre terminal :

```bash
# 1. Installer toutes les dépendances
npm install

# 2. Créer le build de production
npm run build
```

Cela créera un dossier `dist/` avec tous les fichiers optimisés.

### 1.5 Vérifier le build localement

```bash
npm run preview
```

Testez sur `http://localhost:4173` pour vérifier que tout fonctionne.

---

## 📤 Étape 2 : Déploiement via FTP

### 2.1 Obtenir vos identifiants FTP Infomaniak

1. Connectez-vous à votre **Manager Infomaniak**
2. Allez dans **Hébergement Web**
3. Sélectionnez votre hébergement
4. Cliquez sur **Accès FTP**
5. Notez :
   - Serveur FTP : `ftp.votre-domaine.com`
   - Nom d'utilisateur : `votre-user@votre-domaine.com`
   - Mot de passe : (celui que vous avez défini)

### 2.2 Se connecter avec FileZilla

**Méthode recommandée : FileZilla (gratuit)**

1. Téléchargez [FileZilla Client](https://filezilla-project.org/)
2. Ouvrez FileZilla
3. Remplissez les champs en haut :
   - **Hôte** : `ftp.votre-domaine.com` ou `ftps://ftp.votre-domaine.com` (recommandé)
   - **Identifiant** : votre nom d'utilisateur FTP
   - **Mot de passe** : votre mot de passe
   - **Port** : 21 (FTP) ou 990 (FTPS sécurisé)

4. Cliquez sur **Connexion rapide**

### 2.3 Localiser le dossier web

Sur Infomaniak, les fichiers web sont généralement dans :
```
/web/
```

Naviguez jusqu'à ce dossier dans FileZilla (panneau de droite).

### 2.4 Upload des fichiers

1. Sur votre ordinateur (panneau de gauche), naviguez jusqu'au dossier `dist/` de votre projet

2. **Sélectionnez TOUS les fichiers et dossiers** dans `dist/` :
   - `index.html`
   - dossier `assets/`
   - `.htaccess`
   - tous les autres fichiers

3. **Glissez-déposez** ou **clic droit > Upload** vers le dossier `/web/`

4. ⏱️ **Patience** : selon la taille, cela peut prendre 5-15 minutes

### 2.5 Vérifier les permissions

Une fois l'upload terminé, vérifiez que :
- Les fichiers ont les permissions `644` (rw-r--r--)
- Les dossiers ont les permissions `755` (rwxr-xr-x)

Pour modifier : clic droit sur un fichier/dossier > Permissions de fichier

---

## 🌐 Étape 3 : Configuration du Nom de Domaine

### 3.1 Si votre domaine est chez Infomaniak

1. Dans le **Manager Infomaniak**
2. Allez dans **Domaines**
3. Sélectionnez votre domaine
4. Allez dans **Gérer les DNS**
5. Vérifiez que l'enregistrement **A** pointe vers votre hébergement

Généralement, c'est déjà configuré automatiquement.

### 3.2 Si votre domaine est ailleurs

Ajoutez ces enregistrements DNS chez votre registrar :

```
Type: A
Nom: @
Valeur: [IP de votre hébergement Infomaniak]

Type: CNAME
Nom: www
Valeur: votre-domaine.com
```

**Propagation DNS** : Comptez 4 à 48h pour la propagation complète.

---

## 🔒 Étape 4 : Activer le HTTPS (SSL)

### 4.1 Via le Manager Infomaniak

1. Dans **Hébergement Web**
2. Cliquez sur votre hébergement
3. Allez dans **Certificat SSL**
4. Cliquez sur **Activer Let's Encrypt** (gratuit)
5. Attendez 5-10 minutes pour l'activation

### 4.2 Forcer la redirection HTTPS

Ajoutez au début de votre `.htaccess` :

```apache
# Redirection HTTPS
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>
```

Ré-uploadez le fichier `.htaccess`.

---

## ✅ Étape 5 : Vérifications Post-Déploiement

### 5.1 Tests fonctionnels

Visitez votre site et vérifiez :

- ✅ Page d'accueil se charge correctement
- ✅ Navigation entre les pages fonctionne
- ✅ Images s'affichent
- ✅ Formulaire de contact fonctionne (testez-le)
- ✅ Footer et Header s'affichent
- ✅ Version mobile responsive

### 5.2 Tests techniques

**Test de vitesse :**
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)

**Test SEO :**
- Vérifier les balises `<title>` et `<meta description>`
- Tester avec [Google Search Console](https://search.google.com/search-console)

**Test SSL :**
- [SSL Labs](https://www.ssllabs.com/ssltest/)

---

## 🔄 Étape 6 : Mises à Jour Futures

### Workflow de mise à jour

Chaque fois que vous modifiez le site :

```bash
# 1. Modifier votre code localement
# 2. Tester en local
npm run dev

# 3. Créer un nouveau build
npm run build

# 4. Se connecter en FTP
# 5. Remplacer UNIQUEMENT les fichiers modifiés dans /web/

# 6. Vider le cache navigateur (Ctrl+F5)
```

### Script de déploiement automatique (optionnel)

Créez `deploy.sh` :

```bash
#!/bin/bash

# Build
echo "🏗️  Building..."
npm run build

# Connexion FTP et upload
echo "📤 Uploading to Infomaniak..."
lftp -u votre-user,votre-password ftp://ftp.votre-domaine.com <<EOF
mirror --reverse --delete --verbose dist/ /web/
bye
EOF

echo "✅ Deployment complete!"
```

Rendez-le exécutable :
```bash
chmod +x deploy.sh
```

Utilisez-le :
```bash
./deploy.sh
```

---

## 📧 Étape 7 : Configuration Email (Bonus)

### Créer une adresse email professionnelle

1. Dans le **Manager Infomaniak**
2. Allez dans **Emails**
3. Créez les adresses :
   - `contact@aii-academie.org`
   - `info@aii-academie.org`
   - `admin@aii-academie.org`

### Configurer le formulaire de contact

Pour que le formulaire envoie vraiment des emails, vous devez :

**Option 1 : Backend PHP simple**

Créez `api/contact.php` :

```php
<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    $to = "contact@aii-academie.org";
    $subject = "Nouveau message depuis le site AII";
    $message = "Nom: " . $data['nom'] . "\n";
    $message .= "Prénom: " . $data['prenom'] . "\n";
    $message .= "Email: " . $data['email'] . "\n";
    $message .= "Message: " . $data['message'];
    
    $headers = "From: noreply@aii-academie.org";
    
    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false]);
    }
}
?>
```

**Option 2 : Service externe (recommandé)**
- [Formspree](https://formspree.io/) - Gratuit jusqu'à 50 soumissions/mois
- [EmailJS](https://www.emailjs.com/) - Gratuit jusqu'à 200 emails/mois

---

## 🛠️ Dépannage

### Problème : Page blanche après déploiement

**Solution :**
1. Vérifiez que le fichier `.htaccess` est présent
2. Vérifiez les permissions (644 pour les fichiers)
3. Consultez les logs d'erreur dans le Manager Infomaniak

### Problème : Routes React ne fonctionnent pas (404)

**Solution :**
Le fichier `.htaccess` n'est pas actif ou mal configuré. Re-uploadez-le.

### Problème : Images ne s'affichent pas

**Solution :**
1. Vérifiez que les images sont dans `dist/assets/`
2. Vérifiez les chemins dans le code (doivent être relatifs)
3. Vérifiez les permissions des images (644)

### Problème : Site très lent

**Solutions :**
1. Activez la compression GZIP (voir `.htaccess`)
2. Optimisez les images (WebP, compression)
3. Activez le cache navigateur (voir `.htaccess`)
4. Considérez un CDN comme Cloudflare

---

## 📊 Monitoring et Analytics

### Google Analytics (recommandé)

Ajoutez dans `index.html` avant `</head>` :

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Infomaniak Statistiques

Infomaniak fournit des statistiques de base :
1. Manager > Hébergement Web
2. Statistiques du site

---

## 🔐 Sécurité

### Checklist Sécurité

- ✅ HTTPS activé et forcé
- ✅ Fichiers sensibles protégés dans `.htaccess`
- ✅ Mots de passe FTP forts et uniques
- ✅ Sauvegardes régulières activées (Infomaniak backup automatique)
- ✅ Formulaire protégé contre le spam (ajoutez reCAPTCHA)

### Sauvegardes

Infomaniak fait des sauvegardes automatiques, mais :

**Sauvegarde manuelle recommandée :**
```bash
# Télécharger tout le site en local
# Via FileZilla : Glisser /web/ vers votre disque dur
```

Fréquence recommandée : **avant chaque mise à jour majeure**

---

## 📞 Support

### Support Infomaniak

- **Chat en ligne** : disponible 24/7
- **Téléphone** : +41 22 820 35 44
- **Email** : support@infomaniak.com
- **Documentation** : https://www.infomaniak.com/fr/support

### Ressources Utiles

- [Guide Infomaniak Hébergement Web](https://www.infomaniak.com/fr/support/faq/category/hebergement-web)
- [Vite Documentation](https://vitejs.dev/)
- [React Router Documentation](https://reactrouter.com/)

---

## ✅ Checklist Finale

Avant de considérer le déploiement terminé :

- [ ] Build de production créé et testé localement
- [ ] Fichier `.htaccess` créé et uploadé
- [ ] Tous les fichiers uploadés via FTP
- [ ] Domaine correctement configuré
- [ ] HTTPS activé et redirection forcée
- [ ] Site accessible via le navigateur
- [ ] Toutes les pages fonctionnent
- [ ] Formulaire de contact testé
- [ ] Version mobile testée
- [ ] Tests de vitesse effectués
- [ ] Analytics configuré
- [ ] Sauvegarde du site effectuée

---

**🎉 Félicitations ! Votre site AII est maintenant en ligne sur Infomaniak !**

Pour toute question, consultez d'abord cette documentation, puis contactez le support Infomaniak qui est excellent.
