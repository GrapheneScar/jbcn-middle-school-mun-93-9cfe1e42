
import { conferenceImages } from './conference-images';
import { delegatesImages } from './delegates-images';
import { eventsImages } from './events-images';
import { getCategories, filterImages, shuffleGalleryImages } from './gallery-utils';
import { GalleryImage } from '../types';

// Combine all image categories into one array
export const galleryImages: GalleryImage[] = [
  ...conferenceImages,
  ...delegatesImages,
  ...eventsImages
];

// Re-export utility functions
export { 
  getCategories, 
  filterImages,
  shuffleGalleryImages
};
