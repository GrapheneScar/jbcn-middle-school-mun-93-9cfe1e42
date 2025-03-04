
import { useState } from 'react';

interface RegisterButtonProps {
  className?: string;
}

const RegisterButton = ({ className = '' }: RegisterButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <button 
      className={`mun-button group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative z-10">
        REGISTER NOW!
      </span>
      <span 
        className={`absolute inset-0 bg-mun-purple-dark transform transition-transform duration-500 origin-left
          ${isHovered ? 'scale-x-0' : 'scale-x-100'}`}
      />
      <span className={`absolute inset-0 bg-gradient-to-r from-mun-purple to-mun-purple-light opacity-0 
        transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`}
      />
    </button>
  );
};

export default RegisterButton;
