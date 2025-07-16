import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ project, side, variant = "sidebar" }) {
  const [isHovered, setIsHovered] = useState(false);

  if (variant === "grid") {
    return (
      <div
        className="group relative p-6 rounded-2xl transition-all duration-700 hover:scale-110 cursor-pointer overflow-hidden"
        style={{
          backgroundColor: isHovered 
            ? "rgba(242, 92, 117, 0.2)" 
            : "rgba(255, 255, 255, 0.08)",
          border: isHovered 
            ? "2px solid var(--color-accent)" 
            : "1px solid rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(20px)",
          boxShadow: isHovered 
            ? "0 25px 50px rgba(242, 92, 117, 0.4), 0 0 30px rgba(242, 92, 117, 0.2)" 
            : "0 8px 32px rgba(0, 0, 0, 0.3)"
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        <div className="relative z-10">
          <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl mb-4 overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
            />
          </div>
          
          <h3 className="text-xl font-bold mb-3 transition-all duration-300" style={{ 
            color: "var(--color-heading)",
            transform: isHovered ? "translateY(-2px)" : "translateY(0)"
          }}>
            {project.title}
          </h3>
          
          <p className="text-sm opacity-80 mb-4 line-clamp-2 transition-opacity duration-300">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span 
                key={index}
                className="text-xs px-3 py-1 rounded-full transition-all duration-300 hover:scale-110"
                style={{ 
                  backgroundColor: "var(--color-accent)", 
                  color: "white",
                  boxShadow: isHovered ? "0 4px 12px rgba(242, 92, 117, 0.3)" : "none"
                }}
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex gap-4">
            <button className="flex items-center gap-2 text-sm hover:scale-110 transition-all duration-300 group/btn">
              <ExternalLink size={16} style={{ color: "var(--color-accent)" }} />
              <span style={{ color: "var(--color-accent)" }} className="group-hover/btn:underline">Live</span>
            </button>
            <button className="flex items-center gap-2 text-sm hover:scale-110 transition-all duration-300 group/btn">
              <Github size={16} style={{ color: "var(--color-accent)" }} />
              <span style={{ color: "var(--color-accent)" }} className="group-hover/btn:underline">Code</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`group relative p-3 rounded-xl transition-all duration-500 hover:scale-110 cursor-pointer overflow-hidden ${
        side === "left" ? "hover:rotate-3" : "hover:-rotate-3"
      }`}
      style={{
        backgroundColor: isHovered 
          ? "rgba(242, 92, 117, 0.2)" 
          : "rgba(255, 255, 255, 0.08)",
        border: isHovered 
          ? "2px solid var(--color-accent)" 
          : "1px solid rgba(255, 255, 255, 0.15)",
        backdropFilter: "blur(20px)",
        boxShadow: isHovered 
          ? "0 20px 40px rgba(242, 92, 117, 0.4)" 
          : "0 8px 25px rgba(0, 0, 0, 0.2)"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg mb-3 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-120"
        />
      </div>
      
      <h3 className="text-base font-bold mb-2 transition-colors duration-300" style={{ 
        color: isHovered ? "var(--color-accent)" : "var(--color-heading)" 
      }}>
        {project.title}
      </h3>
      
      <p className="text-xs opacity-80 mb-3 line-clamp-2">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-1 mb-3">
        {project.technologies.slice(0, 2).map((tech, index) => (
          <span 
            key={index}
            className="text-xs px-2 py-1 rounded-full transition-all duration-300"
            style={{ 
              backgroundColor: "var(--color-accent)", 
              color: "white",
              transform: isHovered ? "scale(1.05)" : "scale(1)"
            }}
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex gap-3 justify-center">
        <button className="flex items-center gap-1 text-xs hover:scale-125 transition-transform duration-300">
          <ExternalLink size={12} style={{ color: "var(--color-accent)" }} />
        </button>
        <button className="flex items-center gap-1 text-xs hover:scale-125 transition-transform duration-300">
          <Github size={12} style={{ color: "var(--color-accent)" }} />
        </button>
      </div>
    </div>
  );
}
