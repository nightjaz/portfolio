"use client";

import Navigation from "@/components/layout/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import FooterSection from "@/components/sections/FooterSection";
import ScrollGradient from "@/components/effects/ScrollGradient";
import CursorGlow from "@/components/effects/CursorGlow";
import WaterRipple from "@/components/effects/WaterRipple";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      {/* Global Effects */}
      <ScrollGradient />
      <CursorGlow />
      <WaterRipple />

      {/* Navigation - appears on scroll */}
      <Navigation />

      {/* Sections */}
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ExperienceSection />
      <FooterSection />
    </main>
  );
}
