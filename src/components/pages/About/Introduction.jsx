import React from 'react'
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { personalInfo } from '../../Data/data'

export default function Introduction() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mb-32"
    >
      <motion.div variants={itemVariants} className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: "var(--color-heading)" }}>
          About Me
        </h1>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Profile Image */}
        <motion.div variants={imageVariants} className="lg:w-1/3 flex justify-center">
          <div className="relative">
            <div
              className="w-80 h-80 rounded-full overflow-hidden border-2"
              style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
            >
              <img
                src="https://i.ibb.co/Pz5k4Szp/picture-3723757-1657953622.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Details */}
        <motion.div variants={itemVariants} className="lg:w-2/3">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ color: "var(--color-heading)" }}
          >
            <Typewriter
              words={['Frontend MERN Stack Developer', 'Passionate Frontend Developer', 'React Specialist']}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl leading-relaxed mb-6 opacity-90"
          >
            {personalInfo.description}
          </motion.p>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg leading-relaxed mb-8 opacity-80"
          >
            {personalInfo.additionalInfo}
          </motion.p>

          {/* Key Highlights */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 gap-4"
          >
            {personalInfo.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="p-4 rounded-lg border"
                style={{ 
                  backgroundColor: "rgba(255, 255, 255, 0.02)",
                  borderColor: "rgba(255, 255, 255, 0.1)"
                }}
              >
                <h4
                  className="font-semibold mb-2"
                  style={{ color: "var(--color-accent)" }}
                >
                  {highlight.label}
                </h4>
                <p className="text-sm opacity-80">{highlight.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
