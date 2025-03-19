
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Paintbrush, Hash, Terminal, Newspaper } from 'lucide-react';

interface EasterEggAnimationProps {
  activeEasterEgg: string | null;
}

const EasterEggAnimation = ({ activeEasterEgg }: EasterEggAnimationProps) => {
  // Different animations based on the type of easter egg
  
  if (!activeEasterEgg) return null;
  
  return (
    <AnimatePresence>
      <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
        {activeEasterEgg === "Head of Social Media" && (
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0, -10, 0],
                rotate: [0, 5, 0, -5, 0] 
              }}
              transition={{ duration: 1.5, repeat: 1 }}
              className="flex items-center p-8 rounded-full bg-purple-600/30 backdrop-blur-md"
            >
              <Hash className="text-white h-16 w-16" />
            </motion.div>
          </motion.div>
        )}
        
        {activeEasterEgg === "Head of Website Design" && (
          <motion.div 
            initial={{ opacity: 1 }}
            animate={{ 
              opacity: [1, 0.3, 1, 0.3, 1],
            }}
            transition={{ duration: 1.5 }}
            className="fixed inset-0 bg-black/5 backdrop-blur-[2px] flex items-center justify-center"
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="p-8 rounded-xl bg-purple-900/70 backdrop-blur-md"
            >
              <Terminal className="text-white h-16 w-16 mx-auto mb-4" />
            </motion.div>
          </motion.div>
        )}
        
        {activeEasterEgg === "Head of Press" && (
          <motion.div className="fixed inset-x-0 top-0 h-16 bg-red-600 flex items-center justify-center"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="flex items-center"
              animate={{ x: [-500, 0, window.innerWidth] }}
              transition={{ duration: 2.5, ease: "linear" }}
            >
              <Newspaper className="text-white h-8 w-8 mr-3" />
              <h3 className="text-white font-bold text-lg uppercase tracking-wider">Breaking News</h3>
            </motion.div>
          </motion.div>
        )}
        
        {activeEasterEgg === "Head of Photography" && (
          <motion.div className="fixed inset-0 bg-white"
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 0, 1] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.5, 1] }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Camera className="text-black h-24 w-24" />
            </motion.div>
          </motion.div>
        )}
        
        {activeEasterEgg === "Head of Illustration" && (
          <motion.div className="fixed inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <svg 
              viewBox="0 0 100 100" 
              width="100%" 
              height="100%" 
              preserveAspectRatio="none"
              className="absolute inset-0"
            >
              <motion.path
                d="M10,30 Q20,10 30,30 T50,30 T70,30 T90,30"
                stroke="#7953a9"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <motion.path
                d="M10,50 Q20,30 30,50 T50,50 T70,50 T90,50"
                stroke="#9c6ade"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
              />
              <motion.path
                d="M10,70 Q20,50 30,70 T50,70 T70,70 T90,70"
                stroke="#b080ff"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.6, ease: "easeInOut" }}
              />
            </svg>
            <motion.div 
              className="absolute bottom-10 right-10"
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Paintbrush className="text-purple-400 h-12 w-12" />
            </motion.div>
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
};

export default EasterEggAnimation;
