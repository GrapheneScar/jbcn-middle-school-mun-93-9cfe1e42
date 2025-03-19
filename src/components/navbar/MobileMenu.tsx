
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Instagram } from 'lucide-react';
import { NavLinkWithSubmenu } from './navData';

interface MobileMenuProps {
  isOpen: boolean;
  navLinks: NavLinkWithSubmenu[];
  isActive: (path: string) => boolean;
  onLinkClick: () => void;
}

const MobileMenu = ({ isOpen, navLinks, isActive, onLinkClick }: MobileMenuProps) => {
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  // Reset expanded menu when mobile menu closes
  useEffect(() => {
    if (!isOpen) {
      setExpandedMenu(null);
    }
  }, [isOpen]);

  // Auto-expand the Quick Access menu to make Delegate Preparation visible
  useEffect(() => {
    if (isOpen) {
      // Find Quick Access menu
      const quickAccessMenu = navLinks.find(link => link.name === 'QUICK ACCESS');
      if (quickAccessMenu) {
        setExpandedMenu('QUICK ACCESS');
      }
    }
  }, [isOpen, navLinks]);

  const toggleSubmenu = (name: string) => {
    setExpandedMenu(prev => prev === name ? null : name);
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="lg:hidden fixed inset-0 z-40 bg-black/95 overflow-y-auto"
          initial={{ x: '100%', opacity: 0.5 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0.5 }}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        >
          <div className="h-full pt-24 pb-20 px-6 overflow-y-auto">
            <div className="flex flex-col h-full space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="border-b border-white/10 py-2"
                >
                  {link.submenu ? (
                    <div>
                      <button
                        onClick={() => toggleSubmenu(link.name)}
                        className="flex items-center justify-between w-full text-left py-3 px-2"
                      >
                        <span className={`text-lg font-medium ${
                          expandedMenu === link.name 
                            ? 'text-mun-purple-light' 
                            : 'text-white'
                        }`}>
                          {link.name}
                        </span>
                        <ChevronDown 
                          className={`h-5 w-5 transition-transform duration-300 ${
                            expandedMenu === link.name ? 'rotate-180 text-mun-purple-light' : 'text-white'
                          }`} 
                        />
                      </button>
                      
                      <AnimatePresence>
                        {expandedMenu === link.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="ml-4 pl-4 border-l border-white/10 overflow-hidden"
                          >
                            {link.submenu.map(subitem => (
                              <Link
                                key={subitem.name}
                                to={subitem.path}
                                className={`block py-3 px-2 text-base text-left ${
                                  isActive(subitem.path) 
                                    ? 'text-mun-purple-light' 
                                    : 'text-white/80 hover:text-mun-purple-light'
                                } transition-colors duration-300`}
                                onClick={onLinkClick}
                              >
                                {subitem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={`block py-3 px-2 text-lg font-medium text-left ${
                        isActive(link.path) 
                          ? 'text-mun-purple-light' 
                          : 'text-white hover:text-mun-purple-light'
                      } transition-colors duration-300`}
                      onClick={onLinkClick}
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}
              
              {/* Instagram Link in Mobile Menu Footer */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <a 
                  href="https://www.instagram.com/jbcnparelmun" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center py-3 px-2 text-white hover:text-mun-purple-light transition-colors duration-300"
                  onClick={onLinkClick}
                >
                  <Instagram className="h-5 w-5 mr-3" />
                  <span>Follow us on Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
