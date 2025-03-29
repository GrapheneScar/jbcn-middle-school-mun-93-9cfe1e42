
import { motion } from 'framer-motion';
import { Chair } from './types';
import { useState } from 'react';
import { FileText, Eye } from 'lucide-react';
import { Button } from '../ui/button';
import ChairGalleryModal from './ChairGalleryModal';

interface ChairCardProps {
  chair: Chair;
}

const ChairCard = ({ chair }: ChairCardProps) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {/* Semi-transparent curved corner background */}
      <div className="absolute -inset-2 bg-mun-purple/10 rounded-3xl blur-sm -z-10"></div>

      <div className="glass-panel p-6 rounded-xl overflow-hidden border border-mun-purple/20">
        <div className="flex flex-col items-center md:flex-row md:items-start gap-6">
          <div className="w-36 h-36 rounded-full overflow-hidden flex-shrink-0 border-2 border-mun-purple/30 bg-mun-purple/20">
            {chair.image ? (
              <img 
                src={chair.image} 
                alt={`${chair.name} profile`} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  // If image fails to load, fall back to placeholder
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "/placeholder.svg";
                }} 
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-mun-purple/20">
                <span className="text-3xl font-bold text-mun-purple-light">
                  {chair.name.charAt(0)}
                </span>
              </div>
            )}
          </div>
          
          <div className="flex-grow text-center md:text-left">
            <h3 className="text-xl font-bold text-white">{chair.name}</h3>
            <p className="text-mun-purple-light mb-2">
              {chair.title || 'Committee Director'}
            </p>
            
            <div className="text-white/70 mb-4 text-sm">
              {chair.bio && <p>{chair.bio}</p>}
              {chair.school && <p className="mt-1">School: {chair.school}</p>}
              {chair.experience && <p className="mt-1">Experience: {chair.experience}</p>}
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
              {chair.linkedin && (
                <a href={chair.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm">
                  <Button variant="outline" size="sm" className="bg-white/5 hover:bg-white/10 border-mun-purple/30">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    LinkedIn
                  </Button>
                </a>
              )}
              <Button 
                variant="outline" 
                size="sm" 
                className="bg-mun-purple/20 hover:bg-mun-purple/40 border-mun-purple/30"
                onClick={() => setIsGalleryOpen(true)}
              >
                <Eye className="w-4 h-4 mr-2" />
                View Journey
              </Button>
              
              {chair.cv && (
                <a href={chair.cv} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="bg-white/5 hover:bg-white/10 border-mun-purple/30">
                    <FileText className="w-4 h-4 mr-2" />
                    Resume
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <ChairGalleryModal 
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        chairName={chair.name}
      />
    </motion.div>
  );
};

export default ChairCard;
