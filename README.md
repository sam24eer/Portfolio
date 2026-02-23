# Sameer Kadi Portfolio

A modern, recruiter-facing personal portfolio for Product Operations and AI Product roles.

## Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Run locally
1. Install dependencies:
   npm install
2. Start dev server:
   npm run dev
3. Open http://localhost:3000

## Build for production
npm run build
npm start

## Personalization assets
- Add your portrait at `public/sameer-kadi.jpg` for Hero/About image cards.
- If the image is missing, the site auto-falls back to a branded visual placeholder.

## Architecture notes
- `data/site.ts` centralizes portfolio content so sections stay maintainable.
- `components/sections` contains isolated section modules.
- Motion patterns prioritize readability and performance.
- Typography and spacing are tuned for recruiter-first scanning.

## Deploy
Push to GitHub, import into Vercel as a Next.js project, and deploy.
