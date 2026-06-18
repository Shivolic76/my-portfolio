import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiTailwindcss, SiAntdesign, SiMui, SiBootstrap, SiSass,
  SiRedux, SiAxios, SiFramer,
  SiGit, SiGithub, SiFigma, SiVite, SiWebpack, SiEslint,
  SiChartdotjs, SiChromewebstore,
} from "react-icons/si";
import { FaCode, FaMobileAlt, FaBolt, FaSearch, FaMagic, FaDatabase, FaRobot } from "react-icons/fa";
import { SafeIcon } from "../utils/IconWrapper";
import SectionHeader from "../components/SectionHeader";
import { fadeUp } from "../utils/animations";

const SKILL_GROUPS = [
  {
    title: "Frontend Core", eyebrow: "Languages & Frameworks",
    gradient: "from-indigo-500 to-blue-500", titleColor: "text-indigo-600 dark:text-indigo-400",
    skills: [
      { name: "HTML5",       icon: SiHtml5,      color: "#E34F26" },
      { name: "CSS3",        icon: SiCss3,       color: "#1572B6" },
      { name: "JavaScript",  icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript",  icon: SiTypescript, color: "#3178C6" },
      { name: "React.js",    icon: SiReact,      color: "#61DAFB" },
      { name: "Next.js",     icon: SiNextdotjs,  color: "#7C3AED" },
    ],
  },
  {
    title: "Styling & UI", eyebrow: "Design Systems & Libraries",
    gradient: "from-purple-500 to-pink-500", titleColor: "text-purple-600 dark:text-purple-400",
    skills: [
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Ant Design",   icon: SiAntdesign,   color: "#0170FE" },
      { name: "Material-UI",  icon: SiMui,         color: "#007FFF" },
      { name: "Bootstrap 5",  icon: SiBootstrap,   color: "#7952B3" },
      { name: "SASS/SCSS",    icon: SiSass,        color: "#CC6699" },
    ],
  },
  {
    title: "State & Libraries", eyebrow: "Data & Interaction",
    gradient: "from-violet-500 to-purple-500", titleColor: "text-violet-600 dark:text-violet-400",
    skills: [
      { name: "Redux Toolkit", icon: SiRedux,  color: "#764ABC" },
      { name: "React Router",  icon: SiReact,  color: "#CA4245" },
      { name: "Axios",         icon: SiAxios,  color: "#5A29E4" },
      { name: "Framer Motion", icon: SiFramer, color: "#EC4899" },
      { name: "Formik & Yup",  icon: FaCode,   color: "#6366F1" },
    ],
  },
  {
    title: "Data Visualization", eyebrow: "Charts & Analytics",
    gradient: "from-blue-500 to-cyan-500", titleColor: "text-blue-600 dark:text-blue-400",
    skills: [
      { name: "ECharts",   icon: FaCode,       color: "#AA344D" },
      { name: "Chart.js",  icon: SiChartdotjs, color: "#FF6384" },
      { name: "REST APIs", icon: FaDatabase,   color: "#6366F1" },
    ],
  },
  {
    title: "Tools & DevOps", eyebrow: "Development Environment",
    gradient: "from-emerald-500 to-teal-500", titleColor: "text-emerald-600 dark:text-emerald-400",
    skills: [
      { name: "Git",            icon: SiGit,            color: "#F05032" },
      { name: "GitHub",         icon: SiGithub,         color: "#6366F1" },
      { name: "VS Code",        icon: FaCode,           color: "#007ACC" },
      { name: "Figma",          icon: SiFigma,          color: "#F24E1E" },
      { name: "Vite",           icon: SiVite,           color: "#646CFF" },
      { name: "Webpack",        icon: SiWebpack,        color: "#4AACD3" },
      { name: "ESLint",         icon: SiEslint,         color: "#4B32C3" },
      { name: "Chrome DevTools",icon: SiChromewebstore, color: "#4285F4" },
    ],
  },
  {
    title: "Practices", eyebrow: "Engineering Principles",
    gradient: "from-orange-500 to-red-500", titleColor: "text-orange-600 dark:text-orange-400",
    skills: [
      { name: "Responsive Design",        icon: FaMobileAlt, color: "#6366F1" },
      { name: "Performance Optimization", icon: FaBolt,      color: "#F59E0B" },
      { name: "State Management",         icon: FaDatabase,  color: "#10B981" },
      { name: "SEO Optimization",         icon: FaSearch,    color: "#EF4444" },
    ],
  },
  {
    title: "AI & Automation", eyebrow: "AI Copilots & Tools",
    gradient: "from-violet-600 to-fuchsia-600", titleColor: "text-violet-600 dark:text-violet-400",
    skills: [
      { name: "GitHub Copilot",     icon: FaRobot, color: "#6366F1" },
      { name: "Claude AI",          icon: FaRobot, color: "#C084FC" },
      { name: "ChatGPT / GPT-4",    icon: FaRobot, color: "#10B981" },
      { name: "Cursor IDE",         icon: FaMagic, color: "#7C3AED" },
      { name: "Augment AI",         icon: FaBolt,  color: "#F59E0B" },
      { name: "Prompt Engineering", icon: FaMagic, color: "#EC4899" },
    ],
  },
];

const SkillsSection: React.FC = () => (
  <section id="skills" className="py-12 sm:py-16 lg:py-24 bg-gray-50/80 dark:bg-slate-900/40">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader eyebrow="What I Work With" title="Technical Skills" subtitle="Technologies, tools, and practices I rely on every day" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {SKILL_GROUPS.map((group, i) => (
          <motion.div
            key={i}
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
            className="bg-white dark:bg-slate-800/60 rounded-2xl border border-gray-100 dark:border-slate-700/50 overflow-hidden hover:shadow-xl dark:hover:shadow-slate-900/50 transition-all duration-300 hover:-translate-y-1"
          >
            <div className={`h-[3px] bg-gradient-to-r ${group.gradient}`} />
            <div className="p-5 sm:p-6">
              <div className="mb-4 text-center">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">{group.eyebrow}</p>
                <h3 className={`text-sm sm:text-base lg:text-lg font-bold ${group.titleColor}`}>{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {group.skills.map((skill, j) => (
                  <div
                    key={j}
                    className="group/chip flex items-center gap-1.5 px-3 py-2 bg-gray-50 dark:bg-slate-700/40 border border-gray-200 dark:border-slate-600/40 rounded-lg hover:border-gray-300 dark:hover:border-slate-500 hover:shadow-md transition-all duration-200 cursor-default"
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 14px ${skill.color}33`; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = ""; }}
                  >
                    <SafeIcon icon={skill.icon} size={14} style={{ color: skill.color, flexShrink: 0 }} />
                    <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap leading-none">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
