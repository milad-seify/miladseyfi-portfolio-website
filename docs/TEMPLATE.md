# Portfolio Starter Handoff

This branch is the reusable baseline. It should be copied into a new repository before a real person's portfolio is published.

## Files that must be customized

### Identity and factual content

- `src/content-data/resume.json`
- `src/content-data/profile.json`
- `src/i18n/resume-fa.ts`
- `src/content-data/projects-fa.json`
- `src/content/projects/*.md`
- `src/content-data/linkedin.json`

All factual claims must come from the portfolio owner. Do not infer dates, metrics, employers, education, certifications, results, or contact details.

### Brand and UI

- `src/styles/global.css`
- `src/i18n/en.ts`
- `src/i18n/fa.ts`
- `public/favicon.svg`
- `public/og-image.svg`
- optional portrait under `src/assets/images/profile/` registered in `src/data/media.ts`

A new implementation may radically change the UI while keeping the content contracts, static rendering, locale routing, CMS boundaries, and deploy pipeline.

### Repository/deployment

- `public/admin/config.yml`: replace `OWNER/REPOSITORY`
- GitHub Actions variable `SITE_URL`
- optional `BASE_PATH`
- optional `PUBLIC_CONTACT_FORM_ENDPOINT`
- GitHub Pages custom-domain/DNS settings when applicable

## Content behavior

- LinkedIn can be empty; the homepage omits the Writing section until previewable posts exist.
- Project content is CMS-managed and can be replaced or removed.
- Profile photography is optional; `null` in `src/data/media.ts` renders a branded fallback.
- Résumé PDFs use generic filenames: `resume-fa.pdf`, `resume-en.pdf`, and `resume.pdf`.

## Validation contract

The starter is expected to keep these commands green after customization:

```sh
pnpm format:check
pnpm resume:check
pnpm validate
pnpm build
```

The deployment workflow generates résumé PDFs and then runs artifact validation with `REQUIRE_RESUME_PDFS=1`.
