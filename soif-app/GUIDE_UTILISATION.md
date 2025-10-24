# 🎯 Guide d'Utilisation - SOIF MyBarFinder

## 🚀 Démarrage Rapide

### Option 1 : Ouvrir directement (fichier local)
1. Double-cliquez sur `index.html`
2. ⚠️ **Attention** : Le chargement du JSON ne fonctionnera pas en mode `file://`

### Option 2 : Serveur local (RECOMMANDÉ)

#### Avec Python (le plus simple)
```bash
cd soif-app
python3 -m http.server 8000
```
Puis ouvrez : http://localhost:8000

#### Avec PHP
```bash
cd soif-app
php -S localhost:8000
```

#### Avec Node.js
```bash
npx http-server soif-app
```

## 📝 Modifier les Données des Bars

### 1. Ouvrir le fichier
```bash
# Avec n'importe quel éditeur de texte
nano data/bars.json
# ou
code data/bars.json  # VS Code
# ou
vim data/bars.json
```

### 2. Format d'un bar
```json
{
  "id": 107,
  "name": "Mon Nouveau Bar",
  "type": "Bar à cocktails",
  "address": "1 Rue Example, 34000 Montpellier",
  "distance": 0.5,
  "features": [
    "bar_cocktails",
    "terrasse",
    "festif",
    "ecusson"
  ]
}
```

### 3. Features Disponibles

#### Quartiers
- `ecusson`, `antigone`, `comedie`, `gare`, `beaux_arts`, `port_marianne`
- `figuerolles`, `boutonnet`, `lattes`

#### Types
- `bar_bieres`, `bar_vins`, `bar_cocktails`, `pub`, `brasserie`
- `speakeasy`, `rooftop`, `lounge`, `boite_club`, `cafe`

#### Ambiances
- `cosy`, `tendance`, `romantique`, `festif`, `calme`
- `convivial`, `branche`, `alternatif`, `chic`, `underground`

#### Caractéristiques
- `terrasse`, `wifi`, `parking`, `afterwork`, `happy_hour`
- `terrasse_ensoleillee`, `terrasse_ombragee`, `vue_ville`, `vue_mer`

#### Musiques
- `rock`, `pop`, `jazz`, `electro`, `techno`, `hip_hop`, `indie`
- `latino`, `metal`, `disco`

#### Boissons
- `cocktails_signature`, `vins_naturels`, `bieres_artisanales`
- `bieres_locales`, `spiritueux`, `rhum`, `gin`

#### Nourriture
- `planches`, `tapas`, `burgers`, `pizzas`, `brunch`, `snacking`

#### Événements
- `karaoke`, `dj_set`, `concerts`, `quiz`, `dancefloor`

#### Jeux
- `babyfoot`, `flechettes`, `jeux_societe`, `jeux`

## 🎨 Personnaliser le Design

### Couleurs principales (dans `css/styles.css`)

```css
/* Couleur principale */
background: linear-gradient(135deg, #ff6b6b, #ff8e8e);

/* Fond */
background: linear-gradient(135deg, #1a0f24 0%, #2d1b3d 100%);

/* Couleurs d'accentuation */
color: #ff8e8e;
```

### Changer le logo/titre
Dans `index.html` :
```html
<div class="header">
    <h1>SOIF</h1>
    <p>votre-email@exemple.com</p>
</div>
```

## 🔧 Fonctionnalités

### Ajouter un bar
1. Cliquez sur "📝 Fiche Bar"
2. Cliquez sur "+ Ajouter un nouveau bar"
3. Remplissez le formulaire
4. Cliquez sur "Enregistrer le bar"

### Rechercher un bar
1. Cliquez sur "🔍 Recherche"
2. Utilisez la barre de recherche ou les filtres
3. Cliquez sur "🔍 Voir les résultats"

### Exporter/Importer
- **Exporter** : Sauvegarde tous vos bars en JSON
- **Importer** : Charge un fichier JSON de bars
- **Réinitialiser** : Revient aux 106 bars d'origine

## 📱 Mobile First

L'application est optimisée pour mobile :
- Design responsive
- Interface tactile
- Pas de hover nécessaire

## 🐛 Dépannage

### Le JSON ne se charge pas
➡️ Utilisez un serveur local (voir "Démarrage Rapide")

### Les modifications ne s'affichent pas
➡️ Videz le cache : Ctrl+Shift+R (PC) ou Cmd+Shift+R (Mac)

### Erreur "CORS"
➡️ Vous devez utiliser un serveur web local (Python, PHP, Node)

## 📊 Analytics

L'application utilise Google Analytics 4 (ID: G-Q86SEH0EQJ)

Pour désactiver :
1. Supprimez le bloc Google Analytics dans `index.html`
2. Supprimez les appels `gtag()` dans `js/app.js`

## 🚀 Hébergement Web

### Netlify (Gratuit)
1. Créez un compte sur netlify.com
2. Glissez-déposez le dossier `soif-app`
3. ✅ Votre site est en ligne !

### Vercel (Gratuit)
```bash
npm i -g vercel
cd soif-app
vercel
```

### GitHub Pages (Gratuit)
1. Push sur GitHub
2. Activez Pages dans Settings
3. Votre site : `username.github.io/soif-app`

## 💡 Conseils

1. **Sauvegardez régulièrement** `data/bars.json`
2. **Testez localement** avant de déployer
3. **Utilisez Git** pour versioning
4. **Compressez les images** si vous en ajoutez

## 📞 Support

Questions ? Contactez : soif.mybarfinder@gmail.com

---

**Bon courage avec SOIF ! 🍻**
