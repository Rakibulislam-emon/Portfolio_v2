import { motion } from "framer-motion";
import { skills } from "../../Data/data";
import * as ReactIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as DiIcons from "react-icons/di";

const SkillsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // Icon mapping with custom colors for different technologies
  const getIcon = (skillName) => {
    const iconMap = {
      'React': { icon: SiIcons.SiReact, color: '#61DAFB' },
      'JavaScript': { icon: SiIcons.SiJavascript, color: '#F7DF1E' },
      'TypeScript': { icon: SiIcons.SiTypescript, color: '#3178C6' },
      'Node.js': { icon: ReactIcons.FaNodeJs, color: '#339933' },
      'Python': { icon: ReactIcons.FaPython, color: '#3776AB' },
      'Java': { icon: ReactIcons.FaJava, color: '#ED8B00' },
      'HTML': { icon: ReactIcons.FaHtml5, color: '#E34F26' },
      'CSS': { icon: ReactIcons.FaCss3Alt, color: '#1572B6' },
      'MongoDB': { icon: SiIcons.SiMongodb, color: '#47A248' },
      'PostgreSQL': { icon: SiIcons.SiPostgresql, color: '#336791' },
      'MySQL': { icon: SiIcons.SiMysql, color: '#4479A1' },
      'Git': { icon: ReactIcons.FaGitAlt, color: '#F05032' },
      'Docker': { icon: ReactIcons.FaDocker, color: '#2496ED' },
      'AWS': { icon: ReactIcons.FaAws, color: '#FF9900' },
      'Vue.js': { icon: SiIcons.SiVuedotjs, color: '#4FC08D' },
      'Angular': { icon: SiIcons.SiAngular, color: '#DD0031' },
      'Express': { icon: SiIcons.SiExpress, color: '#000000' },
      'Next.js': { icon: SiIcons.SiNextdotjs, color: '#000000' },
      'Tailwind': { icon: SiIcons.SiTailwindcss, color: '#06B6D4' },
      'Bootstrap': { icon: ReactIcons.FaBootstrap, color: '#7952B3' },
      'Sass': { icon: ReactIcons.FaSass, color: '#CC6699' },
      'GraphQL': { icon: SiIcons.SiGraphql, color: '#E10098' },
      'Redis': { icon: SiIcons.SiRedis, color: '#DC382D' },
      'Firebase': { icon: SiIcons.SiFirebase, color: '#FFCA28' },
      'Figma': { icon: SiIcons.SiFigma, color: '#F24E1E' },
      'Photoshop': { icon: SiIcons.SiAdobephotoshop, color: '#31A8FF' },
      'Linux': { icon: ReactIcons.FaLinux, color: '#FCC624' },
      'Ubuntu': { icon: SiIcons.SiUbuntu, color: '#E95420' },
      'VS Code': { icon: SiIcons.SiVisualstudiocode, color: '#007ACC' },
      'Webpack': { icon: SiIcons.SiWebpack, color: '#8DD6F9' },
      'Vite': { icon: SiIcons.SiVite, color: '#646CFF' },
      'Jest': { icon: SiIcons.SiJest, color: '#C21325' },
      'Cypress': { icon: SiIcons.SiCypress, color: '#17202C' },
      'Kubernetes': { icon: SiIcons.SiKubernetes, color: '#326CE5' },
      'Jenkins': { icon: SiIcons.SiJenkins, color: '#D24939' },
      'Nginx': { icon: SiIcons.SiNginx, color: '#009639' },
      'Apache': { icon: SiIcons.SiApache, color: '#D22128' },
      'Postman': { icon: SiIcons.SiPostman, color: '#FF6C37' },
      'Slack': { icon: SiIcons.SiSlack, color: '#4A154B' },
      'Jira': { icon: SiIcons.SiJira, color: '#0052CC' },
      'Notion': { icon: SiIcons.SiNotion, color: '#000000' },
      'Vercel': { icon: SiIcons.SiVercel, color: '#000000' },
      'Netlify': { icon: SiIcons.SiNetlify, color: '#00C7B7' },
      'Heroku': { icon: SiIcons.SiHeroku, color: '#430098' },
      'DigitalOcean': { icon: SiIcons.SiDigitalocean, color: '#0080FF' }
    };
    
    return iconMap[skillName] || { icon: ReactIcons.FaCode, color: 'var(--color-accent)' };
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
        <h2 className="text-4xl md:text-5xl font-bold mb-4 "
        style={{ color: "var(--color-heading)" }}
        >
          Technical Arsenal
        </h2>
        <p className="text-xl  opacity-80">
          Technologies I work with
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {skills.map((skill, index) => {
          const { icon: Icon, color } = getIcon(skill.name);
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              className="group p-6 rounded-lg border transition-all duration-300"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.02)",
                borderColor: "rgba(255, 255, 255, 0.1)"
              }}
            >
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className="mb-4 flex justify-center"
                >
                  <Icon 
                    size={40} 
                    style={{ color: color }}
                  />
                </motion.div>
                
                <h3 className="font-semibold text-lg mb-2 text-white" >
                  {skill.name}
                </h3>
                <p className="text-sm opacity-70">{skill.level}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      <div>
        
      </div>
    </motion.section>
  );
};

export default SkillsSection;



