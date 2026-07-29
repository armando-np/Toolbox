import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const base = site || new URL('https://toolbox.armando-nupa.workers.dev');
  return new Response(`User-agent: *\nAllow: /\nDisallow: /buscar/\n\nSitemap: ${new URL('sitemap-index.xml', base).href}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  });
};
