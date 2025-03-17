
import { useState } from 'react';

interface RegisterButtonProps {
  className?: string;
}

const RegisterButton = ({ className = '' }: RegisterButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <button 
      className={`border border-mun-purple bg-transparent hover:bg-mun-purple hover:shadow-[0_0_15px_rgba(155,135,245,0.4)] transition-all duration-300 rounded-full px-8 py-3 text-lg font-medium text-white ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative z-10">
        REGISTER NOW!
      </span>
      {isHovered && (
        <span className="absolute inset-0 bg-gradient-to-r from-mun-purple to-mun-purple-light rounded-full" />
      )}
    </button>
  );
};

export default RegisterButton;
