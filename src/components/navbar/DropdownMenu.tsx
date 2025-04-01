
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

interface DropdownMenuProps {
  isOpen: boolean;
  submenu: { name: string; path: string }[];
  isActive: (path: string) => boolean;
  closeMenu?: () => void;
}

const DropdownMenu = ({ isOpen, submenu, isActive, closeMenu }: DropdownMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: 10, height: 0 }}
          animate={{ opacity: 1, y: 0, height: 'auto' }}
          exit={{ opacity: 0, y: 10, height: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 mt-2 w-60 rounded-xl overflow-hidden shadow-lg shadow-purple-500/10 bg-black bg-opacity-90 backdrop-blur-lg py-1.5 z-50 border border-white/10"
        >
          {submenu.map(subitem => (
            <Link
              key={subitem.name}
              to={subitem.path}
              className={`block px-5 py-2.5 text-left hover:bg-mun-purple/20 ${
                isActive(subitem.path) 
                  ? 'text-mun-purple-light' 
                  : 'text-white/70 hover:text-white'
              }`}
              onClick={closeMenu}
            >
              {subitem.name}
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DropdownMenu;
