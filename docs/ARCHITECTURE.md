# Architecture

## Shape

Astro renders a fully static bilingual site. Persian is served unprefixed and English under `/en/`; both compose the same components and canonical data. There is no backend, framework island, runtime data fetch, or client JavaScript.

```text
resume data + content collections
             + i18n presentation -> sections -> locale routes -> layouts -> static HTML/CSS
             + design tokens
```

## Boundaries

- `components/ui`: content-agnostic primitives such as buttons, headings, icons, and language controls.
- `components/sections`: page-level compositions; accept a locale and do not own factual content.
- `content/projects`, `content/posts`: Markdown entries validated by `src/content.config.ts`.
- `data/resume.ts`: single factual source for professional information and contact links.
- `data/profile.ts`: non-factual shared site settings only.
- `i18n`: typed UI dictionaries plus localized presentation mapped to canonical resume/project IDs. See [`I18N.md`](I18N.md).
- `lib`: small pure helpers and shared types only.
- `layouts`: document shell, metadata, JSON-LD, header, and footer.
- `styles`: global tokens, resets, logical layout, and animation policy.

## Decisions

- Static output and no hydrated components by default.
- Native CSS scroll-driven entry effects with a non-supporting-browser fallback; reduced motion disables them.
- Self-hosted Vazirmatn for Persian and a system stack for English; no font CDN request.
- Repository Pages URL is configurable through environment variables; a custom domain requires no component changes.

Create an ADR in `docs/adr/` only for a hard-to-reverse cross-cutting decision (runtime framework, CMS/backend, hosting migration, or analytics vendor).
