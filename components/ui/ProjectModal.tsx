"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { GithubIcon } from "../Icons";
import { ProjectBlog } from "@/data/projectBlogs";

interface ProjectModalProps {
  project: ProjectBlog | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleEscape]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-deep-space/80 backdrop-blur-md" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl backdrop-blur-xl"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
              border: "1px solid rgba(212,168,90,0.25)",
              boxShadow: "0 24px 64px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
            }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Close modal"
            >
              <X size={20} className="text-text-secondary" />
            </button>

            {/* Content */}
            <div className="p-6 md:p-8">
              {/* Video */}
              {project.video && (
                <div className="mb-8 rounded-xl overflow-hidden border border-white/10">
                  <video
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full"
                  />
                </div>
              )}

              {/* Images */}
              {project.images && project.images.length > 0 && (
                <div className="mb-8 space-y-4">
                  {project.images.map((img, i) => (
                    <div key={i} className="rounded-xl overflow-hidden border border-white/10">
                      <img src={img} alt="" className="w-full" />
                    </div>
                  ))}
                </div>
              )}

              {/* Header */}
              <div className="mb-8">
                <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-gold-shimmer mb-3">
                  {project.category}
                </div>
                <h2 className="heading-editorial text-3xl md:text-4xl text-text-primary mb-2 pb-1">
                  {project.title}
                </h2>
                <p className="text-text-secondary text-lg">
                  {project.subtitle}
                </p>
              </div>

              {/* Metrics */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="flex flex-wrap gap-4 mb-8 p-4 rounded-xl bg-white/5 border border-white/10">
                  {project.metrics.map((m) => (
                    <div
                      key={m.key}
                      className={`flex-1 min-w-[100px] text-center ${m.highlight ? "" : ""}`}
                    >
                      <div className={`heading-editorial text-2xl ${m.highlight ? "text-gold-shimmer" : "text-text-primary"}`}>
                        {m.value}
                      </div>
                      <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-text-muted mt-1">
                        {m.key}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Problem */}
              <Section title="The Problem">
                {project.problem}
              </Section>

              {/* Approach */}
              <Section title="My Approach">
                {project.approach}
              </Section>

              {/* Contribution */}
              <Section title="What I Did">
                {project.contribution}
              </Section>

              {/* Result */}
              <Section title="Results">
                {project.result}
              </Section>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] px-3 py-1 border border-gold-shimmer/20 text-gold-shimmer/80 tracking-wide rounded-full bg-gold-shimmer/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              {project.links && (project.links.demo || project.links.github || project.links.paper) && (
                <div className="flex flex-wrap gap-4 pt-6 border-t border-gold-shimmer/20">
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold-shimmer/10 border border-gold-shimmer/30 text-gold-shimmer hover:bg-gold-shimmer/20 transition-colors font-mono text-sm tracking-wide"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/20 text-text-secondary hover:border-gold-shimmer/30 hover:text-gold-shimmer transition-colors font-mono text-sm tracking-wide"
                    >
                      <GithubIcon size={14} />
                      View Code
                    </a>
                  )}
                  {project.links.paper && (
                    <a
                      href={project.links.paper}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/20 text-text-secondary hover:border-gold-shimmer/30 hover:text-gold-shimmer transition-colors font-mono text-sm tracking-wide"
                    >
                      <ExternalLink size={14} />
                      Read Paper
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Section({ title, children }: { title: string; children: string }) {
  const paragraphs = children.split("\n\n");

  return (
    <div className="mb-8">
      <h3 className="heading-editorial text-xl text-gold-shimmer mb-4">
        {title}
      </h3>
      <div className="space-y-4">
        {paragraphs.map((p, i) => (
          <p
            key={i}
            className="body-clean text-text-secondary text-sm leading-relaxed whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: formatText(p) }}
          />
        ))}
      </div>
    </div>
  );
}

function formatText(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-text-primary font-medium">$1</strong>')
    .replace(/•/g, '<span class="text-gold-shimmer">•</span>');
}
