"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Instagram, MapPin } from "lucide-react";

const fields = [
  { name: "name", label: "Name", type: "text" },
  { name: "email", label: "Email", type: "email" },
  { name: "projectType", label: "Project Type", type: "text" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative overflow-hidden py-28 md:py-36">
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: "-20% 0px" }}
        transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
        style={{ originY: 0 }}
        className="absolute inset-x-0 top-0 h-px bg-ink/15"
      />

      <div className="mx-auto max-w-sheet px-6 md:px-12">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <span className="font-serif italic text-graphite"></span>
            <h2 className="mt-4 font-serif text-[2.6rem] leading-[1.02] text-ink sm:text-6xl md:text-[3.6rem]">
              Let&rsquo;s create
              <br />
              something
              <br />
              remarkable.
            </h2>
            <div className="mt-12 space-y-4 border-t border-ink/10 pt-8">
              <a href="mailto:hello@sajidsiddiqui.design" className="flex items-center gap-3 font-sans text-sm text-ink transition-colors hover:text-bronze">
                <Mail className="h-4 w-4" strokeWidth={1.5} /> sajidsidd777@gmail.com
              </a>
              <a href="tel:+971500000000" className="flex items-center gap-3 font-sans text-sm text-ink transition-colors hover:text-bronze">
                <Phone className="h-4 w-4" strokeWidth={1.5} /> +971 50 430 4401
              </a>
              <a href="#" className="flex items-center gap-3 font-sans text-sm text-ink transition-colors hover:text-bronze">
                <Linkedin className="h-4 w-4" strokeWidth={1.5} /> https://www.linkedin.com/in/sajid-siddiqui-2b0925112/
              </a>
              <a href="#" className="flex items-center gap-3 font-sans text-sm text-ink transition-colors hover:text-bronze">
                <Instagram className="h-4 w-4" strokeWidth={1.5} /> @sajid_since1997
              </a>
              <p className="flex items-center gap-3 font-sans text-sm text-graphite">
                <MapPin className="h-4 w-4" strokeWidth={1.5} /> Abu Dhabi, United Arab Emirates
              </p>
            </div>
          </div>

          <div className="md:col-span-6">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex h-full min-h-[320px] flex-col justify-center border border-ink/15 p-10"
              >
                <p className="font-serif text-2xl text-ink">Inquiry sent.</p>
                <p className="mt-3 font-sans text-sm text-graphite">
                  Thank you for reaching out — a response will follow within
                  one business day.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-8"
              >
                {fields.map((f) => (
                  <div key={f.name} className="group relative">
                    <label
                      htmlFor={f.name}
                      className="mb-2 block font-sans text-[11px] uppercase tracking-widest2 text-graphite"
                    >
                      {f.label}
                    </label>
                    <input
                      id={f.name}
                      name={f.name}
                      type={f.type}
                      required
                      className="w-full border-b border-ink/20 bg-transparent py-2 font-sans text-base text-ink outline-none transition-colors focus:border-ink"
                    />
                  </div>
                ))}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block font-sans text-[11px] uppercase tracking-widest2 text-graphite"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full resize-none border-b border-ink/20 bg-transparent py-2 font-sans text-base text-ink outline-none transition-colors focus:border-ink"
                  />
                </div>
                <button
                  type="submit"
                  data-cursor="Send"
                  className="mt-4 inline-flex items-center border border-ink px-8 py-3 font-sans text-[11px] font-semibold uppercase tracking-widest2 text-ink transition-colors duration-300 hover:bg-ink hover:text-paper"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
