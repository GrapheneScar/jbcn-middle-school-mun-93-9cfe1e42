
import { useState, useEffect } from 'react';
import { AlertTriangle, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Sheet, SheetContent } from './ui/sheet';
import RegisterButton from './RegisterButton';
import { Dialog, DialogContent } from './ui/dialog';

const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  
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
    <Dialog open={isVisible} onOpenChange={setIsVisible}>
      <DialogContent
        className="sm:max-w-md border-mun-purple bg-gradient-to-r from-black to-mun-purple-dark/90 text-white p-0 overflow-hidden"
        onInteractOutside={(e) => {
          e.preventDefault(); // Prevent closing when clicking outside
        }}
        onEscapeKeyDown={(e) => {
          e.preventDefault(); // Prevent closing with Escape key
        }}
      >
        <div className="px-6 py-4">
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              className="rounded-full bg-red-500 p-1.5 shadow-[0_0_10px_rgba(234,56,76,0.7)]"
              variants={glowAnimation}
              animate="animate"
            >
              <AlertTriangle className="w-4 h-4 text-white" />
            </motion.div>
            <h3 className="text-xl font-bold">URGENT ANNOUNCEMENT</h3>
          </div>
          
          <p className="mb-4 text-white/90">
            Registrations for JBCN Middle School MUN close on April 12th! Don't miss this opportunity to participate in this prestigious event.
          </p>
          
          <div className="mt-6 flex flex-col space-y-4">
            <RegisterButton className="w-full" />
            
            <button 
              onClick={handleClose}
              className="px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-md text-white/80 hover:text-white transition-colors text-sm"
            >
              Close this message
            </button>
          </div>
        </div>
        
        <button 
          onClick={handleClose}
          className="absolute right-4 top-4 text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Close announcement"
        >
          <X className="w-5 h-5" />
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default AnnouncementBanner;
