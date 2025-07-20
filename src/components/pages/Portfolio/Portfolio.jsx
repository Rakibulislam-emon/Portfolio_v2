

import { motion } from "framer-motion";
import { ExternalLink, Github, Code, Palette, Zap, Star, Clock } from "lucide-react";
import { featuredProjects, recentProjects, projects } from "../../Data/data.js";
import HeroSection from "./HeroSection.jsx";
import ProjectSection from "./ProjectSection";
import CTASection from "./CTASection.jsx";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900">
      <HeroSection />

      <ProjectSection 
        title="Featured Projects"
        subtitle="Highlighting my most impactful and innovative work"
        projects={featuredProjects}
        icon={Star}
        iconColor="text-yellow-400"
      />

      <ProjectSection 
        title="Recent Work"
        subtitle="My latest projects and experiments"
        projects={recentProjects}
        icon={Clock}
        iconColor="text-green-400"
      />

      <ProjectSection 
        title="All Projects"
        subtitle="Complete collection of my development journey"
        projects={projects}
        icon={Code}
        iconColor="text-purple-400"
      />

      <CTASection />
    </div>
  );
}



