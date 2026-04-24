<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tarifs — MysteryForge</title>
  <meta name="description" content="Choisissez le forfait MysteryForge adapté à votre usage. Gratuit, Détective ou Organisateur.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&amp;family=EB+Garamond:ital,wght@0,400;0,500;1,400&amp;family=Crimson+Pro:ital,wght@0,300;0,400;0,600;1,300;1,400&amp;display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
  <style>
    /* === PRICING PAGE === */
    .pricing-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
      max-width: 980px;
      margin: 0 auto;
      align-items: start;
    }
    .plan {
      border: 1px solid var(--bordure);
      background: rgba(255,255,255,0.012);
      display: flex;
      flex-direction: column;
      position: relative;
      transition: border-color 0.3s;
    }
    .plan:hover { border-color: rgba(201,168,76,0.4); }
    .plan.featured {
      border-color: var(--or);
      background: rgba(201,168,76,0.03);
      transform: translateY(-8px);
      box-shadow: 0 20px 60px rgba(0,0,0,0.35);
    }
    .plan-badge {
      position: absolute;
      top: -1px; left: 50%;
      transform: translateX(-50%);
      background: var(--or);
      color: var(--noir);
      font-size: 0.65rem;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      padding: 0.3rem 1.4rem;
      font-weight: 700;
      white-space: nowrap;
    }
    .plan-header { padding: 2.5rem 2rem 1.5rem; border-bottom: 1px solid var(--bordure); }
    .plan-name { font-family: var(--serif); font-size: 1.2rem; color: var(--parchemin); margin-bottom: 0.5rem; }
    .plan-price { font-family: var(--serif); font-size: 3rem; color: var(--or); line-height: 1; margin: 0.75rem 0 0.25rem; }
    .plan-price sub { font-size: 1.1rem; vertical-align: baseline; color: var(--texte-muted); font-family: var(--body); }
    .plan-period { font-size: 0.82rem; color: var(--texte-muted); }
    .plan-desc { font-size: 0.88rem; color: var(--texte-muted); line-height: 1.7; margin-top: 0.75rem; }
    .plan-body { padding: 1.75rem 2rem; flex: 1; display: flex; flex-direction: column; }
    .plan-features { list-style: none; display: flex; flex-direction: column; gap: 0.65rem; flex: 1; margin-bottom: 2rem; }
    .plan-features li {
      font-size: 0.9rem;
      color: var(--texte);
      display: flex;
      gap: 0.6rem;
      align-items: flex-start;
      line-height: 1.5;
    }
    .plan-features li::before { content: '—'; color: var(--or); flex-shrink: 0; }
    .plan-features li.disabled { color: var(--texte-muted); opacity: 0.5; }
    .plan-features li.disabled::before { content: '—'; color: var(--texte-muted); }
    .plan-cta { width: 100%; padding: 1rem; font-family: var(--serif); font-size: 0.9rem; letter-spacing: 0.12em; text-transform: uppercase; cursor: pointer; transition: all 0.3s; border: 1px solid var(--bordure); background: transparent; color: var(--texte); display: block; text-align: center; }
    .plan-cta:hover { border-color: var(--or); color: var(--or); }
    .plan.featured .plan-cta { background: var(--or); border-color: var(--or); color: var(--noir); font-weight: 700; }
    .plan.featured .plan-cta:hover { background: var(--or-pale); }

    .faq-list { max-width: 720px; margin: 0 auto; display: flex; flex-direction: column; gap: 0; }
    .faq-item { border-bottom: 1px solid var(--bordure); }
    .faq-q {
      display: flex; justify-content: space-between; align-items: center;
      padding: 1.4rem 0; cursor: pointer; font-family: var(--serif); font-size: 1.05rem;
      color: var(--parchemin); gap: 1rem;
    }
    .faq-q:hover { color: var(--or); }
    .faq-arrow { color: var(--or); font-size: 0.9rem; flex-shrink: 0; transition: transform 0.25s; }
    .faq-a { display: none; padding: 0 0 1.4rem; font-size: 0.92rem; color: var(--texte-muted); line-height: 1.85; }
    .faq-item.open .faq-a { display: block; }
    .faq-item.open .faq-arrow { transform: rotate(180deg); }

    .compare-table { width: 100%; border-collapse: collapse; font-size: 0.9rem; }
    .compare-table th, .compare-table td { padding: 0.85rem 1.25rem; border-bottom: 1px solid var(--bordure); text-align: left; }
    .compare-table th { color: var(--or); font-family: var(--serif); font-size: 0.88rem; font-weight: 400; }
    .compare-table th:first-child, .compare-table td:first-child { color: var(--texte-muted); font-size: 0.85rem; }
    .compare-table td { color: var(--texte); }
    .compare-table tr:hover td { background: rgba(255,255,255,0.012); }
    .check-yes { color: var(--or); }
    .check-no  { color: var(--texte-muted); opacity: 0.4; }

    @media(max-width:900px){
      .pricing-grid { grid-template-columns: 1fr; max-width: 480px; }
      .plan.featured { transform: none; }
    }
  </style>
