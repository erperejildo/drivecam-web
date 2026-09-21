# SEO Content Plan — DriveCam Website

Audit and keyword optimization for `drivecam-web` (EN + ES), based on respectASO keyword research (September 2026).
All recommendations below marked ✅ are already implemented in `src/content/en.ts` / `src/content/es.ts`.

- **Product:** DriveCam — turns a phone into a dash cam (iOS + Android), by Axis Labs
- **Live site:** https://erperejildo.github.io/drivecam-web/ (`/en/`, `/es/`)
- **Stack:** Vue 3 + Vite, statically prerendered per route/locale; all copy lives in typed content objects
- **Languages:** English (default, `/en/`) and Spanish (`/es/`), hreflang alternates + `x-default` → EN
- **Keyword research:** respectASO (independent popularity model), markets: US, GB, ES, MX

---

## Strategy Summary

| Page     | Primary keyword                       | Supporting keywords                                                             |
| -------- | ------------------------------------- | ------------------------------------------------------------------------------- |
| Home     | dashcam (US 87, GB 80 · ES 75, MX 70) | dash cam · car camera · car camera recorder · cámara para coche · cámara coche  |
| Features | car cam / driving recorder            | dashcam (features) · car camera app · dash camera (ES 37) · gps dashcam (ES 25) |
| Pricing  | dashcam pro (US 49 🎯, GB 36)         | dashcam gratis (ES) · free plan · lifetime PRO                                  |
| Guide    | turn your phone into a dashcam        | phone dashcam · convertir tu móvil en dashcam (informational long-tail)         |
| Legal    | — (brand/navigational)                | privacy policy dashcam app                                                      |

Rules honored: one primary keyword per page (no cannibalization), per-language research (never translated verbatim — ES uses _dashcam, cámara coche, cámara para coche, dash camera, dashcam coche_, not translated EN terms), commercial intent on home/features/pricing, informational on guide.

**Top miss fixed:** the home `<title>` was bare `DriveCam` in both locales. It now leads with the strongest commercial keywords.

**Biggest untapped term:** `dashcam pro` (US pop 49, difficulty 24 — 🎯 Sweet Spot; GB 36/13) — now used on the Pricing page.

---

## Home — `/en/` · `/es/`

**EN (implemented ✅)**

- **Title tag (59):** `Dashcam App for iPhone & Android — Free Dash Cam | DriveCam`
- **Meta description (178):** `DriveCam is the dash cam app and car camera recorder that turns your phone into a witness. Loop recording with GPS, private storage and voice control. Free on iPhone and Android.`
- **H1:** _Your phone is already a **dashcam**._
- **H2 outline:** The road does not give you second takes. → A complete drive recorder, built around your phone. → Not just a recorder. Your side of the story. → Everything a dash cam should do → FAQ (6) → Start driving with a witness. → Contact
- **Key messages:** dashcam / dash cam / car camera recorder in first 100 words; evidence, hands-free voice, private footage, long drives; badges (free plan, offline, private)
- **CTAs:** _Get DriveCam free_ (primary) · _See what PRO unlocks_ (secondary)
- **URL:** `/en/` · **Schema:** SoftwareApplication + FAQPage + Organization ✅
- **Internal links:** → `/en/features/` (anchor: “Every dashcam feature”), → `/en/pricing/` (“Compare free vs PRO”), → `/en/guide/` (“How to set up a phone dashcam”), store links (Google Play, App Store)
- **Image alt:** “DriveCam dash cam app recording the road from a phone mounted on a car windshield”
- **Notes:** SERP intent is dominated by App Store/Play listings (Nexar Classic, DashCam Pro – Car Camera, Dash Cam Travel, kapron Dash Cam) and `dashcam.bike`. Gaps vs. them: background/PiP recording, storage limits, share/upload — DriveCam covers all. Unique angle: privacy-first & offline, no account, one-time PRO purchase (competitors push weekly/yearly subscriptions).

**ES (implemented ✅)**

- **Title tag (60):** `Dashcam App para Coche — Cámara para Coche Gratis | DriveCam`
- **Meta description (169):** `DriveCam es la app dashcam para coche que convierte tu móvil en una cámara para coche fiable. Grabación en bucle con GPS, modo privado y voz. Gratis en iPhone y Android.`
- **H1:** _Tu móvil ya es una **dashcam**._
- **H2 outline:** La carretera no da segundas tomas. → Una cámara para coche completa… → No es solo una cámara… → Todo lo que debería hacer una dashcam → FAQ → Conduce con un testigo a bordo.
- **Key messages:** dashcam / cámara para coche / coche in first 100 words; testigo fiable; privacidad; sin cuenta
- **CTAs:** _Descargar DriveCam gratis_ · _Ver qué desbloquea PRO_
- **URL:** `/es/` · **Schema:** SoftwareApplication + FAQPage ✅
- **Notes:** ES SERPs mix Play listings localized in Spanish (Dash Cam Travel, Dash Cam App Android) and ES app pages. _Cámara para coche_ (accented) is a 💎 Hidden Gem (ES 29/12, MX 27/13) — recently validated. Use accented spelling consistently (unaccented variant scores 13 vs 63 for _cámara coche_).

