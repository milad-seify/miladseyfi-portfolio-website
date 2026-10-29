# Agent Guide — Portfolio Starter

This branch is a reusable static Astro 7 portfolio template. Preserve static rendering, accessibility, strict typing, RTL/LTR support, and minimal progressive-enhancement JavaScript.

## Start here

- Template handoff: [`docs/TEMPLATE.md`](docs/TEMPLATE.md)
- Architecture: [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)
- Design system: [`docs/DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md)
- Content ownership: [`docs/CONTENT.md`](docs/CONTENT.md)
- CI/deployment: [`docs/DEVOPS.md`](docs/DEVOPS.md)
- Locale rules: [`docs/I18N.md`](docs/I18N.md)

## Working rules

- Run `pnpm validate` before handoff.
- Treat all current identity/career/project values as sample structure, not factual claims.
- Never invent employers, dates, metrics, credentials, client names, contact details, or outcomes for the eventual portfolio owner.
- Keep canonical professional data in `src/content-data`, localized UI labels in `src/i18n`, long-form projects/posts in content collections, and verified photography in `src/assets/images/profile` plus `src/data/media.ts`.
- Build reusable primitives in `src/components/ui`, page sections in `src/components/sections`, and document chrome in `src/layouts`.
- Prefer semantic HTML and CSS. Do not add framework hydration or runtime dependencies without a clear need.
- Use design tokens in `src/styles/global.css`; when redesigning, change the token/system layer instead of scattering one-off values.
- Preserve `prefers-reduced-motion`, keyboard focus, readable contrast, responsive behavior, and RTL/LTR parity.
- Keep deployment-specific values out of source when they can be GitHub Actions variables.

## New-owner customization order

1. Replace sample identity, experience, education, skills, projects, and contact data.
2. Replace bilingual profile copy and Persian translations.
3. Add verified projects and media.
4. Set the visual direction and tokens.
5. Configure CMS repository target and deployment variables.
6. Validate, review generated PDFs, then deploy.

## CMS

`/admin/` is a static Sveltia CMS interface backed by GitHub commits. Before use, change `backend.repo` in `public/admin/config.yml` from `OWNER/REPOSITORY` to the new repository. Never commit a PAT or other credential.
