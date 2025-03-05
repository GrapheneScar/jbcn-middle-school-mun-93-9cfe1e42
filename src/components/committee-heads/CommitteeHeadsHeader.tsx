
import { motion } from 'framer-motion';

const CommitteeHeadsHeader = () => {
  return (
    <motion.div 
      className="text-center" 
      initial="hidden" 
      animate="visible" 
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.2 }
        }
      }}
    >
      <motion.h1 
        className="text-5xl md:text-6xl font-bold text-white mb-6" 
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
          }
        }}
      >
        Committee Heads
      </motion.h1>
      
      <motion.div 
        className="w-20 h-1 bg-mun-purple mx-auto mb-8" 
        variants={{
          hidden: { width: 0 },
          visible: {
            width: 80,
            transition: { duration: 0.8, delay: 0.3 }
          }
        }} 
      />
      
      <motion.p 
        className="text-lg text-white/80 max-w-3xl mx-auto mb-12" 
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
          }
        }}
      >
        Meet our dedicated team of committee heads who work tirelessly to make JBCN Parel MUN an enriching experience for all delegates.
      </motion.p>
    </motion.div>
  );
};

export default CommitteeHeadsHeader;
