import { useState, useEffect } from "react";
import { projects } from "../../Data/data.js";
import SplineScene from "../../SplineScene";
import PortfolioAllProjects from "./PortfolioAllProjects.jsx";
import ProjectCard from "./ProjectCard";

// ✅ Custom hook to check if screen is sm or larger
function useIsSmUp() {
  const [isSmUp, setIsSmUp] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsSmUp(window.innerWidth >= 640);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return isSmUp;
}

export default function Portfolio() {
  const isSmUp = useIsSmUp(); // ✅ Check if screen is sm or larger

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* ✅ Only render Spline if screen is sm and up */}
      {isSmUp && (
        <div className="absolute inset-0 z-0">
          <SplineScene />
        </div>
      )}

      {/* Portfolio Content Overlay */}
      <div className="relative max-w-7xl mx-auto z-10 min-h-screen flex flex-col lg:flex-row pointer-events-none">
        {/* Left Side Projects */}
        <div className="w-full lg:w-1/4 p-3 sm:p-6 flex flex-col justify-center space-y-4 sm:space-y-8 pointer-events-auto">
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
            {projects.slice(0, 2).map((project, index) => (
              <ProjectCard key={index} project={project} side="left" />
            ))}
          </div>
        </div>

        {/* Center - Robot Space */}
        <div className="w-full lg:w-1/2 flex items-start justify-center pt-8 sm:pt-20 min-h-[200px] lg:min-h-0"></div>

        {/* Right Side Projects */}
        <div className="w-full lg:w-1/4 p-3 sm:p-6 flex flex-col justify-center space-y-4 sm:space-y-8 pointer-events-auto">
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
            {projects.slice(2, 4).map((project, index) => (
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
