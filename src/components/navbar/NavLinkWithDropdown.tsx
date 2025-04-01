
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { NavLinkWithSubmenu, useNavbar } from '../../hooks/useNavbarState';
import DropdownMenu from './DropdownMenu';
import { committeeLinks } from './committeeLinks';

interface Props {
  item: NavLinkWithSubmenu;
}

const NavLinkWithDropdown = ({ item }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { closeMobileMenu: closeMenu } = useNavbar();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLDivElement>(null);

  // For committees, use special committee links
  const isCommitteesLink = item.name === 'COMMITTEES';
  const submenuItems = isCommitteesLink ? committeeLinks : item.submenu;

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target as Node) && 
        linkRef.current && 
        !linkRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div 
      className="relative" 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={linkRef}
        className="flex items-center gap-1 cursor-pointer"
      >
        <Link
          to={item.path === '#' ? (submenuItems && submenuItems.length > 0 ? submenuItems[0].path : '#') : item.path}
          className={`text-white hover:text-mun-purple-light transition-colors py-2`}
          onClick={() => {
            // If this is a real link (not #), close the mobile menu
            if (item.path !== '#') {
              closeMenu();
            }
          }}
        >
          {item.name}
        </Link>
        <ChevronDown
          size={16}
          className={`transition-transform duration-300 text-mun-purple-light ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </div>

      {/* Dropdown Menu */}
      {submenuItems && submenuItems.length > 0 && (
        <div ref={dropdownRef}>
          <DropdownMenu 
            isOpen={isOpen} 
            submenu={submenuItems}
            isActive={item => false} // We'll fix this in the next update
          />
        </div>
      )}
    </div>
  );
};

export default NavLinkWithDropdown;
