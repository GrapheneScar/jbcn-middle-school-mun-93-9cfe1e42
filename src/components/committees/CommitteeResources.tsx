
import { motion } from 'framer-motion';
import { Mail } from "lucide-react";
import ResourceCard from './ResourceCard';

interface CommitteeResourcesProps {
  studyGuideUrl?: string;
  countryMatrixUrl?: string;
  committeeName: string;
  committeeEmail: string;
  committeeAbbr?: string;
}

const CommitteeResources = ({
  studyGuideUrl,
  countryMatrixUrl,
  committeeName,
  committeeEmail,
  committeeAbbr
}: CommitteeResourcesProps) => {
  // Default images if committee abbreviation isn't provided
  const defaultImages = {
    studyGuide: {
      default: '/lovable-uploads/study guide.png',
      hover: '/lovable-uploads/study guide.png'
    },
    countryMatrix: {
      default: '/lovable-uploads/Country Matrix Middle School MUN 2025.png',
      hover: '/lovable-uploads/Country Matrix Middle School MUN 2025.png'
    }
  };
  
  // Get committee-specific images if abbreviation is provided
  const getCommitteeImages = () => {
    if (!committeeAbbr) return defaultImages;
    
    const abbr = committeeAbbr.toUpperCase();
    return {
      studyGuide: {
        default: `/lovable-uploads/${abbr} - Color.png`,
        hover: `/lovable-uploads/${abbr} - BW.png`
      },
      countryMatrix: {
        default: `/lovable-uploads/${abbr} - light.png`,
        hover: `/lovable-uploads/${abbr} - dark.png`
      }
    };
  };
  
  const committeeImages = getCommitteeImages();

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-white mb-8 text-center">Committee Resources</h2>
      
      <div className="grid grid-cols-1 gap-8">
        {/* Study Guide Resource Card */}
        {studyGuideUrl && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ResourceCard
              title="Study Guide"
              description={`Access the official study guide for the ${committeeName} committee. This document contains essential information about the agenda topics, background, and expectations.`}
              images={committeeImages.studyGuide}
              url={studyGuideUrl}
              type="study-guide"
              note="Your Allocation will be sent to you via your registered Email"
            />
          </motion.div>
        )}
        
        {/* Country Matrix Resource Card */}
        {countryMatrixUrl && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ResourceCard
              title="Country Matrix"
              description="The country matrix provides details about the countries involved in this committee, their positions, and relevant policy information."
              images={committeeImages.countryMatrix}
              url={countryMatrixUrl}
              type="country-matrix"
              note="The Country Matrix will be open after registration closes."
            />
          </motion.div>
        )}
      </div>
      
      {/* Have Questions Section */}
      {committeeEmail && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 bg-[#121218] rounded-xl p-8 border border-[#2a2a3a]"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Have Questions?</h3>
              <p className="text-white/70">
                Contact the committee directors directly at: <a href={`mailto:${committeeEmail}`} className="text-mun-purple hover:text-mun-purple-light">{committeeEmail}</a>
              </p>
            </div>
            <a 
              href={`mailto:${committeeEmail}`}
              className="mt-4 md:mt-0 inline-flex items-center justify-center px-6 py-3 border border-mun-purple rounded-full text-white font-medium hover:bg-mun-purple/10 transition-colors"
            >
              <Mail className="h-4 w-4 mr-2" />
              Email Committee
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default CommitteeResources;
