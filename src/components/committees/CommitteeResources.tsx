
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
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

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
        {studyGuideUrl && <motion.div 
            className="bg-[#121218] rounded-xl overflow-hidden border border-[#2a2a3a] hover:shadow-[0_0_20px_rgba(121,83,169,0.3)] transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            onMouseEnter={() => setHoveredCard('study-guide')} 
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="p-8 flex flex-col items-center text-center h-full">
              <h3 className="text-xl font-bold text-white mb-4">Study Guide</h3>
              
              <div className="mb-4 relative w-32 h-32 flex items-center justify-center overflow-hidden">
                {committeeAbbr && (
                  <div className="transition-all duration-300">
                    <img 
                      src={hoveredCard === 'study-guide' ? logos.BW : logos.color} 
                      alt="Committee Logo" 
                      className="w-full h-full object-contain transition-opacity duration-300"
                      width="1447"
                      height="2048"
                    />
                  </div>
                )}
              </div>
              
              <div className="h-24 overflow-y-auto mb-6 px-2">
                <p className="text-white/70">
                  Access the official study guide for the {committeeName} committee. This
                  document contains essential information about the agenda
                  topics, background, and expectations.
                </p>
              </div>
              
              <a href={studyGuideUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-mun-purple rounded-full text-white font-medium hover:bg-mun-purple-light transition-colors">
                <FileText className="h-4 w-4 mr-2" />
                Download Study Guide
              </a>
              
              <p className="text-white/50 text-sm mt-4 italic">
                NOTE: Your Allocation will be sent to you via your registered Email
              </p>
            </div>
          </motion.div>}
        
        {/* Country Matrix Section */}
        {countryMatrixUrl && <motion.div 
            className="bg-[#121218] rounded-xl overflow-hidden border border-[#2a2a3a] hover:shadow-[0_0_20px_rgba(121,83,169,0.3)] transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            onMouseEnter={() => setHoveredCard('country-matrix')} 
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="p-8 flex flex-col items-center text-center h-full">
              <h3 className="text-xl font-bold text-white mb-4">Country Matrix</h3>
              
              <div className="mb-4 relative w-32 h-32 flex items-center justify-center overflow-hidden">
                {committeeAbbr && (
                  <div className="transition-all duration-300">
                    <img 
                      src={hoveredCard === 'country-matrix' ? logos.light : logos.dark} 
                      alt="Committee Logo" 
                      className="w-full h-full object-contain transition-opacity duration-300"
                      width="1447"
                      height="2048"
                    />
                  </div>
                )}
              </div>
              
              <div className="h-24 overflow-y-auto mb-6 px-2">
                <p className="text-white/70">
                  The country matrix provides details about the countries involved in this committee, their positions, and relevant policy information.
                </p>
              </div>
              
              <a href={countryMatrixUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-mun-purple rounded-full text-white font-medium hover:bg-mun-purple-light transition-colors">
                <FileSpreadsheet className="h-4 w-4 mr-2" />
                Download Country Matrix
              </a>
              
              <p className="text-white/50 text-sm mt-4 italic">
                NOTE: The Country Matrix will be open after registration closes.
              </p>
            </div>
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
