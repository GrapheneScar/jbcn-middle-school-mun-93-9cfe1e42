
import { GalleryImage } from "../types";

// Utility functions for the gallery

/**
 * Gets unique categories from gallery images
 */
export const getCategories = (): string[] => {
  return ["all", "conference", "delegates", "events"];
};

/**
 * Filters images based on active tab
 */
export const filterImages = (images: GalleryImage[], activeTab: string): GalleryImage[] => {
  return activeTab === "all" 
    ? images 
    : images.filter(img => img.category === activeTab);
};

/**
 * Shuffles an array of gallery images
 */
export const shuffleGalleryImages = (images: GalleryImage[]): GalleryImage[] => {
  const shuffled = [...images];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
