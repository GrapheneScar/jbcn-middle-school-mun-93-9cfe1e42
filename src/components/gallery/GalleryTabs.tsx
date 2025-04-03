
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GalleryImageCard from './GalleryImageCard';
import { GalleryImage } from './types';
import GalleryLightbox from './GalleryLightbox';
import { Shuffle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

interface GalleryTabsProps {
  images: GalleryImage[];
  onSpotlight?: (image: GalleryImage) => void;
}

const GalleryTabs = ({ images, onSpotlight }: GalleryTabsProps) => {
  const [selectedImageId, setSelectedImageId] = useState<string | null>(null);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>(images);
  const { toast } = useToast();
  
  const openLightbox = (imageId: string) => {
    setSelectedImageId(imageId);
    const image = images.find(img => img.id === imageId);
    if (image && onSpotlight) {
      onSpotlight(image);
    }
  };
  
  const closeLightbox = () => {
    setSelectedImageId(null);
  };

  // Function to shuffle gallery images
  const handleShuffleGallery = () => {
    const shuffled = [...galleryImages].sort(() => Math.random() - 0.5);
    setGalleryImages(shuffled);
    
    toast({
      title: "Gallery Shuffled",
      description: "The images have been randomly rearranged.",
      duration: 3000,
    });
  };

  // Function to select a random spotlight image
  const handleRandomSpotlight = () => {
    if (images.length === 0) return;
    
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    
    if (randomImage && onSpotlight) {
      onSpotlight(randomImage);
      setSelectedImageId(randomImage.id);
      
      toast({
        title: "Random Spotlight",
        description: "Enjoy this randomly selected image!",
        duration: 3000,
      });
    }
  };
  
  return (
    <div className="w-full">
      {/* Gallery Action Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <Button
          variant="outline" 
          className="bg-black/30 hover:bg-mun-purple/20 border border-mun-purple/30 text-white"
          onClick={handleShuffleGallery}
        >
          <Shuffle className="w-4 h-4 mr-2" />
          Shuffle Gallery
        </Button>
        
        <Button
          variant="outline"
          className="bg-black/30 hover:bg-mun-purple/20 border border-mun-purple/30 text-white"
          onClick={handleRandomSpotlight}
        >
          <Sparkles className="w-4 h-4 mr-2" />
          Random Spotlight
        </Button>
      </div>
      
      <AnimatePresence mode="wait">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {galleryImages.map((image, index) => (
            <GalleryImageCard 
              key={`${image.id}-${index}`} 
              image={image} 
              index={index}
              onClick={() => openLightbox(image.id)}
            />
          ))}
        </motion.div>
      </AnimatePresence>
      
      {selectedImageId && (
        <GalleryLightbox 
          selectedImageId={selectedImageId} 
          images={images} 
          onClose={closeLightbox} 
        />
      )}
    </div>
  );
};

export default GalleryTabs;
