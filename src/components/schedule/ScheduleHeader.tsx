
import { motion } from 'framer-motion';

const ScheduleHeader = () => {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      className="text-center mb-12"
      variants={itemVariants}
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Conference Schedule</h1>
      <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
        Plan your Model UN experience with our detailed event schedule
      </p>
    </motion.div>
  );
};

export default ScheduleHeader;
