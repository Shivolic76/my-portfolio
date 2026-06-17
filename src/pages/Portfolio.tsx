import React, { useState, useEffect, useRef, useCallback } from "react";
import { Modal, Form, Input, message, Spin, Alert, Tag } from "antd";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { usePortfolioData } from "../hooks/usePortfolioData";

import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaBriefcase,
  FaCode,
  FaPaperPlane,
  FaCheckCircle,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaTrophy,
  FaHeart,
  FaExternalLinkAlt,
  FaQuoteLeft,
  FaStar,
  FaGraduationCap,
  FaChevronDown,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SafeIcon } from "../utils/IconWrapper";
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiTailwindcss, SiAntdesign, SiMui, SiBootstrap, SiSass,
  SiRedux, SiAxios, SiFramer,
  SiGit, SiGithub, SiFigma, SiVite, SiWebpack, SiEslint,
  SiChartdotjs, SiChromewebstore,
} from "react-icons/si";
import { FaMobileAlt, FaBolt, FaSearch, FaMagic, FaDatabase } from "react-icons/fa";
import Navbar from "../components/Navbar";
import profileImg from "../assets/shivam-profile.jpg";

const SKILL_GROUPS = [
  {
    title: "Frontend Core",
    eyebrow: "Languages & Frameworks",
    gradient: "from-indigo-500 to-blue-500",
    titleColor: "text-indigo-600 dark:text-indigo-400",
    skills: [
      { name: "HTML5",           icon: SiHtml5,         color: "#E34F26" },
      { name: "CSS3",            icon: SiCss3,          color: "#1572B6" },
      { name: "JavaScript",      icon: SiJavascript,    color: "#F7DF1E" },
      { name: "TypeScript",      icon: SiTypescript,    color: "#3178C6" },
      { name: "React.js",        icon: SiReact,         color: "#61DAFB" },
      { name: "Next.js",         icon: SiNextdotjs,     color: "#7C3AED" },
    ],
  },
  {
    title: "Styling & UI",
    eyebrow: "Design Systems & Libraries",
    gradient: "from-purple-500 to-pink-500",
    titleColor: "text-purple-600 dark:text-purple-400",
    skills: [
      { name: "Tailwind CSS",    icon: SiTailwindcss,   color: "#06B6D4" },
      { name: "Ant Design",      icon: SiAntdesign,     color: "#0170FE" },
      { name: "Material-UI",     icon: SiMui,           color: "#007FFF" },
      { name: "Bootstrap 5",     icon: SiBootstrap,     color: "#7952B3" },
      { name: "SASS/SCSS",       icon: SiSass,          color: "#CC6699" },
    ],
  },
  {
    title: "State & Libraries",
    eyebrow: "Data & Interaction",
    gradient: "from-violet-500 to-purple-500",
    titleColor: "text-violet-600 dark:text-violet-400",
    skills: [
      { name: "Redux Toolkit",   icon: SiRedux,         color: "#764ABC" },
      { name: "React Router",    icon: SiReact,         color: "#CA4245" },
      { name: "Axios",           icon: SiAxios,         color: "#5A29E4" },
      { name: "Framer Motion",   icon: SiFramer,        color: "#EC4899" },
      { name: "Formik & Yup",    icon: FaCode,          color: "#6366F1" },
    ],
  },
  {
    title: "Data Visualization",
    eyebrow: "Charts & Analytics",
    gradient: "from-blue-500 to-cyan-500",
    titleColor: "text-blue-600 dark:text-blue-400",
    skills: [
      { name: "ECharts",         icon: FaCode,          color: "#AA344D" },
      { name: "Chart.js",        icon: SiChartdotjs,    color: "#FF6384" },
      { name: "REST APIs",       icon: FaDatabase,      color: "#6366F1" },
    ],
  },
  {
    title: "Tools & DevOps",
    eyebrow: "Development Environment",
    gradient: "from-emerald-500 to-teal-500",
    titleColor: "text-emerald-600 dark:text-emerald-400",
    skills: [
      { name: "Git",             icon: SiGit,             color: "#F05032" },
      { name: "GitHub",          icon: SiGithub,          color: "#6366F1" },
      { name: "VS Code",         icon: FaCode,            color: "#007ACC" },
      { name: "Figma",           icon: SiFigma,           color: "#F24E1E" },
      { name: "Vite",            icon: SiVite,            color: "#646CFF" },
      { name: "Webpack",         icon: SiWebpack,         color: "#4AACD3" },
      { name: "ESLint",          icon: SiEslint,          color: "#4B32C3" },
      { name: "Chrome DevTools", icon: SiChromewebstore,  color: "#4285F4" },
    ],
  },
  {
    title: "Practices",
    eyebrow: "Engineering Principles",
    gradient: "from-orange-500 to-red-500",
    titleColor: "text-orange-600 dark:text-orange-400",
    skills: [
      { name: "Responsive Design",        icon: FaMobileAlt, color: "#6366F1" },
      { name: "Performance Optimization", icon: FaBolt,      color: "#F59E0B" },
      { name: "State Management",         icon: FaDatabase,  color: "#10B981" },
      { name: "SEO Optimization",         icon: FaSearch,    color: "#EF4444" },
      { name: "AI Prompt Engineering",    icon: FaMagic,     color: "#8B5CF6" },
    ],
  },
];

