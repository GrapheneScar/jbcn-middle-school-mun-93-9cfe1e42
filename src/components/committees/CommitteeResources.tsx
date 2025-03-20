
import { motion } from 'framer-motion';
import { BookOpen, Globe2 } from 'lucide-react';

interface CommitteeResourcesProps {
  studyGuideUrl?: string;
  countryMatrixUrl?: string;
  committeeName?: string;
}

const CommitteeResources = ({ studyGuideUrl, countryMatrixUrl, committeeName }: CommitteeResourcesProps) => {
  // This will be used to display different resource links for different committees
  const getResourceTitle = () => {
    if (!committeeName) return "Committee Resources";
    return `${committeeName} Resources`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mb-12"
    >
      <h2 className="text-3xl font-bold text-white text-center mb-8">{getResourceTitle()}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="relative overflow-hidden rounded-lg group cursor-pointer"
        >
          <a 
            href={studyGuideUrl || "#"} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={!studyGuideUrl ? "pointer-events-none opacity-70" : "block"}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img 
                src="/lovable-uploads/533cf9ab-aaa1-47a9-8a45-ac085cd3b133.png" 
                alt="Study Guide" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-70 transition-all duration-300 flex flex-col items-center justify-center">
                <BookOpen className="w-12 h-12 text-white mb-3" />
                <h3 className="text-xl font-bold text-white">Study Guide</h3>
                <p className="text-white/80 text-sm mt-2 max-w-[80%] text-center">
                  Comprehensive guide for understanding {committeeName || "committee"} topics
                </p>
                {!studyGuideUrl && <span className="mt-4 text-xs text-white/60">Coming Soon</span>}
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
            href={countryMatrixUrl || "#"} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={!countryMatrixUrl ? "pointer-events-none opacity-70" : "block"}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img 
                src="/lovable-uploads/533cf9ab-aaa1-47a9-8a45-ac085cd3b133.png" 
                alt="Country Matrix" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-70 transition-all duration-300 flex flex-col items-center justify-center">
                <Globe2 className="w-12 h-12 text-white mb-3" />
                <h3 className="text-xl font-bold text-white">Country Matrix</h3>
                <p className="text-white/80 text-sm mt-2 max-w-[80%] text-center">
                  Overview of country positions on {committeeName || "committee"} topics
                </p>
                {!countryMatrixUrl && <span className="mt-4 text-xs text-white/60">Coming Soon</span>}
              </div>
            </div>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CommitteeResources;
