# Stanley’s Toolbox website

Lightweight bilingual website for Stanley’s Toolbox and its individual tools.
The homepage acts as a warm, minimal catalog; detailed product information
lives on each tool's own page.

## Local development

Requires Node.js 22.13 or newer. GitHub Actions uses Node.js 24.

```bash
npm ci
npm run dev
```

Open `http://localhost:3000/` for English or
`http://localhost:3000/zh-cn/` for Simplified Chinese.

## Static build

```bash
npm run build
```

The deployable static site is written to `dist/client/`. No server, database,
account system, analytics, or external font service is required.

## GitHub Pages deployment

The workflow at `.github/workflows/deploy-pages.yml` builds and deploys every
push to `main`.

This repository is configured as an organization site at the root URL:

`https://stanleys-toolbox.github.io/`

For that URL, create the repository as:

`stanleys-toolbox/stanleys-toolbox.github.io`

Then open **Settings → Pages** and set **Source** to **GitHub Actions**. A push
to `main` will install dependencies, build the static export, and deploy
`dist/client`.

If the GitHub organization or Pages repository uses another name, update the
following before publishing:

- `SITE_URL` and `SUPPORT_URL` in `app/lib/site.ts`
- absolute URLs in `public/robots.txt` and `public/sitemap.xml`
- root-relative links/assets if deploying as a project site under `/<repo>/`

## Public status

Deadline Wall is presented as a preview. The site intentionally does not offer
a download until a release artifact, requirements, signing, and notarization
have been verified.

## Public media

- `public/deadline-wall-film.mp4`: final 30-second product film
- `public/deadline-wall-poster.jpg`: product-film poster
- `public/quick-add-enabled.png`: deterministic synthetic Quick Add snapshot
- `public/stanleys-toolbox-og.png`: generated social sharing artwork

The social image was generated with the built-in image generation tool using
this final prompt:

```text
Use case: ads-marketing
Asset type: website Open Graph social sharing card, landscape 1200×630 composition
Primary request: create a warm, quiet social card for an independent macOS software workshop called Stanley’s Toolbox, matching a refined editorial website
Scene/backdrop: warm ivory paper-like backdrop with subtle natural grain; a restrained arrangement of cream index cards and small tactile desktop objects suggesting a thoughtful maker’s workbench, without depicting real hardware tools or app interfaces
Subject: the Stanley’s Toolbox wordmark and a simple editorial composition that suggests a growing collection of small, carefully made software tools
Style/medium: premium editorial still life combined with precise typographic brand design; understated, human, calm, contemporary
Composition/framing: wide landscape, generous safe margins, wordmark and headline clearly legible on the left; subtle objects and cards balanced on the right; uncluttered at thumbnail size
Lighting/mood: soft natural window light, warm and reassuring, no dramatic glow
Color palette: warm ivory #F6F0E6, cream #FFFDF8, espresso #2D251F, muted terracotta #A65335, restrained olive #6B7055
Materials/textures: uncoated paper, soft card stock, tiny touch of matte ceramic or wood; very subtle shadows
Text (verbatim): “Stanley’s Toolbox” and “Small tools. Made with care.”
Typography: elegant editorial serif for the headline with a clean humanist sans-serif for the brand; exact spelling and punctuation; no additional text
Constraints: social-card-safe margins; exact text only; no logos beyond the text wordmark, no app screenshots, no devices, no people, no watermark
Avoid: dark navy, cyan glow, neon, cyberpunk, technical grids, glassmorphism, dashboards, toolboxes or construction tools, busy stock-photo styling
```
