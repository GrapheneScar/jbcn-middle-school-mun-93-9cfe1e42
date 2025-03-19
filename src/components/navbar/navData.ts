
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
    path: '/committees'
  },
  { 
    name: 'QUICK ACCESS', 
    path: '#',
    submenu: [
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
    path: '/newsletter'
  },
  { 
    name: 'CONTACT US', 
    path: '/contact' 
  },
];
