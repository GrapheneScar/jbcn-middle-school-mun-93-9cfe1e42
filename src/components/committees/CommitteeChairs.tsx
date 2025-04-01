
import { useState } from 'react';
import { motion } from 'framer-motion';
import { CommitteeChair } from './types';

interface CommitteeChairsProps {
  chairs: CommitteeChair[];
}

const CommitteeChairs = ({ chairs }: CommitteeChairsProps) => {
  const [expandedBio, setExpandedBio] = useState<string | null>(null);
  
  return (
    <div>
      <h3 className="text-2xl font-bold text-white mb-8 text-center">Committee Directors</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {chairs.map((chair, index) => (
          <motion.div
            key={chair.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div 
              className="relative w-48 h-48 rounded-xl overflow-hidden mb-4 shadow-lg"
            >
              <img 
                src={chair.photo || chair.image || "/placeholder.svg"} 
                alt={chair.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
            </div>
            
            <h4 className="text-xl font-bold text-white mb-1">{chair.name}</h4>
            <p className="text-mun-purple-light mb-3">{chair.title}</p>
            
            <div className="relative bg-black/30 p-4 rounded-lg">
              <p className="text-white/80 text-sm">
                {expandedBio === chair.name 
                  ? chair.bio 
                  : chair.bio.length > 150 
                    ? `${chair.bio.substring(0, 150)}...` 
                    : chair.bio
                }
              </p>
              
              {chair.bio.length > 150 && (
                <button
                  onClick={() => setExpandedBio(expandedBio === chair.name ? null : chair.name)}
                  className="mt-2 text-xs text-mun-purple-light hover:text-mun-purple transition-colors"
                >
                  {expandedBio === chair.name ? "Read less" : "Read more"}
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CommitteeChairs;
