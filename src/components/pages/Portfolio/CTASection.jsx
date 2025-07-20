import { motion } from "framer-motion";
import { Palette, Zap, Code } from "lucide-react";

export default function CTASection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="px-6 pb-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-white/10 backdrop-blur-sm">
          <div className="flex justify-center gap-4 mb-6">
            <Palette style={{ color: 'var(--color-accent)' }} size={24} />
            <Zap style={{ color: 'var(--color-heading)' }} size={24} />
            <Code style={{ color: 'var(--color-accent)' }} size={24} />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-heading)' }}>
            Let's Build Something Amazing
          </h2>
          
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'var(--color-text)' }}>
            Have a project in mind? I'd love to help bring your ideas to life with clean code and beautiful design.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-xl font-semibold transition-all duration-300"
            style={{ 
              backgroundColor: 'var(--color-button)',
              color: 'white'
            }}
          >
            Get In Touch
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}
