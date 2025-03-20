
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const ScrollIndicator = () => {
  const isMobile = useIsMobile();

  return (
    <motion.div 
      className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10" 
      initial={{
        opacity: 0
      }} 
      animate={{
        opacity: 1
      }} 
      transition={{
        delay: 1.5,
        duration: 1
      }}
    >
      <div className="flex flex-col items-center">
        <span className="text-white/60 text-sm mb-2">Scroll Down</span>
        
        {isMobile ?
          // Finger swipe animation for mobile
          <div className="relative h-10 w-16 my-0 mx-[7px] px-[20px] rounded-none py-0">
            <motion.div 
              className="absolute w-6 h-6 bg-white/20 rounded-full" 
              animate={{
                y: [0, 15, 0],
                x: [0, 0, 0],
                scale: [1, 1.1, 1]
              }} 
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut"
              }} 
            />
            <motion.div 
              animate={{
                y: [0, 15, 0],
                rotate: [0, 5, 0]
              }} 
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut"
              }} 
              className="absolute top-0 left-0 w-4 h-5 border-2 border-white/60 rounded-t-full px-0 mx-[18px] py-0 my-[5px]" 
            />
          </div> :
          // Mouse scroll animation for desktop
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <motion.div 
              className="w-1 h-2 bg-white rounded-full" 
              animate={{
                y: [0, 12, 0],
                opacity: [0.6, 1, 0.6]
              }} 
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut"
              }} 
            />
          </div>
        }
      </div>
    </motion.div>
  );
};

export default ScrollIndicator;
