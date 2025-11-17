import { useEffect, useRef, useState } from "react";

interface Options {
  topThreshold?: number;
  hideThreshold?: number;
}

export default function useScrollNav(open: boolean, options?: Options) {
  const { topThreshold = 20, hideThreshold = 100 } = options || {};
  const [showNav, setShowNav] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const prevY = useRef<number>(
    typeof window !== "undefined" ? window.scrollY : 0
  );

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const current = window.scrollY;
        // Consider "at top" when within first `topThreshold` px
        if (current <= topThreshold) {
          setIsAtTop(true);
          setShowNav(true);
        } else {
          setIsAtTop(false);
          // if scrolling down and past threshold, hide; if scrolling up, show
          if (current > prevY.current && current > hideThreshold && !open) {
            setShowNav(false);
          } else {
            setShowNav(true);
          }
        }
        prevY.current = current;
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open, topThreshold, hideThreshold]);

  return { showNav, isAtTop } as const;
}
