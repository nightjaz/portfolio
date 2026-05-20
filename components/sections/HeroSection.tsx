"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Starfield from "../effects/Starfield";
import { GithubIcon } from "../Icons";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <section
      ref={ref}
      className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image - Cosmic Whales */}
      <motion.div className="absolute inset-0 -z-10" style={{ scale }}>
        <Image
          src="/cosmic-bg.png"
          alt=""
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-space/70 via-deep-space/40 to-transparent" />
      </motion.div>

      {/* Bottom fade into projects */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 md:h-64 pointer-events-none z-20"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, rgba(10,18,40,0.6) 50%, #0a1228 100%)",
        }}
      />

      {/* Starfield */}
      <Starfield density={80} className="opacity-70" />

      {/* Golden glow accents */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gold-shimmer/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gold-bright/6 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-ethereal-violet/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Content */}
      <motion.div
        style={{ opacity, y }}
        className="relative z-10 container mx-auto px-6 py-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-sm text-lavender-mist mb-6 tracking-wider"
          >
            AI systems · full-stack products · applied ML
          </motion.p>

          {/* Main headline - Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="heading-editorial text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-3 leading-normal"
          >
            <span className="block gradient-text-gold pb-2">Prajakta Bandgar</span>
          </motion.h1>

          {/* Institution */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-lavender-mist mb-6 tracking-wide"
          >
            BITS Pilani, Goa
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="heading-editorial text-2xl sm:text-3xl md:text-4xl text-lavender-mist mb-8"
          >
            Mapping the invisible with code.
          </motion.p>

          {/* Supporting copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="body-clean text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-6 leading-relaxed"
          >
            An engineering student focused on ML/AI engineering and full-stack
            product development. I build products where AI has a job to do —
            turning messy real-world data into clear, usable systems.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="body-clean text-text-muted max-w-xl mx-auto mb-10"
          >
            My work spans AI finance tools, neuromorphic image processing, biomedical
            signal prototypes, and LLM evaluation.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            <a
              href="#projects"
              className="px-6 py-3 btn-gold rounded-full"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              className="px-6 py-3 btn-outline-gold rounded-full"
            >
              View Resume
            </a>
            <a
              href="https://github.com/nightjaz"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 btn-outline-gold rounded-full flex items-center gap-2"
            >
              <GithubIcon size={18} />
              GitHub
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <p className="text-text-muted text-sm mb-4">scroll to explore</p>
            <div className="w-6 h-10 border-2 border-gold-shimmer/40 rounded-full mx-auto flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-3 bg-gold-shimmer rounded-full mt-2"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
