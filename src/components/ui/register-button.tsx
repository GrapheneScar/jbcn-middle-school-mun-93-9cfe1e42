import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { UserPlus, ExternalLink } from 'lucide-react';
interface RegisterButtonProps {
  className?: string;
}
export const RegisterButton = ({
  className = ""
}: RegisterButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return <div className={`${className} flex flex-col items-center justify-center z-20 relative`}>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSdGzaYOB7xSR68bbpr1BVqTIYFATwuytbIXk5IRTXoviu9U_g/viewform" target="_blank" rel="noopener noreferrer" className="flex justify-center z-20 relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <div className="relative group">
          <Button className={`relative overflow-hidden text-white font-medium px-6 py-5 
              flex items-center rounded-full border-2 border-mun-purple transition-all duration-300
              ${isHovered ? 'text-white scale-105' : 'bg-transparent'}
              hover:shadow-[0_0_15px_rgba(121,83,169,0.4)]`} size="lg" style={{
          zIndex: 10
        }}>
            <div className={`absolute inset-0 bg-gradient-to-r from-mun-purple to-mun-purple-light 
              transition-all duration-500 ease-out ${isHovered ? 'translate-x-0' : '-translate-x-full'}`} style={{
            zIndex: -1
          }} />
            <UserPlus className="mr-2 h-5 w-5" />
            Register Now
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </a>
      <p className="text-sm text-white/70 italic mt-2">Registration closes on 12th April 2025</p>
    </div>;
};
export default RegisterButton;