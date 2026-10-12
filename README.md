# Milad Seyfi — Portfolio and Résumé

Personal portfolio and résumé site for Milad Seyfi. It is a static Astro site with Persian as the default language and English under `/en/`.

**Live site:** [miladseyfi.ir](https://miladseyfi.ir)

## Features

- Bilingual Persian and English portfolio and résumé routes
- Project case studies and LinkedIn writing embeds
- Git-backed content editing at `/admin/`
- Contact form with a configurable endpoint
- Generated Persian and English résumé PDFs
- Sitemap, robots, metadata, and JSON-LD
- Responsive, accessible design with reduced-motion support

## Tech stack

| Technology             | Version / role                   |
| ---------------------- | -------------------------------- |
| Astro                  | 7.3.7 static site generation     |
| TypeScript             | 6.0.3                            |
| Tailwind CSS           | 4.3.3                            |
| Node.js                | 22.x                             |
| pnpm                   | 12.10.1                          |
| Sharp                  | 0.35.5                           |
| Astro Sitemap          | 3.7.4                            |
| Sveltia CMS            | static Git-backed content editor |
| GitHub Actions / Pages | validation and hosting           |

## Architecture

```text
CMS-managed data + i18n + Markdown content
                 ↓
          Astro components
                 ↓
          static HTML/CSS
                 ↓
          GitHub Pages
```

Public portfolio routes ship static HTML and CSS without framework hydration. A small inline progressive-enhancement script resolves and persists the light/dark preference; `/admin/` is a separate static Sveltia CMS interface and may load its own JavaScript.

## Repository structure

| Path                      | Purpose                                                         |
| ------------------------- | --------------------------------------------------------------- |
| `src/content-data`        | CMS-managed profile, résumé, LinkedIn, and Persian project data |
| `src/data`                | Typed adapters and code-managed site/media settings             |
| `src/i18n`                | UI labels and typed locale mappings                             |
| `src/components/ui`       | Reusable interface primitives                                   |
| `src/components/sections` | Page sections                                                   |
| `src/content`             | Project and post Markdown collections                           |
| `src/layouts`             | Document shells, metadata, JSON-LD, header, and footer          |
| `src/styles`              | Tokens, layout, and motion policy                               |
| `public/admin`            | Sveltia CMS interface and configuration                         |
| `scripts`                 | Validation, build checks, and PDF generation                    |
| `docs`                    | Architecture, content, localization, and operations guidance    |

## How to read the codebase

```text
README.md
→ docs/ARCHITECTURE.md
→ src/content-data/resume.json
→ src/data/resume.ts
→ src/i18n/
→ src/pages/
→ src/components/sections/
→ src/components/ui/
→ src/styles/global.css
```

## Local development

Requirements: Node.js 22 and pnpm 12.10.1 through Corepack.

```sh
corepack enable
pnpm install
pnpm dev
```

## Useful commands

| Command             | Purpose                                                          |
| ------------------- | ---------------------------------------------------------------- |
| `pnpm dev`          | Start Astro locally                                              |
| `pnpm build`        | Build static output and validate it                              |
| `pnpm preview`      | Preview the production build                                     |
| `pnpm check`        | Run Astro and TypeScript checks                                  |
| `pnpm format`       | Format the repository                                            |
| `pnpm format:check` | Check formatting                                                 |
| `pnpm validate`     | Run résumé checks, type checks, formatting, and build validation |
| `pnpm resume:check` | Validate résumé data                                             |
| `pnpm resume:pdf`   | Build and generate the résumé PDFs                               |

## Content editing

Open `/admin/`, choose **Sign In with Token**, and paste a GitHub fine-grained personal access token. Sveltia CMS writes a commit to `main`; the existing GitHub Actions workflow validates, builds, and deploys it.

Use the CMS for professional profile content, résumé/contact data, LinkedIn embeds, project case studies, Persian project presentation, and future posts. Keep application behavior, UI labels, deployment configuration, optimized portrait media, and secrets in code-managed files.

For a single owner, create a fine-grained token restricted to `milad-seify/miladseyfi-portfolio-website` with **Contents: Read and write**. Set a short expiration, paste it only into the CMS sign-in dialog, and revoke or replace it if needed. It is never stored in this repository. Git history is the rollback mechanism: revert the relevant content commit and let CI deploy the reverted state.

`/admin/` is excluded from indexing but remains publicly loadable; that is not an access-control mechanism. GitHub authentication and repository permissions control publishing.

## Environment and deployment variables

| Variable                       | Purpose                                                        |
| ------------------------------ | -------------------------------------------------------------- |
| `SITE_URL`                     | Canonical HTTPS origin for metadata, sitemap, and build output |
| `BASE_PATH`                    | Optional deployment subpath                                    |
| `PUBLIC_CONTACT_FORM_ENDPOINT` | Verified HTTPS contact-form endpoint                           |

## Updating content without the CMS

- Professional, résumé, and contact data: `src/content-data/resume.json`
- Profile, about, services, and contact presentation: `src/content-data/profile.json`
- LinkedIn embeds: `src/content-data/linkedin.json`
- Persian project presentation: `src/content-data/projects-fa.json`
- Project case studies and posts: `src/content/`
- Localized UI copy: `src/i18n/`
- Optimized profile photography: `src/data/media.ts` and `src/assets/images/profile/`

Run `pnpm resume:check` after résumé changes and `pnpm validate` before publishing.

## Deployment

GitHub Actions validates pushes and pull requests. A push to `main` runs validation, builds the static site, generates fresh Persian and English résumé PDFs into the Pages artifact, validates that artifact, and deploys it. The production origin defaults to `https://miladseyfi.ir`; `SITE_URL` can override it and `BASE_PATH` is only for intentional subpath hosting.

## Documentation

- [Agent and maintenance guide](AGENTS.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Design system](docs/DESIGN_SYSTEM.md)
- [Content ownership](docs/CONTENT.md)
- [Internationalization](docs/I18N.md)
- [Development and deployment](docs/DEVOPS.md)

## License and reuse

No license is currently provided. Public visibility does not grant a general reuse license for the source code or for Milad Seyfi’s personal branding, text, images, résumé data, or other personal content. Please request permission before reuse.
