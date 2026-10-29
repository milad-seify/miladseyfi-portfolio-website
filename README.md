# Portfolio Starter

Reusable bilingual portfolio and résumé starter built with Astro 7, strict TypeScript, Tailwind CSS 4, static GitHub Pages deployment, and a Git-backed Sveltia CMS.

This branch intentionally contains **sample content only**. Replace the identity, career history, projects, profile copy, social links, imagery, deployment domain, and CMS repository target before publishing a real site.

## What is reusable

- Persian-first `/` and English `/en/` routes with RTL/LTR handling
- static Astro architecture with no framework hydration
- light/dark theme preference
- responsive portfolio sections and case-study routes
- résumé page plus generated PDF workflow
- GitHub Pages CI/deploy
- Sveltia CMS for professional content
- native project and writing collections
- SEO, sitemap, canonical URLs, JSON-LD, robots, and social metadata
- accessible keyboard/focus/reduced-motion behavior

## Start a new portfolio

1. Create a new repository from this branch/template.
2. Replace `OWNER/REPOSITORY` in `public/admin/config.yml`.
3. Edit `src/content-data/resume.json`, `profile.json`, `projects-fa.json`, and `linkedin.json`.
4. Replace the sample case studies under `src/content/projects/`.
5. Add a real portrait under `src/assets/images/profile/` and register it in `src/data/media.ts`, or keep the non-photographic fallback.
6. Replace `public/og-image.svg` and `public/favicon.svg` with the new brand assets.
7. Configure GitHub Actions variables: `SITE_URL`, optional `BASE_PATH`, and optional `PUBLIC_CONTACT_FORM_ENDPOINT`.
8. Run `pnpm install --frozen-lockfile` and `pnpm validate`.
9. Generate PDFs locally with `pnpm resume:pdf` when Chrome/Edge is available; deployment also generates fresh PDFs automatically.
10. Review `docs/TEMPLATE.md` before first production deploy.

## Commands

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm validate
pnpm resume:pdf
```

## Content ownership

- canonical résumé/contact data: `src/content-data/resume.json`
- bilingual hero/about/services/contact copy: `src/content-data/profile.json`
- Persian project presentation: `src/content-data/projects-fa.json`
- English case studies: `src/content/projects/*.md`
- LinkedIn previews: `src/content-data/linkedin.json`
- UI labels: `src/i18n/`
- design tokens/layout: `src/styles/global.css`

Do not publish sample facts as real claims. See `AGENTS.md` and `docs/` for the implementation contracts.
