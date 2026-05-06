# Northsphere Studio — website

<img width="1918" height="1078" alt="image" src="https://github.com/user-attachments/assets/de6d9f6e-525d-4d05-9b79-f048d0e2521d" />


Marketing site for **Northsphere Studio**: pages for services, projects, blog, contact (with form submission), careers, and legal content. Built with the Next.js App Router.

## Stack

- **Next.js** 16 · **React** 19 · **TypeScript**
- **Tailwind CSS** v4
- **Framer Motion** · **Lucide React**

## Prerequisites

- Node.js 20+ (recommended)
- npm (or your preferred compatible package manager)

## Setup

```bash
npm install
```

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Local dev server         |
| `npm run build`| Production build         |
| `npm run start`| Serve production build   |
| `npm run lint` | ESLint                   |

## Environment

Optional:

- **`NEXT_PUBLIC_SITE_URL`** — Canonical site URL for metadata and sitemap (defaults to `https://northsphere.studio` in code if unset).

## Contact form

The contact page posts to **FormSubmit** via `getFormSubmitContactUrl()` in `lib/site.ts`. Activate the inbox once at [formsubmit.co](https://formsubmit.co) for the configured email before relying on production submissions.

## Images

Remote images use **Unsplash** (`images.unsplash.com`), allowed in `next.config.ts` via `images.remotePatterns`.

## Project layout (high level)

- `app/` — Routes, layouts, `globals.css`, `icon.svg`
- `components/` — UI sections and shared components
- `content/` — Blog posts and related content
- `lib/` — Site config, visuals, banners
- `public/` — Static assets (e.g. logo SVG)
