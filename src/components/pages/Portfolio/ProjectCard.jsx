import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ project, side, variant = "sidebar" }) {
  const [isHovered, setIsHovered] = useState(false);

  if (variant === "grid") {
    return (
      <div
        className="group relative p-4 md:p-6 rounded-2xl transition-all duration-300 cursor-pointer"
        style={{
          backgroundColor: isHovered 
            ? "rgba(242, 92, 117, 0.15)" 
            : "rgba(255, 255, 255, 0.05)",
          border: isHovered 
            ? "2px solid var(--color-accent)" 
            : "1px solid rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)"
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="aspect-video bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg mb-4 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            loading="lazy"
            decoding="async"
            width="400"
            height="225"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            onError={(e) => {
              e.target.src = '/images/placeholder.jpg'; // Add fallback
            }}
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
              className="text-xs px-2 py-1 rounded-full text-gray-900"
              style={{ 
                backgroundColor: "var(--color-accent)", 
                // color: "white" 
              }}
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          <button className="flex items-center gap-2 text-sm transition-transform">
            <ExternalLink size={20} style={{ color: "var(--color-accent)" }} />
            <span style={{ color: "var(--color-accent)" }}>Live</span>
          </button>
          <button className="flex items-center gap-2 text-sm transition-transform">
            <Github size={20} style={{ color: "var(--color-accent)" }} />
            <span style={{ color: "var(--color-accent)" }}>Code</span>
          </button>
        </div>
      </div>
    );
  }

  // Sidebar variant (default)
  return (
  <div
  className="group relative p-3 md:p-4 rounded-xl transition-all duration-300 cursor-pointer"
  style={{
    backgroundColor: isHovered
      ? "rgba(242, 92, 117, 0.15)"
      : "rgba(255, 255, 255, 0.05)",
    border: isHovered
      ? "2px solid var(--color-accent)"
      : "1px solid rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)"
  }}
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
>
  <div className="aspect-video bg-gray-200 rounded-lg mb-3 overflow-hidden">
    <img
      src={project.image}
      alt={project.title}
      loading="lazy"
      className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
    />
  </div>

  <h3
    className="text-base md:text-lg font-bold mb-2"
    style={{ color: "var(--color-heading)" }}
  >
    {project.title}
  </h3>

  <p className="text-xs opacity-80 mb-3 line-clamp-2">
    {project.description}
  </p>

  <div className="flex flex-wrap gap-1 mb-3">
    {project.technologies.slice(0, 2).map((tech, index) => (
      <span
        key={index}
        className="text-xs px-2 py-1 rounded-full text-gray-900"
        style={{
          backgroundColor: "var(--color-accent)"
        }}
      >
        {tech}
      </span>
    ))}
  </div>

  <div className="flex gap-3">
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-sm transition-transform"
    >
      <ExternalLink size={20} style={{ color: "var(--color-accent)" }} />
      <span style={{ color: "var(--color-accent)" }}>Live</span>
    </a>
    <a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-sm transition-transform"
    >
      <Github size={20} style={{ color: "var(--color-accent)" }} />
      <span style={{ color: "var(--color-accent)" }}>Code</span>
    </a>
  </div>
</div>

  );
}





