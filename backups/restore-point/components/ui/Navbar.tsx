"use client";

import { useEffect, useRef, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#hobby', label: 'Hobby' },
  { href: '#contact', label: 'Contact' }
];

type Theme = 'dark' | 'light';

export default function Navbar() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [ready, setReady] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const navLockRef = useRef<string | null>(null);
  const navLockTimerRef = useRef<number | null>(null);
  const themeTransitionInFlightRef = useRef(false);
  const themeTransitionAnimRef = useRef<Animation | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const initialTheme: Theme = saved === 'light' ? 'light' : 'dark';
    document.documentElement.classList.toggle('light', initialTheme === 'light');
    setTheme(initialTheme);
    setReady(true);
  }, []);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace('#', ''));

    const updateActiveSection = () => {
      if (navLockRef.current) {
        const lockedId = navLockRef.current;
        const lockedEl = document.getElementById(lockedId);
        if (!lockedEl) {
          navLockRef.current = null;
        } else {
          const targetTop = lockedEl.getBoundingClientRect().top;
          if (Math.abs(targetTop) <= 28) {
            navLockRef.current = null;
          } else {
            setActiveSection(lockedId);
            return;
          }
        }
      }

      const scrollY = window.scrollY;
      const scrollBottom = scrollY + window.innerHeight;
      const pageBottom = document.documentElement.scrollHeight;
      const activationOffset = 170;
      let nextActive = sectionIds[0];

      if (pageBottom - scrollBottom <= 4) {
        setActiveSection('contact');
        return;
      }

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (scrollY + activationOffset >= el.offsetTop) {
          nextActive = id;
        }
      }

      setActiveSection(nextActive);
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    updateActiveSection();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    const fromHash = window.location.hash.replace('#', '');
    if (fromHash && sectionIds.includes(fromHash)) {
      setActiveSection(fromHash);
    }

    return () => {
      if (navLockTimerRef.current) {
        window.clearTimeout(navLockTimerRef.current);
      }
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark';
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const applyTheme = () => {
      document.documentElement.classList.toggle('light', nextTheme === 'light');
      localStorage.setItem('theme', nextTheme);
      setTheme(nextTheme);
    };

    // If user toggles quickly, cancel current transition and apply instantly.
    if (themeTransitionInFlightRef.current) {
      if (themeTransitionAnimRef.current) {
        themeTransitionAnimRef.current.cancel();
        themeTransitionAnimRef.current = null;
      }
      themeTransitionInFlightRef.current = false;
      applyTheme();
      return;
    }

    if (prefersReducedMotion) {
      applyTheme();
      return;
    }

    const docWithTransition = document as Document & {
      startViewTransition?: (callback: () => void) => { ready: Promise<void> };
    };

    if (!docWithTransition.startViewTransition) {
      applyTheme();
      return;
    }

    themeTransitionInFlightRef.current = true;

    const originX = nextTheme === 'light' ? window.innerWidth : 0;
    const originY = nextTheme === 'light' ? 0 : window.innerHeight;
    const endRadius = Math.hypot(window.innerWidth, window.innerHeight);

    const transition = docWithTransition.startViewTransition(() => {
      applyTheme();
    });

    transition.ready.then(() => {
      const anim = document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${originX}px ${originY}px)`,
            `circle(${endRadius}px at ${originX}px ${originY}px)`
          ]
        },
        {
          duration: 500,
          easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
          pseudoElement: '::view-transition-new(root)'
        }
      );
      themeTransitionAnimRef.current = anim;
      anim.finished.finally(() => {
        themeTransitionAnimRef.current = null;
        themeTransitionInFlightRef.current = false;
      });
    }).catch(() => {
      themeTransitionAnimRef.current = null;
      themeTransitionInFlightRef.current = false;
    });
  };

  const onNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    const targetId = href.replace('#', '');
    navLockRef.current = targetId;
    setActiveSection(targetId);

    if (navLockTimerRef.current) {
      window.clearTimeout(navLockTimerRef.current);
    }
    navLockTimerRef.current = window.setTimeout(() => {
      navLockRef.current = null;
      navLockTimerRef.current = null;
    }, 1200);

    if (href === '#contact') {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
      return;
    }

    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    window.location.hash = href;
  };

  return (
    <div className="fixed inset-x-0 top-2.5 z-50 px-2 md:top-4 md:px-3">
      <div className="mx-auto flex w-fit max-w-full items-center gap-0.5 rounded-full border border-line/70 bg-panel/85 px-1.5 py-1.5 shadow-lg backdrop-blur-md max-[430px]:scale-[0.9] max-[430px]:origin-top max-[390px]:scale-[0.86] sm:gap-1 sm:px-2 sm:py-2">
        {navItems.map((item) => {
          const isActive = activeSection === item.href.replace('#', '');
          return (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => onNavClick(event, item.href)}
              className={`focus-ring whitespace-nowrap rounded-full px-1.5 py-1 text-[11px] font-medium transition max-[430px]:px-1.5 sm:px-3 sm:py-1.5 sm:text-xs md:px-4 ${
                isActive ? 'bg-brand/20 text-text' : 'text-muted hover:bg-brand/15 hover:text-text'
              }`}
              aria-current={isActive ? 'page' : undefined}
            >
              {item.label}
            </a>
          );
        })}

        <button
          type="button"
          onClick={toggleTheme}
          className="focus-ring ml-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line bg-base text-text transition hover:border-brand/50 sm:ml-1 sm:h-8 sm:w-8"
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {!ready ? null : theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
        </button>
      </div>
    </div>
  );
}
