# DriveCam Web

Marketing website for the [DriveCam](https://github.com/erperejildo/drivecam-web) app — a smartphone dashcam for iPhone and Android.

Static, prerendered, bilingual (English / Spanish), SEO-focused. Built with Vue 3, Vite, TypeScript and SCSS design tokens.

Live site: https://drivecam.store/

## Stack

- **Vue 3.5 + vue-router 5 + TypeScript** (strict, `vue-tsc`)
- **Vite 8** with a custom prerender step: `vite build` (client) + `vite build --ssr` + `scripts/prerender.mjs` renders every route/locale to static HTML with full SEO head tags (title, description, canonical, hreflang, Open Graph, JSON-LD)
- **SCSS** with a single design-token layer in `src/styles/theme.scss` (CSS custom properties only — no hardcoded values in components)
- **Vitest** for unit tests (content parity en/es, SEO meta, mailto builder, app shell)
- **ESLint + Oxlint + Prettier** as CI quality gates

## Scripts

| Script                 | Purpose                                          |
| ---------------------- | ------------------------------------------------ |
| `npm run dev`          | Dev server (base path `/`)                       |
| `npm run build`        | Type check + client build + prerender to `dist/` |
| `npm run preview`      | Preview the production build                     |
| `npm run test`         | Unit tests (vitest run)                          |
| `npm run lint`         | Oxlint + ESLint                                  |
| `npm run lint:fix`     | Oxlint + ESLint with `--fix`                     |
| `npm run format`       | Prettier write                                   |
| `npm run format:check` | Prettier check (used in CI)                      |
| `npm run type-check`   | `vue-tsc --build`                                |

## Content & i18n

All copy lives in typed content objects:

- `src/content/en.ts` / `src/content/es.ts` — full marketing copy (home, pricing, guide, legal, footer, meta)
- `src/content/types.ts` — the `SiteContent` schema both locales must satisfy (`npm run test` enforces key parity)
- `src/content/seo.ts` — per-route SEO config, canonical/hreflang, structured data and head rendering (single source of truth for runtime + prerender)

To add a locale: create the content file, add it to `src/content/index.ts` and extend the route `locale` matcher in `src/router/index.ts`.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`: formatting, lint, type check, tests, prerendered build, artifact validation, then deploys to GitHub Pages with retries and live smoke tests.

**Required once:** repository Settings → Pages → Source = **GitHub Actions** (otherwise GitHub's built-in Pages workflow races this one).

### Custom domain / renames

Two constants must stay in sync if the site moves:

- `base` in `vite.config.ts` (`/`)
- `BASE_PATH` and `SITE_URL` in `src/content/seo.ts`

## Open TODOs

- Replace placeholder prices with real RevenueCat values (`src/content/en.ts` / `es.ts` → `pricing.plans`).
- Replace `public/img/og-image.png` with a branded 1200×630 social image.
- Review the generated privacy policy / terms copy (`src/content/*.ts` → `legal`).
- Optional: add branded screenshots for the feature sections.
