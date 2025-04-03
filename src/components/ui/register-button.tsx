
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { UserPlus, ExternalLink } from 'lucide-react';

interface RegisterButtonProps {
  className?: string;
}

export const RegisterButton = ({ className = "" }: RegisterButtonProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  
  // Dynamic visibility based on scroll position
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
      href="https://docs.google.com/forms/d/e/1FAIpQLSdGzaYOB7xSR68bbpr1BVqTIYFATwuytbIXk5IRTXoviu9U_g/viewform" 
      target="_blank" 
      rel="noopener noreferrer"
      className={`transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-100'} ${className} flex justify-center`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative group">
        <Button 
          className={`relative overflow-hidden text-white font-medium px-6 py-5 
            flex items-center rounded-full border-2 border-mun-purple transition-all duration-300
            ${isHovered ? 'text-white scale-105' : 'bg-transparent'}
            hover:scale-105 shadow-lg hover:shadow-mun-purple/30`}
          size="lg"
          style={{
            zIndex: 10
          }}
        >
          <div 
            className={`absolute inset-0 bg-gradient-to-r from-mun-purple to-mun-purple-light 
            transition-all duration-500 ease-out ${isHovered ? 'translate-x-0' : '-translate-x-full'}`}
            style={{
              zIndex: -1
            }}
          />
          <UserPlus className="mr-2 h-5 w-5" />
          Register Now
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </a>
  );
};

export default RegisterButton;
