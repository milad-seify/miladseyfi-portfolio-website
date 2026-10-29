# DevOps

## Local commands

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm validate
```

`validate` runs résumé validation, Astro/TypeScript checks, formatting verification, a production build, and static artifact checks. `resume:pdf` prints Persian and English résumé routes with a local Chrome/Edge installation.

## CI and deploy

- CI runs on pushes and pull requests with the pinned Node/pnpm versions and frozen lockfile.
- GitHub Pages deployment runs from `main` and uses the Pages artifact flow.
- Configure repository Actions variables before production deployment:
  - `SITE_URL`: canonical production origin, for example `https://portfolio.example`
  - `BASE_PATH`: normally empty for a custom domain; use a repository subpath only when intentionally hosting there
  - `PUBLIC_CONTACT_FORM_ENDPOINT`: optional verified Formspree-compatible HTTPS endpoint
- If `SITE_URL` is not configured, Astro falls back to `https://example.com`; do not publish with that fallback.
- Deployment builds/validates, generates fresh `resume-fa.pdf`, `resume-en.pdf`, and `resume.pdf`, then performs a stricter artifact validation before upload.
- No deployment step commits generated files back to `main`.

## CMS publishing

Before using `/admin/`, replace `OWNER/REPOSITORY` in `public/admin/config.yml` with the new repository. Use a short-lived fine-grained GitHub PAT restricted to that repository with the minimum Contents permission required for editing. Never store the token in source, Actions variables, screenshots, or documentation.

CMS saves normal Git commits to `main`; rollback is a Git revert.

## Release checks

Before first production release:

- replace all sample content and sample project data
- replace the generic favicon/social preview
- add only verified contact/social links
- set `SITE_URL` and review canonical/sitemap/robots output
- configure the contact form only if an endpoint exists
- verify the CMS repository target
- run `pnpm validate`
- inspect both résumé routes and generated PDFs
- test keyboard navigation, RTL/LTR, dark mode, reduced motion, and mobile layouts
