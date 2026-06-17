import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../theme/themeHooks";
import { FaDownload, FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { SafeIcon } from "../utils/IconWrapper";

const NAV_LINKS = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
];

interface NavbarProps {
  resumeUrl: string;
}

const Navbar: React.FC<NavbarProps> = ({ resumeUrl }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ["hero", "about", "skills", "experience", "projects", "testimonials", "education", "certifications", "contact"];
      let current = "hero";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= 80) current = section;
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
    }, 50);
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Main bar */}
      <div className={`transition-all duration-500 ${scrolled ? "pt-3 pb-0" : "pt-0 pb-0"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between h-14 px-4 sm:px-5 transition-all duration-500 ${
              scrolled
                ? "bg-white/75 dark:bg-slate-900/75 backdrop-blur-2xl rounded-2xl border border-gray-200/50 dark:border-slate-700/40 shadow-lg shadow-black/[0.06] dark:shadow-black/30"
                : "bg-transparent border border-transparent h-16"
            }`}
          >
            {/* Logo */}
            <button
              onClick={() => scrollTo("hero")}
              className="font-bold text-xl text-gray-900 dark:text-white tracking-tight hover:opacity-75 transition-opacity flex-shrink-0"
            >
              Shivam<span className="text-blue-800 dark:text-blue-500">.</span>
            </button>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className={`relative flex flex-col items-center gap-1 px-3.5 pt-2 pb-1.5 text-sm transition-all duration-200 ${
                      isActive
                        ? "font-semibold text-blue-800 dark:text-blue-400"
                        : "font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    {link.label}
                    <span className="h-0.5 w-full rounded-full overflow-hidden">
                      {isActive && (
                        <motion.span
                          layoutId="underline"
                          className="block h-full w-full bg-gradient-to-r from-blue-700 to-blue-500 rounded-full"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                        />
                      )}
                    </span>
                  </button>
                );
              })}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <button
                onClick={toggleTheme}
                className="w-9 h-9 flex items-center justify-center rounded-xl text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/80 dark:hover:bg-slate-800 transition-all"
                aria-label="Toggle theme"
              >
                <SafeIcon icon={isDark ? FaSun : FaMoon} size={15} />
              </button>

              <button
                onClick={() => window.open(resumeUrl, "_blank")}
                className="hidden sm:flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-blue-950 text-white text-sm font-semibold rounded-xl transition-all shadow-sm shadow-blue-800/25 hover:-translate-y-px"
              >
                <SafeIcon icon={FaDownload} size={11} />
                Resume
              </button>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={mobileOpen ? "close" : "open"}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <SafeIcon icon={mobileOpen ? FaTimes : FaBars} size={17} />
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu — floating card */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="md:hidden mx-4 mt-2 rounded-2xl overflow-hidden bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl border border-gray-200/60 dark:border-slate-700/50 shadow-xl shadow-black/10 dark:shadow-black/40"
          >
            <div className="px-3 py-3 space-y-0.5">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 ${
                    activeSection === link.id
                      ? "bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800/70"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2 pb-0.5 px-1">
                <button
                  onClick={() => { window.open(resumeUrl, "_blank"); setMobileOpen(false); }}
                  className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-blue-950 text-white text-sm font-semibold rounded-xl transition-all shadow-sm shadow-blue-800/30"
                >
                  <SafeIcon icon={FaDownload} size={12} />
                  Download Resume
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
