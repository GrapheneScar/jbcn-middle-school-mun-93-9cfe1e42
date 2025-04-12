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
          
        </div>
      </a>
      <p className="text-sm text-white/70 italic mt-2 my-0">Position Papers are due 22th April 2025</p>
    </div>;
};
export default RegisterButton;