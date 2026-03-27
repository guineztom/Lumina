# Lumina AI — Migration vers Tina CMS

## Ce qui change

L'admin passe de Decap CMS à **Tina CMS** :
- Éditeur visuel en temps réel (vous voyez le rendu pendant que vous tapez)
- Images insérables n'importe où dans un article
- Blocs FAQ ajoutables en fin d'article
- Tous vos articles et outils existants visibles et éditables
- Toujours gratuit, toujours sur GitHub + Cloudflare Pages

---

## ÉTAPE 1 — Créer un compte Tina Cloud (5 min)

1. Allez sur **app.tina.io** → **Sign in with GitHub**
2. Cliquez **"New Project"**
3. Sélectionnez votre repo **guineztom/Lumina2**
4. Laissez les paramètres par défaut → **Create Project**
5. Dans le projet créé → onglet **"Overview"** → notez :
   - **Client ID** (ex : `abc123...`)
   - **Content Token** → cliquez "Generate Token" → notez-le

---

## ÉTAPE 2 — Ajouter les variables dans Cloudflare Pages (3 min)

1. Dashboard Cloudflare → votre projet **Lumina2** → **Settings → Environment variables**
2. Ajoutez ces deux variables :
   - `TINA_CLIENT_ID` → votre Client ID de l'étape 1
   - `TINA_TOKEN` → votre Content Token de l'étape 1
3. **Save**

---

## ÉTAPE 3 — Remplacer les fichiers dans votre repo (5 min)

Uploadez via GitHub Desktop ou l'interface GitHub ces fichiers depuis ce ZIP :

| Fichier | Action |
|---|---|
| `tina/config.ts` | Nouveau dossier + fichier à créer |
| `package.json` | Remplace l'ancien |
| `build.js` | Remplace l'ancien |

⚠️ **Supprimez** le dossier `admin/` de votre repo (Tina génère son propre admin).
⚠️ **Supprimez** le dossier `functions/` (plus besoin avec Tina Cloud).

---

## ÉTAPE 4 — Mettre à jour le Build command dans Cloudflare (2 min)

1. Cloudflare → votre projet → **Settings → Builds & deployments**
2. Changez le **Build command** :
   - Avant : `node build.js`
   - Après : `npm install && npm run build`
3. **Save** → **Trigger deploy**

---

## ÉTAPE 5 — Accéder à l'admin

Une fois le build terminé :
- Allez sur **app.tina.io** → votre projet → bouton **"Open Admin"**
- OU directement sur `https://lumina2.pages.dev/admin`
- Connectez-vous avec GitHub

Vous voyez l'éditeur visuel avec tous vos articles et outils existants.

---

## Utilisation quotidienne

### Ajouter un article avec images
1. Admin → **Articles de blog → New**
2. Remplissez les champs
3. Dans une section → cliquez l'icône image dans l'éditeur riche → uploadez ou collez une URL
4. **Save** → article en ligne en 2 minutes, manifest mis à jour automatiquement

### Ajouter une FAQ à un article
1. Admin → ouvrez l'article → descendez jusqu'à **"FAQ"**
2. Cliquez **"Add item"** → Question + Réponse
3. **Save**

### Plus jamais de problème de manifest
Tina CMS + `npm run build` scanne automatiquement `content/` à chaque deploy → plus besoin de mettre à jour manuellement la liste des articles.

---

## En cas de problème

| Symptôme | Solution |
|---|---|
| Build échoue | Vérifiez que TINA_CLIENT_ID et TINA_TOKEN sont bien dans les variables Cloudflare |
| Admin inaccessible | Vérifiez que le build s'est terminé en "Success" |
| Article non visible | Attendez 2-3 min après publication — le build doit se terminer |
