
import { motion } from 'framer-motion';

const NewsletterHeader = () => {
  return (
    <motion.div 
      className="text-center mb-16" 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-5xl font-bold text-white mb-6">Newsletters</h1>
      <div className="w-20 h-1 bg-mun-purple mx-auto mb-8"></div>
      <p className="text-lg text-white/80 max-w-3xl mx-auto">
        Stay informed with the latest updates, highlights, and developments from JBCN MUN through our official conference newsletters.
      </p>
    </motion.div>
  );
};

export default NewsletterHeader;
