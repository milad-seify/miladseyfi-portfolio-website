# Content

## Sources

- Edit professional, résumé, and contact data in `src/content-data/resume.json`.
- Edit bilingual profile, about, services, and contact presentation in `src/content-data/profile.json`.
- Edit Persian project presentation in `src/content-data/projects-fa.json`; it must keep the canonical project ID.
- Add case studies in `src/content/projects/*.md`.
- Add articles in `src/content/posts/*.md`.
- Register published LinkedIn posts in `src/content-data/linkedin.json` only from verified official embed URLs. Keep the list newest-first; the homepage shows the first three and the localized Writing routes show the complete list. Optional editorial metadata (`title`, `excerpt`, `date`, `topic`, and verified canonical `postUrl`) powers native writing cards; omit any field that has not been verified.
- Register verified profile photography in `src/data/media.ts` after importing optimized source files from `src/assets/images/profile/`.
- Collection schemas in `src/content.config.ts` are the content contract.

## Accuracy policy

Unverified material must be visibly marked as placeholder or draft. Never infer employers, client names, dates, certifications, availability, outcomes, metrics, email addresses, social handles, or résumé URLs.

Draft collection entries are excluded from production listings. Persian case-study presentation translates a shared canonical entry rather than creating a second factual record. See [`I18N.md`](I18N.md) for translation rules.

## Writing style

Use concise first-person language focused on the problem, architectural reasoning, delivery approach, and business effect. Avoid generic superlatives. Case studies should distinguish constraints, decisions, implementation, and verified outcomes.

Images belong in `src/assets` when processed by Astro, or `public` only when they must retain a stable filename. Supply descriptive alt text; use empty alt text for decoration.

The homepage uses Astro image optimization for registered profile photography. Until a real image is supplied, the portrait component renders a non-photographic brand fallback. Never substitute stock or generated portraits.

## CMS workflow

Use `/admin/` for the files above and for project/post Markdown. It commits changes to `main`; GitHub Actions validates, builds, generates deployment-specific resume PDFs, and deploys the artifact. A Git revert is the rollback path. The CMS may upload project/post media to `public/media`, but the registered profile portrait remains code-managed to retain Astro optimization.

Keep navigation, generic UI labels, component behavior, deployment configuration, and secrets out of CMS-managed files. Validate factual changes with `pnpm resume:check` and `pnpm validate`.
