import {
  Cloud,
  Code,
  Container,
  Cpu,
  Database,
  GitBranch,
  Globe,
  HardDrive,
  Heart,
  Layers,
  Monitor,
  Rocket,
  Server,
  Settings,
  Star,
  Zap,
} from "lucide-react";

export const skills = [
  { icon: Code, name: "React", category: "Frontend" },
  { icon: Layers, name: "TypeScript", category: "Language" },
  { icon: Zap, name: "JavaScript", category: "Language" },
  { icon: Server, name: "Node.js", category: "Backend" },
  { icon: Cpu, name: "Python", category: "Language" },
  { icon: Monitor, name: "Tailwind", category: "Styling" },
  { icon: Globe, name: "HTML5", category: "Frontend" },
  { icon: Settings, name: "CSS3", category: "Styling" },
  { icon: Database, name: "MongoDB", category: "Database" },
  { icon: HardDrive, name: "PostgreSQL", category: "Database" },
  { icon: Layers, name: "GraphQL", category: "API" },
  { icon: GitBranch, name: "Git", category: "Tools" },
  { icon: Container, name: "Docker", category: "DevOps" },
  { icon: Cloud, name: "AWS", category: "Cloud" },
];

export const experiences = [
  {
    title: "Frontend Developer (Personal Projects)",
    company: "Self-Driven",
    period: "Nov 2023 – Present",
    description:
      "Building responsive, user-friendly web applications using React.js, Tailwind CSS, and JavaScript. Focused on clean design, reusable components, and performance best practices.",
    icon: Code,
    achievements: [
      "Developed 10+ responsive web projects",
      "Implemented modern UI/UX design patterns",
      "Improved site performance using optimization techniques",
    ],
  },
  {
    title: "Open Source Contributor",
    company: "GitHub",
    period: "2024 – Present",
    description:
      "Contributing to open-source JavaScript and React projects by fixing bugs, adding small features, and improving documentation.",
    icon: Rocket,
    achievements: [
      "Made 10+ contributions to repositories",
      "Participated in issue discussions and pull requests",
      "Collaborated with developers globally",
    ],
  },
  {
    title: "Freelance Frontend Developer",
    company: "Freelance",
    period: "2024 – Present",
    description:
      "Designed and built modern landing pages and small websites for local clients, ensuring clean, functional, and responsive designs.",
    icon: Star,
    achievements: [
      "Completed 5+ freelance client projects",
      "Maintained high client satisfaction and clear communication",
      "Delivered projects on time and within scope",
    ],
  },
  {
    title: "Web Development Student",
    company: "Self-Learning and online bootcamps",
    period: "2023 – 2024",
    description:
      "Completed a structured web development bootcamp and self-learning journey, building projects with React, JavaScript, and modern frontend tools.",
    icon: Heart,
    achievements: [
      "Finished 10+ focused courses",
      "Built 20+ practice projects and clones",
      "Proficient with the MERN stack basics",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Arts (Honours) in English",
    institution: "New Model Degree College (NMDC)",
    year: "2024 - Present",
    description:
      "Currently pursuing first year Honours in English, focusing on literature, communication, and academic writing.",
    status: "In Progress",
    gpa: "3.8/4.0",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Alhaz Mockbul Hussain College",
    year: "2023",
    description:
      "Completed HSC with a focus on Humanities, including English and Social Studies.",
    status: "Completed",
    gpa: "4.5/5.0",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "New Model Multilateral High School",
    year: "2021",
    description:
      "Completed SSC with a concentration in Humanities and strong results in English and general subjects.",
    status: "Completed",
    gpa: "4.8/5.0",
  },
];

export const personalInfo = {
  title: "Aspiring Frontend Developer",
  description:
    "I'm a dedicated frontend developer focused on building clean, responsive, and user-friendly web applications. With solid skills in modern JavaScript frameworks and an eye for detail, I enjoy turning ideas into engaging digital products.",
  additionalInfo:
    "Currently pursuing my Bachelor's in English while actively developing my skills in web development. I believe in continuous learning and keep up with the latest technologies to deliver quality work.",
  highlights: [
    { label: "Experience", value: "1+ Year of Hands-On Practice" },
    { label: "Focus", value: "Frontend Development & UI Implementation" },
    { label: "Location", value: "Bangladesh" },
    { label: "Availability", value: "Open to Freelance & Collaboration" },
  ],
};

export const featuredProjects = [
  {
    title: "Flex Fitness",
    description:
      "A fitness website for booking gym classes, managing user profiles, and processing secure payments via Stripe.",
    image: "https://i.ibb.co/8LDMJ6XW/fit-gym-7bce5-web-app.png",
    technologies: ["React", "Firebase", "Tailwind CSS", "Stripe API"],
    liveUrl: "https://fit-gym-7bce5.web.app/",
    githubUrl:
      "https://github.com/Rakibulislam-emon/Flex-Fitness?tab=readme-ov-file",
  },
  {
    title: "Nest Grocery Shop",
    description:
      "A full-stack organic grocery e-commerce platform with advanced search, secure payments via Stripe, and user auth with Clerk. Built with React, Express, and MongoDB.",
    image: "https://i.ibb.co/Q7xPHdcg/nest-client-henna-vercel-app-4.png",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Clerk"],
    liveUrl: "https://nest-client-henna.vercel.app/",
    githubUrl: "https://github.com/Rakibulislam-emon/nest_client",
  },
];
export const recentProjects = [
{
  title: "LinkVault Chrome Extension",
  description:
    "A smart Chrome extension to save, organize, and manage your important web links with quick add, search, filter, import/export, and clipboard features.",
  image: "https://i.ibb.co/2m5cbpS/Screenshot-2025-07-18-040555.png", 
  // Replace this URL with your actual screenshot path or local import
  technologies: ["JavaScript", "Chrome Extension API", "React"],
  liveUrl: "#", // No public live URL yet
  githubUrl: "https://github.com/Rakibulislam-emon/linkvault-extension"
}
,
  {
    title: "GitHub Repo Remover",
    description:
      "A modern full-stack app that lets developers securely manage and delete GitHub repositories with OAuth login, batch operations, and a clean, responsive UI.",
    image: "https://i.ibb.co/Kjf0NcMH/github-repo-remover-vercel-app-1.png",
    technologies: ["React", "Node.js", "Express", "GitHub OAuth"],
    liveUrl: "https://github-repo-remover.vercel.app",
    githubUrl: "https://github.com/Rakibulislam-emon/github_repo_remover",
  },
];

export const projects = [
  {
    title: "Organic Grocery Shop",
    description:
      "An online grocery shop built with React and Tailwind CSS. Users can browse and buy organic food items easily.",
    image: "https://i.ibb.co/rKnf6KZk/organicgrocerystores-netlify-app.png",
    technologies: ["React", "Tailwind CSS"],
    liveUrl: "https://organicgrocerystores.netlify.app/",
    githubUrl:
      "https://github.com/Rakibulislam-emon/Organic_Grocery_Shop_Client",
  },
  
  {
    title: "Flex Fitness",
    description:
      "A fitness website for booking gym classes, managing user profiles, and processing secure payments via Stripe.",
    image: "https://i.ibb.co/8LDMJ6XW/fit-gym-7bce5-web-app.png",
    technologies: ["React", "Firebase", "Tailwind CSS", "Stripe API"],
    liveUrl: "https://fit-gym-7bce5.web.app/",
    githubUrl:
      "https://github.com/Rakibulislam-emon/Flex-Fitness?tab=readme-ov-file",
  },
 
  {
    title: "Nest Grocery Shop",
    description:
      "A full-stack organic grocery e-commerce platform with advanced search, secure payments via Stripe, and user auth with Clerk. Built with React, Express, and MongoDB.",
    image: "https://i.ibb.co/Q7xPHdcg/nest-client-henna-vercel-app-4.png",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Clerk"],
    liveUrl: "https://nest-client-henna.vercel.app/",
    githubUrl: "https://github.com/Rakibulislam-emon/nest_client",
  },
   {
    title: "GitHub Repo Remover",
    description:
      "A modern full-stack app that lets developers securely manage and delete GitHub repositories with OAuth login, batch operations, and a clean, responsive UI.",
    image: "https://i.ibb.co/Kjf0NcMH/github-repo-remover-vercel-app-1.png",
    technologies: ["React", "Node.js", "Express", "GitHub OAuth"],
    liveUrl: "https://github-repo-remover.vercel.app",
    githubUrl: "https://github.com/Rakibulislam-emon/github_repo_remover",
  },
];

// ===== CODE SNIPPET DATA =====
export const codeSnippetData = [
  { text: "// Hello, I'm Rakibul Islam Emon 👋", color: "#10B981" },
  { text: "const developer = {", color: "#3B82F6" },
  { text: "  name: 'Rakibul Islam Emon',", color: "#d4d4d4" },
  { text: "  role: 'Frontend MERN Stack Developer',", color: "#d4d4d4" },
  {
    text: "  expertise: ['React', 'Next.js', 'Node.js', 'MongoDB'],",
    color: "#d4d4d4",
  },
  {
    text: "  passion: 'Building elegant solutions to complex problems',",
    color: "#d4d4d4",
  },
  { text: "", color: "#d4d4d4" },
  { text: "  contact() {", color: "#3B82F6" },
  { text: "    return {", color: "#3B82F6" },
  { text: "      email: 'rakibul@example.com',", color: "#d4d4d4" },
  { text: "      github: 'github.com/Rakibulislam-emon',", color: "#d4d4d4" },
  { text: "      linkedin: 'linkedin.com/in/rakibul-islam-emon'", color: "#d4d4d4" },
  { text: "    };", color: "#3B82F6" },
  { text: "  }", color: "#3B82F6" },
  { text: "};", color: "#3B82F6" },
  { text: "", color: "#d4d4d4" },
  {
    text: "// Let's create something extraordinary together",
    color: "#10B981",
  },
];


export const contactInfo =[
  
]