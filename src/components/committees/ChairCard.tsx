
import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, X } from 'lucide-react';

interface Chair {
  name: string;
  title: string;
  photo: string;
  bio: string;
  department: string;
  easterEgg?: string;
}

interface ChairCardProps {
  chair: Chair;
}

const ChairCard = ({ chair }: ChairCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Function to trigger the easter egg with haptic feedback
  const triggerEasterEgg = () => {
    if (chair.easterEgg) {
      // Try to use vibration API if available for haptic feedback
      if (navigator.vibrate) {
        navigator.vibrate(200); // Vibrate for 200ms
      }
      
      // Create a custom event to trigger the animation
      const event = new CustomEvent('easterEggTriggered', {
        detail: { title: chair.easterEgg }
      });
      window.dispatchEvent(event);
    }
  };

  // Handle long press/touch
  const handleMouseDown = () => {
    const timer = setTimeout(() => {
      triggerEasterEgg();
    }, 800); // Trigger after 800ms hold
    
    // Clear timeout on mouse up
    document.addEventListener('mouseup', () => {
      clearTimeout(timer);
    }, { once: true });
  };

  return (
    <div className="relative">
      {/* Purple semi-transparent curved rectangle background */}
      <div className="absolute -inset-3 bg-mun-purple/20 rounded-2xl -z-10 backdrop-blur-sm"></div>
      
      <div className="glass-panel overflow-hidden rounded-xl h-full">
        {/* Photo Section */}
        <motion.div 
          className="relative aspect-square overflow-hidden cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          onMouseDown={handleMouseDown}
          onTouchStart={triggerEasterEgg}
        >
          <img 
            src={chair.photo} 
            alt={chair.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
        </motion.div>
        
        {/* Info Section */}
        <div className="p-4">
          <h3 className="text-lg font-bold text-white mb-1">{chair.name}</h3>
          <p className="text-sm text-mun-purple-light mb-3">{chair.title}</p>
          
          {chair.bio && (
            <div className="mt-3">
              <div className={`text-white/80 text-sm ${!isExpanded && chair.bio.length > 100 ? 'line-clamp-3' : ''}`}>
                {chair.bio}
              </div>
              
              {chair.bio.length > 100 && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="mt-2 text-mun-purple-light hover:text-mun-purple text-xs flex items-center"
                >
                  {isExpanded ? (
                    <>
                      <X className="w-3 h-3 mr-1" />
                      Show Less
                    </>
                  ) : (
                    <>
                      <BookOpen className="w-3 h-3 mr-1" />
                      Read More
                    </>
                  )}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChairCard;
