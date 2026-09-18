"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

/**
 * Custom cursor that:
 *  - follows the pointer with a light spring lag
 *  - scales up and reveals a text label when hovering any element
 *    with a `data-cursor="Label"` attribute (see Hero's "View Projects" link)
 *
 * Mount this ONCE near the root of the app (e.g. in layout.tsx), not per-page.
 * It hides itself automatically on touch/coarse-pointer devices.
 */
export default function Cursor() {
  const [label, setLabel] = useState<string | null>(null);
  const [isActive, setIsActive] = useState(false); // has the mouse moved at least once
  const [supportsFinePointer, setSupportsFinePointer] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 400, damping: 35, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 400, damping: 35, mass: 0.4 });

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

      // Walk up from the hovered element to find a data-cursor label
      const target = (e.target as HTMLElement)?.closest<HTMLElement>("[data-cursor]");
      setLabel(target?.dataset.cursor ?? null);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [supportsFinePointer, isActive, x, y]);

  if (!supportsFinePointer) return null;

  return (
    <>
      {/* Hide the native cursor only once ours is actually tracking */}
      {isActive && (
        <style jsx global>{`
          a,
          button,
          [data-cursor] {
            cursor: none;
          }
        `}</style>
      )}

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
