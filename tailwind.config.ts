import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F4F0E7",
        "paper-dim": "#EDE7D9",
        ink: "#1A1815",
        graphite: "#77736B",
        beige: "#DDD3C0",
        bronze: "#8C6E48",
        line: "rgba(26,24,21,0.28)",
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["Manrope", "Helvetica", "Arial", "sans-serif"],
      },
      maxWidth: {
        sheet: "1440px",
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      transitionTimingFunction: {
        sheet: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
