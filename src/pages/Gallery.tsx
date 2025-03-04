
import { useState, useEffect } from 'react';
import PageTransition from '../components/PageTransition';
import GalleryHeader from '../components/gallery/GalleryHeader';
import GalleryTabs from '../components/gallery/GalleryTabs';
import GalleryLightbox from '../components/gallery/GalleryLightbox';
import { GalleryImage } from '../components/gallery/types';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeTab, setActiveTab] = useState("all");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Image click handler
  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  // Close modal handler
  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <PageTransition>
      <div className="container mx-auto px-4 pt-28 pb-16 sm:pt-32 md:pt-36">
        <GalleryHeader />
        <GalleryTabs 
          activeTab={activeTab} 
          setActiveTab={setActiveTab}
          onImageClick={handleImageClick}
        />
      </div>

      <GalleryLightbox 
        selectedImage={selectedImage}
        onClose={handleCloseModal}
      />
    </PageTransition>
  );
};

export default Gallery;
