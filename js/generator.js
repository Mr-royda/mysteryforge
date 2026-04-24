# 🔍 MysteryForge

> Générateur de scénarios Murder Mystery propulsé par IA (Claude / Anthropic)

## 📁 Structure du projet

```
mysteryforge/
├── index.html          ← Landing page (accueil)
├── generator.html      ← Générateur IA complet
├── pricing.html        ← Page tarifs & FAQ
├── css/
│   └── style.css       ← Styles partagés
├── js/
│   ├── app.js          ← Navigation, animations, utilitaires
│   └── generator.js    ← Moteur IA (appels Anthropic API)
└── README.md
```

## 🚀 Déploiement sur Vercel (5 minutes)

### Méthode 1 — Via GitHub (recommandée)

1. **Pusher sur GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit — MysteryForge"
   git remote add origin https://github.com/VOTRE_USER/mysteryforge.git
   git push -u origin main
   ```

2. **Connecter à Vercel**
   - Aller sur [vercel.com](https://vercel.com)
   - "New Project" → Import depuis GitHub
   - Sélectionner le repo `mysteryforge`
   - Framework Preset : **Other** (site statique)
   - Cliquer **Deploy**

3. ✅ Votre site est en ligne sur `mysteryforge.vercel.app`

### Méthode 2 — Via CLI Vercel

```bash
npm install -g vercel
vercel login
vercel --prod
```

## 🤖 Configuration de l'API IA

Le site utilise l'**API Anthropic** (Claude) directement depuis le navigateur.

> ⚠️ **Important** : L'appel API est fait côté client dans `js/generator.js`.  
> Pour la production, il est recommandé de créer un proxy backend (Vercel Serverless Function) pour ne pas exposer votre clé API.

### Ajout d'une clé API (développement local)

Dans `js/generator.js`, à la ligne de l'appel fetch, vous pouvez ajouter :
```js
headers: {
  'Content-Type': 'application/json',
  'x-api-key': 'votre-clé-ici', // À ne jamais commiter !
}
```

### Proxy Vercel (recommandé pour production)

Créer `api/generate.js` :
```js
export default async function handler(req, res) {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify(req.body),
  });
  const data = await response.json();
  res.json(data);
}
```

Puis dans `js/generator.js`, remplacer l'URL par `/api/generate`.

Définir la variable d'environnement dans Vercel :
```
ANTHROPIC_API_KEY = sk-ant-...
```

## 💰 Modèle économique

| Offre | Prix | Type |
|---|---|---|
| Curieux | Gratuit | Freemium (1 génération/mois) |
| Détective | 6€/scénario ou 14€/mois | Pay-per-use + abonnement |
| Organisateur | 29€/mois | SaaS B2B |

**Canaux d'acquisition :**
- SEO : mots-clés "murder mystery français", "soirée enquête criminelle"
- Product Hunt / Indie Hackers
- TikTok / Reels démos de soirées
- Partenariats escape games & organisateurs d'événements

## 🛠 Stack technique

- HTML5 / CSS3 / JavaScript vanilla
- [API Anthropic](https://docs.anthropic.com) — Claude claude-sonnet-4-20250514
- Google Fonts (Playfair Display, EB Garamond, Crimson Pro)
- Hébergement : Vercel (statique)

## 📞 Contact

contact@mysteryforge.fr
