
export type NavLinkWithSubmenu = {
  name: string;
  path: string;
  submenu?: { name: string; path: string }[];
};

// Navigation structure with organized links
export const navLinks: NavLinkWithSubmenu[] = [
  { 
    name: 'ABOUT', 
    path: '/about',
    submenu: [
      { name: 'About Us', path: '/about' },
      { name: 'Committee Heads', path: '/committee-heads' }
    ]
  },
  { 
    name: 'COMMITTEES', 
    path: '/committees',
    submenu: [
      { name: 'All Committees', path: '/committees' },
      { name: 'Delegate Preparation', path: '/delegate-preparation' }
    ]
  },
  { 
    name: 'QUICK ACCESS', 
    path: '#',
    submenu: [
      { name: 'Delegate Preparation', path: '/delegate-preparation' },
      { name: 'Resources', path: '/resources' },
      { name: 'Gallery', path: '/gallery' }
    ]
  },
  { 
    name: 'SCHEDULE', 
    path: '/schedule'
  },
  { 
    name: 'NEWSLETTER', 
    path: '/newsletter',
    submenu: [
      { name: 'All Announcements', path: '/newsletter' },
      { name: 'Conference', path: '/newsletter?tab=conference' },
      { name: 'Resources', path: '/newsletter?tab=resources' }
    ]
  },
  { name: 'CONTACT US', path: '/contact' },
];
