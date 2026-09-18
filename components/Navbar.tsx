"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-sheet ${
        scrolled ? "bg-paper/90 backdrop-blur-sm shadow-[0_1px_0_rgba(26,24,21,0.1)]" : "bg-transparent"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-sheet items-center justify-between px-6 md:px-12 transition-all duration-500 ease-sheet ${
          scrolled ? "py-4" : "py-7"
        }`}
        aria-label="Primary"
      >
        <Link
          href="#home"
          className="font-serif text-lg tracking-wide text-ink"
          data-cursor="Home"
        >
          Sajid Siddiqui
        </Link>

        <ul className="hidden items-center gap-9 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-sans text-[11px] font-medium uppercase tracking-widest2 text-ink/80 transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="relative z-50 flex h-8 w-9 flex-col items-end justify-center gap-[7px] md:hidden"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 4, width: 28 } : { rotate: 0, y: 0, width: 28 }}
            className="h-[1.5px] bg-ink"
          />
          <motion.span
            animate={open ? { opacity: 0, width: 0 } : { opacity: 1, width: 20 }}
            className="h-[1.5px] bg-ink"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -4, width: 28 } : { rotate: 0, y: 0, width: 28 }}
            className="h-[1.5px] bg-ink"
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 top-0 z-40 flex flex-col justify-center bg-paper md:hidden"
          >
            <ul className="flex flex-col gap-2 px-8">
              {LINKS.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-ink/10 py-4 font-serif text-4xl text-ink"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
