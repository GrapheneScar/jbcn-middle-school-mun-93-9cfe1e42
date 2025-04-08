
import { useState } from 'react';
import { AlertTriangle } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  
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

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-r from-black via-black to-black border-b border-mun-purple/30 text-white py-2 text-center relative z-[60]"
        >
          <div className="container mx-auto px-4 flex items-center justify-center gap-2 sm:gap-3">
            <motion.div
              className="rounded-full bg-red-500 p-1.5"
              variants={glowAnimation}
              animate="animate"
            >
              <AlertTriangle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            </motion.div>
            
            <span className="text-sm sm:text-base font-medium">
              Registrations close on April 12th!
            </span>
            
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-1"
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
