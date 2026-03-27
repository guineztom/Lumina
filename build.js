#!/usr/bin/env node
// ============================================================
// LUMINA AI — Script de build (compatible Tina CMS)
// Scanne /content/ et met à jour le manifest dans data-loader.js
// Appelé par : tinacms build && node build.js
// ============================================================

const fs = require('fs');
const path = require('path');

const CONTENT_DIR = path.join(__dirname, 'content');
const LOADER_PATH = path.join(__dirname, 'data', 'data-loader.js');

function getFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.json'))
    .map(f => path.basename(f, '.json'))
    .sort();
}

const outils   = getFiles(path.join(CONTENT_DIR, 'outils'));
const articles = getFiles(path.join(CONTENT_DIR, 'articles'));
const secteurs = getFiles(path.join(CONTENT_DIR, 'secteurs'));

console.log(`📦 Build Lumina AI`);
console.log(`   ✓ ${outils.length} outils`);
console.log(`   ✓ ${articles.length} articles`);
console.log(`   ✓ ${secteurs.length} secteurs`);

// Mettre à jour le manifest dans data-loader.js
let loader = fs.readFileSync(LOADER_PATH, 'utf8');

const newManifest = `const CONTENT_MANIFEST = {
  outils: ${JSON.stringify(outils)},
  articles: ${JSON.stringify(articles)},
  secteurs: ${JSON.stringify(secteurs)}
};`;

loader = loader.replace(
  /const CONTENT_MANIFEST = \{[\s\S]*?\};/,
  newManifest
);

fs.writeFileSync(LOADER_PATH, loader);
console.log(`   ✓ Manifest mis à jour`);

// Régénérer sitemap.xml
const SITE_URL = 'https://lumina2.pages.dev';
const today = new Date().toISOString().split('T')[0];

const staticPages = [
  { loc: '/', priority: '1.0', changefreq: 'weekly' },
  { loc: '/#outils', priority: '0.9', changefreq: 'weekly' },
  { loc: '/#blog', priority: '0.9', changefreq: 'daily' },
  { loc: '/#contact', priority: '0.5', changefreq: 'monthly' },
  { loc: '/#qui-sommes-nous', priority: '0.4', changefreq: 'monthly' },
];

let sitemapUrls = staticPages.map(p => `
  <url>
    <loc>${SITE_URL}${p.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`);

articles.forEach(slug => sitemapUrls.push(`
  <url>
    <loc>${SITE_URL}/#article/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`));

outils.forEach(id => sitemapUrls.push(`
  <url>
    <loc>${SITE_URL}/#tool/${id}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`));

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sitemapUrls.join('')}
</urlset>`;

fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), sitemapXml);
console.log(`   ✓ Sitemap mis à jour (${staticPages.length + articles.length + outils.length} URLs)`);
console.log(`✅ Build terminé`);
