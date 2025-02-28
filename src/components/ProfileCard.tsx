
import { useState } from 'react';

interface ProfileCardProps {
  name: string;
  title: string;
  imagePath: string;
  imageAlt: string;
  reversed?: boolean;
}

const ProfileCard = ({ name, title, imagePath, imageAlt, reversed = false }: ProfileCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} 
        glass-panel overflow-hidden transition-all duration-500 
        hover:shadow-[0_0_30px_rgba(121,83,169,0.3)] transform hover:-translate-y-1`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`md:w-1/2 h-56 md:h-auto relative overflow-hidden`}>
        <img 
          src={imagePath} 
          alt={imageAlt} 
          className={`w-full h-full object-cover transition-transform duration-700 
            ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 
          transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`} />
      </div>
      
      <div className="md:w-1/2 p-6 flex flex-col justify-center items-center md:items-start">
        <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
        <p className="text-sm text-mun-purple-light italic">~ {title} ~</p>
      </div>
    </div>
  );
};

export default ProfileCard;
