
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
  const { closeMobileMenu: closeMenu, isActive } = useNavbar();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLDivElement>(null);

  // Use the committee links for the Committees dropdown
  const submenuItems = item.name === "COMMITTEES" ? committeeLinks : item.submenu;

  // Handle outside clicks
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

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  const handleClick = (e: React.MouseEvent) => {
    // Always allow navigation to the committee main page
    if (item.path === '/committees') {
      // Allow click through to navigate to committees page
    } else if (submenuItems && submenuItems.length > 0 && item.path !== "#") {
      // Allow the click to proceed normally (navigate to the page)
    } else if (submenuItems && submenuItems.length > 0) {
      // It's a dropdown toggle with no real path
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  return (
    <div 
      className="relative" 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main link */}
      <div ref={linkRef}>
        <Link
          to={item.path}
          onClick={handleClick}
          className={`px-3 py-2 text-sm font-medium rounded-md transition-colors relative group ${
            isActive(item.path) 
              ? "text-white" 
              : "text-gray-300 hover:text-white"
          }`}
        >
          <span className="flex items-center">
            {item.name}
            {submenuItems && submenuItems.length > 0 && (
              <ChevronDown 
                className={`ml-1 h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} 
              />
            )}
          </span>

          {/* Highlight pill for active state */}
          {isActive(item.path) && (
            <span className="absolute inset-0 bg-mun-purple/20 rounded-md -z-10"></span>
          )}
        </Link>
      </div>

      {/* Dropdown Menu */}
      {submenuItems && submenuItems.length > 0 && (
        <div ref={dropdownRef}>
          <DropdownMenu 
            isOpen={isOpen} 
            submenu={submenuItems}
            isActive={isActive}
            closeMenu={closeMenu}
          />
        </div>
      )}
    </div>
  );
};

export default NavLinkWithDropdown;
