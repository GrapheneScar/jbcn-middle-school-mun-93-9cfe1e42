
import { useState } from 'react';
import { motion } from 'framer-motion';
import { File, Lock, Download, AlertCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { ComingSoonOverlay } from '../ui/coming-soon-overlay';

interface CommitteeResourcesProps {
  studyGuideUrl?: string;
  countryMatrixUrl?: string;
}

const CommitteeResources = ({ studyGuideUrl, countryMatrixUrl }: CommitteeResourcesProps) => {
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <section className="mb-16">
      <h3 className="text-2xl font-bold text-white mb-6 text-center">Committee Resources</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Study Guide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative glass-panel p-6 text-center hover:shadow-[0_0_20px_rgba(121,83,169,0.3)] transition-all duration-300"
        >
          <div className="bg-mun-purple/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <File className="text-mun-purple-light w-8 h-8" />
          </div>
          
          <h4 className="text-xl font-bold text-white mb-2">Study Guide</h4>
          <p className="text-white/70 mb-6">Comprehensive guide to help delegates understand the committee topic and prepare effectively.</p>
          
          {studyGuideUrl ? (
            <div>
              <Button 
                className="bg-mun-purple hover:bg-mun-purple-light transition-colors w-full mb-3"
                onClick={() => window.open(studyGuideUrl, '_blank')}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Study Guide
              </Button>
              
              <div className="text-white/60 text-sm flex items-center justify-center mt-3">
                <AlertCircle className="w-4 h-4 mr-1 text-mun-purple-light" />
                <span>NOTE: Your allocation will be emailed to you via your registered email.</span>
              </div>
            </div>
          ) : (
            <>
              <Button 
                className="bg-mun-purple hover:bg-mun-purple-light transition-colors w-full mb-3 relative overflow-hidden"
                disabled
              >
                <Lock className="mr-2 h-4 w-4" />
                Study Guide Coming Soon
              </Button>
              <ComingSoonOverlay type="button" message="Study Guide Coming Soon" />
            </>
          )}
        </motion.div>
        
        {/* Country Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative glass-panel p-6 text-center hover:shadow-[0_0_20px_rgba(121,83,169,0.3)] transition-all duration-300"
        >
          <div className="bg-mun-purple/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mun-purple-light w-8 h-8">
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M3 9h18" />
              <path d="M3 15h18" />
              <path d="M9 3v18" />
              <path d="M15 3v18" />
            </svg>
          </div>
          
          <h4 className="text-xl font-bold text-white mb-2">Country Matrix</h4>
          <p className="text-white/70 mb-6">Complete list of countries and their allocations for this committee session.</p>
          
          {countryMatrixUrl ? (
            <Button 
              className="bg-mun-purple hover:bg-mun-purple-light transition-colors w-full"
              onClick={() => window.open(countryMatrixUrl, '_blank')}
            >
              <Download className="mr-2 h-4 w-4" />
              Download Country Matrix
            </Button>
          ) : (
            <>
              <Button 
                className="bg-mun-purple hover:bg-mun-purple-light transition-colors w-full relative overflow-hidden"
                disabled
              >
                Country Matrix Coming Soon
              </Button>
              <ComingSoonOverlay type="button" message="Country Matrix Coming Soon" />
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CommitteeResources;
