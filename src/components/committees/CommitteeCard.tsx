
import { motion } from 'framer-motion';
import { Committee } from './types';

interface CommitteeCardProps {
  committee: Committee;
  index: number;
}

const CommitteeCard = ({ committee, index }: CommitteeCardProps) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      className="glass-panel overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={cardVariants}
      transition={{ delay: index * 0.1 }}
      whileHover={{ 
        y: -5,
        boxShadow: "0 10px 30px rgba(121,83,169,0.3)",
        transition: { duration: 0.3 }
      }}
    >
      <div className="p-8">
        <div className="flex flex-col md:flex-row md:items-center mb-6">
          <h3 className="text-2xl font-bold text-white mr-4">{committee.name}</h3>
          <span className="inline-block px-3 py-1 text-sm bg-mun-purple/30 rounded-full mt-2 md:mt-0">
            {committee.abbr}
          </span>
        </div>
        
        <p className="text-white/80 mb-6">
          {committee.description}
        </p>
        
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Agenda Topics:</h4>
          <ul className="space-y-2">
            {committee.topics.map((topic, topicIndex) => (
              <li key={topicIndex} className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-mun-purple flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                  <span className="text-white text-xs">{topicIndex + 1}</span>
                </div>
                <span className="text-white/90">{topic}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default CommitteeCard;
