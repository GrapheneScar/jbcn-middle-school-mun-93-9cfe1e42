
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

  // Filter out "Conference Delegates" and "Events" categories
  const filteredCategories = getCategories().filter(cat => 
    cat !== 'all' && cat !== 'Conference Delegates' && cat !== 'Events'
  );
  
  return (
    <PageTransition>
      <div className="container mx-auto px-4 pt-28 pb-16 sm:pt-32 md:pt-36 relative min-h-screen">
        <GalleryHeader />
        
        {galleryImages.length > 0 ? (
          <GalleryTabs 
            images={galleryImages} 
            categories={filteredCategories}
            onSpotlight={handleSpotlight}
          />
        ) : (
          <GalleryEmptyState />
        )}
        
        {selectedImage && (
          <GalleryLightbox 
            selectedImageId={selectedImage} 
            images={galleryImages} 
            onClose={closeLightbox} 
          />
        )}
      </div>
    </PageTransition>
  );
};

export default Gallery;
