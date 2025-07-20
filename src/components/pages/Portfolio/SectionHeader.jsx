import { motion } from "framer-motion";

export default function SectionHeader({ title, subtitle, icon: Icon, iconColor }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-8"
      >
        <Icon size={16} style={{ color: 'var(--color-accent)' }} />
        <span className="text-sm" style={{ color: 'var(--color-accent)' }}>{title}</span>
      </motion.div>
      
      <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--color-heading)' }}>
        {title}
      </h2>
      
      <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--color-text)' }}>
        {subtitle}
      </p>
    </motion.div>
  );
}