const PROJECT_GRADIENTS = [
  "from-blue-500 to-cyan-500",
  "from-emerald-500 to-teal-500",
  "from-purple-500 to-violet-500",
  "from-orange-500 to-red-500",
  "from-pink-500 to-rose-500",
];

const EXP_AVATARS = [
  "from-indigo-500 to-violet-600",
  "from-emerald-500 to-teal-600",
  "from-orange-500 to-red-500",
  "from-blue-500 to-cyan-600",
];

const COMPANY_LOGOS: Record<string, string> = {
  "RapidOps Inc.": "https://media.licdn.com/dms/image/v2/D4D0BAQEHptyZSMEPFw/company-logo_200_200/company-logo_200_200/0/1735732229357/rapidops_inc_logo?e=1782950400&v=beta&t=hFwGYleQARNSdMwsAEMWd0Ip8CLMRNAFPVGwkJUn4fw",
  "Incipient Infotech": "https://media.licdn.com/dms/image/v2/C4D0BAQHtkPNSOPwiMA/company-logo_200_200/company-logo_200_200/0/1671175097160/incipientinfo_logo?e=1782950400&v=beta&t=EJ6umzGFqK9SKhnoGJm2esqXXhGpJAyWqiGWwqSowgI",
  "Quantex Solutions": "https://media.licdn.com/dms/image/v2/D4D0BAQEWvoOiyTGodA/company-logo_200_200/company-logo_200_200/0/1703399544913/quantex_solutions_logo?e=1782950400&v=beta&t=kTVNlmp4Uiv1VQHZbjdZ37ekac3VezNflZXgFmc0MUw",
};

const EDUCATION_LOGOS: Record<string, string> = {
  "L.D. College of Engineering": "https://ldce.ac.in/LDCE_Logo.png",
  "C.U. Shah University": "https://www.cushahuniversity.ac.in/img/culogo_new.png",
  "GSEB Board": "https://www.gseb.org/assets/images/gseb-english-logo.png",
};

const CERT_ICONS: Record<string, React.ReactNode> = {
  Html5Outlined: <SafeIcon icon={SiHtml5} size={30} />,
  CodeOutlined: <SafeIcon icon={FaCode} size={30} />,
  ThunderboltOutlined: <SafeIcon icon={SiReact} size={30} />,
  AppstoreAddOutlined: <SafeIcon icon={FaCode} size={30} />,
  TrophyOutlined: <SafeIcon icon={FaTrophy} size={30} />,
};

const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) => (
  <div className="text-center mb-10 sm:mb-14 lg:mb-16 px-2">
    <span className="text-xs font-semibold tracking-widest uppercase text-indigo-600 dark:text-indigo-400 mb-2 sm:mb-3 block">
      {eyebrow}
    </span>
    <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-3 sm:mb-4">
      {title}
    </h2>
    <p className="text-sm sm:text-base lg:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
      {subtitle}
    </p>
  </div>
);

