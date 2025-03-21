
import { useState, useRef, useEffect } from 'react';
import NavbarBrand from './navbar/NavbarBrand';
import MobileMenuButton from './navbar/MobileMenuButton';
import MobileMenu from './navbar/MobileMenu';
import { navLinks } from './navbar/navData';
import DesktopNavigation from './navbar/DesktopNavigation';
import { useNavbarState } from '../hooks/useNavbarState';
import { Instagram, X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [pressingTimer, setPressingTimer] = useState<ReturnType<typeof setTimeout> | null>(null);
  const [showHeart, setShowHeart] = useState(false);
  const [lastTap, setLastTap] = useState(0);
  const tapTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  
  // Handle long press for Instagram icon
  const handleMouseDown = () => {
    const timer = setTimeout(() => {
      setShowInstagramPopup(true);
    }, 800); // 800ms long press to trigger
    
    setPressingTimer(timer);
  };
  
  const handleMouseUp = () => {
    if (pressingTimer) {
      clearTimeout(pressingTimer);
      setPressingTimer(null);
    }
  };

  const handleQuickClick = (e: React.MouseEvent) => {
    // Handle double-tap/double-click for heart animation
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTap;
    
    // Check if it's a double tap (within 300ms)
    if (tapLength < 300 && tapLength > 0) {
      e.preventDefault();
      
      // Clear any existing timeout to prevent normal click
      if (tapTimeout.current) {
        clearTimeout(tapTimeout.current);
        tapTimeout.current = null;
      }
      
      // Show heart animation
      setShowHeart(true);
      
      // Hide heart after animation completes
      setTimeout(() => {
        setShowHeart(false);
      }, 1500);
      
      // Reset last tap
      setLastTap(0);
    } else {
      // First tap - set timer to handle single tap after delay
      setLastTap(currentTime);
      
      tapTimeout.current = setTimeout(() => {
        // It's a single tap/click - open Instagram in new tab
        if (pressingTimer) {
          clearTimeout(pressingTimer);
          setPressingTimer(null);
        }
        
        // Open Instagram in a new tab on single click
        window.open('https://www.instagram.com/jbcnparelmun', '_blank');
        
        // Reset last tap
        setLastTap(0);
      }, 300);
    }
  };
  
  // Cleanup timers on component unmount
  useEffect(() => {
    return () => {
      if (pressingTimer) {
        clearTimeout(pressingTimer);
      }
      if (tapTimeout.current) {
        clearTimeout(tapTimeout.current);
      }
    };
  }, [pressingTimer]);

  return (
    <>
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
            <div 
              className="ml-4 p-2 rounded-full hover:bg-mun-purple/20 transition-colors duration-300 flex items-center justify-center cursor-pointer"
              aria-label="Visit our Instagram"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleMouseDown}
              onTouchEnd={handleMouseUp}
              onClick={handleQuickClick}
            >
              <Instagram className="w-5 h-5 text-white" />
            </div>
          </div>
          
          {/* Mobile Menu Button and Instagram Icon for Mobile */}
          <div className="flex items-center lg:hidden">
            <div 
              className="mr-4 p-2 rounded-full hover:bg-mun-purple/20 transition-colors duration-300 flex items-center justify-center cursor-pointer"
              aria-label="Visit our Instagram"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleMouseDown}
              onTouchEnd={handleMouseUp}
              onClick={handleQuickClick}
            >
              <Instagram className="w-5 h-5 text-white" />
            </div>
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
        {showHeart && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1.2 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none"
          >
            <Heart 
              className="w-32 h-32 text-[#ea384c] filter drop-shadow-lg" 
              fill="#ea384c"
            />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Instagram Safari Popup with purple and black theme */}
      <AnimatePresence>
        {showInstagramPopup && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowInstagramPopup(false)}
          >
            <motion.div 
              className="w-full max-w-2xl bg-black rounded-lg overflow-hidden shadow-2xl border border-mun-purple/30"
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", damping: 25 }}
            >
              {/* Mac Browser Chrome */}
              <div className="bg-mun-purple/30 h-8 flex items-center justify-between px-2 border-b border-mun-purple/20">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#28c940]"></div>
                </div>
                <div className="w-72 bg-black/60 h-5 rounded-md flex items-center justify-center text-xs text-mun-purple-light border border-mun-purple/30">
                  instagram.com/jbcnparelmun
                </div>
                <div>
                  <button 
                    className="text-white hover:text-mun-purple-light"
                    onClick={() => setShowInstagramPopup(false)}
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>
              
              {/* Safari Browser Content */}
              <div className="h-[60vh] overflow-y-auto bg-black border-t border-mun-purple/10">
                <iframe 
                  src="https://www.instagram.com/jbcnparelmun" 
                  className="w-full h-full border-0"
                  title="JBCN Parel MUN Instagram"
                  loading="lazy"
                  sandbox="allow-same-origin allow-scripts"
                />
              </div>
              
              {/* Fallback if iframe doesn't load */}
              <div className="p-4 text-center text-sm text-mun-purple-light bg-black border-t border-mun-purple/20">
                <p>
                  If the page doesn't load properly, you can visit 
                  <a 
                    href="https://www.instagram.com/jbcnparelmun"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-mun-purple ml-1 hover:underline"
                  >
                    instagram.com/jbcnparelmun
                  </a>
                  directly.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
