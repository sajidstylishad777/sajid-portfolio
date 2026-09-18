"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const line1 = "Good design is not only what you see.";
const line2 = "It is how a space makes you feel.";

function AnimatedWords({ text, inView, baseDelay }: { text: string; inView: boolean; baseDelay: number }) {
  const words = text.split(" ");
  return (
    <span className="block">
      {words.map((w, i) => (
        <span key={i} className="mr-[0.28em] inline-block overflow-hidden">
          <motion.span
            initial={{ y: "110%" }}
            animate={inView ? { y: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: baseDelay + i * 0.045,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-block"
          >
            {w}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export default function Philosophy() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });

  return (
    <section className="relative overflow-hidden py-32 md:py-44">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 1440 500"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.path
          d="M 0 250 C 360 150, 1080 350, 1440 250"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.6, ease: [0.65, 0, 0.35, 1] }}
          className="sketch-stroke"
        />
      </svg>

      <div ref={ref} className="relative mx-auto max-w-sheet px-6 md:px-12">
        <h2 className="max-w-4xl font-serif text-[2.1rem] leading-[1.18] text-ink sm:text-5xl md:text-[3.4rem]">
          <AnimatedWords text={line1} inView={inView} baseDelay={0.1} />
          <AnimatedWords text={line2} inView={inView} baseDelay={0.1 + line1.split(" ").length * 0.045 + 0.15} />
        </h2>
      </div>
    </section>
  );
}
