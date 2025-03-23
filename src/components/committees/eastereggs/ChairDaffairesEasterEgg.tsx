
import { motion } from 'framer-motion';

const ChairDaffairesEasterEgg = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-40 flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full">
        {/* Diplomatic flying papers */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`,
              opacity: 0,
              rotate: Math.random() * 180 - 90
            }}
            animate={{ 
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: [0, 0.7, 0],
              rotate: Math.random() * 360 - 180
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              repeatType: "loop",
              delay: Math.random() * 2
            }}
          >
            <div className="w-12 h-16 bg-white opacity-60 shadow-lg transform rotate-12">
              <div className="w-full h-1 bg-mun-purple mt-2"></div>
              <div className="w-full h-1 bg-mun-purple mt-2"></div>
              <div className="w-full h-1 bg-mun-purple mt-2"></div>
            </div>
          </motion.div>
        ))}

        {/* Central diplomatic logo */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1.5, 1],
            opacity: [0, 1, 0.8, 0],
            rotate: [0, 0, 360]
          }}
          transition={{
            duration: 5,
            times: [0, 0.3, 0.6, 1],
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          <div className="w-32 h-32 rounded-full bg-mun-purple/30 flex items-center justify-center backdrop-blur-lg">
            <div className="w-24 h-24 rounded-full border-4 border-white/40 flex items-center justify-center">
              <div className="text-white text-5xl font-bold">CD</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ChairDaffairesEasterEgg;
