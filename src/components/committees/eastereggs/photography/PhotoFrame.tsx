
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface PhotoFrameProps {
  displayImage: string | null;
}

const PhotoFrame = ({ displayImage }: PhotoFrameProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Reset loaded state when image changes
  useEffect(() => {
    setImageLoaded(false);
  }, [displayImage]);
  
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <motion.div 
        className="w-full max-w-3xl aspect-video border-[20px] border-white shadow-2xl relative overflow-hidden"
        initial={{ scale: 0, rotate: -5 }}
        animate={{ scale: [0, 1], rotate: [-5, 0] }}
        transition={{ 
          duration: 0.8, 
          delay: 1.5,
          ease: "easeOut"
        }}
      >
        <motion.div 
          className="absolute inset-0 bg-gray-200"
          animate={{ opacity: [1, 0] }}
          transition={{ delay: 2, duration: 0.5 }}
        />
        
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-blue-400/20 mix-blend-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.5 }}
        />
        
        {displayImage && (
          <img 
            src={displayImage} 
            alt="Captured" 
            className="w-full h-full object-cover transition-opacity duration-300"
            style={{ opacity: imageLoaded ? 1 : 0 }}
            onError={() => setImageLoaded(true)}
            onLoad={() => setImageLoaded(true)}
          />
        )}
        
        <motion.div 
          className="absolute inset-0 flex items-center justify-center text-2xl text-white font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ delay: 2.2, duration: 1.5 }}
        >
          <span className="bg-black/50 px-4 py-2 rounded-md backdrop-blur-sm">
            JBCN MUN 2025
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PhotoFrame;
