
import { Link } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  navLinks: Array<{ name: string; path: string }>;
  isActive: (path: string) => boolean;
  onLinkClick: () => void;
}

const MobileMenu = ({ isOpen, navLinks, isActive, onLinkClick }: MobileMenuProps) => {
  return (
    <div className={`
      md:hidden fixed inset-0 z-40 bg-black/95 transform transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-x-0' : 'translate-x-full'}
    `}>
      <div className="flex flex-col h-full pt-20 p-6 space-y-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`text-xl ${isActive(link.path) ? 'text-mun-purple-light' : 'text-white'} hover:text-mun-purple-light transition-colors duration-300`}
            onClick={onLinkClick}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
