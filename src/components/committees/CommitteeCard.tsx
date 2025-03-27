
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

  return (
    <motion.div 
      className="glass-panel overflow-hidden" 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={cardVariants}
      whileHover={{
        y: -5,
        boxShadow: "0 10px 30px rgba(121,83,169,0.3)",
        transition: { duration: 0.3, type: "tween" }
      }}
    >
      <div className={`p-8 flex flex-col ${isLogoOnLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-stretch gap-6`}>
        {/* Logo Section */}
        <div className="flex-shrink-0 flex items-center justify-center">
          <div className="w-28 h-28 rounded-full bg-white/10 flex items-center justify-center overflow-hidden p-1 mx-auto">
            {committee.logo ? 
              <img src={committee.logo} alt={`${committee.abbr} logo`} className="w-full h-full object-contain" /> :
              <Users className="w-10 h-10 text-mun-purple-light" />
            }
          </div>
        </div>
        
        {/* Committee Info Section */}
        <div className={`flex-grow flex flex-col ${isLogoOnLeft ? 'md:text-left' : 'md:text-right'} text-center`}>
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-white">{committee.name}</h3>
            <div className={`flex flex-wrap ${isLogoOnLeft ? 'justify-center md:justify-start' : 'justify-center md:justify-end'} gap-2 mt-2`}>
              <span className="inline-block px-3 py-1 text-sm bg-mun-purple/30 rounded-full">
                {committee.abbr}
              </span>
              {committee.style && (
                <span className="inline-block px-3 py-1 text-sm bg-mun-purple-light/30 rounded-full">
                  {committee.style}
                </span>
              )}
            </div>
          </div>
          
          <p className={`text-white/80 mb-4 ${isLogoOnLeft ? 'md:text-left' : 'md:text-right'} text-center`}>
            {committee.shortDescription}
          </p>
          
          <div className="mb-4">
            <h4 className={`text-lg font-semibold text-white mb-3 ${isLogoOnLeft ? 'md:text-left' : 'md:text-right'} text-center`}>Agenda Topic:</h4>
            <div className={`flex flex-col space-y-2 ${isLogoOnLeft ? '' : 'items-end'}`}>
              {committee.topics.map((topic, topicIndex) => (
                <div key={topicIndex} className={`flex items-start ${isLogoOnLeft ? '' : 'flex-row-reverse'}`}>
                  <div className={`w-3 h-3 rounded-full bg-mun-purple flex-shrink-0 mt-1.5 ${isLogoOnLeft ? 'mr-2' : 'ml-2'}`}></div>
                  <span className="text-white/90">{topic}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`flex flex-col sm:flex-row ${isLogoOnLeft ? 'justify-center md:justify-start' : 'justify-center md:justify-end'} gap-3 mt-auto`}>
            <a 
              href={committee.studyGuideUrl || "#"} 
              target="_blank"
              rel="noopener noreferrer"
              className={!committee.studyGuideUrl ? "pointer-events-none opacity-50" : ""}
            >
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
          
          <p className={`text-white/70 text-sm italic mt-2 ${isLogoOnLeft ? 'md:text-left' : 'md:text-right'} text-center`}>
            NOTE: The Study Guide password will be sent with your allocation
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default CommitteeCard;
