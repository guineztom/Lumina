import { defineConfig } from "tinacms";

// ============================================================
// TINA CMS — Configuration Lumina AI
// Repo : guineztom/Lumina2
// ============================================================

export default defineConfig({
  // ── Connexion Tina Cloud ──────────────────────────────────
  // clientId et token sont générés sur app.tina.io
  // À remplir après inscription (voir README)
  clientId: process.env.TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",

  branch:
    process.env.GITHUB_BRANCH ||
    process.env.VERCEL_GIT_COMMIT_REF ||
    process.env.HEAD ||
    "main",

  build: {
    outputFolder: "admin",   // l'admin sera sur /admin comme avant
    publicFolder: ".",       // racine du projet statique
  },

  media: {
    tina: {
      mediaRoot: "assets/uploads",
      publicFolder: ".",
    },
  },

  // ── Collections ──────────────────────────────────────────
  schema: {
    collections: [

      // ── ARTICLES DE BLOG ─────────────────────────────────
      {
        name: "articles",
        label: "📝 Articles de blog",
        path: "content/articles",
        format: "json",
        ui: {
          filename: {
            slugify: (values) => values?.slug || "nouvel-article",
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titre (SEO)",
            isTitle: true,
            required: true,
            ui: {
              description: "Inclure le mot-clé principal. Ex : Taplio en 2026 : comment développer son audience LinkedIn",
            },
          },
          {
            type: "string",
            name: "slug",
            label: "Slug (URL)",
            required: true,
            ui: {
              description: "Sans espaces ni accents. Ex : taplio-linkedin-2026",
            },
          },
          {
            type: "string",
            name: "sectorLabel",
            label: "Catégorie affichée",
            ui: { description: "Ex : Guide pratique, Avis outil, Comparatif" },
          },
          {
            type: "string",
            name: "sector",
            label: "Secteur",
            options: [
              { label: "Créer un site web", value: "creation-site" },
              { label: "Rédaction & SEO", value: "redaction-seo" },
              { label: "Réseaux sociaux", value: "reseaux-sociaux" },
              { label: "Image & Design", value: "image-design" },
              { label: "Vidéo & Audio", value: "video-audio" },
              { label: "Business & Marketing", value: "business-marketing" },
            ],
          },
          {
            type: "string",
            name: "readTime",
            label: "Temps de lecture",
            ui: { description: "Ex : 8 min de lecture" },
          },
          {
            type: "string",
            name: "date",
            label: "Date",
            ui: { description: "Ex : Avril 2026" },
          },
          {
            type: "image",
            name: "coverPhoto",
            label: "Image de couverture",
            ui: {
              description: "Uploadez une image ou collez une URL Unsplash",
            },
          },
          {
            type: "string",
            name: "coverAlt",
            label: "Alt text image (SEO)",
            ui: { description: "Description de l'image avec mot-clé pour Google Images" },
          },
          {
            type: "string",
            name: "metaDescription",
            label: "Meta description (SEO)",
            ui: {
              component: "textarea",
              description: "155 caractères max avec mot-clé principal",
            },
          },
          {
            type: "string",
            name: "keywordTarget",
            label: "Mot-clé cible",
            ui: { description: "Ex : Taplio LinkedIn indépendant 2026" },
          },
          {
            type: "string",
            name: "intro",
            label: "Intro (chapeau)",
            ui: {
              component: "textarea",
              description: "2-3 phrases d'accroche, ton direct et personnel",
            },
          },
          {
            type: "string",
            name: "pullQuote",
            label: "Citation forte",
            ui: { description: "Optionnel — une phrase marquante entre guillemets" },
          },
          // ── Sections : éditeur riche avec images ────────
          {
            type: "object",
            name: "sections",
            label: "Sections de l'article",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.title || "Nouvelle section" }),
              defaultItem: { title: "", body: "" },
            },
            fields: [
              {
                type: "string",
                name: "title",
                label: "Titre H2",
                ui: { description: "Intégrer un mot-clé secondaire si possible" },
              },
              {
                type: "rich-text",   // ← éditeur riche : images, gras, listes, liens
                name: "body",
                label: "Contenu",
                ui: { description: "Éditeur visuel — insérez du texte, des images, des listes" },
              },
            ],
          },
          // ── Blocs optionnels ────────────────────────────
          {
            type: "object",
            name: "faq",
            label: "FAQ (optionnel)",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.question || "Question" }),
            },
            fields: [
              { type: "string", name: "question", label: "Question" },
              { type: "string", name: "answer", label: "Réponse", ui: { component: "textarea" } },
            ],
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
            ui: { description: "Ex : #LinkedIn" },
          },
        ],
      },

      // ── FICHES OUTILS ────────────────────────────────────
      {
        name: "outils",
        label: "🛠 Fiches outils",
        path: "content/outils",
        format: "json",
        ui: {
          filename: {
            slugify: (values) => values?.id || "nouvel-outil",
          },
        },
        fields: [
          {
            type: "string",
            name: "id",
            label: "ID unique (slug URL)",
            isTitle: true,
            required: true,
            ui: { description: "Ex : heygen, koala-ai, durable" },
          },
          { type: "string", name: "name", label: "Nom de l'outil", required: true },
          {
            type: "string",
            name: "tagline",
            label: "Tagline",
            ui: { description: "Une phrase percutante" },
          },
          {
            type: "string",
            name: "category",
            label: "Catégorie",
            options: [
              "website-builder", "seo-writing", "social-media", "branding",
              "image-gen", "image-editing", "video-avatar", "video-gen",
              "video-editing", "audio", "copywriting", "business-ideas",
              "business-planning", "3d-video",
            ],
          },
          {
            type: "string",
            name: "sector",
            label: "Secteurs",
            list: true,
            options: [
              { label: "Créer un site web", value: "creation-site" },
              { label: "Rédaction & SEO", value: "redaction-seo" },
              { label: "Réseaux sociaux", value: "reseaux-sociaux" },
              { label: "Image & Design", value: "image-design" },
              { label: "Vidéo & Audio", value: "video-audio" },
              { label: "Business & Marketing", value: "business-marketing" },
            ],
          },
          {
            type: "string",
            name: "priceDetails",
            label: "Détail du tarif",
            ui: { description: "Ex : Gratuit / 29 $/mois (Pro)" },
          },
          {
            type: "string",
            name: "priceType",
            label: "Type de tarif",
            options: ["Gratuit", "Freemium", "Payant", "Sur devis"],
          },
          {
            type: "string",
            name: "badge",
            label: "Badge",
            options: [
              { label: "Aucun", value: "" },
              { label: "Best value", value: "best" },
              { label: "Nouveau", value: "new" },
              { label: "API ready", value: "api" },
            ],
          },
          { type: "string", name: "badgeLabel", label: "Label du badge" },
          { type: "boolean", name: "apiReady", label: "API disponible" },
          {
            type: "image",
            name: "logo",
            label: "Logo",
            ui: { description: "Uploadez ou collez une URL (ex: https://logo.clearbit.com/heygen.com)" },
          },
          {
            type: "string",
            name: "url",
            label: "Lien affilié",
            ui: { description: "Remplacez # par votre lien affilié" },
          },
          { type: "string", name: "tags", label: "Tags", list: true },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: { component: "textarea", description: "3-4 phrases : ce que fait l'outil, pour qui" },
          },
          { type: "string", name: "features", label: "Fonctionnalités clés", list: true },
          { type: "string", name: "useCases", label: "Pour qui ?", list: true },
        ],
      },

      // ── SECTEURS ─────────────────────────────────────────
      {
        name: "secteurs",
        label: "🗂 Secteurs",
        path: "content/secteurs",
        format: "json",
        fields: [
          { type: "string", name: "id", label: "ID", isTitle: true },
          { type: "string", name: "label", label: "Label menu" },
          { type: "string", name: "headline", label: "Titre de la page" },
          { type: "string", name: "sub", label: "Description", ui: { component: "textarea" } },
          { type: "image", name: "photo", label: "Photo de couverture" },
        ],
      },
    ],
  },
});
