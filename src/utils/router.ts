export type SectionId = 'home' | 'about' | 'skills' | 'portfolio' | 'medha-exam' | 'contact';

export interface RouteItem {
  id: SectionId;
  label: string;
  path: string;
  badge?: string;
}

export const navigationRoutes: RouteItem[] = [
  { id: 'home', label: 'Home', path: '/home' },
  { id: 'about', label: 'About', path: '/about' },
  { id: 'skills', label: 'Skills', path: '/skills' },
  { id: 'portfolio', label: 'Portfolio', path: '/portfolio' },
  { id: 'medha-exam', label: 'Medha Exam', path: '/medha-exam', badge: 'Academy' },
  { id: 'contact', label: 'Contact', path: '/contact' },
];

export const getSectionFromPath = (pathname: string): SectionId => {
  const clean = pathname.toLowerCase().replace(/\/+$/, '') || '/';
  if (clean === '/' || clean === '/home') return 'home';
  if (clean === '/about') return 'about';
  if (clean === '/skills') return 'skills';
  if (clean === '/portfolio') return 'portfolio';
  if (clean === '/medha-exam') return 'medha-exam';
  if (clean === '/contact') return 'contact';
  return 'home';
};

export const scrollToSectionById = (sectionId: SectionId | string, smooth = true) => {
  const targetId = sectionId.replace('#', '').replace('/', '');
  const element = document.getElementById(targetId);
  if (element) {
    const yOffset = -80;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({
      top: y,
      behavior: smooth ? 'smooth' : 'auto',
    });
    return true;
  }
  return false;
};

export const navigateToRoute = (path: string, pushHistory = true) => {
  const sectionId = getSectionFromPath(path);
  if (pushHistory && window.location.pathname !== path) {
    window.history.pushState({ sectionId }, '', path);
  }
  scrollToSectionById(sectionId, true);
};
