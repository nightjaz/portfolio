"use client";

import { motion } from "framer-motion";

const experienceGroups = [
  {
    year: "2025",
    roles: [
      {
        co: "AI Gurukul",
        role: "AI Research Intern",
        period: "May — Aug",
        desc: "Benchmarked open-source LLMs (LLaMA family) for educational Q&A using RAG pipelines. Evaluated with RAGAS + BLEU; integrated LlamaIndex for retrieval.",
        stack: ["Python", "LLaMA", "RAG", "LlamaIndex"],
      },
      {
        co: "FuturixAI",
        role: "Product Lead",
        period: "Jan — Jul",
        desc: "Drove product strategy and AI feature design with emphasis on user experience. Led competitive analysis and mapped strategic decisions based on insights.",
        stack: ["Strategy", "AI/ML", "UX"],
      },
    ],
  },
  {
    year: "2024",
    roles: [
      {
        co: "IISER",
        role: "Data Analysis Intern",
        period: "Jun — Jul",
        desc: "Analyzed solar CME datasets to uncover correlations for space weather prediction. Time-series analysis on preprocessed NASA data.",
        stack: ["Python", "Pandas", "NumPy"],
      },
      {
        co: "Sensesemi",
        role: "Summer Intern",
        period: "May — Jul",
        desc: "Designed 1D CNN + Time Series UNet models for blood pressure estimation. Engineered lightweight PTT-based algorithm for real-time BP prediction.",
        stack: ["Python", "Deep Learning", "DSP"],
      },
    ],
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

      <div className="container max-w-5xl mx-auto px-6 relative z-10">
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

        {/* Timeline - concurrent roles side by side */}
        <div className="relative">
          {/* Vertical line - centered */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px hidden md:block"
            style={{
              background: "linear-gradient(180deg, #f0c878, #c9a85a, rgba(201,168,90,0.1))",
              boxShadow: "0 0 8px rgba(212,168,90,0.4)",
            }}
          />
          {/* Mobile: left-aligned line */}
          <div
            className="absolute left-[24px] top-0 bottom-0 w-px md:hidden"
            style={{
              background: "linear-gradient(180deg, #f0c878, #c9a85a, rgba(201,168,90,0.1))",
              boxShadow: "0 0 8px rgba(212,168,90,0.4)",
            }}
          />

          {experienceGroups.map((group, gi) => (
            <div key={group.year} className={gi > 0 ? "mt-16" : ""}>
              {/* Year marker - centered on timeline */}
              <div className="relative flex justify-center mb-8">
                <div
                  className="hidden md:block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gold-bright"
                  style={{ boxShadow: "0 0 12px rgba(240,200,120,0.6)" }}
                />
                <span className="relative z-10 font-mono text-sm tracking-[0.3em] uppercase text-gold-shimmer bg-ocean-deep px-4 py-1">
                  {group.year}
                </span>
              </div>

              {/* Two roles side by side */}
              <div className="relative flex flex-col md:flex-row md:gap-16">
                {group.roles.map((exp, i) => (
                  <motion.div
                    key={exp.co}
                    initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className={`relative flex-1 pl-[72px] md:pl-0 mb-8 md:mb-0 ${
                      i === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                    }`}
                  >
                    {/* Mobile node */}
                    <div
                      className="absolute left-[18px] top-[6px] w-[13px] h-[13px] rounded-full bg-gold-bright md:hidden"
                      style={{ boxShadow: "0 0 12px rgba(240,200,120,0.6)" }}
                    />
                    <div className="absolute left-[24px] top-[12px] w-9 h-px bg-gold-shimmer/60 md:hidden" />

                    {/* Period */}
                    <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-gold-shimmer mb-2">
                      {exp.period}
                    </div>

                    {/* Company & Role */}
                    <h3 className="heading-editorial text-2xl text-text-primary mb-1">
                      {exp.co}
                    </h3>
                    <p className="heading-editorial italic text-base text-gold-shimmer mb-3">
                      {exp.role}
                    </p>

                    {/* Description */}
                    <p className="body-clean text-text-secondary text-sm leading-relaxed mb-4">
                      {exp.desc}
                    </p>

                    {/* Stack tags */}
                    <div className={`flex flex-wrap gap-2 ${i === 0 ? "md:justify-end" : ""}`}>
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
          ))}
        </div>
      </div>
    </section>
  );
}
