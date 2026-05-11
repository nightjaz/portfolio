"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "../Icons";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  status: string;
  links?: {
    demo?: string;
    github?: string;
  };
  video?: string;
}

interface FlipCardProps {
  project: Project;
}

export default function FlipCard({ project }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="w-[280px] md:w-[320px] h-[420px] perspective-1000 flex-shrink-0 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Front Face */}
        <div className="absolute inset-0 backface-hidden rounded-2xl p-5 flex flex-col bg-deep-space/40 backdrop-blur-2xl border border-gold-shimmer/20 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]">
          {/* Video preview for Guild */}
          {project.video && (
            <div className="rounded-xl overflow-hidden mb-4 flex-shrink-0 border border-gold-shimmer/10">
              <video
                src={project.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[100px] object-cover"
              />
            </div>
          )}

          {/* Status badge */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] px-2 py-1 rounded-full bg-gold-shimmer/20 text-gold-shimmer uppercase tracking-wider">
              {project.status}
            </span>
          </div>

          {/* Title */}
          <h3 className="heading-editorial text-lg text-text-primary mb-2">
            {project.title}
          </h3>

          {/* Subtitle */}
          <p className="body-clean text-text-secondary text-xs flex-grow leading-relaxed">
            {project.subtitle}
          </p>

          {/* Tags preview */}
          <div className="flex flex-wrap gap-1 mt-3">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2 py-0.5 rounded bg-lavender-mist/10 text-lavender-mist"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Flip hint */}
          <div className="mt-3 pt-3 border-t border-gold-shimmer/10">
            <p className="text-text-muted text-[10px] text-center">
              tap for details
            </p>
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl p-5 flex flex-col bg-deep-space/60 backdrop-blur-2xl border border-lavender-mist/20 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]">
          <h4 className="heading-editorial text-sm text-lavender-mist mb-3">
            Technical Details
          </h4>

          {/* Description */}
          <p className="body-clean text-text-secondary text-xs mb-4 flex-grow leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2 py-0.5 rounded bg-twilight/50 text-lavender-mist"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          {project.links && (
            <div className="flex gap-3">
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1 text-xs text-gold-shimmer hover:text-gold-bright transition-colors"
                >
                  <ExternalLink size={12} />
                  Try it
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1 text-xs text-text-secondary hover:text-gold-shimmer transition-colors"
                >
                  <GithubIcon size={12} />
                  Code
                </a>
              )}
            </div>
          )}

          {/* Flip back hint */}
          <p className="text-text-muted text-[10px] text-center mt-3">
            tap to flip back
          </p>
        </div>
      </motion.div>
    </div>
  );
}
