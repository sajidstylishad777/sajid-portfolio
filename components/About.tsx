"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedLine from "./AnimatedLine";
import Counter from "./Counter";
import ImageReveal from "./ImageReveal";
import SketchArt from "./SketchArt";

const stats = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 4, suffix: "+", label: "Years UAE Experience" },
  { value: 2.4, prefix: "AED ", suffix: "M", label: "Largest Project Value" },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="margin-rule hidden md:block" />
      <div className="mx-auto max-w-sheet px-6 md:px-12">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="font-serif italic text-graphite"></span>
            <motion.h2
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mt-3 font-serif text-4xl leading-[1.05] text-ink md:text-5xl"
            >
              About Sajid Siddiqui
            </motion.h2>
            <AnimatedLine className="mt-8 h-px w-24" />
          </div>

          <div className="md:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.8 }}
              className="max-w-xl font-serif text-2xl leading-relaxed text-ink md:text-[1.7rem]"
            >
              Sajid Siddiqui is an interior designer with over five years of
              professional experience, including extensive work across the
              UAE. His practice focuses on creating functional, refined and
              visually compelling spaces across residential, commercial and
              hospitality environments.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 max-w-xl font-sans text-[15px] leading-relaxed text-graphite"
            >
              Every project begins on paper — with hand-sketched plans,
              material studies and honest conversations about how a space
              will actually be lived in. That process, carried through into
              detailed 3D visualization and construction documentation, is
              what allows a design to move from concept to a finished room
              without losing its original intent.
            </motion.p>

            <div className="mt-16 grid grid-cols-1 gap-10 border-t border-ink/10 pt-10 sm:grid-cols-3">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <div className="font-serif text-4xl text-ink md:text-5xl">
                    <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 font-sans text-[11px] uppercase tracking-widest2 text-graphite">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

                <div className="mt-24 grid grid-cols-1 gap-6 md:grid-cols-12">
          <ImageReveal className="relative md:col-span-7 aspect-[16/10]">
            <Image
              src="/images/Rest1.jpg"
              alt="Villa elevation project"
              fill
              sizes="(min-width: 768px) 58vw, 100vw"
              className="object-cover"
            />
          </ImageReveal>
          <div className="flex flex-col justify-between gap-6 md:col-span-5">
            <ImageReveal className="relative aspect-square" delay={0.15}>
              <Image
                src="/images/rest2.jpg"
                alt="Interior detail project"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </ImageReveal>
            <p className="font-serif italic text-graphite">
              Achievements — AED 2.4M flagship villa delivery, three
              multi-phase corporate fit-outs, and a recurring client base
              across the UAE hospitality sector.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
