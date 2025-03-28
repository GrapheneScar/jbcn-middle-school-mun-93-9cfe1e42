
import { useState } from 'react';
import { motion } from 'framer-motion';
import { File, Download, AlertCircle, BookOpen, Globe } from 'lucide-react';
import { Button } from '../ui/button';

interface CommitteeResourcesProps {
  studyGuideUrl?: string;
  countryMatrixUrl?: string;
  committeeName?: string;
  committeeEmail?: string;
}

const CommitteeResources = ({
  studyGuideUrl,
  countryMatrixUrl,
  committeeName,
  committeeEmail
}: CommitteeResourcesProps) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <section className="mb-16">
      <h1 className="text-3xl font-bold text-white mb-12 text-center mx-auto">Committee Resources</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Study Guide Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative glass-panel rounded-2xl overflow-hidden border border-mun-purple/30 h-full"
          onMouseEnter={() => setHoveredItem('study-guide')}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div className="relative h-64 overflow-hidden">
            <img 
              src="/lovable-uploads/study guide.png" 
              alt="Study Guide" 
              className={`w-full h-full object-cover transition-all duration-700 ${hoveredItem === 'study-guide' ? 'saturate-100' : 'saturate-0'}`}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
            
            {/* Icon Overlay */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-black/50 rounded-full p-6 backdrop-blur-md border border-mun-purple/30">
                <BookOpen className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
          
          <div className="p-6 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Study Guide</h3>
            <p className="text-white/70 mb-6 max-w-md mx-auto">
              Comprehensive guide for understanding the committee topics and preparing effectively.
            </p>
            
            <div className="flex flex-col space-y-4">
              {studyGuideUrl ? (
                <a href={studyGuideUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-mun-purple hover:bg-mun-purple-light w-full transition-all duration-300">
                    <Download className="mr-2 h-4 w-4" />
                    Download Study Guide
                  </Button>
                </a>
              ) : (
                <Button disabled className="bg-mun-purple/50 cursor-not-allowed w-full">
                  <File className="mr-2 h-4 w-4" />
                  Study Guide Coming Soon
                </Button>
              )}
              
              <div className="bg-black/30 p-3 rounded-lg border border-mun-purple/20">
                <div className="flex items-center text-white/80 text-sm">
                  <AlertCircle className="w-4 h-4 mr-2 text-mun-purple-light flex-shrink-0" />
                  <span>
                    Your allocation will be emailed to you via{" "}
                    <span className="text-mun-purple-light font-medium">
                      {committeeEmail || "your registered email"}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Country Matrix Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative glass-panel rounded-2xl overflow-hidden border border-mun-purple/30 h-full"
          onMouseEnter={() => setHoveredItem('country-matrix')}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div className="relative h-64 overflow-hidden">
            <img 
              src="/lovable-uploads/Country Matrix Middle School MUN 2025.png" 
              alt="Country Matrix" 
              className={`w-full h-full object-cover transition-all duration-700 ${hoveredItem === 'country-matrix' ? 'saturate-100' : 'saturate-0'}`}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
            
            {/* Icon Overlay */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-black/50 rounded-full p-6 backdrop-blur-md border border-mun-purple/30">
                <Globe className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
          
          <div className="p-6 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Country Matrix</h3>
            <p className="text-white/70 mb-6 max-w-md mx-auto">
              Overview of country positions on committee topics and delegate allocations.
            </p>
            
            <div className="flex flex-col space-y-4">
              {countryMatrixUrl ? (
                <a href={countryMatrixUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-mun-purple hover:bg-mun-purple-light w-full transition-all duration-300">
                    <Download className="mr-2 h-4 w-4" />
                    Download Country Matrix
                  </Button>
                </a>
              ) : (
                <Button disabled className="bg-mun-purple/50 cursor-not-allowed w-full">
                  <File className="mr-2 h-4 w-4" />
                  Country Matrix Coming Soon
                </Button>
              )}
              
              <div className="bg-black/30 p-3 rounded-lg border border-mun-purple/20">
                <div className="flex items-center text-white/80 text-sm">
                  <AlertCircle className="w-4 h-4 mr-2 text-mun-purple-light flex-shrink-0" />
                  <span>
                    Check back regularly for updates on committee resources.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommitteeResources;
