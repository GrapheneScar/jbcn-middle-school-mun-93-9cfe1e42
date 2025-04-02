
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

const OrganizingEasterEgg = () => {
  const isMobile = useIsMobile();
  
  // Adjust particle count for mobile
  const particleCount = isMobile ? 50 : 100;
  const particleSize = isMobile ? 5 : 10;
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 pointer-events-none z-50"
    >
      {/* Confetti explosion - reduced for mobile */}
      {[...Array(particleCount)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-sm bg-white"
          style={{
            left: '50%',
            top: '50%',
            width: `${Math.random() * particleSize + 3}px`,
            height: `${Math.random() * particleSize + 3}px`,
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
            x: (Math.random() - 0.5) * window.innerWidth * (isMobile ? 0.6 : 0.8), 
            y: (Math.random() - 0.5) * window.innerHeight * (isMobile ? 0.6 : 0.8),
            scale: Math.random() * 2 + 1,
            rotate: Math.random() * 360,
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 4 + Math.random() * 6,
            ease: "easeOut",
            delay: Math.random() * 0.5,
            opacity: { 
              times: [0, 0.5, 1],
              ease: "easeInOut" 
            }
          }}
        />
      ))}
      
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          duration: 0.5,
          delay: 1,
          ease: "easeOut"
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-lg rounded-2xl p-4 md:p-8 text-center max-w-[90vw] md:max-w-md"
      >
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5, ease: "easeOut" }}
          className="text-2xl md:text-4xl font-bold text-white mb-2"
        >
          Event Organized!
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5, ease: "easeOut" }}
          className="text-white/80"
        >
          Successfully planned and coordinated!
        </motion.p>
      </motion.div>

      {/* Popup achievement notifications */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-gradient-to-r from-blue-600/80 to-purple-600/80 text-white px-4 py-2 rounded-lg shadow-lg max-w-[240px]"
          initial={{ 
            opacity: 0, 
            x: isMobile ? 
              (i % 2 === 0 ? -100 : 100) : 
              (i % 3 === 0 ? -200 : (i % 3 === 1 ? 0 : 200)),
            y: 100,
            scale: 0.8
          }}
          animate={{ 
            opacity: [0, 1, 1, 0],
            x: isMobile ? 
              (i % 2 === 0 ? -50 : 50) : 
              (i % 3 === 0 ? -100 : (i % 3 === 1 ? 0 : 100)),
            y: [-20 * (i+1), -50 * (i+1)],
            scale: [0.8, 1, 1, 0.9]
          }}
          transition={{ 
            duration: 3,
            delay: 1.2 + i * 0.8,
            times: [0, 0.2, 0.8, 1],
            ease: "easeInOut"
          }}
          style={{
            bottom: `${10 + (i * 5)}%`,
            left: `${isMobile ? 10 : 30}%`,
            right: `${isMobile ? 10 : 30}%`,
          }}
        >
          <div className="flex items-center">
            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
              <span className="text-blue-900 font-bold">
                {["🏆", "✓", "🎖️", "⭐", "🔔"][i]}
              </span>
            </div>
            <div>
              <p className="text-sm font-bold">Achievement Unlocked!</p>
              <p className="text-xs opacity-90">
                {[
                  "Master Organizer: Conference planned to perfection!",
                  "Logistics Expert: All resources perfectly allocated!",
                  "Deadline Crusher: All tasks completed ahead of schedule!",
                  "Team Builder: Perfect team coordination achieved!",
                  "Communication Wizard: Clear instructions delivered!"
                ][i]}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default OrganizingEasterEgg;
