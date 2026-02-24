"use client";

import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import useNarrowMotion from '@/components/hooks/useNarrowMotion';

function BehanceIcon({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" fill="currentColor">
      <path d="M8.45 10.7c1.2 0 2.2-.8 2.2-2.08 0-1.2-.9-2.02-2.3-2.02H4v10.8h4.55c2.2 0 3.45-1.12 3.45-2.86 0-1.84-1.3-3.14-3.55-3.14ZM6.1 8.05h2c.7 0 1.12.38 1.12.96 0 .64-.44 1.03-1.12 1.03h-2V8.05Zm2.17 7.82H6.1v-2.45h2.2c.95 0 1.45.45 1.45 1.2 0 .8-.53 1.25-1.48 1.25Zm6.38-6.68h4.62V8h-4.62v1.2Zm2.3 1.05c-2.33 0-3.9 1.6-3.9 3.86 0 2.34 1.5 3.85 4 3.85 1.82 0 3.15-.9 3.67-2.38h-1.88c-.3.48-.92.77-1.72.77-1.13 0-1.84-.58-1.95-1.62h5.7c.03-2.86-1.58-4.48-3.92-4.48Zm-1.77 3c.12-.96.72-1.5 1.74-1.5s1.62.56 1.7 1.5h-3.44Z" />
    </svg>
  );
}

const gmailComposeUrl = (subject: string, body: string) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=skadi@asu.edu&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

const links = [
  { title: 'LinkedIn', href: 'https://www.linkedin.com/in/sameer-kadi-a0ba7320a/', icon: Linkedin },
  { title: 'GitHub', href: 'https://github.com/sam24eer?tab=repositories', icon: Github },
  { title: 'Behance', href: 'https://www.behance.net/sameerkadi', icon: BehanceIcon },
  { title: 'Email', href: gmailComposeUrl('Portfolio Inquiry', ''), icon: Mail }
];

export default function Contact() {
  const isNarrowMotion = useNarrowMotion();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = `Portfolio Inquiry from ${name || 'Recruiter'}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    const popup = window.open(gmailComposeUrl(subject, body), '_blank', 'noopener,noreferrer');

    if (!popup) {
      const fallbackSubject = encodeURIComponent(subject);
      const fallbackBody = encodeURIComponent(body);
      window.location.href = `mailto:skadi@asu.edu?subject=${fallbackSubject}&body=${fallbackBody}`;
    }
  };

  return (
    <section id="contact" className="section-pad pb-20">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s Connect"
          subtitle="Let’s connect to discuss Product Ops, analytics, and AI product opportunities."
        />

        <div className="grid gap-6 lg:grid-cols-[0.43fr_0.57fr]">
          <div className="glass rounded-2xl p-6 md:p-8">
            <p className="max-w-md text-sm leading-relaxed text-muted">
              Open to Product Operations Associate and AI Product roles in the US and remote environments.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {links.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.title}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.title}
                    title={link.title}
                    className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-panel text-muted transition hover:border-brand/60 hover:text-text"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>

            <div className="mt-8 rounded-xl border border-line bg-base/45 p-4 text-xs text-muted">
              Form submission opens web mail compose. If blocked, it falls back to your mail app for{' '}
              <span className="text-text">skadi@asu.edu</span>.
            </div>
          </div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: isNarrowMotion, amount: 0.35 }}
            transition={{ duration: isNarrowMotion ? 0.3 : 0.45 }}
            className="glass rounded-2xl p-6 md:p-8"
          >
            <div className="grid gap-4">
              <label className="contact-label grid gap-2 text-sm" htmlFor="contact-name">
                Your name
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="focus-ring h-12 rounded-xl border border-line bg-base/55 px-4 text-text placeholder:text-muted placeholder:opacity-60"
                  placeholder="Write your name"
                />
              </label>

              <label className="contact-label grid gap-2 text-sm" htmlFor="contact-email">
                Your email
                <input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="focus-ring h-12 rounded-xl border border-line bg-base/55 px-4 text-text placeholder:text-muted placeholder:opacity-60"
                  placeholder="you@company.com"
                />
              </label>

              <label className="contact-label grid gap-2 text-sm" htmlFor="contact-message">
                Message
                <textarea
                  id="contact-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  className="focus-ring rounded-xl border border-line bg-base/55 px-4 py-3 text-text placeholder:text-muted placeholder:opacity-60"
                  placeholder="Please write your message for me."
                />
              </label>

              <button
                type="submit"
                className="focus-ring mt-2 h-12 rounded-full border border-brand/55 bg-brand/20 px-5 text-sm font-semibold text-brandSoft transition hover:bg-brand/30"
              >
                Send message
              </button>
            </div>
          </motion.form>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="#top"
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-line bg-panel/80 px-5 py-2.5 text-sm font-medium text-text transition hover:border-brand/60"
          >
            <ArrowUp size={16} /> Return to top
          </a>
        </div>
      </div>
    </section>
  );
}

