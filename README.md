<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MysteryForge — Forgez vos enquêtes criminelles par IA</title>
  <meta name="description" content="Générez des scénarios de murder mystery uniques par IA en 30 secondes. Personnages, indices, chronologie, révélation finale — tout prêt à jouer.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&amp;family=EB+Garamond:ital,wght@0,400;0,500;1,400&amp;family=Crimson+Pro:ital,wght@0,300;0,400;0,600;1,300;1,400&amp;display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
  <style>
    /* === PAGE-SPECIFIC === */
    .features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.25rem; }
    .process-grid  { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; }
    .process-step  {
      padding: 2.5rem 2rem;
      border-right: 1px solid var(--bordure);
      border-bottom: 1px solid var(--bordure);
      text-align: center;
      transition: background 0.3s;
    }
    .process-step:nth-child(4n) { border-right: none; }
    .process-step:hover { background: rgba(201,168,76,0.03); }
    .step-num { font-family: var(--serif); font-size: 3rem; color: rgba(201,168,76,0.15); display: block; line-height: 1; margin-bottom: 1rem; }
    .step-ttl { font-family: var(--serif); font-size: 1.05rem; color: var(--parchemin); margin-bottom: 0.6rem; }
    .testi-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
    .testi-card { border: 1px solid var(--bordure); padding: 2rem; background: rgba(255,255,255,0.012); }
    .testi-stars { color: var(--or); font-size: 0.9rem; letter-spacing: 0.18em; margin-bottom: 1rem; }
    .testi-txt   { font-style: italic; color: var(--texte-muted); font-size: 0.95rem; line-height: 1.85; margin-bottom: 1.5rem; font-family: var(--crimson); }
    .testi-author { font-family: var(--serif); font-size: 0.9rem; color: var(--parchemin); }
    .testi-role   { font-size: 0.72rem; color: var(--texte-muted); text-transform: uppercase; letter-spacing: 0.12em; }
    .preview-box {
      border: 1px solid var(--bordure);
      padding: 2.5rem;
      background: rgba(255,255,255,0.015);
      max-width: 720px; margin: 0 auto;
      font-size: 0.9rem; color: var(--texte-muted);
    }
    .preview-title { font-family: var(--serif); font-size: 1.6rem; color: var(--parchemin); margin-bottom: 0.5rem; }
    .preview-lieu  { font-size: 0.72rem; letter-spacing: 0.25em; text-transform: uppercase; color: var(--or); margin-bottom: 1.5rem; }
    .preview-tags  { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 1.5rem; }
    .preview-tag   { padding: 0.25rem 0.75rem; border: 1px solid var(--bordure); font-size: 0.75rem; color: var(--texte-muted); }
    .cta-band { padding: 7rem 0; text-align: center; background: linear-gradient(135deg, rgba(139,28,28,0.12) 0%, rgba(9,8,10,0) 60%, rgba(201,168,76,0.06) 100%); border-top: 1px solid var(--bordure); border-bottom: 1px solid var(--bordure); }
    @media(max-width:900px){
      .process-grid { grid-template-columns: 1fr 1fr; }
      .process-step:nth-child(2n) { border-right: none; }
      .testi-grid { grid-template-columns: 1fr; }
    }
    @media(max-width:600px){
      .process-grid { grid-template-columns: 1fr; }
      .process-step { border-right: none; }
    }
  </style>
</head>
<body>

<!-- NAVIGATION -->
<nav id="nav">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">Mystery<em>Forge</em></a>
    <ul class="nav-links">
      <li><a href="index.html#how">Comment ça marche</a></li>
      <li><a href="index.html#apercu">Aperçu</a></li>
      <li><a href="index.html#temoignages">Témoignages</a></li>
      <li><a href="pricing.html">Tarifs</a></li>
      <li><a href="generator.html" class="nav-cta">Créer un scénario →</a></li>
    </ul>
    <button class="nav-burger" aria-label="Menu" aria-expanded="false">☰</button>
  </div>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="container">
    <div class="hero-badge">✦ Propulsé par Claude — IA de pointe ✦</div>
    <h1>L'art du crime,<br><em>forgé par l'IA</em></h1>
    <p class="tagline">Générez des soirées murder mystery uniques en 30 secondes. Personnages profonds, indices cohérents, révélation imparable — prêt à jouer ce soir.</p>
    <div class="hero-cta">
      <a href="generator.html" class="btn btn--gold btn--lg">Créer mon scénario →</a>
      <a href="#how" class="btn btn--outline btn--lg">Comment ça marche</a>
    </div>
    <div class="stats-row" style="animation:fadeUp 0.7s ease 0.6s both">
      <div class="stat-item"><span class="stat-num">14 800+</span><span class="stat-lbl">Scénarios générés</span></div>
      <div class="stat-item"><span class="stat-num">∞</span><span class="stat-lbl">Combinaisons uniques</span></div>
      <div class="stat-item"><span class="stat-num">4.9 ★</span><span class="stat-lbl">Note moyenne</span></div>
      <div class="stat-item"><span class="stat-num">4–12</span><span class="stat-lbl">Joueurs supportés</span></div>
    </div>
  </div>
