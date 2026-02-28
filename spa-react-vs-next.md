# SPA React vs Next.js Static Export

## What A React SPA Usually Does

- Ships one HTML shell (`index.html`).
- Ships JavaScript bundles.
- Browser loads JS, and client-side routing decides which view to render.
- Server usually rewrites most routes to `/index.html` (SPA fallback).

## What This Next.js Project Does (`output: 'export'`)

- Builds real HTML files per route.
- Example output:
  - `/` -> `out/index.html`
  - `/about/` -> `out/about/index.html`
  - `/contact/` -> `out/contact/index.html`
  - `/services/consulting/` -> `out/services/consulting/index.html`
  - `/services/software/` -> `out/services/software/index.html`
- Host serves those files directly by URL path.
- JS still loads after HTML for hydration and client navigation.

## Why The Service Links Looked Broken Locally

- Local preview used: `serve -s out -l 3000`
- `-s` enables SPA fallback behavior.
- SPA fallback can serve root `out/index.html` instead of per-route exported HTML.
- That conflicted with static-export route behavior and made service pages appear broken.

## What Changed

- We did **not** change how export creates route files.
- We changed preview command only:
  - Before: `serve -s out -l 3000`
  - Now: `serve out -l 3000`

## How Cloudflare Pages / GitHub Pages Resolve Routes

- Request `/services/consulting/`
- Host checks for matching folder/file.
- If folder exists, serves `index.html` in that folder.
- So it serves `out/services/consulting/index.html`, not root `out/index.html`.

This works by default for static hosting as long as you do not add SPA catch-all rewrites like `/* -> /index.html`.

## Which Model Is Better For This Site

For this project (marketing/site pages, SEO, static hosting), Next static export is the better fit:

- Better SEO and link previews (real HTML per page)
- Better first load for route pages
- Natural fit for Cloudflare Pages and GitHub Pages static deployment

Use a pure SPA model when SEO is not important and the app is mostly client-only/dashboard-style.

