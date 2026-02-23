"use client";

import { useEffect, useState } from 'react';

export default function useNarrowMotion() {
  const [isNarrowMotion, setIsNarrowMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 1024px), (prefers-reduced-motion: reduce)');
    const update = () => setIsNarrowMotion(media.matches);

    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  return isNarrowMotion;
}

