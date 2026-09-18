"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import ProjectMedia from "./ProjectMedia";
import type { Project } from "@/lib/projects";

const sizeClasses: Record<Project["size"], string> = {
  large: "sm:col-span-2 lg:col-span-2 lg:row-span-2",
  wide: "sm:col-span-2 lg:col-span-2",
  tall: "lg:row-span-2",
  small: "",
};

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);
  const [fullscreenIndex, setFullscreenIndex] = useState<number | null>(null);
  const images = project.gallery?.length ? project.gallery : project.image ? [project.image] : [];

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (fullscreenIndex !== null) setFullscreenIndex(null);
        else setOpen(false);
      }
      if (fullscreenIndex !== null) {
        if (e.key === "ArrowRight") setFullscreenIndex((i) => (i === null ? i : (i + 1) % images.length));
        if (e.key === "ArrowLeft") setFullscreenIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, fullscreenIndex, images.length]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.7, delay: (index % 4) * 0.06 }}
        className={`group relative min-h-[260px] ${sizeClasses[project.size]}`}
      >
        <button
          onClick={() => setOpen(true)}
          data-cursor="View Project"
          className="relative block h-full w-full overflow-hidden text-left"
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="h-full w-full transition-transform duration-700 ease-sheet group-hover:scale-[1.04]">
              <ProjectMedia src={project.image} alt={project.name} variant={project.variant} className="h-full w-full" />
            </div>
          </div>
          <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/35" />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <div className="translate-y-2 font-sans text-[10px] uppercase tracking-widest2 text-paper opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              {project.category} &middot; {project.year}
            </div>
            <h3 className="translate-y-3 font-serif text-2xl text-paper opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 md:text-3xl">
              {project.name}
            </h3>
          </div>
        </button>
      </motion.div>

      {/* Gallery pop-up */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-start justify-center overflow-y-auto bg-ink/85 p-4 py-10 md:p-10"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-paper p-6 md:p-10"
            >
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 bg-paper transition-colors hover:bg-ink hover:text-paper"
              >
                <X className="h-4 w-4" strokeWidth={1.5} />
              </button>
              <span className="font-serif italic text-graphite">
                {project.category} &middot; {project.year}
              </span>
              <h2 className="mt-2 font-serif text-3xl text-ink md:text-4xl">{project.name}</h2>
              <p className="mt-2 font-sans text-sm text-graphite">{project.location}</p>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {images.map((src, i) => (
                  <button
                    key={src + i}
                    onClick={() => setFullscreenIndex(i)}
                    data-cursor="Expand"
                    className="relative aspect-[4/3] overflow-hidden bg-beige"
                  >
                    <ProjectMedia src={src} alt={`${project.name} — image ${i + 1}`} variant={project.variant + i} className="h-full w-full" />
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full-screen image viewer */}
      <AnimatePresence>
        {open && fullscreenIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 md:p-10"
            onClick={() => setFullscreenIndex(null)}
          >
            <button
              onClick={() => setFullscreenIndex(null)}
              aria-label="Close fullscreen"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-paper/30 text-paper transition-colors hover:bg-paper hover:text-ink"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>

            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setFullscreenIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
                  }}
                  aria-label="Previous image"
                  className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-paper/30 text-paper transition-colors hover:bg-paper hover:text-ink md:left-8"
                >
                  <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setFullscreenIndex((i) => (i === null ? i : (i + 1) % images.length));
                  }}
                  aria-label="Next image"
                  className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-paper/30 text-paper transition-colors hover:bg-paper hover:text-ink md:right-8"
                >
                  <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
                </button>
              </>
            )}

            <motion.div
              key={fullscreenIndex}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative h-full w-full max-w-5xl"
            >
              <ProjectMedia
                src={images[fullscreenIndex]}
                alt={`${project.name} — image ${fullscreenIndex + 1}`}
                variant={project.variant + fullscreenIndex}
                className="h-full w-full"
              />
            </motion.div>

            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-sans text-xs uppercase tracking-widest2 text-paper/70">
              {fullscreenIndex + 1} / {images.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}