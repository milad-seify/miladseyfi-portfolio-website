# DevOps

## Local commands

See `package.json` for the source of truth. Typical workflow:

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm validate
```

`validate` runs Astro/TypeScript checks, formatting verification, and the production build.

## CI and deploy

- CI runs on pushes and pull requests with a pinned Node major, Corepack, frozen lockfile, and pnpm cache.
- Pages deployment runs only from `main`, uses GitHub's Pages artifact flow, and grants only `contents: read`, `pages: write`, and `id-token: write` where needed.
- The Astro `site` and `base` values derive from repository/environment settings. For deployment, use Actions variable `SITE_URL` for a custom-domain HTTPS origin and `BASE_PATH` only for an intentional subpath.
- Add `public/CNAME` only after the real domain is known.

Dependabot maintains npm and GitHub Actions dependencies on a weekly schedule. Review major upgrades and keep lockfile changes committed.

## Release checks

Before publishing: replace all placeholders, confirm canonical URL and contact links, provide the résumé and social image, verify Pages settings, run `pnpm validate`, and test keyboard/reduced-motion behavior in the production preview.
