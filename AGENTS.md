# Sortlist Radar

B2B website visitor identification tool for agencies. Tells agencies which companies visited their website, surfaces the right decision-maker, and lets them push leads to Sortlist's marketplace or outbound tools.

**Live**: https://nifinet.github.io/sortlist-radar/
**Repo**: https://github.com/nifinet/sortlist-radar

---

## Versions

| Version | Path | Description |
|---------|------|-------------|
| Static HTML | `index.html` | Single self-contained file (~3300 lines HTML/CSS/JS). Deployed to GitHub Pages from repo root. |
| Next.js | `next/` | Next.js 16 + React 19 + Tailwind CSS 4 + TypeScript. Same content, component-based. |

Both versions should stay in sync. The static HTML is the **source of truth** for design/copy. The Next.js version is the production-ready port.

---

## Design Philosophy

**"On doit croire que c'est mon equipe design qui a shippe."** -- Must look like it was shipped by Sortlist's design team. Clean, polished, professional. No gimmicks.

Animation ONLY where it makes the product understandable:
- No fade-ins on sections
- No stagger on cards
- No counter animations
- No pulsing glow

---

## Design System

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary-500` | `#200DF2` | Brand indigo, buttons, accents |
| `--color-primary-900` | `#020219` | Testimonial/CTA dark sections |
| `--color-secondary-950` | `#0F0D0A` | Hero background |
| `--color-secondary-700` | `#463F39` | Body text |
| `--color-secondary-500` | `#706862` | Muted text |
| `--color-secondary-300` | `#E7DFDA` | Borders |
| `--color-secondary-100` | `#FBFAF9` | Light backgrounds |
| `--color-danger-500` | `#BD0F58` | Identify badge (magenta) |
| `--color-success-500` | `#5C9550` | Signal badge (green) |

### Typography

- **Headings**: Playfair Display 400/700 (NOT italic)
- **Body**: Inter
- Fonts loaded from Google Fonts CDN

### Spacing & Layout

- Container: `max-width: 1152px`
- Section padding: `128px` top / `64px` bottom
- Buttons: `border-radius: 10px`, `padding: 13px 20px`, `min-height: 52px`, bg `#200DF2`

---

## Allowed Animations (only these 3)

### 1. Dashboard Loop (IdentificationSection)

Ghost lines -> identified companies -> expand contact -> "Added" -> fade-out -> reset -> loop.

Reset sequence: fade out -> disable transitions (`dash-no-transition` class) -> reset DOM -> force reflow -> re-enable transitions -> fade in -> restart cycle. The `dash-resetting` state fades to `opacity: 0` (not 0.15).

### 2. Marketplace Flow (MarketplaceSection)

Full orchestrated sequence: typewriter effect, ghost->reveal, progressive signal card build.

### 3. Marquee Logo Bar (SocialProofBar)

Infinite horizontal scroll of visitor logos. Base64-encoded SVGs from Simple Icons, `fill="#463F39"`, displayed at `opacity: 0.35` with hover to `0.7`. Duplicated array for seamless loop. `animation: marquee-scroll 40s linear infinite`.

---

## Architecture

### Static HTML (`index.html`)

Single self-contained file. All CSS in `<style>`, all JS in `<script>`. Sections in order:
1. Navbar
2. Hero
3. SocialProofBar (marquee)
4. Problem (identification pitch)
5. IdentificationSection (dashboard animation)
6. Features (3 cards)
7. MarketplaceSection (marketplace animation)
8. ComparisonTable
9. Testimonials
10. Pricing (single card, free trial + demo CTAs)
11. FAQ
12. FinalCTA
13. Footer

### Next.js (`next/`)

- **Framework**: Next.js 16.1.6, App Router, React 19, Tailwind CSS 4, TypeScript
- **Design tokens**: `next/src/app/globals.css` under `@theme inline` block. Also contains animation keyframes + dashboard/marketplace CSS classes.
- **Layout**: `next/src/app/layout.tsx` (fonts: Playfair Display + Inter via `next/font/google`)
- **Page**: `next/src/app/page.tsx` (composition of all section components)
- **Client components** (with animations): `IdentificationSection.tsx`, `MarketplaceSection.tsx`, `FAQ.tsx`
- **Server components**: everything else
- **Images**: native `<img>` tags with `eslint-disable @next/next/no-img-element`. No `next/image` optimization. CDN logos from `cdn.simpleicons.org` and Google favicons used in IdentificationSection, FeaturesSection, MarketplaceSection. Sortlist logo is inline SVG in `icons/SortlistLogo.tsx`.
- **Config**: `next.config.ts` is empty (no `images.remotePatterns` needed since not using `next/image`)

### Component Map (Next.js)

| Component | File | Client? | Notes |
|-----------|------|---------|-------|
| Navbar | `src/components/Navbar.tsx` | No | |
| Hero | `src/components/Hero.tsx` | No | |
| SocialProofBar | `src/components/SocialProofBar.tsx` | No | Marquee with base64 SVG logos |
| IdentificationSection | `src/components/IdentificationSection.tsx` | Yes | Dashboard animation loop |
| FeaturesSection | `src/components/FeaturesSection.tsx` | No | 3 feature cards with mini-UI visuals |
| MarketplaceSection | `src/components/MarketplaceSection.tsx` | Yes | Marketplace flow animation |
| ComparisonTable | `src/components/ComparisonTable.tsx` | No | |
| Testimonials | `src/components/Testimonials.tsx` | No | |
| Pricing | `src/components/Pricing.tsx` | No | Single card layout |
| FAQ | `src/components/FAQ.tsx` | Yes | Accordion |
| FinalCTA | `src/components/FinalCTA.tsx` | No | |
| Footer | `src/components/Footer.tsx` | No | |
| SortlistLogo | `src/components/icons/SortlistLogo.tsx` | No | Inline SVG |

---

## Deployment

### GitHub Pages (static HTML)

The static HTML is served from `index.html` at the repo root.

**URL**: https://nifinet.github.io/sortlist-radar/

**Workflow**:
1. Edit `index.html`
2. `git add . && git commit -m "message" && git push`
3. GitHub Pages auto-deploys from `main` branch root

### Next.js (local dev)

```bash
cd next/
npm install
npm run dev
```

Builds at http://localhost:3000.

---

## Next.js Dev Commands

```bash
cd next/
npm run dev       # Start dev server
npm run build     # Production build
npm run start     # Start production server
npm run lint      # ESLint
```

---

## Key Decisions

- Logos in SocialProofBar are **full** Simple Icons SVGs base64-encoded inline (not truncated icon-only versions). BMW has the full roundel, Samsung has the full wordmark, IKEA has the full logo with text, Siemens has the full SIEMENS wordmark.
- No `next/image` -- using native `<img>` to avoid complexity with external CDN domains.
- Dashboard animation uses class-based state machine, not React state, for performance (direct DOM manipulation in `useEffect`).
- `prefers-reduced-motion` media query disables all three animations.
