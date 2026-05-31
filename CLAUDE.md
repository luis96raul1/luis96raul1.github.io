# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install        # install deps
npm run dev        # Vite dev server (http://localhost:3000)
npm run build      # type-check + production build → dist/
npm run preview    # serve the production build locally
npm run deploy     # build + push dist/ to gh-pages branch (publishes to https://luis96raul1.github.io)
```

## Architecture

Single-page editorial portfolio. **Vite + React 18 + TypeScript**, deployed to GitHub Pages. No router — sections are stacked on the same page; the header highlights the active one via `IntersectionObserver`. Smooth scrolling is handled by **Lenis**; enter/section animations by **Framer Motion**.

```
App
  ├── LightboxProvider                 (single piece of UI state: { src, open, close })
  │   ├── Header                       (fixed nav, mobile drawer, active-section highlight, language toggle)
  │   ├── main
  │   │     ├── Hero                   (#home — landing, staggered word reveal, 3D cube)
  │   │     ├── Work                   (#work — stacked editorial case studies, image lightbox triggers)
  │   │     ├── Skills                 (#skills — 2-col card grid, reveal-on-scroll stagger)
  │   │     └── About                  (#about — bio + stats)
  │   ├── Footer                       (#contact — large display headline + email + socials)
  │   └── Lightbox                     (fullscreen image preview portal)
```

### Folder layout

| Path                        | Purpose                                                                 |
| ---                         | ---                                                                     |
| `src/sections/`             | Page-level sections (Hero, Work, Skills, About, Footer). One per file.  |
| `src/components/`           | Reusable UI components (Header, Lightbox, Icon).                        |
| `src/components/animations/`| Reveal, RevealStagger/StaggerItem, SplitWords, Typewriter primitives.   |
| `src/hooks/`                | useSmoothScroll (Lenis bootstrap), useActiveSection, useScrolled.       |
| `src/store/`                | React Context stores. Today only `LightboxContext`.                     |
| `src/data/`                 | Static content: `works.ts`, `skills.ts`, `nav.ts`. Bilingual *copy* lives in `src/i18n/locales/{en,es}.json`, keyed by entry. |
| `src/i18n/`                 | `index.ts` (init + `localStorage` persistence) + `locales/{en,es}.json`.|
| `src/styles/`               | SCSS partials, all imported by `index.scss`. `_tokens.scss` is the design system (CSS variables + breakpoints). |
| `src/assets/`               | Static images + (legacy) icons. Prefer the inline `<Icon name="…">` component for new SVGs. |

### State

There's no global state library — just one `LightboxContext` (`{ src, open, close }`) for the image preview. Language state lives in `i18next` and is persisted to `localStorage` under `lr-lang`. Active-section state is derived from scroll position by `useActiveSection`.

### Animation system

- **Smooth scroll**: `useSmoothScroll()` in `App.tsx` boots a Lenis instance (skipped when `prefers-reduced-motion` is set).
- **Section reveals**: `<Reveal>` wraps a node and fades + translates it in when it enters the viewport. `<RevealStagger>` + `<StaggerItem>` stagger children — used by the skills grid.
- **Hero**: word-by-word stagger in the title, `<Typewriter>` for the lede, mounted with `motion` `initial`/`animate`.
- **Header**: `AnimatePresence` for the mobile drawer; `useScrolled` toggles the blurred glass shell.
- **Lightbox**: `AnimatePresence` portal with backdrop fade + frame scale.
- All animations check `useReducedMotion()` or `prefers-reduced-motion` and short-circuit.

### Styling

Pure SCSS — no CSS-in-JS. All visual tokens are CSS custom properties declared in `:root` inside `_tokens.scss` (palette, fonts, radii, easings, breakpoints). SCSS breakpoint *variables* (`$bp-sm`, `$bp-md`…) are only used inside `@media` queries. Use BEM-ish class names (`.case__shot--front`) — they're scoped enough without modules.

Fonts are loaded from Google Fonts in `index.html` (**Fraunces** variable serif for display, **Geist** for body/mono). Don't import fonts inside SCSS — keep the `<link>` so the preconnect hints work.

### Adding content

- **New work**: append a `Work` to `works` in `src/data/works.ts` (set `key`, `url`, `year`, `stack`, `shots`). Add a matching `works.<key>` block to both `en.json` and `es.json` (`type`, `name`, `description` — HTML tags in description go through `<Trans>` so `<strong>` / `<a>` work).
- **New skill**: append a `Skill` to `src/data/skills.ts` and a `skill.<key>` block to both locale files.
- **New section/route**: add to `src/data/nav.ts` (drives both the desktop nav and mobile drawer), then add a section component with matching `id`.

### Deploy

`npm run deploy` runs `vite build` then `gh-pages -d dist`. The `homepage` field in `package.json` (`https://luis96raul1.github.io`) is the canonical URL.
