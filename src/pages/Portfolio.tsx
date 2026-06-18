import React, { useState, useEffect, lazy, Suspense } from "react";
import { Modal, Form, Input, message, Spin, Alert } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp, FaPaperPlane, FaChevronDown } from "react-icons/fa";
import { MdEmail, MdClose } from "react-icons/md";
import { SafeIcon } from "../utils/IconWrapper";
import { usePortfolioData } from "../hooks/usePortfolioData";
import useGestureNavigation from "../hooks/useGestureNavigation";
import Navbar from "../components/Navbar";
import HeroSection from "../sections/HeroSection";
import StatsSection from "../sections/StatsSection";
import type { Blog } from "../services/portfolioService";

// Lazy-loaded below-the-fold sections
const AboutSection         = lazy(() => import("../sections/AboutSection"));
const SkillsSection        = lazy(() => import("../sections/SkillsSection"));
const ExperienceSection    = lazy(() => import("../sections/ExperienceSection"));
const ProjectsSection      = lazy(() => import("../sections/ProjectsSection"));
const TestimonialsSection  = lazy(() => import("../sections/TestimonialsSection"));
const EducationSection     = lazy(() => import("../sections/EducationSection"));
const CertificationsSection = lazy(() => import("../sections/CertificationsSection"));
const BlogsSection         = lazy(() => import("../sections/BlogsSection"));
const ContactSection       = lazy(() => import("../sections/ContactSection"));
const FooterSection        = lazy(() => import("../sections/FooterSection"));

