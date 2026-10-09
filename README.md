# Milad Seyfi — Portfolio

A static, dark-first portfolio and consulting site built with Astro 7, strict TypeScript, Tailwind CSS 4, and zero shipped client JavaScript.

## Local development

Requirements: Node 22 and pnpm 12.10.1.

```sh
corepack enable
pnpm install
pnpm dev
```

Run the complete quality gate with `pnpm validate`. See [`AGENTS.md`](AGENTS.md) for the project map and maintenance rules.

## Professional data and resume

`src/data/resume.ts` is the canonical source for identity, career history, education, skills, verified metrics, selected projects, certifications, and contact links. Localized presentation lives in `src/i18n` and maps back to canonical IDs.

```sh
pnpm resume:check
pnpm resume:pdf
```

`resume:check` catches missing required fields, invalid date ranges, placeholders, and malformed contact URLs. `resume:pdf` builds the site and prints `/resume/` and `/en/resume/` through a locally installed Chrome or Edge browser to language-specific PDFs, while retaining `milad-seyfi-resume.pdf` as the Persian compatibility alias. Set `CHROME_PATH` if needed.

Long-form work and writing remain in the typed collections under `src/content/projects` and `src/content/posts`.

## Before launch

1. Add verified contact and social links to `src/data/resume.ts`.
2. Review case studies and articles; publish only approved content.
3. Run `pnpm resume:check`, `pnpm validate`, and `pnpm resume:pdf`.
4. Confirm the production URL and verify the committed 1200×630 PNG social card.
5. Add `public/CNAME` only when the real custom domain is known.

Persian is the default language at unprefixed routes; English is under `/en/`. Set `PUBLIC_CONTACT_FORM_ENDPOINT` to enable the native contact form. LinkedIn remains available when the endpoint is unset.

## Deployment

CI validates every push and pull request. Pushes to `main` also validate, build, and deploy through GitHub Pages using least-privilege job permissions. Set the Pages source to **GitHub Actions** in repository settings. For a custom domain, set the repository Actions variable `SITE_URL` to the HTTPS origin; set `BASE_PATH` only when the site intentionally lives below that origin.
