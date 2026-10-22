import { site } from '../data/site.js';

export function GET() {
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap.xml', site.domain).href}\n`, {
    headers: { 'Content-Type': 'text/plain' },
  });
}
