# Sameer Kadi Portfolio

Recruiter-facing personal portfolio for Product Operations and AI Product roles.

## Live Portfolio

https://sameerkadi.vercel.app/

## Latest Updates

- Continuous animated ambient background (dark and light mode) with cross-platform-safe CSS motion.
- Smooth flowing multicolor animation for the hero gradient headline text.
- Contact form moved to server-side email delivery with no Gmail/mail-app redirect on submit.
- SMTP-based contact backend (`/api/contact`) using Gmail app-password flow.
- Persistent theme support, section-aware navigation, and responsive performance tuning across desktop/mobile.

## Core Sections

- Hero (positioning, CTA, social links)
- About
- Featured Case Study (animated architecture diagram + operations design)
- Secondary Projects (interactive modal)
- Experience timeline
- Skills architecture clusters
- Photography hobby gallery
- Contact and return-to-top

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Nodemailer (SMTP email sending)
- Lucide React
- Vercel Analytics

## Run Locally

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Open `http://localhost:3000` (or the next free port shown in terminal)

## Build

- Production build: `npm run build`
- Production run: `npm start`

## Contact Form Setup (SMTP)

The contact form posts to `app/api/contact/route.ts` and sends mail server-side.

Required environment variables:

- `SMTP_HOST` -> SMTP host (Gmail: `smtp.gmail.com`)
- `SMTP_PORT` -> SMTP port (`465` for secure SMTP)
- `SMTP_USER` -> sender Gmail address (alternate email id)
- `SMTP_PASS` -> Gmail 16-character app password
- `CONTACT_TO_EMAIL` -> destination inbox (optional, defaults to `skadi@asu.edu`)

### Gmail requirements

1. Enable 2-Step Verification on `SMTP_USER`.
2. Create a Google App Password (Mail).
3. Use that app password as `SMTP_PASS`.

## Key Project Structure

- `data/site.ts` -> centralized content for portfolio sections.
- `components/sections/*` -> Hero, About, Projects, Experience, Skills, Hobby, Contact.
- `components/ui/*` -> shared UI components (Navbar, headings).
- `app/api/contact/route.ts` -> server-side contact email endpoint.
- `app/resume/route.ts` -> serves downloadable resume PDF.

## Assets

- Hero image: `public/sameer-kadi.jpg`
- About image: `public/sameer-kadi-about.jpg`
- Resume file: `public/Sameer-Kadi-Resume.pdf`
- Photography images: `public/photography/*`

## Deployment

Source of truth is GitHub, production is on Vercel.  
Push to `main` to trigger a new deployment.
