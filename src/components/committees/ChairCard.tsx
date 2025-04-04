
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Chair } from './types';

interface ChairCardProps {
  chair: Chair;
  openModal: (chair: Chair) => void;
}

const ChairCard = ({ chair, openModal }: ChairCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="bg-[#121218] rounded-xl overflow-hidden border border-[#2a2a3a] cursor-pointer transition-all duration-300"
      onClick={() => openModal(chair)}
      whileHover={{ 
        scale: 1.05, 
        boxShadow: "0 0 25px rgba(121,83,169,0.4)"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[3/4] relative overflow-hidden">
        <img 
          src={chair.image || '/placeholder.svg'} 
          alt={chair.name} 
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-80' : 'opacity-50'}`}></div>
        <div className="absolute inset-x-0 bottom-0 p-4">
          <h3 className={`text-xl font-bold text-white mb-1 transition-transform duration-300 ${isHovered ? 'translate-y-0' : 'translate-y-0'}`}>{chair.name}</h3>
          <p className={`text-mun-purple-light text-sm transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-80'}`}>{chair.title}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ChairCard;
