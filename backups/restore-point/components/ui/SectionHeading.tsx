"use client";

import { motion } from 'framer-motion';
import useNarrowMotion from '@/components/hooks/useNarrowMotion';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  const isNarrowMotion = useNarrowMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: isNarrowMotion, amount: 0.4 }}
      transition={{ duration: isNarrowMotion ? 0.32 : 0.6, ease: 'easeOut' }}
      className="mb-10"
    >
      <p className="mb-2 text-xs uppercase tracking-[0.24em] text-brandSoft">{eyebrow}</p>
      <h2 className="font-[var(--font-display)] text-3xl font-semibold leading-tight text-text md:text-4xl">
        {title}
      </h2>
      {subtitle ? <p className="section-subtitle mt-3 max-w-2xl text-sm md:text-base">{subtitle}</p> : null}
    </motion.div>
  );
}

