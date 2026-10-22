import { site, sheets } from '../data/site.js';

export function GET() {
  const urls = [...sheets.map((s) => s.href), '/privacy/']
    .map((href) => `  <url><loc>${new URL(href, site.domain).href}</loc></url>`)
    .join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
