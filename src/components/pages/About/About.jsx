import CallToActionSection from "./CallToActionSection";
import EducationSection from "./EducationSection";
import Experience from "./Experience";
import Introduction from "./Introduction";
import SkillsSection from "./SkillsSection";

const AboutMe = () => {
  return (
    <div className="min-h-screen py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}

        <Introduction />

        {/* Skills Section */}

        <SkillsSection />

        {/* Experience Section */}
        <Experience />

        {/* Education Section */}

        <EducationSection />
        <CallToActionSection />
      </div>
    </div>
  );
};

export default AboutMe;
