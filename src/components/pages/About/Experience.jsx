import { motion } from "framer-motion";
import { experiences } from "../../Data/data";

export default function Experience() {
  // Parent container for staggered reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // delay between each card
      },
    },
  };

  // Each card — slides from left OR right based on index
  const cardVariants = {
    hidden: (slideFromLeft) => ({
      opacity: 0,
      x: slideFromLeft ? -100 : 100,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0 }}
      variants={containerVariants}
      className="mb-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 "
        style={{ color: "var(--color-heading)" }}>
          Professional Journey
        </h2>
        <p className="text-xl text-gray-400">
          Building the future, one project at a time
        </p>
      </motion.div>

      <div className="space-y-8">
        {experiences.map((exp, index) => {
          const Icon = exp.icon;
          const slideFromLeft = index % 2 === 0; // one left, one right

          return (
            <motion.div
              key={index}
              custom={slideFromLeft}
              variants={cardVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className="p-8 rounded-xl border "
              style={{
              backgroundColor: "rgba(255, 255, 255, 0.03)",
              borderColor: "rgba(255, 255, 255, 0.15)"
            }}
            >
              <div className="flex items-start gap-6">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="flex-shrink-0"
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gray-800">
                    <Icon size={24} style={{ color: "var(--color-accent)" }} />
                  </div>
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {exp.title}
                  </h3>
                  <h4 className="text-xl font-semibold mb-4 text-[var(--color-accent)]">
                    {exp.company}
                  </h4>
                  <div className="text-sm font-medium px-3 py-1 rounded-full bg-gray-800 text-gray-300 inline-block mb-4">
                    {exp.period}
                  </div>

                  <p className="text-lg leading-relaxed mb-6 text-gray-400">
                    {exp.description}
                  </p>

                  <div className="space-y-2">
                    <h5 className="font-semibold text-white mb-2">
                      Key Achievements:
                    </h5>
                    {exp.achievements.map((achievement, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: slideFromLeft ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: i * 0.1,
                          duration: 0.4,
                        }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                        <span className="text-gray-400">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