const Portfolio: React.FC = () => {
  const { data: portfolioData, loading, error } = usePortfolioData();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [form] = Form.useForm();

  useGestureNavigation();

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? window.scrollY / total : 0);
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const style = document.createElement("style");
    style.textContent = "html,body{scrollbar-width:none;}html::-webkit-scrollbar,body::-webkit-scrollbar{display:none;}";
    document.head.appendChild(style);

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.head.removeChild(style);
    };
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950">
        <Spin size="large" />
      </div>
    );
  }

  if (error || !portfolioData) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8 bg-white dark:bg-slate-950">
        <Alert message="Error Loading Portfolio" description={error || "Failed to load portfolio data."} type="error" showIcon />
      </div>
    );
  }

  const { personalInfo } = portfolioData;

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactSubmit = (values: { name: string; email: string; subject: string; message: string }) => {
    const body = `Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`;
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl, "_blank");
    message.success("Opening your email client...");
    form.resetFields();
    setIsContactModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-gray-900 dark:text-white overflow-x-hidden">
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400 z-[9999]"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <Navbar resumeUrl={personalInfo.resumeUrl} />

      {/* Eagerly loaded — above the fold */}
      <HeroSection
        personalInfo={personalInfo}
        onContactOpen={() => setIsContactModalOpen(true)}
        onScrollToSection={scrollToSection}
      />
      <StatsSection statistics={portfolioData.statistics} />

      {/* Scroll indicator */}
      <motion.div
        className="hidden sm:flex flex-col items-center gap-1.5 cursor-pointer pt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        onClick={() => scrollToSection("about")}
      >
        <span className="text-[11px] font-medium text-gray-400 dark:text-gray-600 tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}>
          <SafeIcon icon={FaChevronDown} size={13} className="text-gray-400 dark:text-gray-600" />
        </motion.div>
      </motion.div>

      {/* Lazy-loaded — below the fold */}
      <Suspense fallback={null}>
        <AboutSection about={portfolioData.about} />
      </Suspense>
      <Suspense fallback={null}>
        <SkillsSection />
      </Suspense>
      <Suspense fallback={null}>
        <ExperienceSection experiences={portfolioData.experiences} />
      </Suspense>
      <Suspense fallback={null}>
        <ProjectsSection projects={portfolioData.projects} />
      </Suspense>
      <Suspense fallback={null}>
        <TestimonialsSection testimonials={portfolioData.testimonials} />
      </Suspense>
      <Suspense fallback={null}>
        <EducationSection education={portfolioData.education} />
      </Suspense>
      <Suspense fallback={null}>
        <CertificationsSection certifications={portfolioData.certifications} />
      </Suspense>
      <Suspense fallback={null}>
        <BlogsSection
          blogs={portfolioData.blogs}
          personalInfo={personalInfo}
          onBlogOpen={(blog) => { setSelectedBlog(blog); setIsBlogModalOpen(true); }}
        />
      </Suspense>
      <Suspense fallback={null}>
        <ContactSection
          personalInfo={personalInfo}
          onContactOpen={() => setIsContactModalOpen(true)}
        />
      </Suspense>
      <Suspense fallback={null}>
        <FooterSection
          personalInfo={personalInfo}
          onContactOpen={() => setIsContactModalOpen(true)}
        />
      </Suspense>

      {/* Back to top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.22 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-50 w-11 h-11 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-700 to-blue-900 hover:from-blue-800 hover:to-blue-950 text-white shadow-lg shadow-blue-800/30 transition-all duration-200"
            aria-label="Back to top"
          >
            <SafeIcon icon={FaArrowUp} size={14} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Contact Modal */}
      <Modal
        open={isContactModalOpen}
        onCancel={() => setIsContactModalOpen(false)}
        footer={null}
        title={null}
        closable={false}
        width="min(560px, 95vw)"
        className="portfolio-modal"
        centered
        styles={{ body: { padding: 0 } }}
      >
        <div className="relative bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 px-6 pt-7 pb-6 overflow-hidden">
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full pointer-events-none" />
          <div className="absolute -bottom-10 -left-8 w-40 h-40 bg-white/5 rounded-full pointer-events-none" />
          <button
            onClick={() => setIsContactModalOpen(false)}
            className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-lg bg-white/15 hover:bg-white/30 text-white/80 hover:text-white transition-all duration-200 z-10"
          >
            <SafeIcon icon={MdClose} size={18} />
          </button>
          <div className="relative flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
              <SafeIcon icon={FaPaperPlane} size={18} className="text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white leading-tight">Get In Touch</h3>
              <p className="text-xs text-white/70 mt-0.5">I'll respond within 24 hours</p>
            </div>
          </div>
        </div>

        <div className="px-6 pt-5 pb-6">
          <Form form={form} layout="vertical" onFinish={handleContactSubmit}>
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-x-4">
              <Form.Item name="name" label="Full Name" rules={[{ required: true, message: "Please enter your name" }]}>
                <Input size="large" placeholder="John Doe" />
              </Form.Item>
              <Form.Item name="email" label="Email" rules={[{ required: true, type: "email", message: "Valid email required" }]}>
                <Input size="large" placeholder="john@example.com" />
              </Form.Item>
            </div>
            <Form.Item name="subject" label="Subject" rules={[{ required: true, message: "Please add a subject" }]}>
              <Input size="large" placeholder="Project discussion, collaboration..." />
            </Form.Item>
            <Form.Item name="message" label="Message" rules={[{ required: true, message: "Please write a message" }]}>
              <Input.TextArea rows={4} placeholder="Tell me about your project, timeline, and requirements..." size="large" style={{ resize: "none" }} />
            </Form.Item>
            <Form.Item className="mb-0">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 sm:py-3.5 bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-blue-950 text-white font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-blue-800/30 text-sm sm:text-base"
              >
                <SafeIcon icon={FaPaperPlane} size={13} />
                Send Message
              </button>
            </Form.Item>
          </Form>

          <div className="mt-5 pt-4 border-t border-gray-100 dark:border-slate-700/50">
            <p className="text-[10px] font-bold tracking-widest uppercase text-center text-gray-400 dark:text-gray-600 mb-3">Or reach out directly</p>
            <div className="flex flex-col xs:flex-row items-stretch xs:items-center justify-center gap-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800/50 hover:opacity-75 no-underline rounded-lg transition-opacity duration-200 truncate"
              >
                <SafeIcon icon={MdEmail} size={13} className="flex-shrink-0" />
                <span className="truncate">{personalInfo.email}</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#0A66C2] dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/50 hover:opacity-75 no-underline rounded-lg transition-opacity duration-200 flex-shrink-0"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </Modal>

      {/* Blog Reading Modal */}
      <Modal
        open={isBlogModalOpen}
        onCancel={() => { setIsBlogModalOpen(false); setSelectedBlog(null); }}
        footer={null}
        title={null}
        closable={false}
        width="min(760px, 95vw)"
        className="portfolio-modal"
        centered
        styles={{ body: { padding: 0 } }}
      >
        {selectedBlog && (
          <div>
            <div className="relative bg-gradient-to-br from-indigo-500 to-violet-500 px-6 pt-7 pb-6 overflow-hidden">
              <div className="absolute -top-10 -right-10 w-36 h-36 bg-white/10 rounded-full pointer-events-none" />
              <div className="absolute -bottom-12 -left-10 w-44 h-44 bg-white/5 rounded-full pointer-events-none" />
              <button
                onClick={() => { setIsBlogModalOpen(false); setSelectedBlog(null); }}
                className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-lg bg-white/15 hover:bg-white/30 text-white/80 hover:text-white transition-all duration-200 z-10"
              >
                <SafeIcon icon={MdClose} size={18} />
              </button>
              <div className="relative flex flex-wrap gap-1.5 mb-3">
                {selectedBlog.tags.map((tag, i) => (
                  <span key={i} className="px-2.5 py-1 bg-white/20 border border-white/30 rounded-lg text-xs font-medium text-white">{tag}</span>
                ))}
              </div>
              <h2 className="relative text-base sm:text-xl font-bold text-white leading-snug mb-3">{selectedBlog.title}</h2>
              <div className="relative flex items-center gap-4 text-white/65 text-xs">
                <span>{new Date(selectedBlog.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                <span>{selectedBlog.readTime}</span>
                <span>By {selectedBlog.author}</span>
              </div>
            </div>
            <div
              className="px-6 py-6 max-h-[60vh] overflow-y-auto text-sm text-gray-700 dark:text-gray-300 blog-content"
              dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
            />
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Portfolio;
