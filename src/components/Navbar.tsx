
import NavbarBrand from './navbar/NavbarBrand';
import MobileMenuButton from './navbar/MobileMenuButton';
import MobileMenu from './navbar/MobileMenu';
import { navLinks } from './navbar/navData';
import DesktopNavigation from './navbar/DesktopNavigation';
import { useNavbarState } from '../hooks/useNavbarState';
import { Instagram } from 'lucide-react';

const Navbar = () => {
  const {
    scrolled,
    mobileMenuOpen,
    activeDropdown,
    isActive,
    toggleMobileMenu,
    closeMobileMenu,
    toggleDropdown,
    handleDropdownRef,
  } = useNavbarState();

  return (
    <header 
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-black py-4 shadow-[0_4px_20px_rgba(121,83,169,0.5)]"
    >
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        <NavbarBrand />
        
        {/* Desktop Navigation with Dropdowns */}
        <div className="hidden lg:flex items-center space-x-4">
          <DesktopNavigation 
            navLinks={navLinks}
            activeDropdown={activeDropdown}
            toggleDropdown={toggleDropdown}
            handleDropdownRef={handleDropdownRef}
            isActive={isActive}
          />
          
          {/* Instagram Icon */}
          <a 
            href="https://www.instagram.com/jbcnparelmun" 
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 p-2 rounded-full hover:bg-mun-purple/20 transition-colors duration-300 flex items-center justify-center"
            aria-label="Visit our Instagram"
          >
            <Instagram className="w-5 h-5 text-white" />
          </a>
        </div>
        
        {/* Mobile Menu Button and Instagram Icon for Mobile */}
        <div className="flex items-center lg:hidden">
          <a 
            href="https://www.instagram.com/jbcnparelmun" 
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 p-2 rounded-full hover:bg-mun-purple/20 transition-colors duration-300 flex items-center justify-center"
            aria-label="Visit our Instagram"
          >
            <Instagram className="w-5 h-5 text-white" />
          </a>
          <MobileMenuButton isOpen={mobileMenuOpen} onClick={toggleMobileMenu} />
        </div>
      </div>
      
      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        navLinks={navLinks} 
        isActive={isActive} 
        onLinkClick={closeMobileMenu} 
      />
    </header>
  );
};

export default Navbar;