</section>

<div class="stripe"></div>

<!-- FEATURES -->
<section class="section-pad">
  <div class="container">
    <div style="text-align:center;margin-bottom:4rem">
      <span class="section-eyebrow">✦ Pourquoi MysteryForge ✦</span>
      <h2 class="section-title">Ce que l'IA produit pour vous</h2>
      <div class="divider divider--center"></div>
    </div>
    <div class="features-grid">
      <div class="card" data-reveal data-delay="0s">
        <div class="card-icon">🎭</div>
        <h3>Personnages vivants</h3>
        <p>Chaque suspect a un portrait, une personnalité, un mobile crédible, un alibi, un secret personnel et un objet distinctif. Pas des silhouettes — des êtres.</p>
      </div>
      <div class="card" data-reveal data-delay="0.1s">
        <div class="card-icon">🔍</div>
        <h3>Indices cohérents</h3>
        <p>8 à 12 indices concrets placés dans des lieux précis, avec leur signification cachée et à qui ils pointent. Fausses pistes et vrais indices mêlés selon la difficulté.</p>
      </div>
      <div class="card" data-reveal data-delay="0.2s">
        <div class="card-icon">⏱</div>
        <h3>Chronologie précise</h3>
        <p>Une timeline complète de la soirée : qui était où, à quelle heure, avec quel alibi. Chaque élément est cross-vérifié pour garantir la cohérence.</p>
      </div>
      <div class="card" data-reveal data-delay="0.3s">
        <div class="card-icon">📜</div>
        <h3>Révélation logique</h3>
        <p>La solution s'appuie sur les indices posés. Le chemin de déduction est expliqué étape par étape pour que le maître de jeu puisse guider les joueurs.</p>
      </div>
      <div class="card" data-reveal data-delay="0.4s">
        <div class="card-icon">🌍</div>
        <h3>10+ univers disponibles</h3>
        <p>Manoir victorien, train de luxe, villa Art Déco, yacht méditerranéen, Hollywood doré, château médiéval… Chaque univers génère un registre narratif distinct.</p>
      </div>
      <div class="card" data-reveal data-delay="0.5s">
        <div class="card-icon">🎮</div>
        <h3>Adapté à votre groupe</h3>
        <p>4 à 12 joueurs, 3 niveaux de difficulté, durée de 2h à 4h+. Le scénario s'adapte automatiquement pour que personne ne s'ennuie.</p>
      </div>
    </div>
  </div>
</section>

<div class="stripe"></div>

<!-- HOW IT WORKS -->
<section id="how" style="background:var(--encre);padding:7rem 0;border-top:1px solid var(--bordure);border-bottom:1px solid var(--bordure)">
  <div class="container">
    <div style="text-align:center;margin-bottom:4rem">
      <span class="section-eyebrow">✦ Le processus ✦</span>
      <h2 class="section-title">De zéro à l'énigme en quatre étapes</h2>
    </div>
    <div class="process-grid" style="border-top:1px solid var(--bordure);border-left:1px solid var(--bordure)">
      <div class="process-step" data-reveal data-delay="0s">
        <span class="step-num">01</span>
        <div class="step-ttl">Configurez</div>
        <p style="font-size:0.88rem;color:var(--texte-muted);line-height:1.75">Choisissez l'univers, le nombre de joueurs, la difficulté, la durée et les options narratives souhaitées.</p>
      </div>
      <div class="process-step" data-reveal data-delay="0.1s">
        <span class="step-num">02</span>
        <div class="step-ttl">L'IA crée</div>
        <p style="font-size:0.88rem;color:var(--texte-muted);line-height:1.75">Notre moteur IA génère un scénario complet et cohérent — unique à chaque génération, jamais le même.</p>
      </div>
      <div class="process-step" data-reveal data-delay="0.2s">
        <span class="step-num">03</span>
        <div class="step-ttl">Téléchargez</div>
        <p style="font-size:0.88rem;color:var(--texte-muted);line-height:1.75">Exportez le PDF complet avec fiches personnages, cartes indices et guide du maître de jeu. Prêt à imprimer.</p>
      </div>
      <div class="process-step" data-reveal data-delay="0.3s">
        <span class="step-num">04</span>
        <div class="step-ttl">Jouez</div>
        <p style="font-size:0.88rem;color:var(--texte-muted);line-height:1.75">Vos invités incarnent leurs rôles, mènent l'enquête et tentent de débusquer le coupable avant la révélation finale.</p>
      </div>
    </div>
  </div>
</section>

