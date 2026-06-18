import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload, FaBriefcase, FaCode, FaGraduationCap } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SafeIcon } from "../utils/IconWrapper";
import MagneticElement from "../components/MagneticElement";
import NeuralBackground from "../components/NeuralBackground";
import profileImg from "../assets/shivam-profile.jpg";
import logoRapidOps from "../assets/logos/rapidops.jpg";
import type { PersonalInfo } from "../services/portfolioService";

const ROLES = [
  "Frontend Engineer",
  "React & Next.js Expert",
  "TypeScript Developer",
  "Generative AI App Builder",
  "UI/UX Enthusiast",
  "AI-Powered Developer",
];

interface Props {
  personalInfo: PersonalInfo;
  onContactOpen: () => void;
  onScrollToSection: (id: string) => void;
}

const HeroSection: React.FC<Props> = ({ personalInfo, onContactOpen, onScrollToSection }) => {
  const [typeState, setTypeState] = useState({ ri: 0, ci: 0, deleting: false });
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    const { ri, ci, deleting } = typeState;
    const word = ROLES[ri];
    if (!deleting && ci < word.length) {
      const t = setTimeout(() => {
        setDisplayed(word.slice(0, ci + 1));
        setTypeState((s) => ({ ...s, ci: s.ci + 1 }));
      }, 75);
      return () => clearTimeout(t);
    }
    if (!deleting && ci === word.length) {
      const t = setTimeout(() => setTypeState((s) => ({ ...s, deleting: true })), 2200);
      return () => clearTimeout(t);
    }
    if (deleting && ci > 0) {
      const t = setTimeout(() => {
        setDisplayed(word.slice(0, ci - 1));
        setTypeState((s) => ({ ...s, ci: s.ci - 1 }));
      }, 40);
      return () => clearTimeout(t);
    }
    if (deleting && ci === 0) {
      setTypeState({ ri: (ri + 1) % ROLES.length, ci: 0, deleting: false });
    }
  }, [typeState]);

  const heroMouseX = useMotionValue(0);
  const heroMouseY = useMotionValue(0);
  const heroRotateX = useSpring(useTransform(heroMouseY, [-0.5, 0.5], [12, -12]), { stiffness: 150, damping: 20 });
  const heroRotateY = useSpring(useTransform(heroMouseX, [-0.5, 0.5], [-12, 12]), { stiffness: 150, damping: 20 });
  const heroGlare = useTransform(
    [heroMouseX, heroMouseY],
    ([x, y]: number[]) =>
      `radial-gradient(circle at ${((x as number) + 0.5) * 100}% ${((y as number) + 0.5) * 100}%, rgba(255,255,255,0.18) 0%, transparent 55%)`
  );

  return (
    <section id="hero" className="pt-16 relative overflow-hidden isolate">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <NeuralBackground />
        <div className="absolute -top-40 -left-32 w-[28rem] h-[28rem] bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-24 w-[22rem] h-[22rem] bg-violet-400/10 dark:bg-violet-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Photo — 3D tilt card */}
          <motion.div
            className="flex justify-center lg:justify-end order-first lg:order-last"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ perspective: "900px" }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              heroMouseX.set((e.clientX - rect.left) / rect.width - 0.5);
              heroMouseY.set((e.clientY - rect.top) / rect.height - 0.5);
            }}
            onMouseLeave={() => { heroMouseX.set(0); heroMouseY.set(0); }}
          >
            <motion.div className="relative" style={{ rotateX: heroRotateX, rotateY: heroRotateY, transformStyle: "preserve-3d" }}>
              <div className="absolute -inset-6 bg-gradient-to-br from-blue-400/25 via-blue-500/20 to-blue-600/15 dark:from-blue-600/20 dark:via-blue-700/15 dark:to-blue-800/10 rounded-3xl blur-2xl -z-10" />
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/40 dark:to-blue-800/30 rounded-3xl transform rotate-3 -z-[5]" />
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="flex flex-wrap items-center gap-2 mb-6 sm:mb-8 justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/40 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
                <span className="text-xs text-green-700 dark:text-green-400 font-medium">Available for opportunities</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 dark:bg-slate-800/80 border border-gray-200 dark:border-slate-700/50 rounded-full">
                <img src={logoRapidOps} alt="RapidOps" className="w-4 h-4 rounded object-contain" />
                <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">RapidOps Inc.</span>
              </div>
            </div>

            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-3 sm:mb-4 text-center lg:text-left">
              Shivam{" "}
              <span className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 bg-clip-text text-transparent">
                Chudasama
              </span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-500 dark:text-gray-400 font-light mb-4 sm:mb-6 text-center lg:text-left min-h-[1.8em]">
              {displayed}
              <span className="inline-block w-[2px] h-[1em] bg-blue-600 dark:bg-blue-400 ml-0.5 align-middle animate-pulse" />
            </p>

            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6 sm:mb-8 max-w-lg text-center lg:text-left">
              {personalInfo.description}
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-5 justify-center lg:justify-start">
              <MagneticElement>
                <button
                  onClick={() => onScrollToSection("projects")}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-blue-950 text-white font-semibold rounded-xl shadow-lg shadow-blue-800/30 transition-all duration-200 hover:-translate-y-0.5 text-sm"
                >
                  <SafeIcon icon={FaCode} size={13} />
                  View My Projects
                </button>
              </MagneticElement>
              <MagneticElement>
                <button
                  onClick={onContactOpen}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 font-semibold rounded-xl border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700 transition-all duration-200 hover:-translate-y-0.5 text-sm shadow-sm"
                >
                  <SafeIcon icon={MdEmail} size={14} />
                  Let's Talk
                </button>
              </MagneticElement>
            </div>

            <div className="flex items-center gap-3 mb-6 sm:mb-8 justify-center lg:justify-start">
              <MagneticElement strength={0.5}>
                <button onClick={() => window.open(personalInfo.github, "_blank")} title="GitHub" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-900 dark:bg-gray-800 text-white hover:bg-gray-700 transition-all duration-200">
                  <SafeIcon icon={FaGithub} size={15} />
                </button>
              </MagneticElement>
              <MagneticElement strength={0.5}>
                <button onClick={() => window.open(personalInfo.linkedin, "_blank")} title="LinkedIn" className="w-9 h-9 flex items-center justify-center rounded-full bg-[#0A66C2] hover:bg-[#004182] text-white transition-all duration-200">
                  <SafeIcon icon={FaLinkedin} size={15} />
                </button>
              </MagneticElement>
              <MagneticElement strength={0.5}>
                <button onClick={() => { window.location.href = `mailto:${personalInfo.email}`; }} title="Email" className="w-9 h-9 flex items-center justify-center rounded-full bg-rose-500 hover:bg-rose-600 text-white transition-all duration-200">
                  <SafeIcon icon={MdEmail} size={15} />
                </button>
              </MagneticElement>

              <div className="w-px h-7 bg-gray-200 dark:bg-slate-700" />

              <MagneticElement strength={0.5}>
                <button onClick={() => window.open(personalInfo.resumeUrl, "_blank")} title="Download Resume" className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-all duration-200">
                  <SafeIcon icon={FaDownload} size={14} />
                </button>
              </MagneticElement>
              <MagneticElement strength={0.5}>
                <button onClick={() => onScrollToSection("experience")} title="Experience" className="w-9 h-9 flex items-center justify-center rounded-full bg-amber-500 hover:bg-amber-600 text-white transition-all duration-200">
                  <SafeIcon icon={FaBriefcase} size={14} />
                </button>
              </MagneticElement>
              <MagneticElement strength={0.5}>
                <button onClick={() => onScrollToSection("education")} title="Education" className="w-9 h-9 flex items-center justify-center rounded-full bg-violet-500 hover:bg-violet-600 text-white transition-all duration-200">
                  <SafeIcon icon={FaGraduationCap} size={15} />
                </button>
              </MagneticElement>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
