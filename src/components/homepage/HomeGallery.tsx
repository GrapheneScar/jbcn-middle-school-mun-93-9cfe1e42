
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { filterImages } from '../gallery/gallery-data';

const HomeGallery = () => {
  // Use featured images from the gallery data
  const [galleryImages, setGalleryImages] = useState(filterImages('featured').slice(0, 6));

  useEffect(() => {
    // Ensure we have exactly 6 images (or fewer if not enough)
    setGalleryImages(filterImages('featured').slice(0, 6));
  }, []);

  return (
    <section className="py-20 px-4 bg-black/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white">
            <span className="inline-block px-3 py-1 text-sm bg-mun-purple rounded-full mb-3">Memories</span>
            <br />
            Conference Gallery
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mt-4">
            Capturing the diplomatic spirit and memorable moments from our past conferences
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="relative overflow-hidden rounded-xl aspect-square group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <h3 className="text-white font-semibold">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Link to="/gallery">
            <Button 
              className="gallery-button border border-mun-purple bg-transparent hover:bg-mun-purple hover:shadow-[0_0_15px_rgba(155,135,245,0.4)] transition-all duration-300"
            >
              View Full Gallery
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeGallery;
