# DriveCam Marketing Website — Implementation Plan

Marketing site for the **DriveCam** app (smartphone dashcam). Goal: drive more App Store / Play Store installs through SEO + conversion-focused storytelling.

Repo: https://github.com/erperejildo/drivecam-web
App repo: `/Users/dani/Desktop/repos/drivecam`
Live URL (expected): https://erperejildo.github.io/drivecam-web/ (project page — no custom domain yet)

---

## 1. Verified inputs

| Item                 | Finding                                                                                                                                                                                              |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| respectASO           | ✅ Working (`http://localhost` → 200). 3 search batches run.                                                                                                                                         |
| RevenueCat           | ❌ No DriveCam project exists yet (only AI Sabotage + My Rents) → **placeholder prices + TODO comments**.                                                                                            |
| `drivecam-web/` repo | Vue 3 + Vite 8 + TS + ESLint + Oxlint + Vitest + Prettier scaffold (copy of tandapp-web). Remote must be re-pointed to `drivecam-web`.                                                               |
| App design           | Dark: black bg, **red accent** (`colorSchemeSeed: Colors.red`), white text w/ alpha tiers, white 0.04 card bg + white 0.06 borders, rounded cards. App bundles `FiraCode-Regular.ttf`.               |
| Real assets          | `testing-screens/01_launch.png` (app screenshot), `assets/images/onboarding_placing_phone.png` (phone-in-car illustration), Android launcher icon (`mipmap-xxxhdpi/ic_launcher.png`), FiraCode font. |
| Store links          | Android `com.drodriguez.drivecam` · iOS `id6791342778`                                                                                                                                               |
| Copy source          | `drivecam/keywords.md` — full EN/ES store descriptions; reuse wording for consistency.                                                                                                               |
| Contact email        | `info@drivecam.store`                                                                                                                                                                                |

---

## 2. User decisions

- **Contact form**: mailto-only, simple. Form fields prefill the email (subject + body) so the user doesn't retype anything.
- **Header links**: point to separate pages (`/pricing`, `/guide`), not just anchors.
- **Footer**: shows brand **Axis Labs** linking to https://axislabs.eu.
- **Prices**: placeholder ($2.99/mo, $19.99 lifetime) with TODO comments — replace with real RevenueCat prices later.
- **Design**: no AI-slop. Cool, distinctive, dark automotive HUD aesthetic.
- Start implementation of all phases.

---

## 3. SEO keywords (fresh respectASO data)

**EN — US:** `dashcam` (pop 87, Sweet Spot) · `dash cam` (80) · `drive recorder` (57, Sweet) · `driving recorder` (45, Sweet) · `car camera` (43, Sweet) · `car recorder` (40) · `car camera recorder` (💎 Hidden Gem) · `dash cam app` (21).

**ES — ES:** `dashcam` (75, Sweet) · `dash cam` (49, Sweet) · `dashcam coche` (29, 💎 Hidden Gem) · `cámara coche` (13) · `camara dash` (13). ⚠️ `road camera` (ES 64) is traffic-camera intent — skip.

**Keyword → page mapping** (title / H1 / meta description / anchors):

| Page    | EN targets                                                | ES targets                                |
| ------- | --------------------------------------------------------- | ----------------------------------------- |
| Home    | dashcam app, dash cam, car camera recorder                | dashcam, dash cam, cámara coche           |
| Guide   | turn phone into dashcam, phone dashcam, dash cam app free | convertir móvil en dashcam, dashcam coche |
| Pricing | dashcam pro, dash cam free, dashcam lifetime              | dashcam gratis, dashcam premium           |

Additional per-country research lives in `drivecam/keywords.md` for future locales.

---

## 4. Site architecture

```
/                    → redirect to /en/ (browser-language detection → /es/)
/en/  /es/           → Home
/en/pricing  /es/pricing
/en/guide  /es/guide → "How to turn your phone into a dashcam"
/en/legal  /es/legal → Privacy + Terms
/404.html
```

