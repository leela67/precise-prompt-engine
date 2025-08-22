import { useState, useEffect } from 'react';

export function useScrollDirection(threshold = 8) {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | 'top'>('top');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 100) {
        setScrollDirection('top');
      } else if (Math.abs(currentScrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      } else {
        setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
      }
      
      setScrollY(currentScrollY);
      lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollDirection);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [threshold]);

  return { scrollDirection, scrollY };
}