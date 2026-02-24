"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDownRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import useNarrowMotion from '@/components/hooks/useNarrowMotion';

const textReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
};

const gmailComposeUrl = (subject: string, body: string) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=skadi@asu.edu&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

function BehanceIcon({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" fill="currentColor">
      <path d="M8.45 10.7c1.2 0 2.2-.8 2.2-2.08 0-1.2-.9-2.02-2.3-2.02H4v10.8h4.55c2.2 0 3.45-1.12 3.45-2.86 0-1.84-1.3-3.14-3.55-3.14ZM6.1 8.05h2c.7 0 1.12.38 1.12.96 0 .64-.44 1.03-1.12 1.03h-2V8.05Zm2.17 7.82H6.1v-2.45h2.2c.95 0 1.45.45 1.45 1.2 0 .8-.53 1.25-1.48 1.25Zm6.38-6.68h4.62V8h-4.62v1.2Zm2.3 1.05c-2.33 0-3.9 1.6-3.9 3.86 0 2.34 1.5 3.85 4 3.85 1.82 0 3.15-.9 3.67-2.38h-1.88c-.3.48-.92.77-1.72.77-1.13 0-1.84-.58-1.95-1.62h5.7c.03-2.86-1.58-4.48-3.92-4.48Zm-1.77 3c.12-.96.72-1.5 1.74-1.5s1.62.56 1.7 1.5h-3.44Z" />
    </svg>
  );
}

const socialLinks = [
  { href: 'https://www.linkedin.com/in/sameer-kadi-a0ba7320a/', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://github.com/sam24eer?tab=repositories', label: 'GitHub', icon: Github },
  { href: 'https://www.behance.net/sameerkadi', label: 'Behance', icon: BehanceIcon },
  { href: gmailComposeUrl('Portfolio Inquiry', ''), label: 'Email', icon: Mail }
];

const fallbackPortrait =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="720" height="960" viewBox="0 0 720 960"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%23111C2A"/><stop offset="100%" stop-color="%23070C12"/></linearGradient></defs><rect width="720" height="960" fill="url(%23g)"/><circle cx="520" cy="220" r="180" fill="%231AC6FF" fill-opacity="0.18"/><circle cx="150" cy="760" r="210" fill="%23F59E0B" fill-opacity="0.15"/><text x="48" y="860" fill="%23ECF2F8" font-family="Arial" font-size="36">Sameer Kadi</text><text x="48" y="902" fill="%2391A2B7" font-family="Arial" font-size="20">Product Operations and AI Products</text></svg>';

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const isNarrowMotion = useNarrowMotion();
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-noise opacity-30" />
      <motion.div
        className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-brand/20 blur-3xl"
        animate={prefersReducedMotion || isNarrowMotion ? undefined : { scale: [1, 1.08, 1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container-xl relative z-10 py-20 md:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.72fr]">
          <div>
            <motion.p
              variants={textReveal}
              initial="hidden"
              animate="visible"
              className="mb-5 text-xl font-bold tracking-[0.12em] text-brandSoft md:text-2xl"
            >
              Sameer Kadi
            </motion.p>
            <motion.h1
              variants={textReveal}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.08, duration: 0.75 }}
              className="max-w-4xl font-[var(--font-display)] text-4xl font-semibold leading-[1.04] text-text sm:text-6xl md:text-7xl"
            >
              <span className="block text-gradient">Product Operations</span>
              <span className="mt-1 block text-gradient">AI &amp; Data Products</span>
            </motion.h1>
            <motion.p
              variants={textReveal}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.16, duration: 0.65 }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-xl"
            >
              I design, operate, and scale AI-powered systems with execution discipline.
            </motion.p>
            <motion.div
              variants={textReveal}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.24, duration: 0.65 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a href="#projects" className="focus-ring inline-flex items-center gap-2 rounded-xl border border-brand/50 bg-brand/15 px-5 py-3 text-sm font-medium text-brandSoft transition hover:-translate-y-0.5 hover:bg-brand/25">
                View Projects <ArrowDownRight size={16} />
              </a>
              <a href="/resume" className="focus-ring inline-flex items-center gap-2 rounded-xl border border-line bg-panel px-5 py-3 text-sm font-medium text-text transition hover:-translate-y-0.5 hover:border-brand/60">
                Download Resume <Download size={16} />
              </a>
            </motion.div>

            <motion.div
              variants={textReveal}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.31, duration: 0.55 }}
              className="mt-5 flex items-center gap-3"
            >
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    title={item.label}
                    className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-panel text-muted transition hover:border-brand/60 hover:text-text"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.55 }} className="glass relative mx-auto w-full max-w-sm overflow-hidden rounded-3xl border border-line">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base via-transparent to-transparent" />
            <div className="relative h-[500px] w-full">
              <Image
                src={imgFailed ? fallbackPortrait : '/sameer-kadi.jpg'}
                alt="Sameer Kadi"
                fill
                priority
                unoptimized={imgFailed}
                sizes="(max-width: 1024px) 100vw, 420px"
                onError={() => setImgFailed(true)}
                className="object-cover object-center"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="inline-flex rounded-full bg-black/65 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                Product Ops
              </p>
              <p className="mt-2 inline-flex rounded-full bg-black/65 px-3 py-1 font-[var(--font-display)] text-sm font-semibold !text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.55)] md:text-base">
                AI Systems + Execution Discipline
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

