import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ project, side, variant = "sidebar" }) {
  const [isHovered, setIsHovered] = useState(false);

  if (variant === "mobile-featured") {
    return (
      <div
        className="group relative p-6 rounded-2xl transition-all duration-500 cursor-pointer overflow-hidden"
        style={{
          backgroundColor: isHovered 
            ? "rgba(242, 92, 117, 0.2)" 
            : "rgba(255, 255, 255, 0.1)",
          border: isHovered 
            ? "2px solid var(--color-accent)" 
            : "1px solid rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(20px)",
          boxShadow: isHovered 
            ? "0 20px 40px rgba(242, 92, 117, 0.3)" 
            : "0 8px 32px rgba(0, 0, 0, 0.2)"
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl mb-4 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        
        <h3 className="text-xl font-bold mb-3" style={{ color: "var(--color-heading)" }}>
          {project.title}
        </h3>
        
        <p className="text-sm opacity-80 mb-4 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span 
              key={index}
              className="text-xs px-3 py-1 rounded-full"
              style={{ 
                backgroundColor: "var(--color-accent)", 
                color: "white" 
              }}
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <button className="flex items-center gap-2 text-sm hover:scale-110 transition-transform">
            <ExternalLink size={16} style={{ color: "var(--color-accent)" }} />
            <span style={{ color: "var(--color-accent)" }}>Live Demo</span>
          </button>
          <button className="flex items-center gap-2 text-sm hover:scale-110 transition-transform">
            <Github size={16} style={{ color: "var(--color-accent)" }} />
            <span style={{ color: "var(--color-accent)" }}>Source Code</span>
          </button>
        </div>
      </div>
    );
  }

  if (variant === "list") {
    return (
      <div
        className="group relative p-6 rounded-2xl transition-all duration-500 cursor-pointer overflow-hidden flex gap-6"
        style={{
          backgroundColor: isHovered 
            ? "rgba(242, 92, 117, 0.15)" 
            : "rgba(255, 255, 255, 0.08)",
          border: isHovered 
            ? "2px solid var(--color-accent)" 
            : "1px solid rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(20px)",
          boxShadow: isHovered 
            ? "0 20px 40px rgba(242, 92, 117, 0.3)" 
            : "0 8px 32px rgba(0, 0, 0, 0.2)"
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="w-48 aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl overflow-hidden flex-shrink-0">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-3" style={{ color: "var(--color-heading)" }}>
            {project.title}
          </h3>
          
          <p className="text-base opacity-80 mb-4">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className="text-sm px-3 py-1 rounded-full"
                style={{ 
                  backgroundColor: "var(--color-accent)", 
                  color: "white" 
                }}
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex gap-4">
            <button className="flex items-center gap-2 text-base hover:scale-110 transition-transform">
              <ExternalLink size={18} style={{ color: "var(--color-accent)" }} />
              <span style={{ color: "var(--color-accent)" }}>Live Demo</span>
            </button>
            <button className="flex items-center gap-2 text-base hover:scale-110 transition-transform">
              <Github size={18} style={{ color: "var(--color-accent)" }} />
              <span style={{ color: "var(--color-accent)" }}>Source Code</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "grid") {
    return (
      <div
        className="group relative p-4 md:p-6 rounded-2xl transition-all duration-500 hover:scale-105 cursor-pointer"
        style={{
          backgroundColor: isHovered 
            ? "rgba(242, 92, 117, 0.15)" 
            : "rgba(255, 255, 255, 0.1)",
          border: isHovered 
            ? "2px solid var(--color-accent)" 
            : "1px solid rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
          boxShadow: isHovered 
            ? "0 20px 40px rgba(242, 92, 117, 0.3)" 
            : "none"
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg mb-4 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        
        <h3 className="text-lg md:text-xl font-bold mb-2" style={{ color: "var(--color-heading)" }}>
          {project.title}
        </h3>
        
        <p className="text-sm opacity-80 mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span 
              key={index}
              className="text-xs px-2 py-1 rounded-full"
              style={{ 
                backgroundColor: "var(--color-accent)", 
                color: "white" 
              }}
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          <button className="flex items-center gap-2 text-sm hover:scale-110 transition-transform">
            <ExternalLink size={16} style={{ color: "var(--color-accent)" }} />
            <span style={{ color: "var(--color-accent)" }}>Live</span>
          </button>
          <button className="flex items-center gap-2 text-sm hover:scale-110 transition-transform">
            <Github size={16} style={{ color: "var(--color-accent)" }} />
            <span style={{ color: "var(--color-accent)" }}>Code</span>
          </button>
        </div>
      </div>
    );
  }

  // Sidebar variant (default)
  return (
    <div
      className={`group relative p-3 md:p-4 rounded-xl transition-all duration-500 hover:scale-105 cursor-pointer ${
        side === "left" ? "hover:rotate-2" : "hover:-rotate-2"
      }`}
      style={{
        backgroundColor: isHovered 
          ? "rgba(242, 92, 117, 0.15)" 
          : "rgba(255, 255, 255, 0.1)",
        border: isHovered 
          ? "2px solid var(--color-accent)" 
          : "1px solid rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(15px)",
        boxShadow: isHovered 
          ? "0 15px 30px rgba(242, 92, 117, 0.3)" 
          : "none"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg mb-3 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      
      <h3 className="text-base md:text-lg font-bold mb-2" style={{ color: "var(--color-heading)" }}>
        {project.title}
      </h3>
      
      <p className="text-xs opacity-80 mb-3 line-clamp-2">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-1 mb-3">
        {project.technologies.slice(0, 2).map((tech, index) => (
          <span 
            key={index}
            className="text-xs px-2 py-1 rounded-full"
            style={{ 
              backgroundColor: "var(--color-accent)", 
              color: "white" 
            }}
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex gap-2">
        <button className="flex items-center gap-1 text-xs hover:scale-110 transition-transform">
          <ExternalLink size={12} style={{ color: "var(--color-accent)" }} />
        </button>
        <button className="flex items-center gap-1 text-xs hover:scale-110 transition-transform">
          <Github size={12} style={{ color: "var(--color-accent)" }} />
        </button>
      </div>
    </div>
  );
}
