# AW Digital Solutions: website

Static marketing site for AW Digital Solutions (Alex & Will). Astro 7, static output, no client framework. Vanilla JS for the menu, reveals, live measurements and the form.

Owner-facing guide: [HANDOFF.md](HANDOFF.md).

## Commands

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # → dist/
npm run preview   # serve dist/
node scripts/og.mjs     # regenerate public/og.png (needs Chrome or Edge)
node scripts/icons.mjs  # regenerate favicon PNGs from public/favicon.svg
```

## Structure

| Path | What |
|---|---|
| `src/data/site.js` | **Single source of facts**: name, mission, email, form endpoint, domain, sheets (menu + sitemap), services, process |
| `src/layouts/Sheet.astro` | Page shell: head/SEO, header, footer index, title block, drawing-index `<dialog>` |
| `src/components/Elevation.astro` | Self-drawing hero elevation + live readout |
| `src/components/Icon.astro`, `Mark.astro` | Authored icon set (24px grid, 1.5 stroke) and the AW mark |
| `src/styles/global.css` | All tokens and styles; motion block at the end |
| `src/scripts/site.js` | Menu (open/close animation, focus trap, inert), reveals, stroke drawing, live measurements, form |
| `src/pages/sitemap.xml.js`, `robots.txt.js` | Generated from `site.js` |
| `PRODUCT.md`, `DESIGN.md`, `.impeccable/` | Product record, design system, direction contract |

## Behaviour notes

- **Progressive enhancement.** `<html class="no-js">` is swapped to `js` (and `motion-ok` when reduced motion isn't requested) by an inline head script. All hidden-until-revealed states are scoped under `.motion-ok`, and a 2.5s failsafe removes `motion-ok` if `site.js` never runs. Without JS, the title-block toggle is a link to `#footer-index`.
- **Menu.** A native `<dialog>` opened with `showModal()`, plus an explicit `inert` on the outside landmarks, a Tab loop, and an animated `cancel` handler for Escape. Focus returns to the toggle.
- **Stroke drawing** uses the Web Animations API on every `[pathLength="1"]` element inside `[data-draw]`, staggered by the inline `--d` (ms).
- **Page transitions:** cross-document View Transitions (`@view-transition { navigation: auto }`). Browsers that don't support it just navigate normally.
- **Live readout:** the Performance API (transfer size and DOMContentLoaded) plus computed body contrast. These are measured values, never hard-coded.
- **Form:** posts to Formspree (`formEndpoint`) via fetch when `formIsConnected` is true. Otherwise it refuses to pretend and tells the visitor to email. `_gotcha` is the honeypot.

## Contrast rules (keep these)

- Body text: `--graphite` #1c1e21 on `--vellum` #e4e5e1 is 13.2:1. Secondary text: `--graphite-2` #4a4e54 is 6.6:1.
- Text on the cobalt field uses `#ffffff` or `#e3e7ff`, **not** `--on-cobalt-2` (#c9d2ff). The blueprint grid lines lighten the field, and #c9d2ff measured 4.41:1 over them. `--on-cobalt-2` is for small uppercase labels only (≥6:1 on flat cobalt).
- `--blueline` (#8fb3d9) is decorative only. Never use it for text.

## Verification

Checked against the built output with the small-business-site-build harness (axe, pixel-sampled contrast, links, overflow at 1440/768/390, modal focus behaviour, no-JS, reduced motion) and its provenance check.

## Deploy

```bash
git remote add origin https://github.com/<account>/aw-digital-solutions.git
git push -u origin main
```

Then import the repository in Vercel (framework preset: Astro, output `dist`). Set the real domain in `src/data/site.js` before launch.
