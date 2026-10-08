import type { APIRoute } from 'astro';
import { withBasePath } from '@/lib/urls';

export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL('https://example.com');
  const sitemap = new URL(withBasePath('sitemap-index.xml'), origin);
  return new Response(`User-agent: *\nAllow: /\nSitemap: ${sitemap.href}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
