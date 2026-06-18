import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaTrophy, FaCheckCircle } from "react-icons/fa";
import { SafeIcon } from "../utils/IconWrapper";
import SectionHeader from "../components/SectionHeader";
import { fadeUp } from "../utils/animations";
import type { About } from "../services/portfolioService";

interface Props {
  about: About;
}

const AboutSection: React.FC<Props> = ({ about }) => (
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
          <p className="text-sm text-left sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4 sm:mb-5">{about.professionalJourney}</p>
          <p className="text-sm text-left sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">{about.passion}</p>
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
            {about.achievements.map((a, i) => (
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
);

export default AboutSection;
