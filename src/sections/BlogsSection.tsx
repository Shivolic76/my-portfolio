import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaLinkedin, FaChevronLeft, FaChevronRight, FaArrowRight } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { SafeIcon } from "../utils/IconWrapper";
import SectionHeader from "../components/SectionHeader";
import { fadeUp } from "../utils/animations";
import type { Blog, PersonalInfo } from "../services/portfolioService";

const BLOG_GRADIENTS = [
  "from-indigo-500 to-violet-500",
  "from-emerald-500 to-cyan-500",
  "from-orange-500 to-pink-500",
];

interface Props {
  blogs: Blog[];
  personalInfo: PersonalInfo;
  onBlogOpen: (blog: Blog) => void;
}

const BlogsSection: React.FC<Props> = ({ blogs, personalInfo, onBlogOpen }) => {
  const blogScrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="blogs" className="py-12 sm:py-16 lg:py-24 bg-gray-50/80 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Thoughts & Insights" title="Latest Articles" subtitle="Frontend tips, career stories, and engineering insights — straight from experience" />

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-4 w-12 bg-gradient-to-r from-gray-50/90 dark:from-slate-900/80 to-transparent z-10 pointer-events-none rounded-l-2xl" />
          <button
            onClick={() => blogScrollRef.current?.scrollBy({ left: -374, behavior: "smooth" })}
            aria-label="Scroll blogs left"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-md text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-200 hover:scale-110"
          >
            <SafeIcon icon={FaChevronLeft} size={11} />
          </button>

          <div ref={blogScrollRef} className="blog-scroll flex gap-4 overflow-x-auto scroll-smooth pb-4 px-10">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="group flex-none w-[320px] sm:w-[350px] bg-white dark:bg-slate-800/60 rounded-2xl border border-gray-100 dark:border-slate-700/50 overflow-hidden hover:shadow-xl dark:hover:shadow-slate-900/60 transition-all duration-300 hover:-translate-y-1 flex flex-col cursor-pointer"
                onClick={() => onBlogOpen(blog)}
              >
                <div className={`h-[3px] flex-none bg-gradient-to-r ${BLOG_GRADIENTS[index % BLOG_GRADIENTS.length]}`} />
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {blog.tags.slice(0, 2).map((tag, i) => (
                      <span key={i} className="px-2 py-0.5 text-xs font-semibold bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 rounded-md border border-indigo-100 dark:border-indigo-800/40">{tag}</span>
                    ))}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white mb-2 leading-snug line-clamp-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{blog.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3 mb-4 text-left">{blog.excerpt}</p>
                  <div className="flex-1" />
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-slate-700/40">
                    <div className="flex items-center gap-2.5 text-xs text-gray-400 dark:text-gray-500">
                      <span className="flex items-center gap-1">
                        <SafeIcon icon={FaCalendarAlt} size={9} />
                        {new Date(blog.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                      </span>
                      <span className="flex items-center gap-1">
                        <SafeIcon icon={FaClock} size={9} />{blog.readTime}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 dark:text-indigo-400 group-hover:gap-2 transition-all duration-200">
                      Read <SafeIcon icon={FaArrowRight} size={8} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute right-0 top-0 bottom-4 w-12 bg-gradient-to-l from-gray-50/90 dark:from-slate-900/80 to-transparent z-10 pointer-events-none rounded-r-2xl" />
          <button
            onClick={() => blogScrollRef.current?.scrollBy({ left: 374, behavior: "smooth" })}
            aria-label="Scroll blogs right"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-md text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-200 hover:scale-110"
          >
            <SafeIcon icon={FaChevronRight} size={11} />
          </button>
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mt-8 sm:mt-10 flex justify-center">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-4 px-6 py-4 bg-white dark:bg-slate-800/70 rounded-2xl border border-gray-100 dark:border-slate-700/50 shadow-sm hover:shadow-lg dark:hover:shadow-slate-900/50 hover:border-indigo-200 dark:hover:border-indigo-700/60 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/0 via-indigo-50/60 to-indigo-50/0 dark:from-indigo-900/0 dark:via-indigo-900/20 dark:to-indigo-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex-none w-9 h-9 flex items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-900/40 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800/60 transition-colors duration-200">
              <SafeIcon icon={FaLinkedin} size={16} className="text-indigo-600 dark:text-indigo-400" />
            </div>
            <div className="relative text-left">
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-100 leading-tight">More articles coming soon</p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">Follow me on LinkedIn to stay updated</p>
            </div>
            <div className="relative ml-2 flex-none text-indigo-400 dark:text-indigo-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:translate-x-1 transition-all duration-200">
              <SafeIcon icon={FaArrowRight} size={12} />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogsSection;
