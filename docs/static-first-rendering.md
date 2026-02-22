# Static-First Rendering (Current Project)

This document explains exactly how rendering works in the current Next.js implementation.

## What "static-first" means here

Static-first means:

1. HTML is generated ahead of time (at build), not generated on every request.
2. The server/CDN returns prebuilt HTML quickly.
3. Client JavaScript hydrates interactive parts afterward.

In this project, route content is pre-rendered, then interactive UI (menu, announcement slider, form behavior) becomes interactive after hydration.

## Global rendering behavior

1. `app/layout.jsx` is a Server Component layout.
2. The layout wraps all pages with `SiteLayoutClient` from `src/components/site-layout-client.jsx`.
3. `SiteLayoutClient` is a Client Component (`'use client'`) and handles interactivity (nav menu, products dropdown, announcement carousel, section reveal).
4. This means pages are still pre-rendered as HTML first, then hydrated for interactions.

## Route-by-route rendering

### Route: `/`

- File: `app/page.jsx`
- Rendering: statically pre-rendered at build (SSG)
- Content source: `HomePage` in `src/components/site-pages.jsx`

### Route: `/about`

- File: `app/about/page.jsx`
- Rendering: statically pre-rendered at build (SSG)
- Content source: `AboutPage`

### Route: `/services`

- File: `app/services/page.jsx`
- Rendering: statically pre-rendered at build (SSG)
- Content source: `ServicesPage`

### Route: `/services/generative-ai`

- File: `app/services/[slug]/page.jsx`
- Rendering: statically generated from dynamic route using `generateStaticParams()`

### Route: `/services/consulting`

- File: `app/services/[slug]/page.jsx`
- Rendering: statically generated from dynamic route using `generateStaticParams()`

### Route: `/services/software`

- File: `app/services/[slug]/page.jsx`
- Rendering: statically generated from dynamic route using `generateStaticParams()`

### Route: `/services/<unknown-slug>`

- File: `app/services/[slug]/page.jsx`
- Behavior: not generated and resolves to 404
- Reason: `dynamicParams = false` blocks unknown slugs

### Route: `/contact`

- File: `app/contact/page.jsx`
- Rendering: statically pre-rendered at build (SSG)
- Interactivity note: `src/components/contact-form.jsx` is a Client Component and hydrates for client-side form behavior

### Route: `/privacy-policy`

- File: `app/privacy-policy/page.jsx`
- Rendering: statically pre-rendered at build (SSG)

### Route: `/terms`

- File: `app/terms/page.jsx`
- Rendering: statically pre-rendered at build (SSG)

## Why this is static-first and not per-request SSR

1. No route in `app/` currently opts into request-time dynamic rendering.
2. No route uses runtime-only server APIs (for example, request-coupled data access that forces per-request render).
3. Dynamic service pages are prebuilt via `generateStaticParams()`, not rendered per request.

## Practical result

1. Fast initial response with prebuilt HTML.
2. Good baseline for crawlability and performance.
3. Interactive features still work via hydration where needed.
