
import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";

interface GalleryImageProps {
  id: string;
  src: string;
  alt?: string;
  category?: string;
  title?: string;
}

interface ResponsiveMiniGalleryProps {
  images: GalleryImageProps[];
  className?: string;
  autoplay?: boolean;
  onImageClick?: (imageId: string) => void;
}

const ResponsiveMiniGallery = ({
  images,
  className,
  autoplay = true,
  onImageClick
}: ResponsiveMiniGalleryProps) => {
  // Select a random subset of images if more are provided
  const [displayImages, setDisplayImages] = useState<GalleryImageProps[]>([]);

  useEffect(() => {
    // Get 4-5 random images from the array
    const getRandomImages = () => {
      if (images.length <= 5) return [...images];
      
      const shuffled = [...images].sort(() => 0.5 - Math.random());
      // Get between 4 and 5 images
      const count = Math.floor(Math.random() * 2) + 4; // Random number between 4-5
      return shuffled.slice(0, count);
    };
    
    setDisplayImages(getRandomImages());
  }, [images]);

  // Plugin for autoplay
  const plugin = autoplay 
    ? [
        Autoplay({
          delay: 4000,
          stopOnInteraction: false,
        }),
      ] 
    : [];

  return (
    <div className={cn("w-full", className)}>
      <div className="relative">
        {/* Badge */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-10">
          <span className="inline-block px-4 py-2 text-sm bg-mun-purple text-white rounded-full font-medium">
            Memories
          </span>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Conference Gallery</h2>
          <p className="text-white/80 mt-3 max-w-2xl mx-auto">
            Capturing the diplomatic spirit and memorable moments from our past conferences
          </p>
        </div>

        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          plugins={plugin}
          className="w-full"
        >
          <CarouselContent>
            {displayImages.map((image) => (
              <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3 px-2">
                <div 
                  className="overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl group cursor-pointer" 
                  onClick={() => onImageClick && onImageClick(image.id)}
                >
                  <AspectRatio ratio={16 / 9} className="bg-black/20">
                    <img 
                      src={image.src} 
                      alt={image.alt || image.title || "Gallery image"} 
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                    
                    {/* Overlay with details */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      {image.title && (
                        <h3 className="text-white font-medium text-lg">{image.title}</h3>
                      )}
                      {image.category && (
                        <p className="text-white/80 text-sm">{image.category}</p>
                      )}
                    </div>
                  </AspectRatio>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 bg-black/40 hover:bg-black/60 border-mun-purple text-white" />
          <CarouselNext className="right-2 bg-black/40 hover:bg-black/60 border-mun-purple text-white" />
        </Carousel>

        {/* Thumbnail indicators */}
        <div className="flex justify-center mt-6 gap-2">
          {displayImages.map((image, index) => (
            <div key={`thumb-${image.id}`} className="w-12 h-1.5 rounded-full bg-mun-purple/30 overflow-hidden">
              <div className="w-full h-full bg-mun-purple transform origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResponsiveMiniGallery;
