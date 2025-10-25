# ⚠️ IMPORTANT - Comment faire fonctionner l'application

## 🚨 Problème : "Erreur de chargement des données"

Si vous voyez ce message en ouvrant `index.html` directement (avec `file://`), c'est **NORMAL**.

### 🔍 Pourquoi ?

Les navigateurs **bloquent** le chargement de fichiers JSON en local pour des raisons de sécurité (politique CORS).

## ✅ Solutions

### Solution 1 : GitHub Pages (RECOMMANDÉ)

1. **Poussez tout sur GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Activez GitHub Pages**
   - Allez dans `Settings` > `Pages`
   - Source : `main` branch
   - Sauvegardez

3. **Accédez à votre app**
   - URL : `https://VOTRE_USERNAME.github.io/nom-du-repo/`
   - ✅ **Tout fonctionnera parfaitement !**

### Solution 2 : Serveur Local (DÉVELOPPEMENT)

#### Avec Python 3 (le plus simple)
```bash
# Dans le dossier du projet
python -m http.server 8000

# Ouvrir dans le navigateur
http://localhost:8000
```

#### Avec Node.js
```bash
npx http-server -p 8000

# Ouvrir dans le navigateur
http://localhost:8000
```

#### Avec PHP
```bash
php -S localhost:8000

# Ouvrir dans le navigateur
http://localhost:8000
```

#### Avec VS Code
1. Installer l'extension **"Live Server"**
2. Clic droit sur `index.html` > **"Open with Live Server"**

### Solution 3 : Importer les données manuellement

1. Ouvrez `index.html` dans le navigateur (même avec l'erreur)
2. Cliquez sur **"📤 Importer"**
3. Sélectionnez le fichier `bars.json`
4. ✅ Les données seront sauvegardées dans le navigateur !

---

## 📁 Structure des fichiers

Vérifiez que vous avez bien **tous ces fichiers dans le même dossier** :

```
votre-projet/
├── index.html          ✅ Page principale
├── app.js              ✅ Code JavaScript
├── bars.json           ✅ Données des bars
├── filters.json        ✅ Configuration des filtres
└── README.md           📖 Documentation
```

---

## 🧪 Test de vérification

### 1. Ouvrez la Console du navigateur (F12)

Si vous voyez :
```
✅ Données chargées depuis localStorage
✅ Filtres chargés depuis filters.json
```
→ **Tout fonctionne !**

Si vous voyez :
```
⚠️ Impossible de charger bars.json: ...
⚠️ Impossible de charger filters.json: ...
```
→ **Utilisez une des solutions ci-dessus**

---

## 🆘 En cas de problème

### Erreur "Failed to fetch"
→ **Utilisez un serveur HTTP** (Solution 1 ou 2)

### Fichiers JSON introuvables
→ Vérifiez que `bars.json` et `filters.json` sont dans **le même dossier** que `index.html`

### Les données ne s'affichent pas
→ Ouvrez la console (F12) pour voir les erreurs détaillées

### Problème d'encodage (caractères bizarres)
→ Vérifiez que tous vos fichiers sont en **UTF-8**

---

## 💡 Recommandation

**Pour une utilisation normale**, déployez sur **GitHub Pages** (Solution 1).
C'est gratuit, rapide, et vous pourrez accéder à l'app depuis n'importe où !

---

## 📞 Besoin d'aide ?

Ouvrez une issue sur GitHub avec :
- Le message d'erreur exact
- Ce que vous voyez dans la console (F12)
- Votre système d'exploitation et navigateur

---

**Made with 🍺 in Montpellier**
