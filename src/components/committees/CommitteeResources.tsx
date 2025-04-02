
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, FileSpreadsheet, Mail } from "lucide-react";
import { Button } from "../ui/button";

interface CommitteeResourcesProps {
  studyGuideUrl?: string;
  countryMatrixUrl?: string;
  committeeName: string;
  committeeEmail: string;
  committeeAbbr?: string; // Add abbreviation to determine which logo to show
}

const CommitteeResources = ({
  studyGuideUrl,
  countryMatrixUrl,
  committeeName,
  committeeEmail,
  committeeAbbr
}: CommitteeResourcesProps) => {
  const [studyGuideHovered, setStudyGuideHovered] = useState(false);
  const [countryMatrixHovered, setCountryMatrixHovered] = useState(false);

  // Get the appropriate logos based on committee abbreviation
  const getLogos = () => {
    if (!committeeAbbr) return {
      light: '',
      dark: ''
    };
    const abbr = committeeAbbr.toLowerCase();
    return {
      light: `/lovable-uploads/${abbr.toUpperCase()} - light.png`,
      dark: `/lovable-uploads/${abbr.toUpperCase()} - dark.png`,
      bw: `/lovable-uploads/${abbr.toUpperCase()} - BW.png`,
      color: `/lovable-uploads/${abbr.toUpperCase()} - Color.png`
    };
  };
  
  const logos = getLogos();
  
  return <div className="mt-12">
      <h2 className="text-2xl font-bold text-white mb-8 text-center">Committee Resources</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Study Guide Section */}
        {studyGuideUrl && <motion.div className="bg-[#121218] rounded-xl p-8 flex flex-col items-center text-center border border-[#2a2a3a]">
            <h3 className="text-xl font-bold text-white mb-4">Study Guide</h3>
            
            <div className="mb-4 w-32 h-32 flex items-center justify-center" onMouseEnter={() => setStudyGuideHovered(true)} onMouseLeave={() => setStudyGuideHovered(false)}>
              {committeeAbbr && <img src={studyGuideHovered ? logos.bw : logos.color} alt="Committee Logo" className="w-full h-auto transition-opacity duration-300" />}
            </div>
            
            <p className="text-white/70 mb-6">
              Access the official study guide for the {committeeName} committee. This
              document contains essential information about the agenda
              topics, background, and expectations.
            </p>
            
            <a href={studyGuideUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-mun-purple rounded-full text-white font-medium hover:bg-mun-purple-light transition-colors">
              <FileText className="h-4 w-4 mr-2" />
              Download Study Guide
            </a>
            
            <p className="text-white/50 text-sm mt-4 italic">
              NOTE: Your Allocation will be sent to you via your registered Email
            </p>
          </motion.div>}
        
        {/* Country Matrix Section */}
        {countryMatrixUrl && <motion.div className="bg-[#121218] rounded-xl p-8 flex flex-col items-center text-center border border-[#2a2a3a]">
            <h3 className="text-xl font-bold text-white mb-4">Country Matrix</h3>
            
            <div className="mb-4 w-32 h-32 flex items-center justify-center" onMouseEnter={() => setCountryMatrixHovered(true)} onMouseLeave={() => setCountryMatrixHovered(false)}>
              {committeeAbbr && <img src={countryMatrixHovered ? logos.bw : logos.light} alt="Committee Logo" className="w-full h-auto transition-opacity duration-300" />}
            </div>
            
            <p className="text-white/70 mb-6">
              The country matrix provides details about the countries involved in this committee, their positions, and relevant policy information.
            </p>
            
            <a href={countryMatrixUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-mun-purple rounded-full text-white font-medium hover:bg-mun-purple-light transition-colors">
              <FileSpreadsheet className="h-4 w-4 mr-2" />
              Download Country Matrix
            </a>
            
            <p className="text-white/50 text-sm mt-4 italic">
              NOTE: The Country Matrix will be open after registration closes.
            </p>
          </motion.div>}
      </div>
      
      {/* Have Questions Section */}
      {committeeEmail && <div className="mt-6 bg-[#121218] rounded-xl p-8 border border-[#2a2a3a]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Have Questions?</h3>
              <p className="text-white/70">
                Contact the committee directors directly at: <a href={`mailto:${committeeEmail}`} className="text-mun-purple hover:text-mun-purple-light">{committeeEmail}</a>
              </p>
            </div>
            <a href={`mailto:${committeeEmail}`} className="mt-4 md:mt-0 inline-flex items-center justify-center px-6 py-3 border border-mun-purple rounded-full text-white font-medium hover:bg-mun-purple/10 transition-colors">
              <Mail className="h-4 w-4 mr-2" />
              Email Committee
            </a>
          </div>
        </div>}
    </div>;
};

export default CommitteeResources;
