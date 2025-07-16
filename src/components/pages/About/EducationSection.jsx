import { Award } from "lucide-react";
import { education } from "../../Data/data";

const EducationSection = () => {
  return (
    <section className="mb-32">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Academic Excellence
        </h2>
        <p className="text-xl opacity-80">
          Foundation of knowledge and continuous learning
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {education.map((edu, index) => (
          <div
            key={index}
            className="group p-8 rounded-2xl transition-all duration-500 hover:scale-105 hover:-rotate-1 relative overflow-hidden"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-bl-full"></div>
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3" style={{ color: "var(--color-heading)" }}>
                    {edu.degree}
                  </h3>
                  <h4 className="text-lg font-semibold mb-2" style={{ color: "var(--color-accent)" }}>
                    {edu.institution}
                  </h4>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div
                  className="text-sm font-bold px-3 py-1 rounded-full"
                  style={{ 
                    backgroundColor: "var(--color-accent)", 
                    color: "white"
                  }}
                >
                  {edu.year}
                </div>
                <div
                  className="text-sm font-medium px-3 py-1 rounded-full border"
                  style={{ 
                    borderColor: "var(--color-heading)",
                    color: "var(--color-heading)"
                  }}
                >
                  {edu.status}
                </div>
              </div>

              <p className="leading-relaxed mb-4 opacity-90">
                {edu.description}
              </p>

              <div className="flex items-center gap-2">
                <Award size={16} style={{ color: "var(--color-accent)" }} />
                <span className="text-sm font-semibold" style={{ color: "var(--color-accent)" }}>
                  GPA: {edu.gpa}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;