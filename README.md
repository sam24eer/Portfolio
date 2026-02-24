# Sameer Kadi Portfolio

Recruiter-facing personal portfolio for Product Operations and AI Product roles.

## Live portfolio

https://sameerkadi.vercel.app/

## What has been built

- Premium single-page portfolio with dark/light theme support.
- Persistent pill navigation with section linking and active-state tracking.
- Hero section with CTA actions and social links.
- About section with profile highlights and experience-backed positioning.
- Featured case study with custom animated system architecture diagram.
- Secondary projects with interactive detail modal.
- Experience timeline focused on operations leadership and AI Summit delivery.
- Skills architecture grouped by capability clusters.
- Photography hobby gallery with responsive layout and image expand modal.
- Contact section with social links and form flow:
  - opens web mail compose first
  - falls back to local mail app if needed
- Resume download route wired to latest `public/Sameer-Kadi-Resume.pdf`.
- Mobile and narrow-layout performance optimizations for smoother scrolling.

## Tech stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Run locally

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Open `http://localhost:3000` (or the next free port shown in terminal)

## Build

- Production build: `npm run build`
- Production run: `npm start`

## Key project structure

- `data/site.ts` -> centralized site content and section data.
- `components/sections/*` -> page sections (Hero, About, Projects, Experience, Skills, Hobby, Contact).
- `components/ui/*` -> shared UI elements (Navbar, headings, controls).
- `app/resume/route.ts` -> serves downloadable PDF resume.

## Assets

- Hero image: `public/sameer-kadi.jpg`
- About image: `public/sameer-kadi-about.jpg`
- Resume file: `public/Sameer-Kadi-Resume.pdf`
- Photography set: `public/photography/*`

## Deployment

Source is GitHub; production is deployed on Vercel.  
Push to `main` to trigger a new deployment.

