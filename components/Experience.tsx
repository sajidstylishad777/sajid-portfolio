"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedLine from "./AnimatedLine";

const timeline = [
  {
    period: "2020 — 2022",
    title: "Draftman & Junior Designer",
    note: "Azamara Infratech",
  },
  {
    period: "2022 — Present",
    title: "Interior Designer",
    note: "STYLISH ADVANCED DECOR",
  },
];

const software = [
  { name: "AutoCAD", level: 85 },
  { name: "3ds Max", level: 90 },
  { name: "V-Ray", level: 90 },
  { name: "Corona", level: 45 },
  { name: "Photoshop", level: 75 },
  { name: "Lumion", level: 70 },
  { name: "Adobe Illustrator", level: 50 },
];

function SkillRow({ index, name, level }: { index: number; name: string; level: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <div ref={ref} className="border-b border-ink/10 py-6">
      <div className="mb-3 flex items-baseline justify-between">
        <span className="font-sans text-sm uppercase tracking-widest2 text-ink">
          {String(index + 1).padStart(2, "0")} / {name}
        </span>
        <span className="font-serif italic text-graphite">{level}%</span>
      </div>
      <div className="h-px w-full bg-ink/10">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: level / 100 } : {}}
          transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ originX: 0 }}
          className="h-px bg-ink"
        />
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-sheet px-6 md:px-12">
        <div className="mb-16">
          <span className="font-serif italic text-graphite"></span>
          <h2 className="mt-3 font-serif text-4xl leading-[1.05] text-ink md:text-5xl">
            Experience &amp; skills
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="relative md:col-span-7">
            <AnimatedLine
              orientation="vertical"
              className="absolute left-[7px] top-2 hidden h-[calc(100%-16px)] w-px md:block"
            />
            <div className="space-y-12">
              {timeline.map((t, i) => (
                <motion.div
                  key={t.title}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative pl-0 md:pl-10"
                >
                  <span className="absolute left-0 top-1.5 hidden h-[7px] w-[7px] rounded-full bg-ink md:block" />
                  <span className="font-sans text-[11px] uppercase tracking-widest2 text-bronze">
                    {t.period}
                  </span>
                  <h3 className="mt-2 font-serif text-2xl text-ink md:text-3xl">{t.title}</h3>
                  <p className="mt-2 max-w-md font-sans text-sm leading-relaxed text-graphite">
                    {t.note}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="md:col-span-5">
            <h3 className="mb-2 font-sans text-[11px] uppercase tracking-widest2 text-graphite">
              Software specification
            </h3>
            <div className="border-t border-ink/10">
              {software.map((s, i) => (
                <SkillRow key={s.name} index={i} name={s.name} level={s.level} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
