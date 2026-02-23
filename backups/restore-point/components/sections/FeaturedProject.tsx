"use client";
import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import useNarrowMotion from '@/components/hooks/useNarrowMotion';
import { featuredCaseStudy } from '@/data/site';
function ArchitectureDiagram() {
  const isNarrowMotion = useNarrowMotion();
  const layers = featuredCaseStudy.architectureLayers;
  const flowNodes = [
    { key: 'user', label: 'User UI', x: 720, y: 62, lx: 748, ly: 66, anchor: 'start' as const },
    { key: 'api', label: 'API', x: 720, y: 136, lx: 748, ly: 140, anchor: 'start' as const },
    { key: 'classifier', label: 'Classifier', x: 720, y: 210, lx: 748, ly: 214, anchor: 'start' as const },
    { key: 'decision', label: 'Decision Engine', x: 720, y: 284, lx: 748, ly: 288, anchor: 'start' as const },
    { key: 'auto', label: 'Auto-Resolve', x: 680, y: 358, lx: 620, ly: 350, anchor: 'end' as const },
    { key: 'escalate', label: 'Escalate', x: 760, y: 358, lx: 772, ly: 390, anchor: 'start' as const },
    { key: 'metrics', label: 'Metrics', x: 720, y: 440, lx: 748, ly: 444, anchor: 'start' as const }
  ];

  const flowLines = [
    'M720 82 L720 116',
    'M720 156 L720 190',
    'M720 230 L720 264',
    'M720 304 L680 338',
    'M720 304 L760 338',
    'M680 378 L720 420',
    'M760 378 L720 420',
    'M680 136 L626 136',
    'M626 136 L626 370',
    'M626 370 L658 370'
  ];

  const layerDetails = (text: string) => {
    const words = text.split(' ');
    const lines: string[] = [];
    let line = '';

    words.forEach((word) => {
      const candidate = line ? `${line} ${word}` : word;
      if (candidate.length <= 96) {
        line = candidate;
        return;
      }
      if (line) lines.push(line);
      line = word;
    });

    if (line) lines.push(line);

    if (lines.length <= 2) return lines;
    return [lines[0], `${lines[1]}...`];
  };

  return (
    <div className="glass rounded-2xl p-5 md:p-6">
      <h3 className="mb-4 font-[var(--font-display)] text-xl text-text">System Architecture</h3>
      <svg viewBox="0 0 820 600" className="h-auto w-full" role="img" aria-label="AI support operations architecture with layered flow and ops control">
        {layers.map((layer, index) => {
          const y = 24 + index * 86;
          const detailLines = layerDetails(layer.details);
          return (
            <g key={layer.name}>
              <motion.rect x="40" y={y} rx="14" ry="14" width="500" height="78" fill="rgb(var(--c-panel) / 0.92)" stroke="rgb(var(--c-brand) / 0.45)" initial={isNarrowMotion ? { opacity: 0 } : { pathLength: 0, opacity: 0 }} whileInView={isNarrowMotion ? { opacity: 1 } : { pathLength: 1, opacity: 1 }} viewport={{ once: isNarrowMotion, amount: 0.4 }} transition={{ delay: isNarrowMotion ? 0 : index * 0.12, duration: isNarrowMotion ? 0.26 : 0.7 }} />
              <text x="60" y={y + 30} fill="rgb(var(--c-text))" fontSize="17" fontWeight="600">{layer.name}</text>
              {detailLines.slice(0, 2).map((line, lineIndex) => (
                <text key={`${layer.name}-${lineIndex}`} x="60" y={y + 53 + lineIndex * 17} fill="rgb(var(--c-muted))" fontSize="11">
                  {line}
                </text>
              ))}
            </g>
          );
        })}
        {flowLines.map((path, index) => (
          <motion.path
            key={path}
            d={path}
            stroke="rgb(var(--c-brand) / 0.75)"
            strokeWidth="2"
            strokeDasharray="6 6"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: isNarrowMotion, amount: 0.4 }}
            transition={{ delay: isNarrowMotion ? 0 : 0.25 + index * 0.08, duration: isNarrowMotion ? 0.24 : 0.55 }}
          />
        ))}
        {flowNodes.map((node, index) => (
          <g key={node.key}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="20"
              fill="rgb(var(--c-brand) / 0.18)"
              stroke="rgb(var(--c-brand) / 0.8)"
              initial={{ scale: 0.2, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: isNarrowMotion, amount: 0.4 }}
              transition={{ delay: isNarrowMotion ? 0 : 0.2 + index * 0.08, duration: isNarrowMotion ? 0.24 : 0.45 }}
            />
            {node.key === 'auto' ? (
              <>
                <text x={node.lx} y={node.ly} fill="rgb(var(--c-muted))" fontSize="10" fontWeight="600" textAnchor={node.anchor}>
                  Auto
                </text>
                <text x={node.lx} y={node.ly + 12} fill="rgb(var(--c-muted))" fontSize="10" fontWeight="600" textAnchor={node.anchor}>
                  Resolve
                </text>
              </>
            ) : (
              <text x={node.lx} y={node.ly} fill="rgb(var(--c-muted))" fontSize="10" fontWeight="600" textAnchor={node.anchor}>
                {node.label}
              </text>
            )}
          </g>
        ))}
        <text x="602" y="122" fill="rgb(var(--c-muted))" fontSize="10" fontWeight="600">Ops UI GET /tickets</text>
        <text x="672" y="390" fill="rgb(var(--c-muted))" fontSize="10" fontWeight="600" textAnchor="end">Ticket Store</text>
        <text x="672" y="402" fill="rgb(var(--c-muted))" fontSize="10" fontWeight="600" textAnchor="end">Read</text>
      </svg>
    </div>
  );
}
export default function FeaturedProject() {
  const [open, setOpen] = useState(false);
  const stack = useMemo(() => featuredCaseStudy.stack, []);
  return (
    <section id="projects" className="section-pad">
      <div className="container-xl">
        <SectionHeading eyebrow="Featured Case Study" title={featuredCaseStudy.title} subtitle={featuredCaseStudy.problem} />
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <ArchitectureDiagram />
          <div className="glass rounded-2xl p-6">
            <h3 className="mb-4 font-[var(--font-display)] text-xl text-text">Operations Design</h3>
            <ul className="space-y-3 text-sm text-muted">{featuredCaseStudy.workflows.map((item) => (<li key={item} className="rounded-lg border border-line/70 bg-base/40 p-3">{item}</li>))}</ul>
            <div className="mt-5 flex flex-wrap gap-2">{stack.map((tech) => (<span key={tech} className="rounded-full border border-brand/35 bg-brand/10 px-3 py-1 text-xs text-brandSoft">{tech}</span>))}</div>
            <button type="button" onClick={() => setOpen(true)} className="focus-ring mt-6 w-full rounded-xl border border-line bg-panel px-4 py-3 text-sm font-medium text-text transition hover:border-brand/60">Open Full Case Study</button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)}>
            <motion.div className="max-h-[90vh] w-full max-w-4xl overflow-auto rounded-2xl border border-line bg-base p-6 md:p-8" initial={{ scale: 0.96, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.96, opacity: 0, y: 12 }} transition={{ duration: 0.25 }} onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label="AI Customer Support Operations Platform full case study">
              <div className="mb-4 flex items-start justify-between gap-4">
                <h3 className="font-[var(--font-display)] text-2xl text-text">{featuredCaseStudy.title}</h3>
                <button type="button" onClick={() => setOpen(false)} className="focus-ring rounded-lg border border-line p-2 text-muted transition hover:text-text" aria-label="Close case study modal"><X size={18} /></button>
              </div>
              <p className="mb-5 text-sm leading-relaxed text-muted">{featuredCaseStudy.problem}</p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-line p-4"><h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-brandSoft">User Personas</h4><ul className="space-y-3 text-sm text-muted">{featuredCaseStudy.personas.map((persona) => (<li key={persona.title}><p className="font-medium text-text">{persona.title}</p><p>{persona.need}</p></li>))}</ul></div>
                <div className="rounded-xl border border-line p-4"><h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-brandSoft">Metrics Tracked</h4><ul className="space-y-2 text-sm text-muted">{featuredCaseStudy.metrics.map((metric) => (<li key={metric}>- {metric}</li>))}</ul></div>
                <div className="rounded-xl border border-line p-4"><h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-brandSoft">Incident Handling</h4><ul className="space-y-2 text-sm text-muted">{featuredCaseStudy.incidents.map((item) => (<li key={item}>- {item}</li>))}</ul></div>
                <div className="rounded-xl border border-line p-4"><h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-brandSoft">Release Management</h4><ul className="space-y-2 text-sm text-muted">{featuredCaseStudy.releases.map((item) => (<li key={item}>- {item}</li>))}</ul></div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}


