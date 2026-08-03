# Unmask Graves&rsquo; Disease

A rebuilt, awareness-first campaign site for **Unmask Graves&rsquo; Disease** — a
public-health awareness initiative. Built with **Next.js 14 (App Router)**,
**TypeScript**, and **Tailwind CSS**, and ready to deploy on **Vercel**.

This replaces the previous Wix build with a faster, accessible, SEO-ready site
that dramatizes the campaign&rsquo;s core message and gives storytelling a real
home.

---

## What changed and why

| Area | Before (Wix) | Now |
| --- | --- | --- |
| **Statistics** | Static text | Animated count-ups that make "1 in 100," "7–8×," and "75 years" land |
| **Symptoms** | Flat list, one repeated icon | Interactive, keyboard-accessible category tabs grouped by body system |
| **Storytelling** | A single link | A dedicated, anonymized submission flow + a community stories gallery |
| **Community** | None | A **#GravesUnmasked** community blog with anonymized reflections and plain-language explainers |
| **Navigation** | None persistent | Sticky header with section anchors and a clear primary CTA |
| **Performance** | Heavy Wix runtime | Statically rendered, minimal JS, system-font fallback |
| **Accessibility** | Wix defaults | Semantic landmarks, skip link, visible focus, `prefers-reduced-motion`, ARIA tabs/alerts |
| **SEO** | Basic | Metadata, Open Graph, sitemap, robots, canonical URLs |
| **References** | Anchors pointed back to the homepage | Real, formatted citations linking to primary sources |

---

## Getting started

```bash
npm install
npm run dev
# open http://localhost:3000
```

Build for production:

```bash
npm run build
npm start
```

---

## Deploy

### Vercel (recommended)
1. Push this repository to GitHub.
2. In Vercel, **Add New Project → Import** the repo.
3. Framework preset is auto-detected as **Next.js** — no configuration needed.
4. Deploy. Add the custom domain (`unmaskgravesdisease.com`) in **Settings → Domains**.

### GitHub
```bash
git init
git add .
git commit -m "Rebuild Unmask Graves' Disease as a Next.js app"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

---

## Project structure

```
src/
  app/
    layout.tsx            Root layout: fonts, metadata, header/footer, consent
    page.tsx              Home (all campaign sections)
    share/                Share Your Story form page
    stories/              Community stories gallery
    blog/                 #GravesUnmasked community blog (index + [slug] posts)
    privacy|cookies|terms|social/   Footer-linked pages
    api/stories/route.ts  Story submission endpoint (validates; storage TODO)
    opengraph-image.tsx   Auto-generated social share image
    sitemap.ts, robots.ts, icon.svg
  components/             Hero, StatBand, Symptoms, CampaignMark, BlogCard, etc.
  lib/                    symptoms, references, stories, posts (all composites)
```

---

## Connecting story submissions

`src/app/api/stories/route.ts` validates submissions and enforces consent, but
does not yet persist them. Connect a database (Vercel Postgres, Supabase),
a notification service (Resend), or a form backend inside the marked block, and
route everything through **human moderation** before publishing.

---

## Compliance built in

- **No product promotion (FDA):** the site is unbranded and makes no claims
  about any specific medicine. Clinical statements are footnoted to the cited
  sources.
- **No patient names, ever:** the story flow collects an optional *display name*
  only, defaults to "Anonymous," and the display layer never renders a real
  name. Seed stories are clearly labeled illustrative composites.
- **GDPR:** explicit consent on the form, consent-gated analytics via the cookie
  banner, and a privacy policy describing data rights.
- **Palette:** a general awareness theme — dark blue (`#0A3D6B`) dominant, light
  blue (`#4AA3E0`) as the single accent. The site carries its own campaign
  wordmark; the sponsor is credited in the footer.

> The legal pages are templates and must be reviewed by qualified counsel and
> regulatory/medical review before going live.

---

## Accessibility & performance notes

- Semantic landmarks, one `<h1>` per page, labeled sections.
- Keyboard-operable nav, tabs, and forms with visible focus.
- Respects `prefers-reduced-motion` (animations reduce to none).
- Fonts loaded via `next/font` with `display: swap` and system fallbacks.
```
