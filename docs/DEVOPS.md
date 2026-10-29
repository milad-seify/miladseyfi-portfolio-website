# DevOps

## Local commands

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm validate
pnpm production:check
```

`validate` runs résumé validation, Astro/TypeScript checks, formatting verification, a production build, and static artifact checks. `resume:pdf` prints Persian and English résumé routes with a local Chrome/Edge installation.

`production:check` is intentionally stricter than normal CI. It requires a real HTTPS `SITE_URL`, the correct CMS repository target, at least one contact channel, and removal of known starter/sample content. This lets the starter remain previewable while preventing accidental publication of template data.

## CI and deploy

- CI runs on pushes and pull requests with the pinned Node/pnpm versions and frozen lockfile.
- CI validates both root hosting and a representative non-root `BASE_PATH` so project-Pages path regressions are caught before handoff.
- GitHub Pages deployment runs from `main` and uses the Pages artifact flow.
- Configure repository Actions variables before production deployment:
  - `SITE_URL`: canonical HTTPS origin only, for example `https://portfolio.example` or `https://owner.github.io`
  - `BASE_PATH`: normally empty for a custom/root domain; for project Pages use `/REPOSITORY_NAME`
  - `PUBLIC_CONTACT_FORM_ENDPOINT`: optional verified HTTPS endpoint
- If `SITE_URL` is not configured, Astro uses `https://example.com` only as a local/development fallback; production preflight rejects it.
- Deployment runs production preflight, validates/builds, generates fresh `resume-fa.pdf`, `resume-en.pdf`, and `resume.pdf`, then performs a stricter artifact validation before upload.
- No deployment step commits generated files back to `main`.

## CMS publishing

Before using `/admin/`, replace `OWNER/REPOSITORY` in `public/admin/config.yml` with the new repository. The vendored CMS script is loaded relative to `/admin/`, so the editor shell remains compatible with configured hosting subpaths. Use a short-lived fine-grained GitHub PAT restricted to that repository with the minimum Contents permission required for editing. Never store the token in source, Actions variables, screenshots, or documentation.

CMS saves normal Git commits to `main`; rollback is a Git revert.

## Release checks

Before first production release:

- replace all sample content and sample project data
- replace the generic social preview and review the favicon
- add only verified contact/social links
- set `SITE_URL` and, when needed, `BASE_PATH`
- configure the contact form only if an endpoint exists
- verify the CMS repository target
- run `pnpm validate` and `pnpm production:check`
- inspect both résumé routes and generated PDFs
- test keyboard navigation, RTL/LTR, dark mode, reduced motion, and mobile layouts
