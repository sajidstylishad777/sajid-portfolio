"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  { title: "Interior Design", note: "Full-scope residential & commercial interiors" },
  { title: "Space Planning", note: "Layout, circulation & functional zoning" },
  { title: "3D Visualization", note: "Photoreal renders for design sign-off" },
  { title: "Architectural Visualization", note: "Exterior & massing studies" },
  { title: "Office Interiors", note: "Workstation, meeting & lounge design" },
  { title: "Restaurant Interiors", note: "Front-of-house & kitchen adjacency planning" },
  { title: "Residential Interiors", note: "Villas, apartments & private suites" },
  { title: "Fit-Out Design", note: "Construction-ready documentation" },
  { title: "Material Selection", note: "Finishes, surfaces & specification" },
  { title: "Furniture Selection", note: "Sourcing, procurement & FF&E" },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-sheet px-6 md:px-12">
        <div className="mb-16">
          <span className="font-serif italic text-graphite"></span>
          <h2 className="mt-3 font-serif text-4xl leading-[1.05] text-ink md:text-5xl pb-3 border-b border-ink/20 inline-block">
  Expertise In
</h2>
        </div>

        <div className="border-t border-ink/10">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.04 }}
              className="group relative grid cursor-default grid-cols-[3rem_1fr_auto] items-center gap-4 border-b border-ink/10 py-6 transition-all duration-500 hover:pl-4 sm:grid-cols-[4rem_1fr_auto] sm:gap-8"
            >
              <span className="pointer-events-none absolute inset-0 -z-10 origin-left scale-x-0 bg-beige/40 transition-transform duration-500 ease-sheet group-hover:scale-x-100" />
              <span className="font-serif text-sm text-graphite transition-colors group-hover:text-bronze">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-serif text-2xl text-ink transition-transform duration-500 group-hover:translate-x-1 md:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-1 hidden font-sans text-sm text-graphite sm:block">{s.note}</p>
              </div>
              <ArrowUpRight
                className="h-5 w-5 -translate-x-2 text-ink opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100"
                strokeWidth={1.5}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
