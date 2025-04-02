
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { galleryImages } from '../gallery/gallery-data';
import ResponsiveMiniGallery from '../gallery/ResponsiveMiniGallery';
import { Button } from '../ui/button';

const HomeGallery = () => {
  // Randomize and select 5 images for the carousel display
  const getRandomImages = () => {
    const shuffled = [...galleryImages].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="mb-12">
          <ResponsiveMiniGallery 
            images={getRandomImages()} 
            autoplay={true}
          />
        </div>

        <div className="text-center">
          <Link to="/gallery">
            <Button 
              variant="outline" 
              className="border-mun-purple text-mun-purple hover:bg-mun-purple hover:text-white transition-colors"
            >
              View Full Gallery
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeGallery;
