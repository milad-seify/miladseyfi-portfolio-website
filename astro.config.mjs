import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

const repository = process.env.GITHUB_REPOSITORY;
const [owner, repositoryName] = repository?.split('/') ?? [];
const isUserSite = repositoryName === `${owner}.github.io`;
const inferredSite = owner ? `https://${owner}.github.io` : 'https://example.com';
const inferredBase = repositoryName && !isUserSite ? `/${repositoryName}` : '/';
const configuredSite = process.env.SITE_URL?.trim() || undefined;
const configuredBase = process.env.BASE_PATH?.trim() || undefined;

export default defineConfig({
  output: 'static',
  site: configuredSite ?? inferredSite,
  base: configuredBase ?? (configuredSite ? '/' : inferredBase),
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
