
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
      { name: 'Department Heads', path: '/department-heads' }
    ]
  },
  { 
    name: 'COMMITTEES', 
    path: '/committees',
    submenu: [] // This will be populated from committeeLinks.ts
  },
  { 
    name: 'QUICK ACCESS', 
    path: '#',
    submenu: [
      { name: 'Resources', path: '/resources' },
      { name: 'Gallery', path: '/gallery' },
      { name: 'Delegate Preparation', path: '/delegate-preparation' }
    ]
  },
  { 
    name: 'SCHEDULE', 
    path: '/schedule'
  },
  { 
    name: 'NEWSLETTER', 
    path: '/newsletter'
  },
  { 
    name: 'CONTACT US', 
    path: '/contact' 
  },
];
