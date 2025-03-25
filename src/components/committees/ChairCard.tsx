
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const holdTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [isHolding, setIsHolding] = useState(false);
  
  const handleHoldStart = () => {
    if (chair.easterEgg) {
      // Start a timer when hold begins
      setIsHolding(true);
      holdTimerRef.current = setTimeout(() => {
        // Trigger easter egg after 0.8 seconds
        const event = new CustomEvent('easterEggTriggered', { 
          detail: { title: chair.easterEgg } 
        });
        window.dispatchEvent(event);
      }, 800);
    }
  };
  
  const handleHoldEnd = () => {
    // Clear the timer if hold ends before threshold
    if (holdTimerRef.current) {
      clearTimeout(holdTimerRef.current);
      holdTimerRef.current = null;
    }
    setIsHolding(false);
  };

  return (
    <motion.div 
      className="w-full"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="glass-panel rounded-lg overflow-hidden border border-white/10 hover:border-mun-purple/30 transition-colors">
        <div 
          className="relative w-full aspect-[3/4] overflow-hidden cursor-pointer"
          onMouseDown={handleHoldStart}
          onMouseUp={handleHoldEnd}
          onMouseLeave={handleHoldEnd}
          onTouchStart={handleHoldStart}
          onTouchEnd={handleHoldEnd}
        >
          <img 
            src={chair.photo || "/placeholder.svg"} 
            alt={chair.name} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          {isHolding && chair.easterEgg && (
            <div className="absolute inset-0 bg-mun-purple/20 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full border-4 border-white border-t-transparent animate-spin"></div>
            </div>
          )}
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
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <span>{isExpanded ? "Hide bio" : "Show bio"}</span>
              <motion.div
                animate={{ rotate: isExpanded ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronRight className="h-4 w-4" />
              </motion.div>
            </div>
            
            <AnimatePresence>
              {isExpanded && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-3"
                >
                  <div className="glass-panel p-3 rounded-md bg-black/30 border border-mun-purple/20">
                    <p className="text-white/90 text-sm italic leading-relaxed">{chair.bio}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ChairCard;
