import { SkillItem, AcademyFeature, HighlightCard, SocialLinkItem, ProfileInfo } from '../types';

export const profileData: ProfileInfo = {
  name: "Prosenjit Biswas",
  profession: "Graphics Designer",
  tagline: "Creative Designer | Video Editor | AI Enthusiast | Digital Professional",
  bioIntro: "I am Prosenjit Biswas, a passionate graphics designer and digital creative professional. I work across graphic design, video editing, social media management, AI tools, writing and digital project coordination.",
  aboutText1: "I am Prosenjit Biswas, a creative professional with a passion for visual communication, digital content and modern technology. My primary expertise is graphics design, while I also work with video editing, social media management, AI-powered tools, microstock platforms, writing and project coordination.",
  aboutText2: "Driven by creativity, continuous learning, and modern technology, I focus on continuous professional development to help businesses, organizations, and educational platforms stand out with high-impact digital content and intuitive visual experiences.",
  email: "pbjeet1970@gmail.com",
  phone: "+880 1700-000000",
  location: "Dhaka, Bangladesh (Available Worldwide Remote)",
  avatarUrl: "/profile.jpg",
  secondaryImageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
  yearsOfExperience: 6,
  completedProjects: 140,
  satisfiedClients: 85,
  medhaExamUrl: "https://pbjobexam.netlify.app/",
};

export const skillsData: SkillItem[] = [
  {
    id: "graphics-designer",
    name: "Graphics Designer",
    percentage: 90,
    category: "design",
    description: "Brand identity, logos, vector illustration, marketing collaterals, and print & digital designs.",
    iconName: "Palette"
  },
  {
    id: "video-editor",
    name: "Video Editor",
    percentage: 60,
    category: "media",
    description: "Video trimming, color grading, motion graphics, audio sync, and engaging social reels/shorts.",
    iconName: "Film"
  },
  {
    id: "social-media-mgmt",
    name: "Social Media Management",
    percentage: 80,
    category: "management",
    description: "Campaign scheduling, social post design, community engagement, content calendars, and growth.",
    iconName: "Share2"
  },
  {
    id: "microstock-market",
    name: "MicroStock Market",
    percentage: 65,
    category: "design",
    description: "Asset preparation, metadata optimization, vector upload, and commercial marketplace licensing.",
    iconName: "ShoppingBag"
  },
  {
    id: "rule-maker",
    name: "Rule Maker",
    percentage: 75,
    category: "management",
    description: "Workflow protocols, design guidelines, quality control standards, and team operational rules.",
    iconName: "ShieldCheck"
  },
  {
    id: "writer",
    name: "Writer",
    percentage: 40,
    category: "media",
    description: "Copywriting, promotional captions, exam curriculum content, and creative article structuring.",
    iconName: "PenTool"
  },
  {
    id: "ai-skills",
    name: "AI Skills",
    percentage: 85,
    category: "tech",
    description: "Generative AI prompting, Midjourney, Leonardo, workflow automation, and AI image synthesis.",
    iconName: "Sparkles"
  },
  {
    id: "online-coordinator",
    name: "Online Co-ordinator",
    percentage: 70,
    category: "management",
    description: "Virtual team collaboration, client communication, digital asset coordination, and webinars.",
    iconName: "Users"
  },
  {
    id: "project-management",
    name: "Project Management",
    percentage: 55,
    category: "management",
    description: "Agile delivery, milestone tracking, deadline adherence, and multidisciplinary task execution.",
    iconName: "Trello"
  }
];

