# Portfolio Starter

Reusable bilingual portfolio and résumé starter built with Astro 7, strict TypeScript, Tailwind CSS 4, static GitHub Pages deployment, and a Git-backed Sveltia CMS.

This branch intentionally contains **sample content only**. Development and CI builds are allowed to render the sample so the layout remains inspectable; production deployment is blocked until the owner, repository, canonical URL, social preview, contact channel, and sample content are replaced.

## What is reusable

- Persian-first `/` and English `/en/` routes with RTL/LTR handling
- static Astro architecture with no framework hydration
- light/dark theme preference
- responsive portfolio sections and case-study routes
- résumé page plus generated PDF workflow
- GitHub Pages CI/deploy with root-path and subpath validation
- Sveltia CMS for professional content
- native project/post collections plus LinkedIn preview data
- SEO, sitemap, canonical URLs, JSON-LD, robots, and social metadata
- accessible keyboard/focus/reduced-motion behavior

## Start a new portfolio

1. Create a **fresh repository** from the working tree of this branch. Do not carry this repository's Git history into another person's project when history/privacy separation matters.
2. Replace `OWNER/REPOSITORY` in `public/admin/config.yml`.
3. Edit `src/content-data/resume.json`, `profile.json`, `projects-fa.json`, and `linkedin.json`.
4. Replace or remove the sample case studies under `src/content/projects/` and update `src/i18n/resume-fa.ts`.
5. Add a real portrait under `src/assets/images/profile/` and register it in `src/data/media.ts`, or keep the identity-derived non-photographic fallback.
6. Replace `public/og-image.svg` and optionally `public/favicon.svg` with the new brand assets.
7. Configure GitHub Actions variables: `SITE_URL`, optional `BASE_PATH`, and optional `PUBLIC_CONTACT_FORM_ENDPOINT`. See `.env.example` for local equivalents.
8. Run `pnpm install --frozen-lockfile` and `pnpm validate`.
9. Run `pnpm production:check` with production environment variables before enabling Pages.
10. Generate PDFs locally with `pnpm resume:pdf` when Chrome/Edge is available; deployment also generates fresh PDFs automatically.
11. Review `docs/TEMPLATE.md` before first production deploy.

## Commands

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm validate
pnpm production:check
pnpm resume:pdf
```

## Content ownership

- canonical résumé/contact data: `src/content-data/resume.json`
- bilingual hero/about/services/contact copy: `src/content-data/profile.json`
- Persian résumé presentation: `src/i18n/resume-fa.ts`
- Persian project presentation: `src/content-data/projects-fa.json`
- canonical case studies: `src/content/projects/*.md`
- native posts: `src/content/posts/*.md`
- LinkedIn previews: `src/content-data/linkedin.json`
- UI labels: `src/i18n/`
- design tokens/layout: `src/styles/global.css`

Do not publish sample facts as real claims. See `AGENTS.md` and `docs/` for the implementation contracts.
