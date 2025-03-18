
import { motion } from 'framer-motion';
import { BookOpen, Globe2 } from 'lucide-react';

const CommitteeResources = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mb-12"
    >
      <h2 className="text-3xl font-bold text-white text-center mb-8">Committee Resources</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="relative overflow-hidden rounded-lg group cursor-pointer"
        >
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img 
                src="/lovable-uploads/b6105130-2328-4e6a-a6cd-92587d916aee.png" 
                alt="Study Guide" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-70 transition-all duration-300 flex flex-col items-center justify-center">
                <BookOpen className="w-12 h-12 text-white mb-3" />
                <h3 className="text-xl font-bold text-white">Study Guide</h3>
                <p className="text-white/80 text-sm mt-2 max-w-[80%] text-center">
                  Comprehensive guide for understanding the committee topics
                </p>
              </div>
            </div>
          </a>
        </motion.div>
        
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="relative overflow-hidden rounded-lg group cursor-pointer"
        >
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img 
                src="/lovable-uploads/704b39a2-9f51-4a71-9ac7-cb3a6395c577.png" 
                alt="Country Matrix" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-70 transition-all duration-300 flex flex-col items-center justify-center">
                <Globe2 className="w-12 h-12 text-white mb-3" />
                <h3 className="text-xl font-bold text-white">Country Matrix</h3>
                <p className="text-white/80 text-sm mt-2 max-w-[80%] text-center">
                  Overview of country positions on committee topics
                </p>
              </div>
            </div>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CommitteeResources;
