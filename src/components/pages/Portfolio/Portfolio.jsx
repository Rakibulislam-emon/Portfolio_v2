import { featuredProjects, recentProjects } from "../../Data/data.js";
import PortfolioAllProjects from "./PortfolioAllProjects.jsx";
import ProjectCard from "./ProjectCard";

export default function Portfolio() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Simple gradient background instead of heavy animations */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900"></div>

      {/* Portfolio Content */}
      <div className="relative max-w-7xl mx-auto z-10 min-h-screen flex flex-col lg:flex-row">
        {/* Left Side Projects */}
        <div className="w-full lg:w-1/4 p-3 sm:p-6 flex flex-col justify-center space-y-4 sm:space-y-8">
          <div className="text-center mb-4 sm:mb-8">
            <h2
              className="text-xl sm:text-2xl font-bold mb-2"
              style={{ color: "var(--color-heading)" }}
            >
              Featured
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} side="left" />
            ))}
          </div>
        </div>

        {/* Center - Hero Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center pt-8 sm:pt-20 px-6 text-center min-h-[400px] lg:min-h-0">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Portfolio
            </h1>
            <p className="text-lg sm:text-xl opacity-80 max-w-md">
              Showcasing my journey through code, creativity, and innovation
            </p>
          </div>
          
          <div className="relative">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center backdrop-blur-sm border border-white/10">
              <div className="text-4xl sm:text-5xl -rotate-50">🚀</div>
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 animate-ping"></div>
          </div>
        </div>

        {/* Right Side Projects */}
        <div className="w-full lg:w-1/4 p-3 sm:p-6 flex flex-col justify-center space-y-4 sm:space-y-8">
          <div className="text-center mb-4 sm:mb-8">
            <h2
              className="text-xl sm:text-2xl font-bold mb-2"
              style={{ color: "var(--color-heading)" }}
            >
              Recent Work
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-8">
            {recentProjects.map((project, index) => (
              <ProjectCard key={index} project={project} side="right" />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section for More Projects */}
      <div className="relative z-10 bg-gradient-to-t from-black/80 to-transparent py-10 sm:py-20">
        <div className="max-w-6xl mx-auto px-3 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2
              className="text-2xl sm:text-4xl font-bold mb-4"
              style={{ color: "var(--color-heading)" }}
            >
              All Projects
            </h2>
            <p className="text-lg sm:text-xl opacity-80">
              Explore my complete portfolio
            </p>
          </div>

          <PortfolioAllProjects />
        </div>
      </div>
    </div>
  );
}
