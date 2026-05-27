# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # dev server at localhost:3000
npm run build      # production build
npm run deploy     # build + push to gh-pages branch (deploys to https://luis96raul1.github.io)
npm test           # run tests (watch mode)
```

## Architecture

Single-page portfolio built with Create React App, deployed to GitHub Pages. No React Router — navigation is hash-based (`window.location.replace('#work')`). The page is a vertical stack of three full-viewport sections rendered in `App.js`:

```
WrapperContext
  ├── Modal          (image zoom overlay)
  ├── Header         (fixed nav, hamburger on mobile)
  ├── Title          (hero section with 3D cube animation)
  ├── Work           (carousel of work projects)
  └── Skills         (carousel of skills)
```

### State management

Two React contexts, both provided by `WrapperContext`:
- `languageContext` — `language` (`'en'` | `'es'`), toggled from the header. All bilingual content is stored inline as `{ en: ..., es: ... }` objects inside the `works` and `skills` arrays in `Work.js` and `Skills.js`.
- `ModalContext` — `fullShow` (either `false` or the `src` URL string of the image to enlarge). `Header` reads this to lower its z-index below the modal overlay.

### Carousels

Both `Work` and `Skills` use the same custom carousel pattern: `useReducer` with `currentPageReducer` (actions: `set`, `next`, `previous`), plus a `lastPage` state that tracks slide direction for enter/exit animations. Bootstrap carousel CSS classes are used for markup structure, but the JS logic is entirely custom.

Shared carousel sub-components:
- `CarouselButtons` — prev/next arrow controls
- `CarouselIndicator` — dot indicators, also handles direct jump via `set` dispatch

### Styling

The codebase mixes two CSS-in-JS libraries — both are intentional:
- `@emotion/react` / `@emotion/styled` — used in most page-level components (`Title`, `ShowData`). Requires the `/** @jsxImportSource @emotion/react */` pragma at the top of any file that uses the `css` prop directly.
- `styled-components` — used in `Header.js` and `TitleMessageAnimator.js`.

Global styles (fonts, scrollbar, carousel layout, responsive breakpoints) live in `src/assets/styles/index.css`.

Animations come from `animate.css` classes (e.g. `animate__backInRight`, `animate__zoomIn`) applied conditionally in `ShowData` and `Header`.

### Adding content

To add a new work item or skill, append an object to the `works` array in `src/pages/Work.js` or the `skills` array in `src/pages/Skills.js`. Each entry needs `id` (sequential integer), bilingual `description` fields, and imported image references. Import new images via the barrel files in `src/components/imagesImport/`.