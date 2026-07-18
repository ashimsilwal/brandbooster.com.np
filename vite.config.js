import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { writeFileSync, readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function dynamicSitemapPlugin() {
  return {
    name: 'dynamic-sitemap',
    buildStart() {
      try {
        const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://brandbooster.com.np/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

        const sitemapPath = path.resolve(__dirname, 'public/sitemap.xml');
        writeFileSync(sitemapPath, sitemapXml, 'utf8');
        console.log('Dynamic sitemap.xml generated successfully at buildStart!');
      } catch (err) {
        console.error('Error generating dynamic sitemap:', err);
      }
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), dynamicSitemapPlugin()],
  server: {
    port: 5174,
    open: true,
  },
  build: {
    modulePreload: {
      resolveDependencies: () => []
    },
    chunkSizeWarningLimit: 800
  }
});
