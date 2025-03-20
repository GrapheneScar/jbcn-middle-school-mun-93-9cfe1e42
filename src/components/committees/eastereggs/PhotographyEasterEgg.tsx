
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

const PhotographyEasterEgg = () => {
  return (
    <>
      {/* Camera flash effect */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0, 1, 0],
          backgroundColor: ["rgba(255,255,255,0)", "rgba(255,255,255,1)", "rgba(255,255,255,0)"]
        }}
        transition={{ duration: 0.5, times: [0, 0.1, 1] }}
        className="fixed inset-0"
      />
      
      {/* Camera shutter animation with improved visuals */}
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
              delay: 0.5
            }}
            style={{ transformOrigin: "center" }}
          />
        </motion.div>
        
        {/* Photo frame snapshot effects */}
        <div className="fixed inset-0 flex items-center justify-center">
          <motion.div 
            className="w-full max-w-3xl aspect-video border-[20px] border-white shadow-2xl relative overflow-hidden"
            initial={{ scale: 0, rotate: -5 }}
            animate={{ scale: [0, 1.2, 1], rotate: [-5, 5, 0] }}
            transition={{ 
              duration: 0.8, 
              delay: 1.5,
              type: "spring"
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
            
            <img 
              src="/lovable-uploads/gallery-1.jpg" 
              alt="MUN Conference" 
              className="w-full h-full object-cover opacity-0"
              onError={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
              onLoad={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
            />
            
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
      </motion.div>
      
      {/* Camera icon and sound visualization */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.7 }}
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
            repeat: 1,
            repeatType: "reverse"
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
              repeat: 2,
              duration: 1.5,
              delay: 0.8 + i * 0.2
            }}
            className="absolute inset-0 border-2 border-white/20 rounded-full z-0"
            style={{
              boxShadow: "0 0 10px rgba(255,255,255,0.1)"
            }}
          />
        ))}
        
        {/* Aperture blades effect */}
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-full origin-center"
              style={{ 
                transform: `rotate(${i * 30}deg)`,
              }}
            >
              <motion.div 
                className="absolute top-0 left-1/2 w-1 h-1/3 bg-white/10 -translate-x-1/2 origin-bottom"
                animate={{ scaleY: [1, 0.2, 1] }}
                transition={{ 
                  duration: 1.5, 
                  delay: 1.2 + i * 0.1,
                  repeat: 1,
                  repeatType: "reverse"
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default PhotographyEasterEgg;