- **Header**: logo · How it works (/guide) · Pricing (/pricing) · Contact (/#contact) + EN/ES switcher + Download CTA.
- **Footer**: full nav, legal, store badges, contact email, **Axis Labs** brand link (https://axislabs.eu).

---

## 5. Content strategy — sell the story (PAS)

Copyblogger principles: benefit-led headlines, problem→agitate→solution, useful content, social proof, clear CTA.

1. **Hero** — EN: _"Your phone is already a dashcam."_ / ES: _"Tu móvil ya es una dashcam."_ Phone mockup (`01_launch.png`) + HUD overlay (REC badge, speed readout, GPS stamp — FiraCode mono).
2. **The gap** — hardware dashcams cost money + wiring; apps dump footage into your gallery/cloud; witnesses don't stay, footage does.
3. **The fix** — mount → record → drive. 3-step visual.
4. **What you get (outcomes)** — evidence when it matters (incident report PDF), hands-free driving (offline voice), footage stays yours (private storage), built for long drives (thermal + battery safety).
5. **Features band** — compact, outcome-framed (reuse `keywords.md` phrasing).
6. **Social proof** — real reviews from `drivecam-reviews.json` (parse at implementation; skip if unusable — never fabricate).
7. **FAQ** (FAQPage JSON-LD) + **Contact** (mailto) + **Download band**.

**Guide page** = content-marketing asset for long-tail: mounting, settings, battery/thermal tips, legal notes.

**Competitor benchmark** (during copy refinement): Nexar (safety/insurance narrative), Droid Dashcam, CamOnRoad, Car Camera. Differentiate on **privacy-first + zero hardware cost + reuse your old phone**.

---

## 6. Pricing page

Structure cloned from `my-rents.github.io/src/views/PricingView.html`: hero + TrustBadge, card grid, popular badge, free-mode section, FAQ.

Plans: **Free** · **PRO Monthly** (popular) · **PRO Lifetime**. Placeholder prices with a TODO comment pointing to RevenueCat. PRO list from app AGENTS.md (quality tiers, loop/storage control, live streaming, stats, ad-free). Mention the real rewarded-ad trial (3 ads = 7 days PRO).

---

## 7. Tech plan

- **Stack**: Vue 3.5 + vue-router 5 + TS + Vite 8. SCSS with **one `theme.scss`** holding all tokens as CSS vars; breakpoints as SCSS vars (needed in media queries).
- **Prerendering**: custom SSR prerender (Vite SSR build + `@vue/server-renderer` + script injecting per-route HTML + SEO head tags). Avoids heavy deps and works with vue-router 5. Fallback: Playwright snapshot prerender.
- **SEO**: per-route/locale meta config, canonical, hreflang pairs, JSON-LD (SoftwareApplication, FAQPage, BreadcrumbList), `sitemap.xml` + `robots.txt` generated at build, og:image (placeholder w/ comment).
- **i18n**: content-driven (typed en/es content objects, key-parity unit test), locale-prefixed routes, browser-language redirect at root, persisted choice.
- **Tests**: vitest — content parity, SEO meta completeness + title uniqueness, router config, App smoke, mailto URL builder.
- **CI/CD** (adapted from ai-sabotage-web): push to main → npm ci → format:check → lint → type-check → test → build → artifact validation → deploy-pages with retries + live smoke tests. Pages source must be set to "GitHub Actions".

---

## 8. Asset plan (placeholders get comments)

- Real: `01_launch.png` (hero phone), `onboarding_placing_phone.png` (guide), launcher icon (favicon/logo), FiraCode.
- Placeholders w/ `<!-- TODO: replace with … -->`: hero car backdrop, og:image, feature screenshots.

---

## 9. Execution phases — status

1. **Phase 0** — repo setup + CI workflow ✅
2. **Phase 1** — `theme.scss` design system + layout shell (header/footer/router/locale redirect) ✅
3. **Phase 2** — content model en/es + SEO meta plumbing (unit-tested) ✅
4. **Phase 3** — Home sections (story arc) ✅
5. **Phase 4** — Pricing, Guide, Legal, FAQ, Contact (mailto) ✅
6. **Phase 5** — prerender + sitemap/robots/hreflang/JSON-LD ✅
7. **Phase 6** — copy/design polish + responsive QA ✅ (asset placeholders still marked)
8. **Phase 7** — final checks + push + deploy ✅ — live at <https://erperejildo.github.io/drivecam-web/> (deploys on every push to `main`)

### Verification commands

```bash
npm run format:check && npm run lint && npm run type-check && npm run test && npm run build
```

### Site structure

- `/` → language-detecting redirect (localStorage → browser language → `/en/`)
- `/en/`, `/es/` — home: hero, stats, problem story, solution, benefits, features, FAQ, download, contact
- `/en/pricing`, `/es/pricing` — pricing plans + trial + FAQ
- `/en/guide`, `/es/guide` — SEO setup guide (long-tail keywords)
- `/en/legal`, `/es/legal` — privacy policy + terms
- `404.html` — not found page

## 10. Open items

- Replace placeholder prices when the DriveCam RevenueCat project is created.
- Custom domain? If added: update `vite base` + `SITE_URL` constant (single config file).
- Replace placeholder images (marked with TODO comments).
- Review generated legal copy (privacy/terms) before publishing.
- Set repo Settings → Pages → Source = "GitHub Actions".
