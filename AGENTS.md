# Agent Instructions

## Repo layout

- `.github/workflows/` - CI/CD deployment pipelines to publish GitHub Pages.
- `src/` - Core Astro application code
  - `assets/` - Un-optimized local assets (images, icons) strictly processed by Astro's optimized image pipelines at build-time.
  - `components/` - Reusable Astro UI components.
  - `content/` - Content Collections. Hosts raw markdown/mdx data (`projects/`, `blog/`) safely parsed against the schema defined in `config.ts`.
  - `layouts/` - Extensible global page templates (HTML document shells).
  - `pages/` - File-based routing layer. `.astro` and markdown files here become indexed public routes.
  - `styles/` - Global Vanilla CSS tokens and site-wide rules.
- `public/` - Static assets completely bypassing optimization pipelines (direct download PDFs, favicons).

## General Rules

- Always use yarn to install dependencies
- When testing locally, always run these in this order
  - `yarn format`
  - `yarn build`
  - `yarn preview`
