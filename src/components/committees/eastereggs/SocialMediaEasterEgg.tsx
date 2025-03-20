
import { motion } from 'framer-motion';
import { Hash, Sparkles } from 'lucide-react';

const SocialMediaEasterEgg = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      {/* Flying hashtags with improved visuals */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: window.innerHeight + 100,
            opacity: 0,
            rotate: Math.random() * 20 - 10
          }}
          animate={{ 
            x: Math.random() * window.innerWidth, 
            y: -100,
            opacity: [0, 1, 0.8, 0],
            rotate: Math.random() * 360,
            scale: [0.7, 1.2, 0.9]
          }}
          transition={{ 
            duration: 4 + Math.random() * 5,
            delay: i * 0.15,
            ease: "easeOut"
          }}
          className="absolute text-purple-400 font-bold drop-shadow-[0_0_8px_rgba(121,83,169,0.8)]"
          style={{ 
            fontSize: `${Math.random() * 20 + 20}px`,
            filter: `hue-rotate(${Math.random() * 40 - 20}deg)`
          }}
        >
          #{["JBCNMUN", "Diplomacy", "GlobalLeaders", "DebateMasters", "FutureDiplomats", "ModelUN", "Youth", "Leadership"][Math.floor(Math.random() * 8)]}
        </motion.div>
      ))}
      
      {/* Background pulse effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: [0, 0.1, 0.15, 0.1, 0], 
          scale: [1, 5, 8, 12, 15] 
        }}
        transition={{ 
          duration: 6, 
          repeat: 1, 
          repeatType: "reverse" 
        }}
        className="fixed inset-0 bg-purple-600 rounded-full z-[-1]"
        style={{ transformOrigin: "center" }}
      />
      
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1],
          rotateZ: [0, 10, -10, 0],
          filter: ["drop-shadow(0 0 8px rgba(121,83,169,0.3))", "drop-shadow(0 0 20px rgba(121,83,169,0.8))", "drop-shadow(0 0 8px rgba(121,83,169,0.3))"]
        }}
        transition={{ duration: 3, repeat: 1 }}
        className="p-10 rounded-full bg-purple-600/30 backdrop-blur-md"
      >
        <Hash className="text-white h-20 w-20" />
        <motion.div
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{ 
            duration: 2, 
            repeat: 2, 
            repeatType: "reverse" 
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sparkles className="text-purple-200 h-24 w-24" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SocialMediaEasterEgg;
