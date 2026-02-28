# DnD Main Site (Next.js)

Multi-page company website for DnD Software, migrated from React + Vite to Next.js App Router.

## Stack

- Next.js (App Router)
- React
- Global CSS design system carried over from the previous implementation

## Routes

- `/` Home
- `/about`
- `/services`
- `/services/generative-ai`
- `/services/consulting`
- `/services/software`
- `/contact`
- `/privacy-policy`
- `/terms`

## Development

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
```

Build output is generated to `out/` (static export).

### SEO file generation for static export

- `app/sitemap.js` generates `out/sitemap.xml` during `npm run build`.
- `app/robots.js` generates `out/robots.txt` during `npm run build`.
- Default site URL is `https://dndsoftware.co.za` if no env var is set.
- Set `NEXT_PUBLIC_SITE_URL` to override the domain for different environments.
- Optional: set `NEXT_PUBLIC_BASE_PATH` (or `PAGES_BASE_PATH`) when deploying under a subpath.

Example:

```bash
NEXT_PUBLIC_SITE_URL=https://dndsoftware.co.za npm run build
```

You can start from `.env.example` and set values per environment.

GitHub Pages subpath example:

```bash
NEXT_PUBLIC_SITE_URL=https://username.github.io NEXT_PUBLIC_BASE_PATH=/repo-name npm run build
```

To preview the exported static site locally:

```bash
npm run start
```

Note: preview uses `serve out` (without SPA fallback mode) so per-route exported HTML files are served correctly.

## Notes

- This migration intentionally focuses on framework transition and parity.
- The project is configured for static export (`output: 'export'`).
- SEO-specific enhancements can be added in a dedicated follow-up phase.
