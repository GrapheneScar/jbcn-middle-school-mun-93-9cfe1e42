
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

interface CommitteeOverviewProps {
  description: string;
  background?: string;
}

const CommitteeOverview = ({ description, background }: CommitteeOverviewProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="glass-panel p-6"
    >
      <h2 className="text-2xl font-bold mb-4 flex items-center justify-center">
        <Globe className="mr-3 text-mun-purple-light" /> About the Committee
      </h2>
      <p className="text-white/80 mb-4 text-center">{description}</p>
      {background && <p className="text-white/80 text-center">{background}</p>}
    </motion.div>
  );
};

export default CommitteeOverview;
