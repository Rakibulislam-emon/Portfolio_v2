import { useState } from "react";
import { skills } from "../../Data/data";

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section className="mb-32">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Technical Arsenal
        </h2>
        <p className="text-xl opacity-80">
          Technologies I work with
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div
              key={index}
              className="group relative p-6 rounded-2xl transition-all duration-500 cursor-pointer hover:scale-110 hover:rotate-3"
              style={{
                backgroundColor: hoveredSkill === index 
                  ? "rgba(242, 92, 117, 0.15)" 
                  : "rgba(255, 255, 255, 0.05)",
                border: hoveredSkill === index 
                  ? "2px solid var(--color-accent)" 
                  : "2px solid transparent",
                boxShadow: hoveredSkill === index 
                  ? "0 20px 40px rgba(242, 92, 117, 0.3)" 
                  : "none"
              }}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="text-center">
                <Icon
                  size={40}
                  className="mx-auto mb-4 transition-all duration-300 group-hover:scale-125"
                  style={{ color: "var(--color-heading)" }}
                />
                <span className="text-sm font-bold block mb-2">
                  {skill.name}
                </span>
                <span className="text-xs opacity-60 block">
                  {skill.category}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsSection;