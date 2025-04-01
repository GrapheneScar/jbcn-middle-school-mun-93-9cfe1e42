
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { UserPlus, ExternalLink } from 'lucide-react';

interface RegisterButtonProps {
  className?: string;
}

export const RegisterButton = ({ className = "" }: RegisterButtonProps) => {
  const [isVisible, setIsVisible] = useState(true);
  
  // Dynamic pulse effect based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Make button less visible when user has scrolled down significantly
      if (scrollPosition > windowHeight * 0.8) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a 
      href="https://www.google.com" 
      target="_blank" 
      rel="noopener noreferrer"
      className={`transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'} ${className}`}
    >
      <Button 
        className={`registration-button text-white font-medium px-6 py-5 flex items-center rounded-full ${isVisible ? 'register-pulse' : ''}`}
        size="lg"
      >
        <UserPlus className="mr-2 h-5 w-5" />
        Register Now
        <ExternalLink className="ml-2 h-4 w-4" />
      </Button>
    </a>
  );
};

export default RegisterButton;
