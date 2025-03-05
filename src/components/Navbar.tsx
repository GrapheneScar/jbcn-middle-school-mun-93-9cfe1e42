
import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import NavbarBrand from './navbar/NavbarBrand';
import NavLink from './navbar/NavLink';
import MobileMenuButton from './navbar/MobileMenuButton';
import MobileMenu from './navbar/MobileMenu';
import { ChevronDown } from 'lucide-react';

type NavLinkWithSubmenu = {
  name: string;
  path: string;
  submenu?: { name: string; path: string }[];
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const location = useLocation();
  
  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [mobileMenuOpen]);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && dropdownRefs.current[activeDropdown]) {
        if (!(dropdownRefs.current[activeDropdown]?.contains(event.target as Node))) {
          setActiveDropdown(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);
  
  // Updated navigation structure with improved organization
  const navLinks: NavLinkWithSubmenu[] = [
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
        { name: 'Schedule', path: '/schedule' },
        { name: 'Gallery', path: '/gallery' }
      ]
    },
    { 
      name: 'ANNOUNCEMENTS', 
      path: '/newsletter',
      submenu: [
        { name: 'All Announcements', path: '/newsletter' },
        { name: 'Conference', path: '/newsletter?tab=conference' },
        { name: 'Resources', path: '/newsletter?tab=resources' }
      ]
    },
    { name: 'CONTACT US', path: '/contact' },
  ];
  
  const isActive = (path: string) => {
    if (path === '#') return false;
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  
  const toggleDropdown = (linkName: string) => {
    setActiveDropdown(prevActive => prevActive === linkName ? null : linkName);
  };
  
  const handleDropdownRef = (el: HTMLDivElement | null, linkName: string) => {
    dropdownRefs.current[linkName] = el;
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/85 backdrop-blur-lg py-2 shadow-lg shadow-black/20' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        <NavbarBrand />
        
        {/* Desktop Navigation with Dropdowns */}
        <nav className="hidden lg:flex items-center space-x-2 md:space-x-3 py-2">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative"
              ref={el => handleDropdownRef(el, link.name)}
            >
              {link.submenu ? (
                <>
                  <button
                    onClick={() => toggleDropdown(link.name)}
                    className={`flex items-center px-4 py-2.5 rounded-full transition-colors duration-300
                      ${isActive(link.path) 
                        ? 'text-mun-purple-light bg-mun-purple/10' 
                        : 'text-white hover:text-mun-purple-light hover:bg-white/5'}`}
                  >
                    {link.name}
                    <ChevronDown 
                      className={`ml-1.5 h-4 w-4 transition-transform duration-300 ${
                        activeDropdown === link.name ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  
                  {activeDropdown === link.name && (
                    <div className="absolute top-full left-0 mt-2 w-60 rounded-xl overflow-hidden shadow-lg shadow-purple-500/10 bg-black bg-opacity-90 backdrop-blur-lg py-1.5 z-50 border border-white/10">
                      {link.submenu.map(subitem => (
                        <NavLink
                          key={subitem.name}
                          name={subitem.name}
                          path={subitem.path}
                          isActive={isActive(subitem.path)}
                          className="block px-5 py-2.5 hover:bg-mun-purple/20"
                        />
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <NavLink
                  name={link.name}
                  path={link.path}
                  isActive={isActive(link.path)}
                  className="block px-4 py-2.5 rounded-full hover:bg-white/5"
                />
              )}
            </div>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <MobileMenuButton isOpen={mobileMenuOpen} onClick={toggleMobileMenu} />
      </div>
      
      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        navLinks={navLinks} 
        isActive={isActive} 
        onLinkClick={closeMobileMenu} 
      />
    </header>
  );
};

export default Navbar;
