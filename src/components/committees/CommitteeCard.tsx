
import { motion } from 'framer-motion';
import { Committee } from './types';
import { Link } from 'react-router-dom';
import { ArrowRight, Users } from 'lucide-react';
import { Button } from '../ui/button';

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
          <div className="flex items-center">
            <div className="w-12 h-12 mr-4 flex-shrink-0 bg-mun-purple/20 rounded-full flex items-center justify-center overflow-hidden">
              {committee.logo ? (
                <img 
                  src={committee.logo} 
                  alt={`${committee.abbr} logo`} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <Users className="w-6 h-6 text-mun-purple-light" />
              )}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">{committee.name}</h3>
              <span className="inline-block px-3 py-1 text-sm bg-mun-purple/30 rounded-full mt-2">
                {committee.abbr}
              </span>
            </div>
          </div>
        </div>
        
        <p className="text-white/80 mb-6">
          {committee.description}
        </p>
        
        <div className="mb-6">
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

        <div className="flex justify-end">
          <Link to={`/committees/${committee.abbr.toLowerCase()}`}>
            <Button variant="secondary" className="bg-mun-purple/40 hover:bg-mun-purple/60">
              View Committee Details
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CommitteeCard;
