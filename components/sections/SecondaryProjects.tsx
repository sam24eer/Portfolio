"use client";
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { secondaryProjects } from '@/data/site';
export default function SecondaryProjects() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeProject = activeIndex !== null ? secondaryProjects[activeIndex] : null;
  return (
    <section className="section-pad pt-2">
      <div className="container-xl">
        <SectionHeading eyebrow="Additional Work" title="Secondary product and operations projects" subtitle="Each project demonstrates decision rigor, analytics depth, and delivery structure." />
        <div className="grid gap-5 md:grid-cols-2">
          {secondaryProjects.map((project, index) => (
            <motion.button key={project.title} type="button" onClick={() => setActiveIndex(index)} whileHover={{ y: -6, scale: 1.01 }} whileTap={{ scale: 0.99 }} className="glass focus-ring text-left rounded-2xl p-6">
              <p className="mb-3 text-xs uppercase tracking-[0.22em] text-brandSoft">Project</p>
              <h3 className="font-[var(--font-display)] text-2xl text-text">{project.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">{project.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (<span key={item} className="rounded-full border border-line px-3 py-1 text-xs text-muted">{item}</span>))}
              </div>
            </motion.button>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {activeProject ? (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveIndex(null)}>
            <motion.div initial={{ opacity: 0, y: 16, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.98 }} transition={{ duration: 0.22 }} className="w-full max-w-2xl rounded-2xl border border-line bg-base p-6" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label={`${activeProject.title} details`}>
              <div className="mb-4 flex items-start justify-between gap-4">
                <h3 className="font-[var(--font-display)] text-2xl text-text">{activeProject.title}</h3>
                <button type="button" onClick={() => setActiveIndex(null)} aria-label="Close project details" className="focus-ring rounded-lg border border-line p-2 text-muted transition hover:text-text"><X size={18} /></button>
              </div>
              <p className="mb-5 text-sm text-muted">{activeProject.summary}</p>
              <ul className="space-y-2 text-sm text-muted">
                {activeProject.details.map((item) => (<li key={item} className="rounded-lg border border-line/70 p-3">{item}</li>))}
              </ul>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
