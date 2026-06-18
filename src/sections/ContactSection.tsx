import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SafeIcon } from "../utils/IconWrapper";
import SectionHeader from "../components/SectionHeader";
import { fadeUp } from "../utils/animations";
import type { PersonalInfo } from "../services/portfolioService";

interface Props {
  personalInfo: PersonalInfo;
  onContactOpen: () => void;
}

const ContactSection: React.FC<Props> = ({ personalInfo, onContactOpen }) => (
  <section id="contact" className="py-12 sm:py-16 lg:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            onClick={onContactOpen}
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-blue-950 text-white font-semibold rounded-xl shadow-lg shadow-blue-800/25 transition-all duration-200 hover:-translate-y-0.5 text-sm sm:text-base"
          >
            <SafeIcon icon={MdEmail} size={16} />
            Send a Message
          </button>
          <button
            onClick={() => window.open(personalInfo.resumeUrl, "_blank")}
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-300 font-semibold rounded-xl border border-gray-200 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-600 transition-all duration-200 hover:-translate-y-0.5 text-sm sm:text-base"
          >
            Download Resume
          </button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 xs:grid-cols-3 gap-3 sm:gap-5">
        {[
          { icon: MdEmail,    label: "Email",    value: personalInfo.email,            action: onContactOpen,                                               color: "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400" },
          { icon: FaLinkedin, label: "LinkedIn", value: "Connect professionally",      action: () => window.open(personalInfo.linkedin, "_blank"),           color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400" },
          { icon: FaGithub,   label: "GitHub",   value: "View source code",            action: () => window.open(personalInfo.github, "_blank"),             color: "bg-gray-100 dark:bg-slate-700/60 text-gray-700 dark:text-gray-300" },
        ].map((c, i) => (
          <button key={i} onClick={c.action} className="flex items-center xs:flex-col xs:items-center gap-3 xs:gap-3 p-4 sm:p-6 bg-gray-50 dark:bg-slate-800/50 rounded-2xl border border-gray-100 dark:border-slate-700/50 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 text-left xs:text-center w-full">
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
);

export default ContactSection;