</head>
<body>

<!-- NAVIGATION -->
<nav id="nav">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">Mystery<em>Forge</em></a>
    <ul class="nav-links">
      <li><a href="index.html">Accueil</a></li>
      <li><a href="generator.html">Générateur</a></li>
      <li><a href="pricing.html" class="active">Tarifs</a></li>
      <li><a href="generator.html" class="nav-cta">Essayer gratuitement →</a></li>
    </ul>
    <button class="nav-burger" aria-label="Menu" aria-expanded="false">☰</button>
  </div>
</nav>

<!-- HERO -->
<section class="hero" style="padding:12rem 0 6rem">
  <div class="container">
    <div class="hero-badge">✦ Nos formules ✦</div>
    <h1 style="font-size:clamp(2.5rem,5vw,4rem)">Choisissez votre <em>niveau d'enquête</em></h1>
    <p class="tagline" style="margin-bottom:0">De la soirée gratuite à l'abonnement professionnel. Sans engagement.</p>
  </div>
</section>

<!-- PRICING CARDS -->
<section class="section-pad" style="padding-top:3rem">
  <div class="container">
    <div class="pricing-grid">

      <!-- GRATUIT -->
      <div class="plan" data-reveal data-delay="0s">
        <div class="plan-header">
          <div class="plan-name">Curieux</div>
          <div class="plan-price">0<sub>€</sub></div>
          <div class="plan-period">Pour toujours</div>
          <div class="plan-desc">Testez le générateur sans engagement. Parfait pour une première soirée.</div>
        </div>
        <div class="plan-body">
          <ul class="plan-features">
            <li>1 génération par mois</li>
            <li>Aperçu complet en ligne</li>
            <li>4 à 6 joueurs</li>
            <li>3 univers disponibles</li>
            <li>Difficulté débutant & intermédiaire</li>
            <li class="disabled">Téléchargement PDF</li>
            <li class="disabled">Fiches personnages imprimables</li>
            <li class="disabled">Marque blanche</li>
          </ul>
          <a href="generator.html" class="plan-cta">Commencer gratuitement</a>
        </div>
      </div>

      <!-- DÉTECTIVE -->
      <div class="plan featured" data-reveal data-delay="0.1s">
        <div class="plan-badge">Le plus populaire</div>
        <div class="plan-header">
          <div class="plan-name">Détective</div>
          <div class="plan-price">6<sub>€</sub></div>
          <div class="plan-period">par scénario · ou 14€/mois illimité</div>
          <div class="plan-desc">Un scénario complet, prêt à imprimer et jouer ce soir même.</div>
        </div>
        <div class="plan-body">
          <ul class="plan-features">
            <li>Scénarios illimités (abonnement)</li>
            <li>Tous les univers & époques</li>
            <li>4 à 12 joueurs</li>
            <li>Les 3 niveaux de difficulté</li>
            <li>PDF haute qualité complet</li>
            <li>Fiches personnages format A5</li>
            <li>Cartes indices à découper</li>
            <li>Guide complet du Maître de Jeu</li>
            <li class="disabled">PDF marque blanche</li>
            <li class="disabled">API développeur</li>
          </ul>
          <a href="generator.html" class="plan-cta">Essayer 7 jours gratuit</a>
        </div>
      </div>

      <!-- ORGANISATEUR -->
      <div class="plan" data-reveal data-delay="0.2s">
        <div class="plan-header">
          <div class="plan-name">Organisateur</div>
          <div class="plan-price">29<sub>€</sub></div>
          <div class="plan-period">par mois · facturation annuelle</div>
          <div class="plan-desc">Pour les professionnels de l'événementiel et les escape games.</div>
        </div>
        <div class="plan-body">
          <ul class="plan-features">
            <li>Tout du plan Détective</li>
            <li>PDF marque blanche (votre logo)</li>
            <li>Éditeur de personnages avancé</li>
            <li>Historique & bibliothèque</li>
            <li>Export Word & impression pro</li>
            <li>Scénarios multi-actes</li>
            <li>Support prioritaire 24h</li>
            <li>API REST disponible</li>
          </ul>
          <a href="#" class="plan-cta">Contacter le commercial</a>
        </div>
      </div>

    </div>

    <p style="text-align:center;margin-top:2.5rem;font-size:0.85rem;color:var(--texte-muted)">
      Paiement sécurisé · Sans engagement · Annulation à tout moment · TVA incluse
    </p>
  </div>
