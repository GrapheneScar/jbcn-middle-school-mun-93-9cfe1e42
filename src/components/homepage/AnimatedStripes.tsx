
import { motion } from 'framer-motion';

const AnimatedStripes = () => {
  const stripeVariants = {
    hidden: {
      scaleY: 0
    },
    visible: (index: number) => ({
      scaleY: 1,
      transition: {
        duration: 1,
        delay: 0.1 * index,
        ease: [0.215, 0.61, 0.355, 1]
      }
    })
  };

  return (
    <div className="absolute inset-0 flex justify-between z-0">
      {[...Array(10)].map((_, index) => (
        <motion.div 
          key={index} 
          className="h-full w-[9%] bg-mun-purple/30 origin-bottom" 
          custom={index} 
          initial="hidden" 
          animate="visible" 
          variants={stripeVariants} 
        />
      ))}
    </div>
  );
};

export default AnimatedStripes;
