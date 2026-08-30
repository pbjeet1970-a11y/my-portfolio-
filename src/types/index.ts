export interface SkillItem {
  id: string;
  name: string;
  percentage: number;
  category: 'design' | 'media' | 'management' | 'tech';
  description?: string;
  iconName?: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  subtitle: string;
  category: 'Graphic Design' | 'Branding' | 'Social Media Design' | 'Video Editing' | 'Digital Content' | 'AI Projects' | 'Other Projects';
  filterCategory: 'all' | 'graphic-design' | 'video' | 'social-media' | 'ai' | 'other';
  image: string;
  thumbnail: string;
  description: string;
  fullDescription: string;
  tools: string[];
  client?: string;
  year?: string;
  featured?: boolean;
  link?: string;
  deliverables?: string[];
}

export interface AcademyFeature {
  id: number;
  title: string;
  description: string;
  icon: string;
  badge?: string;
}

export interface HighlightCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  tag: string;
}

export interface SocialLinkItem {
  name: string;
  platform: 'facebook' | 'youtube' | 'linkedin' | 'twitter' | 'behance' | 'instagram';
  url: string;
  handle: string;
  ariaLabel: string;
}

export interface ProfileInfo {
  name: string;
  profession: string;
  tagline: string;
  bioIntro: string;
  aboutText1: string;
  aboutText2: string;
  email: string;
  phone: string;
  location: string;
  avatarUrl: string;
  secondaryImageUrl: string;
  yearsOfExperience: number;
  completedProjects: number;
  satisfiedClients: number;
  medhaExamUrl: string;
}
