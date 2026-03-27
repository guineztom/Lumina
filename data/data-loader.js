// ============================================================
// LUMINA AI — DATA LOADER
// Charge dynamiquement les fichiers JSON depuis /content/
// Remplace les anciens fichiers data/outils.js et data/blog.js
// ============================================================

// Liste des fichiers à charger (mise à jour automatique via build.js)
// NE PAS MODIFIER MANUELLEMENT — généré par npm run build

const CONTENT_MANIFEST = {
  outils: ["10web","anyword","artsmart","bookmark-ai","boomy","brandmark","cleanup-pictures","clipdrop","colossyan","copysmith","d-id","durable","elai-io","fliki","framer-ai","ghostwriter-ai","heygen","hostinger-ai","hour-one","hypefury","hypotenuse-ai","ideabuddy","ink-ai","kaiber","koala-ai","logoai","longshot-ai","looka","luma-ai","mubert","neuronwriter","nichesss","nightcafe","ocoya","outranking","peech","playground-ai","predis-ai","publer-ai","remove-bg","resemble-ai","soundraw","speechify","steve-ai","stockimg-ai","surgeograph","taplio","tweet-hunter","validator-ai","voicemod-ai","wordhero","writerzen"],
  articles: ["automatiser-publication-reseaux-sociaux-independant-2026","avatar-ia-video-sans-se-filmer-comparatif-2026","copywriting-ia-publicites-facebook-instagram-convertir-2026","creer-logo-professionnel-ia-sans-graphiste-2026","creer-site-web-independant-coach-freelance-ia-2026","creer-video-professionnelle-sans-camera-ni-montage","debuter-intelligence-artificielle-particulier-guide-2026","generer-images-ia-gratuitement-sans-abonnement-2026","idees-business-ia-particulier-independant-2026","lancer-activite-independante-outils-ia-2026","linkedin-trouver-clients-independant-strategie-ia-2026","musique-libre-droits-youtube-generateur-ia-2026","outils-ia-coachs-consultants-independants-2026","rediger-articles-blog-optimises-seo-ia-2026"],
  secteurs: ["business-marketing","creation-site","image-design","redaction-seo","reseaux-sociaux","video-audio"]
};

// ── Chargement ────────────────────────────────────────────────

async function loadJSON(path) {
  const res = await fetch(path + '?v=' + Date.now());
  if (!res.ok) throw new Error('Impossible de charger ' + path);
  return res.json();
}

async function loadAllData() {
  const [outilesData, articlesData, secteursData] = await Promise.all([
    // Charge tous les outils en parallèle
    Promise.all(
      CONTENT_MANIFEST.outils.map(id =>
        loadJSON('/content/outils/' + id + '.json').catch(() => null)
      )
    ),
    // Charge tous les articles en parallèle
    Promise.all(
      CONTENT_MANIFEST.articles.map(slug =>
        loadJSON('/content/articles/' + slug + '.json').catch(() => null)
      )
    ),
    // Charge tous les secteurs en parallèle
    Promise.all(
      CONTENT_MANIFEST.secteurs.map(id =>
        loadJSON('/content/secteurs/' + id + '.json').catch(() => null)
      )
    )
  ]);

  // Filtre les éventuels null (fichiers manquants) et trie
  window.OUTILS = outilesData.filter(Boolean);
  window.ARTICLES = articlesData.filter(Boolean).sort((a, b) => {
    // Tri par date décroissante (les plus récents d'abord)
    const months = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
    const parseDate = (d) => {
      if (!d) return 0;
      const parts = d.split(' ');
      const m = months.indexOf(parts[0]);
      const y = parseInt(parts[1]) || 2026;
      return y * 100 + m;
    };
    return parseDate(b.date) - parseDate(a.date);
  });
  window.SECTEURS = secteursData.filter(Boolean);

  // Normalise les tags (le CMS stocke [{tag:"..."}, ...] ou ["..."])
  window.OUTILS = window.OUTILS.map(o => ({
    ...o,
    tags: normalizeTags(o.tags),
    features: o.features ? normalizeTags(o.features, 'feature') : [],
    useCases: o.useCases ? normalizeTags(o.useCases, 'useCase') : []
  }));
  window.ARTICLES = window.ARTICLES.map(a => ({
    ...a,
    tags: normalizeTags(a.tags),
    sections: a.sections || []
  }));
}

// Le CMS Decap sauvegarde les listes en [{tag:"valeur"}] ou ["valeur"]
// Cette fonction normalise les deux formats
function normalizeTags(arr, key = 'tag') {
  if (!arr || !Array.isArray(arr)) return [];
  return arr.map(item => {
    if (typeof item === 'string') return item;
    if (typeof item === 'object' && item[key]) return item[key];
    return String(item);
  });
}

// ── Mise à jour du manifest (appelée après un deploy) ─────────

// Lorsque vous ajoutez un outil ou article via l'admin CMS,
// le build.js met à jour automatiquement CONTENT_MANIFEST ci-dessus.
// Voir la section "Déploiement" du README.
