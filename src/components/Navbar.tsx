
import NavbarBrand from './navbar/NavbarBrand';
import MobileMenuButton from './navbar/MobileMenuButton';
import MobileMenu from './navbar/MobileMenu';
import { navLinks } from './navbar/navData';
import DesktopNavigation from './navbar/DesktopNavigation';
import { useNavbarState } from '../hooks/useNavbarState';

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
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-black py-4"
    >
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        <NavbarBrand />
        
        {/* Desktop Navigation with Dropdowns */}
        <DesktopNavigation 
          navLinks={navLinks}
          activeDropdown={activeDropdown}
          toggleDropdown={toggleDropdown}
          handleDropdownRef={handleDropdownRef}
          isActive={isActive}
        />
        
        {/* Mobile Menu Button */}
        <MobileMenuButton isOpen={mobileMenuOpen} onClick={toggleMobileMenu} />
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
