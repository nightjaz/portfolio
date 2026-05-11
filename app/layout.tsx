import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Prajakta Bandgar — AI Product Engineer",
  description:
    "Portfolio of Prajakta Bandgar, an engineering student building AI-powered products, ML systems, and data-rich tools that turn messy real-world information into clear decisions.",
  keywords: [
    "Prajakta Bandgar",
    "AI Engineer",
    "ML Engineer",
    "Product Engineer",
    "BITS Pilani",
    "Guild",
    "Portfolio",
  ],
  authors: [{ name: "Prajakta Bandgar" }],
  openGraph: {
    title: "Prajakta Bandgar — AI Product Engineer",
    description:
      "Building AI-powered products that turn messy real-world data into clear decisions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