---

## Features — `/en/features/` · `/es/features/`

**EN (implemented ✅)**

- **Title tag (65):** `Dashcam Features — Loop Recording, GPS & Voice Control | DriveCam`
- **Meta description (155):** `All the features of a dashcam in one car camera app: loop recording, GPS speed stamp, offline voice control, night mode, heat protection and driving stats.`
- **H1/H2:** _Everything a dash cam should do_ (12 features: loop recording, GPS data stamp, speed limit alerts, night mode, offline voice control, background recording, camera selection, driving stats, live streaming, picture-in-picture, private gallery, service tracker)
- **Keywords:** dashcam (US 87) as section context, car camera app, car cam (40/53 GB 🎯), driving recorder (45/28)
- **URL:** `/en/features/` · **Schema:** BreadcrumbList ✅
- **Internal links:** → `/en/pricing/` (“unlock with PRO”), → `/en/guide/`, → home
- **Image alt:** “Loop recording settings inside the DriveCam dashcam app”
- **Notes:** Feature list beats Play listings (kapron, Dash Cam Travel) on organization; add per-feature short answers (snippet bait) over time. Consider `ItemList`/`SoftwareApplication.featureList` schema enhancement.

**ES (implemented ✅)**

- **Title tag (63):** `Funciones de Dashcam — Grabación en Bucle, GPS y Voz | DriveCam`
- **Meta description (155):** `Todas las funciones de tu dash camera: grabación en bucle, datos GPS, control por voz sin conexión, modo noche, protección térmica e informes de incidente.`
- **H1/H2:** _Todo lo que debería hacer una dashcam_ · also carries _dash camera_ (ES 37, 🏆 Hidden Gem) and _gps dashcam_ (ES 25) as supporting terms
- **URL:** `/es/features/` · **Schema:** BreadcrumbList ✅

---

## Pricing — `/en/pricing/` · `/es/pricing/`

**EN (implemented ✅)**

- **Title tag (58):** `Dashcam Pro Pricing — Free Plan vs Lifetime PRO | DriveCam`
- **Meta description (152):** `Start free or unlock dashcam PRO forever with a one-time purchase. Maximum video quality, storage control, live streaming and driving stats. No account.`
- **H1/H2:** _Free to drive. PRO when you are ready._ → plans → FAQ (4)
- **Keywords:** **dashcam pro** (US 49/24 🎯 Sweet Spot; GB 36/13) — the single best untapped term, now primary here
- **Plans:** Free $0/forever · PRO Lifetime $24.99 one-time (⚠️ placeholder price — see README TODO) · 3 rewarded ads → 7-day PRO trial
- **URL:** `/en/pricing/` · **Schema:** BreadcrumbList + FAQPage ✅
- **Notes:** Competitors (DashCam Pro, Dash Cam for iPhone weekly $7.99 / yearly $19.99) push subscriptions — emphasize “one-time purchase, no subscription” as the information gain.

**ES (implemented ✅)**

- **Title tag (54):** `Precios Dashcam — Gratis vs PRO de por Vida | DriveCam`
- **Meta description (165):** `Empieza con la dashcam gratis o desbloquea PRO para siempre con un pago único. Máxima calidad de vídeo, almacenamiento, streaming en vivo y estadísticas. Sin cuenta.`
- **Keywords:** dashcam gratis (ES 10, most relevant transactional term), pago único / sin suscripción
- **Plans:** Gratis 0 € · PRO de por vida 18,99 € (⚠️ placeholder) · prueba con 3 anuncios → 7 días PRO

---

## Guide — `/en/guide/` · `/es/guide/`

**EN (implemented ✅)**

- **Title tag (56):** `How to Turn Your Phone Into a Dashcam — Guide | DriveCam`
- **Meta description (162):** `A practical guide to turning your phone into a dashcam: mounting, the best video settings, battery and heat management — and the rules to check before you record.`
- **H1/H2:** _How to turn your phone into a dashcam_ → mount · video settings · extras · heat & battery · incident footage · _Check the rules where you drive_ → CTA
- **Keywords (informational long-tail, natural phrasing — no volume play):** turn your phone into a dashcam, phone dashcam (US 16–19), dash cam app; secondary: mount, loop recording (1/2/3 min), heat
- **URL:** `/en/guide/` · **Schema:** BreadcrumbList ✅ — recommend adding `HowTo` structured data (steps above are already step-shaped)
- **Internal links:** → `/en/features/` (“see the recording features”), → `/en/pricing/`, → `/en/`
- **Image alt:** “Phone mounted on a windshield as a dashcam, with loop recording settings displayed”
- **Notes:** Competitor pages for this intent are how-to listicles; DriveCam's edge = first-hand experience (heat management, battery, laws) with product tie-ins.

