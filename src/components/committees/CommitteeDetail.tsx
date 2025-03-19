
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { committeesData } from './committees-data';
import { ArrowLeft, Users, FileText } from 'lucide-react';
import { Button } from '../ui/button';
import CommitteeTabs from './CommitteeTabs';
import CommitteeResources from './CommitteeResources';

const CommitteeDetail = () => {
  const { abbr } = useParams<{ abbr: string; }>();
  const navigate = useNavigate();

  // Find the committee by its abbreviation (case insensitive)
  const committee = committeesData.find(c => c.abbr.toLowerCase() === abbr?.toLowerCase());
  
  if (!committee) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Committee not found</h2>
        <Button onClick={() => navigate('/committees')}>
          <ArrowLeft className="mr-2" /> Back to Committees
        </Button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Button 
            variant="outline" 
            className="mb-6" 
            onClick={() => navigate('/committees')}
          >
            <ArrowLeft className="mr-2 w-4 h-4" /> Back to Committees
          </Button>

          <div className="flex flex-col items-center mb-6">
            <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center overflow-hidden mb-6 p-2">
              {committee.logo ? (
                <img 
                  src={committee.logo} 
                  alt={`${committee.abbr} logo`} 
                  className="w-full h-full object-contain" 
                />
              ) : (
                <Users className="w-12 h-12 text-mun-purple-light" />
              )}
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white">
                {committee.name} ({committee.abbr})
              </h1>
              {committee.style && (
                <div className="mt-2">
                  <span className="inline-block px-3 py-1 text-sm bg-mun-purple-light/30 rounded-full">
                    {committee.style}
                  </span>
                </div>
              )}
            </div>
          </div>
          
          {committee.studyGuideUrl && (
            <div className="text-center mt-4 mb-6">
              <a 
                href={committee.studyGuideUrl} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="bg-mun-purple hover:bg-mun-purple-light">
                  <FileText className="mr-2 w-4 h-4" />
                  Access Study Guide
                </Button>
              </a>
              <p className="text-white/70 text-sm italic mt-2">
                NOTE: The Study Guide Password will be sent with your allocation
              </p>
            </div>
          )}
        </motion.div>

        {/* Tabs Section Moved Above Committee Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <CommitteeTabs committee={committee} />
        </motion.div>

        {/* Committee Resources Section */}
        <CommitteeResources studyGuideUrl={committee.studyGuideUrl} />
      </div>
    </div>
  );
};

export default CommitteeDetail;
