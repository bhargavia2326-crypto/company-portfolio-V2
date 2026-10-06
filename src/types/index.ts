export type PageRoute = 
  | 'home'
  | 'services'
  | 'solutions'
  | 'ai-ml'
  | 'software'
  | 'cybersecurity'
  | 'agritech'
  | 'product-studio'
  | 'products'
  | 'projects'
  | 'about'
  | 'contact'
  | 'privacy'
  | 'terms';

export interface ProjectItem {
  id: string;
  title: string;
  category: 'AI' | 'Software' | 'Cybersecurity' | 'Automation' | 'Data' | 'AgriTech';
  status: 'Concept' | 'Prototype' | 'Internal Product' | 'Client Project';
  year: string;
  description: string;
  fullDetails?: {
    challenge: string;
    architecture: string;
    outcome: string;
    techStack: string[];
  };
  metrics?: string;
  imageUrl?: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: 'ai' | 'software' | 'security' | 'agritech' | 'data';
  description: string;
  tag: string;
  iconName: string;
  tags: string[];
  metrics?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
