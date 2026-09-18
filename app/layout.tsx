import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Sajid Siddiqui | Interior Designer Portfolio",
  description:
    "Explore the interior design portfolio of Sajid Siddiqui, featuring residential, commercial, hospitality and UAE interior design projects.",
  openGraph: {
    title: "Sajid Siddiqui | Interior Designer Portfolio",
    description:
      "Explore the interior design portfolio of Sajid Siddiqui, featuring residential, commercial, hospitality and UAE interior design projects.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="paper-texture" />
        <div className="paper-vignette" />
        <CustomCursor />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
