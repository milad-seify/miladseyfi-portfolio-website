# Content

## Sources

- Edit factual professional and contact data in `src/data/resume.ts`.
- Edit localized website presentation in `src/i18n/en.ts` and `src/i18n/fa.ts`.
- Add case studies in `src/content/projects/*.md`.
- Add articles in `src/content/posts/*.md`.
- Register published LinkedIn posts in `src/data/linkedin-posts.ts` only from verified official embed URLs. Keep the list newest-first; the homepage shows the first three and the localized Writing routes show the complete list.
- Register verified profile photography in `src/data/media.ts` after importing optimized source files from `src/assets/images/profile/`.
- Collection schemas in `src/content.config.ts` are the content contract.

## Accuracy policy

Unverified material must be visibly marked as placeholder or draft. Never infer employers, client names, dates, certifications, availability, outcomes, metrics, email addresses, social handles, or résumé URLs.

Draft collection entries are excluded from production listings. Persian case-study presentation translates a shared canonical entry rather than creating a second factual record. See [`I18N.md`](I18N.md) for translation rules.

## Writing style

Use concise first-person language focused on the problem, architectural reasoning, delivery approach, and business effect. Avoid generic superlatives. Case studies should distinguish constraints, decisions, implementation, and verified outcomes.

Images belong in `src/assets` when processed by Astro, or `public` only when they must retain a stable filename. Supply descriptive alt text; use empty alt text for decoration.

The homepage uses Astro image optimization for registered profile photography. Until a real image is supplied, the portrait component renders a non-photographic brand fallback. Never substitute stock or generated portraits.
