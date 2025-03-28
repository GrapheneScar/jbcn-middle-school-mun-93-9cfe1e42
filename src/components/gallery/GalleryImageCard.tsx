
import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { GalleryImage } from "./types";

interface GalleryImageCardProps {
  image: GalleryImage;
  onClick: (image: GalleryImage) => void;
}

const GalleryImageCard = ({ image, onClick }: GalleryImageCardProps) => {
  return (
    <motion.div 
      key={image.id}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      onClick={() => onClick(image)}
      className="cursor-pointer"
    >
      <Card className="overflow-hidden glass-panel border-white/10 h-full">
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={image.src} 
            alt={image.alt} 
            className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-4 w-full">
              <h3 className="text-xl font-bold text-white">{image.title}</h3>
              <p className="text-white/70 text-sm">{image.category}</p>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default GalleryImageCard;
