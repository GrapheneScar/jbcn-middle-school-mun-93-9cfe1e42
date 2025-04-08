
import { useState, useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Subtle pulse animation for the alert icon
  const glowAnimation = {
    animate: {
      boxShadow: [
        '0 0 0 0 rgba(234, 56, 76, 0.7)',
        '0 0 0 8px rgba(234, 56, 76, 0)',
      ],
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'loop' as const, // Adding type assertion to satisfy TypeScript
      },
    },
  };

  // Text scrolling effect
  useEffect(() => {
    if (!isVisible) return;
    
    const scrollText = () => {
      setScrollPosition((prev) => (prev <= -100 ? 100 : prev - 0.5));
    };
    
    const scrollInterval = setInterval(scrollText, 50);
    return () => clearInterval(scrollInterval);
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-r from-black to-mun-purple-dark/80 border-b-2 border-mun-purple text-white py-3 text-center fixed w-full z-[100]"
        >
          <div className="container mx-auto px-4 flex items-center justify-center gap-2 sm:gap-3 overflow-hidden">
            <motion.div
              className="rounded-full bg-red-500 p-1.5 shadow-[0_0_10px_rgba(234,56,76,0.7)]"
              variants={glowAnimation}
              animate="animate"
            >
              <AlertTriangle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            </motion.div>
            
            <div className="overflow-hidden w-64 sm:w-auto">
              <motion.span 
                className="text-sm sm:text-base font-medium whitespace-nowrap inline-block"
                animate={{ x: `${scrollPosition}%` }}
                transition={{ ease: "linear" }}
              >
                ⚠️ URGENT: Registrations close on April 12th! Don't miss out! ⚠️
              </motion.span>
            </div>
            
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-1 bg-red-500/80 rounded-full hover:bg-red-600 transition-colors"
              aria-label="Close announcement"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnnouncementBanner;
