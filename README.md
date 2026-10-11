# Milad Seyfi — Portfolio and Résumé

Milad Seyfi's personal portfolio and résumé website, built as a fully static Astro site. Persian is the default language, with the English version available under `/en/`. The production build emits static HTML and CSS with zero generated client JavaScript..

**Live site:** [miladseyfi.ir](https://miladseyfi.ir)

## Features

- Bilingual Persian and English routes
- Portfolio, résumé, writing, and project case-study pages
- Verified LinkedIn writing embeds
- Contact form with a configurable HTTPS endpoint
- Generated Persian and English résumé PDFs
- Canonical metadata, sitemap, robots file, social metadata, and JSON-LD
- Responsive, mobile-first layouts
- Semantic markup, keyboard focus states, skip navigation, and reduced-motion support

## Tech stack

| Technology                    | Version / role                       |
| ----------------------------- | ------------------------------------ |
| [Astro](https://astro.build/) | 7.3.7, static site generation        |
| TypeScript                    | 6.0.3                                |
| Tailwind CSS                  | 4.3.3                                |
| Node.js                       | 22.x                                 |
| pnpm                          | 12.10.1                              |
| Sharp                         | 0.35.5                               |
| Astro Sitemap                 | 3.7.4                                |
| GitHub Actions                | validation and deployment automation |
| GitHub Pages                  | production hosting                   |

## Architecture overview

```text
canonical data + i18n + content
              ↓
        Astro components
              ↓
        static HTML/CSS
              ↓
        GitHub Pages
```

Canonical professional data is shared across both locales. Typed translation modules and content collections provide presentation copy and long-form content, while Astro components render locale-specific static routes.

## Repository structure

| Path                      | Purpose                                                                      |
| ------------------------- | ---------------------------------------------------------------------------- |
| `src/data`                | Canonical professional data, LinkedIn posts, media, and shared site settings |
| `src/i18n`                | Typed Persian and English presentation copy and localized mappings           |
| `src/components/ui`       | Reusable, content-agnostic interface primitives                              |
| `src/components/sections` | Composed page sections                                                       |
| `src/content`             | Typed project and post content collections                                   |
| `src/layouts`             | Document shells, metadata, JSON-LD, header, and footer                       |
| `src/styles`              | Global design tokens, responsive layout, and motion policy                   |
| `scripts`                 | Build checks, résumé validation, and PDF generation                          |
| `docs`                    | Architecture, design, content, localization, and operations guidance         |

## How to read the codebase

A practical reading order is:

```text
README.md
→ docs/ARCHITECTURE.md
→ src/data/resume.ts
→ src/i18n/
→ src/pages/
→ src/components/sections/
→ src/components/ui/
→ src/styles/global.css
```

## Local development

Requirements:

- Node.js 22
- pnpm 12.10.1 through Corepack

```sh
corepack enable
pnpm install
pnpm dev
```

## Useful commands

| Command             | Purpose                                                                           |
| ------------------- | --------------------------------------------------------------------------------- |
| `pnpm dev`          | Start the Astro development server                                                |
| `pnpm build`        | Build the static site and validate generated output                               |
| `pnpm preview`      | Preview the production build locally                                              |
| `pnpm check`        | Run Astro and TypeScript checks                                                   |
| `pnpm format`       | Format the repository with Prettier                                               |
| `pnpm format:check` | Verify formatting without changing files                                          |
| `pnpm validate`     | Run résumé checks, type checks, formatting checks, and the production build       |
| `pnpm resume:check` | Validate canonical résumé data                                                    |
| `pnpm resume:pdf`   | Build and generate the Persian and English résumé PDFs using local Chrome or Edge |

## Environment and deployment variables

| Variable                       | Purpose                                                                                    |
| ------------------------------ | ------------------------------------------------------------------------------------------ |
| `SITE_URL`                     | Canonical HTTPS origin used by Astro, metadata, sitemap, and deployment builds             |
| `BASE_PATH`                    | Optional subpath when the site is hosted below the origin                                  |
| `PUBLIC_CONTACT_FORM_ENDPOINT` | Verified HTTPS form endpoint; when unset or invalid, the form renders an unavailable state |

## Updating content

- Canonical professional and résumé data: `src/data/resume.ts`
- Verified LinkedIn posts: `src/data/linkedin-posts.ts`
- Profile photography registration: `src/data/media.ts`
- Project case studies and posts: `src/content/`
- Localized interface and presentation copy: `src/i18n/`

Keep factual professional information in the canonical data layer and map localized presentation to its stable IDs. Run `pnpm resume:check` after résumé changes and `pnpm validate` before submitting changes.

## Deployment

GitHub Actions validates pushes and pull requests with the pinned Node and pnpm versions. A push to `main` triggers the GitHub Pages workflow, which installs from the lockfile, runs `pnpm validate`, builds the static site, uploads `dist`, and deploys the Pages artifact.

The custom domain is configured through the `SITE_URL` Actions variable. `BASE_PATH` is only needed when deployment intentionally uses a subpath. Contact-form configuration is supplied through `PUBLIC_CONTACT_FORM_ENDPOINT`.

## Documentation

- [Agent and maintenance guide](AGENTS.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Design system](docs/DESIGN_SYSTEM.md)
- [Content ownership](docs/CONTENT.md)
- [Internationalization](docs/I18N.md)
- [Development and deployment](docs/DEVOPS.md)

## License and reuse

No license is currently provided. Public repository visibility does not grant permission to reuse Milad Seyfi's personal branding, text, images, résumé data, or other personal content. Please request permission before reusing those materials.
