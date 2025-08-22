// src/hooks/useScrollDirection.ts
import { useState, useEffect } from 'react';

type Dir = 'up' | 'down' | 'top';

/**
 * @param threshold     Ignore tiny scrolls (delta). Default 8px.
 * @param topThreshold  <= this many px from top counts as "top". Default 100px.
 */
export function useScrollDirection(threshold = 8, topThreshold = 100) {
  const [scrollDirection, setScrollDirection] = useState<Dir>('top');
  const [scrollY, setScrollY] = useState(0);
  const isAtTop = scrollY <= topThreshold;

  useEffect(() => {
    let lastScrollY = window.scrollY || 0;
    let ticking = false;

    const update = () => {
      const y = window.scrollY || 0;

      if (y <= topThreshold) {
        setScrollDirection('top');
      } else if (Math.abs(y - lastScrollY) >= threshold) {
        setScrollDirection(y > lastScrollY ? 'down' : 'up');
      }
      setScrollY(y);
      lastScrollY = y < 0 ? 0 : y;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    // set initial state on mount
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold, topThreshold]);

  return { scrollDirection, scrollY, isAtTop };
}
