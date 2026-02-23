"use client";

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import useNarrowMotion from '@/components/hooks/useNarrowMotion';
import { skills } from '@/data/site';

const groups = [
  { label: 'Product Ops', items: skills.productOps, color: 'from-brand/30 to-transparent' },
  { label: 'AI/ML Lifecycle', items: skills.aiLifecycle, color: 'from-brand/30 to-transparent' },
  { label: 'Analytics', items: skills.analytics, color: 'from-brandSoft/20 to-transparent' },
  { label: 'Tools', items: skills.tools, color: 'from-brand/20 to-transparent' }
];

export default function Skills() {
  const isNarrowMotion = useNarrowMotion();

  return (
    <section id="skills" className="section-pad">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Capabilities"
          title="Skill architecture built for product operations"
          subtitle="Organized as capability clusters rather than generic progress bars."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {groups.map((group, index) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: isNarrowMotion, amount: 0.3 }}
              transition={{ duration: isNarrowMotion ? 0.3 : 0.45, delay: isNarrowMotion ? 0 : index * 0.08 }}
              className="relative overflow-hidden rounded-2xl border border-line bg-panel p-5"
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${group.color}`} />
              <div className="relative">
                <h3 className="mb-4 font-[var(--font-display)] text-xl text-text">{group.label}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-line bg-base/70 px-3 py-1 text-xs text-muted">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
