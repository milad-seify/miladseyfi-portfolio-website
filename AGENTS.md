# Agent Guide

This is a static Astro 7 portfolio for Milad Seyfi. Prefer the smallest change that preserves zero-JS rendering, accessibility, and strict typing.

## Start here

- Architecture and boundaries: [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)
- Design tokens and UI rules: [`docs/DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md)
- Content ownership and placeholders: [`docs/CONTENT.md`](docs/CONTENT.md)
- Commands, CI, and deployment: [`docs/DEVOPS.md`](docs/DEVOPS.md)

## Working rules

- Run `pnpm validate` before handoff.
- Put shared personal/site copy in `src/data/profile.ts`; put long-form projects and posts in Astro content collections.
- Build reusable primitives in `src/components/ui`, composed sections in `src/components/sections`, and page chrome in `src/layouts`.
- Use semantic HTML and CSS first. Add client JavaScript only when the same UX cannot be delivered accessibly with HTML/CSS.
- Use tokens from `src/styles/global.css`; do not introduce one-off colors, spacing systems, or external runtime assets.
- Do not invent credentials, employers, outcomes, client names, dates, or metrics. Keep explicit placeholders until verified.
- Preserve `prefers-reduced-motion`, keyboard focus, readable contrast, and responsive behavior.
- Do not add `public/CNAME` until the production domain is confirmed.

## Updating professional information

1. Update `src/data/resume.ts`; it is authoritative for identity, career history, education, skills, verified metrics, projects, certifications, and contact links.
2. Do not duplicate factual career data in components or `src/data/profile.ts`; keep `profile.ts` for website positioning and presentation copy.
3. Run `pnpm resume:check`, then `pnpm validate`.
4. Run `pnpm resume:pdf` when the downloadable resume should be republished.
