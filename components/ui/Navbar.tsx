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
  const [navScale, setNavScale] = useState(1);
  const navPillRef = useRef<HTMLDivElement | null>(null);
  const toggleButtonRef = useRef<HTMLButtonElement | null>(null);
  const navLockRef = useRef<string | null>(null);
  const navLockTimerRef = useRef<number | null>(null);
  const themeTransitionInFlightRef = useRef(false);
  const themeTransitionAnimRef = useRef<Animation | null>(null);
  const themeOverlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const initialTheme: Theme = saved === 'light' ? 'light' : 'dark';
    document.documentElement.classList.toggle('light', initialTheme === 'light');
    setTheme(initialTheme);
    setReady(true);
  }, []);

  useEffect(() => {
    const updateNavScale = () => {
      const pill = navPillRef.current;
      if (!pill) return;
      const availableWidth = (pill.parentElement?.clientWidth ?? window.innerWidth) - 2;
      const naturalWidth = pill.scrollWidth;

      if (!naturalWidth || naturalWidth <= availableWidth) {
        setNavScale(1);
        return;
      }

      const nextScale = Math.max(0.84, Math.min(1, availableWidth / naturalWidth));
      setNavScale(Number(nextScale.toFixed(3)));
    };

    updateNavScale();
    const raf = window.requestAnimationFrame(updateNavScale);
    window.addEventListener('resize', updateNavScale);

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener('resize', updateNavScale);
    };
  }, [ready, theme, activeSection]);

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
    const ua = navigator.userAgent;
    const isIosSafari =
      /iP(hone|ad|od)/.test(ua) &&
      /WebKit/.test(ua) &&
      !/CriOS|FxiOS|EdgiOS|OPiOS/.test(ua);
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
      if (themeOverlayRef.current) {
        themeOverlayRef.current.remove();
        themeOverlayRef.current = null;
      }
      themeTransitionInFlightRef.current = false;
      applyTheme();
      return;
    }

    if (prefersReducedMotion) {
      applyTheme();
      return;
    }

    if (isIosSafari) {
      themeTransitionInFlightRef.current = true;
      const oldBackground = getComputedStyle(document.body).background;

      if (themeOverlayRef.current) {
        themeOverlayRef.current.remove();
        themeOverlayRef.current = null;
      }

      const stage = document.createElement('div');
      stage.style.position = 'fixed';
      stage.style.inset = '0';
      stage.style.pointerEvents = 'none';
      stage.style.zIndex = '9999';
      stage.style.overflow = 'hidden';
      stage.style.contain = 'paint';
      stage.style.backfaceVisibility = 'hidden';
      stage.style.transform = 'translate3d(0,0,0)';

      // Safari mobile: use a transform-only diagonal wipe (GPU-friendly) instead of
      // a large radial clip animation, which can stutter on 60Hz devices.
      const sheet = document.createElement('div');
      sheet.style.position = 'absolute';
      sheet.style.inset = '0';
      sheet.style.background = oldBackground;
      sheet.style.transform = 'translate3d(0,0,0)';
      sheet.style.willChange = 'transform';
      sheet.style.backfaceVisibility = 'hidden';
      stage.appendChild(sheet);
      document.body.appendChild(stage);
      themeOverlayRef.current = stage;

      applyTheme();

      const anim = sheet.animate(
        {
          transform: ['translate3d(0,0,0)', 'translate3d(-112%,112%,0)']
        },
        { duration: 420, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'forwards' }
      );
      themeTransitionAnimRef.current = anim;

      anim.finished.finally(() => {
        if (themeOverlayRef.current) {
          themeOverlayRef.current.remove();
          themeOverlayRef.current = null;
        }
        themeTransitionAnimRef.current = null;
        themeTransitionInFlightRef.current = false;
      });
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
      <div
        ref={navPillRef}
        className="mx-auto flex w-fit max-w-[calc(100vw-0.5rem)] items-center gap-0.5 rounded-full border border-line/70 bg-panel/85 px-1.5 py-1.5 shadow-lg backdrop-blur-md sm:gap-1 sm:px-2 sm:py-2"
        style={{ transform: navScale === 1 ? undefined : `scale(${navScale})`, transformOrigin: 'top center' }}
      >
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
          ref={toggleButtonRef}
          type="button"
          onClick={toggleTheme}
          className="focus-ring ml-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line bg-base text-text transition hover:border-brand/50 sm:ml-1 sm:h-8 sm:w-8"
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {!ready ? null : theme === 'dark' ? <Sun size={13} /> : <Moon size={13} />}
        </button>
      </div>
    </div>
  );
}
