import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { SafeIcon } from "../utils/IconWrapper";
import SectionHeader from "../components/SectionHeader";
import { fadeUp } from "../utils/animations";
import logoRapidOps from "../assets/logos/rapidops.jpg";
import logoIncipient from "../assets/logos/incipient.jpg";
import logoQuantex from "../assets/logos/quantex.jpg";
import type { Experience } from "../services/portfolioService";

const COMPANY_LOGOS: Record<string, string> = {
  "RapidOps Inc.": logoRapidOps,
  "Incipient Infotech": logoIncipient,
  "Quantex Solutions": logoQuantex,
};

const EXP_AVATARS = [
  "from-indigo-500 to-violet-600",
  "from-emerald-500 to-teal-600",
  "from-orange-500 to-red-500",
  "from-blue-500 to-cyan-600",
];

interface Props {
  experiences: Experience[];
}

const ExperienceSection: React.FC<Props> = ({ experiences }) => (
  <section id="experience" className="py-12 sm:py-16 lg:py-24">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader eyebrow="Work History" title="Professional Experience" subtitle="Where I've worked and the impact I've made" />

      <div className="relative">
        <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-blue-900 via-blue-700 to-blue-400 hidden sm:block" />

        <div className="space-y-8 sm:space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp}
              className="relative flex gap-5 sm:gap-8"
            >
              {/* Timeline node */}
              <div className="flex-shrink-0 relative z-10 hidden sm:block">
                {COMPANY_LOGOS[exp.company] ? (
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 flex items-center justify-center shadow-lg ring-4 ring-white dark:ring-slate-950 overflow-hidden p-1.5">
                    <img src={COMPANY_LOGOS[exp.company]} alt={exp.company} className="w-full h-full object-contain" />
                  </div>
                ) : (
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${EXP_AVATARS[index % EXP_AVATARS.length]} flex items-center justify-center shadow-lg ring-4 ring-white dark:ring-slate-950`}>
                    <span className="text-white font-black text-sm leading-none select-none">{exp.company.slice(0, 2).toUpperCase()}</span>
                  </div>
                )}
              </div>

              {/* Card */}
              <div className="flex-1 min-w-0">
                <div className="bg-white dark:bg-slate-800/60 rounded-2xl border border-gray-100 dark:border-slate-700/50 overflow-hidden hover:shadow-xl dark:hover:shadow-slate-900/50 transition-all duration-300 hover:-translate-y-0.5 group">
                  <div className={`h-[3px] bg-gradient-to-r ${EXP_AVATARS[index % EXP_AVATARS.length]}`} />

                  <div className="p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-3 flex-wrap mb-3">
                      {/* Mobile avatar */}
                      <div className="flex items-start gap-3 sm:hidden">
                        {COMPANY_LOGOS[exp.company] ? (
                          <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 flex items-center justify-center shadow-md flex-shrink-0 overflow-hidden p-1">
                            <img src={COMPANY_LOGOS[exp.company]} alt={exp.company} className="w-full h-full object-contain" />
                          </div>
                        ) : (
                          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${EXP_AVATARS[index % EXP_AVATARS.length]} flex items-center justify-center shadow-md flex-shrink-0`}>
                            <span className="text-white font-black text-xs leading-none select-none">{exp.company.slice(0, 2).toUpperCase()}</span>
                          </div>
                        )}
                        <div className="flex flex-col items-start text-left">
                          <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-tight">{exp.title}</h3>
                          <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5">{exp.company}</p>
                        </div>
                      </div>
                      <div className="hidden sm:block">
                        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-white leading-tight text-left">{exp.title}</h3>
                        <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5 text-left">{exp.company}</p>
                      </div>
                      <span className="px-2.5 py-1 text-xs font-bold bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full whitespace-nowrap flex-shrink-0">{exp.type}</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 sm:gap-5 mb-4">
                      <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-slate-700/40 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-slate-600/40">
                        <SafeIcon icon={FaCalendarAlt} size={11} className="text-indigo-400" />{exp.duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-slate-700/40 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-slate-600/40">
                        <SafeIcon icon={FaMapMarkerAlt} size={11} className="text-rose-400" />{exp.location}
                      </span>
                    </div>

                    <p className="text-sm text-gray-500 text-left dark:text-gray-400 leading-relaxed">{exp.description}</p>
                  </div>

                  <div className="mx-5 sm:mx-6 h-px bg-gray-100 dark:bg-slate-700/40" />

                  <div className="p-5 sm:p-6 pt-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3 text-left">Key Highlights</p>
                    <ul className="space-y-3 mb-5 text-left">
                      {exp.achievements.map((a, i) => (
                        <li key={i} className="flex items-start gap-3 text-left">
                          <div className="w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0 mt-[7px]" />
                          <span className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{a}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-left font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((t, i) => (
                        <span key={i} className="px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-slate-700/50 rounded-lg border border-gray-200 dark:border-slate-600/40 hover:border-indigo-300 dark:hover:border-indigo-600 transition-colors">{t}</span>
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
);

export default ExperienceSection;
