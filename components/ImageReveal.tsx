"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function ImageReveal({ children, className = "", delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ scale: 1.08 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 1.2, delay: delay + 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="h-full w-full"
      >
        {children}
      </motion.div>
      <motion.div
        aria-hidden="true"
        initial={{ scaleX: 1 }}
        animate={inView ? { scaleX: 0 } : {}}
        transition={{ duration: 0.9, delay, ease: [0.65, 0, 0.35, 1] }}
        style={{ originX: 0 }}
        className="pointer-events-none absolute inset-0 bg-paper"
      />
    </div>
  );
}