const Portfolio: React.FC = () => {
  const { data: portfolioData, loading, error } = usePortfolioData();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({ projects: 0, experience: 0, clients: 0, commits: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [projectIndex, setProjectIndex] = useState(0);
  const [certIndex, setCertIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);
  const [certCardsPerView, setCertCardsPerView] = useState(3);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [form] = Form.useForm();
  const statsRef = useRef<HTMLDivElement>(null);

  const heroMouseX = useMotionValue(0);
  const heroMouseY = useMotionValue(0);
  const heroRotateX = useSpring(useTransform(heroMouseY, [-0.5, 0.5], [12, -12]), { stiffness: 150, damping: 20 });
  const heroRotateY = useSpring(useTransform(heroMouseX, [-0.5, 0.5], [-12, 12]), { stiffness: 150, damping: 20 });
  const heroGlare = useTransform(
    [heroMouseX, heroMouseY],
    ([x, y]: number[]) =>
      `radial-gradient(circle at ${((x as number) + 0.5) * 100}% ${((y as number) + 0.5) * 100}%, rgba(255,255,255,0.18) 0%, transparent 55%)`
  );

  const animateStats = useCallback(() => {
    if (!portfolioData?.statistics || hasAnimated) return;
    setHasAnimated(true);
    const targets = portfolioData.statistics;
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    Object.keys(targets).forEach((key) => {
      const target = targets[key as keyof typeof targets];
      let current = 0;
      const increment = target / steps;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          clearInterval(timer);
          setAnimatedStats((prev) => ({ ...prev, [key]: target }));
        } else {
          setAnimatedStats((prev) => ({ ...prev, [key]: Math.floor(current) }));
        }
      }, stepTime);
    });
  }, [portfolioData?.statistics, hasAnimated]);

  useEffect(() => {
    const handleScroll = () => {
      if (statsRef.current && !hasAnimated) {
        const rect = statsRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) animateStats();
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [animateStats, hasAnimated]);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setCardsPerView(w >= 1024 ? 3 : w >= 768 ? 2 : 1);
      setCertCardsPerView(w < 550 ? 2 : 3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    setCertIndex(0);
  }, [certCardsPerView]);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? window.scrollY / total : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Hide native scrollbar without affecting scroll behaviour
    const style = document.createElement("style");
    style.textContent = "html,body{scrollbar-width:none;}html::-webkit-scrollbar,body::-webkit-scrollbar{display:none;}";
    document.head.appendChild(style);

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    if (!portfolioData) return;
    const total = portfolioData.testimonials.length;
    const timer = setInterval(() => {
      setTestimonialIndex((i) => (i + 1 > total - cardsPerView ? 0 : i + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [portfolioData, cardsPerView]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950">
        <Spin size="large" />
      </div>
    );
  }

  if (error || !portfolioData) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8 bg-white dark:bg-slate-950">
        <Alert message="Error Loading Portfolio" description={error || "Failed to load portfolio data."} type="error" showIcon />
      </div>
    );
  }

  const { personalInfo } = portfolioData;

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactSubmit = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      message.success("Message sent! I'll get back to you soon.");
      form.resetFields();
      setIsContactModalOpen(false);
    } catch {
      message.error("Failed to send message. Please try again.");
    }
  };

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-gray-900 dark:text-white overflow-x-hidden">
      {/* ── Scroll progress bar ───────────────────────────────── */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 z-[9999]"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <Navbar resumeUrl={personalInfo.resumeUrl} />

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section id="hero" className="pt-16 relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-14 sm:py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

            {/* Photo — 3D tilt card */}
            <motion.div
              className="flex justify-center lg:justify-end order-first lg:order-last"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ perspective: "900px" }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                heroMouseX.set((e.clientX - rect.left) / rect.width - 0.5);
                heroMouseY.set((e.clientY - rect.top) / rect.height - 0.5);
              }}
              onMouseLeave={() => {
                heroMouseX.set(0);
                heroMouseY.set(0);
              }}
            >
              <motion.div
                className="relative"
                style={{ rotateX: heroRotateX, rotateY: heroRotateY, transformStyle: "preserve-3d" }}
              >
                <div className="absolute -inset-6 bg-gradient-to-br from-indigo-400/25 via-purple-400/20 to-pink-400/15 dark:from-indigo-500/20 dark:via-purple-500/15 dark:to-pink-500/10 rounded-3xl blur-2xl -z-10" />
                <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/40 dark:to-purple-900/30 rounded-3xl transform rotate-3 -z-[5]" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                  <img
                    src={profileImg}
                    alt="Shivam Chudasama"
                    className="w-52 h-52 xs:w-60 xs:h-60 sm:w-72 sm:h-72 lg:w-[22rem] lg:h-[22rem] object-cover object-top block"
                  />
                  <motion.div className="absolute inset-0 pointer-events-none" style={{ background: heroGlare }} />
                </div>


              </motion.div>
            </motion.div>

            {/* Text content */}
            <motion.div
              className="order-last lg:order-first flex flex-col items-center lg:items-start"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              {/* Status badges */}
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2 mb-6 sm:mb-8 justify-center lg:justify-start">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/40 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
                  <span className="text-xs text-green-700 dark:text-green-400 font-medium">Available for opportunities</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 dark:bg-slate-800/80 border border-gray-200 dark:border-slate-700/50 rounded-full">
                  <img src={COMPANY_LOGOS["RapidOps Inc."]} alt="RapidOps" className="w-4 h-4 rounded object-contain" />
                  <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">RapidOps Inc.</span>
                </div>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-3 sm:mb-4 text-center lg:text-left"
              >
                Shivam{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
                  Chudasama
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-lg sm:text-xl lg:text-2xl text-gray-500 dark:text-gray-400 font-light mb-4 sm:mb-6 text-center lg:text-left"
              >
                {personalInfo.title}
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6 sm:mb-8 max-w-lg text-center lg:text-left"
              >
                4+ years building scalable SaaS and analytics platforms with React.js, Next.js, and TypeScript.
                I care about clean architecture, performance, and shipping work teams are proud of.
              </motion.p>

              {/* Social icons */}
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6 sm:mb-8 justify-center lg:justify-start">
                {/* Social links */}
                <button
                  onClick={() => window.open(personalInfo.github, "_blank")}
                  title="GitHub"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-900 dark:bg-gray-800 text-white hover:bg-gray-700 transition-all duration-200"
                >
                  <SafeIcon icon={FaGithub} size={15} />
                </button>
                <button
                  onClick={() => window.open(personalInfo.linkedin, "_blank")}
                  title="LinkedIn"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-[#0A66C2] hover:bg-[#004182] text-white transition-all duration-200"
                >
                  <SafeIcon icon={FaLinkedin} size={15} />
                </button>
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  title="Email"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-rose-500 hover:bg-rose-600 text-white transition-all duration-200"
                >
                  <SafeIcon icon={MdEmail} size={15} />
                </button>

                <div className="w-px h-7 bg-gray-200 dark:bg-slate-700" />

                {/* Section shortcuts */}
                <button
                  onClick={() => window.open(personalInfo.resumeUrl, "_blank")}
                  title="Download Resume"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-all duration-200"
                >
                  <SafeIcon icon={FaDownload} size={14} />
                </button>
                <button
                  onClick={() => scrollToSection("experience")}
                  title="Experience"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-amber-500 hover:bg-amber-600 text-white transition-all duration-200"
                >
                  <SafeIcon icon={FaBriefcase} size={14} />
                </button>
                <button
                  onClick={() => scrollToSection("education")}
                  title="Education"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-violet-500 hover:bg-violet-600 text-white transition-all duration-200"
                >
                  <SafeIcon icon={FaGraduationCap} size={15} />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>

      </section>

      {/* ── Stats ─────────────────────────────────────────────── */}
      <section id="stats" ref={statsRef} className="py-10 sm:py-14 border-t border-b border-gray-100 dark:border-slate-800/60 bg-gray-50/80 dark:bg-slate-900/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { value: animatedStats.projects, suffix: "+", label: "Projects Completed", color: "text-indigo-600 dark:text-indigo-400" },
              { value: animatedStats.experience, suffix: "+", label: "Years Experience", color: "text-emerald-600 dark:text-emerald-400" },
              { value: animatedStats.clients, suffix: "+", label: "Happy Clients", color: "text-violet-600 dark:text-violet-400" },
              { value: animatedStats.commits, suffix: "+", label: "Code Commits", color: "text-orange-600 dark:text-orange-400" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-1.5 sm:mb-2 ${stat.color}`}>
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium leading-snug">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Scroll indicator ──────────────────────────────────── */}
      <motion.div
        className="hidden sm:flex flex-col items-center gap-1.5 cursor-pointer py-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        onClick={() => scrollToSection("about")}
      >
        <span className="text-[11px] font-medium text-gray-400 dark:text-gray-600 tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}>
          <SafeIcon icon={FaChevronDown} size={13} className="text-gray-400 dark:text-gray-600" />
        </motion.div>
      </motion.div>

      {/* ── About ─────────────────────────────────────────────── */}
      <section id="about" className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Who I Am" title="About Me" subtitle="My background, passion, and what drives me to build great software" />

          <div className="grid lg:grid-cols-2 gap-5 sm:gap-8">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp}
              className="bg-gray-50 dark:bg-slate-800/50 rounded-2xl p-5 sm:p-8 border border-gray-100 dark:border-slate-700/50"
            >
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-5 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center flex-shrink-0">
                  <SafeIcon icon={FaCode} size={13} className="text-indigo-600 dark:text-indigo-400" />
                </span>
                Professional Journey
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4 sm:mb-5">
                {portfolioData.about.professionalJourney}
              </p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                {portfolioData.about.passion}
              </p>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp}
              className="bg-gray-50 dark:bg-slate-800/50 rounded-2xl p-5 sm:p-8 border border-gray-100 dark:border-slate-700/50"
            >
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-5 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center flex-shrink-0">
                  <SafeIcon icon={FaTrophy} size={13} className="text-emerald-600 dark:text-emerald-400" />
                </span>
                Key Achievements
              </h3>
              <ul className="space-y-3 text-left">
                {portfolioData.about.achievements.map((a, i) => (
                  <li key={i} className="flex items-start gap-2 text-left">
                    <span className="w-7 h-7 flex items-center justify-center flex-shrink-0">
                      <SafeIcon icon={FaCheckCircle} size={15} className="text-indigo-500 dark:text-indigo-400" />
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{a}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Skills ────────────────────────────────────────────── */}
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
                {/* Colored top accent */}
                <div className={`h-[3px] bg-gradient-to-r ${group.gradient}`} />

                <div className="p-5 sm:p-6">
                  {/* Header */}
                  <div className="mb-4 text-center">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">
                      {group.eyebrow}
                    </p>
                    <h3 className={`text-sm sm:text-base lg:text-lg font-bold ${group.titleColor}`}>
                      {group.title}
                    </h3>
                  </div>

                  {/* Skill chips with icons */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {group.skills.map((skill, j) => (
                      <div
                        key={j}
                        className="flex items-center gap-1.5 px-3 py-2 bg-gray-50 dark:bg-slate-700/40 border border-gray-200 dark:border-slate-600/40 rounded-lg hover:border-gray-300 dark:hover:border-slate-500 hover:shadow-sm transition-all duration-200 cursor-default"
                      >
                        <SafeIcon icon={skill.icon} size={14} style={{ color: skill.color, flexShrink: 0 }} />
                        <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap leading-none">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Experience ────────────────────────────────────────── */}
      <section id="experience" className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Work History" title="Professional Experience" subtitle="Where I've worked and the impact I've made" />

          <div className="relative">
            {/* Vertical gradient timeline line — aligned to center of 48px node */}
            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-indigo-500 via-violet-500 to-purple-300 dark:to-purple-800 hidden sm:block" />

            <div className="space-y-8 sm:space-y-10">
              {portfolioData.experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp}
                  className="relative flex gap-5 sm:gap-8"
                >
                  {/* ── Timeline node (company logo) ── */}
                  <div className="flex-shrink-0 relative z-10 hidden sm:block">
                    {COMPANY_LOGOS[exp.company] ? (
                      <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 flex items-center justify-center shadow-lg ring-4 ring-white dark:ring-slate-950 overflow-hidden p-1.5">
                        <img
                          src={COMPANY_LOGOS[exp.company]}
                          alt={exp.company}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${EXP_AVATARS[index % EXP_AVATARS.length]} flex items-center justify-center shadow-lg ring-4 ring-white dark:ring-slate-950`}>
                        <span className="text-white font-black text-sm leading-none select-none">
                          {exp.company.slice(0, 2).toUpperCase()}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* ── Card ── */}
                  <div className="flex-1 min-w-0">
                    <div className="bg-white dark:bg-slate-800/60 rounded-2xl border border-gray-100 dark:border-slate-700/50 overflow-hidden hover:shadow-xl dark:hover:shadow-slate-900/50 transition-all duration-300 hover:-translate-y-0.5 group">

                      {/* Colored top accent */}
                      <div className={`h-[3px] bg-gradient-to-r ${EXP_AVATARS[index % EXP_AVATARS.length]}`} />

                      {/* Header */}
                      <div className="p-5 sm:p-6">
                        <div className="flex items-start justify-between gap-3 flex-wrap mb-3">
                          <div className="flex items-start gap-3 sm:hidden">
                            {/* Mobile-only avatar */}
                            {COMPANY_LOGOS[exp.company] ? (
                              <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 flex items-center justify-center shadow-md flex-shrink-0 overflow-hidden p-1">
                                <img
                                  src={COMPANY_LOGOS[exp.company]}
                                  alt={exp.company}
                                  className="w-full h-full object-contain"
                                />
                              </div>
                            ) : (
                              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${EXP_AVATARS[index % EXP_AVATARS.length]} flex items-center justify-center shadow-md flex-shrink-0`}>
                                <span className="text-white font-black text-xs leading-none select-none">
                                  {exp.company.slice(0, 2).toUpperCase()}
                                </span>
                              </div>
                            )}
                            <div className="flex flex-col items-start text-left">
                              <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-tight text-left">{exp.title}</h3>
                              <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5 text-left">{exp.company}</p>
                            </div>
                          </div>
                          <div className="hidden sm:block">
                            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-white leading-tight text-left">{exp.title}</h3>
                            <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5 text-left">{exp.company}</p>
                          </div>
                          <span className="px-2.5 py-1 text-xs font-bold bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full whitespace-nowrap flex-shrink-0">
                            {exp.type}
                          </span>
                        </div>

                        {/* Meta row */}
                        <div className="flex flex-wrap items-center gap-3 sm:gap-5 mb-4">
                          <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-slate-700/40 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-slate-600/40">
                            <SafeIcon icon={FaCalendarAlt} size={11} className="text-indigo-400" />
                            {exp.duration}
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-slate-700/40 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-slate-600/40">
                            <SafeIcon icon={FaMapMarkerAlt} size={11} className="text-rose-400" />
                            {exp.location}
                          </span>
                        </div>

                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                          {exp.description}
                        </p>
                      </div>

                      {/* Divider */}
                      <div className="mx-5 sm:mx-6 h-px bg-gray-100 dark:bg-slate-700/40" />

                      {/* Achievements + Tech */}
                      <div className="p-5 sm:p-6 pt-4">
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3 text-left">
                          Key Highlights
                        </p>
                        <ul className="space-y-3 mb-5 text-left">
                          {exp.achievements.map((a, i) => (
                            <li key={i} className="flex items-start gap-3 text-left">
                              <div className="w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0 mt-[7px]" />
                              <span className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{a}</span>
                            </li>
                          ))}
                        </ul>

                        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">
                          Tech Stack
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((t, i) => (
                            <span key={i} className="px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-slate-700/50 rounded-lg border border-gray-200 dark:border-slate-600/40 hover:border-indigo-300 dark:hover:border-indigo-600 transition-colors">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Projects ──────────────────────────────────────────── */}
      <section id="projects" className="py-12 sm:py-16 lg:py-24 bg-gray-50/80 dark:bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="What I've Built" title="Featured Projects" subtitle="A selection of my best work — real products, real impact" />

          {(() => {
            const projects = portfolioData.projects;
            const total = projects.length;
            const isMobile = cardsPerView === 1;
            const maxIndex = total - 1;

            const projectCard = (project: typeof projects[0], index: number) => (
              <div className="group bg-white dark:bg-slate-800/60 rounded-2xl border border-gray-100 dark:border-slate-700/50 overflow-hidden hover:shadow-xl dark:hover:shadow-slate-900/60 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
                <div className={`h-1.5 bg-gradient-to-r ${PROJECT_GRADIENTS[index % PROJECT_GRADIENTS.length]}`} />
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">{project.category}</span>
                    <span className={`px-2.5 py-1 text-xs font-bold uppercase tracking-wide rounded-full ${project.status === "Completed" ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400" : "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400"}`}>{project.status}</span>
                  </div>
                  <div className="flex items-start justify-between gap-2 mb-2.5 sm:mb-3">
                    <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 dark:text-white leading-snug">{project.title}</h3>
                    <div className="flex items-center gap-1.5 flex-shrink-0 mt-0.5">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg bg-gray-100 dark:bg-slate-700/60 text-gray-500 dark:text-gray-400 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-200" onClick={(e) => e.stopPropagation()}>
                          <SafeIcon icon={FaGithub} size={12} />
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-200" onClick={(e) => e.stopPropagation()}>
                          <SafeIcon icon={FaExternalLinkAlt} size={10} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3 flex-1 mb-4">{project.description}</p>
                  <div className="flex items-start gap-2.5 p-3 sm:p-4 mb-4 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/30 rounded-xl">
                    <SafeIcon icon={FaTrophy} size={13} className="text-amber-500 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-amber-800 dark:text-amber-400 font-medium leading-relaxed">{project.impact}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.technologies.slice(0, 4).map((t, i) => (
                      <span key={i} className="px-2.5 py-1.5 text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-slate-700/50 rounded-lg border border-gray-200 dark:border-slate-600/40">{t}</span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2.5 py-1.5 text-xs font-medium text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-slate-700/50 rounded-lg border border-gray-200 dark:border-slate-600/40">+{project.technologies.length - 4}</span>
                    )}
                  </div>
                </div>
              </div>
            );

            if (isMobile) {
              return (
                <div>
                  <div className="overflow-hidden -mx-3">
                    <motion.div
                      className="flex select-none cursor-grab active:cursor-grabbing"
                      style={{ width: `${total * 100}%` }}
                      animate={{ x: `${-projectIndex * (100 / total)}%` }}
                      transition={{ duration: 0.45, ease: "easeInOut" }}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.12}
                      onDragEnd={(_, info) => {
                        if (info.offset.x < -50 || info.velocity.x < -600) {
                          setProjectIndex((i) => Math.min(i + 1, maxIndex));
                        } else if (info.offset.x > 50 || info.velocity.x > 600) {
                          setProjectIndex((i) => Math.max(i - 1, 0));
                        }
                      }}
                    >
                      {projects.map((project, index) => (
                        <div key={index} style={{ width: `${100 / total}%` }} className="px-3">
                          {projectCard(project, index)}
                        </div>
                      ))}
                    </motion.div>
                  </div>
                  <div className="flex items-center justify-center gap-2 mt-6">
                    {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                      <button key={i} onClick={() => setProjectIndex(i)} className={`rounded-full transition-all duration-300 ${i === projectIndex ? "w-6 h-2.5 bg-indigo-600" : "w-2.5 h-2.5 bg-gray-300 dark:bg-slate-600 hover:bg-indigo-400"}`} />
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {projects.map((project, index) => (
                  <motion.div key={index} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="flex flex-col">
                    {projectCard(project, index)}
                  </motion.div>
                ))}
              </div>
            );
          })()}
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────── */}
      <section id="testimonials" className="py-12 sm:py-16 lg:py-24 bg-gray-50 dark:bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Social Proof" title="What People Say" subtitle="Feedback from colleagues I've had the pleasure of working with" />

          {(() => {
            const avatarGradients = [
              "from-indigo-500 to-purple-500",
              "from-emerald-500 to-teal-500",
              "from-orange-500 to-red-500",
              "from-blue-500 to-cyan-500",
            ];
            const total = portfolioData.testimonials.length;
            const maxIndex = total - cardsPerView;
            return (
              <div>
                {/* Carousel track */}
                <div className="overflow-hidden -mx-3">
                  <motion.div
                    className="flex select-none cursor-grab active:cursor-grabbing"
                    style={{ width: `${(total / cardsPerView) * 100}%` }}
                    animate={{ x: `${-testimonialIndex * (100 / total)}%` }}
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.12}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -50 || info.velocity.x < -600) {
                        setTestimonialIndex((i) => Math.min(i + 1, maxIndex));
                      } else if (info.offset.x > 50 || info.velocity.x > 600) {
                        setTestimonialIndex((i) => Math.max(i - 1, 0));
                      }
                    }}
                  >
                    {portfolioData.testimonials.map((t, index) => (
                      <div key={index} style={{ width: `${100 / total}%` }} className="px-3">
                        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 border border-gray-100 dark:border-slate-700/50 shadow-sm h-full flex flex-col">
                          <SafeIcon icon={FaQuoteLeft} size={28} className="text-indigo-200 dark:text-indigo-700 mb-4" />
                          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed flex-1 mb-6">
                            {t.content}
                          </p>
                          <div>
                            <div className="flex gap-1 mb-3">
                              {Array.from({ length: t.rating }).map((_, j) => (
                                <SafeIcon key={j} icon={FaStar} size={13} className="text-amber-400" />
                              ))}
                            </div>
                            <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-slate-700">
                              <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarGradients[index % avatarGradients.length]} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                                {t.name.charAt(0)}
                              </div>
                              <div className="text-left">
                                <div className="font-bold text-gray-900 dark:text-white text-sm">{t.name}</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">{t.role} · {t.company}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Dots */}
                <div className="flex items-center justify-center gap-2 mt-6">
                  {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setTestimonialIndex(i)}
                      className={`rounded-full transition-all duration-300 ${i === testimonialIndex ? "w-6 h-2.5 bg-indigo-600" : "w-2.5 h-2.5 bg-gray-300 dark:bg-slate-600 hover:bg-indigo-400"}`}
                    />
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* ── Education ─────────────────────────────────────────── */}
      <section id="education" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-indigo-50/40 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Academic Background" title="Education" subtitle="My academic foundation in computer engineering" />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {portfolioData.education.map((edu, index) => {
              const EDU_STYLES = [
                { border: "border-l-violet-500", accent: "bg-violet-500", badge: "bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300" },
                { border: "border-l-indigo-500", accent: "bg-indigo-500", badge: "bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300" },
                { border: "border-l-blue-500",   accent: "bg-blue-500",   badge: "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300" },
              ];
              const style = EDU_STYLES[index % EDU_STYLES.length];

              return (
                <motion.div
                  key={index}
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
                  className="flex flex-col"
                >
                  <div className={`bg-white dark:bg-slate-800/70 rounded-2xl border border-gray-100 dark:border-slate-700/50 border-l-4 ${style.border} overflow-hidden hover:shadow-xl dark:hover:shadow-slate-900/40 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full`}>

                    <div className="p-4 sm:p-5 flex flex-col flex-1 text-left">

                      {/* Logo + Degree row */}
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-11 h-11 rounded-xl bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 flex items-center justify-center p-1.5 flex-shrink-0 shadow-sm overflow-hidden">
                          {EDUCATION_LOGOS[edu.institution] ? (
                            <img src={EDUCATION_LOGOS[edu.institution]} alt={edu.institution} className="w-full h-full object-contain" />
                          ) : (
                            <SafeIcon icon={FaGraduationCap} size={20} className="text-indigo-400" />
                          )}
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white leading-snug">
                            {edu.degree}
                          </h3>
                          <p className="text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 text-left mt-0.5">
                            {edu.field}
                          </p>
                        </div>
                      </div>

                      {/* Duration + Location */}
                      <div className="space-y-1.5 mb-3">
                        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                          <SafeIcon icon={FaCalendarAlt} size={10} className="text-indigo-400 flex-shrink-0" />
                          {edu.duration}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                          <SafeIcon icon={FaMapMarkerAlt} size={10} className="text-rose-400 flex-shrink-0" />
                          {edu.location}
                        </div>
                      </div>

                      {/* Institution — bottom */}
                      <div className="mt-auto pt-2.5 border-t border-gray-100 dark:border-slate-700/40">
                        <p className="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300">
                          {edu.institution}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Certifications ────────────────────────────────────── */}
      <section id="certifications" className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Credentials" title="Certifications" subtitle="Continuous learning — formal courses and certifications" />

          {(() => {
            const certs = portfolioData.certifications;
            const total = certs.length;
            const isMobile = cardsPerView === 1;
            const maxIndex = Math.max(0, total - certCardsPerView);

            const certCard = (cert: typeof certs[0], _index: number) => (
              <div className="bg-gray-50 dark:bg-slate-800/50 rounded-2xl p-4 sm:p-5 border border-gray-100 dark:border-slate-700/50 text-center hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 h-full">
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl mx-auto mb-3 sm:mb-4 flex items-center justify-center text-white shadow-sm" style={{ backgroundColor: cert.color }}>
                  {CERT_ICONS[cert.icon] || <SafeIcon icon={FaCode} size={22} />}
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white mb-1 line-clamp-2 leading-snug">{cert.title}</h4>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold mb-2">{cert.issuer}</p>
                <Tag color="green" className="text-xs">{cert.date}</Tag>
              </div>
            );

            if (isMobile) {
              return (
                <div>
                  <div className="overflow-hidden -mx-3">
                    <motion.div
                      className="flex select-none cursor-grab active:cursor-grabbing"
                      style={{ width: `${(total / certCardsPerView) * 100}%` }}
                      animate={{ x: `${-certIndex * (100 / total)}%` }}
                      transition={{ duration: 0.45, ease: "easeInOut" }}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.12}
                      onDragEnd={(_, info) => {
                        if (info.offset.x < -50 || info.velocity.x < -600) {
                          setCertIndex((i) => Math.min(i + 1, maxIndex));
                        } else if (info.offset.x > 50 || info.velocity.x > 600) {
                          setCertIndex((i) => Math.max(i - 1, 0));
                        }
                      }}
                    >
                      {certs.map((cert, index) => (
                        <div key={index} style={{ width: `${100 / total}%` }} className="px-3">
                          {certCard(cert, index)}
                        </div>
                      ))}
                    </motion.div>
                  </div>
                  <div className="flex items-center justify-center gap-2 mt-6">
                    {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                      <button key={i} onClick={() => setCertIndex(i)} className={`rounded-full transition-all duration-300 ${i === certIndex ? "w-6 h-2.5 bg-indigo-600" : "w-2.5 h-2.5 bg-gray-300 dark:bg-slate-600 hover:bg-indigo-400"}`} />
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-5">
                {certs.map((cert, index) => (
                  <motion.div key={index} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
                    {certCard(cert, index)}
                  </motion.div>
                ))}
              </div>
            );
          })()}
        </div>
      </section>

      {/* ── Contact ───────────────────────────────────────────── */}
      <section id="contact" className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Get In Touch" title="Let's Work Together" subtitle="Have a project in mind? I'd love to hear about it." />

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
            className="bg-gray-50 dark:bg-slate-800/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-gray-100 dark:border-slate-700/50 text-center mb-5 sm:mb-8"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-indigo-100 dark:bg-indigo-900/40 mb-5 sm:mb-6">
              <SafeIcon icon={FaHeart} size={22} className="text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">Currently available</h3>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-xl mx-auto mb-6 sm:mb-8">
              I'm open to freelance projects and full-time opportunities. Whether you need a web application, performance improvements, or a technical consultation — let's talk.
            </p>
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center">
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-lg shadow-indigo-600/20 transition-all duration-200 hover:-translate-y-0.5 text-sm sm:text-base"
              >
                <SafeIcon icon={MdEmail} size={16} />
                Send a Message
              </button>
              <button
                onClick={() => window.open(personalInfo.resumeUrl, "_blank")}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-300 font-semibold rounded-xl border border-gray-200 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-600 transition-all duration-200 hover:-translate-y-0.5 text-sm sm:text-base"
              >
                <SafeIcon icon={FaDownload} size={13} />
                Download Resume
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 xs:grid-cols-3 gap-3 sm:gap-5">
            {[
              { icon: MdEmail, label: "Email", value: personalInfo.email, action: () => setIsContactModalOpen(true), color: "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400" },
              { icon: FaLinkedin, label: "LinkedIn", value: "Connect professionally", action: () => window.open(personalInfo.linkedin, "_blank"), color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400" },
              { icon: FaGithub, label: "GitHub", value: "View source code", action: () => window.open(personalInfo.github, "_blank"), color: "bg-gray-100 dark:bg-slate-700/60 text-gray-700 dark:text-gray-300" },
            ].map((c, i) => (
              <button
                key={i} onClick={c.action}
                className="flex items-center xs:flex-col xs:items-center gap-3 xs:gap-3 p-4 sm:p-6 bg-gray-50 dark:bg-slate-800/50 rounded-2xl border border-gray-100 dark:border-slate-700/50 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 text-left xs:text-center w-full"
              >
                <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl ${c.color} flex items-center justify-center flex-shrink-0`}>
                  <SafeIcon icon={c.icon} size={18} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">{c.label}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 break-all">{c.value}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────── */}
      <footer className="border-t border-gray-100 dark:border-slate-800/60 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 text-center sm:text-left">
            © 2026 Shivam Chudasama.
          </p>
          <div className="flex items-center gap-4">
            <button onClick={() => window.open(personalInfo.github, "_blank")} className="text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors p-1">
              <SafeIcon icon={FaGithub} size={18} />
            </button>
            <button onClick={() => window.open(personalInfo.linkedin, "_blank")} className="text-gray-400 hover:text-[#0A66C2] transition-colors p-1">
              <SafeIcon icon={FaLinkedin} size={18} />
            </button>
            <button onClick={() => setIsContactModalOpen(true)} className="text-gray-400 hover:text-red-500 transition-colors p-1">
              <SafeIcon icon={MdEmail} size={20} />
            </button>
          </div>
        </div>
      </footer>

      {/* ── Contact Modal ─────────────────────────────────────── */}
      <Modal
        title={
          <div className="pt-2">
            <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">Get In Touch</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-normal">Let's discuss your project or opportunity</p>
          </div>
        }
        open={isContactModalOpen}
        onCancel={() => setIsContactModalOpen(false)}
        footer={null}
        width="min(560px, 95vw)"
        className="portfolio-modal"
        style={{ top: 20 }}
      >
        <Form form={form} layout="vertical" onFinish={handleContactSubmit} className="mt-3 sm:mt-4">
          {/* Stacked on mobile, side-by-side on sm+ */}
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
            <Form.Item name="name" label="Full Name" rules={[{ required: true, message: "Please enter your name" }]}>
              <Input size="large" placeholder="John Doe" />
            </Form.Item>
            <Form.Item name="email" label="Email" rules={[{ required: true, type: "email", message: "Valid email required" }]}>
              <Input size="large" placeholder="john@example.com" />
            </Form.Item>
          </div>
          <Form.Item name="subject" label="Subject" rules={[{ required: true, message: "Please add a subject" }]}>
            <Input size="large" placeholder="Project discussion, collaboration..." />
          </Form.Item>
          <Form.Item name="message" label="Message" rules={[{ required: true, message: "Please write a message" }]}>
            <Input.TextArea rows={4} placeholder="Tell me about your project, timeline, and requirements..." size="large" />
          </Form.Item>
          <Form.Item className="mb-0">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-colors text-sm sm:text-base"
            >
              <SafeIcon icon={FaPaperPlane} size={13} />
              Send Message
            </button>
          </Form.Item>
        </Form>
      </Modal>

    </div>
  );
};

export default Portfolio;
