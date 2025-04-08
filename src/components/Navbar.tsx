
import { useState, useEffect } from 'react';
import NavbarBrand from './navbar/NavbarBrand';
import MobileMenuButton from './navbar/MobileMenuButton';
import MobileMenu from './navbar/MobileMenu';
import { navLinks } from './navbar/navData';
import DesktopNavigation from './navbar/DesktopNavigation';
import { useNavbarState } from '../hooks/useNavbarState';
import { AnimatePresence } from 'framer-motion';

// Import new components
import InstagramIcon from './navbar/InstagramIcon';
import HeartAnimation from './navbar/HeartAnimation';
import InstagramPopup from './navbar/InstagramPopup';

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

  const [showInstagramPopup, setShowInstagramPopup] = useState(false);
  const [showHeart, setShowHeart] = useState(false);
  
  // Heart animation handler
  const handleHeartAnimation = () => {
    setShowHeart(true);
    setTimeout(() => {
      setShowHeart(false);
    }, 1500);
  };

  return (
    <>
      <header 
        className="fixed top-[44px] sm:top-[48px] left-0 w-full z-40 transition-all duration-300 bg-black py-4 shadow-[0_4px_20px_rgba(121,83,169,0.5)]"
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
            <InstagramIcon 
              onLongPress={() => setShowInstagramPopup(true)} 
              onHeartAnimation={handleHeartAnimation}
            />
          </div>
          
          {/* Mobile Menu Button and Instagram Icon for Mobile */}
          <div className="flex items-center lg:hidden">
            <InstagramIcon 
              onLongPress={() => setShowInstagramPopup(true)} 
              onHeartAnimation={handleHeartAnimation}
              isMobile={true}
            />
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
      
      {/* Heart Animation on Double Tap */}
      <AnimatePresence>
        <HeartAnimation show={showHeart} />
      </AnimatePresence>
      
      {/* Instagram Safari Popup with purple and black theme */}
      <AnimatePresence>
        <InstagramPopup isOpen={showInstagramPopup} onClose={() => setShowInstagramPopup(false)} />
      </AnimatePresence>
    </>
  );
};

export default Navbar;
