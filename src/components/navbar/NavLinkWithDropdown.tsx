
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { NavLinkWithSubmenu } from '../../hooks/useNavbarState';
import DropdownMenu from './DropdownMenu';

interface NavLinkWithDropdownProps {
  link: NavLinkWithSubmenu;
  isActive: (path: string) => boolean;
  activeDropdown: string | null;
  toggleDropdown: (linkName: string) => void;
  handleDropdownRef: (el: HTMLDivElement | null, linkName: string) => void;
}

const NavLinkWithDropdown = ({
  link,
  isActive,
  activeDropdown,
  toggleDropdown,
  handleDropdownRef,
}: NavLinkWithDropdownProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const isDropdownOpen = isHovered || activeDropdown === link.name;

  return (
    <div 
      className="relative"
      ref={el => handleDropdownRef(el, link.name)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
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
            isDropdownOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>
      
      <DropdownMenu 
        isOpen={isDropdownOpen}
        submenu={link.submenu || []}
        isActive={isActive}
      />
    </div>
  );
};

export default NavLinkWithDropdown;
