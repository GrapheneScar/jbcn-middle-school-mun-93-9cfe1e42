
import { motion } from 'framer-motion';

const OrganizingEasterEgg = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 pointer-events-none z-50"
    >
      {/* Confetti explosion */}
      {[...Array(100)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-sm bg-white"
          style={{
            left: '50%',
            top: '50%',
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
            backgroundColor: [
              '#ff4136', '#0074d9', '#2ecc40', '#ffdc00', '#ff851b', '#f012be', '#7fdbff', '#001f3f'
            ][Math.floor(Math.random() * 8)]
          }}
          initial={{ 
            x: 0, 
            y: 0,
            scale: 0,
            rotate: 0
          }}
          animate={{ 
            x: (Math.random() - 0.5) * window.innerWidth * 0.8, 
            y: (Math.random() - 0.5) * window.innerHeight * 0.8,
            scale: Math.random() * 2 + 1,
            rotate: Math.random() * 360,
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 2 + Math.random() * 3,
            ease: ["circOut"],
            delay: Math.random() * 0.5
          }}
        />
      ))}
      
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.2, 1], opacity: 1 }}
        transition={{ type: "spring", damping: 12, delay: 1 }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center"
      >
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="text-4xl font-bold text-white mb-2"
        >
          Event Organized!
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-white/80"
        >
          Successfully planned and coordinated!
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default OrganizingEasterEgg;
