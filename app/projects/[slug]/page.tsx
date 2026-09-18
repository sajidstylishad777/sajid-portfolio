import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects, getProject } from "@/lib/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectMedia from "@/components/ProjectMedia";
import ImageReveal from "@/components/ImageReveal";
import AnimatedLine from "@/components/AnimatedLine";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: `${project.name} | Sajid Siddiqui`,
    description: project.concept,
  };
}

function PinnedSheet({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative border border-ink/12 bg-paper-dim/40 p-8 md:p-10">
      <span className="absolute -top-2 left-8 h-3 w-3 rounded-full border border-ink/30 bg-paper" />
      <span className="mb-4 block font-sans text-[11px] uppercase tracking-widest2 text-graphite">
        {label}
      </span>
      {children}
    </div>
  );
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-24">
          <ImageReveal className="aspect-[16/9] w-full md:aspect-[21/9]">
            <ProjectMedia
              src={project.image}
              alt={project.name}
              variant={project.variant}
              className="h-full w-full"
              priority
            />
          </ImageReveal>

          <div className="mx-auto max-w-sheet px-6 py-12 md:px-12">
            <Link
              href="/#projects"
              className="mb-8 inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest2 text-graphite transition-colors hover:text-ink"
            >
              <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.5} /> Back to projects
            </Link>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
              <div className="md:col-span-8">
                <span className="font-serif italic text-graphite">{project.category}</span>
                <h1 className="mt-3 font-serif text-4xl leading-[1.05] text-ink sm:text-5xl md:text-6xl">
                  {project.name}
                </h1>
              </div>
              <div className="grid grid-cols-2 gap-6 border-t border-ink/10 pt-6 font-sans text-sm md:col-span-4 md:border-t-0 md:pt-0">
                <div>
                  <p className="text-[11px] uppercase tracking-widest2 text-graphite">Location</p>
                  <p className="mt-1 text-ink">{project.location}</p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-widest2 text-graphite">Year</p>
                  <p className="mt-1 text-ink">{project.year}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AnimatedLine className="mx-auto h-px w-[calc(100%-3rem)] max-w-sheet md:w-[calc(100%-6rem)]" />

        {/* Case study body: sticky left rail, scrolling right content */}
        <section className="mx-auto max-w-sheet px-6 py-20 md:px-12 md:py-28">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="md:sticky md:top-32">
                <span className="font-serif italic text-graphite">Fig. A</span>
                <h2 className="mt-3 font-serif text-3xl leading-tight text-ink">
                  Project scope
                </h2>
                <p className="mt-4 max-w-xs font-sans text-sm leading-relaxed text-graphite">
                  {project.scope}
                </p>
                <div className="mt-8 space-y-1 font-sans text-[11px] uppercase tracking-widest2 text-ink/60">
                  <p>01 — Concept</p>
                  <p>02 — Materials</p>
                  <p>03 — Challenge &amp; solution</p>
                  <p>04 — Gallery</p>
                  <p>05 — Result</p>
                </div>
              </div>
            </div>

            <div className="space-y-8 md:col-span-8">
              <PinnedSheet label="01 — Design concept">
                <p className="max-w-2xl font-serif text-xl leading-relaxed text-ink md:text-2xl">
                  {project.concept}
                </p>
              </PinnedSheet>

              <PinnedSheet label="02 — Materials">
                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {project.materials.map((m) => (
                    <li
                      key={m}
                      className="flex items-center gap-3 border-b border-ink/10 pb-3 font-sans text-sm text-ink"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" />
                      {m}
                    </li>
                  ))}
                </ul>
              </PinnedSheet>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <PinnedSheet label="03 — The challenge">
                  <p className="font-sans text-sm leading-relaxed text-graphite">
                    {project.challenge}
                  </p>
                </PinnedSheet>
                <PinnedSheet label="03 — The solution">
                  <p className="font-sans text-sm leading-relaxed text-graphite">
                    {project.solution}
                  </p>
                </PinnedSheet>
              </div>

              <div>
                <span className="mb-4 block font-sans text-[11px] uppercase tracking-widest2 text-graphite">
                  04 — Gallery
                </span>
                <div className="grid grid-cols-2 gap-4">
                  <ImageReveal className="col-span-2 aspect-[16/9]">
                    <ProjectMedia
                      src={project.gallery?.[0]}
                      alt={`${project.name} — gallery image 1`}
                      variant={project.variant + 1}
                      className="h-full w-full"
                    />
                  </ImageReveal>
                  <ImageReveal className="aspect-square" delay={0.1}>
                    <ProjectMedia
                      src={project.gallery?.[1]}
                      alt={`${project.name} — gallery image 2`}
                      variant={project.variant + 2}
                      className="h-full w-full"
                    />
                  </ImageReveal>
                  <ImageReveal className="aspect-square" delay={0.2}>
                    <ProjectMedia
                      src={project.gallery?.[2]}
                      alt={`${project.name} — gallery image 3`}
                      variant={project.variant + 3}
                      className="h-full w-full"
                    />
                  </ImageReveal>
                </div>
              </div>

              <PinnedSheet label="05 — Final result">
                <p className="max-w-2xl font-sans text-base leading-relaxed text-ink">
                  {project.result}
                </p>
              </PinnedSheet>
            </div>
          </div>
        </section>

        {/* Next project */}
        <section className="border-t border-ink/10 py-16">
          <Link
            href={`/projects/${next.slug}`}
            className="group mx-auto flex max-w-sheet items-center justify-between px-6 md:px-12"
          >
            <div>
              <p className="font-sans text-[11px] uppercase tracking-widest2 text-graphite">
                Next project
              </p>
              <p className="mt-2 font-serif text-3xl text-ink transition-transform duration-500 group-hover:translate-x-2 md:text-4xl">
                {next.name}
              </p>
            </div>
            <ArrowUpRight className="h-8 w-8 text-ink transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={1.2} />
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
