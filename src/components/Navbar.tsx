
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavbarBrand from './navbar/NavbarBrand';
import NavLink from './navbar/NavLink';
import MobileMenuButton from './navbar/MobileMenuButton';
import MobileMenu from './navbar/MobileMenu';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const navLinks = [
    { name: 'ABOUT US', path: '/about' },
    { name: 'COMMITTEES', path: '/committees' },
    { name: 'COMMITTEE HEADS', path: '/committee-heads' },
    { name: 'DELEGATE PREPARATION', path: '/delegate-preparation' },
    { name: 'SCHEDULE', path: '/schedule' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'NEWSLETTER', path: '/newsletter' },
    { name: 'CONTACT US', path: '/contact' },
  ];
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-md py-3 shadow-lg' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <NavbarBrand />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              name={link.name}
              path={link.path}
              isActive={isActive(link.path)}
            />
          ))}
        </nav>
        
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
