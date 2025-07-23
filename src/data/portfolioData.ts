// Use direct paths to assets folder for Vercel compatibility

import type { PortfolioData } from "../services/portfolioService";

// Re-export the type for easier imports
export type { PortfolioData } from "../services/portfolioService";

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Shivam Chudasama",
    title: "Software Engineer",
    location: "Gujarat, India",
    email: "shivam.chudasama@rapidops.com",
    phone: "+91 9876543210",
    linkedin: "https://linkedin.com/in/shivam-chudasama",
    github: "https://github.com/shivam-chudasama",
    portfolio: "https://shivam-porfolio.netlify.app",
    avatar: "/src/assets/shivam-profile.jpg",
    description:
      "Passionate Software Engineer from Gujarat, India 🇮🇳 specializing in React.js, Next.js, and modern web technologies. I create dynamic, user-friendly applications with clean, maintainable code that delivers exceptional user experiences.",
    yearsOfExperience: "3+",
    projectsCompleted: "50+",
    resumeUrl: "/files/shivam-resume.pdf",
  },
  statistics: {
    projects: 17,
    experience: 3,
    clients: 3,
    commits: 700,
  },
  about: {
    professionalJourney:
      "As a Software Engineer with 2.5 years of experience from Gujarat, India 🇮🇳, I have a strong background in building dynamic and scalable web applications using ReactJS. I specialize in modern technologies like React.js, Next.js, Redux, TypeScript, and Ant Design, ensuring seamless user experiences.",
    passion:
      "Passionate about writing clean, maintainable code, I continuously explore new technologies to enhance performance and deliver high-quality solutions. I'm skilled in working with Formik, Yup, and other modern libraries for form handling and validation.",
    achievements: [
      "Built 50+ responsive React components with TypeScript",
      "Improved app performance by 40% through optimization",
      "Led migration to modern React patterns and hooks",
      "Mentored junior developers and conducted code reviews",
      "Delivered 25+ successful projects at RapidOps",
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
        "Spearheading complex frontend projects using React.js and Next.js to deliver scalable, high-performance solutions.",
      responsibilities: [
        "Lead frontend development for complex web applications using React.js and Next.js",
        "Design and implement reusable UI component libraries with TypeScript",
        "Collaborate with cross-functional teams to deliver high-quality software solutions",
        "Optimize application performance and ensure responsive design across devices",
        "Mentor junior developers and conduct code reviews",
        "Implement secure authentication systems and role-based access control",
        "Manage deployment pipelines and CI/CD processes",
      ],
      achievements: [
        "Developed reusable UI components that accelerated development by 30%",
        "Created data-driven dashboards using Ant Design and Recharts",
        "Built secure authentication and RBAC using JWT, middleware, and session tokens",
        "Streamlined CI/CD deployment with GitHub Actions and Vercel",
      ],
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Bootstrap 5",
        "Material-UI",
        "Ant Design",
        "Tailwind CSS",
        "",
      ],
    },
    {
      title: "ReactJs Developer",
      company: "Incipient Infotech",
      location: "Ahmedabad, India",
      type: "Full-time",
      duration: "September 2023 – January 2025",
      description:
        "Built and maintained responsive web applications using React.js, Next.js, and TypeScript, while managing client communications and Deployment workflows.",
      responsibilities: [
        "Develop and maintain responsive web applications using React.js, Next.js, and TypeScript",
        "Lead dashboard development for real-time data visualization and user interaction",
        "Manage client communications and gather requirements for project deliverables",
        "Maintain deployment processes",
        "Migrate legacy code to modern React standards using functional components and hooks",
        "Collaborate with cross-functional teams to ensure high-quality deliverables",
      ],
      achievements: [
        "Led the development of a real-time dashboard that streamlined data visualization and user interaction",
        "Successfully implemented code splitting, memoization, and lazy loading to boost app performance",
        "Integrated RESTful APIs and improved front-end performance using best practices",
        "Contributed actively to Agile workflows including sprint planning, daily stand-ups, and code reviews",
        "Migrated legacy class-based components to modern functional components with hooks",
        "Delivered highly reusable and scalable components across dynamic React applications",
      ],
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Bootstrap 5",
        "Material-UI",
        "Ant Design",
      ],
    },
    {
      title: "ReactJS Developer",
      company: "Quantex Solutions",
      location: "Remote",
      type: "Full-time",
      duration: "June 2022 – August 2023",
      description:
        "Developed and optimized UI components for client-facing applications using React and Redux.",
      responsibilities: [
        "Develop and optimize UI components for client-facing applications using React.js",
        "Implement state management solutions using Redux and React Context",
        "Create responsive and accessible user interfaces with modern CSS frameworks",
        "Collaborate with design teams to ensure pixel-perfect implementation",
        "Optimize application performance through React best practices",
        "Build scalable and reusable component libraries",
        "Maintain code quality through testing and code reviews",
      ],
      achievements: [
        "Improved application performance through React optimization techniques",
        "Built scalable, reusable components to reduce development time",
        "Enhanced UI/UX consistency across multiple platforms",
      ],
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Tailwind CSS",
        "Bootstrap 5",
      ],
    },
  ],
  projects: [
    {
      title: "Task Management System",
      description:
        "A comprehensive task management application with Kanban-style drag-and-drop functionality, real-time collaboration, and team management features.",
      technologies: [
        "React.js",
        "TypeScript",
        "Ant Design",
        "Redux Toolkit",
        "Node.js",
      ],
      features: [
        "Drag & drop interface",
        "Real-time collaboration",
        "Team management",
        "Progress tracking",
      ],
      status: "Completed",
      impact: "50% improvement in team productivity",
      image: "/images/projects/task-management.jpg",
      github: "https://github.com/shivam-chudasama/task-management",
      live: "https://task-management-shivam.netlify.app",
      category: "Web Application",
    },
    {
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce platform with shopping cart, payment integration, product catalog, and admin dashboard for inventory management.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Material-UI",
        "Stripe",
        "MongoDB",
      ],
      features: [
        "Product catalog",
        "Shopping cart",
        "Payment integration",
        "Admin dashboard",
      ],
      status: "Completed",
      impact: "200+ products managed efficiently",
      image: "/images/projects/ecommerce.jpg",
      github: "https://github.com/shivam-chudasama/ecommerce-platform",
      live: "https://ecommerce-shivam.netlify.app",
      category: "E-Commerce",
    },
    {
      title: "Personal Portfolio",
      description:
        "A responsive portfolio website showcasing projects, skills, and experience with modern animations and interactive elements.",
      technologies: ["React.js", "TypeScript", "Ant Design", "CSS3", "Netlify"],
      features: [
        "Responsive design",
        "Dark mode",
        "Smooth animations",
        "Contact form",
      ],
      status: "Completed",
      impact: "500+ portfolio views per month",
      image: "/images/projects/portfolio.jpg",
      github: "https://github.com/shivam-chudasama/portfolio",
      live: "https://shivam-porfolio.netlify.app",
      category: "Personal Project",
    },
    {
      title: "Image Gallery App",
      description:
        "A modern image gallery application with upload functionality, drag-and-drop interface, and responsive grid layout.",
      technologies: [
        "React.js",
        "Ant Design",
        "TypeScript",
        "Local Storage",
        "CSS Grid",
      ],
      features: [
        "Image upload",
        "Drag & drop",
        "Grid/List view",
        "Responsive design",
      ],
      status: "Completed",
      impact: "1000+ images uploaded",
      image: "/images/projects/gallery.jpg",
      github: "https://github.com/shivam-chudasama/image-gallery",
      live: "https://image-gallery-shivam.netlify.app",
      category: "Media Application",
    },
    {
      title: "User Management Dashboard",
      description:
        "A comprehensive user management system with CRUD operations, search functionality, and responsive data tables.",
      technologies: [
        "React.js",
        "Redux",
        "Ant Design",
        "REST APIs",
        "JSON Server",
      ],
      features: [
        "User CRUD operations",
        "Search & filter",
        "Data tables",
        "Form validation",
      ],
      status: "Completed",
      impact: "500+ users managed efficiently",
      image: "/images/projects/user-management.jpg",
      github: "https://github.com/shivam-chudasama/user-management",
      live: "https://user-management-shivam.netlify.app",
      category: "Dashboard",
    },
    {
      title: "React Component Library",
      description:
        "A reusable component library built with React, TypeScript, and Storybook for consistent UI across multiple projects.",
      technologies: [
        "React.js",
        "TypeScript",
        "Storybook",
        "Rollup",
        "CSS Modules",
      ],
      features: [
        "Reusable components",
        "TypeScript support",
        "Storybook docs",
        "NPM package",
      ],
      status: "In Progress",
      impact: "20+ components created",
      image: "/images/projects/component-library.jpg",
      github: "https://github.com/shivam-chudasama/react-components",
      live: "https://shivam-components.netlify.app",
      category: "Library",
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
      title: "React Developer Certification",
      issuer: "Meta (Facebook)",
      date: "2023",
      credentialId: "META-REACT-2023-001",
      icon: "TrophyOutlined",
      color: "#61DAFB",
      url: "https://coursera.org/verify/certificate-id",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "2022",
      credentialId: "FCC-JS-2022-456",
      icon: "CodeOutlined",
      color: "#F7DF1E",
      url: "https://freecodecamp.org/certification/shivam/javascript",
    },
    {
      title: "Frontend Web Development",
      issuer: "Coursera",
      date: "2022",
      credentialId: "COURSERA-FE-2022-789",
      icon: "DesktopOutlined",
      color: "#0056D3",
      url: "https://coursera.org/verify/frontend-cert",
    },
    {
      title: "TypeScript Fundamentals",
      issuer: "Microsoft Learn",
      date: "2023",
      credentialId: "MS-TS-2023-123",
      icon: "BookOutlined",
      color: "#3178C6",
      url: "https://docs.microsoft.com/learn/certifications",
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
    email: "shivam.chudasama@rapidops.com",
    phone: "+91 9876543210",
    location: "Gujarat, India",
    availability: "Available for freelance projects",
    responseTime: "Within 24 hours",
    socialLinks: {
      linkedin: "https://linkedin.com/in/shivam-chudasama",
      github: "https://github.com/shivam-chudasama",
      twitter: "https://twitter.com/shivam_dev",
      instagram: "https://instagram.com/shivam.codes",
    },
  },
};
