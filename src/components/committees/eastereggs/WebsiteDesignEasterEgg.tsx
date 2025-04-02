
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

const WebsiteDesignEasterEgg = () => {
  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.3, 0.1, 0.5, 0.2, 0.7, 0.3, 1, 0] }}
        transition={{ 
          duration: 5, 
          times: [0, 0.1, 0.2, 0.3, 0.4, 0.6, 0.7, 0.8, 1],
          ease: "linear" // Use linear instead of spring
        }}
        className="fixed inset-0 bg-black/40 backdrop-blur-[4px]"
      />
      
      {/* Digital distortion overlays */}
      <motion.div 
        className="fixed inset-0 opacity-20 mix-blend-overlay pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.05, 0.2, 0.05, 0.15, 0.05] }}
        transition={{ 
          duration: 4, 
          repeat: 1, 
          repeatType: "reverse",
          ease: "linear" // Use linear instead of spring
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-blue-900/30" />
        
        {/* Scan lines effect */}
        {[...Array(40)].map((_, i) => (
          <motion.div 
            key={i}
            className="absolute w-full h-[2px] bg-white/10"
            style={{ top: `${i * 2.5}%` }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              x: [0, Math.random() * 10 - 5, 0]
            }}
            transition={{ 
              duration: 2 + Math.random() * 2, 
              repeat: Infinity, 
              repeatType: "reverse",
              ease: "linear" // Use linear instead of spring
            }}
          />
        ))}
      </motion.div>
      
      {/* Matrix-like code rain effect with improved visuals */}
      <div className="fixed inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -300, x: Math.random() * window.innerWidth }}
            animate={{ y: window.innerHeight + 300 }}
            transition={{ 
              duration: 4 + Math.random() * 4,
              repeat: 1,
              repeatType: "loop",
              ease: "linear",
              delay: i * 0.15
            }}
            className="absolute text-green-400 font-mono text-opacity-80 drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]"
            style={{ fontSize: `${Math.random() * 10 + 12}px` }}
          >
            {[...Array(Math.floor(Math.random() * 20) + 8)].map((_, j) => (
              <motion.div 
                key={j} 
                className="my-1"
                animate={{ 
                  opacity: [0.7, 1, 0.7], 
                  color: [
                    'rgb(74, 222, 128)', 
                    'rgb(134, 239, 172)', 
                    'rgb(74, 222, 128)'
                  ]
                }}
                transition={{ 
                  duration: 1.5 + Math.random() * 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: j * 0.05,
                  ease: "linear" // Use linear instead of spring
                }}
              >
                {Math.random().toString(36).substring(2, 2 + Math.random() * 10)}
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="z-10 bg-black/80 p-8 rounded-xl border border-green-500 shadow-[0_0_30px_rgba(0,255,0,0.5)]"
      >
        <motion.div 
          animate={{ 
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 0.95, 1]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut" // Use easeInOut instead of spring
          }}
        >
          <Terminal className="text-green-400 h-16 w-16 mb-4 mx-auto drop-shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
        >
          <p className="text-green-400 font-mono text-lg mb-2">&gt; 404 Error - Just Kidding!</p>
          <p className="text-green-400 font-mono text-lg">&gt; Website functioning perfectly.</p>
          <motion.div
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="h-4 w-3 bg-green-400 inline-block ml-1"
          />
        </motion.div>
        
        {/* Glowing background for terminal */}
        <motion.div 
          className="absolute inset-0 -z-10 rounded-xl bg-green-500/5"
          animate={{ 
            boxShadow: [
              "0 0 10px rgba(74,222,128,0.3) inset", 
              "0 0 20px rgba(74,222,128,0.5) inset", 
              "0 0 10px rgba(74,222,128,0.3) inset"
            ]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "linear" // Use linear instead of spring
          }}
        />
      </motion.div>
    </>
  );
};

export default WebsiteDesignEasterEgg;
