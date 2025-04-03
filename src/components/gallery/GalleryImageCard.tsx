
import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { GalleryImage } from "./types";

interface GalleryImageCardProps {
  image: GalleryImage;
  index: number;
  onClick: () => void;
}

const GalleryImageCard = ({
  image,
  index,
  onClick
}: GalleryImageCardProps) => {
  return (
    <motion.div 
      key={image.id} 
      whileHover={{
        y: -10,
        transition: {
          duration: 0.3
        }
      }} 
      onClick={onClick} 
      className="cursor-pointer"
    >
      <Card className="overflow-hidden glass-panel border-white/10 h-full">
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={image.src} 
            alt={image.alt} 
            className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110" 
          />
        </div>
      </Card>
    </motion.div>
  );
};

export default GalleryImageCard;
