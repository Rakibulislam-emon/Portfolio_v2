import { motion } from "framer-motion";
import { featuredProjects, recentProjects } from "../../Data/data.js";
import PortfolioAllProjects from "./PortfolioAllProjects.jsx";
import ProjectCard from "./ProjectCard";

export default function Portfolio() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const heroVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen relative"
    >
      {/* Portfolio Content */}
      <div className="relative max-w-7xl mx-auto min-h-screen flex flex-col lg:flex-row">
        {/* Left Side Projects */}
        <motion.div 
          variants={sectionVariants}
          className="w-full lg:w-1/4 p-3 sm:p-6 flex flex-col justify-center space-y-4 sm:space-y-8"
        >
          <div className="text-center mb-4 sm:mb-8">
            <h2
              className="text-xl sm:text-2xl font-bold mb-2"
              style={{ color: "var(--color-heading)" }}
            >
              Featured
            </h2>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"
            />
          </div>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-8"
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={sectionVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ProjectCard project={project} side="left" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Center - Hero Section */}
        <motion.div 
          variants={heroVariants}
          className="w-full lg:w-1/2 flex flex-col items-center justify-center pt-8 sm:pt-20 px-6 text-center min-h-[400px] lg:min-h-0"
        >
          <div className="mb-8">
            <motion.h1 
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            >
              Portfolio
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl max-w-md"
            >
              Showcasing my journey through code, creativity, and innovation
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 10 }}
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center backdrop-blur-sm border border-white/10"
            >
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="text-4xl sm:text-5xl"
              >
                🚀
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Side Projects */}
        <motion.div 
          variants={sectionVariants}
          className="w-full lg:w-1/4 p-3 sm:p-6 flex flex-col justify-center space-y-4 sm:space-y-8"
        >
          <div className="text-center mb-4 sm:mb-8">
            <h2
              className="text-xl sm:text-2xl font-bold mb-2"
              style={{ color: "var(--color-heading)" }}
            >
              Recent Work
            </h2>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"
            />
          </div>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-8"
          >
            {recentProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={sectionVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ProjectCard project={project} side="right" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Section for More Projects */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative py-10 sm:py-20"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)"
        }}
      >
        <div className="max-w-6xl mx-auto px-3 sm:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2
              className="text-2xl sm:text-4xl font-bold mb-4"
              style={{ color: "var(--color-heading)" }}
            >
              All Projects
            </h2>
            <p className="text-lg sm:text-xl opacity-80">
              Explore my complete portfolio
            </p>
          </motion.div>

          <PortfolioAllProjects />
        </div>
      </motion.div>
    </motion.div>
  );
}