**ES (implemented ✅)**

- **Title tag (56):** `Cómo Convertir tu Móvil en una Dashcam — Guía | DriveCam`
- **Meta description (146):** `Guía práctica para montar una dashcam en el coche con tu móvil: soporte, ajustes de vídeo, batería y calor — y la normativa local antes de grabar.`
- **Keywords:** convertir tu móvil en dashcam, dashcam coche (ES 29 🏆 Hidden Gem), móvil en el coche
- **Recommend:** `HowTo` schema + `Cómo` question H2s for featured-snippet capture.

---

## Legal — `/en/legal/` · `/es/legal/`

- **EN title:** `Privacy Policy & Terms — DriveCam` (33) · **ES:** `Privacidad y Términos — DriveCam` (32)
- Navigational/brand intent — no keyword targeting needed. Keep descriptive and indexable; link from footer on every page. ✅

---

## Not Found — `404.html`

- Noindex-style utility page; excluded from keyword strategy (titles unchanged). ✅

---

## Keyword Research Data (respectASO, Sep 2026)

Popularity / Difficulty / Insight per market. US & GB = English clusters; ES & MX = Spanish clusters.

| Keyword                   | Market | Pop | Diff | Insight        | Assigned page           |
| ------------------------- | ------ | --- | ---- | -------------- | ----------------------- |
| dashcam                   | US     | 87  | 41   | ✅ Good Target | Home EN (primary)       |
| dashcam                   | GB     | 80  | 34   | 🎯 Sweet Spot  | Home EN                 |
| dashcam                   | ES     | 75  | 34   | 🎯 Sweet Spot  | Home ES (primary)       |
| dashcam                   | MX     | 70  | 32   | 🎯 Sweet Spot  | Home ES                 |
| dash cam                  | US     | 80  | 45   | ✅ Good Target | Home EN                 |
| dash cam                  | GB     | 66  | 32   | 🎯 Sweet Spot  | Home EN                 |
| dash cam                  | ES     | 49  | 24   | 🎯 Sweet Spot  | Home ES                 |
| dash cam                  | MX     | 63  | 30   | 🎯 Sweet Spot  | Home ES                 |
| drive recorder            | US     | 57  | 40   | 🎯 Sweet Spot  | Home EN                 |
| drive recorder            | GB     | 63  | 32   | 🎯 Sweet Spot  | Home EN                 |
| driving recorder          | US     | 45  | 34   | 🎯 Sweet Spot  | Features EN             |
| driving recorder          | GB     | 28  | 18   | 🏆 Hidden Gem  | Features EN             |
| car camera                | US     | 43  | 30   | 🎯 Sweet Spot  | Home EN                 |
| car camera                | GB     | 52  | 28   | 🎯 Sweet Spot  | Home EN                 |
| car cam                   | US     | 40  | 33   | 🎯 Sweet Spot  | Features EN             |
| car cam                   | GB     | 53  | 24   | 🎯 Sweet Spot  | Features EN             |
| car recorder              | US     | 40  | 43   | 👍 Moderate    | Features EN             |
| car recorder              | GB     | 39  | 13   | 🏆 Hidden Gem  | Features EN             |
| car camera recorder       | US     | 33  | 19   | 🏆 Hidden Gem  | Home EN                 |
| car camera app            | US     | 10  | 23   | 🔍 Low Volume  | Features EN             |
| dashcam pro               | US     | 49  | 24   | 🎯 Sweet Spot  | Pricing EN (primary)    |
| dashcam pro               | GB     | 36  | 13   | 🏆 Hidden Gem  | Pricing EN              |
| background video recorder | US     | 29  | 34   | 👍 Moderate    | Features EN             |
| phone dashcam             | US     | 16  | 13   | 🚫 Avoid       | Guide EN (supporting)   |
| dash cam app              | US     | 21  | 37   | 🚫 Avoid       | Home EN (supporting)    |
| turn phone into dashcam   | US     | 5   | 24   | 🔍 Low Volume  | Guide EN                |
| phone as dashcam          | US     | 8   | 23   | 🔍 Low Volume  | Guide EN                |
| free dashcam              | GB     | 10  | 9    | 🔍 Low Volume  | Pricing EN (supporting) |
| cámara coche              | ES     | 63  | 29   | 🎯 Sweet Spot  | Home ES                 |
| cámara coche              | MX     | 39  | 18   | 🏆 Hidden Gem  | Home ES                 |
| cámara para coche         | ES     | 29  | 12   | 🏆 Hidden Gem  | Home ES                 |
| cámara para coche         | MX     | 27  | 13   | 🏆 Hidden Gem  | Home ES                 |
| camara coche (unaccented) | ES     | 13  | 9    | 🔍 Low Volume  | — (use accented)        |
| dash camera               | ES     | 37  | 17   | 🏆 Hidden Gem  | Features ES             |
| dashcam coche             | ES     | 29  | 11   | 🏆 Hidden Gem  | Guide ES                |
| gps dashcam               | ES     | 25  | 17   | 👍 Moderate    | Features ES             |
| phone dashcam             | ES     | 18  | 18   | 🚫 Avoid       | Home ES (supporting)    |
| dashcam gratis            | ES     | 10  | 11   | 🔍 Low Volume  | Pricing ES              |
| dash cam auto             | ES     | 15  | 10   | 🚫 Avoid       | — (low value)           |
| dashcam app               | ES     | 10  | 11   | 🔍 Low Volume  | Home ES (supporting)    |
| camara dash               | ES     | 13  | 10   | 🔍 Low Volume  | —                       |
| grabador de coche         | ES     | 5   | 6    | 🔍 Low Volume  | —                       |
| cámara salpicadero        | ES     | 7   | 6    | 🔍 Low Volume  | —                       |

