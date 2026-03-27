import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: { owner: 'guineztom', name: 'Lumina' },
  },
  collections: {
    // ── ARTICLES DE BLOG ─────────────────────────────────
    articles: collection({
      label: '📝 Articles de blog',
      slugField: 'title',
      path: 'content/articles/*',
      format: { data: 'json' },
      schema: {
        title: fields.slug({ name: { label: 'Titre (SEO)' } }),
        slug: fields.text({ label: 'Slug (URL)', description: 'Ex: taplio-linkedin-2026' }),
        sectorLabel: fields.text({ label: 'Catégorie affichée' }),
        sector: fields.select({
          label: 'Secteur',
          options: [
            { label: 'Créer un site web', value: 'creation-site' },
            { label: 'Rédaction & SEO', value: 'redaction-seo' },
            { label: 'Réseaux sociaux', value: 'reseaux-sociaux' },
            { label: 'Image & Design', value: 'image-design' },
            { label: 'Vidéo & Audio', value: 'video-audio' },
            { label: 'Business & Marketing', value: 'business-marketing' },
          ],
          defaultValue: 'creation-site',
        }),
        readTime: fields.text({ label: 'Temps de lecture' }),
        date: fields.text({ label: 'Date (Ex: Avril 2026)' }),
        coverPhoto: fields.image({
          label: 'Image de couverture',
          directory: 'assets/uploads',
          publicPath: '/assets/uploads/',
        }),
        metaDescription: fields.text({ label: 'Meta description', multiline: true }),
        intro: fields.text({ label: 'Intro (chapeau)', multiline: true }),
        sections: fields.array(
          fields.object({
            title: fields.text({ label: 'Titre H2' }),
            body: fields.document({
              label: 'Contenu',
              formatting: true,
              dividers: true,
              links: true,
              images: {
                directory: 'assets/uploads',
                publicPath: '/assets/uploads/',
              },
            }),
          }),
          { itemLabel: props => props.fields.title.value || 'Nouvelle section' }
        ),
      },
    }),

    // ── FICHES OUTILS ────────────────────────────────────
    outils: collection({
      label: '🛠 Fiches outils',
      slugField: 'identifiant',
      path: 'content/outils/*',
      format: { data: 'json' },
      schema: {
        identifiant: fields.slug({ name: { label: 'ID unique (slug URL)' } }),
        name: fields.text({ label: "Nom de l'outil" }),
        tagline: fields.text({ label: 'Tagline' }),
        category: fields.text({ label: 'Catégorie' }),
        priceDetails: fields.text({ label: 'Détail du tarif' }),
        priceType: fields.select({
          label: 'Type de tarif',
          options: [
            { label: 'Gratuit', value: 'Gratuit' },
            { label: 'Freemium', value: 'Freemium' },
            { label: 'Payant', value: 'Payant' },
            { label: 'Sur devis', value: 'Sur devis' },
          ],
          defaultValue: 'Gratuit',
        }),
        logo: fields.image({
          label: 'Logo',
          directory: 'assets/uploads',
          publicPath: '/assets/uploads/',
        }),
        url: fields.text({ label: 'Lien affilié' }),
        description: fields.text({ label: 'Description', multiline: true }),
        features: fields.array(fields.text({ label: 'Fonctionnalité' }), { itemLabel: v => v }),
      },
    }),

    // ── SECTEURS ─────────────────────────────────────────
    secteurs: collection({
      label: '🗂 Secteurs',
      slugField: 'identifiant',
      path: 'content/secteurs/*',
      format: { data: 'json' },
      schema: {
        identifiant: fields.slug({ name: { label: 'ID' } }),
        label: fields.text({ label: 'Label menu' }),
        headline: fields.text({ label: 'Titre de la page' }),
        sub: fields.text({ label: 'Description', multiline: true }),
        photo: fields.image({
          label: 'Photo de couverture',
          directory: 'assets/uploads',
          publicPath: '/assets/uploads/',
        }),
      },
    }),
  },
});