<!-- APERÇU -->
<section id="apercu" class="section-pad">
  <div class="container">
    <div style="text-align:center;margin-bottom:4rem">
      <span class="section-eyebrow">✦ Exemple de génération ✦</span>
      <h2 class="section-title">Ce que vous obtenez</h2>
    </div>
    <div class="preview-box" data-reveal>
      <div class="preview-lieu">✦ Manoir des Aubépines · Bourgogne · Novembre 1923 ✦</div>
      <div class="preview-title">"Le Testament de Sang"</div>
      <p style="font-style:italic;font-family:var(--crimson);font-size:0.95rem;line-height:1.9;border-left:3px solid var(--or);padding-left:1.25rem;margin-bottom:1.5rem">Le baron Édouard de Fontainebleau est retrouvé mort dans sa bibliothèque, une heure après avoir signé son testament. Huit héritiers potentiels, tous présents ce soir-là. Chacun avait une raison. Un seul a osé…</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;font-size:0.88rem;color:var(--texte-muted)">
        <div>🎭 8 personnages avec secrets</div>
        <div>🔍 11 indices placés dans 6 pièces</div>
        <div>⏱ Chronologie de 19h à minuit</div>
        <div>↪ 3 fausses pistes</div>
        <div>💔 2 sous-intrigues romantiques</div>
        <div>🎭 Twist final inclus</div>
      </div>
      <div class="preview-tags">
        <span class="preview-tag">Niveau : Expert</span>
        <span class="preview-tag">Durée : 3-4h</span>
        <span class="preview-tag">Époque 1920s</span>
        <span class="preview-tag">Manoir</span>
      </div>
    </div>
    <div style="text-align:center;margin-top:3rem">
      <a href="generator.html" class="btn btn--gold btn--lg">Générer le vôtre gratuitement →</a>
    </div>
  </div>
</section>

<div class="stripe"></div>

<!-- TÉMOIGNAGES -->
<section id="temoignages" style="background:var(--encre);padding:7rem 0;border-top:1px solid var(--bordure);border-bottom:1px solid var(--bordure)">
  <div class="container">
    <div style="text-align:center;margin-bottom:4rem">
      <span class="section-eyebrow">✦ Ils ont joué ✦</span>
      <h2 class="section-title">Ce que disent nos détectives</h2>
    </div>
    <div class="testi-grid">
      <div class="testi-card" data-reveal data-delay="0s">
        <div class="testi-stars">★★★★★</div>
        <p class="testi-txt">Incroyable. En dix minutes j'avais un scénario complet pour 8 personnes. Nos invités ont joué pendant 3 heures, personne n'avait trouvé le coupable. La chronologie était parfaitement cohérente.</p>
        <div class="testi-author">Camille R.</div>
        <div class="testi-role">Organisatrice d'événements · Lyon</div>
      </div>
      <div class="testi-card" data-reveal data-delay="0.1s">
        <div class="testi-stars">★★★★★</div>
        <p class="testi-txt">Nous l'utilisons pour nos team buildings d'entreprise. Chaque scénario est différent, les équipes adorent. Le niveau "Expert" pousse vraiment à la réflexion collective.</p>
        <div class="testi-author">Thomas M.</div>
        <div class="testi-role">DRH · Entreprise tech · Paris</div>
      </div>
      <div class="testi-card" data-reveal data-delay="0.2s">
        <div class="testi-stars">★★★★☆</div>
        <p class="testi-txt">Les personnages sont vraiment bien écrits — leurs secrets et leurs mobiles sont crédibles. Le scénario "Orient Express" que j'ai généré était digne d'un roman policier.</p>
        <div class="testi-author">Sophie & Antoine</div>
        <div class="testi-role">Passionnés de jeux de rôle · Bordeaux</div>
      </div>
    </div>
  </div>
</section>

<!-- CTA FINAL -->
<section class="cta-band">
  <div class="container--narrow" style="text-align:center">
    <span class="section-eyebrow">✦ Commencez maintenant ✦</span>
    <h2 class="section-title" style="margin:0.75rem 0 1rem">Votre premier scénario est gratuit</h2>
    <p style="color:var(--texte-muted);font-size:1rem;margin-bottom:2.5rem;font-family:var(--crimson)">Aucune inscription requise. Configurez, générez, jouez.</p>
    <a href="generator.html" class="btn btn--gold btn--lg">Forger mon mystère →</a>
    <p style="margin-top:1.5rem;font-size:0.82rem;color:var(--texte-muted)">Besoin de plus ? <a href="pricing.html" style="color:var(--or)">Voir les abonnements</a></p>
  </div>
</section>

<!-- FOOTER -->
<footer class="footer">
  <div class="container">
    <a href="index.html" class="footer-logo">Mystery<em>Forge</em></a>
    <div class="footer-links">
      <a href="index.html">Accueil</a>
      <a href="generator.html">Générateur</a>
      <a href="pricing.html">Tarifs</a>
      <a href="#">Contact</a>
      <a href="#">Confidentialité</a>
      <a href="#">CGU</a>
    </div>
    <p class="footer-copy">© 2026 MysteryForge · Tous droits réservés · contact@mysteryforge.fr</p>
  </div>
</footer>

<script src="js/app.js"></script>
</body>
</html>
