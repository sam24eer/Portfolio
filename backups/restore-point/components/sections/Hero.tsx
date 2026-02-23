"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDownRight, Brush, Download, Github, Linkedin, Mail } from 'lucide-react';
import useNarrowMotion from '@/components/hooks/useNarrowMotion';

const textReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
};

const socialLinks = [
  { href: 'https://www.linkedin.com/in/sameer-kadi-a0ba7320a/', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://github.com/sam24eer?tab=repositories', label: 'GitHub', icon: Github },
  { href: 'https://www.behance.net/sameerkadi', label: 'Behance', icon: Brush },
  { href: 'mailto:skadi@asu.edu', label: 'Email', icon: Mail }
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
                    target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={item.href.startsWith('mailto:') ? undefined : 'noreferrer'}
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

