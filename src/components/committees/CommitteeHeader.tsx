
import { motion } from 'framer-motion';

export interface CommitteeHeaderProps {
  title: string;
  description: string;
}

const CommitteeHeader = ({ title, description }: CommitteeHeaderProps) => {
  return (
    <motion.div 
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-5xl font-bold mb-6 text-white">{title}</h1>
      <p className="text-lg text-white/80 max-w-3xl mx-auto">
        {description}
      </p>
    </motion.div>
  );
};

export default CommitteeHeader;
