"use client";

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import useNarrowMotion from '@/components/hooks/useNarrowMotion';
import { experienceTimeline } from '@/data/site';

export default function Experience() {
  const isNarrowMotion = useNarrowMotion();

  return (
    <section id="experience" className="section-pad">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Experience"
          title="Operational leadership with measurable execution"
          subtitle="Timeline view of paid experience, leadership scope, and stakeholder-heavy delivery."
        />
        <div className="relative ml-2 border-l border-line pl-6 md:ml-4 md:pl-8">
          {experienceTimeline.map((entry, index) => (
            <motion.article
              key={entry.role}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: isNarrowMotion, amount: 0.4 }}
              transition={{ duration: isNarrowMotion ? 0.32 : 0.5, delay: isNarrowMotion ? 0 : index * 0.08 }}
              className="relative mb-8 rounded-2xl border border-line bg-panel/70 p-5"
            >
              <span className="absolute -left-[2.08rem] top-6 h-3 w-3 rounded-full bg-brand shadow-glow" />
              <p className="text-xs uppercase tracking-[0.2em] text-brandSoft">{entry.period}</p>
              <h3 className="mt-2 font-[var(--font-display)] text-xl text-text">{entry.role}</h3>
              <p className="mt-1 text-sm text-muted">{entry.org}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {entry.bullets.map((bullet) => (
                  <li key={bullet} className="rounded-lg border border-line/70 p-3">
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

