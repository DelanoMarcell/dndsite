# SEO Plan (Only Missing Work)

This file lists only SEO work that is not implemented yet in the current Next.js project.

Context assumed:
- Next.js App Router
- Static export (`output: 'export'`)
- Deploying static files from `out/`

## 1. Global SEO Infrastructure Missing

## 1.1 Canonical domain config

What is missing:
- A single source of truth for absolute site URL (for canonicals, sitemap, OG URLs, schema URLs).

Implementation:
1. Add `src/lib/seo.js` with:
- `SITE_URL` (from `process.env.NEXT_PUBLIC_SITE_URL` with fallback).
- helpers like `absoluteUrl(path)`.

Build/deploy behavior:
1. Set `NEXT_PUBLIC_SITE_URL` in build environment (Cloudflare Pages / GitHub Actions).
2. `next build` bakes absolute URLs into static HTML and generated files.

## 1.2 Route-level metadata system

What is missing:
- Unique per-page `title`, `description`, canonical, OG, and Twitter metadata.

Implementation:
1. Keep global defaults in `app/layout.jsx`.
2. Add `export const metadata` to each static route file.
3. Add `generateMetadata` in `app/services/[slug]/page.jsx` using slug-specific content.

Build/deploy behavior:
1. Metadata is rendered into each exported HTML file during `next build`.
2. Static host serves final HTML with correct head tags per route.

## 1.3 robots.txt generation

What is missing:
- No generated `robots.txt`.

Implementation:
1. Add `app/robots.js` (or `app/robots.ts`) returning:
- `rules` for crawler access.
- `sitemap` URL.
- `host` URL.

Build/deploy behavior:
1. `next build` outputs `/out/robots.txt`.
2. Static host serves it at `/robots.txt`.

## 1.4 sitemap.xml generation

What is missing:
- No sitemap file generation.

Implementation:
1. Add `app/sitemap.js` (or `app/sitemap.ts`).
2. Include all current routes:
- `/`
- `/about/`
- `/services/`
- `/services/generative-ai/`
- `/services/consulting/`
- `/services/software/`
- `/contact/`
- `/privacy-policy/`
- `/terms/`
3. For service detail routes, derive from the same source used by `generateStaticParams` so URLs cannot drift.

Build/deploy behavior:
1. `next build` outputs `/out/sitemap.xml`.
2. Search engines can discover all pages from static hosting without server runtime.

## 1.5 Structured data (JSON-LD)

What is missing:
- No schema markup is present.

Implementation:
1. Add global JSON-LD in layout:
- `Organization`
- `WebSite`
2. Add route-level JSON-LD:
- `WebPage` for all pages.
- `BreadcrumbList` for non-home pages.
- `Service` schema for `/services/[slug]/` pages.

Build/deploy behavior:
1. JSON-LD script tags are embedded in exported HTML.
2. No runtime API required.

## 1.6 OG image strategy

What is missing:
- No page-ready OG image pipeline.

Implementation:
1. Create static OG images under `public/og/`.
2. Reference route-specific image in metadata.

Build/deploy behavior:
1. Files are copied to `out/og/` during export.
2. Social previews work on static hosts.

## 1.7 404 SEO handling for static hosting

What is missing:
- No explicit SEO plan for unknown paths on static host.

Implementation:
1. Add `app/not-found.jsx` with useful user guidance.
2. Ensure host serves real 404 behavior (no blanket rewrite to home/index for unknown routes).

Build/deploy behavior:
1. Export includes `out/404.html`.
2. Host config determines correct status behavior; verify after deploy.

## 2. Route-by-Route Missing SEO Tasks

## 2.1 `/`

Missing:
1. Unique homepage title and meta description.
2. Homepage canonical URL.
3. Homepage OG/Twitter metadata.
4. Homepage `WebPage` JSON-LD.

Implementation location:
- `app/page.jsx` metadata export.
- JSON-LD component in homepage or layout.

## 2.2 `/about/`

Missing:
1. Page-specific title/description.
2. Canonical URL.
3. OG/Twitter tags.
4. Breadcrumb schema.

Implementation location:
- `app/about/page.jsx`.

## 2.3 `/services/`

Missing:
1. Services index title/description.
2. Canonical URL.
3. OG/Twitter tags.
4. `WebPage` schema and breadcrumb schema.

Implementation location:
- `app/services/page.jsx`.

## 2.4 `/services/[slug]/` (all three service pages)

Missing:
1. Slug-specific metadata from service content.
2. Slug-specific canonical URL.
3. Slug-specific OG/Twitter tags.
4. `Service` schema for each service detail page.
5. Breadcrumb schema.

Implementation location:
- `app/services/[slug]/page.jsx` via `generateMetadata`.
- schema helper using `SERVICE_DETAILS`.

## 2.5 `/contact/`

Missing:
1. Contact-specific metadata.
2. Canonical URL.
3. OG/Twitter tags.
4. `ContactPage`/`WebPage` schema.

Implementation location:
- `app/contact/page.jsx`.

## 2.6 `/privacy-policy/`

Missing:
1. Final indexation decision and implementation.

Implementation choices:
1. Keep indexable with normal metadata.
2. Or add `robots` noindex if policy page should not rank.

Implementation location:
- `app/privacy-policy/page.jsx` metadata.

## 2.7 `/terms/`

Missing:
1. Final indexation decision and implementation.

Implementation choices:
1. Keep indexable with normal metadata.
2. Or add `robots` noindex if terms page should not rank.

Implementation location:
- `app/terms/page.jsx` metadata.

## 3. Content-Level SEO Work Missing

## 3.1 Contextual internal links in body copy

What is missing:
- Deeper in-content internal linking between related pages (not only nav/footer/button links).

Implementation:
1. Add contextual links inside paragraph copy for:
- Home -> About, Services detail pages.
- About -> Services.
- Service detail pages -> related services/case-study pages (when added).

Build/deploy behavior:
1. Links are static HTML in exported pages.

## 3.2 Reusable FAQ blocks for high-intent queries

What is missing:
- No FAQ sections yet on service pages.

Implementation:
1. Add visible FAQ sections per service detail page.
2. Add matching `FAQPage` schema only for visible FAQs.

Build/deploy behavior:
1. FAQ content and schema are exported statically.

## 4. Build and Deploy SEO Validation Missing

## 4.1 Build-time validation checklist

What is missing:
- No explicit SEO validation step after `npm run build`.

Implementation:
1. Add a checklist/script that verifies in `out/`:
- `robots.txt` exists.
- `sitemap.xml` exists.
- key route HTML files exist.
- each key route has expected title/description/canonical.

Build/deploy behavior:
1. Fail CI if required SEO artifacts are missing.

## 4.2 Host-level verification checklist

What is missing:
- No post-deploy SEO verification procedure.

Implementation:
1. Verify on production domain:
- `/robots.txt` returns expected rules.
- `/sitemap.xml` is accessible.
- Canonicals point to production domain.
- Unknown URLs return correct 404 behavior.

Build/deploy behavior:
1. Prevent silent SEO regressions caused by host routing/caching settings.

## 5. Suggested Implementation Order

1. Add URL helper + global defaults (`metadataBase`, canonical helpers).
2. Add per-route metadata (all pages + dynamic service metadata).
3. Add `app/robots.*` and `app/sitemap.*`.
4. Add JSON-LD (global + per-route + service schema).
5. Decide legal page indexation.
6. Add build/deploy SEO verification checks.
7. Add contextual links + FAQ blocks.
