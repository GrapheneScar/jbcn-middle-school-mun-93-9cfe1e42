
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
    { name: 'SCHEDULE', path: '/schedule' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'ANNOUNCEMENTS', path: '/newsletter' },
    { name: 'CONTACT US', path: '/contact' },
  ];
  
  const isActive = (path: string) => {
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
          ? 'bg-black/80 backdrop-blur-md py-2 shadow-lg' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        <NavbarBrand />
        
        {/* Desktop Navigation with Dropdowns */}
        <nav className="hidden lg:flex items-center space-x-1 md:space-x-2 py-2">
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
                    className={`flex items-center px-3 py-2 rounded-md transition-colors duration-300
                      ${isActive(link.path) ? 'text-amber-300' : 'text-white hover:text-amber-200'}`}
                  >
                    {link.name}
                    <ChevronDown 
                      className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                        activeDropdown === link.name ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  
                  {activeDropdown === link.name && (
                    <div className="absolute top-full left-0 mt-1 w-56 rounded-md shadow-lg bg-black bg-opacity-90 backdrop-blur-md py-1 z-50">
                      {link.submenu.map(subitem => (
                        <NavLink
                          key={subitem.name}
                          name={subitem.name}
                          path={subitem.path}
                          isActive={isActive(subitem.path)}
                          className="block px-4 py-2 hover:bg-mun-purple/20"
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
                  className="block px-3 py-2"
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
        navLinks={navLinks.map(link => ({ name: link.name, path: link.path }))} 
        isActive={isActive} 
        onLinkClick={closeMobileMenu} 
      />
    </header>
  );
};

export default Navbar;
