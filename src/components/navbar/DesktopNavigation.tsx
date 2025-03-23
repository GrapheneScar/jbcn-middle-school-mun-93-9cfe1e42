
import { useEffect } from 'react';
import { NavLinkWithSubmenu } from '../../hooks/useNavbarState';
import { useLocation } from 'react-router-dom';
import NavLinkWithDropdown from './NavLinkWithDropdown';
import SimpleNavLink from './SimpleNavLink';

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
  const location = useLocation();
  
  // Close dropdown when route changes
  useEffect(() => {
    // No need to set hoveredLink here since we've moved that state to NavLinkWithDropdown
  }, [location.pathname]);

  return (
    <nav className="flex items-center space-x-2 md:space-x-3 py-2">
      {navLinks.map((link) => (
        link.submenu ? (
          <NavLinkWithDropdown 
            key={link.name}
            link={link}
            isActive={isActive}
            activeDropdown={activeDropdown}
            toggleDropdown={toggleDropdown}
            handleDropdownRef={handleDropdownRef}
          />
        ) : (
          <SimpleNavLink
            key={link.name}
            link={link}
            isActive={isActive}
          />
        )
      ))}
    </nav>
  );
};

export default DesktopNavigation;
