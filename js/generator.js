/* ============================================
   MYSTERYFORGE — generator.js
   Moteur IA ultra-puissant (Anthropic API)
   ============================================ */

(function () {
  'use strict';

  /* =========================================================
     ÉTAT DE L'APPLICATION
  ========================================================= */
  const state = {
    isGenerating: false,
    currentScenario: null,
    config: {},
  };

  /* =========================================================
     RÉFÉRENCE DOM
  ========================================================= */
  const $ = id => document.getElementById(id);

  /* =========================================================
     PROMPT SYSTÈME — LE VRAI MOTEUR
  ========================================================= */
  function buildPrompt(cfg) {
    const extras = cfg.extras.length > 0 ? cfg.extras.join(', ') : 'aucune option spéciale';

    return `Tu es un auteur de romans policiers et de jeux de rôle de haut niveau. Tu génères des scénarios de "murder mystery" (soirée meurtre) en français, complets, cohérents, dramatiques et immédiatement jouables.

PARAMÈTRES DE LA PARTIE :
- Nombre de joueurs : ${cfg.joueurs} (inclut la victime — donc ${cfg.joueurs} personnages, dont 1 victime et 1 coupable)
- Univers / Époque : ${cfg.univers}
- Niveau de difficulté : ${cfg.difficulte}
- Durée estimée de jeu : ${cfg.duree}
- Ton général : ${cfg.ton}
- Éléments spéciaux demandés : ${extras}

RÈGLES ABSOLUES :
1. Le JSON doit être valide, sans backticks, sans commentaire, sans texte avant ou après.
2. Tu génères EXACTEMENT ${cfg.joueurs} personnages dans le tableau "personnages" (victime incluse).
3. Le coupable est l'un des personnages listés dans "personnages". Son nom doit correspondre EXACTEMENT à ce qui est dans "revelation.coupable_nom".
4. Chaque personnage a un mobile crédible MAIS un seul est réellement coupable.
5. Les indices sont CONCRETS, trouvables dans le décor, pas abstraits.
6. Le niveau de difficulté "${cfg.difficulte}" se traduit par :
   - Débutant : indices directs, 1 seule fausse piste, mobiles clairs
   - Intermédiaire : 2-3 fausses pistes, alibis contradictoires, indices ambigus
   - Expert : mobiles croisés, alibi du coupable presque parfait, red herrings multiples, twist final
7. La chronologie doit être cohérente (heure du crime logique par rapport aux alibis).
8. Chaque personnage a un secret INDÉPENDANT du meurtre (scandale privé, liaison, dette, etc.).

STRUCTURE JSON EXACTE À RETOURNER :

{
  "titre": "Titre dramatique et évocateur du scénario",
  "sous_titre": "Une courte accroche en italique (slogan du scénario)",
  "lieu": "Lieu précis et évocateur (ex: Manoir des Ombrages, Bourgogne, 1923)",
  "epoque": "Période exacte (ex: Novembre 1923)",
  "duree_estimee": "${cfg.duree}",
  "synopsis": "Résumé captivant en 4-5 phrases. Plante le décor, présente l'atmosphère, annonce le meurtre sans révéler le coupable. Style romanesque.",
  "ambiance": "Description immersive du lieu et de l'atmosphère pour introduire la soirée (2-3 phrases, style littéraire).",
  "victime": {
    "nom": "Prénom Nom",
    "titre": "Fonction ou titre social",
    "description": "Portrait physique et psychologique en 2-3 phrases.",
    "cause_deces": "Cause exacte de la mort",
    "heure_deces": "HH:MM",
    "lieu_decouverte": "Endroit précis où le corps est découvert",
    "dernieres_paroles_connues": "Dernières paroles rapportées par un témoin (peut être un indice)"
  },
  "personnages": [
    {
      "nom": "Prénom Nom",
      "age": 42,
      "titre": "Fonction ou titre social",
      "description": "Portrait physique saisissant en 1-2 phrases.",
      "personnalite": "Traits de caractère distinctifs, manies, façon de parler en 2 phrases.",
      "lien_victime": "Nature du lien avec la victime (ami, rival, amant, employé, etc.)",
      "mobile": "Mobile crédible pour vouloir tuer la victime (1-2 phrases).",
      "alibi": "Alibi fourni par ce personnage pour l'heure du crime. Peut être vérifiable ou non.",
      "alibi_verite": "La vérité derrière l'alibi (pour le MJ) — vrai, faux, ou partiel.",
      "secret": "Secret personnel sans rapport direct avec le meurtre. Compromettant mais pas mortel.",
      "objet_personnel": "Un objet distinctif que ce personnage possède ou a sur lui.",
      "indice_cache": "Information que ce personnage cache sur la victime ou un autre suspect (pour le MJ)."
    }
  ],
  "timeline": [
    {
      "heure": "19:00",
      "evenement": "Description de ce qui se passe à cette heure. Qui est où, que fait-on.",
      "importance": "normale"
    },
    {
      "heure": "21:30",
      "evenement": "Heure cruciale : quelque chose d'important se produit.",
      "importance": "haute"
    },
    {
      "heure": "22:15",
      "evenement": "Heure du crime ou découverte du corps.",
      "importance": "critique"
    }
  ],
  "indices": [
    {
      "id": 1,
      "titre": "Nom court de l'indice",
      "lieu": "Endroit précis où il se trouve (ex: tiroir du bureau de la bibliothèque)",
      "description": "Description concrète de l'objet ou de l'information.",
      "signification": "Ce que cet indice révèle ou sous-entend (pour le MJ).",
      "red_herring": false,
      "pointe_vers": "Nom du personnage concerné par cet indice"
    }
  ],
  "sous_intrigues": [
    {
      "titre": "Nom de la sous-intrigue",
      "description": "Situation parallèle impliquant 2-3 personnages. Crée de la tension sans lien direct avec le meurtre.",
      "personnages_impliques": ["Nom A", "Nom B"]
    }
  ],
  "revelation": {
    "coupable_nom": "Prénom Nom (doit correspondre exactement à un personnage)",
    "methode": "Description précise de la méthode du meurtre.",
    "sequence_exacte": "Récit chronologique de ce qui s'est réellement passé, du point de vue du coupable.",
    "deduction_logique": "Comment les détectives arrivent à la solution : enchaînement logique des indices qui pointent vers le coupable (3-5 étapes numérotées).",
    "aveu_possible": "Ce que le coupable pourrait dire si confronté avec les preuves.",
    "twist": "${cfg.extras.includes('Twist final inattendu') ? 'Révélez le twist ici — une information cachée qui recontextualise tout le scénario.' : 'Aucun twist particulier.'}"
  },
  "conseils_mj": [
    "Conseil pratique pour le maître de jeu, spécifique à ce scénario.",
    "Deuxième conseil : comment gérer un moment-clé de la soirée.",
    "Troisième conseil : comment animer les personnages pour maximiser le suspense."
  ]
}

Génère maintenant un scénario complet, original et immédiatement jouable. Varie les noms, les personnalités, les mobiles. Sois dramatique et précis. Génère ${cfg.joueurs} personnages exactement.`;
  }

  /* =========================================================
     APPEL API ANTHROPIC
  ========================================================= */
  async function callClaude(prompt) {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 6000,
        messages: [{ role: 'user', content: prompt }],
      }),
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err.error?.message || `Erreur API (${response.status})`);
    }

    const data = await response.json();
    const raw  = data.content?.[0]?.text || '';

    // Nettoyage : supprimer backticks éventuels
    const clean = raw.replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/i, '').trim();

    try {
      return JSON.parse(clean);
    } catch {
      // Tentative de récupération : extraire le premier objet JSON
      const match = clean.match(/\{[\s\S]*\}/);
      if (match) return JSON.parse(match[0]);
      throw new Error('La réponse IA n\'est pas un JSON valide. Réessayez.');
    }
  }

  /* =========================================================
     LECTURE DE LA CONFIG DEPUIS LE FORMULAIRE
  ========================================================= */
  function readConfig() {
    const get    = id => $$(id)?.value || '';
    const getInt = id => parseInt($$(id)?.value || 6);

    // Extras : tags cochés
    const extras = [];
    document.querySelectorAll('.tag.active').forEach(t => extras.push(t.dataset.value));

    return {
      joueurs:   getInt('nb-joueurs'),
      univers:   get('univers'),
      difficulte: get('difficulte'),
      duree:     get('duree'),
      ton:       get('ton'),
      extras,
    };
  }

  function $$(id) { return document.getElementById(id); }

  /* =========================================================
     RENDU HTML DU SCÉNARIO
  ========================================================= */
  function renderTimeline(timeline) {
    if (!timeline?.length) return '';
    return `
      <div class="output-block">
        <div class="output-label">Chronologie de la soirée</div>
        <ul class="timeline-list">
          ${timeline.map(e => `
            <li class="timeline-item">
              <span class="timeline-heure">${e.heure || ''}</span>
              <span class="timeline-dot" style="${e.importance === 'critique' ? 'background:var(--rouge-vif)' : e.importance === 'haute' ? 'background:var(--or)' : ''}"></span>
              <span class="timeline-txt">${e.evenement || ''}</span>
            </li>
          `).join('')}
        </ul>
      </div>`;
  }

  function renderIndices(indices) {
    if (!indices?.length) return '';
    return `
      <div class="output-block">
        <div class="output-label">Indices à découvrir</div>
        <ul class="indices-list">
          ${indices.map((ind, i) => `
            <li class="indice-item${ind.red_herring ? ' red-herring' : ''}">
              <span class="indice-num">${String(i + 1).padStart(2, '0')}</span>
              <div class="indice-body">
                <div class="indice-titre">${ind.titre || ''} ${ind.red_herring ? '<em style="font-size:0.72rem;color:var(--rouge);font-style:normal;letter-spacing:0.12em;text-transform:uppercase;">[Fausse piste]</em>' : ''}</div>
                <div class="indice-lieu">📍 ${ind.lieu || ''}</div>
                <div class="indice-desc">${ind.description || ''}</div>
                <div class="indice-gm">✦ MJ : ${ind.signification || ''} — Pointe vers : ${ind.pointe_vers || '?'}</div>
              </div>
            </li>
          `).join('')}
        </ul>
      </div>`;
  }

  function renderPersonnages(personnages, victimeNom, coupableNom) {
    if (!personnages?.length) return '';
    return `
      <div class="output-block">
        <div class="output-label">Les personnages</div>
        <div class="perso-grid">
          ${personnages.map(p => {
            const isVictime  = p.nom === victimeNom;
            const isCoupable = p.nom === coupableNom;
            return `
              <div class="perso-card${isVictime ? ' victime' : isCoupable ? ' coupable' : ''}">
                ${isVictime  ? '<span class="perso-badge victime">Victime</span>'  : ''}
                ${isCoupable ? '<span class="perso-badge coupable">⚠ Coupable (MJ)</span>' : ''}
                <div class="perso-nom">${p.nom || ''}</div>
                <div class="perso-role">${p.titre || ''}${p.age ? ` · ${p.age} ans` : ''}</div>
                <div class="perso-desc">${p.description || ''}</div>
                <div class="perso-section"><strong>Personnalité</strong>${p.personnalite || ''}</div>
                <div class="perso-section"><strong>Lien avec la victime</strong>${p.lien_victime || ''}</div>
                <div class="perso-section"><strong>Mobile</strong>${p.mobile || ''}</div>
                <div class="perso-section"><strong>Alibi déclaré</strong>${p.alibi || ''}</div>
                <div class="perso-section"><strong>Objet distinctif</strong>${p.objet_personnel || ''}</div>
                <div class="perso-secret">${p.secret || ''}</div>
                ${p.alibi_verite ? `<div style="font-size:0.8rem;color:rgba(201,168,76,0.7);font-style:italic;margin-top:0.35rem">✦ Vérité alibi (MJ) : ${p.alibi_verite}</div>` : ''}
                ${p.indice_cache ? `<div style="font-size:0.8rem;color:rgba(201,168,76,0.7);font-style:italic;margin-top:0.2rem">✦ Info cachée (MJ) : ${p.indice_cache}</div>` : ''}
              </div>`;
          }).join('')}
        </div>
      </div>`;
  }

  function renderSousIntrigues(sousIntrigues) {
    if (!sousIntrigues?.length) return '';
    return `
      <div class="output-block">
        <div class="output-label">Sous-intrigues</div>
        <div style="display:flex;flex-direction:column;gap:0.75rem;">
          ${sousIntrigues.map(si => `
            <div style="border:1px solid var(--bordure);padding:1.25rem;background:rgba(255,255,255,0.015);">
              <div style="font-family:var(--serif);font-size:1rem;color:var(--parchemin);margin-bottom:0.4rem">${si.titre || ''}</div>
              <div style="font-size:0.9rem;color:var(--texte-muted);margin-bottom:0.4rem">${si.description || ''}</div>
              <div style="font-size:0.75rem;color:var(--or);letter-spacing:0.12em;text-transform:uppercase">Implique : ${(si.personnages_impliques || []).join(', ')}</div>
            </div>
          `).join('')}
        </div>
      </div>`;
  }

  function renderScenario(s) {
    const victimeNom  = s.victime?.nom  || '';
    const coupableNom = s.revelation?.coupable_nom || '';

    return `
      <div class="scenario-out">

        <!-- EN-TÊTE -->
        <div class="scenario-masthead">
          <div class="scenario-lieu">✦ ${s.lieu || ''} · ${s.epoque || ''} ✦</div>
          <h2 class="scenario-nom">${s.titre || 'Sans titre'}</h2>
          ${s.sous_titre ? `<p style="font-style:italic;color:var(--texte-muted);margin-bottom:1.5rem;">"${s.sous_titre}"</p>` : ''}
          ${s.ambiance ? `<p style="font-size:0.92rem;color:var(--texte-muted);font-style:italic;font-family:var(--crimson);max-width:620px;margin:0 auto 1.5rem">${s.ambiance}</p>` : ''}
          <div class="scenario-synopsis">${s.synopsis || ''}</div>
        </div>

        <!-- CRIME -->
        <div class="output-block">
          <div class="output-label">Le Crime</div>
          <div class="crime-box">
            <div class="crime-item"><strong>Victime</strong><span>${s.victime?.nom || ''} — ${s.victime?.titre || ''}</span></div>
            <div class="crime-item"><strong>Cause du décès</strong><span>${s.victime?.cause_deces || ''}</span></div>
            <div class="crime-item"><strong>Heure estimée</strong><span>${s.victime?.heure_deces || ''}</span></div>
            <div class="crime-item"><strong>Lieu de découverte</strong><span>${s.victime?.lieu_decouverte || ''}</span></div>
            <div class="crime-item" style="grid-column:1/-1"><strong>Portrait de la victime</strong><span>${s.victime?.description || ''}</span></div>
            ${s.victime?.dernieres_paroles_connues ? `<div class="crime-item" style="grid-column:1/-1"><strong>Dernières paroles</strong><span style="font-style:italic">"${s.victime.dernieres_paroles_connues}"</span></div>` : ''}
          </div>
        </div>

        <!-- PERSONNAGES -->
        ${renderPersonnages(s.personnages, victimeNom, coupableNom)}

        <!-- TIMELINE -->
        ${renderTimeline(s.timeline)}

        <!-- INDICES -->
        ${renderIndices(s.indices)}

        <!-- SOUS-INTRIGUES -->
        ${renderSousIntrigues(s.sous_intrigues)}

        <!-- RÉVÉLATION (MJ) -->
        <div class="output-block">
          <div class="output-label">Révélation Finale</div>
          <div class="revelation-wrap">
            <div class="revelation-warn">⚠ Dossier confidentiel — Réservé au Maître de Jeu · Ne pas révéler avant la fin ⚠</div>
            <div class="revelation-txt">
              <p style="margin-bottom:1rem"><strong style="color:var(--rouge-vif)">Coupable :</strong> ${s.revelation?.coupable_nom || ''}</p>
              <p style="margin-bottom:1rem"><strong style="color:var(--or)">Méthode :</strong> ${s.revelation?.methode || ''}</p>
              <p style="margin-bottom:1.25rem">${s.revelation?.sequence_exacte || ''}</p>
              ${s.revelation?.deduction_logique ? `
              <div style="border-top:1px solid rgba(139,28,28,0.25);padding-top:1rem;margin-top:0.5rem">
                <strong style="color:var(--or);font-size:0.78rem;letter-spacing:0.18em;text-transform:uppercase;display:block;margin-bottom:0.75rem">Chemin de déduction pour les joueurs</strong>
                <p style="white-space:pre-line;font-size:0.92rem;color:var(--texte-muted)">${s.revelation.deduction_logique}</p>
              </div>` : ''}
              ${s.revelation?.aveu_possible ? `<div class="revelation-mobile"><strong>Aveu possible :</strong> "${s.revelation.aveu_possible}"</div>` : ''}
              ${s.revelation?.twist && s.revelation.twist !== 'Aucun twist particulier.' ? `<div style="margin-top:1rem;padding:1rem;border:1px solid rgba(201,168,76,0.3);background:rgba(201,168,76,0.04);font-style:italic;color:var(--or)">🎭 Twist : ${s.revelation.twist}</div>` : ''}
            </div>
          </div>
        </div>

        <!-- CONSEILS MJ -->
        ${s.conseils_mj?.length ? `
        <div class="output-block">
          <div class="output-label">Conseils pour le Maître de Jeu</div>
          <ul style="list-style:none;display:flex;flex-direction:column;gap:0.65rem;">
            ${s.conseils_mj.map((c, i) => `
              <li style="display:flex;gap:0.75rem;font-size:0.92rem;color:var(--texte-muted)">
                <span style="color:var(--or);font-family:var(--serif);font-size:1.1rem;flex-shrink:0">${i + 1}.</span>
                <span>${c}</span>
              </li>
            `).join('')}
          </ul>
        </div>` : ''}

        <!-- ACTIONS -->
        <div class="output-actions">
          <button class="btn-act btn-act-gold" onclick="window.MF.paywall()">⬇ Télécharger PDF complet — 6€</button>
          <button class="btn-act" onclick="window.MF.regenerate()">↺ Régénérer ce scénario</button>
          <button class="btn-act" onclick="window.MF.printMode()">⎙ Mode impression</button>
          <button class="btn-act" onclick="window.MF.copyText()">⎘ Copier le texte</button>
        </div>
      </div>`;
  }

  /* =========================================================
     ORCHESTRATION PRINCIPALE
  ========================================================= */
  async function generate() {
    if (state.isGenerating) return;

    const cfg = readConfig();
    state.config = cfg;
    state.isGenerating = true;

    // Mise à jour UI
    const btn    = $('btn-generate');
    const panel  = $('output-panel');
    const steps  = document.querySelectorAll('.progress-step');

    btn.disabled = true;
    btn.textContent = '⏳ Génération…';

    // Étape 1
    panel.innerHTML = `
      <div style="text-align:center;padding:4rem 2rem;">
        <p class="loading-text">L'IA forge votre intrigue…</p>
        <div class="spinner"></div>
        <p class="loading-sub">Création des personnages, mobiles, indices et révélation</p>
      </div>`;

    steps.forEach((s, i) => s.classList.toggle('active', i === 0));

    try {
      const prompt   = buildPrompt(cfg);
      const scenario = await callClaude(prompt);
      state.currentScenario = scenario;

      // Étape 2 — rendu
      steps.forEach((s, i) => s.classList.toggle('active', i === 1));
      panel.innerHTML = renderScenario(scenario);

      // Scroll vers le résultat
      setTimeout(() => panel.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);

      // Done
      steps.forEach(s => { s.classList.remove('active'); s.classList.add('done'); });

    } catch (err) {
      panel.innerHTML = `
        <div style="text-align:center;padding:4rem 2rem;border:1px dashed rgba(139,28,28,0.4);">
          <p style="color:var(--rouge-vif);font-family:var(--serif);font-size:1.2rem;margin-bottom:0.75rem">Une erreur est survenue</p>
          <p style="color:var(--texte-muted);font-size:0.92rem;margin-bottom:1.5rem">${err.message}</p>
          <button class="btn btn--outline" onclick="window.MF.generate()">Réessayer</button>
        </div>`;
      console.error('[MysteryForge]', err);
    }

    state.isGenerating = false;
    btn.disabled = false;
    btn.textContent = '⚡ Forger le mystère';
  }

  /* =========================================================
     API PUBLIQUE
  ========================================================= */
  window.MF = {
    generate,
    regenerate: generate,
    paywall() {
      alert('Fonctionnalité réservée aux abonnés.\n\nAchetez ce scénario pour 6€ et recevez :\n• PDF complet haute qualité\n• Fiches personnages imprimables A5\n• Cartes indices à découper\n• Guide du maître de jeu détaillé');
    },
    printMode() {
      window.print();
    },
    copyText() {
      const panel = $('output-panel');
      if (!panel) return;
      navigator.clipboard.writeText(panel.innerText)
        .then(() => alert('Scénario copié dans le presse-papiers !'))
        .catch(() => alert('Copie non supportée dans ce navigateur.'));
    },
  };

  /* =========================================================
     INIT FORMULAIRE
  ========================================================= */
  document.addEventListener('DOMContentLoaded', () => {
    // Slider nb joueurs
    const slider = $('nb-joueurs');
    const val    = $('nb-joueurs-val');
    if (slider && val) {
      slider.addEventListener('input', () => { val.textContent = slider.value; });
    }

    // Tags extras
    document.querySelectorAll('.tag').forEach(tag => {
      tag.addEventListener('click', () => tag.classList.toggle('active'));
    });

    // Btn générer
    const btn = $('btn-generate');
    if (btn) btn.addEventListener('click', generate);
  });
})();
