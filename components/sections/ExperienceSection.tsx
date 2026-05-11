"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    co: "AI Gurukul",
    role: "AI Research Intern",
    period: "May — Aug 2025",
    desc: "Benchmarked open-source LLMs (LLaMA family) for educational Q&A using RAG pipelines. Evaluated with RAGAS + BLEU; integrated LlamaIndex for retrieval.",
    stack: ["Python", "LLaMA", "RAG", "LlamaIndex"],
  },
  {
    co: "FuturixAI",
    role: "Product Lead",
    period: "Jan — Jul 2025",
    desc: "Drove product strategy and AI feature design with emphasis on user experience. Led competitive analysis and mapped strategic decisions based on insights.",
    stack: ["Strategy", "AI/ML", "UX"],
  },
  {
    co: "IISER",
    role: "Data Analysis Intern",
    period: "Jun — Jul 2024",
    desc: "Analyzed solar CME datasets to uncover correlations for space weather prediction. Time-series analysis on preprocessed NASA data.",
    stack: ["Python", "Pandas", "NumPy"],
  },
  {
    co: "Sensesemi Technologies",
    role: "Summer Intern",
    period: "May — Jul 2024",
    desc: "Designed 1D CNN + Time Series UNet models for blood pressure estimation. Engineered lightweight PTT-based algorithm for real-time BP prediction.",
    stack: ["Python", "Deep Learning", "DSP"],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative py-32 bg-gradient-to-b from-ocean-deep to-deep-space overflow-hidden"
    >
      {/* Starfield */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          {Array.from({ length: 60 }).map((_, i) => {
            const x = (i * 37 + 13) % 100;
            const y = (i * 29 + 7) % 100;
            return (
              <circle
                key={i}
                cx={`${x}%`}
                cy={`${y}%`}
                r={0.4 + (i % 3) * 0.25}
                fill="#f4d586"
                opacity={0.25 + (i % 4) * 0.1}
              />
            );
          })}
        </svg>
      </div>

      {/* Gold dust effects */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: "radial-gradient(ellipse 50% 40% at 70% 30%, rgba(212,168,83,0.25), transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          background: "radial-gradient(ellipse 30% 30% at 20% 80%, rgba(240,200,120,0.2), transparent 50%)",
        }}
      />

      <div className="container max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6 font-mono text-[11px] tracking-[0.32em] uppercase text-gold-shimmer">
            <span className="text-gold-bright">✦</span>
            <span>log book</span>
          </div>

          <h2 className="heading-editorial text-4xl md:text-5xl lg:text-6xl text-text-primary leading-tight pb-2">
            Where I&apos;ve been<br />
            <em className="italic text-gold-shimmer">orbiting.</em>
          </h2>
        </motion.div>

        {/* Featured Leadership Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative p-8 border border-gold-shimmer/30 rounded-2xl mb-16 overflow-hidden backdrop-blur-xl shadow-[0_8px_32px_rgba(212,168,90,0.15)]"
          style={{
            background: "linear-gradient(135deg, rgba(212,168,90,0.12), rgba(255,255,255,0.06))",
          }}
        >
          {/* Current orbit badge */}
          <div className="absolute top-6 right-6 font-mono text-[10px] tracking-[0.22em] uppercase text-gold-bright">
            ★ current orbit
          </div>

          <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-gold-shimmer mb-3">
            apr 2025 → present
          </div>

          <h3 className="heading-editorial text-2xl md:text-3xl text-text-primary mb-2">
            Avionics Subsystem Lead{" "}
            <em className="italic text-gold-shimmer">— Project Rocketry</em>
          </h3>

          <p className="body-clean text-text-secondary text-sm leading-relaxed max-w-2xl">
            Leading a 10-engineer avionics team within a 25-person student rocketry project at BITS Goa. Managing design and integration of flight computers, sensors, and telemetry systems.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line with gold glow */}
          <div
            className="absolute left-[24px] top-3 bottom-3 w-px"
            style={{
              background: "linear-gradient(180deg, #f0c878, #c9a85a, rgba(201,168,90,0.1))",
              boxShadow: "0 0 8px rgba(212,168,90,0.4)",
            }}
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.co}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-[72px]"
              style={{ paddingBottom: i === experiences.length - 1 ? 0 : 56 }}
            >
              {/* Node */}
              <div
                className="absolute left-[18px] top-[6px] w-[13px] h-[13px] rounded-full bg-gold-bright"
                style={{ boxShadow: "0 0 12px rgba(240,200,120,0.6)" }}
              />
              {/* Horizontal connector */}
              <div className="absolute left-[24px] top-[12px] w-9 h-px bg-gold-shimmer/60" />

              {/* Period */}
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-gold-shimmer mb-2">
                {exp.period}
              </div>

              {/* Company & Role */}
              <div className="flex flex-wrap items-baseline gap-3 mb-2">
                <h3 className="heading-editorial text-2xl md:text-3xl text-text-primary">
                  {exp.co}
                </h3>
                <span className="heading-editorial italic text-lg md:text-xl text-gold-shimmer">
                  — {exp.role}
                </span>
              </div>

              {/* Description */}
              <p className="body-clean text-text-secondary text-sm leading-relaxed max-w-2xl mb-4">
                {exp.desc}
              </p>

              {/* Stack tags */}
              <div className="flex flex-wrap gap-2">
                {exp.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[10px] px-2 py-1 border border-lavender-mist/20 text-lavender-mist/80 tracking-wide"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
