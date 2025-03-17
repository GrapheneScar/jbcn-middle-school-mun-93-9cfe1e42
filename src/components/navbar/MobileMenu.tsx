
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { NavLinkWithSubmenu } from './navData';

interface MobileMenuProps {
  isOpen: boolean;
  navLinks: NavLinkWithSubmenu[];
  isActive: (path: string) => boolean;
  onLinkClick: () => void;
}

const MobileMenu = ({ isOpen, navLinks, isActive, onLinkClick }: MobileMenuProps) => {
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);

  const toggleSubmenu = (name: string) => {
    setExpandedMenus(prev => 
      prev.includes(name) 
        ? prev.filter(item => item !== name)
        : [...prev, name]
    );
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
                          expandedMenus.includes(link.name) 
                            ? 'text-mun-purple-light' 
                            : 'text-white'
                        }`}>
                          {link.name}
                        </span>
                        <ChevronDown 
                          className={`h-5 w-5 transition-transform duration-300 ${
                            expandedMenus.includes(link.name) ? 'rotate-180 text-mun-purple-light' : 'text-white'
                          }`} 
                        />
                      </button>
                      
                      <AnimatePresence>
                        {expandedMenus.includes(link.name) && (
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
                                className={`block py-3 px-2 text-base ${
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
                      className={`block py-3 px-2 text-lg font-medium ${
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
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
