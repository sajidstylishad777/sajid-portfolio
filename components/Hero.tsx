"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SketchArt from "./SketchArt";
import Magnetic from "./Magnetic";

const lineDraw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.1, delay: 0.15 + i * 0.12, ease: [0.65, 0, 0.35, 1] as const },
  }),
};

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden pt-24">
      {/* Background pencil lines drawing themselves in */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.line x1="0" y1="80" x2="1440" y2="80" custom={0} variants={lineDraw} initial="hidden" animate="visible" className="sketch-stroke" />
        <motion.line x1="1100" y1="0" x2="1100" y2="900" custom={1} variants={lineDraw} initial="hidden" animate="visible" className="sketch-stroke" />
        <motion.path d="M 60 780 L 60 820 L 420 820" custom={2} variants={lineDraw} initial="hidden" animate="visible" className="sketch-stroke" />
        <motion.line x1="900" y1="200" x2="1360" y2="640" custom={3} variants={lineDraw} initial="hidden" animate="visible" stroke="rgba(140,110,72,0.4)" strokeWidth="0.75" fill="none" />
      </svg>

      <div className="relative z-10 mx-auto grid w-full max-w-sheet grid-cols-1 gap-14 px-6 md:grid-cols-12 md:px-12">
        <div className="md:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mb-6 flex items-center gap-4"
          >
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-ink/30 bg-beige">
              <Image
                src="/images/sajid-portrait.jpg"
                alt="Sajid Siddiqui"
                fill
                sizes="56px"
                className="object-cover"
                priority
              />
            </div>
            <p className="font-sans text-[11px] font-medium uppercase tracking-widest2 text-graphite">
              Interior Designer &middot; UAE
            </p>
          </motion.div>

          <h1 className="font-serif leading-[0.92] text-ink">
            {["SAJID", "SIDDIQUI"].map((word, i) => (
              <span key={word} className="block overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.35 + i * 0.14, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="block text-[15vw] leading-[0.92] md:text-[6.4vw]"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.7 }}
            className="mt-6 font-sans text-sm uppercase tracking-widest2 text-graphite"
          >
            Interior Designer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="mt-6 max-w-xl font-sans text-base leading-relaxed text-ink/80"
          >
            Experienced and creative Interior Designer Passionate about transforming spaces into captivating and functional environments. With 4 years of industry experience, I have successfully executed a wide range of residential and commercial projects, delivering exceptional designs that reflect my clients' vision and exceed their expectations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            <Magnetic radius={70} strength={0.35}>
              <a
                href="#projects"
                data-cursor="View"
                className="group relative inline-flex items-center border border-ink px-7 py-3 font-sans text-[11px] font-semibold uppercase tracking-widest2 text-ink transition-colors duration-300 hover:bg-ink hover:text-paper"
              >
                View Projects
              </a>
            </Magnetic>

            <Magnetic radius={50} strength={0.3}>
              <a
                href="#contact"
                data-cursor="Say hi"
                className="font-sans text-[11px] font-semibold uppercase tracking-widest2 text-ink/70 underline decoration-ink/30 underline-offset-4 transition-colors hover:text-ink"
              >
                Contact Me
              </a>
            </Magnetic>
          </motion.div>
        </div>

        <div className="relative md:col-span-5">
          <motion.div
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ delay: 0.6, duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
            className="relative aspect-[4/5] w-full overflow-hidden"
          >
            <Image
              src="/images/concept.png"
              alt="Villa elevation drawing"
              fill
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="font-sans text-[10px] uppercase tracking-widest2 text-graphite">Scroll</span>
        <span className="h-10 w-px bg-ink/30" />
      </motion.div>
    </section>
  );
}
