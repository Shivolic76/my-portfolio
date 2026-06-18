import React, { useState, useEffect, useRef, useCallback } from "react";
import { FaCode, FaBriefcase, FaUsers, FaCodeBranch } from "react-icons/fa";
import { SafeIcon } from "../utils/IconWrapper";
import type { Statistics } from "../services/portfolioService";

interface Props {
  statistics: Statistics;
}

const StatsSection: React.FC<Props> = ({ statistics }) => {
  const [animatedStats, setAnimatedStats] = useState({ projects: 0, experience: 0, clients: 0, commits: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const animateStats = useCallback(() => {
    if (hasAnimated) return;
    setHasAnimated(true);
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    Object.keys(statistics).forEach((key) => {
      const target = statistics[key as keyof typeof statistics];
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
  }, [statistics, hasAnimated]);

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

  const items = [
    { value: animatedStats.projects,  suffix: "+", label: "Projects Completed", color: "text-indigo-600 dark:text-indigo-400",  icon: FaCode,       iconBg: "bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400"  },
    { value: animatedStats.experience, suffix: "+", label: "Years Experience",   color: "text-emerald-600 dark:text-emerald-400", icon: FaBriefcase,  iconBg: "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400" },
    { value: animatedStats.clients,    suffix: "+", label: "Happy Clients",      color: "text-violet-600 dark:text-violet-400",  icon: FaUsers,      iconBg: "bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-400"    },
    { value: animatedStats.commits,    suffix: "+", label: "Code Commits",       color: "text-orange-600 dark:text-orange-400",  icon: FaCodeBranch, iconBg: "bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-400"   },
  ];

  return (
    <section id="stats" ref={statsRef} className="py-6 sm:py-8 border-t border-b border-gray-100 dark:border-slate-800/60 bg-gray-50/80 dark:bg-slate-900/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">
          {items.map((stat, i) => (
            <div key={i} className="text-center flex flex-col items-center group cursor-default">
              <div className={`w-11 h-11 sm:w-13 sm:h-13 rounded-xl ${stat.iconBg} flex items-center justify-center mb-3 transition-transform duration-200 group-hover:scale-110`}>
                <SafeIcon icon={stat.icon} size={18} />
              </div>
              <div className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 ${stat.color}`}>
                {stat.value}{stat.suffix}
              </div>
              <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
