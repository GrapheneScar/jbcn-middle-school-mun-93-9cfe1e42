
import { motion } from 'framer-motion';
import ProfileCard from '../ProfileCard';
import { committeeHeadsData } from './committee-heads-data';

const CommitteeHeadsProfiles = () => {
  // Filter data to include only entries that have photos
  const profilesWithPhotos = committeeHeadsData.filter(head => head.photoPath);
  
  return (
    <motion.div
      className="w-full max-w-5xl mx-auto mb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <h2 className="text-3xl font-bold text-white text-center mb-10">
        Meet Our Committee Heads
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {profilesWithPhotos.map((head, index) => (
          <ProfileCard
            key={index}
            name={head.names}
            title={head.role}
            imagePath={head.photoPath || '/placeholder.svg'}
            imageAlt={`${head.names} - ${head.role}`}
            reversed={index % 2 !== 0}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default CommitteeHeadsProfiles;
