"use client";

import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { hobbyPhotos } from '@/data/site';

function toThumbSrc(src: string) {
  return src.replace('/photography/', '/photography/thumbs/').replace('.jpg', '.webp');
}

function toDisplaySrc(src: string) {
  return src.replace('/photography/', '/photography/display/').replace('.jpg', '.webp');
}

const layout = [
  'col-start-1 col-span-2 row-start-1 row-span-2',
  'col-start-3 col-span-1 row-start-1 row-span-2',
  'col-start-4 col-span-1 row-start-1 row-span-1',
  'col-start-5 col-span-1 row-start-1 row-span-2',
  'col-start-1 col-span-1 row-start-3 row-span-1',
  'col-start-2 col-span-1 row-start-3 row-span-1',
  'col-start-3 col-span-2 row-start-3 row-span-1',
  'col-start-4 col-span-1 row-start-2 row-span-1',
  'col-start-5 col-span-1 row-start-3 row-span-1'
] as const;

export default function HobbyGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isNarrowFrame, setIsNarrowFrame] = useState(false);

  useEffect(() => {
    const onResize = () => setIsNarrowFrame(window.innerWidth < 1180);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const visibleCount = Math.min(isNarrowFrame ? 6 : 9, hobbyPhotos.length);
  const visiblePhotos = hobbyPhotos.slice(0, visibleCount);
  const hiddenCount = Math.max(0, hobbyPhotos.length - visibleCount);

  const activePhoto = useMemo(
    () => (activeIndex === null ? null : hobbyPhotos[activeIndex]),
    [activeIndex]
  );

  useEffect(() => {
    if (activeIndex === null) return;

    const current = hobbyPhotos[activeIndex];
    const prev = hobbyPhotos[(activeIndex - 1 + hobbyPhotos.length) % hobbyPhotos.length];
    const next = hobbyPhotos[(activeIndex + 1) % hobbyPhotos.length];

    [current, prev, next].forEach((item) => {
      const img = new window.Image();
      img.src = toDisplaySrc(item.src);
    });
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveIndex(null);
      if (event.key === 'ArrowLeft') {
        setActiveIndex((idx) => (idx === null ? null : (idx - 1 + hobbyPhotos.length) % hobbyPhotos.length));
      }
      if (event.key === 'ArrowRight') {
        setActiveIndex((idx) => (idx === null ? null : (idx + 1) % hobbyPhotos.length));
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex]);

  return (
    <section id="hobby" className="section-pad">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Hobby"
          title="Photography Catalogue"
          subtitle="Selected frames from travel, city life, and architecture."
        />

        <div className="glass rounded-2xl p-4 md:p-5">
          <div className={isNarrowFrame ? '' : 'overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'}>
            <div
              className={
                isNarrowFrame
                  ? 'grid h-[420px] grid-cols-3 grid-rows-3 gap-4 md:h-[460px]'
                  : 'grid h-[420px] min-w-[1120px] grid-cols-5 grid-rows-3 gap-4 md:h-[460px]'
              }
            >
              {visiblePhotos.map((photo, idx) => {
                const isOverlayTile = idx === visiblePhotos.length - 1;
                const narrowLayout = [
                  'col-start-1 col-span-2 row-start-1 row-span-2',
                  'col-start-3 col-span-1 row-start-1 row-span-1',
                  'col-start-3 col-span-1 row-start-2 row-span-1',
                  'col-start-1 col-span-1 row-start-3 row-span-1',
                  'col-start-2 col-span-1 row-start-3 row-span-1',
                  'col-start-3 col-span-1 row-start-3 row-span-1'
                ] as const;
                const tileClass = isNarrowFrame ? narrowLayout[idx] ?? '' : layout[idx] ?? '';

                return (
                  <motion.button
                    key={photo.src}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    whileHover={{ y: -3 }}
                    className={`group focus-ring relative overflow-hidden rounded-xl border border-line bg-panel text-left ${tileClass}`}
                  >
                    <img
                      src={toThumbSrc(photo.src)}
                      alt={photo.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                    {isOverlayTile && hiddenCount > 0 ? (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                        <span className="rounded-full border border-white/45 bg-black/55 px-4 py-2 text-2xl font-semibold text-white">
                          +{hiddenCount}
                        </span>
                      </div>
                    ) : null}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {activePhoto ? (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 6 }}
              transition={{ duration: 0.2 }}
              className="relative h-[70vh] w-[70vw] overflow-hidden rounded-2xl border border-line bg-base"
              role="dialog"
              aria-modal="true"
              aria-label="Expanded photography preview"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={toDisplaySrc(activePhoto.src)}
                alt={activePhoto.alt}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="h-full w-full object-contain"
              />

              <div className="absolute inset-x-0 bottom-0 flex items-center justify-end bg-gradient-to-t from-black/85 to-transparent p-4">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex((idx) => (idx === null ? null : (idx - 1 + hobbyPhotos.length) % hobbyPhotos.length))
                    }
                    className="focus-ring rounded-full border border-white/30 bg-black/45 p-2 text-white"
                    aria-label="Previous photo"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex((idx) => (idx === null ? null : (idx + 1) % hobbyPhotos.length))
                    }
                    className="focus-ring rounded-full border border-white/30 bg-black/45 p-2 text-white"
                    aria-label="Next photo"
                  >
                    <ChevronRight size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveIndex(null)}
                    className="focus-ring rounded-full border border-white/30 bg-black/45 p-2 text-white"
                    aria-label="Close preview"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
