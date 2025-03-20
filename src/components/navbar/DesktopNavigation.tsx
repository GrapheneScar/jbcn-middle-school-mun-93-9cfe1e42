
import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import NavLink from './NavLink';
import { NavLinkWithSubmenu } from './navData';
import { motion, AnimatePresence } from 'framer-motion';

interface DesktopNavigationProps {
  navLinks: NavLinkWithSubmenu[];
  activeDropdown: string | null;
  toggleDropdown: (linkName: string) => void;
  handleDropdownRef: (el: HTMLDivElement | null, linkName: string) => void;
  isActive: (path: string) => boolean;
}

const DesktopNavigation = ({
  navLinks,
  activeDropdown,
  toggleDropdown,
  handleDropdownRef,
  isActive
}: DesktopNavigationProps) => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  
  // Set hoveredLink when activeDropdown changes
  useEffect(() => {
    if (activeDropdown) {
      setHoveredLink(activeDropdown);
    }
  }, [activeDropdown]);
  
  // Handle mouse enter/leave on nav links
  const handleMouseEnter = (linkName: string) => {
    setHoveredLink(linkName);
  };
  
  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  return (
    <nav className="flex items-center space-x-2 md:space-x-3 py-2">
      {navLinks.map((link) => (
        <div 
          key={link.name} 
          className="relative"
          ref={el => handleDropdownRef(el, link.name)}
          onMouseEnter={() => handleMouseEnter(link.name)}
          onMouseLeave={handleMouseLeave}
        >
          {link.submenu ? (
            <>
              <button
                onClick={() => toggleDropdown(link.name)}
                className={`flex items-center px-4 py-2.5 rounded-full transition-colors duration-300 text-left
                  ${isActive(link.path) 
                    ? 'text-mun-purple-light bg-mun-purple/10' 
                    : 'text-white hover:text-mun-purple-light hover:bg-white/5'}`}
              >
                {link.name}
                <ChevronDown 
                  className={`ml-1.5 h-4 w-4 transition-transform duration-300 ${
                    hoveredLink === link.name || activeDropdown === link.name ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              <AnimatePresence>
                {(hoveredLink === link.name || activeDropdown === link.name) && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-60 rounded-xl overflow-hidden shadow-lg shadow-purple-500/10 bg-black bg-opacity-90 backdrop-blur-lg py-1.5 z-50 border border-white/10"
                  >
                    {link.submenu.map(subitem => (
                      <NavLink
                        key={subitem.name}
                        name={subitem.name}
                        path={subitem.path}
                        isActive={isActive(subitem.path)}
                        className="block px-5 py-2.5 text-left hover:bg-mun-purple/20 text-left"
                      />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          ) : (
            <NavLink
              name={link.name}
              path={link.path}
              isActive={isActive(link.path)}
              className="block px-4 py-2.5 text-left rounded-full hover:bg-white/5"
            />
          )}
        </div>
      ))}
    </nav>
  );
};

export default DesktopNavigation;
