import React, { useState } from 'react'
import { experiences } from '../../Data/data';

export default function Experience() {
  const [hoveredExperience, setHoveredExperience] = useState(null);

  return (
    <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Professional Journey
            </h2>
            <p className="text-xl opacity-80">
              Building the future, one project at a time
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-10 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 opacity-30"></div>

            <div className="space-y-12 ml-20">
              {experiences.map((exp, index) => {
                const Icon = exp.icon;
                return (
                  <div
                    key={index}
                    className="group relative p-8 rounded-2xl transition-all duration-500 hover:scale-[1.02] hover:rotate-1 cursor-pointer"
                    style={{
                      backgroundColor: hoveredExperience === index 
                        ? "rgba(242, 92, 117, 0.15)" 
                        : "rgba(255, 255, 255, 0.05)",
                      border: hoveredExperience === index 
                        ? "2px solid var(--color-accent)" 
                        : "1px solid rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(10px)",
                      boxShadow: hoveredExperience === index 
                        ? "0 20px 40px rgba(242, 92, 117, 0.3)" 
                        : "none"
                    }}
                    onMouseEnter={() => setHoveredExperience(index)}
                    onMouseLeave={() => setHoveredExperience(null)}
                  >
                    <div
                      className="absolute -left-28 top-8 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
                      style={{
                        backgroundColor: "var(--color-accent)",
                        boxShadow: hoveredExperience === index 
                          ? "0 0 30px var(--color-accent)" 
                          : "0 0 20px var(--color-accent)",
                        transform: hoveredExperience === index ? "scale(1.1)" : "scale(1)"
                      }}
                    >
                      <Icon size={24} color="white" />
                    </div>

                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <h3
                          className="text-2xl font-bold mb-2 transition-all duration-300"
                          style={{ 
                            color: "var(--color-heading)",
                            transform: hoveredExperience === index ? "scale(1.05)" : "scale(1)"
                          }}
                        >
                          {exp.title}
                        </h3>
                        <h4
                          className="text-xl font-semibold mb-4"
                          style={{ color: "var(--color-accent)" }}
                        >
                          {exp.company}
                        </h4>
                      </div>
                      <div
                        className="text-sm font-bold px-4 py-2 rounded-full transition-all duration-300"
                        style={{
                          backgroundColor: "var(--color-accent)",
                          color: "white",
                          transform: hoveredExperience === index ? "scale(1.1)" : "scale(1)",
                          boxShadow: hoveredExperience === index 
                            ? "0 5px 15px rgba(242, 92, 117, 0.4)" 
                            : "none"
                        }}
                      >
                        {exp.period}
                      </div>
                    </div>

                    <p className="text-lg leading-relaxed mb-6 opacity-90">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      <h5
                        className="font-semibold mb-3"
                        style={{ color: "var(--color-heading)" }}
                      >
                        Key Achievements:
                      </h5>
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div
                            className="w-2 h-2 rounded-full transition-all duration-300"
                            style={{ 
                              backgroundColor: "var(--color-accent)",
                              boxShadow: hoveredExperience === index 
                                ? "0 0 10px var(--color-accent)" 
                                : "none",
                              transform: hoveredExperience === index ? "scale(1.5)" : "scale(1)"
                            }}
                          />
                          <span className="opacity-80">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
  )
}