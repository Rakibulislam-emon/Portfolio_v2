import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { education } from "../../Data/data";

const EducationSection = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="mb-32"
    >
      <motion.div variants={itemVariants} className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4" 
        style={{ color: "var(--color-heading)" }}>
          Academic Excellence
        </h2>
        <p className="text-xl text-gray-400">
          Foundation of knowledge and continuous learning
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        className="grid lg:grid-cols-3 gap-8"
      >
        {education.map((edu, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.03,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
            className="group p-8 rounded-xl border transition-all duration-300 hover:border-gray-600"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.03)",
              borderColor: "rgba(255, 255, 255, 0.15)"
            }}
          >
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-start justify-between mb-6"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {edu.degree}
                  </h3>
                  <h4 className="text-lg font-medium mb-2 text-gray-300">
                    {edu.institution}
                  </h4>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
                className="flex items-center gap-3 mb-6"
              >
                <span
                  className="text-sm font-semibold px-4 py-2 rounded-lg"
                  style={{ 
                    backgroundColor: "var(--color-accent)", 
                    color: "var(--color-background)"
                  }}
                >
                  {edu.year}
                </span>
                <span
                  className="text-sm font-medium px-4 py-2 rounded-lg border"
                  style={{ 
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    color: "var(--color-text)",
                    backgroundColor: "rgba(255, 255, 255, 0.05)"
                  }}
                >
                  {edu.status}
                </span>
              </motion.div>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                className="leading-relaxed mb-6 text-gray-300"
              >
                {edu.description}
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.6, duration: 0.4 }}
                className="flex items-center gap-3 pt-4 border-t border-gray-700"
              >
                <Award size={18} style={{ color: "var(--color-accent)" }} />
                <span className="text-sm font-medium" style={{ color: "var(--color-accent)" }}>
                  GPA: {edu.gpa}
                </span>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default EducationSection;

