import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

const productionSite = 'https://miladseyfi.ir';
const configuredSite = process.env.SITE_URL?.trim() || undefined;
const configuredBase = process.env.BASE_PATH?.trim() || undefined;

export default defineConfig({
  output: 'static',
  site: configuredSite ?? productionSite,
  base: configuredBase ?? '/',
  i18n: {
    defaultLocale: 'fa',
    locales: ['fa', 'en'],
    routing: { prefixDefaultLocale: false, redirectToDefaultLocale: false },
  },
  integrations: [sitemap({ i18n: { defaultLocale: 'fa', locales: { fa: 'fa-IR', en: 'en-US' } } })],
  vite: { plugins: [tailwindcss()] },
});
