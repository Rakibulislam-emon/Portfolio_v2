import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";

export default function ProjectSection({ title, subtitle, projects, icon, iconColor }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      },
    },
  };

  return (
    <motion.section 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="px-6 pb-20"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title={title}
          subtitle={subtitle}
          icon={icon}
          iconColor={iconColor}
        />

        <div className="grid gap-8 md:gap-12">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}