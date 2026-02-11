# Booking Machine — Praxis Bewegungszeit

A conversion-optimized website for local wellness businesses. Built with Astro for maximum performance and SEO.

## Live Site

**Production:** [lovely-taffy-ccfaf3.netlify.app](https://lovely-taffy-ccfaf3.netlify.app)

## Features

- **Performance:** Static HTML, CSS-only animations, 90+ PageSpeed score
- **SEO:** Schema.org markup, auto-generated sitemap, optimized meta tags
- **Conversion:** Mobile CTA bar, Doctolib booking integration, prominent phone CTAs
- **Compliance:** TDDDG §25 click-to-load for Google Maps, GDPR-ready privacy policy
- **Responsive:** Mobile-first design with smooth animations

## Tech Stack

- **Framework:** [Astro](https://astro.build) (static site generator)
- **Styling:** CSS with custom properties
- **Booking:** Doctolib (external redirect)
- **Forms:** Formspree
- **Hosting:** Netlify

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server (localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
websites/
├── src/
│   ├── components/       # Reusable UI components
│   ├── layouts/          # Page layouts (BaseLayout.astro)
│   ├── pages/            # Route-based pages
│   │   └── leistungen/   # SEO money pages
│   └── styles/           # Global CSS
├── public/               # Static assets (images, favicon, robots.txt)
├── docs/                 # Sales materials (GBP audit template)
├── site.config.ts        # All client-specific data
├── netlify.toml          # Netlify deployment config
└── package.json
```

## Configuration

All client-specific data lives in `site.config.ts`:

- Business name, tagline, contact info
- Address and opening hours
- External service URLs (Doctolib, Formspree, Google Maps)
- Brand colors
- Services and testimonials

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Home — conversion landing page |
| `/termin` | Booking — Doctolib redirect |
| `/kontakt` | Contact form + map |
| `/danke` | Thank you (post-form) |
| `/leistungen/rueckenschmerzen` | SEO money page |
| `/leistungen/sportverletzungen` | SEO money page |
| `/impressum` | Legal notice (DDG §5) |
| `/datenschutz` | Privacy policy (GDPR) |

## Deployment

### Netlify (Recommended)

1. Push to GitHub
2. Connect repo to Netlify
3. Netlify auto-detects Astro and deploys

**Or drag-and-drop:**
1. Run `npm run build`
2. Drag `dist/` folder to [Netlify Drop](https://app.netlify.com/drop)

### Custom Domain

1. Add domain in Netlify dashboard
2. Update DNS records per Netlify instructions
3. Update `robots.txt` and `site.config.ts` with new domain

## Cloning for New Client

1. Duplicate this folder
2. Edit `site.config.ts` with new client data
3. Replace images in `public/images/`
4. Create Formspree form → add ID to config
5. Get client's Doctolib URL → add to config
6. Get Google Maps embed URL → add to config
7. Deploy to new Netlify site

## License

Private — not for redistribution.
