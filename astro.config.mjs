import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

const repository = process.env.GITHUB_REPOSITORY;
const [owner, repositoryName] = repository?.split('/') ?? [];
const isUserSite = repositoryName === `${owner}.github.io`;
const inferredSite = owner ? `https://${owner}.github.io` : 'https://example.com';
const inferredBase = repositoryName && !isUserSite ? `/${repositoryName}` : '/';

export default defineConfig({
  output: 'static',
  site: process.env.SITE_URL ?? inferredSite,
  base: process.env.BASE_PATH ?? inferredBase,
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
