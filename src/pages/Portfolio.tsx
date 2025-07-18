import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Typography,
  Card,
  Tag,
  Button,
  Row,
  Col,
  Progress,
  Avatar,
  Statistic,
  Rate,
  Modal,
  Form,
  Input,
  message,
  Spin,
  Alert,
} from "antd";
import { motion } from "framer-motion";
import { usePortfolioData } from "../hooks/usePortfolioData";
import type { Blog, Skill } from "../services/portfolioService";

// React Icons imports
import {
  FaReact,
  FaGithub,
  FaLinkedin,
  FaUser,
  FaDownload,
  FaTrophy,
  FaEye,
  FaCode,
  FaMobile,
  FaDesktop,
  FaGlobe,
  FaDatabase,
  FaCloud,
  FaShieldAlt,
  FaPaperPlane,
  FaFileAlt,
  FaBolt,
  FaTools,
  FaCheckCircle,
  FaCalendarAlt,
  FaBook,
  FaHeart,
  FaNodeJs,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { SiTypescript, SiNextdotjs, SiAntdesign } from "react-icons/si";

import {
  MdEmail,
  MdWork,
  MdDashboard,
  MdShoppingCart,
  MdVideoLibrary,
  MdLibraryBooks,
} from "react-icons/md";

import { SafeIcon } from "../utils/IconWrapper";

const { Title, Text, Paragraph } = Typography;
import profileImg from "../assets/shivam-profile.jpg";

const Portfolio: React.FC = () => {
  const { data: portfolioData, loading, error } = usePortfolioData();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [animatedStats, setAnimatedStats] = useState({
    projects: 0,
    experience: 0,
    clients: 0,
    commits: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [form] = Form.useForm();
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  // Animate statistics counters
  const animateStats = useCallback(() => {
    if (!portfolioData?.statistics || hasAnimated) return;

    setHasAnimated(true);
    const targets = portfolioData.statistics;
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    const timers: NodeJS.Timeout[] = [];

    Object.keys(targets).forEach((key) => {
      const target = targets[key as keyof typeof targets];
      let current = 0;
      const increment = target / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
          // Remove timer from array
          const index = timers.indexOf(timer);
          if (index > -1) {
            timers.splice(index, 1);
          }
          // Ensure final value is exactly the target
          setAnimatedStats((prev) => ({
            ...prev,
            [key]: target,
          }));
        } else {
          setAnimatedStats((prev) => ({
            ...prev,
            [key]: Math.floor(current),
          }));
        }
      }, stepTime);

      timers.push(timer);
    });

    // Cleanup function to clear all timers if component unmounts
    return () => {
      timers.forEach((timer) => clearInterval(timer));
    };
  }, [portfolioData?.statistics, hasAnimated]);

  // Scroll-based animations - moved before conditional returns
  useEffect(() => {
    const handleScroll = () => {
      // Animate stats when in view (only once)
      if (statsRef.current && !hasAnimated) {
        const rect = statsRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          animateStats();
        }
      }
    };

    // Check if stats are already in view on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [animateStats, hasAnimated]);

  // Show loading spinner while data is being fetched
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spin size="large" />
      </div>
    );
  }

  // Show error message if data fetch failed
  if (error || !portfolioData) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <Alert
          message="Error Loading Portfolio"
          description={
            error || "Failed to load portfolio data. Please try again later."
          }
          type="error"
          showIcon
        />
      </div>
    );
  }

  // Extract data from portfolioData
  const { personalInfo } = portfolioData;

  // Animation variants (only for Hero Section)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const fadeInUpVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  // Icon mapping function to convert string icons to React components
  const getIconComponent = (iconName: string): React.ReactNode => {
    const iconMap: { [key: string]: React.ReactNode } = {
      CodeOutlined: <SafeIcon icon={FaCode} size={24} />,
      RocketOutlined: <SafeIcon icon={SiNextdotjs} size={24} />,
      ThunderboltOutlined: <SafeIcon icon={FaBolt} size={24} />,
      DesktopOutlined: <SafeIcon icon={FaDesktop} size={24} />,
      BulbOutlined: <SafeIcon icon={FaReact} size={24} />,
      DatabaseOutlined: <SafeIcon icon={FaDatabase} size={24} />,
      ToolOutlined: <SafeIcon icon={FaTools} size={24} />,
      CrownOutlined: <SafeIcon icon={SiAntdesign} size={24} />,
      SafetyOutlined: <SafeIcon icon={FaShieldAlt} size={24} />,
      GlobalOutlined: <SafeIcon icon={FaGlobe} size={24} />,
      ApiOutlined: <SafeIcon icon={FaCloud} size={24} />,
      LaptopOutlined: <SafeIcon icon={FaCode} size={24} />,
      CloudOutlined: <SafeIcon icon={FaNodeJs} size={24} />,
      ExperimentOutlined: <SafeIcon icon={FaTools} size={24} />,
      MobileOutlined: <SafeIcon icon={FaMobile} size={24} />,
      AwardOutlined: <SafeIcon icon={FaReact} size={24} />,
      BookOutlined: <SafeIcon icon={SiTypescript} size={24} />,
    };
    return iconMap[iconName] || <SafeIcon icon={FaCode} size={24} />;
  };

  // Use skill categories directly from JSON data
  const skillCategories = portfolioData?.skillCategories || {
    frontend: [],
    libraries: [],
    tools: [],
    concepts: [],
  };

  // Get experiences from JSON data
  const experiences = portfolioData?.experiences || [];

  // Get projects from JSON data
  const projects = portfolioData?.projects || [];

  // Get testimonials from JSON data
  const testimonials = portfolioData?.testimonials || [];

  // Get certifications from JSON data and add icons
  const staticCertifications = portfolioData?.certifications
    ? portfolioData.certifications.map((cert) => ({
        ...cert,
        icon: getIconComponent(cert.icon),
      }))
    : [];

  // Get blog posts from JSON data
  const blogPosts = portfolioData?.blogs || [];

  const handleContactSubmit = async () => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      message.success("Message sent successfully! I'll get back to you soon.");
      form.resetFields();
      setIsContactModalOpen(false);
    } catch {
      message.error("Failed to send message. Please try again.");
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBlogClick = (blog: Blog) => {
    setSelectedBlog(blog);
    setIsBlogModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden portfolio-main-bg">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 dark:opacity-10 animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-400 to-red-500 rounded-full opacity-20 dark:opacity-10 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-10 dark:opacity-5 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-4 sm:py-8 lg:py-12 relative z-10">
        {/* Hero Section */}
        <motion.section
          id="hero"
          ref={heroRef}
          className="min-h-screen flex items-center justify-center relative px-2 sm:px-4 lg:px-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            className="text-center max-w-6xl mx-auto w-full"
            variants={itemVariants}
          >
            <motion.div
              className="mb-6 sm:mb-8 lg:mb-12 relative flex justify-center items-center"
              variants={fadeInUpVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Animated background glow - Responsive sizes */}
              <motion.div
                className="absolute w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full opacity-15 blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.15, 0.25, 0.15],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Secondary glow effect - Responsive sizes */}
              <motion.div
                className="absolute w-52 h-52 sm:w-68 sm:h-68 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full opacity-10 blur-2xl"
                animate={{
                  scale: [1.1, 1, 1.1],
                  opacity: [0.1, 0.2, 0.1],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Elegant Profile Image Container - Enhanced Responsive */}
              <motion.div
                className="relative z-10"
                initial={{ scale: 0, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
              >
                <div className="relative">
                  {/* Subtle background elements - Responsive */}
                  <div className="absolute -inset-4 sm:-inset-6 md:-inset-8 z-0">
                    {/* Light primary background */}
                    <div
                      className="w-full h-full rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] transform rotate-3"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(168, 85, 247, 0.06) 50%, rgba(236, 72, 153, 0.04) 100%)",
                        filter: "blur(0.5px)",
                      }}
                    ></div>

                    {/* Subtle accent shape */}
                    <div
                      className="absolute top-2 left-2 sm:top-4 sm:left-4 w-4/5 h-4/5 rounded-xl sm:rounded-2xl md:rounded-[2.5rem] transform -rotate-6"
                      style={{
                        background:
                          "linear-gradient(45deg, rgba(59, 130, 246, 0.05) 0%, rgba(147, 51, 234, 0.03) 100%)",
                        opacity: 0.7,
                      }}
                    ></div>
                  </div>

                  {/* Main image container - Enhanced Responsive */}
                  <div className="relative z-10 mt-4 mb-4 sm:mt-6 sm:mb-6 md:mt-8 md:mb-8">
                    {/* Clean border with subtle gradient - Responsive sizes */}
                    <div className="w-40 h-40 xs:w-48 xs:h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-xl sm:rounded-2xl p-0.5 bg-gradient-to-br from-slate-200 via-gray-100 to-slate-200 shadow-xl mx-auto">
                      {/* Inner container */}
                      <div className="w-full h-full rounded-xl sm:rounded-2xl bg-white p-1 sm:p-2 shadow-inner">
                        {/* Profile image */}
                        <img
                          // src={portfolioData?.personalInfo?.avatar}
                          src={profileImg}
                          alt={portfolioData?.personalInfo?.name}
                          className="w-full h-full rounded-lg sm:rounded-xl object-cover shadow-sm"
                          style={{
                            objectPosition: "center top",
                            backgroundColor: "#f8fafc",
                          }}
                        />
                      </div>
                    </div>

                    {/* Minimal decorative dots - Responsive */}
                    <div
                      className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full opacity-60 animate-pulse"
                      style={{ animationDuration: "2s" }}
                    ></div>
                    <div
                      className="absolute -bottom-0.5 -left-0.5 sm:-bottom-1 sm:-left-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full opacity-50 animate-pulse"
                      style={{ animationDelay: "1s", animationDuration: "2s" }}
                    ></div>
                  </div>

                  {/* Very subtle glow */}
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-100 via-purple-50 to-pink-50 opacity-30 blur-xl z-0"></div>
                </div>
              </motion.div>

              {/* Online status indicator - Enhanced Responsive */}
              <motion.div
                className="absolute top-2 right-2 xs:top-3 xs:right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 lg:top-8 lg:right-8 w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-green-500 rounded-full border-2 sm:border-3 md:border-4 border-white shadow-lg z-20"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5, ease: "easeOut" }}
              >
                <motion.div
                  className="absolute inset-0 bg-green-500 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [1, 0.7, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </motion.div>

            <motion.div className="mb-4 sm:mb-6" variants={itemVariants}>
              <motion.div
                className="flex items-center justify-center mb-3 sm:mb-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <div className="cartoon-wave text-2xl sm:text-3xl md:text-4xl mr-2 sm:mr-3">
                  👋
                </div>
                <Text className="text-base sm:text-lg md:text-xl font-semibold text-blue-600 dark:text-blue-400">
                  Hello, I'm
                </Text>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <Title
                  level={1}
                  className="!text-3xl xs:!text-4xl sm:!text-5xl md:!text-6xl lg:!text-7xl xl:!text-8xl font-bold mb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent gradient-text typewriter px-2"
                  style={{ lineHeight: "1.1" }}
                >
                  {personalInfo.name}
                </Title>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
            >
              <Title
                level={2}
                className="!text-lg xs:!text-xl sm:!text-2xl md:!text-3xl lg:!text-4xl mb-4 sm:mb-6 text-gray-700 dark:text-gray-300 font-light px-2"
                style={{ lineHeight: "1.2" }}
              >
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent gradient-text">
                  {personalInfo.title}
                </span>
              </Title>
            </motion.div>

            <motion.div
              className="flex flex-col xs:flex-row justify-center items-center gap-2 xs:gap-3 sm:gap-4 mb-4 sm:mb-6 px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Tag
                  color="blue"
                  className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-full cartoon-bounce"
                >
                  <div className="cartoon-fire">🔥</div>
                  <span className="ml-1">
                    {personalInfo.yearsOfExperience} Years Experience
                  </span>
                </Tag>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Tag
                  color="green"
                  className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-full cartoon-bounce"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="cartoon-lightning">⚡</div>
                  <span className="ml-1">
                    {personalInfo.projectsCompleted} Projects Completed
                  </span>
                </Tag>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.1, duration: 0.8 }}
            >
              <Paragraph className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4 sm:px-6">
                {personalInfo.description}
                <br />
                <div className="cartoon-computer mt-2 sm:mt-4 text-xl sm:text-2xl">
                  💻✨
                </div>
              </Paragraph>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 px-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4, duration: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button
                  type="primary"
                  size="large"
                  icon={<SafeIcon icon={FaEye} />}
                  className="gradient-primary hover-scale w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-6 h-auto text-base sm:text-lg font-semibold rounded-xl sm:rounded-2xl shadow-lg"
                  onClick={() => scrollToSection("projects")}
                >
                  View My Work
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button
                  size="large"
                  icon={<SafeIcon icon={FaDownload} />}
                  className="hover-scale w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-6 h-auto text-base sm:text-lg font-semibold rounded-xl sm:rounded-2xl border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  Download Resume
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button
                  size="large"
                  icon={<SafeIcon icon={MdEmail} />}
                  className="hover-scale w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-6 h-auto text-base sm:text-lg font-semibold rounded-xl sm:rounded-2xl"
                  onClick={() => setIsContactModalOpen(true)}
                >
                  Let's Talk
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Icons with Enhanced Animation - Responsive */}
            <motion.div
              className="flex justify-center space-x-4 sm:space-x-6 md:space-x-8 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 2.8,
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 3.0, duration: 0.6, ease: "easeOut" }}
                whileHover={{
                  scale: 1.15,
                  rotate: 5,
                  y: -3,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  type="text"
                  size="large"
                  icon={<SafeIcon icon={FaGithub} />}
                  className="hover-scale text-xl sm:text-2xl md:text-3xl p-3 sm:p-4 rounded-full social-icon hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-lg transition-all duration-300"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: 90 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 3.2, duration: 0.6, ease: "easeOut" }}
                whileHover={{
                  scale: 1.15,
                  rotate: -5,
                  y: -3,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  type="text"
                  size="large"
                  icon={<SafeIcon icon={FaLinkedin} />}
                  className="hover-scale text-xl sm:text-2xl md:text-3xl p-3 sm:p-4 rounded-full social-icon hover:bg-blue-50 dark:hover:bg-blue-900 text-blue-600 hover:shadow-lg transition-all duration-300"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 3.4, duration: 0.6, ease: "easeOut" }}
                whileHover={{
                  scale: 1.15,
                  rotate: 5,
                  y: -3,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  type="text"
                  size="large"
                  icon={<SafeIcon icon={MdEmail} />}
                  className="hover-scale text-xl sm:text-2xl md:text-3xl p-3 sm:p-4 rounded-full social-icon hover:bg-red-50 dark:hover:bg-red-900 text-red-500 hover:shadow-lg transition-all duration-300"
                  onClick={() => setIsContactModalOpen(true)}
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Scroll indicator - Responsive */}
          <motion.div
            className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center scroll-indicator">
              <motion.div
                className="w-0.5 h-2 sm:w-1 sm:h-3 bg-gray-400 dark:bg-gray-300 rounded-full mt-1.5 sm:mt-2 scroll-dot"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </motion.section>

        {/* Statistics Section - Enhanced Responsive */}
        <section
          id="stats"
          ref={statsRef}
          className="py-8 sm:py-12 md:py-16 fade-in-up"
        >
          <div className="text-center mb-8 sm:mb-12 md:mb-16 fade-in-up px-4">
            <Title
              level={2}
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent gradient-text !text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl font-bold"
            >
              My Journey in Numbers
            </Title>
          </div>

          <Row
            gutter={[16, 16]}
            justify="center"
            className="max-w-full mx-auto px-4"
          >
            <Col xs={24} sm={12} md={6}>
              <div className="hover-lift-light transition-all duration-300">
                <Card className="glass-effect border-0 shadow-xl rounded-2xl sm:rounded-3xl cartoon-card stats-card text-center p-4 sm:p-6 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🚀</div>
                  <Statistic
                    title="Projects Completed"
                    value={animatedStats.projects}
                    suffix="+"
                    valueStyle={{
                      color: "#1890ff",
                      fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                      fontWeight: "bold",
                    }}
                    className="stats-number"
                  />
                </Card>
              </div>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <div className="hover-lift-light transition-all duration-300">
                <Card className="glass-effect border-0 shadow-xl rounded-2xl sm:rounded-3xl cartoon-card stats-card text-center p-4 sm:p-6 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">⏱️</div>
                  <Statistic
                    title="Years Experience"
                    value={animatedStats.experience}
                    suffix="+"
                    valueStyle={{
                      color: "#52c41a",
                      fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                      fontWeight: "bold",
                    }}
                    className="stats-number"
                  />
                </Card>
              </div>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <div className="hover-lift-light transition-all duration-300">
                <Card className="glass-effect border-0 shadow-xl rounded-2xl sm:rounded-3xl cartoon-card stats-card text-center p-4 sm:p-6 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">👥</div>
                  <Statistic
                    title="Happy Clients"
                    value={animatedStats.clients}
                    suffix="+"
                    valueStyle={{
                      color: "#722ed1",
                      fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                      fontWeight: "bold",
                    }}
                    className="stats-number"
                  />
                </Card>
              </div>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <div className="hover-lift-light transition-all duration-300">
                <Card className="glass-effect border-0 shadow-xl rounded-2xl sm:rounded-3xl cartoon-card stats-card text-center p-4 sm:p-6 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">💻</div>
                  <Statistic
                    title="Code Commits"
                    value={animatedStats.commits}
                    suffix="+"
                    valueStyle={{
                      color: "#fa541c",
                      fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                      fontWeight: "bold",
                    }}
                    className="stats-number"
                  />
                </Card>
              </div>
            </Col>
          </Row>
        </section>

        {/* About Section - Enhanced Responsive */}
        <section id="about" className="py-12 sm:py-16 md:py-20">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 fade-in-up px-4">
            <Title
              level={2}
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent gradient-text !text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl font-bold"
            >
              About Me
            </Title>
          </div>

          <Row
            gutter={[16, 24]}
            className="items-stretch max-w-full mx-auto px-4"
          >
            <Col xs={24} lg={12}>
              <Card className="glass-effect border-0 shadow-xl rounded-2xl sm:rounded-3xl hover-lift-light fade-in-scale cartoon-card p-4 sm:p-6 md:p-8 h-full">
                <div className="flex flex-col h-full">
                  <Title
                    level={3}
                    className="mb-4 sm:mb-6 text-gray-800 dark:text-white text-lg sm:text-xl md:text-2xl"
                  >
                    <div className="cartoon-bounce inline-block mr-2 sm:mr-3">
                      🚀
                    </div>
                    Professional Journey
                  </Title>
                  <div className="flex-1">
                    <Paragraph className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6">
                      {portfolioData?.about?.professionalJourney}
                    </Paragraph>
                    <Paragraph className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      {portfolioData?.about?.passion}
                      <div className="cartoon-computer mt-2 text-xl sm:text-2xl">
                        💡✨
                      </div>
                    </Paragraph>
                  </div>
                </div>
              </Card>
            </Col>

            <Col xs={24} lg={12}>
              <Card className="glass-effect border-0 shadow-xl rounded-2xl sm:rounded-3xl hover-lift-light fade-in-scale cartoon-card p-4 sm:p-6 md:p-8 h-full">
                <div className="flex flex-col h-full">
                  <Title
                    level={3}
                    className="mb-4 sm:mb-6 text-gray-800 dark:text-white text-lg sm:text-xl md:text-2xl"
                  >
                    <div className="cartoon-pulse inline-block mr-2 sm:mr-3">
                      🏆
                    </div>
                    Key Achievements
                  </Title>
                  <div className="flex-1 space-y-3 sm:space-y-4">
                    {(portfolioData?.about?.achievements || []).map(
                      (achievement, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-2 sm:space-x-3"
                        >
                          <div className="text-green-500 text-base sm:text-lg flex-shrink-0 mt-0.5">
                            ✅
                          </div>
                          <Text className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                            {achievement}
                          </Text>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </section>

        {/* Skills Section - Enhanced Responsive */}
        <section
          id="skills"
          className="py-8 sm:py-12 md:py-16 lg:py-20 fade-in-up"
        >
          <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 fade-in-up px-4">
            <Title
              level={2}
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent gradient-text !text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl xl:!text-6xl font-bold"
            >
              Technical Expertise
            </Title>
            <Text className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 dark:text-gray-300 mt-2 sm:mt-4 lg:mt-6">
              Technologies and tools I master
            </Text>
          </div>

          <div className="max-w-full mx-auto px-4 lg:px-8">
            {Object.entries(skillCategories).map(([category, skills]) => (
              <div
                key={category}
                className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 fade-in-up"
              >
                <div>
                  <Title
                    level={3}
                    className="text-center mb-6 sm:mb-8 lg:mb-12 capitalize text-gray-800 dark:text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"
                  >
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                      {category === "frontend"
                        ? "Frontend Technologies"
                        : category === "libraries"
                        ? "Libraries & Frameworks"
                        : category === "tools"
                        ? "Development Tools"
                        : "Core Concepts"}
                    </span>
                  </Title>
                </div>

                <Row gutter={[16, 20]} justify="center">
                  {skills.map((skill: Skill, index: number) => (
                    <Col xs={24} sm={12} md={8} lg={6} xl={6} key={index}>
                      <div className="hover-lift-light transition-all duration-300">
                        <Card className="glass-effect border-0 shadow-lg rounded-xl sm:rounded-2xl portfolio-card skill-card p-4 sm:p-5 md:p-6 h-full hover:shadow-lg transition-all duration-300">
                          <div className="text-center mb-3 sm:mb-4">
                            <div
                              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl mx-auto mb-3 sm:mb-4 flex items-center justify-center text-white text-lg sm:text-xl md:text-2xl shadow-lg skill-icon hover:scale-105 transition-transform duration-300"
                              style={{ backgroundColor: skill.color }}
                            >
                              {getIconComponent(skill.icon)}
                            </div>
                            <Title
                              level={5}
                              className="!mb-2 text-gray-800 dark:text-white text-sm sm:text-base md:text-lg"
                            >
                              {skill.name}
                            </Title>
                          </div>
                          <div>
                            <Progress
                              percent={skill.level}
                              strokeColor={{
                                "0%": skill.color,
                                "100%": skill.color + "80",
                              }}
                              trailColor="rgba(0,0,0,0.1)"
                              strokeWidth={8}
                              showInfo={false}
                              className="mb-3 skill-progress"
                            />
                          </div>
                          <div className="flex justify-between items-center">
                            <Text className="text-gray-600 dark:text-gray-300 font-medium text-xs sm:text-sm">
                              Proficiency
                            </Text>
                            <div>
                              <Tag
                                color={
                                  skill.level >= 90
                                    ? "green"
                                    : skill.level >= 80
                                    ? "blue"
                                    : "orange"
                                }
                                className="text-xs"
                              >
                                {skill.level >= 90
                                  ? "Expert"
                                  : skill.level >= 80
                                  ? "Advanced"
                                  : "Intermediate"}
                              </Tag>
                            </div>
                          </div>
                        </Card>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section - Enhanced Responsive */}
        <section id="experience" className="py-8 sm:py-12 md:py-16 fade-in-up">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center shadow-lg">
                <SafeIcon
                  icon={MdWork}
                  className="text-white text-xl sm:text-2xl"
                />
              </div>
              <Title
                level={2}
                className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent gradient-text !text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl font-bold !mb-0"
              >
                Professional Experience
              </Title>
            </div>
            <Text className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My journey in software development and the impact I've made
            </Text>
          </div>

          <div className="max-w-full mx-auto px-4">
            <div className="relative">
              {/* Timeline Line - Hidden on mobile */}
              <div className="absolute left-4 sm:left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-blue-500 to-purple-500 shadow-sm hidden md:block experience-timeline-line"></div>

              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative mb-8 sm:mb-10 md:mb-12 last:mb-0 fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot - Responsive positioning */}
                  <div className="absolute left-2 sm:left-4 md:left-6 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r from-green-500 to-teal-600 rounded-full border-2 sm:border-3 md:border-4 border-white dark:border-gray-900 shadow-lg z-10 hover:scale-110 transition-transform duration-300 hidden md:block experience-timeline-dot"></div>

                  {/* Experience Card - Enhanced Responsive */}
                  <div className="md:ml-16 lg:ml-20 xl:ml-24">
                    <Card className="glass-effect border-0 shadow-xl rounded-2xl sm:rounded-3xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover-lift-light experience-card w-full">
                      {/* Card Header - Enhanced Responsive */}
                      <div className="relative bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-4 sm:p-6 lg:p-8 border-b border-gray-200 dark:border-gray-600">
                        <div className="flex flex-col gap-4 sm:gap-6">
                          <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 flex-1">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 mx-auto sm:mx-0">
                              <SafeIcon
                                icon={MdWork}
                                className="text-white text-xl sm:text-2xl"
                              />
                            </div>
                            <div className="flex-1 min-w-0 text-center sm:text-left">
                              <Title
                                level={3}
                                className="!mb-2 sm:!mb-3 text-gray-800 dark:text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold"
                              >
                                {exp.title}
                              </Title>
                              <Title
                                level={4}
                                className="!mb-3 sm:!mb-4 text-teal-600 dark:text-teal-400 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold"
                              >
                                {exp.company}
                              </Title>
                              <Text className="text-gray-600 dark:text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed">
                                {exp.description}
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:justify-between lg:justify-end gap-2 sm:gap-3 flex-shrink-0">
                            <Tag
                              color="green"
                              className="text-xs sm:text-sm font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border-0 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 w-fit mx-auto sm:mx-0 shadow-sm"
                            >
                              {exp.type}
                            </Tag>
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                              <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                                <SafeIcon
                                  icon={FaCalendarAlt}
                                  className="text-blue-500 text-base sm:text-lg"
                                />
                                <span className="font-semibold">
                                  {exp.duration}
                                </span>
                              </div>
                              <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                                <SafeIcon
                                  icon={FaMapMarkerAlt}
                                  className="text-red-500 text-base sm:text-lg"
                                />
                                <span className="font-semibold">
                                  {exp.location}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Card Body - Enhanced Responsive */}
                      <div className="p-4 sm:p-6 lg:p-8">
                        {/* Key Achievements */}
                        <div className="mb-6 sm:mb-8">
                          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                              <SafeIcon
                                icon={FaTrophy}
                                className="text-white text-sm sm:text-lg"
                              />
                            </div>
                            <Text
                              strong
                              className="text-gray-800 dark:text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold"
                            >
                              Key Achievements
                            </Text>
                          </div>
                          <div className="grid gap-3 sm:gap-4 sm:ml-2">
                            {exp.achievements.map((achievement, i) => (
                              <div
                                key={i}
                                className="flex items-start gap-3 sm:gap-4 p-3 rounded-lg bg-green-50 dark:bg-green-900/10 border-l-4 border-green-500 hover:bg-green-100 dark:hover:bg-green-900/20 transition-colors duration-200"
                              >
                                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <SafeIcon
                                    icon={FaCheckCircle}
                                    className="text-white text-xs"
                                  />
                                </div>
                                <Text className="text-gray-700 dark:text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                                  {achievement}
                                </Text>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Technologies Used */}
                        <div>
                          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                              <SafeIcon
                                icon={FaCode}
                                className="text-white text-sm sm:text-lg"
                              />
                            </div>
                            <Text
                              strong
                              className="text-gray-800 dark:text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold"
                            >
                              Technologies Used
                            </Text>
                          </div>
                          <div className="flex flex-wrap gap-2 sm:gap-3 sm:ml-2">
                            {exp.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm lg:text-base font-semibold bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 text-blue-700 dark:text-blue-300 rounded-lg sm:rounded-xl border border-blue-200 dark:border-blue-800 hover:from-blue-100 hover:to-blue-200 dark:hover:from-blue-900/30 dark:hover:to-blue-800/30 hover:scale-105 transition-all duration-200 shadow-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section - Enhanced Responsive */}
        <section id="projects" className="py-8 sm:py-12 md:py-16 fade-in-up">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 fade-in-up px-4">
            <Title
              level={2}
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent !text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl font-bold"
            >
              Featured Projects
            </Title>
            <Text className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mt-2 sm:mt-4">
              Showcasing my best work and technical achievements
            </Text>
          </div>

          <div className="max-w-full mx-auto px-4">
            <Row gutter={[16, 24]} justify="center">
              {projects.map((project, index) => (
                <Col xs={24} sm={24} md={12} lg={8} xl={8} key={index}>
                  <div className="hover-lift-light transition-all duration-300">
                    <Card
                      className="glass-effect border-0 shadow-xl rounded-2xl sm:rounded-3xl portfolio-card project-card h-full overflow-hidden hover:shadow-lg transition-all duration-300"
                      cover={
                        <div className="relative h-40 sm:h-48 bg-gradient-to-br from-blue-400 to-purple-500 project-cover flex items-center justify-center overflow-hidden hover:scale-102 transition-transform duration-300">
                          <div className="text-4xl sm:text-5xl md:text-6xl text-white opacity-80">
                            {project.category === "Web Application" ? (
                              <SafeIcon icon={FaDesktop} />
                            ) : project.category === "E-Commerce" ? (
                              <SafeIcon icon={MdShoppingCart} />
                            ) : project.category === "Media Application" ? (
                              <SafeIcon icon={MdVideoLibrary} />
                            ) : project.category === "Dashboard" ? (
                              <SafeIcon icon={MdDashboard} />
                            ) : project.category === "Library" ? (
                              <SafeIcon icon={MdLibraryBooks} />
                            ) : project.category === "Personal Project" ? (
                              <SafeIcon icon={FaUser} />
                            ) : (
                              <SafeIcon icon={FaCode} />
                            )}
                          </div>
                          <div className="absolute top-2 right-2 sm:top-4 sm:right-4">
                            <Tag
                              color={
                                project.status === "Completed"
                                  ? "green"
                                  : "blue"
                              }
                              className="font-medium text-xs sm:text-sm"
                            >
                              {project.status}
                            </Tag>
                          </div>
                          <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4">
                            <Tag
                              color="purple"
                              className="font-medium text-xs sm:text-sm"
                            >
                              {project.category}
                            </Tag>
                          </div>
                        </div>
                      }
                    >
                      <div className="p-4 sm:p-6">
                        <div>
                          <Title
                            level={4}
                            className="!mb-2 sm:!mb-3 text-gray-800 dark:text-white text-base sm:text-lg md:text-xl"
                          >
                            {project.title}
                          </Title>

                          <Paragraph className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 line-clamp-3 text-sm sm:text-base">
                            {project.description}
                          </Paragraph>
                        </div>

                        <div className="mb-3 sm:mb-4">
                          <Text
                            strong
                            className="text-gray-800 dark:text-white block mb-2 text-sm sm:text-base"
                          >
                            Tech Stack:
                          </Text>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {project.technologies.slice(0, 4).map((tech, i) => (
                              <div
                                key={i}
                                className="hover:scale-105 transition-transform duration-200"
                              >
                                <Tag
                                  color="blue"
                                  className="rounded-full text-xs"
                                >
                                  {tech}
                                </Tag>
                              </div>
                            ))}
                            {project.technologies.length > 4 && (
                              <Tag className="rounded-full text-xs">
                                +{project.technologies.length - 4} more
                              </Tag>
                            )}
                          </div>
                        </div>

                        <div className="mb-3 sm:mb-4">
                          <Text
                            strong
                            className="text-gray-800 dark:text-white block mb-2 text-sm sm:text-base"
                          >
                            Key Features:
                          </Text>
                          <div className="space-y-1">
                            {project.features.slice(0, 3).map((feature, i) => (
                              <div
                                key={i}
                                className="flex items-start space-x-2"
                              >
                                <SafeIcon
                                  icon={FaCheckCircle}
                                  className="text-green-500 text-xs flex-shrink-0 mt-0.5"
                                />
                                <Text className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                                  {feature}
                                </Text>
                              </div>
                            ))}
                            {project.features.length > 3 && (
                              <Text className="text-gray-500 text-xs">
                                +{project.features.length - 3} more features
                              </Text>
                            )}
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-3 sm:p-4 rounded-lg mb-3 sm:mb-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <SafeIcon
                              icon={FaTrophy}
                              className="text-yellow-500 text-sm"
                            />
                            <Text
                              strong
                              className="text-gray-800 dark:text-white text-sm sm:text-base"
                            >
                              Impact
                            </Text>
                          </div>
                          <Text className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm">
                            {project.impact}
                          </Text>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                          <div className="hover:scale-102 transition-transform duration-200 flex-1">
                            <Button
                              type="primary"
                              icon={<SafeIcon icon={FaEye} />}
                              size="small"
                              className="w-full rounded-lg"
                              href={project.live}
                              target="_blank"
                            >
                              Live Demo
                            </Button>
                          </div>
                          <div className="hover:scale-102 transition-transform duration-200 flex-1">
                            <Button
                              icon={<SafeIcon icon={FaGithub} />}
                              size="small"
                              className="w-full rounded-lg"
                              href={project.github}
                              target="_blank"
                            >
                              Code
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </section>

        {/* Testimonials Section - Enhanced Responsive */}
        <section
          id="testimonials"
          className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-slate-800/30 dark:to-slate-900/50 portfolio-section-bg"
        >
          <div className="text-center mb-8 sm:mb-12 md:mb-16 fade-in-up px-4">
            <Title
              level={2}
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent !text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl font-bold"
            >
              Client Testimonials
            </Title>
            <Text className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mt-2 sm:mt-4">
              What clients and colleagues say about my work
            </Text>
          </div>

          <div className="max-w-full mx-auto px-4">
            <Row gutter={[16, 24]} justify="center">
              {testimonials.map((testimonial, index) => (
                <Col xs={24} sm={12} md={12} lg={6} key={index}>
                  <Card
                    className="glass-effect border-0 shadow-xl rounded-2xl sm:rounded-3xl hover-lift-light fade-in-scale cartoon-card testimonial-card h-full"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="p-4 sm:p-6 text-center">
                      <div className="cartoon-float">
                        <Avatar
                          size={60}
                          src={testimonial.avatar}
                          className="mb-3 sm:mb-4 border-2 sm:border-4 border-blue-100 sm:w-20 sm:h-20"
                        />
                      </div>
                      <div className="mb-3 sm:mb-4">
                        <Rate
                          disabled
                          defaultValue={testimonial.rating}
                          className="text-yellow-500 cartoon-pulse text-sm sm:text-base"
                        />
                      </div>
                      <Paragraph className="text-gray-600 dark:text-gray-300 italic mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
                        <span className="cartoon-text">
                          "{testimonial.content}"
                        </span>
                      </Paragraph>
                      <div>
                        <Title
                          level={5}
                          className="!mb-1 text-gray-800 dark:text-white cartoon-text text-sm sm:text-base"
                        >
                          {testimonial.name}
                        </Title>
                        <Text className="text-blue-600 dark:text-blue-400 font-medium text-xs sm:text-sm">
                          {testimonial.role}
                        </Text>
                        <br />
                        <Text className="text-gray-500 text-xs sm:text-sm">
                          {testimonial.company}
                        </Text>
                      </div>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-12 sm:py-16 md:py-20">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 fade-in-up px-4">
            <Title
              level={2}
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent !text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl font-bold"
            >
              Certifications & Achievements
            </Title>
            <Text className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mt-2 sm:mt-4">
              Professional certifications and continuous learning
            </Text>
          </div>

          <div className="max-w-full mx-auto px-4">
            <Row gutter={[16, 24]} justify="center">
              {staticCertifications.map((cert, index) => (
                <Col xs={24} sm={12} md={8} lg={6} key={index}>
                  <Card
                    className="glass-effect border-0 shadow-xl rounded-2xl sm:rounded-3xl hover-lift-light fade-in-scale certification-card h-full"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="p-4 sm:p-6 text-center">
                      <div
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl mx-auto mb-3 sm:mb-4 flex items-center justify-center text-white text-2xl sm:text-3xl shadow-lg certification-icon"
                        style={{ backgroundColor: cert.color }}
                      >
                        {cert.icon}
                      </div>
                      <Title
                        level={5}
                        className="!mb-2 text-gray-800 dark:text-white text-sm sm:text-base"
                      >
                        {cert.title}
                      </Title>
                      <Text className="text-blue-600 dark:text-blue-400 font-medium block mb-2 text-xs sm:text-sm">
                        {cert.issuer}
                      </Text>
                      <Tag color="green" className="mb-3 text-xs">
                        {cert.date}
                      </Tag>
                      <div className="bg-gray-50 dark:bg-gray-800 p-2 sm:p-3 rounded-lg">
                        <Text className="text-xs text-gray-500 font-mono">
                          ID: {cert.credentialId}
                        </Text>
                      </div>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </section>

        {/* Blog Section - Enhanced Responsive */}
        <section
          id="blog"
          className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-slate-800/30 dark:to-slate-900/50 portfolio-section-bg"
        >
          <div className="text-center mb-8 sm:mb-12 md:mb-16 fade-in-up px-4">
            <Title
              level={2}
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent !text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl font-bold"
            >
              Latest Blog Posts
            </Title>
            <Text className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mt-2 sm:mt-4">
              Sharing knowledge and insights about frontend development
            </Text>
          </div>

          <Row gutter={[32, 32]}>
            {blogPosts.map((post, index) => (
              <Col xs={24} md={8} key={index}>
                <Card
                  className="glass-effect border-0 shadow-xl rounded-3xl hover-lift-light fade-in-scale blog-card h-full overflow-hidden"
                  style={{ animationDelay: `${index * 0.2}s` }}
                  cover={
                    <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                      <div className="text-6xl text-white opacity-80">
                        <SafeIcon icon={FaFileAlt} />
                      </div>
                    </div>
                  }
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Text className="text-gray-500 text-sm">
                        <SafeIcon icon={FaCalendarAlt} className="mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </Text>
                      <Tag color="purple">{post.readTime}</Tag>
                    </div>

                    <Title
                      level={4}
                      className="!mb-3 text-gray-800 dark:text-white line-clamp-2"
                    >
                      {post.title}
                    </Title>

                    <Paragraph className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </Paragraph>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, i) => (
                        <Tag key={i} color="blue" className="text-xs">
                          {tag}
                        </Tag>
                      ))}
                    </div>

                    <Button
                      type="primary"
                      className="w-full rounded-lg cartoon-button"
                      icon={<SafeIcon icon={FaBook} />}
                      onClick={() => handleBlogClick(post)}
                    >
                      Read More
                    </Button>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        {/* Contact Section - Enhanced Responsive */}
        <section id="contact" className="py-12 sm:py-16 md:py-20">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 fade-in-up px-4">
            <Title
              level={2}
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent !text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl font-bold"
            >
              Let's Work Together
            </Title>
            <Text className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mt-2 sm:mt-4">
              Ready to bring your ideas to life? Let's discuss your next project
            </Text>
          </div>

          <div className="max-w-full mx-auto px-4">
            <Row gutter={[16, 24]} justify="center" className="items-stretch">
              <Col xs={24} sm={12} md={8}>
                <Card
                  className="glass-effect border-0 shadow-xl rounded-2xl sm:rounded-3xl hover-lift-light fade-in-scale cartoon-card contact-card text-center p-4 sm:p-6 md:p-8 cursor-pointer h-full"
                  onClick={() => setIsContactModalOpen(true)}
                >
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <div className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 cartoon-email">
                        <SafeIcon icon={MdEmail} className="text-blue-500" />
                      </div>
                      <Title
                        level={4}
                        className="text-gray-800 dark:text-white cartoon-text text-base sm:text-lg md:text-xl"
                      >
                        Send Message
                      </Title>
                      <Text className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm md:text-base">
                        shivam.chudasama@rapidops.com
                      </Text>
                    </div>
                    <Button
                      type="primary"
                      className="mt-3 sm:mt-4 cartoon-button w-full"
                      icon={<SafeIcon icon={FaPaperPlane} />}
                      size="large"
                    >
                      Contact Me
                    </Button>
                  </div>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8}>
                <Card className="glass-effect border-0 shadow-xl rounded-2xl sm:rounded-3xl hover-lift-light fade-in-scale cartoon-card contact-card text-center p-4 sm:p-6 md:p-8 h-full">
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <div className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 cartoon-float">
                        <SafeIcon icon={FaLinkedin} className="text-blue-600" />
                      </div>
                      <Title
                        level={4}
                        className="text-gray-800 dark:text-white cartoon-text text-base sm:text-lg md:text-xl"
                      >
                        LinkedIn
                      </Title>
                      <Text className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm md:text-base">
                        Professional Network
                      </Text>
                    </div>
                    <Button
                      type="primary"
                      className="mt-3 sm:mt-4 cartoon-button w-full"
                      icon={<SafeIcon icon={FaLinkedin} />}
                      size="large"
                    >
                      Connect
                    </Button>
                  </div>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8}>
                <Card className="glass-effect border-0 shadow-xl rounded-2xl sm:rounded-3xl hover-lift-light fade-in-scale cartoon-card contact-card text-center p-4 sm:p-6 md:p-8 h-full">
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <div className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 cartoon-pulse">
                        <SafeIcon icon={FaGithub} className="text-gray-700" />
                      </div>
                      <Title
                        level={4}
                        className="text-gray-800 dark:text-white cartoon-text text-base sm:text-lg md:text-xl"
                      >
                        GitHub
                      </Title>
                      <Text className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm md:text-base">
                        View Source Code
                      </Text>
                    </div>
                    <Button
                      type="primary"
                      className="mt-3 sm:mt-4 cartoon-button w-full"
                      icon={<SafeIcon icon={FaGithub} />}
                      size="large"
                    >
                      Follow
                    </Button>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>

          <div className="text-center mt-8 sm:mt-12 md:mt-16 px-4">
            <Card className="glass-effect border-0 shadow-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 max-w-5xl mx-auto">
              <Title
                level={3}
                className="mb-4 sm:mb-6 text-gray-800 dark:text-white text-lg sm:text-xl md:text-2xl"
              >
                <SafeIcon
                  icon={FaHeart}
                  className="text-red-500 mr-2 sm:mr-3"
                />
                Available for Freelance Projects
              </Title>
              <Paragraph className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mb-4 sm:mb-6">
                I'm currently available for freelance projects and full-time
                opportunities. Whether you need a complete web application,
                UI/UX improvements, or technical consultation, I'd love to help
                bring your vision to life.
              </Paragraph>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button
                  type="primary"
                  size="large"
                  icon={<SafeIcon icon={MdEmail} />}
                  className="px-8 py-6 h-auto text-lg font-semibold rounded-2xl"
                  onClick={() => setIsContactModalOpen(true)}
                >
                  Start a Project
                </Button>
                <Button
                  size="large"
                  icon={<SafeIcon icon={FaDownload} />}
                  className="px-8 py-6 h-auto text-lg font-semibold rounded-2xl"
                >
                  Download Resume
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Contact Modal */}
        <Modal
          title={
            <div className="text-center fade-in-up">
              <Title level={3} className="!mb-2">
                Get In Touch
              </Title>
              <Text className="text-gray-500">Let's discuss your project</Text>
            </div>
          }
          open={isContactModalOpen}
          onCancel={() => setIsContactModalOpen(false)}
          footer={null}
          width={600}
          className="contact-modal portfolio-modal"
        >
          <div className="fade-in-up">
            <Form
              form={form}
              layout="vertical"
              onFinish={handleContactSubmit}
              className="mt-6"
            >
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="name"
                    label="Full Name"
                    rules={[
                      { required: true, message: "Please enter your name" },
                    ]}
                  >
                    <Input size="large" placeholder="John Doe" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="email"
                    label="Email Address"
                    rules={[
                      { required: true, message: "Please enter your email" },
                      { type: "email", message: "Please enter a valid email" },
                    ]}
                  >
                    <Input size="large" placeholder="john@example.com" />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item
                name="subject"
                label="Subject"
                rules={[{ required: true, message: "Please enter a subject" }]}
              >
                <Input size="large" placeholder="Project Discussion" />
              </Form.Item>

              <Form.Item
                name="message"
                label="Message"
                rules={[
                  { required: true, message: "Please enter your message" },
                ]}
              >
                <Input.TextArea
                  rows={6}
                  placeholder="Tell me about your project, timeline, and requirements..."
                  size="large"
                />
              </Form.Item>

              <Form.Item className="mb-0">
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  icon={<SafeIcon icon={FaPaperPlane} />}
                  className="w-full rounded-lg"
                >
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Modal>

        {/* Blog Modal */}
        <Modal
          title={
            <div className="text-center">
              <Title level={2} className="!mb-2">
                {selectedBlog?.title}
              </Title>
              <div className="flex justify-center items-center gap-4 text-sm text-gray-500">
                <span>
                  📅{" "}
                  {selectedBlog &&
                    new Date(selectedBlog.date).toLocaleDateString()}
                </span>
                <span>⏱️ {selectedBlog?.readTime}</span>
              </div>
            </div>
          }
          open={isBlogModalOpen}
          onCancel={() => setIsBlogModalOpen(false)}
          footer={null}
          width={900}
          height={600}
          className="blog-modal portfolio-modal"
          styles={{
            body: {
              height: "500px",
              overflow: "hidden",
              padding: 0,
            },
          }}
        >
          {selectedBlog && (
            <div className="h-full flex flex-col">
              {/* Fixed Header with Tags */}
              <div className="flex-shrink-0 p-6 pb-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex flex-wrap gap-2">
                  {selectedBlog.tags.map((tag: string, i: number) => (
                    <Tag key={i} color="blue" className="cartoon-hover">
                      {tag}
                    </Tag>
                  ))}
                </div>
              </div>

              {/* Scrollable Content Area */}
              <div className="flex-1 overflow-y-auto p-6 pt-4">
                <div
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
                  style={{
                    lineHeight: "1.8",
                    fontSize: "16px",
                  }}
                />
              </div>

              {/* Fixed Footer */}
              <div className="flex-shrink-0 p-6 pt-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <div className="flex items-center justify-between">
                  <div>
                    <Text strong className="text-gray-800 dark:text-white">
                      Written by Shivam Chudasama
                    </Text>
                    <br />
                    <Text className="text-gray-500">
                      Frontend Developer at RapidOps Inc.
                    </Text>
                  </div>
                  <div className="flex gap-3">
                    <Button
                      type="primary"
                      icon={<SafeIcon icon={FaHeart} />}
                      className="cartoon-button"
                    >
                      Like
                    </Button>
                    <Button
                      icon={<SafeIcon icon={FaPaperPlane} />}
                      className="cartoon-button"
                    >
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Portfolio;
