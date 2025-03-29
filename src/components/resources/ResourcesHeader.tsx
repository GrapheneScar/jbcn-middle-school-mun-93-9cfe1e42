
import { motion } from 'framer-motion';

const ResourcesHeader = () => {
  return (
    <motion.div 
      className="text-center mb-12" 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-5xl font-bold text-white mb-6">Delegate Resources</h1>
      <div className="w-20 h-1 bg-mun-purple mx-auto mb-8"></div>
      <p className="text-lg text-white/80 max-w-3xl mx-auto">
        Access our comprehensive collection of MUN guides, examples, and resources designed to help delegates prepare effectively for JBCN Parel MUN.
      </p>
    </motion.div>
  );
};

export default ResourcesHeader;
