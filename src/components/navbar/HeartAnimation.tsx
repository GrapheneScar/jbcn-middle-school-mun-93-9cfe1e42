
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface HeartAnimationProps {
  show: boolean;
}

const HeartAnimation = ({ show }: HeartAnimationProps) => {
  if (!show) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1.2 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none"
    >
      <Heart 
        className="w-32 h-32 text-[#ea384c] filter drop-shadow-lg" 
        fill="#ea384c"
      />
    </motion.div>
  );
};

export default HeartAnimation;
