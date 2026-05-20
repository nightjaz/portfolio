"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "../Icons";

interface Project {
  id: string;
  title: string;
  chapter: string;
  category: string;
  description: string;
  metrics: { key: string; value: string }[];
  tags: string[];
  status: string;
  links?: {
    demo?: string;
    github?: string;
  };
  hue?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick?: () => void;
}

export default function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const hue = project.hue || "#f0c878";

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className="relative h-full rounded-2xl overflow-hidden cursor-pointer transition-all duration-400 backdrop-blur-xl"
      style={{
        background: isHovered
          ? "rgba(255,255,255,0.12)"
          : "rgba(255,255,255,0.06)",
        border: isHovered
          ? "1px solid rgba(212,168,90,0.4)"
          : "1px solid rgba(255,255,255,0.1)",
        boxShadow: isHovered
          ? "0 8px 32px rgba(212,168,90,0.2), inset 0 1px 0 rgba(255,255,255,0.1)"
          : "0 8px 32px rgba(0,0,0,0.3)",
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-400"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${hue}22 0%, transparent 60%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* Content */}
      <div className="p-6 flex flex-col h-full">
        {/* Meta row */}
        <div className="flex justify-between font-mono text-[10px] tracking-[0.2em] uppercase mb-3">
          <span className="text-gold-shimmer">{project.chapter}</span>
          <span className="text-lavender-mist/70 px-2 py-0.5 bg-white/10 rounded-full">{project.status}</span>
        </div>

        {/* Title */}
        <h3 className="heading-editorial text-2xl text-text-primary mb-3 tracking-tight">
          {project.title}
        </h3>

        {/* Description - flex-grow fills space, pushing metrics to consistent bottom position */}
        <p className="body-clean text-text-secondary text-sm leading-relaxed mb-5 flex-grow">
          {project.description}
        </p>

        {/* Metrics */}
        {project.metrics.length > 0 && (
          <div className="flex gap-6 mb-5 flex-wrap">
            {project.metrics.map((m) => (
              <div key={m.key}>
                <div className="heading-editorial text-xl text-gold-shimmer font-light">
                  {m.key}
                </div>
                <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-lavender-mist/70 mt-1">
                  {m.value}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Stack tags - min-height ensures consistent spacing */}
        <div className="flex flex-wrap gap-2 mb-4 min-h-[3.5rem] content-start">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] px-3 py-1 border border-white/10 text-lavender-mist/80 tracking-wide rounded-full bg-white/5 h-fit"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links - min-height ensures cards with/without links align */}
        <div className={`flex gap-4 pt-3 min-h-[2.5rem] ${project.links ? 'border-t border-gold-shimmer/10' : ''}`}>
          {project.links?.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-xs text-gold-shimmer hover:text-gold-bright transition-colors font-mono tracking-wide"
            >
              <ExternalLink size={12} />
              Live
            </a>
          )}
          {project.links?.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-gold-shimmer transition-colors font-mono tracking-wide"
            >
              <GithubIcon size={12} />
              Code
            </a>
          )}
        </div>
      </div>

      {/* Hover arrow */}
      <div
        className="absolute right-4 bottom-4 font-mono text-sm text-gold-shimmer transition-all duration-300"
        style={{
          opacity: isHovered ? 1 : 0.3,
          transform: isHovered ? "translateX(4px)" : "translateX(0)",
        }}
      >
        ↗
      </div>
    </motion.article>
  );
}
