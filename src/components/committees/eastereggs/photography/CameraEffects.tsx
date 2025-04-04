
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

interface CameraEffectsProps {
  hasCamera: boolean | null;
}

const CameraEffects = ({ hasCamera }: CameraEffectsProps) => {
  return (
    <>
      {/* Camera flash effect */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0, 1, 0],
          backgroundColor: ["rgba(255,255,255,0)", "rgba(255,255,255,1)", "rgba(255,255,255,0)"]
        }}
        transition={{ duration: 0.5, times: [0, 0.1, 1], ease: "easeOut" }}
        className="fixed inset-0"
      />
      
      {/* Camera shutter animation */}
      <motion.div className="fixed inset-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          className="relative h-screen w-screen overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="absolute inset-0 bg-black"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: [0, 1, 1, 0] }}
            transition={{ 
              duration: 1.2, 
              times: [0, 0.2, 0.8, 1],
              delay: 0.5,
              ease: "easeInOut"
            }}
            style={{ transformOrigin: "center" }}
          />
        </motion.div>
      </motion.div>
      
      {/* Camera icon and sound visualization */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1] }}
        transition={{ ease: "easeOut", delay: 0.7 }}
        className="relative"
      >
        <motion.div
          className="bg-black/70 p-8 rounded-full"
          animate={{ 
            boxShadow: [
              "0 0 0 rgba(255,255,255,0.5)", 
              "0 0 30px rgba(255,255,255,0.3)", 
              "0 0 0 rgba(255,255,255,0.5)"
            ]
          }}
          transition={{ 
            duration: 2,
            ease: "easeInOut"
          }}
        >
          <Camera className="text-white h-20 w-20" />
        </motion.div>
        
        {/* Sound wave visualization around camera */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: [0, 0.5, 0], scale: [1, 1.5 + i * 0.3] }}
            transition={{ 
              duration: 1.5,
              delay: 0.8 + i * 0.2,
              ease: "easeOut"
            }}
            className="absolute inset-0 border-2 border-white/20 rounded-full z-0"
            style={{
              boxShadow: "0 0 10px rgba(255,255,255,0.1)"
            }}
          />
        ))}
      </motion.div>
      
      {/* Camera access status */}
      {hasCamera === false && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-lg text-sm"
        >
          Using gallery image (camera access denied)
        </motion.div>
      )}
    </>
  );
};

export default CameraEffects;
