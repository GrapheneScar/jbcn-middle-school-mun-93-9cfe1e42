
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuProps {
  isOpen: boolean;
  navLinks: Array<{ name: string; path: string }>;
  isActive: (path: string) => boolean;
  onLinkClick: () => void;
}

const MobileMenu = ({ isOpen, navLinks, isActive, onLinkClick }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="md:hidden fixed inset-0 z-40 bg-black/95"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        >
          <div className="flex flex-col h-full pt-20 p-6 space-y-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <Link
                  to={link.path}
                  className={`text-xl block py-2 ${isActive(link.path) ? 'text-mun-purple-light' : 'text-white'} hover:text-mun-purple-light transition-colors duration-300`}
                  onClick={onLinkClick}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