export const medhaExamFeatures: AcademyFeature[] = [
  {
    id: 1,
    title: "MCQ Job Exam Based",
    description: "Practice MCQ exams accurately structured around actual competitive job examinations.",
    icon: "CheckCircle2",
    badge: "Job Focused"
  },
  {
    id: 2,
    title: "Government Job Preparation",
    description: "Comprehensive mock tests and modules tailored for government job aspirants and civil services.",
    icon: "GraduationCap",
    badge: "Career Ready"
  },
  {
    id: 3,
    title: "Analyze Own Progress",
    description: "In-depth diagnostic analytics, accuracy tracking, score breakdown, and weakness identification.",
    icon: "BarChart3",
    badge: "Smart Analytics"
  },
  {
    id: 4,
    title: "Student Friendly",
    description: "Intuitive, clean interface designed to minimize cognitive friction and maximize study efficiency.",
    icon: "HeartHandshake",
    badge: "Accessible"
  },
  {
    id: 5,
    title: "Dynamic Looks",
    description: "Modern, lively, and engaging aesthetic with dark/light themes and sleek micro-interactions.",
    icon: "LayoutDashboard",
    badge: "Modern UI"
  },
  {
    id: 6,
    title: "Real Question Bank Added",
    description: "Curated repository of past authentic examination questions with detailed explanation keys.",
    icon: "BookOpenCheck",
    badge: "Verified Bank"
  }
];

export const highlightCards: HighlightCard[] = [
  {
    id: "creative-prof",
    title: "Creative Professional",
    description: "Blending visual harmony, typography, and storytelling to deliver distinctive digital experiences.",
    icon: "Award",
    tag: "Aesthetics"
  },
  {
    id: "graphics-design",
    title: "Graphics Design",
    description: "Expertise in branding systems, packaging, marketing banners, vector art, and UI/UX assets.",
    icon: "Layers",
    tag: "Core Focus"
  },
  {
    id: "digital-projects",
    title: "Digital Projects",
    description: "Proven execution of multidisciplinary campaigns from inception to deployment across platforms.",
    icon: "Briefcase",
    tag: "Execution"
  },
  {
    id: "ed-tech",
    title: "Educational Technology",
    description: "Founding and designing Medha Exam academy platform for student success and competitive exams.",
    icon: "BookOpen",
    tag: "Medha Exam"
  },
  {
    id: "ai-modern-tools",
    title: "AI & Modern Tools",
    description: "Leveraging cutting-edge GenAI suites to accelerate creative workflows and visual innovations.",
    icon: "Cpu",
    tag: "Innovation"
  }
];

export const socialLinksData: SocialLinkItem[] = [
  {
    name: "Facebook",
    platform: "facebook",
    url: "https://www.facebook.com/prosenjitbiswas47",
    handle: "@prosenjitbiswas47",
    ariaLabel: "Follow Prosenjit Biswas on Facebook"
  },
  {
    name: "YouTube",
    platform: "youtube",
    url: "https://www.youtube.com/channel/UCdtYLhU_B0mq9K1X_4Sc51w",
    handle: "@UCdtYLhU_B0mq9K1X_4Sc51w",
    ariaLabel: "Subscribe to Prosenjit Biswas on YouTube"
  },
  {
    name: "LinkedIn",
    platform: "linkedin",
    url: "https://www.linkedin.com/in/prosenjitbiswas47",
    handle: "in/prosenjitbiswas47",
    ariaLabel: "Connect with Prosenjit Biswas on LinkedIn"
  },
  {
    name: "Twitter / X",
    platform: "twitter",
    url: "https://twitter.com/Jeeto7031",
    handle: "@Jeeto7031",
    ariaLabel: "Follow Prosenjit Biswas on Twitter / X"
  },
  {
    name: "Behance",
    platform: "behance",
    url: "https://www.behance.net/pbprosen1971",
    handle: "behance.net/pbprosen1971",
    ariaLabel: "View Prosenjit Biswas on Behance"
  },
  {
    name: "Instagram",
    platform: "instagram",
    url: "https://www.instagram.com/biswas.1971/",
    handle: "@biswas.1971",
    ariaLabel: "Follow Prosenjit Biswas on Instagram"
  }
];

export const softwareTools = [
  { name: "Adobe Photoshop", level: "Advanced", category: "Design" },
  { name: "Adobe Illustrator", level: "Advanced", category: "Vector" },
  { name: "Adobe Premiere Pro", level: "Intermediate", category: "Video" },
  { name: "Adobe After Effects", level: "Intermediate", category: "Motion" },
  { name: "Midjourney & GenAI", level: "Advanced", category: "AI Tools" },
  { name: "CapCut Pro", level: "Advanced", category: "Shorts" }
];
