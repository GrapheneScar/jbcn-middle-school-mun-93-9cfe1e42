
import { CommitteeChair } from "./types";
import { motion } from "framer-motion";

interface ChairCardProps {
  chair: CommitteeChair;
}

const ChairCard = ({ chair }: ChairCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-panel h-full"
    >
      <div className="p-6 flex flex-col items-center text-center">
        <div className="w-32 h-32 rounded-full overflow-hidden mb-4 flex-shrink-0">
          <img 
            src={chair.photo} 
            alt={chair.name} 
            className="w-full h-full object-cover" 
          />
        </div>
        <div>
          <h3 className="text-xl font-bold">{chair.name}</h3>
          <p className="text-mun-purple-light italic mb-4">{chair.title}</p>
          <p className="text-white/80">{chair.bio}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ChairCard;
