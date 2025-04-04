
import { useEffect, useState } from 'react';
import PageTransition from '../components/PageTransition';
import GalleryHeader from '../components/gallery/GalleryHeader';
import { galleryImages, getCategories } from '../components/gallery/gallery-data';
import GalleryLightbox from '../components/gallery/GalleryLightbox';
import GalleryEmptyState from '../components/gallery/GalleryEmptyState';
import GalleryTabs from '../components/gallery/GalleryTabs';
import { GalleryImage } from '../components/gallery/types';

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [spotlightImage, setSpotlightImage] = useState<GalleryImage | null>(null);
  const [shuffledImages, setShuffledImages] = useState<GalleryImage[]>([]);
  
  // Shuffle images on page load/refresh
  useEffect(() => {
    const shuffleArray = (array: GalleryImage[]) => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };
    
    setShuffledImages(shuffleArray(galleryImages));
  }, []);
  
  const openLightbox = (imageId: string) => {
    setSelectedImage(imageId);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const handleSpotlight = (image: GalleryImage) => {
    setSpotlightImage(image);
    setSelectedImage(image.id);
  };
  
  return (
    <PageTransition>
      <div className="container mx-auto px-4 pt-28 pb-16 sm:pt-32 md:pt-36 relative min-h-screen">
        <GalleryHeader />
        
        {shuffledImages.length > 0 ? (
          <GalleryTabs 
            images={shuffledImages} 
            onSpotlight={handleSpotlight}
          />
        ) : (
          <GalleryEmptyState />
        )}
        
        {selectedImage && (
          <GalleryLightbox 
            selectedImageId={selectedImage} 
            images={shuffledImages.length > 0 ? shuffledImages : galleryImages} 
            onClose={closeLightbox} 
          />
        )}
      </div>
    </PageTransition>
  );
};

export default Gallery;
