
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { CommitteeChair } from './types';

interface CommitteeChairsProps {
  chairs: CommitteeChair[];
}

const CommitteeChairs = ({ chairs }: CommitteeChairsProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold mb-4 flex items-center justify-center">
        <Users className="mr-3 text-mun-purple-light" /> Committee Leadership
      </h2>
      
      <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
        {chairs.map((chair, index) => (
          <motion.div 
            key={chair.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="glass-panel h-full">
              <div className="p-6 flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 flex-shrink-0">
                  <img 
                    src={chair.photo} 
                    alt={chair.name} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{chair.name}</h3>
                  <p className="text-mun-purple-light italic mb-4">{chair.title}</p>
                  <p className="text-white/80">{chair.bio}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CommitteeChairs;
