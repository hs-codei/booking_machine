# Booking Machine Website Framework

## Project Overview

A reusable Astro-based website template for local wellness businesses (physiotherapy, yoga studios, chiropractors). Each site is a "Booking Machine" — optimized to convert local search traffic into bookings.

## Tech Stack

- **Framework:** Astro (static site generator)
- **Styling:** CSS with custom properties
- **Animations:** CSS animations + vanilla JS (scroll-triggered)
- **Booking:** Calendly embed
- **Forms:** Formspree
- **Hosting:** Netlify (free tier)

## Project Structure

```
websites/
├── src/
│   ├── components/       # Reusable UI components
│   ├── layouts/          # Page layouts (BaseLayout.astro)
│   ├── pages/            # Route-based pages
│   └── styles/           # Global CSS
├── public/               # Static assets (images, favicon)
├── site.config.ts        # All client-specific data
├── astro.config.mjs      # Astro configuration
└── package.json
```

## Key Files

- **site.config.ts** — Edit this to customize for each client (name, phone, colors, URLs)
- **src/styles/global.css** — CSS variables for colors/typography
- **src/layouts/BaseLayout.astro** — HTML wrapper with meta tags and Schema markup

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (localhost:4321)
npm run build        # Build for production
npm run preview      # Preview production build
```

## Cloning for New Client

1. Duplicate project folder
2. Edit site.config.ts with client data
3. Replace placeholder images in public/images/
4. Create Formspree form → add ID to config
5. Set up Calendly → add URL to config
6. Get Google Maps embed URL → add to config
7. Client provides Impressum/Datenschutz text
8. Deploy to new Netlify site

## Pages

- `/` — Home (conversion landing page)
- `/termin` — Booking (Calendly embed)
- `/kontakt` — Contact form + map
- `/danke` — Thank you (after form submit)
- `/impressum` — Legal (client provides)
- `/datenschutz` — Privacy (client provides)
- `/leistungen/*` — Service/money pages (SEO)

## Animation Guidelines

- Scroll-triggered fade-ups on sections
- Hover effects on buttons/cards (lift + shadow)
- Staggered load animations on hero
- All transitions: 200-300ms ease
- Respect prefers-reduced-motion

## SEO Checklist

Per page:
- [ ] Unique title (50-60 chars)
- [ ] Unique meta description (150-160 chars)
- [ ] One H1 with local keyword
- [ ] Schema markup (LocalBusiness)
- [ ] Canonical URL set
- [ ] Open Graph tags

## Git Workflow

```bash
git add .
git commit -m "Brief description of change"
git push
```

Netlify auto-deploys on push to main.

## Safety Rules

- Never delete files without explicit confirmation
- Never modify files outside this project
- Never use sudo without permission
- Commit regularly for rollback capability
