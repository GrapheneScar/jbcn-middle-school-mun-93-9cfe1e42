
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const TeamPhoto = () => (
  <motion.div 
    className="w-full max-w-3xl mx-auto mb-16 overflow-hidden glass-panel p-4 text-center" 
    initial={{ opacity: 0, y: 20 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.6, delay: 0.3 }}
  >
    <h2 className="text-2xl font-bold text-center mb-6 text-white">The Team</h2>
    <div className="relative w-full aspect-video bg-black/30 rounded-xl overflow-hidden mx-auto">
      <div className="absolute inset-0 flex items-center justify-center text-white/50">
        <Users size={64} />
        <span className="ml-2 text-lg">Team Photo</span>
      </div>
    </div>
  </motion.div>
);

export default TeamPhoto;
