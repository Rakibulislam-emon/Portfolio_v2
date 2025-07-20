import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Button from "../../common/Button";

export default function ProjectCard({ project, index }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      className={`group relative ${
        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
      } flex flex-col md:flex items-center gap-8 md:gap-16`}
    >
      {/* Project Image */}
      <div className="w-full md:w-1/2 relative">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 border border-white/10 backdrop-blur-sm"
        >
          <div className="aspect-video relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          {/* Floating Action Buttons */}
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
            >
              <ExternalLink size={16} className="text-white" />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
            >
              <Github size={16} className="text-white" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Project Content */}
      <div className="w-full md:w-1/2 space-y-6">
        <div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mb-4"
          />
          
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-gray-300 text-lg leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-3">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-300 hover:border-blue-400/40 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 pt-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
          >
            <ExternalLink size={18} />
            <span>Live Demo</span>
            <motion.div
              className="w-0 group-hover/btn:w-2 transition-all duration-300 overflow-hidden"
            >
              →
            </motion.div>
          </a>
          
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white font-medium hover:bg-white/5 hover:border-white/40 transition-all duration-300"
          >
            <Github size={18} />
            <span>Source Code</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}