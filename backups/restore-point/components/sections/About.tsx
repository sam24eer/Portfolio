"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import useNarrowMotion from '@/components/hooks/useNarrowMotion';
import { aboutHighlights } from '@/data/site';

const fallbackPortrait =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="640" height="860" viewBox="0 0 640 860"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%23111C2A"/><stop offset="100%" stop-color="%23070C12"/></linearGradient></defs><rect width="640" height="860" fill="url(%23g)"/><circle cx="510" cy="190" r="140" fill="%231AC6FF" fill-opacity="0.18"/><circle cx="120" cy="690" r="180" fill="%23F59E0B" fill-opacity="0.15"/></svg>';

const aboutImageCandidates = ['/sameer-kadi-about.jpg', '/photography/hobby-05.jpg', '/sameer-kadi.jpg'];

export default function About() {
  const isNarrowMotion = useNarrowMotion();
  const [candidateIndex, setCandidateIndex] = useState(0);
  const [imgFailed, setImgFailed] = useState(false);

  const currentSrc = imgFailed
    ? fallbackPortrait
    : aboutImageCandidates[Math.min(candidateIndex, aboutImageCandidates.length - 1)];

  const handleImageError = () => {
    if (candidateIndex < aboutImageCandidates.length - 1) {
      setCandidateIndex((prev) => prev + 1);
      return;
    }
    setImgFailed(true);
  };

  return (
    <section id="about" className="section-pad">
      <div className="container-xl">
        <SectionHeading
          eyebrow="About"
          title="Execution-first product operations for AI systems"
          subtitle="Confident delivery under pressure, with strong process discipline and stakeholder alignment."
        />

        <div className="grid gap-5 lg:grid-cols-[0.35fr_0.65fr]">
          <div className="glass overflow-hidden rounded-2xl border border-line">
            <div className="relative h-full min-h-[380px] w-full">
              <Image
                src={currentSrc}
                alt="Sameer Kadi profile"
                fill
                unoptimized={imgFailed}
                sizes="(max-width: 1024px) 100vw, 360px"
                onError={handleImageError}
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="glass rounded-2xl p-6 md:p-8">
            <div className="mb-6 grid gap-3 md:grid-cols-2">
              <div className="space-y-1">
                <p className="text-sm text-muted">
                  <span className="font-semibold text-text">Name:</span> Sameer Kadi
                </p>
                <p className="text-sm text-muted">
                  <span className="font-semibold text-text">Location:</span> USA / Remote
                </p>
              </div>
              <p className="text-sm text-muted">
                <span className="font-semibold text-text">Background:</span> Data Science (Human-Centered Applications)
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {aboutHighlights.map((item, idx) => (
                <motion.p
                  key={item}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: isNarrowMotion, amount: 0.5 }}
                  transition={{ delay: isNarrowMotion ? 0 : idx * 0.06, duration: isNarrowMotion ? 0.28 : 0.5 }}
                  className="rounded-xl border border-line/70 bg-base/50 p-4 text-sm leading-relaxed text-muted"
                >
                  {item}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


