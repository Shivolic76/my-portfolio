// Use direct paths to assets folder for Vercel compatibility

import type { PortfolioData } from "../services/portfolioService";

// Re-export the type for easier imports
export type { PortfolioData } from "../services/portfolioService";

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Shivam Chudasama",
    title: "Frontend Engineer",
    location: "Ahmedabad, Gujarat",
    email: "shivamchudasama.official@gmail.com",
    phone: "+91 7698723169",
    linkedin: "https://www.linkedin.com/in/shivam-chudasama-software-engineer",
    github: "https://github.com/Shivolic76",
    portfolio: "https://shivcodespace.vercel.app",
    avatar: "/assets/shivam-profile.jpg",
    description:
      "Frontend Engineer with 4+ years of experience building scalable SaaS, analytics, and real-time web applications. I combine React.js, Next.js, and TypeScript expertise with AI tools like GitHub Copilot, Claude AI, and Cursor to ship production-grade features faster and smarter.",
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
        "Cross-platform web & mobile",
        "Optimized rendering performance",
        "Live IPO data for investors",
      ],
      status: "Live",
      impact: "Real-time IPO data for investors across web and mobile",
      image: "/images/projects/ipo-analytix.jpg",
      github: "",
      live: "https://www.ipoanalytix.com/",
      playStore: "https://play.google.com/store/apps/details?id=com.ipoanalytix.app",
      category: "Analytics Platform",
      featured: true,
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
      name: "Suraj Sangle",
      role: "Frontend Developer",
      company: "Incipient Infotech",
      content:
        "Working alongside Shivam at Incipient Infotech was a great experience. He has a solid grasp of React and always wrote clean, well-structured code. His ability to break down complex UI problems and come up with practical solutions made our collaboration seamless.",
      rating: 5,
      avatar: "",
    },
    {
      name: "Dharmesh",
      role: "Frontend Developer",
      company: "Incipient Infotech",
      content:
        "Shivam is one of the most focused developers I've worked with. At Incipient Infotech, he consistently delivered quality work and never shied away from challenging tasks. His attention to detail and commitment to pixel-perfect UI really stood out.",
      rating: 5,
      avatar: "",
    },
    {
      name: "Jay Thummar",
      role: "Software Developer",
      company: "RapidOps Inc.",
      content:
        "Shivam has been an excellent colleague at RapidOps. He's quick to pick up new technologies and always ensures his code is maintainable and performant. His work on our React and TypeScript projects has been consistently reliable and well thought out.",
      rating: 5,
      avatar: "",
    },
    {
      name: "Niraj Goswami",
      role: "Software Developer",
      company: "Quantex Solutions",
      content:
        "I had the pleasure of working with Shivam at Quantex Solutions. He's a dedicated and skilled frontend developer who takes ownership of his work. His knowledge of React and modern JavaScript made a real impact on the projects we collaborated on.",
      rating: 5,
      avatar: "",
    },
  ],
  education: [
    {
      degree: "Bachelor of Engineering",
      field: "Computer Engineering",
      institution: "L.D. College of Engineering",
      location: "Ahmedabad, Gujarat",
      duration: "2016 – 2019",
      type: "B.E.",
    },
    {
      degree: "Diploma in Computer Engineering",
      field: "Computer Engineering",
      institution: "C.U. Shah University",
      location: "Surendranagar, Gujarat",
      duration: "2013 – 2016",
      type: "Diploma",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      field: "General Studies",
      institution: "GSEB Board",
      location: "Gujarat",
      duration: "2012 – 2013",
      type: "SSC",
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
      url: "https://www.udemy.com/certificate/UC-ed56282a-a83e-4ff4-a281-e4bd99b47acc/",
    },
    {
      title: "Modern JavaScript",
      issuer: "Udemy",
      date: "Jun 2020",
      credentialId: "UC-0ab4ba1b-0ff5-4dc2-ac4b-baca7371e6c2",
      icon: "CodeOutlined",
      color: "#F7DF1E",
      url: "https://www.udemy.com/certificate/UC-0ab4ba1b-0ff5-4dc2-ac4b-baca7371e6c2/",
    },
    {
      title: "Bootstrap 5",
      issuer: "Udemy",
      date: "Sep 2022",
      credentialId: "UC-6374d852-e3f9-4a4f-961d-30a151576068",
      icon: "AppstoreAddOutlined",
      color: "#7952B3",
      url: "https://www.udemy.com/certificate/UC-6374d852-e3f9-4a4f-961d-30a151576068/",
    },
    {
      title: "Modern React",
      issuer: "Udemy",
      date: "Oct 2020",
      credentialId: "UC-2df5a270-1e1c-4edf-8ff1-08e1de8cdec4",
      icon: "ThunderboltOutlined",
      color: "#61DAFB",
      url: "https://www.udemy.com/certificate/UC-2df5a270-1e1c-4edf-8ff1-08e1de8cdec4/",
    },
  ],
  blogs: [
    {
      id: 1,
      title: "4+ Years in Frontend: What I Wish I Knew From Day One",
      excerpt:
        "Honest reflections on my frontend engineering journey — the hard lessons, career pivots, and the mindset shifts that made the biggest difference.",
      content:
        "<h2>Where It All Started</h2><p>I began writing React code in 2021, building small freelance projects and watching YouTube tutorials at midnight. Fast forward to today — I've shipped production features used by thousands of users, worked across three companies, and led frontend architecture decisions on cross-functional teams. But none of it came without stumbling.</p><p>Here's what I wish someone had told me at the start.</p><h3>1. Fundamentals Beat Frameworks</h3><p>I spent my early months jumping from React to Vue to Angular, always chasing the newest thing. The developers I respect most are those who can explain <em>why</em> something works, not just <em>how</em> to use a library. JavaScript closures, the event loop, DOM APIs — understanding these deeply made me 10x better at debugging and architecture.</p><h3>2. Code Reviews Are the Fastest Learning Loop</h3><p>When I joined Incipient Infotech, I was nervous about code reviews. Now I see them as the most valuable 15 minutes of my week. Every comment is a free lesson. I started keeping a personal note with patterns I learned from reviews — after a year, that document had over 80 items.</p><h3>3. Ship Something Users Touch</h3><p>Tutorials and side projects are great, but nothing sharpens your thinking like knowing real users will hit your component in 10 minutes. The pressure of production forces you to think about edge cases, loading states, and error handling in a way no course ever will.</p><h3>4. AI Tools Are a Force Multiplier — If You Use Them Right</h3><p>GitHub Copilot and Claude AI didn't replace my thinking — they eliminated the boring parts of it. I no longer waste 20 minutes writing boilerplate Axios interceptors or Redux slices. I write the intent, review the output, and move to the hard part: architecture and UX. The developers who resist these tools will fall behind those who learn to pair with them.</p><h3>5. The Soft Skills Gap Is Real</h3><p>At Quantex Solutions, I was the best coder on my team for a stretch. But I struggled in sprint planning meetings and client calls. I wasn't bad at communication — I just hadn't practiced it intentionally. Invest in this early. Write documentation. Present your work in standups. Ask clarifying questions instead of making assumptions.</p><h3>The Mindset That Changed Everything</h3><p>Somewhere around year 3, I stopped thinking of myself as someone who writes code and started thinking of myself as someone who solves problems that happen to require code. That shift changed how I read requirements, how I talk to designers, and how I measure my own success.</p><p>If you're earlier in your journey: trust the process, stay curious, and never stop shipping.</p>",
      date: "2026-05-12",
      readTime: "6 min read",
      tags: ["Career", "Frontend", "Growth", "Mindset"],
      author: "Shivam Chudasama",
    },
    {
      id: 2,
      title: "How AI Copilots Actually Changed My Daily Workflow",
      excerpt:
        "A real developer's take on using GitHub Copilot, Claude AI, and Cursor IDE day-to-day — not the hype, just what actually works.",
      content:
        "<h2>The Honest Truth About AI Tools</h2><p>When GitHub Copilot first came out, I was sceptical. I'd read the hot takes — 'it writes bad code', 'it's just autocomplete', 'it'll make junior devs lazy'. After 18+ months of daily use across Copilot, Claude AI, ChatGPT, and Cursor IDE, I have a more nuanced view.</p><p>These tools didn't make me a worse developer. They made me a much faster one — but only once I learned how to use them as a thinking partner rather than a code vending machine.</p><h3>What I Use and When</h3><h4>GitHub Copilot — for flow state</h4><p>Copilot lives in my editor and is best when I'm in the middle of something and don't want to break concentration. Writing a new Axios API service? Copilot suggests the shape of the function after I type the first line. Creating a Redux Toolkit slice? It fills in the boilerplate while I focus on the action names and state shape. It keeps me in flow.</p><h4>Claude AI — for thinking through problems</h4><p>Claude is where I go when I'm stuck or when I need to think out loud. I'll paste a component and ask: 'What are the edge cases I haven't handled here?' or 'Is there a more composable way to structure this?' The answers are almost always worth reading — not always right, but always worth engaging with.</p><h4>Cursor IDE — for large refactors</h4><p>Cursor's ability to apply changes across multiple files at once is genuinely remarkable. A recent migration from class-based to functional components that would have taken me two days took about four hours. I reviewed every change, but the AI did the mechanical lifting.</p><h3>How I Prompt Effectively</h3><p>Bad prompt: <em>'write a React component'</em></p><p>Good prompt: <em>'Write a TypeScript React component called UserTable that accepts a users prop typed as User[], renders an Ant Design Table with Name and Email columns, shows a loading skeleton when isLoading is true, and calls onDelete(id) when the delete icon is clicked'</em></p><p>Specificity is everything. The more context and constraints you give, the more useful the output. Think of it as delegating to a very fast junior developer who needs clear requirements.</p><h3>What AI Cannot Replace</h3><ul><li>Understanding <em>why</em> an architecture decision is right for your specific context</li><li>Catching subtle UX regressions that only a human eye notices</li><li>Navigating the politics of a sprint planning meeting</li><li>Knowing when to push back on a requirement</li><li>Reading a user's frustration in a support ticket and translating it into the right fix</li></ul><h3>My Verdict</h3><p>AI tools compress the time between 'I know what I want to build' and 'it's working in the browser'. They don't eliminate the need to think — they just eliminate the friction between thinking and shipping. Embrace them deliberately, review their output critically, and you'll ship better software faster.</p>",
      date: "2026-04-20",
      readTime: "7 min read",
      tags: ["AI Tools", "GitHub Copilot", "Productivity", "Development"],
      author: "Shivam Chudasama",
    },
    {
      id: 3,
      title: "React Performance: How I Cut Bundle Size and Load Time by 30%",
      excerpt:
        "The exact techniques I applied on a live SaaS product to achieve a 30% improvement in frontend performance — code splitting, memoization, and more.",
      content:
        "<h2>The Problem Was Real</h2><p>Earlier this year, I was handed a React + Vite SaaS dashboard that had grown organically for two years. Initial page load was sluggish, the bundle was over 2MB uncompressed, and users were complaining. After a focused two-week sprint, we shipped a 30% improvement in load time and a 40% reduction in bundle size. Here's exactly what we did.</p><h3>Step 1: Measure First, Optimize Second</h3><p>The biggest mistake developers make with performance is guessing. We used three tools before writing a single line of optimization code:</p><ul><li><strong>Vite Bundle Analyzer</strong> — visualizes what's in your bundle and why</li><li><strong>Chrome DevTools Performance tab</strong> — records real render timelines</li><li><strong>Lighthouse CI</strong> — gives reproducible scores to track regressions</li></ul><p>The bundle analyzer revealed that a single charting library (imported in full) accounted for 380KB. That was our first target.</p><h3>Step 2: Lazy Load Everything That Isn't Critical</h3><pre><code>// Before: everything loads upfront\nimport AnalyticsPage from './pages/AnalyticsPage';\nimport ReportsPage from './pages/ReportsPage';\n\n// After: load on demand\nconst AnalyticsPage = React.lazy(() => import('./pages/AnalyticsPage'));\nconst ReportsPage = React.lazy(() => import('./pages/ReportsPage'));\n\n// Wrap routes in Suspense\n&lt;Suspense fallback={&lt;PageSkeleton /&gt;}&gt;\n  &lt;Routes&gt;\n    &lt;Route path=&quot;/analytics&quot; element={&lt;AnalyticsPage /&gt;} /&gt;\n  &lt;/Routes&gt;\n&lt;/Suspense&gt;</code></pre><p>This alone moved ~600KB out of the initial bundle into async chunks loaded only when the user navigates to those routes.</p><h3>Step 3: Memoize Expensive Computations</h3><pre><code>// Recalculating on every render — expensive\nconst chartData = rawData.map(transformRow).filter(isValid);\n\n// Memoized — only recalculates when rawData changes\nconst chartData = useMemo(\n  () => rawData.map(transformRow).filter(isValid),\n  [rawData]\n);</code></pre><p>Use <code>useMemo</code> for expensive derivations and <code>useCallback</code> for stable function references passed to memoized children. But be careful — memoization itself has a cost. Only apply it where profiling confirms a problem.</p><h3>Step 4: Virtualize Long Lists</h3><p>One page had a table rendering 5,000 rows. We switched from a full render to <code>react-window</code>, which only renders the visible rows:</p><pre><code>import { FixedSizeList } from 'react-window';\n\n&lt;FixedSizeList\n  height={600}\n  itemCount={data.length}\n  itemSize={48}\n  width=&quot;100%&quot;\n&gt;\n  {({ index, style }) => (\n    &lt;div style={style}&gt;\n      &lt;Row data={data[index]} /&gt;\n    &lt;/div&gt;\n  )}\n&lt;/FixedSizeList&gt;</code></pre><p>Render time for that page dropped from ~900ms to ~80ms.</p><h3>Step 5: Tree-shake Heavy Libraries</h3><pre><code>// Bad: imports entire lodash (70KB+)\nimport _ from 'lodash';\nconst result = _.groupBy(items, 'category');\n\n// Good: named import, tree-shakeable\nimport groupBy from 'lodash/groupBy';\nconst result = groupBy(items, 'category');</code></pre><h3>Results After Two Weeks</h3><ul><li>Initial bundle: 2.1MB → 1.25MB (−40%)</li><li>Lighthouse Performance score: 54 → 81</li><li>Largest Contentful Paint: 4.2s → 2.8s</li><li>Overall perceived load time improvement: ~30%</li></ul><p>Performance work is never done, but measurement-driven iteration moves fast. Pick one bottleneck, fix it, measure again.</p>",
      date: "2026-03-15",
      readTime: "10 min read",
      tags: ["React", "Performance", "Optimization", "Vite"],
      author: "Shivam Chudasama",
    },
    {
      id: 4,
      title: "Redux Toolkit in 2026: Slices, RTK Query, and When to Use It",
      excerpt:
        "An honest assessment of Redux Toolkit after using it across multiple production apps — what it's great at, when to reach for something lighter, and RTK Query patterns I swear by.",
      content:
        "<h2>Redux Has a PR Problem</h2><p>Mention Redux to a frontend developer in 2026 and you'll get one of two reactions: an eye-roll ('too much boilerplate!') or a nod of familiarity. Both reactions are usually based on experience with the old Redux — actions, action creators, switch-case reducers, <code>connect()</code> HOCs, and mapStateToProps. That Redux was verbose. Redux Toolkit (RTK) is a different beast.</p><h3>What Redux Toolkit Changed</h3><p>RTK ships three core improvements that eliminated almost all of the boilerplate I used to hate:</p><h4>1. createSlice — actions and reducers in one place</h4><pre><code>import { createSlice, PayloadAction } from '@reduxjs/toolkit';\n\ninterface AuthState {\n  user: User | null;\n  isLoading: boolean;\n}\n\nconst authSlice = createSlice({\n  name: 'auth',\n  initialState: { user: null, isLoading: false } as AuthState,\n  reducers: {\n    setUser(state, action: PayloadAction&lt;User&gt;) {\n      state.user = action.payload; // Immer handles immutability\n    },\n    logout(state) {\n      state.user = null;\n    },\n  },\n});\n\nexport const { setUser, logout } = authSlice.actions;\nexport default authSlice.reducer;</code></pre><p>That's it. No separate action type constants, no action creator factories. And Immer under the hood means you write mutations that are secretly immutable.</p><h4>2. RTK Query — data fetching without the ceremony</h4><pre><code>import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';\n\nexport const ipoApi = createApi({\n  reducerPath: 'ipoApi',\n  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),\n  endpoints: (builder) => ({\n    getIpoList: builder.query&lt;IPO[], void&gt;({\n      query: () => '/ipos',\n    }),\n    getIpoById: builder.query&lt;IPO, string&gt;({\n      query: (id) => `/ipos/${id}`,\n    }),\n  }),\n});\n\nexport const { useGetIpoListQuery, useGetIpoByIdQuery } = ipoApi;</code></pre><p>RTK Query gives you caching, loading/error states, refetching, and optimistic updates for free. On the IPO Analytix project, switching to RTK Query removed about 400 lines of manual data-fetching logic.</p><h3>When I Reach for RTK</h3><ul><li>Large apps with complex, shared state (authentication, cart, multi-step flows)</li><li>Teams of 3+ developers who need a predictable data flow</li><li>When server state and client state are genuinely separate concerns</li><li>Anywhere Redux DevTools time-travel debugging would be valuable</li></ul><h3>When I Don't</h3><ul><li>Simple apps where <code>useState</code> + Context is enough</li><li>Pure server-state apps where React Query or SWR is more appropriate</li><li>Prototypes where setup time matters more than scalability</li></ul><h3>The Pattern I Use Every Time</h3><p>Separate your API state (RTK Query) from your UI state (createSlice). Don't put server responses into a slice just to normalize them — RTK Query's cache already handles that. Only use slices for state that the user creates locally: form drafts, selected filters, modal open/close, pagination cursor.</p><p>Redux Toolkit in 2026 is lean, type-safe, and genuinely pleasant to work with. Give it a fair chance with RTK and judge it on its merits.</p>",
      date: "2026-02-08",
      readTime: "9 min read",
      tags: ["Redux", "RTK Query", "React", "State Management"],
      author: "Shivam Chudasama",
    },
    {
      id: 5,
      title: "Building a Reusable Component Library: Lessons from Real Projects",
      excerpt:
        "I've built reusable component libraries at two companies. Here's what I got wrong the first time, what I improved the second time, and the principles I now design every component around.",
      content:
        "<h2>Why Component Libraries Matter</h2><p>At Incipient Infotech, we maintained three separate client projects simultaneously. Each one had its own Button component, its own Modal wrapper, its own Input with validation. Bugs got fixed in one project and not the others. Designers noticed inconsistencies. Developers wasted time re-solving solved problems.</p><p>After building our first shared component library, development effort dropped by roughly 15% and UI consistency complaints from clients nearly disappeared. Here's what I learned.</p><h3>Mistake 1: Building for Today Instead of Tomorrow</h3><p>The first library I built was too specific. We had a <code>ClientDashboardCard</code> that was tightly coupled to one client's data shape. When the next project needed something similar, we couldn't reuse it — we had to copy-paste and modify.</p><p>The rule I now follow: <strong>a component should know nothing about the domain it lives in</strong>. A Card component accepts children, a header, and an optional footer. It doesn't know what a 'client' or a 'dashboard' is.</p><h3>The Composition Pattern</h3><pre><code>// Bad: Monolithic, domain-coupled\n&lt;ClientStatsCard\n  clientName={client.name}\n  revenue={client.revenue}\n  growth={client.growth}\n/&gt;\n\n// Good: Composable, reusable\n&lt;Card&gt;\n  &lt;Card.Header&gt;{client.name}&lt;/Card.Header&gt;\n  &lt;Card.Body&gt;\n    &lt;Stat label=&quot;Revenue&quot; value={client.revenue} /&gt;\n    &lt;Stat label=&quot;Growth&quot; value={client.growth} trend=&quot;up&quot; /&gt;\n  &lt;/Card.Body&gt;\n&lt;/Card&gt;</code></pre><p>The compound component pattern (Card.Header, Card.Body) gives consumers flexibility while the component handles all the styling logic.</p><h3>Typing Your Props Contract</h3><p>A component library lives or dies by its TypeScript interface. Think hard about the props API before writing the implementation — changing it later is painful.</p><pre><code>interface ButtonProps {\n  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';\n  size?: 'sm' | 'md' | 'lg';\n  isLoading?: boolean;\n  leftIcon?: React.ReactNode;\n  rightIcon?: React.ReactNode;\n  fullWidth?: boolean;\n  // Pass-through all native button attributes\n  children: React.ReactNode;\n} & React.ButtonHTMLAttributes&lt;HTMLButtonElement&gt;;</code></pre><p>Extending <code>React.ButtonHTMLAttributes</code> means consumers can still pass <code>onClick</code>, <code>disabled</code>, <code>type</code>, and any other native attribute without you having to explicitly expose them.</p><h3>Documentation is the Product</h3><p>A component nobody knows how to use is a component nobody uses. Every component in our library had:</p><ul><li>A usage example showing the most common case</li><li>A props table with types, defaults, and descriptions</li><li>An edge cases section (what happens with very long text, empty states, loading states)</li></ul><p>Even without Storybook (which is worth the setup time on larger teams), a well-written README section per component reduces integration time dramatically.</p><h3>Key Principles I Design Around</h3><ol><li><strong>Single responsibility</strong> — one component does one thing well</li><li><strong>Open for extension, closed for modification</strong> — expose the right escape hatches</li><li><strong>Predictable defaults</strong> — sensible behaviour out of the box, customisable when needed</li><li><strong>Accessibility first</strong> — ARIA roles and keyboard navigation from the start, not bolted on later</li></ol><p>Building a component library is one of the highest-leverage things a frontend team can do. The upfront investment pays dividends every sprint thereafter.</p>",
      date: "2025-12-10",
      readTime: "9 min read",
      tags: ["React", "Component Library", "Architecture", "TypeScript"],
      author: "Shivam Chudasama",
    },
    {
      id: 6,
      title: "TypeScript Patterns That Actually Saved Me in Production",
      excerpt:
        "Beyond basic prop typing — the TypeScript patterns I reach for when building large-scale React apps: discriminated unions, type guards, conditional types, and more.",
      content:
        "<h2>TypeScript Beyond the Basics</h2><p>Most TypeScript tutorials stop at 'type your useState and your component props'. That's fine for getting started, but in a large codebase — multiple developers, complex API responses, deeply nested state — those basics aren't enough. Here are the patterns I use daily that have caught real bugs before they reached production.</p><h3>1. Discriminated Unions for API State</h3><p>One of the most common bugs I see in React apps: accessing <code>data.user.name</code> before checking if the request succeeded. Discriminated unions make this impossible:</p><pre><code>type ApiState&lt;T&gt; =\n  | { status: 'idle' }\n  | { status: 'loading' }\n  | { status: 'success'; data: T }\n  | { status: 'error'; error: string };\n\nconst [state, setState] = useState&lt;ApiState&lt;User&gt;&gt;({ status: 'idle' });\n\n// TypeScript forces you to handle all cases\nif (state.status === 'success') {\n  console.log(state.data.name); // Safe — data is only accessible here\n}</code></pre><p>No more 'Cannot read property of undefined' at 2am.</p><h3>2. Type Guards for Runtime Safety</h3><pre><code>interface AdminUser { role: 'admin'; permissions: string[]; }\ninterface RegularUser { role: 'user'; }\ntype User = AdminUser | RegularUser;\n\n// Custom type guard\nfunction isAdmin(user: User): user is AdminUser {\n  return user.role === 'admin';\n}\n\n// Now TypeScript narrows the type inside the if block\nif (isAdmin(currentUser)) {\n  renderAdminPanel(currentUser.permissions); // permissions is accessible\n}</code></pre><h3>3. Mapped Types for Consistent Data Shapes</h3><pre><code>type FormFields = 'email' | 'password' | 'confirmPassword';\n\n// Generate a matching error shape automatically\ntype FormErrors = Partial&lt;Record&lt;FormFields, string&gt;&gt;;\n\n// Now errors and fields always stay in sync\nconst [errors, setErrors] = useState&lt;FormErrors&gt;({});</code></pre><h3>4. Template Literal Types for Event Names</h3><pre><code>type Entity = 'user' | 'product' | 'order';\ntype Action = 'created' | 'updated' | 'deleted';\n\n// Autocompleted, type-safe event names\ntype AppEvent = `${Entity}:${Action}`;\n// 'user:created' | 'user:updated' | ... | 'order:deleted'\n\nfunction emit(event: AppEvent, payload: unknown) { ... }</code></pre><h3>5. The 'satisfies' Operator for Config Objects</h3><pre><code>// Before: cast loses type info, or annotation is too loose\nconst routes = {\n  home: '/',\n  dashboard: '/dashboard',\n} as const;\n\n// After: satisfies validates the shape, preserves literal types\nconst routes = {\n  home: '/',\n  dashboard: '/dashboard',\n} satisfies Record&lt;string, string&gt;;\n\n// routes.home is still typed as '/' (literal), not string</code></pre><h3>The Most Important Rule</h3><p>Never use <code>any</code> as an escape hatch — use <code>unknown</code> instead and narrow it with type guards. The 30 seconds you spend writing a proper guard will save you hours of debugging a runtime error that TypeScript would have caught.</p>",
      date: "2025-10-22",
      readTime: "10 min read",
      tags: ["TypeScript", "React", "Best Practices", "Production"],
      author: "Shivam Chudasama",
    },
    {
      id: 7,
      title: "Ant Design 5 in Production: What I Learned Building SaaS Dashboards",
      excerpt:
        "Real-world Ant Design 5 patterns from building SaaS dashboards — custom design tokens, Form performance, Table optimizations, and the gotchas that cost me hours.",
      content:
        "<h2>Why Ant Design for SaaS?</h2><p>I've used Material-UI, Chakra UI, and Tailwind-based custom systems. For data-heavy SaaS dashboards — think tables with hundreds of rows, complex multi-step forms, date pickers, and analytics charts — Ant Design 5 is consistently the most productive choice. It's opinionated in the right ways and flexible where it matters.</p><p>But it has sharp edges. Here's what I've learned shipping it in production.</p><h3>Design Tokens: Stop Overriding CSS</h3><p>The biggest mistake devs make with Ant Design 5 is writing CSS overrides everywhere. The design token system exists precisely so you don't have to:</p><pre><code>import { ConfigProvider } from 'antd';\n\n&lt;ConfigProvider\n  theme={{\n    token: {\n      colorPrimary: '#1d4ed8',\n      borderRadius: 8,\n      fontFamily: 'Inter, sans-serif',\n      colorBgContainer: '#ffffff',\n    },\n    components: {\n      Button: { borderRadius: 10, fontWeight: 600 },\n      Card:   { paddingLG: 24 },\n      Table:  { headerBg: '#f8fafc' },\n    },\n  }}\n&gt;\n  &lt;App /&gt;\n&lt;/ConfigProvider&gt;</code></pre><p>This approach keeps your overrides co-located, type-safe, and compatible with Ant Design's own dark mode support.</p><h3>Form Performance with Large Field Sets</h3><p>Ant Design's Form component re-renders the entire form on every keystroke by default when you use <code>Form.useWatch</code>. For forms with 30+ fields, this is a serious performance issue. The fix:</p><pre><code>// Bad: watches everything, re-renders on every change\nconst values = Form.useWatch([], form);\n\n// Good: watches only what you need\nconst country = Form.useWatch('country', form);\n\n// For inter-field dependencies, use shouldUpdate\n&lt;Form.Item shouldUpdate={(prev, cur) =&gt; prev.type !== cur.type}&gt;\n  {({ getFieldValue }) =&gt; (\n    getFieldValue('type') === 'corporate'\n      ? &lt;Form.Item name=&quot;gstNumber&quot;&gt;&lt;Input /&gt;&lt;/Form.Item&gt;\n      : null\n  )}\n&lt;/Form.Item&gt;</code></pre><h3>Table Virtualization for Large Datasets</h3><pre><code>import { Table } from 'antd';\n\n// Enable virtual scrolling for large datasets\n&lt;Table\n  dataSource={largeDataset}\n  columns={columns}\n  scroll={{ y: 600 }}\n  virtual        // &lt;-- Ant Design 5.9+ built-in virtualization\n  rowKey=&quot;id&quot;\n/&gt;</code></pre><p>For datasets over 500 rows, virtual scrolling is not optional — it's the difference between a 60fps table and a frozen browser.</p><h3>The Gotchas That Cost Me Hours</h3><ul><li><strong>Modal destroyOnHide</strong>: By default, Ant Design keeps Modal DOM alive after close. Set <code>destroyOnClose</code> if your modal contains a Form, otherwise field values persist between opens.</li><li><strong>Select with async options</strong>: Always set a stable <code>key</code> on Select when its options change async, otherwise the selected value can display incorrectly.</li><li><strong>Drawer vs Modal on mobile</strong>: Drawers are almost always better UX on mobile. Build a responsive wrapper that renders a Drawer below 768px and a Modal above.</li><li><strong>ConfigProvider nesting</strong>: You can nest ConfigProviders to apply different tokens to sub-trees — great for dark sidebars in an otherwise light dashboard.</li></ul><h3>My Ant Design Starter Checklist</h3><ol><li>Set all tokens in a single top-level ConfigProvider</li><li>Wrap the app in <code>App</code> component (provides static message/modal/notification methods)</li><li>Import <code>antd/dist/reset.css</code> only once at the root</li><li>Create a thin wrapper around Form.Item with your standard label/error styles</li><li>Enable <code>virtual</code> on any Table with dynamic data</li></ol><p>Ant Design 5 rewards developers who take the time to understand its token system and avoid the temptation to fight it with CSS overrides. Work with it, not against it.</p>",
      date: "2025-08-30",
      readTime: "11 min read",
      tags: ["Ant Design", "React", "SaaS", "Performance"],
      author: "Shivam Chudasama",
    },
    {
      id: 8,
      title: "React 19: The Features I'm Already Using in Production",
      excerpt:
        "React 19 shipped game-changing features — the new use() hook, Actions, optimistic updates, and ref as a prop. Here's what I've adopted and why each one matters.",
      content:
        "<h2>React 19 Is a Bigger Deal Than You Think</h2><p>When React 19 dropped stable, most articles covered the feature list. Fewer talked about how these features actually change the patterns you write daily. After shipping two projects on React 19, here's my honest take on what's worth adopting now.</p><h3>1. The use() Hook — Async Without useEffect</h3><p>The new <code>use()</code> hook lets you read the value of a Promise or Context directly inside render — no more <code>useEffect</code> + <code>useState</code> combos for simple async data.</p><pre><code>// Old pattern\nconst [user, setUser] = useState(null);\nuseEffect(() => {\n  fetchUser(id).then(setUser);\n}, [id]);\n\n// React 19 with use() + Suspense\nconst user = use(fetchUser(id)); // Suspense handles the loading state\n\n// Wrap in Suspense\n&lt;Suspense fallback={&lt;Skeleton /&gt;}&gt;\n  &lt;UserProfile id={id} /&gt;\n&lt;/Suspense&gt;</code></pre><p>This dramatically simplifies components that only fetch and display data. The component body stays synchronous-looking even when the data is async.</p><h3>2. Actions — Server and Client Form Handling</h3><p>React 19 introduces Actions as a first-class concept. Combined with <code>useActionState</code>, form handling becomes far less boilerplate-heavy:</p><pre><code>import { useActionState } from 'react';\n\nasync function submitContact(prevState, formData) {\n  const email = formData.get('email');\n  const result = await sendEmail(email);\n  return result.ok ? { success: true } : { error: 'Failed to send' };\n}\n\nfunction ContactForm() {\n  const [state, action, isPending] = useActionState(submitContact, null);\n\n  return (\n    &lt;form action={action}&gt;\n      &lt;input name='email' type='email' /&gt;\n      &lt;button disabled={isPending}&gt;\n        {isPending ? 'Sending...' : 'Send'}\n      &lt;/button&gt;\n      {state?.error &amp;&amp; &lt;p&gt;{state.error}&lt;/p&gt;}\n    &lt;/form&gt;\n  );\n}</code></pre><h3>3. useOptimistic — Instant UI Feedback</h3><p>Optimistic updates used to require complex state juggling. <code>useOptimistic</code> makes them a one-liner:</p><pre><code>const [optimisticLikes, addOptimisticLike] = useOptimistic(\n  post.likes,\n  (currentLikes, increment) => currentLikes + increment\n);\n\nconst handleLike = async () => {\n  addOptimisticLike(1);           // Instantly shows +1\n  await likePost(post.id);        // Syncs with server\n};</code></pre><p>The UI updates immediately. If the server call fails, React automatically rolls back to the real value. No manual error-state cleanup.</p><h3>4. ref as a Prop — No More forwardRef</h3><p>This one is pure ergonomics. In React 19 you can pass <code>ref</code> as a regular prop without wrapping in <code>React.forwardRef</code>:</p><pre><code>// Before React 19\nconst Input = React.forwardRef((props, ref) => (\n  &lt;input ref={ref} {...props} /&gt;\n));\n\n// React 19\nfunction Input({ ref, ...props }) {\n  return &lt;input ref={ref} {...props} /&gt;;\n}</code></pre><h3>What I Haven't Adopted Yet</h3><p>React Server Components are powerful but require a framework like Next.js to shine. In a pure Vite + React setup, they're not yet ergonomic. I'm watching this space for when the tooling matures outside of Next.js.</p><p>React 19 is a well-earned major version. The improvements feel like the React team finally acknowledged the friction developers lived with for years. Upgrade when you can — the DX improvements are real.</p>",
      date: "2026-06-10",
      readTime: "8 min read",
      tags: ["React 19", "React", "Frontend", "JavaScript"],
      author: "Shivam Chudasama",
    },
    {
      id: 9,
      title: "TanStack Query v5: Why I Now Reach for It Before Redux",
      excerpt:
        "TanStack Query (formerly React Query) v5 has matured into the cleanest solution for server state in React apps. Here's how I use it and why it replaced RTK Query in my new projects.",
      content:
        "<h2>The Server State vs Client State Distinction</h2><p>The most important mental shift in modern React development is this: <strong>server state and client state are fundamentally different problems</strong>. Server state is asynchronous, can go stale, needs caching and background refetching, and can be shared across many components. Client state (form values, modals open/closed, selected filters) is synchronous, local, and ephemeral.</p><p>Redux was designed for client state. TanStack Query was designed for server state. Using Redux for both was always a mismatch — and TanStack Query v5 makes that clearer than ever.</p><h3>Setting Up TanStack Query v5</h3><pre><code>import { QueryClient, QueryClientProvider } from '@tanstack/react-query';\n\nconst queryClient = new QueryClient({\n  defaultOptions: {\n    queries: {\n      staleTime: 1000 * 60 * 5,  // 5 minutes\n      retry: 2,\n      refetchOnWindowFocus: true,\n    },\n  },\n});\n\n// Wrap your app\n&lt;QueryClientProvider client={queryClient}&gt;\n  &lt;App /&gt;\n&lt;/QueryClientProvider&gt;</code></pre><h3>The Core Pattern</h3><pre><code>import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';\n\n// Fetching data\nconst { data, isLoading, error } = useQuery({\n  queryKey: ['ipos', { market: 'NSE', status: 'upcoming' }],\n  queryFn: () => fetchIPOs({ market: 'NSE', status: 'upcoming' }),\n  staleTime: 1000 * 60 * 2,  // fresh for 2 mins\n});\n\n// Mutating data with automatic cache invalidation\nconst queryClient = useQueryClient();\nconst { mutate: watchIPO } = useMutation({\n  mutationFn: (ipoId) => addToWatchlist(ipoId),\n  onSuccess: () => {\n    // Refetch the watchlist after adding\n    queryClient.invalidateQueries({ queryKey: ['watchlist'] });\n  },\n});</code></pre><h3>v5 Changes Worth Knowing</h3><p>TanStack Query v5 introduced a few breaking but welcome changes:</p><ul><li><strong>Object syntax only</strong> — all hooks now take a single options object (no positional arguments). More verbose but more readable.</li><li><strong>Simplified status</strong> — <code>isLoading</code> is now <code>isPending</code> for mutations. Consistent naming across the board.</li><li><strong>Streamlined devtools</strong> — the v5 devtools are faster and show query state more clearly.</li></ul><h3>Query Key Design — the Most Underrated Skill</h3><p>Your query keys are your cache namespace. Design them like a URL path — from most general to most specific:</p><pre><code>// Good query key structure\n['ipos']                                    // all IPOs\n['ipos', 'upcoming']                        // upcoming IPOs\n['ipos', 'upcoming', { exchange: 'NSE' }]   // filtered\n['ipos', 'detail', ipoId]                   // single IPO\n\n// Invalidating all IPO queries at once\nqueryClient.invalidateQueries({ queryKey: ['ipos'] });</code></pre><h3>When I Still Use Redux Toolkit</h3><p>TanStack Query handles all my server state. Redux Toolkit handles everything else: authentication state, multi-step form progress, global UI state like notifications, and any state that genuinely belongs to the client rather than the server. The two libraries compose beautifully — they're not competing.</p><p>If you're starting a new React project in 2026, TanStack Query is the default choice for data fetching. It solves the problem better than any alternative I've used.</p>",
      date: "2026-05-28",
      readTime: "9 min read",
      tags: ["TanStack Query", "React Query", "State Management", "React"],
      author: "Shivam Chudasama",
    },
    {
      id: 10,
      title: "Next.js App Router: Patterns I Use in Every Production Project",
      excerpt:
        "The App Router changed how I think about data fetching, layouts, and loading states in Next.js. Here are the real-world patterns that actually work at scale.",
      content:
        "<h2>Why the App Router Is Worth Learning Properly</h2><p>When Next.js App Router shipped, the community reaction was divided. Some developers called it overengineered. Others (myself included) took the time to understand the mental model — and once it clicked, I couldn't go back. Server Components change the economics of data fetching in a way that genuinely reduces client-side JavaScript.</p><p>Here are the patterns I now apply on every production Next.js project.</p><h3>1. Co-locate Data Fetching with the Component That Needs It</h3><p>In the Pages Router, data fetching happened at the page level via <code>getServerSideProps</code> or <code>getStaticProps</code>. In the App Router, Server Components can fetch directly:</p><pre><code>// app/dashboard/page.tsx — Server Component (default)\nasync function DashboardPage() {\n  // Fetch runs on the server, zero client JS added\n  const stats = await fetchDashboardStats();\n  const recentActivity = await fetchRecentActivity();\n\n  return (\n    &lt;main&gt;\n      &lt;StatsGrid stats={stats} /&gt;\n      &lt;ActivityFeed items={recentActivity} /&gt;\n    &lt;/main&gt;\n  );\n}\n\nexport default DashboardPage;</code></pre><p>The component that needs the data fetches it directly. No prop-drilling from a page-level data function. No client-side loading state for data that doesn't need to be interactive.</p><h3>2. The loading.tsx Convention for Instant Feedback</h3><pre><code>// app/dashboard/loading.tsx\nexport default function DashboardLoading() {\n  return &lt;DashboardSkeleton /&gt;;\n}\n\n// Next.js automatically shows this while the page suspends\n// No manual Suspense boundary needed at the route level</code></pre><h3>3. Parallel Routes for Complex Layouts</h3><p>Parallel routes let you render multiple pages in the same layout simultaneously, with independent loading and error states:</p><pre><code>// app/dashboard/layout.tsx\nexport default function DashboardLayout({ children, analytics, notifications }) {\n  return (\n    &lt;div className='grid grid-cols-3 gap-4'&gt;\n      &lt;main className='col-span-2'&gt;{children}&lt;/main&gt;\n      &lt;aside&gt;\n        {analytics}       {/* @analytics slot */}\n        {notifications}   {/* @notifications slot */}\n      &lt;/aside&gt;\n    &lt;/div&gt;\n  );\n}</code></pre><h3>4. Server Actions for Mutations</h3><p>Server Actions let you write server-side mutation logic directly in your components — no API route needed for simple cases:</p><pre><code>'use server';\n\nasync function updateProfile(formData: FormData) {\n  const name = formData.get('name') as string;\n  await db.user.update({ where: { id: session.userId }, data: { name } });\n  revalidatePath('/profile');\n}\n\n// In a Client Component\n&lt;form action={updateProfile}&gt;\n  &lt;input name='name' defaultValue={user.name} /&gt;\n  &lt;button type='submit'&gt;Save&lt;/button&gt;\n&lt;/form&gt;</code></pre><h3>5. The Client/Server Boundary — Know Where to Draw It</h3><p>The most common mistake: marking components as <code>'use client'</code> unnecessarily. My rule: a component is a Server Component unless it needs one of these:</p><ul><li>Browser APIs (localStorage, window, navigator)</li><li>React state or effects (useState, useEffect, useReducer)</li><li>Event handlers attached to DOM elements</li><li>Third-party libraries that rely on browser APIs</li></ul><p>Push the client boundary as deep in the tree as possible. A page with 20 components might only need 3 of them to be Client Components.</p><h3>The Mental Model That Makes It Click</h3><p>Think of Server Components as PHP-era server-rendered HTML, but composable with React. The server renders HTML and sends it. Client Components are islands of interactivity hydrated in the browser. The App Router is just a framework for managing where that boundary lives.</p>",
      date: "2026-04-15",
      readTime: "10 min read",
      tags: ["Next.js", "App Router", "Server Components", "React"],
      author: "Shivam Chudasama",
    },
    {
      id: 11,
      title: "Modern CSS in 2026: Container Queries, @layer, and What Changed My Workflow",
      excerpt:
        "CSS has evolved dramatically. Container queries, cascade layers, @property, and logical properties are now baseline features. Here's how I use them and what they replaced.",
      content:
        "<h2>CSS Is Not What It Was</h2><p>I started as a developer who used CSS as a necessary chore between real JavaScript work. That changed when I started digging into what modern CSS actually offers. Container queries alone solved a problem I'd been hacking around with JavaScript for years. Here's what's in my stylesheet today that wasn't there two years ago.</p><h3>Container Queries — Responsive to the Component, Not the Viewport</h3><p>Media queries respond to the viewport width. Container queries respond to the parent element's width. This is the difference between component-driven CSS and page-driven CSS.</p><pre><code>/* Define the container */\n.card-wrapper {\n  container-type: inline-size;\n  container-name: card;\n}\n\n/* Style based on the container's width, not the viewport */\n@container card (min-width: 400px) {\n  .card {\n    display: grid;\n    grid-template-columns: 120px 1fr;\n  }\n}\n\n@container card (max-width: 399px) {\n  .card {\n    display: flex;\n    flex-direction: column;\n  }\n}</code></pre><p>The card now adapts to <em>wherever it's placed</em> — sidebar, main content, modal — not to the screen size. This is how responsive design was always supposed to work.</p><h3>Cascade Layers (@layer) — Taming Specificity</h3><p>Specificity wars were a CSS rite of passage. <code>@layer</code> ends them by giving you explicit control over the cascade order:</p><pre><code>/* Declare layers in specificity order (lowest to highest) */\n@layer reset, base, components, utilities, overrides;\n\n@layer reset {\n  *, *::before, *::after { box-sizing: border-box; }\n  body { margin: 0; }\n}\n\n@layer components {\n  .btn {\n    padding: 0.5rem 1rem;\n    border-radius: 0.375rem;\n  }\n}\n\n@layer overrides {\n  /* Always wins over components, regardless of specificity */\n  .btn-danger { background: red; }\n}</code></pre><p>In a project with Ant Design tokens, Tailwind utilities, and custom styles, <code>@layer</code> made the override order predictable for the first time. No more <code>!important</code> wars.</p><h3>@property — Typed Custom Properties with Animation</h3><pre><code>/* Without @property, CSS variables can not be animated */\n@property --gradient-angle {\n  syntax: '&lt;angle&gt;';\n  initial-value: 0deg;\n  inherits: false;\n}\n\n.card:hover {\n  animation: rotate-gradient 3s linear infinite;\n}\n\n@keyframes rotate-gradient {\n  to { --gradient-angle: 360deg; }\n}</code></pre><p>Animating a gradient angle used to require JavaScript. Now it's two lines of CSS.</p><h3>Logical Properties — Write Once, Support All Directions</h3><pre><code>/* Old: breaks in RTL layouts */\n.card { margin-left: 1rem; padding-right: 2rem; }\n\n/* New: works in LTR and RTL automatically */\n.card { margin-inline-start: 1rem; padding-inline-end: 2rem; }</code></pre><h3>:has() — The Parent Selector We Always Wanted</h3><pre><code>/* Style the form when it has an invalid input */\nform:has(input:invalid) .submit-btn {\n  opacity: 0.5;\n  pointer-events: none;\n}\n\n/* Style a card when its checkbox is checked */\n.card:has(input[type='checkbox']:checked) {\n  border-color: blue;\n  background: #eff6ff;\n}</code></pre><p>CSS in 2026 is genuinely powerful. These features didn't require a new framework — they're part of the language. Learn them once and use them everywhere.</p>",
      date: "2026-03-05",
      readTime: "8 min read",
      tags: ["CSS", "Container Queries", "Frontend", "Web Development"],
      author: "Shivam Chudasama",
    },
    {
      id: 12,
      title: "Accessibility in React: The Checklist I Follow on Every Project",
      excerpt:
        "Accessibility isn't a nice-to-have — it's a quality signal. Here's the practical a11y checklist I apply to every React component I build, with real code patterns.",
      content:
        "<h2>Why Accessibility Is a Developer Problem, Not a Design Problem</h2><p>I used to think accessibility was something the design team handled — color contrast, font sizes, that sort of thing. I was wrong. The majority of accessibility issues are introduced in code: missing ARIA attributes, non-focusable interactive elements, missing keyboard navigation, and broken screen reader announcements. As the developer, you are the last line of defence.</p><p>Here's the checklist I apply on every component I build.</p><h3>1. Semantic HTML First</h3><p>The single highest-leverage accessibility improvement is using the right HTML element. Semantic elements come with built-in keyboard support, ARIA roles, and screen reader announcements for free.</p><pre><code>// Bad: div soup\n&lt;div onClick={handleClick} className='btn'&gt;Submit&lt;/div&gt;\n\n// Good: native semantics\n&lt;button type='submit' onClick={handleClick}&gt;Submit&lt;/button&gt;\n\n// Bad: anchor used as button\n&lt;a href='#' onClick={openModal}&gt;Open settings&lt;/a&gt;\n\n// Good\n&lt;button type='button' onClick={openModal}&gt;Open settings&lt;/button&gt;</code></pre><h3>2. Every Interactive Element Needs a Visible Focus State</h3><pre><code>/* Never do this */\n:focus { outline: none; }\n\n/* Do this instead */\n:focus-visible {\n  outline: 2px solid #3b82f6;\n  outline-offset: 2px;\n  border-radius: 4px;\n}</code></pre><p><code>:focus-visible</code> shows the outline for keyboard navigation but hides it for mouse clicks — the best of both worlds.</p><h3>3. Images Need Meaningful Alt Text</h3><pre><code>// Decorative image — empty alt hides it from screen readers\n&lt;img src='pattern.svg' alt='' aria-hidden='true' /&gt;\n\n// Informative image — describe what it communicates\n&lt;img\n  src={user.avatar}\n  alt={`Profile photo of ${user.name}`}\n/&gt;\n\n// Icon button — label the action, not the icon\n&lt;button aria-label='Close dialog'&gt;\n  &lt;CloseIcon aria-hidden='true' /&gt;\n&lt;/button&gt;</code></pre><h3>4. Form Inputs Must Be Labelled</h3><pre><code>// Bad: placeholder is not a label\n&lt;input type='email' placeholder='Enter your email' /&gt;\n\n// Good: explicit label association\n&lt;label htmlFor='email'&gt;Email address&lt;/label&gt;\n&lt;input\n  id='email'\n  type='email'\n  aria-describedby='email-hint'\n  aria-invalid={hasError}\n/&gt;\n&lt;span id='email-hint'&gt;We will never share your email&lt;/span&gt;\n{hasError &amp;&amp; &lt;span role='alert'&gt;Please enter a valid email&lt;/span&gt;}</code></pre><h3>5. Modals and Dialogs Trap Focus</h3><p>When a modal opens, keyboard focus must be trapped inside it. When it closes, focus must return to the trigger element.</p><pre><code>import FocusTrap from 'focus-trap-react';\n\nfunction Modal({ isOpen, onClose, children }) {\n  return isOpen ? (\n    &lt;FocusTrap focusTrapOptions={{ onDeactivate: onClose }}&gt;\n      &lt;div\n        role='dialog'\n        aria-modal='true'\n        aria-labelledby='modal-title'\n      &gt;\n        {children}\n      &lt;/div&gt;\n    &lt;/FocusTrap&gt;\n  ) : null;\n}</code></pre><h3>6. Live Regions for Dynamic Content</h3><pre><code>// Announce async changes to screen readers\n&lt;div aria-live='polite' aria-atomic='true' className='sr-only'&gt;\n  {statusMessage} {/* e.g. 'Message sent successfully' */}\n&lt;/div&gt;\n\n// For urgent announcements (errors)\n&lt;div role='alert'&gt;\n  {errorMessage}\n&lt;/div&gt;</code></pre><h3>My Quick Audit Checklist</h3><ol><li>Tab through the entire page — can you reach every interactive element?</li><li>Open a screen reader (VoiceOver on Mac, NVDA on Windows) and navigate</li><li>Check color contrast with the browser devtools accessibility panel</li><li>Run axe DevTools or Lighthouse a11y audit</li><li>Test all forms without a mouse</li></ol><p>Accessibility isn't hard once you build the habits. Most of it comes down to using semantic HTML and testing with a keyboard. Start there — it covers 80% of the issues for 20% of the effort.</p>",
      date: "2026-02-22",
      readTime: "9 min read",
      tags: ["Accessibility", "React", "WCAG", "Frontend"],
      author: "Shivam Chudasama",
    },
  ],
  contact: {
    email: "shivamchudasama.official@gmail.com",
    phone: "+91 7698723169",
    location: "Ahmedabad, Gujarat",
    availability: "Open to freelance and full-time opportunities",
    responseTime: "Within 24 hours",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/shivam-chudasama-software-engineer",
      github: "https://github.com/Shivolic76",
      twitter: "https://twitter.com/shivam_dev",
      instagram: "https://instagram.com/shivam.codes",
    },
  },
};
