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
        duration: 0.5,
        type: "tween"
      }
    }
  };

  // Determine if logo should be on left or right based on index
  const isLogoOnLeft = index % 2 === 0;
  return <motion.div className="glass-panel overflow-hidden" initial="hidden" whileInView="visible" viewport={{
    once: true,
    margin: "-100px"
  }} variants={cardVariants} whileHover={{
    y: -5,
    boxShadow: "0 10px 30px rgba(121,83,169,0.3)",
    transition: {
      duration: 0.3,
      type: "tween"
    }
  }}>
      <div className={`p-8 flex flex-col ${isLogoOnLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6`}>
        {/* Logo Section */}
        <div className="flex-shrink-0 flex items-center justify-center">
          <div className="w-28 h-28 rounded-full bg-white/10 flex items-center justify-center overflow-hidden p-1 mx-auto">
            {committee.logo ? <img src={committee.logo} alt={`${committee.abbr} logo`} className="w-full h-full object-contain" /> : <Users className="w-10 h-10 text-mun-purple-light" />}
          </div>
        </div>
        
        {/* Committee Info Section - Now center aligned */}
        <div className="flex-grow flex flex-col text-center w-full">
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-white">{committee.name}</h3>
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              <span className="inline-block px-3 py-1 text-sm bg-mun-purple/30 rounded-full">
                {committee.abbr}
              </span>
              {committee.style && <span className="inline-block px-3 py-1 text-sm bg-mun-purple-light/30 rounded-full">
                  {committee.style}
                </span>}
            </div>
          </div>
          
          <p className="text-white/80 mb-4 text-center">
            {committee.shortDescription}
          </p>
          
          <div className="mb-4 w-full">
            <h4 className="text-lg font-semibold text-white mb-3 text-center">Agenda Topic:</h4>
            <div className="flex flex-col items-center space-y-2">
              {committee.topics.map((topic, topicIndex) => <div key={topicIndex} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-mun-purple flex-shrink-0"></div>
                  <span className="text-white/90">{topic}</span>
                </div>)}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3 mt-auto">
            <Link to={`/committees/${committee.abbr.toLowerCase()}`}>
              <Button variant="secondary" className="bg-mun-purple/40 hover:bg-mun-purple/60 w-full">
                View Details
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <a href={committee.studyGuideUrl || "#"} target="_blank" rel="noopener noreferrer">
              <Button className="bg-mun-purple hover:bg-mun-purple-light w-full">
                <FileText className="mr-2 w-4 h-4" />
                Study Guide
              </Button>
            </a>
          </div>
          
          <p className="text-white/70 text-sm italic mt-2 text-center">NOTE: Your allocation details will be sent to your registered email</p>
        </div>
      </div>
    </motion.div>;
};
export default CommitteeCard;