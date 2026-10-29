# Portfolio Starter Handoff

This branch is the reusable development baseline. It should be exported into a fresh repository before another person's production portfolio is published.

## History/privacy boundary

The branch is content-clean at its current tree, but because it lives in the original portfolio repository it still has the original Git ancestry. Do not fork or preserve that history when handing the template to another person if separation matters. Copy/export the working tree into a new repository or intentionally create an orphan/squashed root commit.

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

A new implementation may radically change the UI. The new owner's explicit design brief supersedes the starter palette/composition; static rendering, accessibility, locale routing, content boundaries, and deploy safety remain the reusable contracts.

### Repository/deployment

- `public/admin/config.yml`: replace `OWNER/REPOSITORY`
- GitHub Actions variable `SITE_URL`: canonical HTTPS origin only
- optional `BASE_PATH`: required for project Pages such as `/repository-name`
- optional `PUBLIC_CONTACT_FORM_ENDPOINT`
- GitHub Pages custom-domain/DNS settings when applicable

## Safety gates

Normal CI intentionally accepts sample content so the starter can be previewed. Production deployment runs `pnpm production:check` and refuses to continue while critical starter markers, the CMS placeholder repository, generic social preview, missing contact channel, or invalid production URL remain.

## Content behavior

- LinkedIn can be empty; the homepage omits the Writing section until previewable posts exist.
- Project content is CMS-managed and can be replaced or removed.
- Native posts may be English or Persian; standalone post pages do not claim a translated counterpart automatically.
- Profile photography is optional; `null` in `src/data/media.ts` renders an identity-derived fallback.
- Résumé PDFs use generic filenames: `resume-fa.pdf`, `resume-en.pdf`, and `resume.pdf`.

## Validation contract

The starter is expected to keep these commands green after customization:

```sh
pnpm format:check
pnpm resume:check
pnpm validate
```

CI also builds once with a non-root `BASE_PATH` to catch project-Pages regressions. Before release, run `pnpm production:check` with the intended deployment variables. The deployment workflow generates résumé PDFs and then runs artifact validation with `REQUIRE_RESUME_PDFS=1`.
