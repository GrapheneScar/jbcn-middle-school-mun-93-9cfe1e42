
import React from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { GalleryImage } from "./types";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
  
  return (
    <div className={cn("w-full", className)}>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {displayImages.map((image) => (
            <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
              <div
                className="overflow-hidden rounded-lg shadow-md transition-all duration-200 hover:shadow-lg cursor-pointer"
                onClick={() => onImageClick && onImageClick(image.id)}
              >
                <AspectRatio ratio={16 / 9} className="bg-black">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </AspectRatio>
                <div className="bg-black/70 p-3">
                  <h3 className="text-sm font-medium text-white">{image.title}</h3>
                  <p className="text-xs text-white/70">{image.category}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 bg-black/30 hover:bg-black/70 border-mun-purple text-white" />
        <CarouselNext className="right-2 bg-black/30 hover:bg-black/70 border-mun-purple text-white" />
      </Carousel>
    </div>
  );
};

export default MiniGalleryCarousel;
