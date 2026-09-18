import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";
import AnimatedLine from "./AnimatedLine";

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-sheet px-6 md:px-12">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="font-serif italic text-graphite"></span>
            <h2 className="mt-3 font-serif text-4xl leading-[1.05] text-ink md:text-5xl">
              Selected projects
            </h2>
          </div>
          <p className="max-w-sm font-sans text-sm leading-relaxed text-graphite">
            A collection of residential, hospitality and commercial interiors
            completed across the UAE.
          </p>
        </div>
        <AnimatedLine className="mb-16 h-px w-full" />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[260px]">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
