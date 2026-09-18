"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
  className?: string;
  orientation?: "horizontal" | "vertical";
  duration?: number;
  delay?: number;
};

export default function AnimatedLine({
  className = "",
  orientation = "horizontal",
  duration = 1.1,
  delay = 0,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <div ref={ref} className={className}>
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        className="overflow-visible"
      >
        <motion.line
          x1={orientation === "horizontal" ? "0%" : "50%"}
          y1={orientation === "horizontal" ? "50%" : "0%"}
          x2={orientation === "horizontal" ? "100%" : "50%"}
          y2={orientation === "horizontal" ? "50%" : "100%"}
          stroke="rgba(26,24,21,0.4)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
    </div>
  );
}
