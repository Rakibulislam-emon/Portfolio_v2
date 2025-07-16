import { projects } from "../../Data/data.js";
import SplineScene from "../../SplineScene";
import ProjectCard from "./ProjectCard";

export default function Portfolio() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Spline Scene */}
      <div className="absolute inset-0 z-0">
        <SplineScene />
      </div>

      {/* Portfolio Content Overlay */}
      <div className="relative z-10 min-h-screen flex pointer-events-none">
        {/* Left Side Projects */}
        <div className="w-2/6 p-2 flex flex-col justify-center space-y-4 pointer-events-auto ml-8">
          <div className="text-center mb-4">
            <h2 className="text-lg font-bold mb-2" style={{ color: "var(--color-heading)" }}>
              Featured
            </h2>
            <div className="w-10 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
          </div>
          
          {projects.slice(0, 2).map((project, index) => (
            <div key={index} className="transform hover:scale-105 transition-all duration-300">
              <ProjectCard project={project} side="left" />
            </div>
          ))}
        </div>

        {/* Center - Robot Space with Floating Title */}
        <div className="w-2/3 relative flex items-center justify-center pointer-events-none">
         

          {/* Robot interaction area indicator */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 pointer-events-auto">
            <div className="flex items-center gap-2 text-sm opacity-60 animate-pulse">
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <span>Move mouse to interact with robot</span>
            </div>
          </div>
        </div>

        {/* Right Side Projects */}
        <div className="w-2/6 border  p-2 flex flex-col justify-center space-y-4 pointer-events-auto mr-8">
          <div className="text-center mb-4">
            <h2 className="text-lg font-bold mb-2" style={{ color: "var(--color-heading)" }}>
              Recent Work
            </h2>
            <div className="w-10 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          </div>
          
          {projects.slice(2, 4).map((project, index) => (
            <div key={index} className="transform hover:scale-105 transition-all duration-300">
              <ProjectCard project={project} side="right" />
            </div>
          ))}
        </div>
      </div>

      {/* Floating Navigation Dots */}
      {/* <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 pointer-events-auto">
        <div className="flex flex-col gap-3">
          {[0, 1, 2, 3].map((dot, index) => (
            <div
              key={index}
              className="w-3 h-3 rounded-full border-2 border-white/30 hover:border-accent hover:bg-accent/20 transition-all duration-300 cursor-pointer"
              style={{ backgroundColor: index === 0 ? "var(--color-accent)" : "transparent" }}
            />
          ))}
        </div>
      </div> */}

      {/* Bottom Section for More Projects */}
      <div className="relative z-10 bg-gradient-to-t from-black/90 via-black/50 to-transparent py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Complete Portfolio
            </h2>
            <p className="text-xl opacity-80 max-w-2xl mx-auto">
              Explore my journey through innovative projects and cutting-edge technologies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="transform hover:scale-105 transition-all duration-500">
                <ProjectCard project={project} variant="grid" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-5 ">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-20 w-24 h-24 bg-pink-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>
    </div>
  );
}
