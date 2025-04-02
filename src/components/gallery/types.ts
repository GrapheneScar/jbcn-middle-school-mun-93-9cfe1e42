
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  title: string;
  year?: string; // Added optional year property for filtering
}

export interface GalleryItem {
  id: number;
  title: string;
  thumbnail: string;
  fullImage: string;
  date: string;
  category: string;
}
