// Use direct paths to assets folder for Vercel compatibility

import type { PortfolioData } from "../services/portfolioService";

// Re-export the type for easier imports
export type { PortfolioData } from "../services/portfolioService";

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Shivam Chudasama",
    title: "Software Engineer",
    location: "Ahmedabad, Gujarat",
    email: "shivamchudasama.official@gmail.com",
    phone: "+91 7698723169",
    linkedin: "https://www.linkedin.com/in/shivam-chudasama-software-engineer",
    github: "https://github.com/Shivolic76",
    portfolio: "https://shivam-porfolio.netlify.app",
    avatar: "/src/assets/shivam-profile.jpg",
    description:
      "Frontend Engineer with 4+ years of experience building scalable SaaS, analytics, and real-time web applications using React.js, Next.js, and TypeScript. Skilled in frontend architecture, reusable design systems, and performance optimization for high-traffic applications.",
    yearsOfExperience: "4+",
    projectsCompleted: "17+",
    resumeUrl: "https://drive.google.com/file/d/1Pdki-nBdUxkmMcJHK-lltp01BGF5EZnd/view?usp=sharing",
  },
  statistics: {
    projects: 17,
    experience: 4,
    clients: 5,
    commits: 700,
  },
  about: {
    professionalJourney:
      "Frontend Engineer with 4+ years of experience from Ahmedabad, Gujarat, building scalable SaaS, analytics, and real-time web applications. I specialize in React.js, Next.js, and TypeScript, with a strong focus on frontend architecture, reusable design systems, and performance optimization for high-traffic applications.",
    passion:
      "Passionate about delivering production-grade features with strong UX, scalability, and maintainability. I collaborate closely with cross-functional Agile teams and leverage AI tools like GitHub Copilot and OpenAI Codex to accelerate delivery without compromising code quality.",
    achievements: [
      "Improved frontend performance by 30% through code splitting, lazy loading, and optimized bundling",
      "Shipped 10+ production features collaborating with product, design, backend, and QA teams",
      "Delivered 5+ client projects end-to-end, maintaining a 98% client satisfaction rate",
      "Built reusable UI libraries that reduced development effort by 15%",
      "Developed 15+ reusable UI components standardizing frontend architecture across projects",
    ],
  },

  skillCategories: {
    allSkills: [
      // Frontend Technologies
      {
        name: "HTML5",
        level: 95,
        color: "#E34F26",
        icon: "FaHtml5",
      },
      {
        name: "CSS3",
        level: 93,
        color: "#1572B6",
        icon: "BiLogoCss3",
      },
      {
        name: "JavaScript (ES6+)",
        level: 92,
        color: "#F7DF1E",
        icon: "SiJavascript",
      },
      {
        name: "TypeScript",
        level: 88,
        color: "#3178C6",
        icon: "SiTypescript",
      },
      {
        name: "React.js",
        level: 90,
        color: "#61DAFB",
        icon: "FaReact",
      },
      {
        name: "Next.js",
        level: 85,
        color: "#000000",
        icon: "SiNextdotjs",
      },
      {
        name: "Tailwind CSS",
        level: 85,
        color: "#06B6D4",
        icon: "SiTailwindcss",
      },
      {
        name: "Bootstrap 5",
        level: 87,
        color: "#7952B3",
        icon: "SiBootstrap",
      },
      {
        name: "Material-UI",
        level: 90,
        color: "#0081CB",
        icon: "SiMui",
      },
      {
        name: "Ant Design",
        level: 88,
        color: "#1890FF",
        icon: "SiAntdesign",
      },
      {
        name: "SASS/SCSS",
        level: 80,
        color: "#CD6799",
        icon: "FaSass",
      },

      // Libraries & Frameworks
      {
        name: "Redux/Redux Toolkit",
        level: 85,
        color: "#764ABC",
        icon: "SiRedux",
      },
      {
        name: "Formik & Yup",
        level: 87,
        color: "#FF6B6B",
        icon: "SiFormik",
      },
      {
        name: "React Router",
        level: 90,
        color: "#CA4245",
        icon: "SiReactrouter",
      },
      {
        name: "Axios",
        level: 92,
        color: "#5A29E4",
        icon: "SiAxios",
      },

      // Core Concepts
      {
        name: "Responsive Design",
        level: 95,
        color: "#4ECDC4",
        icon: "MdDevices",
      },
      {
        name: "REST APIs",
        level: 90,
        color: "#FF6B6B",
        icon: "BiCloudDownload",
      },
      {
        name: "State Management",
        level: 88,
        color: "#764ABC",
        icon: "MdManageAccounts",
      },
      {
        name: "Performance Optimization",
        level: 85,
        color: "#00D084",
        icon: "MdSpeed",
      },
      {
        name: "SEO Optimization",
        level: 82,
        color: "#34A853",
        icon: "MdSearch",
      },
      {
        name: "Linting & Formatting (ESLint & Prettier)",
        level: 85,
        color: "#4B32C3",
        icon: "SiEslint",
      },
      {
        name: "AI Prompt Engineering",
        level: 88,
        color: "#FF6B35",
        icon: "FaRobot", // Font Awesome
      },
      {
        name: "ECharts",
        level: 85,
        color: "#AA344D",
        icon: "SiApacheecharts", // Simple Icons
      },
      {
        name: "Chart.js",
        level: 82,
        color: "#FF6384",
        icon: "SiChartdotjs", // Simple Icons
      },
    ],
    tools: [
      {
        name: "Git & GitHub",
        level: 88,
        color: "#F05032",
        icon: "FaGithub",
      },
      {
        name: "VS Code",
        level: 95,
        color: "#007ACC",
        icon: "SiVisualstudiocode",
      },
      {
        name: "Webpack",
        level: 75,
        color: "#8DD6F9",
        icon: "SiWebpack",
      },
      {
        name: "NPM/Yarn",
        level: 90,
        color: "#CB3837",
        icon: "SiNpm",
      },
      {
        name: "Chrome DevTools",
        level: 88,
        color: "#4285F4",
        icon: "SiGooglechrome",
      },
      {
        name: "Figma",
        level: 80,
        color: "#F24E1E",
        icon: "FaFigma",
      },
    ],
  },
  experiences: [
    {
      title: "Software Engineer",
      company: "RapidOps Inc.",
      location: "Ahmedabad, India",
      type: "Full-time",
      duration: "March 2025 – Present",
      description:
        "Building scalable SaaS web applications using React.js (Vite), TypeScript, and Ant Design, improving frontend performance and shipping production features with cross-functional teams.",
      responsibilities: [
        "Build scalable SaaS web applications using React.js (Vite), TypeScript, and Ant Design",
        "Implement code splitting, lazy loading, and optimized bundling strategies for performance",
        "Collaborate with product, design, backend, and QA teams to ship production features",
        "Drive frontend architecture decisions and reusable component patterns",
        "Leverage GitHub Copilot, OpenAI Codex, and Augment AI to accelerate delivery",
        "Reduce UI inconsistencies through consistent design system adoption",
        "Conduct code reviews and ensure maintainability across the codebase",
      ],
      achievements: [
        "Improved frontend performance by 30% through code splitting, lazy loading, and optimized bundling",
        "Shipped 10+ production features collaborating with cross-functional Agile teams",
        "Drove adoption of reusable component patterns, improving UX and reducing UI inconsistencies",
        "Leveraged AI tools (GitHub Copilot, OpenAI Codex, Augment AI) to speed up delivery",
      ],
      technologies: [
        "React.js",
        "TypeScript",
        "Ant Design",
        "Vite",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Redux Toolkit",
        "REST APIs",
        "GitHub Copilot",
        "OpenAI Codex",
      ],
    },
    {
      title: "Software Developer",
      company: "Incipient Infotech",
      location: "Ahmedabad, India",
      type: "Full-time",
      duration: "September 2023 – January 2025",
      description:
        "Developed responsive applications with React.js, Next.js, and TypeScript, delivering 5+ client projects end-to-end and building reusable UI libraries that improved maintainability.",
      responsibilities: [
        "Develop responsive web applications using React.js, Next.js, and TypeScript",
        "Translate business requirements into scalable, maintainable frontend solutions",
        "Build and maintain reusable UI libraries and optimization workflows",
        "Manage client communications and gather requirements for project deliverables",
        "Improve platform performance through code splitting, memoization, and lazy loading",
        "Collaborate with cross-functional teams in Agile sprints",
      ],
      achievements: [
        "Improved platform performance by 25% and reduced page-load time by 15%",
        "Delivered 5+ client projects end-to-end, maintaining a 98% client satisfaction rate",
        "Built reusable UI libraries that reduced development effort by 15% and improved maintainability",
        "Integrated RESTful APIs and implemented best practices for front-end performance",
        "Contributed actively to Agile workflows including sprint planning and code reviews",
        "Migrated legacy class-based components to modern functional components with hooks",
      ],
      technologies: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap 5",
        "Material-UI",
        "REST APIs",
      ],
    },
    {
      title: "React.js Developer",
      company: "Quantex Solutions",
      location: "Remote",
      type: "Full-time",
      duration: "April 2022 – September 2023",
      description:
        "Developed modern React applications and built 15+ reusable UI components, standardizing frontend architecture and improving application performance across client projects.",
      responsibilities: [
        "Develop modern React applications and reusable UI components",
        "Standardize frontend architecture across multiple client projects",
        "Implement state management using Redux and optimized patterns",
        "Build responsive and accessible user interfaces",
        "Optimize application performance using lazy loading and code splitting",
        "Deliver responsive, accessible interfaces in Agile teams",
        "Conduct code reviews to maintain code quality",
      ],
      achievements: [
        "Built 15+ reusable UI components that standardized frontend architecture across projects",
        "Improved application performance by 20% using lazy loading, code splitting, and optimized Redux state management",
        "Delivered responsive, accessible interfaces for 2+ client projects in Agile teams",
      ],
      technologies: [
        "React.js",
        "JavaScript",
        "TypeScript",
        "Redux",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap 5",
        "REST APIs",
      ],
    },
  ],
  projects: [
    {
      title: "IPO Analytix",
      description:
        "A cross-platform IPO analytics platform delivering real-time market dashboards, dynamic chart visualizations, and scalable responsive UI architecture with optimized rendering performance.",
      technologies: [
        "Flutter",
        "React.js",
        "Vite",
        "TypeScript",
        "Chart.js",
        "REST APIs",
      ],
      features: [
        "Real-time market dashboards",
        "Dynamic chart visualizations",
        "Cross-platform support",
        "Optimized rendering performance",
      ],
      status: "Completed",
      impact: "Real-time IPO data for investors across web and mobile",
      image: "/images/projects/ipo-analytix.jpg",
      github: "",
      live: "",
      category: "Analytics Platform",
    },
    {
      title: "Business for Growth",
      description:
        "A business management platform with workflow automation, analytics dashboards, reusable components, and optimized API integration, improving responsiveness and UI consistency.",
      technologies: [
        "Next.js",
        "Redux",
        "Material-UI",
        "TypeScript",
        "REST APIs",
      ],
      features: [
        "Workflow automation",
        "Analytics dashboards",
        "Reusable component library",
        "Optimized API integration",
      ],
      status: "Completed",
      impact: "Streamlined business operations with improved UI consistency",
      image: "/images/projects/business-for-growth.jpg",
      github: "",
      live: "",
      category: "Business Platform",
    },
    {
      title: "Game Racers",
      description:
        "A blockchain-enabled gaming platform with secure token-based transactions, gamification features, and frontend performance optimizations for improved engagement and gameplay smoothness.",
      technologies: [
        "Next.js",
        "Unity",
        "TypeScript",
        "Blockchain",
        "REST APIs",
      ],
      features: [
        "Blockchain token transactions",
        "Gamification system",
        "Performance optimizations",
        "Smooth gameplay experience",
      ],
      status: "Completed",
      impact: "Enhanced user engagement with secure blockchain transactions",
      image: "/images/projects/game-racers.jpg",
      github: "",
      live: "",
      category: "Gaming Platform",
    },
    {
      title: "DIIBS",
      description:
        "A real-time restaurant management platform for orders, dashboards, and operations, featuring Stripe Connect integration and a dynamic bidding system to improve payments and user engagement.",
      technologies: [
        "React.js",
        "Redux",
        "REST APIs",
        "Stripe Connect",
        "TypeScript",
      ],
      features: [
        "Real-time order management",
        "Operations dashboard",
        "Stripe Connect payments",
        "Dynamic bidding system",
      ],
      status: "Completed",
      impact: "Improved restaurant operations and payment workflows",
      image: "/images/projects/diibs.jpg",
      github: "",
      live: "",
      category: "Restaurant Management",
    },
    {
      title: "Donate-Pay",
      description:
        "A FinTech donation platform with secure donation workflows, Stripe Connect integration, and redesigned user flows that reduced drop-off and improved conversion rates.",
      technologies: [
        "React.js",
        "Redux Toolkit",
        "Bootstrap",
        "Stripe Connect",
        "TypeScript",
      ],
      features: [
        "Secure donation workflows",
        "Stripe Connect integration",
        "Optimized user flows",
        "Improved conversion rate",
      ],
      status: "Completed",
      impact: "Reduced drop-off and improved donation conversion rates",
      image: "/images/projects/donate-pay.jpg",
      github: "",
      live: "",
      category: "FinTech",
    },
  ],
  testimonials: [
    {
      name: "Rajesh Patel",
      role: "Senior Developer",
      company: "RapidOps Inc.",
      content:
        "Shivam is an exceptional Software Engineer with strong React.js skills. His attention to detail and ability to deliver clean, maintainable code is impressive.",
      rating: 5,
      avatar: "/assets/images/testimonials/rajesh.jpg",
    },
    {
      name: "Priya Sharma",
      role: "UI/UX Designer",
      company: "RapidOps Inc.",
      content:
        "Working with Shivam has been a great experience. He perfectly translates designs into responsive, pixel-perfect interfaces with excellent collaboration skills.",
      rating: 5,
      avatar: "/assets/images/testimonials/priya.jpg",
    },
    {
      name: "Amit Kumar",
      role: "Project Manager",
      company: "Tech Startup",
      content:
        "Shivam consistently delivers high-quality work on time. His expertise in React.js and TypeScript has been invaluable to our team's success.",
      rating: 5,
      avatar: "/assets/images/testimonials/amit.jpg",
    },
    {
      name: "Neha Joshi",
      role: "Team Lead",
      company: "Digital Agency",
      content:
        "Shivam's problem-solving abilities and modern frontend development skills make him a valuable team member. His code quality is always top-notch.",
      rating: 5,
      avatar: "/assets/images/testimonials/neha.jpg",
    },
  ],
  certifications: [
    {
      title: "HTML",
      issuer: "PROGRAMMINGHUB",
      date: "Sep 2022",
      credentialId: "1602902043702",
      icon: "Html5Outlined",
      color: "#E34F26",
      url: "",
    },
    {
      title: "Modern HTML & CSS From The Beginning (Including Saas)",
      issuer: "Udemy",
      date: "Sep 2020",
      credentialId: "UC-ed56282a-a83e-4ff4-a281-e4bd99b47acc",
      icon: "CodeOutlined",
      color: "#264DE4",
      url: "",
    },
    {
      title: "Modern JavaScript",
      issuer: "Udemy",
      date: "Jun 2020",
      credentialId: "UC-0ab4ba1b-0ff5-4dc2-ac4b-baca7371e6c2",
      icon: "CodeOutlined",
      color: "#F7DF1E",
      url: "",
    },
    {
      title: "Bootstrap 5",
      issuer: "Udemy",
      date: "Sep 2022",
      credentialId: "UC-6374d852-e3f9-4a4f-961d-30a151576068",
      icon: "AppstoreAddOutlined",
      color: "#7952B3",
      url: "",
    },
    {
      title: "Modern React",
      issuer: "Udemy",
      date: "Oct 2020",
      credentialId: "UC-2df5a270-1e1c-4edf-8ff1-08e1de8cdec4",
      icon: "ThunderboltOutlined",
      color: "#61DAFB",
      url: "",
    },
  ],
  blogs: [
    {
      id: 1,
      title: "My Journey as a Software Engineer at RapidOps",
      excerpt:
        "Sharing my experience, growth, and learnings during my 2+ years as a Software Engineer at RapidOps Inc.",
      content:
        "<h2>Starting My Journey</h2><p>When I joined RapidOps Inc. in June 2022, I was excited but nervous about working in a professional development environment. Coming from freelance work, I knew I had the technical skills, but I wasn't sure how I'd adapt to working in a team.</p><h3>The Learning Curve</h3><p>The first few months were intense. I had to quickly adapt to:</p><ul><li>Working with larger codebases</li><li>Following strict coding standards</li><li>Collaborating with backend developers</li><li>Participating in code reviews</li></ul><h3>Key Learnings</h3><p>Over the past 2+ years, I've learned invaluable lessons:</p><h4>1. Code Reviews Are Gold</h4><p>Initially, I was nervous about code reviews. Now I see them as opportunities to learn and improve. Every review taught me something new about best practices, performance optimization, or cleaner code structure.</p><h4>2. Communication is Key</h4><p>Technical skills are important, but communication makes or breaks a project. Learning to explain complex technical concepts to non-technical stakeholders has been crucial.</p><h4>3. Continuous Learning</h4><p>The frontend landscape evolves rapidly. Staying updated with React updates, new libraries, and best practices is essential. I dedicate time each week to learning something new.</p><h3>Advice for New Developers</h3><p>If you're starting your frontend development journey:</p><ul><li>Focus on fundamentals first</li><li>Build projects, not just tutorials</li><li>Don't be afraid to ask questions</li><li>Embrace code reviews</li><li>Stay curious and keep learning</li></ul><p>My journey at RapidOps has been incredible, and I'm excited for what's ahead!</p>",
      date: "2024-01-15",
      readTime: "5 min read",
      tags: ["Career", "Frontend", "React", "Learning"],
      author: "Shivam Chudasama",
    },
    {
      id: 2,
      title: "Building Responsive UIs with Ant Design and React",
      excerpt:
        "A comprehensive guide to creating beautiful, responsive user interfaces using Ant Design components with React.js.",
      content:
        "<h2>Why Ant Design?</h2><p>Ant Design has become my go-to UI library for React projects. Here's why:</p><ul><li>Comprehensive component library</li><li>Excellent TypeScript support</li><li>Consistent design language</li><li>Great documentation</li></ul><h3>Getting Started</h3><p>Setting up Ant Design in your React project is straightforward:</p><pre><code>npm install antd\n\n// Import CSS\nimport 'antd/dist/reset.css';\n\n// Import components\nimport { Button, Card, Form } from 'antd';</code></pre><h3>Key Components for Responsive Design</h3><h4>1. Grid System</h4><p>Ant Design's grid system is based on 24 columns:</p><pre><code>import { Row, Col } from 'antd';\n\n&lt;Row gutter={[16, 16]}&gt;\n  &lt;Col xs={24} sm={12} md={8} lg={6}&gt;\n    Content\n  &lt;/Col&gt;\n&lt;/Row&gt;</code></pre><h4>2. Responsive Breakpoints</h4><p>Ant Design provides built-in breakpoints:</p><ul><li>xs: &lt; 576px</li><li>sm: ≥ 576px</li><li>md: ≥ 768px</li><li>lg: ≥ 992px</li><li>xl: ≥ 1200px</li><li>xxl: ≥ 1600px</li></ul><h3>Best Practices</h3><ol><li>Always test on multiple screen sizes</li><li>Use the grid system consistently</li><li>Leverage Ant Design's responsive props</li><li>Customize themes for brand consistency</li></ol><h3>Performance Tips</h3><p>To optimize your Ant Design applications:</p><ul><li>Use tree shaking to import only needed components</li><li>Implement lazy loading for large datasets</li><li>Optimize bundle size with proper imports</li></ul><p>Ant Design makes building responsive UIs enjoyable and efficient!</p>",
      date: "2024-01-10",
      readTime: "8 min read",
      tags: ["React", "Ant Design", "UI/UX", "Responsive Design"],
      author: "Shivam Chudasama",
    },
    {
      id: 3,
      title: "TypeScript Tips for React Developers",
      excerpt:
        "Essential TypeScript patterns and best practices that every React developer should know for better code quality.",
      content:
        "<h2>Why TypeScript with React?</h2><p>TypeScript has transformed how I write React applications. The benefits are clear:</p><ul><li>Catch errors at compile time</li><li>Better IDE support and autocomplete</li><li>Improved code documentation</li><li>Easier refactoring</li></ul><h3>Essential TypeScript Patterns</h3><h4>1. Component Props Typing</h4><pre><code>interface ButtonProps {\n  children: React.ReactNode;\n  onClick: () => void;\n  variant?: 'primary' | 'secondary';\n  disabled?: boolean;\n}\n\nconst Button: React.FC&lt;ButtonProps&gt; = ({ \n  children, \n  onClick, \n  variant = 'primary',\n  disabled = false \n}) => {\n  return (\n    &lt;button \n      onClick={onClick} \n      disabled={disabled}\n      className={`btn btn-${variant}`}\n    &gt;\n      {children}\n    &lt;/button&gt;\n  );\n};</code></pre><h4>2. State Typing</h4><pre><code>interface User {\n  id: number;\n  name: string;\n  email: string;\n}\n\nconst [user, setUser] = useState&lt;User | null&gt;(null);\nconst [users, setUsers] = useState&lt;User[]&gt;([]);</code></pre><h4>3. Event Handlers</h4><pre><code>const handleInputChange = (e: React.ChangeEvent&lt;HTMLInputElement&gt;) => {\n  setValue(e.target.value);\n};\n\nconst handleSubmit = (e: React.FormEvent&lt;HTMLFormElement&gt;) => {\n  e.preventDefault();\n  // Handle form submission\n};</code></pre><h3>Advanced Patterns</h3><h4>Generic Components</h4><pre><code>interface ListProps&lt;T&gt; {\n  items: T[];\n  renderItem: (item: T) => React.ReactNode;\n}\n\nfunction List&lt;T&gt;({ items, renderItem }: ListProps&lt;T&gt;) {\n  return (\n    &lt;ul&gt;\n      {items.map((item, index) => (\n        &lt;li key={index}&gt;{renderItem(item)}&lt;/li&gt;\n      ))}\n    &lt;/ul&gt;\n  );\n}</code></pre><h3>Common Mistakes to Avoid</h3><ol><li>Using 'any' type - defeats the purpose of TypeScript</li><li>Not typing component props properly</li><li>Ignoring TypeScript errors</li><li>Over-complicating types</li></ol><h3>Useful Utility Types</h3><ul><li>Partial&lt;T&gt; - makes all properties optional</li><li>Pick&lt;T, K&gt; - picks specific properties</li><li>Omit&lt;T, K&gt; - omits specific properties</li><li>Record&lt;K, T&gt; - creates object type with specific keys</li></ul><p>TypeScript might seem overwhelming at first, but it's worth the investment. Start small, be consistent, and gradually adopt more advanced patterns!</p>",
      date: "2024-01-05",
      readTime: "10 min read",
      tags: ["TypeScript", "React", "Best Practices", "Development"],
      author: "Shivam Chudasama",
    },
  ],
  contact: {
    email: "shivamchudasama.official@gmail.com",
    phone: "+91 7698723169",
    location: "Ahmedabad, Gujarat",
    availability: "Available for freelance projects",
    responseTime: "Within 24 hours",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/shivam-chudasama-software-engineer",
      github: "https://github.com/Shivolic76",
      twitter: "https://twitter.com/shivam_dev",
      instagram: "https://instagram.com/shivam.codes",
    },
  },
};
