import React, { useEffect, useState } from 'react';
import { PageRoute } from '../types';

interface ScrollProgressBarProps {
  currentRoute?: PageRoute;
}

export const ScrollProgressBar: React.FC<ScrollProgressBarProps> = ({ currentRoute }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
      const totalScrollable =
        document.documentElement.scrollHeight - window.innerHeight;

      if (totalScrollable <= 0) {
        setProgress(0);
        return;
      }

      const rawProgress = scrollY / totalScrollable;
      const clamped = Math.min(Math.max(rawProgress, 0), 1);
      setProgress(clamped);
    };

    // Recalculate on scroll, resize, and next frame (in case content expanded)
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    // Initial check and microtask/timeout to account for dynamic route render
    updateProgress();
    const timer = setTimeout(updateProgress, 100);

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
      clearTimeout(timer);
    };
  }, [currentRoute]);

  const percentage = Math.round(progress * 100);

  return (
    <div
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuenow={percentage}
      aria-valuemin={0}
      aria-valuemax={100}
      className="fixed top-0 left-0 right-0 z-[100] h-[3px] pointer-events-none select-none bg-black/5 dark:bg-white/5"
    >
      <div
        className="h-full bg-gradient-to-r from-[#4e39e5] via-[#7c3aed] to-[#38bdf8] transition-[width] duration-100 ease-out relative"
        style={{ width: `${progress * 100}%` }}
      >
        {/* Subtle luminous lead glow tip when actively scrolled */}
        {progress > 0 && (
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#38bdf8] shadow-[0_0_10px_2px_rgba(56,189,248,0.8)] opacity-90" />
        )}
      </div>
    </div>
  );
};