</section>

<div class="stripe"></div>

<!-- TABLEAU COMPARATIF -->
<section class="section-pad" style="background:var(--encre)">
  <div class="container">
    <div style="text-align:center;margin-bottom:3.5rem">
      <span class="section-eyebrow">✦ Comparatif complet ✦</span>
      <h2 class="section-title">Ce que comprend chaque plan</h2>
    </div>
    <div style="overflow-x:auto">
      <table class="compare-table">
        <thead>
          <tr>
            <th>Fonctionnalité</th>
            <th>Curieux</th>
            <th>Détective</th>
            <th>Organisateur</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Générations / mois</td><td>1</td><td>Illimitées</td><td>Illimitées</td></tr>
          <tr><td>Nombre de joueurs</td><td>4–6</td><td>4–12</td><td>4–20</td></tr>
          <tr><td>Univers disponibles</td><td>3</td><td>Tous (11+)</td><td>Tous + personnalisé</td></tr>
          <tr><td>Niveaux de difficulté</td><td>2</td><td>3</td><td>3 + expert+</td></tr>
          <tr><td>Aperçu en ligne</td><td><span class="check-yes">✓</span></td><td><span class="check-yes">✓</span></td><td><span class="check-yes">✓</span></td></tr>
          <tr><td>PDF téléchargeable</td><td><span class="check-no">✗</span></td><td><span class="check-yes">✓</span></td><td><span class="check-yes">✓</span></td></tr>
          <tr><td>Fiches personnages A5</td><td><span class="check-no">✗</span></td><td><span class="check-yes">✓</span></td><td><span class="check-yes">✓</span></td></tr>
          <tr><td>Guide Maître de Jeu</td><td><span class="check-no">✗</span></td><td><span class="check-yes">✓</span></td><td><span class="check-yes">✓</span></td></tr>
          <tr><td>Marque blanche</td><td><span class="check-no">✗</span></td><td><span class="check-no">✗</span></td><td><span class="check-yes">✓</span></td></tr>
          <tr><td>Éditeur de personnages</td><td><span class="check-no">✗</span></td><td><span class="check-no">✗</span></td><td><span class="check-yes">✓</span></td></tr>
          <tr><td>API REST</td><td><span class="check-no">✗</span></td><td><span class="check-no">✗</span></td><td><span class="check-yes">✓</span></td></tr>
          <tr><td>Support</td><td>Email</td><td>Email + Chat</td><td>Prioritaire 24h</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<div class="stripe"></div>

