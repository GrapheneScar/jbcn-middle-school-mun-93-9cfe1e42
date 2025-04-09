
import { useState, useEffect } from 'react';
import { AlertTriangle, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Sheet, SheetContent } from './ui/sheet';

const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Text scrolling effect
  useEffect(() => {
    if (!isVisible) return;
    
    const scrollText = () => {
      setScrollPosition((prev) => (prev <= -100 ? 100 : prev - 0.5));
    };
    
    const scrollInterval = setInterval(scrollText, 50);
    return () => clearInterval(scrollInterval);
  }, [isVisible]);

  // Check if announcement should be shown (based on date and localStorage)
  useEffect(() => {
    // Check if the user has previously closed the announcement
    const announcementClosed = localStorage.getItem('announcementClosed');
    
    // Check if the current date is before April 13, 2024
    const currentDate = new Date();
    const expiryDate = new Date('2024-04-13');
    const shouldShowByDate = currentDate < expiryDate;
    
    // Show the announcement if it's before the expiry date and hasn't been closed
    if (shouldShowByDate && !announcementClosed) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  // Handle closing the announcement
  const handleClose = () => {
    setIsVisible(false);
    // Save in localStorage that the user has closed the announcement
    localStorage.setItem('announcementClosed', 'true');
  };

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
        repeatType: 'loop' as const,
      },
    },
  };

  // For testing purposes - this removes the localStorage item when the component mounts
  useEffect(() => {
    // Remove the localStorage item to ensure the popup shows
    localStorage.removeItem('announcementClosed');
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <Sheet open={isVisible} onOpenChange={setIsVisible}>
          <SheetContent
            side="top"
            className="border-b-2 border-mun-purple shadow-lg p-0 max-h-24 bg-gradient-to-r from-black to-mun-purple-dark/80"
            onInteractOutside={(e) => {
              e.preventDefault(); // Prevent closing when clicking outside
            }}
            onEscapeKeyDown={(e) => {
              e.preventDefault(); // Prevent closing with Escape key
            }}
          >
            <div className="container mx-auto px-4 py-3 flex items-center justify-center gap-2 sm:gap-3 overflow-hidden relative">
              <motion.div
                className="rounded-full bg-red-500 p-1.5 shadow-[0_0_10px_rgba(234,56,76,0.7)]"
                variants={glowAnimation}
                animate="animate"
              >
                <AlertTriangle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </motion.div>
              
              <div className="overflow-hidden w-64 sm:w-auto">
                <motion.span 
                  className="text-sm sm:text-base font-medium whitespace-nowrap inline-block text-white"
                  animate={{ x: `${scrollPosition}%` }}
                  transition={{ ease: "linear" }}
                >
                  ⚠️ URGENT: Registrations close on April 12th! Don't miss out! ⚠️
                </motion.span>
              </div>
              
              <button 
                onClick={handleClose}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-1 bg-red-500/80 rounded-full hover:bg-red-600 transition-colors"
                aria-label="Close announcement"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </SheetContent>
        </Sheet>
      )}
    </AnimatePresence>
  );
};

export default AnnouncementBanner;
