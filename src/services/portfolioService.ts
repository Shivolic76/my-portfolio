// Portfolio Data Service
import { portfolioData } from '../data/portfolioData';
export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  portfolio: string;
  avatar: string;
  description: string;
  yearsOfExperience: string;
  projectsCompleted: string;
  resumeUrl: string;
}

export interface Statistics {
  projects: number;
  experience: number;
  clients: number;
  commits: number;
}

export interface About {
  professionalJourney: string;
  passion: string;
  achievements: string[];
}

export interface Skill {
  name: string;
  level: number;
  color: string;
  icon: string;
}

export interface SkillCategories {
  allSkills: Skill[];
  tools: Skill[];
}

export interface Experience {
  title: string;
  company: string;
  duration: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  status: string;
  impact: string;
  image: string;
  github: string;
  live: string;
  category: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  icon: string;
  color: string;
  url: string;
}

export interface Blog {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  author: string;
}

export interface Contact {
  email: string;
  phone: string;
  location: string;
  availability: string;
  responseTime: string;
  socialLinks: {
    linkedin: string;
    github: string;
    twitter: string;
    instagram: string;
  };
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  statistics: Statistics;
  about: About;
  skillCategories: SkillCategories;
  experiences: Experience[];
  projects: Project[];
  testimonials: Testimonial[];
  certifications: Certification[];
  blogs: Blog[];
  contact: Contact;
}

class PortfolioService {
  private data: PortfolioData | null = null;

  // Get portfolio data from static import
  async fetchPortfolioData(): Promise<PortfolioData> {
    if (this.data) {
      return this.data;
    }

    console.log('Loading portfolio data from static import');
    this.data = portfolioData;
    console.log('Portfolio data loaded successfully');
    return this.data;
  }

  // Get personal information
  async getPersonalInfo(): Promise<PersonalInfo> {
    const data = await this.fetchPortfolioData();
    return data.personalInfo;
  }

  // Get statistics
  async getStatistics(): Promise<Statistics> {
    const data = await this.fetchPortfolioData();
    return data.statistics;
  }

  // Get about information
  async getAbout(): Promise<About> {
    const data = await this.fetchPortfolioData();
    return data.about;
  }

  // Get skill categories
  async getSkillCategories(): Promise<SkillCategories> {
    const data = await this.fetchPortfolioData();
    return data.skillCategories;
  }

  // Get experiences
  async getExperiences(): Promise<Experience[]> {
    const data = await this.fetchPortfolioData();
    return data.experiences;
  }

  // Get projects
  async getProjects(): Promise<Project[]> {
    const data = await this.fetchPortfolioData();
    return data.projects;
  }

  // Get testimonials
  async getTestimonials(): Promise<Testimonial[]> {
    const data = await this.fetchPortfolioData();
    return data.testimonials;
  }

  // Get certifications
  async getCertifications(): Promise<Certification[]> {
    const data = await this.fetchPortfolioData();
    return data.certifications;
  }

  // Get blogs
  async getBlogs(): Promise<Blog[]> {
    const data = await this.fetchPortfolioData();
    return data.blogs;
  }

  // Get blog by ID
  async getBlogById(id: number): Promise<Blog | undefined> {
    const blogs = await this.getBlogs();
    return blogs.find((blog) => blog.id === id);
  }

  // Get contact information
  async getContact(): Promise<Contact> {
    const data = await this.fetchPortfolioData();
    return data.contact;
  }

  // Clear cached data (useful for refreshing data)
  clearCache(): void {
    this.data = null;
  }

  // Update portfolio data (for future admin functionality)
  async updatePortfolioData(newData: Partial<PortfolioData>): Promise<void> {
    // This would typically send data to a backend API
    // For now, we'll just update the cached data
    if (this.data) {
      this.data = { ...this.data, ...newData };
    }
  }
}

// Export singleton instance
export const portfolioService = new PortfolioService();
export default portfolioService;
