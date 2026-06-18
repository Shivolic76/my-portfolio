import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaStar, FaGithub, FaExternalLinkAlt, FaTrophy, FaGooglePlay } from "react-icons/fa";
import { SafeIcon } from "../utils/IconWrapper";
import SectionHeader from "../components/SectionHeader";
import { fadeUp } from "../utils/animations";
import type { Project } from "../services/portfolioService";

const PROJECT_GRADIENTS = [
  "from-blue-500 to-cyan-500",
  "from-emerald-500 to-teal-500",
  "from-purple-500 to-violet-500",
  "from-orange-500 to-red-500",
  "from-pink-500 to-rose-500",
];

interface Props {
  projects: Project[];
}

const ProjectsSection: React.FC<Props> = ({ projects }) => {
  const [projectIndex, setProjectIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

  useEffect(() => {
    const update = () => setCardsPerView(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const total = projects.length;
  const isMobile = cardsPerView === 1;
  const maxIndex = total - 1;

  const projectCard = (project: Project, index: number) => (
    <div className={`group bg-white dark:bg-slate-800/60 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col h-full ${
      project.featured
        ? "border-2 border-indigo-200 dark:border-indigo-700/60 hover:shadow-xl hover:shadow-indigo-100/60 dark:hover:shadow-indigo-900/40 shadow-md shadow-indigo-100/40 dark:shadow-indigo-900/20"
        : "border border-gray-100 dark:border-slate-700/50 hover:shadow-xl dark:hover:shadow-slate-900/60"
    }`}>
      <div className={`${project.featured ? "h-2" : "h-1.5"} bg-gradient-to-r ${PROJECT_GRADIENTS[index % PROJECT_GRADIENTS.length]}`} />
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">{project.category}</span>
            {project.featured && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-indigo-50 dark:bg-indigo-900/40 border border-indigo-200 dark:border-indigo-700/50 rounded-full text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">
                <SafeIcon icon={FaStar} size={7} />Featured
              </span>
            )}
          </div>
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold uppercase tracking-wide rounded-full flex-shrink-0 ${
            project.status === "Live" || project.status === "Completed"
              ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400"
              : "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400"
          }`}>
            {project.status === "Live" && <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />}
            {project.status}
          </span>
        </div>
        <div className="flex items-start justify-between gap-2 mb-2.5 sm:mb-3">
          <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 dark:text-white leading-snug">{project.title}</h3>
          <div className="flex items-center gap-1.5 flex-shrink-0 mt-0.5">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg bg-gray-100 dark:bg-slate-700/60 text-gray-500 dark:text-gray-400 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-200">
                <SafeIcon icon={FaGithub} size={12} />
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-200">
                <SafeIcon icon={FaExternalLinkAlt} size={10} />
              </a>
            )}
            {project.playStore && (
              <a href={project.playStore} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-all duration-200">
                <SafeIcon icon={FaGooglePlay} size={10} />
              </a>
            )}
          </div>
        </div>
        <p className="text-sm text-left text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3 mb-4">{project.description}</p>
        <div className="flex-1" />
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

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-24 bg-gray-50/80 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="What I've Built" title="Featured Projects" subtitle="A selection of my best work — real products, real impact" />

        {isMobile ? (
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
                  if (info.offset.x < -50 || info.velocity.x < -600) setProjectIndex((i) => Math.min(i + 1, maxIndex));
                  else if (info.offset.x > 50 || info.velocity.x > 600) setProjectIndex((i) => Math.max(i - 1, 0));
                }}
              >
                {projects.map((project, index) => (
                  <div key={index} style={{ width: `${100 / total}%` }} className="px-3">{projectCard(project, index)}</div>
                ))}
              </motion.div>
            </div>
            <div className="flex items-center justify-center gap-2 mt-6">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button key={i} onClick={() => setProjectIndex(i)} className={`rounded-full transition-all duration-300 ${i === projectIndex ? "w-6 h-2.5 bg-indigo-600" : "w-2.5 h-2.5 bg-gray-300 dark:bg-slate-600 hover:bg-indigo-400"}`} />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {projects.map((project, index) => (
              <motion.div key={index} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="flex flex-col">
                {projectCard(project, index)}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
