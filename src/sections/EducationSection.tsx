import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt, FaGraduationCap } from "react-icons/fa";
import { SafeIcon } from "../utils/IconWrapper";
import SectionHeader from "../components/SectionHeader";
import { fadeUp } from "../utils/animations";
import logoLDCE from "../assets/logos/ldce.png";
import logoCUShah from "../assets/logos/cushah.png";
import logoGSEB from "../assets/logos/gseb.png";
import type { Education } from "../services/portfolioService";

const EDUCATION_LOGOS: Record<string, string> = {
  "L.D. College of Engineering": logoLDCE,
  "C.U. Shah University": logoCUShah,
  "GSEB Board": logoGSEB,
};

const EDU_STYLES = [
  { border: "border-l-violet-500", badge: "bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300" },
  { border: "border-l-indigo-500", badge: "bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300" },
  { border: "border-l-blue-500",   badge: "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300" },
];

interface Props {
  education: Education[];
}

const EducationSection: React.FC<Props> = ({ education }) => (
  <section id="education" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-indigo-50/40 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950/20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader eyebrow="Academic Background" title="Education" subtitle="My academic foundation in computer engineering" />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
        {education.map((edu, index) => {
          const style = EDU_STYLES[index % EDU_STYLES.length];
          return (
            <motion.div key={index} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="flex flex-col">
              <div className={`bg-white dark:bg-slate-800/70 rounded-2xl border border-gray-100 dark:border-slate-700/50 border-l-4 ${style.border} overflow-hidden hover:shadow-xl dark:hover:shadow-slate-900/40 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full`}>
                <div className="p-4 sm:p-5 flex flex-col flex-1 text-left">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 flex items-center justify-center p-1.5 flex-shrink-0 shadow-sm overflow-hidden">
                      {EDUCATION_LOGOS[edu.institution] ? (
                        <img src={EDUCATION_LOGOS[edu.institution]} alt={edu.institution} className="w-full h-full object-contain" />
                      ) : (
                        <SafeIcon icon={FaGraduationCap} size={20} className="text-indigo-400" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white leading-snug">{edu.degree}</h3>
                      <p className="text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 text-left mt-0.5">{edu.field}</p>
                    </div>
                  </div>

                  <div className="space-y-1.5 mb-3">
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                      <SafeIcon icon={FaCalendarAlt} size={10} className="text-indigo-400 flex-shrink-0" />{edu.duration}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                      <SafeIcon icon={FaMapMarkerAlt} size={10} className="text-rose-400 flex-shrink-0" />{edu.location}
                    </div>
                  </div>

                  <div className="mt-auto pt-2.5 border-t border-gray-100 dark:border-slate-700/40">
                    <p className="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300">{edu.institution}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default EducationSection;
