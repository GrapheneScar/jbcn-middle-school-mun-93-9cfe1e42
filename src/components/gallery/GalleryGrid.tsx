import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import GalleryImageCard from './GalleryImageCard';
import { Shuffle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GalleryImage } from './types';
import { useToast } from '@/components/ui/use-toast';
interface GalleryGridProps {
  images: GalleryImage[];
  onImageClick: (id: string) => void;
}
const GalleryGrid = ({
  images,
  onImageClick
}: GalleryGridProps) => {
  const [randomizedImages, setRandomizedImages] = useState<GalleryImage[]>([]);
  const [spotlightImage, setSpotlightImage] = useState<GalleryImage | null>(null);
  const {
    toast
  } = useToast();

  // Randomize images on component mount
  useEffect(() => {
    const shuffleArray = (array: GalleryImage[]) => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };
    setRandomizedImages(shuffleArray([...images]));
  }, [images]);

  // Randomize images when requested
  const handleRandomize = () => {
    const shuffleArray = (array: GalleryImage[]) => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };
    setRandomizedImages(shuffleArray([...randomizedImages]));
    toast({
      title: "Gallery Randomized",
      description: "The gallery images have been shuffled.",
      duration: 3000
    });
  };

  // Random spotlight feature
  const handleRandomSpotlight = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setSpotlightImage(images[randomIndex]);
    toast({
      title: "Random Image Selected",
      description: "Enjoy this random moment from our gallery!",
      duration: 3000
    });
  };
  return <div className="mb-10">
      {/* Actions bar */}
      

      {/* Random spotlight image */}
      {spotlightImage && <motion.div className="w-full h-[60vh] mb-8 rounded-xl overflow-hidden" initial={{
      opacity: 0,
      y: 10
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5
    }}>
          <div className="relative w-full h-full">
            <img src={spotlightImage.src} alt={spotlightImage.alt || "Spotlight image"} className="w-full h-full object-cover" onClick={() => onImageClick(spotlightImage.id)} />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-2xl font-bold text-white">Random Spotlight</h3>
              
            </div>
          </div>
        </motion.div>}

      {/* Main gallery grid */}
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 0.5,
      staggerChildren: 0.1
    }}>
        {randomizedImages.map((image, index) => <GalleryImageCard key={`${image.id}-${index}`} image={image} index={index} onClick={() => onImageClick(image.id)} />)}
      </motion.div>
    </div>;
};
export default GalleryGrid;