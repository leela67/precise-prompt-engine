import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface PropertyCarouselProps {
  images: string[];
  alt: string;
  fullScreen?: boolean;
}

export default function PropertyCarousel({ images, alt, fullScreen = false }: PropertyCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [loaded, setLoaded] = useState<boolean[]>(() => images.map(() => false));

  const transitionMs = 600;
  const ease = [0.22, 1, 0.36, 1] as const;

  // reset loaded map if images array changes
  useEffect(() => setLoaded(images.map(() => false)), [images]);

  const markLoaded = (i: number) =>
    setLoaded((L) => (L[i] ? L : Object.assign([...L], { [i]: true })));

  // Preload current, next, and previous images
  useEffect(() => {
    const preload = (i: number) => {
      if (!images.length) return;
      const idx = (i + images.length) % images.length;
      if (loaded[idx]) return;
      const img = new Image();
      img.src = images[idx];
      // decode() gives smoother paint when supported
      (img as any).decode?.().then(() => markLoaded(idx)).catch(() => markLoaded(idx));
      img.onload = () => markLoaded(idx);
      img.onerror = () => markLoaded(idx);
    };
    preload(currentIndex);
    preload(currentIndex + 1);
    preload(currentIndex - 1);
  }, [currentIndex, images, loaded]);

  const goto = (idx: number) => {
    setPrevIndex(currentIndex);
    setCurrentIndex((idx + images.length) % images.length);
  };
  const nextImage = () => goto(currentIndex + 1);
  const prevImage = () => goto(currentIndex - 1);

  // Autoplay every 3s (pause on hover / not visible)
  useEffect(() => {
    if (images.length < 2 || isPaused) return;
    const id = setInterval(nextImage, 6000);
    return () => clearInterval(id);
  }, [images.length, isPaused, currentIndex]);

  useEffect(() => {
    const onVis = () => setIsPaused(document.hidden);
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  if (!images.length) return null;

  const currentLoaded = loaded[currentIndex];

  return (
    <div
      className={`relative w-full overflow-hidden bg-gray-100 ${
        fullScreen ? 'h-full' : 'aspect-[16/9] rounded-lg'
      }`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Stack images and cross-fade */}
      <div className="relative w-full h-full">
        {/* Current image (on top) */}
        <motion.img
          key={`current-${currentIndex}`}
          src={images[currentIndex]}
          alt={`${alt} - Image ${currentIndex + 1}`}
          className="absolute inset-0 w-full h-full object-cover will-change-transform will-change-opacity"
          loading={currentIndex === 0 ? 'eager' : 'lazy'}
          decoding="async"
          initial={{ opacity: 0 }}
          animate={{ opacity: currentLoaded ? 1 : 0 }}
          transition={{ duration: transitionMs / 1000, ease }}
          onLoad={() => markLoaded(currentIndex)}
          draggable={false}
        />

        {/* Previous image stays visible until current is ready, then fades out */}
        {prevIndex !== null && prevIndex !== currentIndex && (
          <motion.img
            key={`prev-${prevIndex}`}
            src={images[prevIndex]}
            alt=""
            className="absolute inset-0 w-full h-full object-cover will-change-transform will-change-opacity"
            initial={{ opacity: 1 }}
            animate={{ opacity: currentLoaded ? 0 : 1 }}
            transition={{ duration: transitionMs / 1000, ease }}
            onAnimationComplete={() => {
              if (currentLoaded) setPrevIndex(null);
            }}
            draggable={false}
          />
        )}
      </div>

      {/* Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={() => {
              prevImage();
              setIsPaused(true);
              setTimeout(() => setIsPaused(false), 3000);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors duration-200 z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 text-gray-800" />
          </button>

          <button
            onClick={() => {
              nextImage();
              setIsPaused(true);
              setTimeout(() => setIsPaused(false), 3000);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors duration-200 z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 text-gray-800" />
          </button>
        </>
      )}

      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                goto(index);
                setIsPaused(true);
                setTimeout(() => setIsPaused(false), 3000);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex ? 'bg-white scale-110' : 'bg-white/50'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Counter */}
      {images.length > 1 && (
        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full z-10">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
}