**Notes on data:** respectASO popularity reflects organic App Store search potential, not Ads. “🚫 Avoid” terms still appear naturally in copy as supporting language — they're just not targets. `road camera` (ES 64) was evaluated and rejected: traffic-camera intent, not dashcam.

---

## Post-Launch Recommendations

1. **Build backlinks** to `/en/guide/` (how-to content is the most linkable asset); cite/mention legal requirements per country as a unique resource.
2. **Add `HowTo` schema** to the guide pages (✅ Implemented in `src/content/seo.ts`).
3. **Featured snippets:** add 40–60 word direct answers under question-style H2/H3s (FAQ sections already match this pattern).
4. **Monitor:** GSC per locale (`/en/` vs `/es/`), CTR on home after title change, rankings for `dashcam`, `cámara coche`, `dashcam pro`.
5. **Quarterly audit:** re-run respectASO for these terms (scores drift), refresh prices (replace placeholders), update the guide when laws change.
6. **Same primary keyword must not be reused** on future pages (e.g., a blog post must not target `dashcam` — that's Home's term).

---

## Content Hub Architecture & Non-Branded Search Plan

To capture informational, non-branded search intent beyond core product keywords, `/guide/` serves as the pillar content hub. The content hub is organized into 4 high-demand topic clusters:

### Cluster 1: Phone Dashcam Setup & Hardware (Mounting & Thermal)

- **Pillar URL:** `/en/guide/` (and `/es/guide/`)
- **Target queries:** `turn phone into dashcam`, `turn old phone into dashcam`, `phone dashcam mount`, `how to keep phone cool as dashcam`
- **Intent:** High-intent informational users looking for hardware alternatives.
- **Key takeaways:** Windshield vs dashboard mount positioning, avoiding airbag interference, air vent cooling tips, loop recording configurations (1–2 min).

### Cluster 2: Legal Regulations & Compliance by Country

- **Planned Guides:**
  - `dashcam-laws-uk`: UK dashcam legality, admissible footage, CPS requirements.
  - `dashcam-laws-spain`: Normativa DGT cámaras coche en España, RGPD/AEPD, multas por manipular el móvil.
  - `dashcam-laws-usa`: State-by-state windshield obstruction laws and audio recording consent.
  - `dashcam-laws-germany`: BGH German court rulings on dashcams and data protection.
- **Intent:** Authoritative informational traffic with exceptionally high backlink propensity from motoring clubs and insurance portals.

### Cluster 3: Insurance & Incident Evidence

- **Target queries:** `dashcam footage for insurance claim`, `how to report accident with dashcam`, `what makes dashcam evidence admissible`
- **DriveCam tie-in:** The automated **Incident Report PDF** feature directly fulfills this user search intent.

### Cluster 4: Hardware Dashcam vs Smartphone App

- **Target queries:** `phone dashcam vs dedicated dashcam`, `is a phone good enough as a dash cam`, `best free dash cam app iphone android`
- **Format:** Comparison table and self-contained 40–60 word answer blocks contrasting zero hardware cost, instant wireless playback, and automatic cloudless privacy against dedicated hardwired cameras.
