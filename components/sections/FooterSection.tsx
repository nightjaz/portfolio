"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../Icons";

export default function FooterSection() {
  return (
    <footer id="contact" className="relative py-32 overflow-hidden">
      {/* Hero background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/cosmic-bg.png"
          alt=""
          fill
          className="object-cover opacity-30 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-space via-transparent to-deep-space/80" />
      </div>

      {/* Top fade from Experience */}
      <div
        className="absolute top-0 left-0 right-0 h-32 -z-5 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, #0a0d1a 0%, transparent 100%)",
        }}
      />

      {/* Gold accent glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(212,168,90,0.15), transparent 60%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container max-w-2xl mx-auto px-6 text-center relative z-10"
      >
        <h2 className="heading-editorial text-3xl md:text-4xl lg:text-5xl gradient-text-gold mb-6">
          Let&apos;s build something useful.
        </h2>

        <p className="text-text-secondary mb-12 max-w-lg mx-auto text-sm leading-relaxed">
          I&apos;m looking for ML/AI engineering and software development
          opportunities where I can work on finished products and AI features that solve real problems.
        </p>

        {/* Links */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <a
            href="https://github.com/nightjaz"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 bg-deep-space/40 backdrop-blur-xl border border-gold-shimmer/20 rounded-xl hover:border-gold-shimmer/40 hover:bg-deep-space/60 transition-all"
            aria-label="GitHub"
          >
            <GithubIcon
              size={22}
              className="text-text-secondary group-hover:text-gold-shimmer transition-colors"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/prajakta-bandgar-2bb6a92a6/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 bg-deep-space/40 backdrop-blur-xl border border-gold-shimmer/20 rounded-xl hover:border-gold-shimmer/40 hover:bg-deep-space/60 transition-all"
            aria-label="LinkedIn"
          >
            <LinkedinIcon
              size={22}
              className="text-text-secondary group-hover:text-gold-shimmer transition-colors"
            />
          </a>
          <a
            href="mailto:f20231033@goa.bits-pilani.ac.in"
            className="group p-4 bg-deep-space/40 backdrop-blur-xl border border-gold-shimmer/20 rounded-xl hover:border-gold-shimmer/40 hover:bg-deep-space/60 transition-all"
            aria-label="Email"
          >
            <Mail
              size={22}
              className="text-text-secondary group-hover:text-gold-shimmer transition-colors"
            />
          </a>
        </div>

        {/* Resume button */}
        <a
          href="/resume.pdf"
          target="_blank"
          className="inline-flex items-center gap-3 px-8 py-4 bg-gold-shimmer/10 border border-gold-shimmer/30 text-gold-shimmer rounded-full hover:bg-gold-shimmer/20 hover:border-gold-shimmer/50 transition-all mb-16"
        >
          <Download size={18} />
          Download Resume
        </a>

        {/* Footer text */}
        <p className="text-text-muted text-xs mb-1">
          Built somewhere between a lab notebook and a star map.
        </p>
        <p className="text-text-muted/50 text-xs">
          &copy; {new Date().getFullYear()} Prajakta Bandgar
        </p>
      </motion.div>
    </footer>
  );
}
