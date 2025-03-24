
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface ChairCardProps {
  chair: {
    name: string;
    title: string;
    photo: string;
    bio: string;
    department?: string;
    easterEgg?: string;
  };
}

const ChairCard = ({ chair }: ChairCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const handleCardClick = () => {
    // If this chair has an easter egg, trigger it
    if (chair.easterEgg) {
      const event = new CustomEvent('easterEggTriggered', { 
        detail: { title: chair.easterEgg } 
      });
      window.dispatchEvent(event);
    }
  };

  return (
    <motion.div 
      className="w-full"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      onClick={handleCardClick}
    >
      <div className="glass-panel rounded-lg overflow-hidden border border-white/10 hover:border-mun-purple/30 transition-colors cursor-pointer">
        <div className="relative w-full aspect-[3/4] overflow-hidden">
          <img 
            src={chair.photo || "/placeholder.svg"} 
            alt={chair.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h4 className="text-lg font-bold mb-1">{chair.name}</h4>
            <p className="text-sm text-mun-purple-light">{chair.title}</p>
          </div>
        </div>
        
        {chair.bio && (
          <div className="p-4 border-t border-white/5">
            <div 
              className="text-white/70 text-sm cursor-pointer flex items-center justify-between"
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
            >
              <span>{isExpanded ? "Hide bio" : "Show bio"}</span>
              <motion.div
                animate={{ rotate: isExpanded ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronRight className="h-4 w-4" />
              </motion.div>
            </div>
            
            {isExpanded && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-3 text-white/80 text-sm"
              >
                <p>{chair.bio}</p>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ChairCard;
