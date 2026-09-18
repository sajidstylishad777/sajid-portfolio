# Sajid Siddiqui — Interior Designer Portfolio

A premium, animated portfolio site built as an architectural sketchbook / design journal.

## Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion (scroll reveals, page/section motion)
- GSAP (installed, available for any additional advanced scroll work)
- Lucide React icons
- Self-hosted fonts via @fontsource (Cormorant Garamond + Manrope) — no external font requests at build or runtime

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Production build

```bash
npm run build
npm run start
```

## Structure

```
app/
  layout.tsx            Root layout, fonts, metadata, cursor, paper texture
  page.tsx               Homepage composing all sections
  globals.css             Paper texture, tokens, base styles
  projects/[slug]/page.tsx   Cinematic case-study page per project
components/
  Navbar, Hero, About, Philosophy, Projects, ProjectCard,
  Services, Experience, Contact, Footer,
  CustomCursor, AnimatedLine, ImageReveal, Counter, SketchArt
lib/
  projects.ts             Project content/data
```

## About the imagery

Every "photo" on the site is an original SVG line-art composition
(`components/SketchArt.tsx`) drawn in the site's ink/beige/bronze palette,
styled as hand-drawn architectural presentation sketches rather than stock
photography. Swap these for real project photography by replacing the
`<SketchArt variant={...} />` usages with `next/image` and photos in
`/public/images` — the surrounding reveal and hover animations will keep
working unchanged.

## Content to personalize before launch

- Real email, phone, LinkedIn and Instagram links in `components/Contact.tsx` and `components/Footer.tsx`
- Project photography (see above) and any project detail copy in `lib/projects.ts`
- Wire the contact form in `components/Contact.tsx` to a real endpoint (e.g. Formspree, Resend, or an API route) — it currently only simulates success client-side
