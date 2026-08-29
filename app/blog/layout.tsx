import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Field Notes — Prajakta Bandgar",
  description:
    "Technical notes on AI, machine learning, hardware, debugging, and building useful products.",
  openGraph: {
    title: "Field Notes — Prajakta Bandgar",
    description:
      "Technical notes on AI, machine learning, hardware, debugging, and building useful products.",
    type: "website",
    images: [],
  },
  twitter: {
    card: "summary",
    title: "Field Notes — Prajakta Bandgar",
    description:
      "Technical notes on AI, machine learning, hardware, debugging, and building useful products.",
    images: [],
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