<!-- FAQ -->
<section class="section-pad">
  <div class="container">
    <div style="text-align:center;margin-bottom:3.5rem">
      <span class="section-eyebrow">✦ Questions fréquentes ✦</span>
      <h2 class="section-title">Tout ce que vous voulez savoir</h2>
    </div>
    <div class="faq-list">
      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">
          Les scénarios sont-ils vraiment uniques à chaque génération ?
          <span class="faq-arrow">▼</span>
        </div>
        <div class="faq-a">Oui. Notre moteur IA génère un scénario original à chaque fois. Le combinatoire est extrêmement vaste : même en choisissant le même univers et le même nombre de joueurs, les personnages, leurs secrets, les indices et la solution seront différents.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">
          Puis-je utiliser MysteryForge pour un événement professionnel ou commercial ?
          <span class="faq-arrow">▼</span>
        </div>
        <div class="faq-a">Le plan Organisateur est conçu pour cela. Il inclut l'export marque blanche (vous pouvez apposer votre logo), des tarifs dégressifs et une API pour intégrer le générateur à votre propre plateforme ou site.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">
          Que contient exactement le PDF téléchargeable ?
          <span class="faq-arrow">▼</span>
        </div>
        <div class="faq-a">Le PDF complet comprend : le scénario narratif introductif, une fiche individuelle par personnage (format A5, imprimable et pliable), les cartes indices à découper, la chronologie visuelle de la soirée et le guide complet du Maître de Jeu avec la révélation et les conseils d'animation.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">
          Les scénarios sont-ils en français uniquement ?
          <span class="faq-arrow">▼</span>
        </div>
        <div class="faq-a">Pour l'instant, le générateur produit des scénarios en français. Une version anglaise et espagnole est prévue pour le deuxième trimestre 2026.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">
          Puis-je modifier le scénario généré ?
          <span class="faq-arrow">▼</span>
        </div>
        <div class="faq-a">Le plan Organisateur inclut un éditeur de personnages qui vous permet de modifier noms, descriptions, secrets et alibis. Pour les plans inférieurs, vous pouvez copier le texte et l'adapter librement dans votre traitement de texte.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">
          Comment annuler mon abonnement ?
          <span class="faq-arrow">▼</span>
        </div>
        <div class="faq-a">L'annulation se fait en un clic depuis votre tableau de bord. Aucun préavis requis. Vous conservez l'accès jusqu'à la fin de la période payée.</div>
      </div>
    </div>
  </div>
</section>

<!-- CTA FINAL -->
<section style="padding:6rem 0;text-align:center;border-top:1px solid var(--bordure);background:linear-gradient(135deg,rgba(139,28,28,0.1) 0%,transparent 60%)">
  <div class="container--narrow">
    <h2 class="section-title" style="margin-bottom:1rem">Prêt à forger votre première enquête ?</h2>
    <p style="color:var(--texte-muted);margin-bottom:2.5rem;font-family:var(--crimson)">Commencez gratuitement. Aucune carte bancaire requise.</p>
    <a href="generator.html" class="btn btn--gold btn--lg">Créer mon scénario gratuit →</a>
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
      <a href="#">CGU</a>
      <a href="#">Confidentialité</a>
    </div>
    <p class="footer-copy">© 2026 MysteryForge · Tous droits réservés · contact@mysteryforge.fr</p>
  </div>
</footer>

<script>
function toggleFaq(el) {
  const item = el.closest('.faq-item');
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!wasOpen) item.classList.add('open');
}
</script>
<script src="js/app.js"></script>
</body>
</html>
