# relinavas.com (portfolio)

Personal portfolio for Relina Vas, Product Manager.

**Stack:** Next.js (App Router) · TypeScript · Tailwind CSS v4 · Geist + Instrument Serif (self-hosted) · Vercel

## Run locally

```bash
npm install
npm run dev   # http://localhost:3000
```

## Editing content

All copy lives in `src/content/site.ts`. Any string wrapped in `[brackets]` is a placeholder and renders in burgundy italic until replaced.

Still to fill in:

- Email and LinkedIn URLs (`site.links`)
- `public/resume.pdf`
- Experience dates, SuperWorld role, one-line outcomes, school name
- "What I'd change" for each project, observability result
- Mira's Retell AI demo link (`demo` on the Mira project)
- Experience outcomes per role, and the "outside work" line in About

## Structure

```
src/
  app/            layout, global styles, fonts
  app/projects/[slug]/  one detail page per project
  components/     Nav, Hero (typed headline), Projects (cards), Experience (timeline + detail panel), About, Contact
  content/site.ts all copy and links
```

## Deploy

Import the repo in Vercel. No environment variables needed.
