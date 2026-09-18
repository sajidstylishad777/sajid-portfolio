import AnimatedLine from "./AnimatedLine";

export default function Footer() {
  return (
    <footer className="relative border-t border-ink/10 py-12">
      <div className="mx-auto max-w-sheet px-6 md:px-12">
        <AnimatedLine className="mb-10 h-px w-full" duration={1.4} />
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <p className="font-serif text-xl text-ink">SAJID SIDDIQUI</p>
            <p className="mt-1 font-sans text-[11px] uppercase tracking-widest2 text-graphite">
              Interior Designer
            </p>
            <p className="mt-4 font-serif italic text-graphite">
              Designing spaces. Creating experiences.
            </p>
          </div>
          <div className="flex gap-6 font-sans text-[11px] uppercase tracking-widest2 text-ink/70">
            <a href="#" className="transition-colors hover:text-ink">Instagram</a>
            <a href="#" className="transition-colors hover:text-ink">LinkedIn</a>
            <a href="mailto:hello@sajidsiddiqui.design" className="transition-colors hover:text-ink">Email</a>
          </div>
        </div>
        <p className="mt-10 font-sans text-[11px] text-graphite/70">
          &copy; {new Date().getFullYear()} Sajid Siddiqui. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
