
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { FileText, FileSpreadsheet, Mail } from "lucide-react";
import { motion } from 'framer-motion';

interface CommitteeResourcesProps {
  studyGuideUrl?: string;
  countryMatrixUrl?: string;
  committeeName: string;
  committeeEmail: string;
}

const CommitteeResources = ({
  studyGuideUrl,
  countryMatrixUrl,
  committeeName,
  committeeEmail
}: CommitteeResourcesProps) => {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  // Study guide images
  const studyGuideImage = "/lovable-uploads/dfc3a29f-1a33-4772-b672-9c86967073d2.png"; // Purple version
  const studyGuideImageBW = "/lovable-uploads/d40cb1bd-6eef-4b7d-b927-5c8bd19bc3fd.png"; // Black and white version
  
  return (
    <Card className="mt-12 bg-black/30 backdrop-blur-md border-white/10">
      <CardContent className="py-6">
        <h3 className="text-xl font-bold text-white mb-4">Committee Resources</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {/* Study Guide Resource */}
          {studyGuideUrl && (
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="relative group"
            >
              <a 
                href={studyGuideUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative overflow-hidden rounded-xl transition-all duration-300 shadow-md hover:shadow-xl"
                onMouseEnter={() => setHoveredImage('studyGuide')}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={hoveredImage === 'studyGuide' ? studyGuideImage : studyGuideImageBW}
                    alt={`${committeeName} Study Guide`}
                    className="w-full h-full object-cover transition-transform duration-500 transform scale-110 group-hover:scale-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <div className="bg-mun-purple/70 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                      <FileText className="h-6 w-6 text-white mx-auto mb-2" />
                      <h4 className="text-white font-semibold text-lg">Study Guide</h4>
                      <p className="text-white/80 text-sm mt-1">Access committee materials</p>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          )}
          
          {/* Country Matrix Resource */}
          {countryMatrixUrl && (
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <a 
                href={countryMatrixUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative overflow-hidden rounded-xl transition-all duration-300 shadow-md hover:shadow-xl"
              >
                <div className="aspect-[3/4] overflow-hidden bg-black/50">
                  <img 
                    src="/lovable-uploads/Country Matrix Middle School MUN 2025.png"
                    alt={`${committeeName} Country Matrix`}
                    className="w-full h-full object-cover opacity-70 transition-transform duration-500 transform scale-110 hover:scale-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <div className="bg-mun-purple/70 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                      <FileSpreadsheet className="h-6 w-6 text-white mx-auto mb-2" />
                      <h4 className="text-white font-semibold text-lg">Country Matrix</h4>
                      <p className="text-white/80 text-sm mt-1">View country allocations</p>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          )}
          
          {/* Email Contact */}
          {committeeEmail && (
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <a 
                href={`mailto:${committeeEmail}`}
                className="block relative overflow-hidden rounded-xl transition-all duration-300 shadow-md hover:shadow-xl"
              >
                <div className="aspect-[3/4] overflow-hidden bg-gradient-to-br from-mun-purple/30 to-black/50">
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center p-6">
                      <div className="bg-mun-purple/70 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                        <Mail className="h-12 w-12 text-white mx-auto mb-4" />
                        <h4 className="text-white font-semibold text-xl mb-2">Contact Committee</h4>
                        <p className="text-white/80 text-sm break-all">{committeeEmail}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CommitteeResources;
