"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

/**
 * Custom cursor that:
 *  - follows the pointer with a light spring lag
 *  - scales up and reveals a text label when hovering any element
 *    with a `data-cursor="Label"` attribute
 *  - leaves a short trail of fading dots behind it as it moves
 *
 * Mount this ONCE near the root of the app (e.g. in layout.tsx), not per-page.
 * It hides itself automatically on touch/coarse-pointer devices.
 */

const TRAIL_COUNT = 6; // number of trailing dots — more = longer tail

// Each trail dot gets progressively "lazier" spring settings so it
// lags further behind the one before it, creating a tapering trail.
function useTrailPoint(sourceX: ReturnType<typeof useMotionValue<number>>, sourceY: ReturnType<typeof useMotionValue<number>>, index: number) {
  const stiffness = 260 - index * 28; // later dots are looser/slower
  const damping = 20 + index * 3;
  const x = useSpring(sourceX, { stiffness, damping, mass: 0.5 });
  const y = useSpring(sourceY, { stiffness, damping, mass: 0.5 });
  return { x, y };
}

export default function CustomCursor() {
  const [label, setLabel] = useState<string | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [supportsFinePointer, setSupportsFinePointer] = useState(false);

  // Raw pointer position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Main cursor dot — snappiest spring
  const springX = useSpring(x, { stiffness: 400, damping: 35, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 400, damping: 35, mass: 0.4 });

  // Chain of trail dots, each following the RAW x/y (not the main dot),
  // just with looser springs so they fall further behind.
  const trail = [
    useTrailPoint(x, y, 0),
    useTrailPoint(x, y, 1),
    useTrailPoint(x, y, 2),
    useTrailPoint(x, y, 3),
    useTrailPoint(x, y, 4),
    useTrailPoint(x, y, 5),
  ].slice(0, TRAIL_COUNT);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setSupportsFinePointer(mq.matches);
    const update = (e: MediaQueryListEvent) => setSupportsFinePointer(e.matches);
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!supportsFinePointer) return;

    const handleMove = (e: MouseEvent) => {
      if (!isActive) setIsActive(true);
      x.set(e.clientX);
      y.set(e.clientY);

      const target = (e.target as HTMLElement)?.closest<HTMLElement>("[data-cursor]");
      setLabel(target?.dataset.cursor ?? null);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [supportsFinePointer, isActive, x, y]);

  if (!supportsFinePointer) return null;

  return (
    <>
      {isActive && (
        <style jsx global>{`
          a,
          button,
          [data-cursor] {
            cursor: none;
          }
        `}</style>
      )}

      {/* Trail dots — rendered first so they sit behind the main cursor */}
      {trail.map((point, i) => {
        // Tail tapers: smaller and more transparent the further back it is
        const size = 7 - i * 0.8;
        const opacity = isActive ? 0.5 - i * 0.07 : 0;
        return (
          <motion.div
            key={i}
            aria-hidden="true"
            className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full bg-ink"
            style={{
              x: point.x,
              y: point.y,
              translateX: "-50%",
              translateY: "-50%",
              width: size,
              height: size,
            }}
            animate={{ opacity }}
            transition={{ duration: 0.2 }}
          />
        );
      })}

      {/* Main cursor dot / label pill */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] flex items-center justify-center rounded-full bg-ink text-paper mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: label ? 88 : 12,
          height: label ? 88 : 12,
          opacity: isActive ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <AnimatePresence mode="wait">
          {label && (
            <motion.span
              key={label}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.2 }}
              className="font-sans text-[10px] font-semibold uppercase tracking-widest2"
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
