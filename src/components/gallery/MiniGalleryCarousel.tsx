
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { GalleryImage } from "./types";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Autoplay from "embla-carousel-autoplay";

interface MiniGalleryCarouselProps {
  images: GalleryImage[];
  className?: string;
  onImageClick?: (imageId: string) => void;
}

const MiniGalleryCarousel = ({
  images,
  className,
  onImageClick
}: MiniGalleryCarouselProps) => {
  // Select a subset of images (4-5) if more are provided
  const displayImages = images.length > 5 ? images.slice(0, 5) : images;

  // Plugin for autoplay
  const plugin = [
    Autoplay({
      delay: 4000,
      stopOnInteraction: true,
    }),
  ];

  return <div className={cn("w-full", className)}>
      <Carousel 
        opts={{
          align: "start",
          loop: true
        }} 
        plugins={plugin}
        className="w-full"
      >
        <CarouselContent>
          {displayImages.map(image => <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
              <div 
                className="overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl group cursor-pointer" 
                onClick={() => onImageClick && onImageClick(image.id)}
              >
                <AspectRatio ratio={16 / 9} className="bg-black">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" 
                  />
                  
                  {/* Overlay with details */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    {image.title && (
                      <h3 className="text-white font-medium text-lg">{image.title}</h3>
                    )}
                    {image.category && (
                      <p className="text-white/80 text-sm">{image.category}</p>
                    )}
                  </div>
                </AspectRatio>
              </div>
            </CarouselItem>)}
        </CarouselContent>
        <CarouselPrevious className="left-2 bg-black/30 hover:bg-black/70 border-mun-purple text-white" />
        <CarouselNext className="right-2 bg-black/30 hover:bg-black/70 border-mun-purple text-white" />
      </Carousel>
    </div>;
};

export default MiniGalleryCarousel;
