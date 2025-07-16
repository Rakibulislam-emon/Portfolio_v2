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
  Award,
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
    period: "2023 - Present",
    description: "Building responsive web applications using React.js, Tailwind CSS, and JavaScript. Focused on user-friendly design, clean UI, and reusable components.",
    icon: Code,
    achievements: [
      "Built 15+ responsive web applications",
      "Implemented modern UI/UX patterns",
      "Optimized performance by 40%"
    ]
  },
  {
    title: "Open Source Contributor",
    company: "GitHub",
    period: "2024 - Present",
    description: "Contributing to open-source projects by fixing issues, adding features, and improving documentation for JavaScript and React repositories.",
    icon: Rocket,
    achievements: [
      "50+ contributions across repositories",
      "Maintained 3 open source projects",
      "Helped 100+ developers"
    ]
  },
  {
    title: "Freelance Web Developer",
    company: "Freelance",
    period: "2024 - Present",
    description: "Designed and developed small websites and landing pages for local clients, using modern frontend technologies to deliver clean and functional interfaces.",
    icon: Star,
    achievements: [
      "Delivered 20+ client projects",
      "100% client satisfaction rate",
      "Average project completion: 2 weeks"
    ]
  },
  {
    title: "Web Development Student",
    company: "Online Bootcamp / Self-Learning",
    period: "2023 - 2024",
    description: "Completed multiple courses and hands-on projects covering JavaScript, React, and modern web development best practices.",
    icon: Heart,
    achievements: [
      "Completed 10+ certification courses",
      "Built 30+ practice projects",
      "Mastered modern development stack"
    ]
  },
];

export const education = [
  {
    degree: "Bachelor of Arts (Honours) in English",
    institution: "New Model Degree College (NMDC)",
    year: "2024 - Present",
    description: "Currently pursuing first year Honours in English, focusing on literature, communication, and academic writing.",
    status: "In Progress",
    gpa: "3.8/4.0"
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Alhaz Mockbul Hussain College",
    year: "2023",
    description: "Completed HSC with a focus on Humanities, including English and Social Studies.",
    status: "Completed",
    gpa: "4.5/5.0"
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "New Model Multilateral High School",
    year: "2021",
    description: "Completed SSC with a concentration in Humanities and strong results in English and general subjects.",
    status: "Completed",
    gpa: "4.8/5.0"
  },
];

export const personalInfo = {
  title: "Passionate Frontend Developer",
  description: "I'm a dedicated frontend developer with a passion for creating beautiful, functional, and user-friendly web applications. With expertise in modern JavaScript frameworks and a keen eye for design, I transform ideas into digital experiences.",
  additionalInfo: "Currently pursuing my Bachelor's in English while building my career in web development. I believe in continuous learning and staying updated with the latest technologies to deliver cutting-edge solutions.",
  highlights: [
    { label: "Experience", value: "2+ Years in Web Development" },
    { label: "Focus", value: "Frontend & UI/UX Design" },
    { label: "Location", value: "Bangladesh" },
    { label: "Availability", value: "Open for Projects" }
  ]
};



export const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack MERN application with payment integration and admin dashboard",
    image: "/api/placeholder/400/300",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates",
    image: "/api/placeholder/400/300",
    technologies: ["React", "Firebase", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Weather Dashboard",
    description: "Interactive weather app with location-based forecasts",
    image: "/api/placeholder/400/300",
    technologies: ["React", "API Integration", "Charts"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Portfolio Website",
    description: "Responsive portfolio with 3D animations and modern design",
    image: "/api/placeholder/400/300",
    technologies: ["React", "Spline", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Blog Platform",
    description: "Content management system with markdown support",
    image: "/api/placeholder/400/300",
    technologies: ["Next.js", "Prisma", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Chat Application",
    description: "Real-time messaging app with file sharing capabilities",
    image: "/api/placeholder/400/300",
    technologies: ["React", "Socket.io", "Express"],
    liveUrl: "#",
    githubUrl: "#"
  }
];