
import { useState } from 'react';
import { motion } from 'framer-motion';
import { CommitteeChair, DepartmentChair } from './types';

// Create a merged type that works for both committee chairs and department chairs
type ChairCardProps = {
  chair: {
    name: string;
    title: string;
    photo: string;
    bio: string;
    department?: string;
    easterEgg?: string;
  };
};

const ChairCard = ({ chair }: ChairCardProps) => {
  const [isHovering, setIsHovering] = useState(false);
  
  // Function to trigger easter egg
  const triggerEasterEgg = () => {
    if (chair.easterEgg) {
      // Create and dispatch custom event
      const easterEggEvent = new CustomEvent('easterEggTriggered', {
        detail: { title: chair.easterEgg }
      });
      window.dispatchEvent(easterEggEvent);
    }
  };
  
  return (
    <motion.div 
      className="glass-panel overflow-hidden rounded-xl border border-mun-purple/20 relative group"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={triggerEasterEgg}
      style={{ cursor: chair.easterEgg ? 'pointer' : 'default' }}
    >
      <div className="h-64 overflow-hidden relative">
        <img 
          src={chair.photo || "/placeholder.svg"} 
          alt={chair.name} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {chair.easterEgg && (
          <div className="absolute top-2 right-2 w-2 h-2 bg-mun-purple animate-ping rounded-full"></div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80"></div>
      </div>
      
      <div className="p-4 relative">
        <h3 className="text-lg font-bold text-white">{chair.name}</h3>
        <p className="text-sm text-mun-purple-light mb-2">{chair.title}</p>
        <p className="text-xs text-white/70">{chair.bio}</p>
        
        {chair.easterEgg && isHovering && (
          <div className="absolute bottom-1 right-1 text-[10px] text-mun-purple-light/60 italic">
            *click to discover
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ChairCard;
