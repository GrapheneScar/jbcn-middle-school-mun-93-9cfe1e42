import { motion } from 'framer-motion';
import { Committee } from './types';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, FileText } from 'lucide-react';
import { Button } from '../ui/button';
interface CommitteeCardProps {
  committee: Committee;
  index: number;
}
const CommitteeCard = ({
  committee,
  index
}: CommitteeCardProps) => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  return <motion.div className="glass-panel overflow-hidden text-center" initial="hidden" whileInView="visible" viewport={{
    once: true,
    margin: "-100px"
  }} variants={cardVariants} transition={{
    delay: index * 0.1
  }} whileHover={{
    y: -5,
    boxShadow: "0 10px 30px rgba(121,83,169,0.3)",
    transition: {
      duration: 0.3
    }
  }}>
      <div className="p-8">
        <div className="flex flex-col md:flex-row items-center justify-center mb-6">
          <div className="w-20 h-20 mb-4 md:mb-0 md:mr-4 flex-shrink-0 bg-white/10 rounded-full flex items-center justify-center overflow-hidden p-1">
            {committee.logo ? <img src={committee.logo} alt={`${committee.abbr} logo`} className="w-full h-full object-contain" /> : <Users className="w-6 h-6 text-mun-purple-light" />}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">{committee.name}</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-2">
              <span className="inline-block px-3 py-1 text-sm bg-mun-purple/30 rounded-full">
                {committee.abbr}
              </span>
              {committee.style && <span className="inline-block px-3 py-1 text-sm bg-mun-purple-light/30 rounded-full">
                  {committee.style}
                </span>}
            </div>
          </div>
        </div>
        
        <p className="text-white/80 mb-6 text-center">
          {committee.description}
        </p>

        {committee.shortDescription && <div className="mb-6 p-4 bg-black/20 rounded-lg py-0">
            <p className="text-white/80 text-center text-sm">
              {committee.shortDescription}
            </p>
          </div>}
        
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-white mb-3 text-center">Agenda Topic:</h4>
          <div className="space-y-2">
            {committee.topics.map((topic, topicIndex) => <div key={topicIndex} className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-mun-purple flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                  
                </div>
                <span className="text-white/90 text-center px-0 py-0 mx-0">{topic}</span>
              </div>)}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-3 mb-4">
          <a href={committee.studyGuideUrl || "#"} target="_blank" rel="noopener noreferrer" className={!committee.studyGuideUrl ? "pointer-events-none opacity-50" : ""}>
            <Button className="bg-mun-purple hover:bg-mun-purple-light w-full">
              <FileText className="mr-2 w-4 h-4" />
              Access Study Guide
            </Button>
          </a>
          <Link to={`/committees/${committee.abbr.toLowerCase()}`}>
            <Button variant="secondary" className="bg-mun-purple/40 hover:bg-mun-purple/60 w-full">
              View Details
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
        
        <p className="text-white/70 text-sm italic">
          NOTE: The Study Guide password will be sent with your allocation
        </p>
      </div>
    </motion.div>;
};
export default CommitteeCard;