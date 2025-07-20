import { motion } from "framer-motion";
import { Code } from "lucide-react";

export default function HeroSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative pt-20 pb-16 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-8"
        >
          <Code size={16} className="text-blue-400" />
          <span className="text-sm text-blue-300">Portfolio</span>
        </motion.div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
          My Work
        </h1>
        
        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          A collection of projects that showcase my passion for creating 
          <span className="text-blue-400"> innovative</span> and 
          <span className="text-purple-400"> user-friendly</span> solutions
        </p>
      </div>
    </motion.section>
  );
}