"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../ui/ProjectCard";
import ProjectModal from "../ui/ProjectModal";
import { projectBlogs, ProjectBlog } from "@/data/projectBlogs";

const projects = [
  {
    id: "guild",
    title: "Guild — AI Finance Tracker",
    chapter: "P-01",
    category: "Web · AI",
    description: "A full-stack finance dashboard that turns PDF statements into spending patterns, editable categories, financial plans, and Gemini-powered insights.",
    metrics: [
      { key: "solo", value: "design + build" },
      { key: "live", value: "deployed" },
    ],
    tags: ["Next.js", "Firebase", "Gemini", "Vercel"],
    status: "Built and deployed",
    links: { demo: "https://guild-awsd.vercel.app/" },
    hue: "#f4d586",
  },
  {
    id: "spintronics",
    title: "Spintronic Edge Detection",
    chapter: "P-02",
    category: "Hardware · Research",
    description: "Research project on energy-efficient image edge detection using spintronic devices and hardware-aware logic. Achieved +143% improvement over SAM2 baselines.",
    metrics: [
      { key: "+143%", value: "vs SAM2" },
      { key: "85–171 nJ", value: "energy" },
    ],
    tags: ["Image Processing", "Neuromorphic", "Spintronics", "SOT-MTJ"],
    status: "Paper in progress",
    hue: "#d4a85a",
  },
  {
    id: "cardiac",
    title: "AI Cardiac Sensor",
    chapter: "P-03",
    category: "ML · Hardware",
    description: "Low-cost digital stethoscope for ML-based cardiac abnormality classification using hybrid ensemble methods.",
    metrics: [
      { key: "89.2%", value: "accuracy" },
      { key: "0.97", value: "AUC-ROC" },
    ],
    tags: ["ESP32", "PyTorch", "Signal Processing", "librosa"],
    status: "Prototype",
    hue: "#f0c878",
  },
  {
    id: "bp",
    title: "Blood Pressure Estimation",
    chapter: "P-04",
    category: "ML · Signals",
    description: "Real-time, calibration-free BP prediction from ECG/PPG signals using 1D CNN and Time Series UNet with lightweight PTT algorithm.",
    metrics: [
      { key: "ECG+PPG", value: "fused input" },
      { key: "PTT", value: "lightweight" },
    ],
    tags: ["TensorFlow", "Signal Processing", "Deep Learning"],
    status: "Research complete",
    hue: "#c9a85a",
  },
  {
    id: "avionics",
    title: "Rocket Avionics",
    chapter: "P-05",
    category: "Embedded",
    description: "Embedded C++ firmware for I²C-connected baro/temp/accel sensors with Kalman-filtered altitude estimation for student rocketry project.",
    metrics: [
      { key: "I²C", value: "BMP180 · MPU6050" },
      { key: "Kalman", value: "noise smoothing" },
    ],
    tags: ["Embedded C++", "Arduino", "Kalman Filter", "I2C"],
    status: "Deployed",
    links: { github: "https://github.com/Rocketry-Avionics" },
    hue: "#d4a85a",
  },
  {
    id: "rag",
    title: "RAG Educational Bot",
    chapter: "P-06",
    category: "ML · Eval",
    description: "Benchmarked open-source LLaMA models against Gemini ground truth for educational Q&A using RAGAS + BLEU evaluation frameworks.",
    metrics: [
      { key: "RAGAS", value: "eval framework" },
      { key: "LlamaIndex", value: "retrieval" },
    ],
    tags: ["Python", "LLaMA", "LlamaIndex", "RAGAS"],
    status: "Research",
    hue: "#f0c878",
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectBlog | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (projectId: string) => {
    const blog = projectBlogs[projectId];
    if (blog) {
      setSelectedProject(blog);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 200);
  };

  return (
    <section
      id="projects"
      className="relative py-32 overflow-hidden bg-gradient-to-b from-[#0a1228] via-[#0e1838] to-[#101630]"
    >
      {/* Starfield effect */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          {Array.from({ length: 80 }).map((_, i) => {
            const x = (i * 31 + 17) % 100;
            const y = (i * 23 + 11) % 100;
            return (
              <circle
                key={i}
                cx={`${x}%`}
                cy={`${y}%`}
                r={0.5 + (i % 3) * 0.3}
                fill="#f4d586"
                opacity={0.3 + (i % 4) * 0.1}
              />
            );
          })}
        </svg>
      </div>

      {/* Gold dust effects */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          background: "radial-gradient(ellipse 60% 30% at 30% 20%, rgba(212,168,83,0.2), transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: "radial-gradient(ellipse 40% 40% at 80% 70%, rgba(240,200,120,0.15), transparent 50%)",
        }}
      />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
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
            <span>field guide</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-8">
            <h2 className="heading-editorial text-4xl md:text-5xl lg:text-6xl text-text-primary leading-tight pb-2">
              Top<br />
              <em className="italic text-gold-shimmer">projects.</em>
            </h2>
            <p className="text-text-secondary text-sm max-w-sm leading-relaxed lg:text-right">
              A mix of medical ML, neuromorphic hardware, embedded avionics, and shipped product. Each one taught me something I&apos;m still using.
            </p>
          </div>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onClick={() => openModal(project.id)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
}
