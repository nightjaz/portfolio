"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const domains = ["AI / ML", "Embedded Systems", "Hardware", "Product"];

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-[#F4EDE4]">
      {/* Subtle paper texture */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Photo - absolutely positioned bottom left, flush to edges */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="hidden md:block absolute bottom-0 left-0 z-10"
      >
        <img
          src="/prajakta.png"
          alt="Prajakta Bandgar"
          className="h-[500px] lg:h-[600px] w-auto block"
        />
      </motion.div>

      {/* Right - Content */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-20 ml-auto w-full md:w-[58%] lg:w-[60%] px-6 md:px-12 lg:px-16 py-20 md:py-24"
      >
        <h2 className="heading-editorial text-4xl md:text-5xl lg:text-6xl text-[#152040] mb-10 md:mb-12">
          About me
        </h2>

        <p className="body-clean text-[#1a2850] text-lg leading-relaxed mb-6">
          I&apos;m Prajakta, an engineering student at BITS Pilani, Goa, interested
          in ML/AI engineering and product-minded software development.
        </p>

        <p className="body-clean text-[#2d3a52] leading-relaxed mb-6">
          Most of my work starts with messy data: PDF statements, model responses,
          biomedical signals, image datasets, or sensor readings. I enjoy turning
          that ambiguity into something structured — a dashboard, a model, an
          evaluation pipeline, or a product feature that helps someone make a better decision.
        </p>

        <p className="body-clean text-[#2d3a52] leading-relaxed mb-8">
          I&apos;m especially interested in AI systems that are useful beyond the
          demo: tools with clear interfaces, grounded outputs, and a reason to exist.
        </p>

        {/* Pull quote */}
        <div className="border-l-4 border-[#152040] pl-6 py-2 mb-8">
          <p className="heading-editorial text-xl md:text-2xl text-[#152040] italic">
            &ldquo;I like systems that make hidden patterns visible.&rdquo;
          </p>
        </div>

        {/* Domains */}
        <div className="flex flex-wrap gap-3">
          {domains.map((domain, i) => (
            <motion.span
              key={domain}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className="px-5 py-2 border-2 border-[#152040]/30 rounded-full text-[#152040] text-sm hover:border-[#152040] hover:bg-[#152040] hover:text-[#F4EDE4] transition-all"
            >
              {domain}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
