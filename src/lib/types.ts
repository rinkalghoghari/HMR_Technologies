// Common types used across the application

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  details: string;
}

export interface NewsletterFormData {
  email: string;
}

export interface JobApplicationData {
  name: string;
  email: string;
  position: string;
  coverLetter?: string;
  resumeUrl?: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: any[];
}

export interface ProjectType {
  value: string;
  label: string;
}

export const PROJECT_TYPES: ProjectType[] = [
  { value: "Web Application", label: "Web Application" },
  { value: "Mobile App", label: "Mobile App" },
  { value: "Legacy Modernization", label: "Legacy Modernization" },
  { value: "AI Integration", label: "AI Integration" },
  { value: "Other", label: "Other" },
];

export interface ServiceFeature {
  icon: any;
  title: string;
  description: string;
  features: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  social?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

export interface Testimonial {
  name: string;
  company: string;
  role: string;
  content: string;
  imageUrl?: string;
  rating: number;
}

export interface CaseStudy {
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  imageUrl: string;
  technologies: string[];
}
