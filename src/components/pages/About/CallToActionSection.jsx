import { motion } from "framer-motion";
import { Link } from "react-router";

const CallToActionSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="text-center py-20"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h3
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-6"
          style={{ color: "var(--color-heading)" }}
        >
          Ready to Build the Future?
        </motion.h3>

        <motion.p variants={itemVariants} className="text-xl mb-8 opacity-90">
          Let's collaborate and create something extraordinary together. With
          robotic precision and human creativity, we'll bring your vision to
          life.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
       <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:opacity-90 cursor-pointer"
              style={{
                backgroundColor: "var(--color-accent)",
                color: "var(--color-background)",
              }}
            >
              Start a Project
            </motion.button>
       </Link>

        <Link to="/portfolio">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-lg font-semibold text-lg border transition-all duration-300 hover:bg-white hover:bg-opacity-5 cursor-pointer"
              style={{
                borderColor: "var(--color-accent)",
                color: "var(--color-accent)",
                backgroundColor: "transparent",
              }}
            >
              View Portfolio
            </motion.button>
        </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CallToActionSection;
