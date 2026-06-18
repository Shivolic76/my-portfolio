import React from "react";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SafeIcon } from "../utils/IconWrapper";
import type { PersonalInfo } from "../services/portfolioService";

interface Props {
  personalInfo: PersonalInfo;
  onContactOpen: () => void;
}

const FooterSection: React.FC<Props> = ({ personalInfo, onContactOpen }) => (
  <footer className="border-t border-gray-100 dark:border-slate-800/60 bg-gray-50/50 dark:bg-slate-900/40 py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-5">
        <div className="text-center sm:text-left">
          <p className="text-base font-bold text-gray-900 dark:text-white tracking-tight">
            Shivam<span className="text-indigo-600 dark:text-indigo-400">.</span>
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">Frontend Engineer · React · TypeScript</p>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => window.open(personalInfo.github, "_blank")} title="GitHub" className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-500 dark:text-gray-400 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-200">
            <SafeIcon icon={FaGithub} size={14} />
          </button>
          <button onClick={() => window.open(personalInfo.linkedin, "_blank")} title="LinkedIn" className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-500 dark:text-gray-400 hover:bg-[#0A66C2] hover:text-white transition-all duration-200">
            <SafeIcon icon={FaLinkedin} size={14} />
          </button>
          <button onClick={onContactOpen} title="Email" className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-500 dark:text-gray-400 hover:bg-rose-500 hover:text-white transition-all duration-200">
            <SafeIcon icon={MdEmail} size={15} />
          </button>
        </div>
      </div>

      <div className="h-px bg-gray-100 dark:bg-slate-800/60 mb-4" />

      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400 dark:text-gray-600">
        <p>© {new Date().getFullYear()} Shivam Chudasama. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Built with <SafeIcon icon={FaHeart} size={10} className="text-rose-400 mx-0.5" /> using React, TypeScript & Tailwind CSS
        </p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
