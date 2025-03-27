
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  title: string;
  year?: string; // Added optional year property for filtering
}
