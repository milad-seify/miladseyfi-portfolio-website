# Architecture

## Shape

Astro renders a fully static site. `src/pages/index.astro` composes section components inside `BaseLayout`; it does not own content or styling. There is no backend, framework island, or runtime data fetch.

```text
src/data/profile.ts ─┐
content collections ─┼─> sections ─> pages ─> BaseLayout ─> static HTML/CSS
design tokens ───────┘
```

## Boundaries

- `components/ui`: content-agnostic primitives such as buttons, headings, icons, and cards.
- `components/sections`: page-level compositions; may read typed props but should not duplicate profile copy.
- `content/projects`, `content/posts`: Markdown entries validated by `src/content.config.ts`.
- `data/profile.ts`: single source for identity, navigation, services, skills, experience, contact, and site settings.
- `lib`: small pure helpers and shared types only.
- `layouts`: document shell, metadata, JSON-LD, header, and footer.
- `styles`: global tokens, resets, utilities, and animation policy.

## Decisions

- Static output and no hydrated components by default.
- Native CSS scroll-driven entry effects with a non-supporting-browser fallback; reduced motion disables them.
- Local/system font stack to avoid third-party requests. Add self-hosted files only when licensed assets are available.
- Repository Pages URL is configurable through environment variables; a custom domain requires no component changes.

Create an ADR in `docs/adr/` only for a hard-to-reverse cross-cutting decision (runtime framework, CMS/backend, hosting migration, or analytics vendor).
