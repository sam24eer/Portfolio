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
  - sends message directly through a backend API route
  - no Gmail/mail-app redirect required for form submission
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

## Contact form email setup

The contact form uses server-side email delivery via SMTP (Gmail app password flow).

Required environment variables:

- `SMTP_HOST` -> SMTP server host (for Gmail: `smtp.gmail.com`)
- `SMTP_PORT` -> SMTP server port (`465` for secure SMTP)
- `SMTP_USER` -> sender Gmail address (your alternate mail id)
- `SMTP_PASS` -> Gmail 16-character app password
- `CONTACT_TO_EMAIL` -> inbox destination (optional, defaults to `skadi@asu.edu`)

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
