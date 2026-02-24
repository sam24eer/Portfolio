"use client";

import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Brush, Github, Linkedin, Mail } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const links = [
  { title: 'LinkedIn', href: 'https://www.linkedin.com/in/sameer-kadi-a0ba7320a/', icon: Linkedin },
  { title: 'GitHub', href: 'https://github.com/sam24eer?tab=repositories', icon: Github },
  { title: 'Behance', href: 'https://www.behance.net/sameerkadi', icon: Brush },
  { title: 'Email', href: 'mailto:skadi@asu.edu', icon: Mail }
];

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name || 'Recruiter'}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    window.location.href = `mailto:skadi@asu.edu?subject=${subject}&body=${body}`;
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
            <h3 className="font-[var(--font-display)] text-3xl font-semibold text-text">Let’s Connect</h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
              Open to Product Operations Associate and AI Product roles in the US and remote environments.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {links.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.title}
                    href={link.href}
                    target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
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
              Form submission opens your mail client and pre-fills an email to <span className="text-text">skadi@asu.edu</span>.
            </div>
          </div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 0.45 }}
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

