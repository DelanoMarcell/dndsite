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

To preview the exported static site locally:

```bash
npm run start
```

## Notes

- This migration intentionally focuses on framework transition and parity.
- The project is configured for static export (`output: 'export'`).
- SEO-specific enhancements can be added in a dedicated follow-up phase.
