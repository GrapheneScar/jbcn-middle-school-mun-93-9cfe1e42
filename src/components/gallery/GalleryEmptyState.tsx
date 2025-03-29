
import { ImageIcon } from 'lucide-react';

const GalleryEmptyState = () => {
  return (
    <div className="text-center py-20">
      <ImageIcon className="w-12 h-12 mx-auto text-mun-purple-light/50 mb-4" />
      <h3 className="text-xl font-semibold text-white mb-2">No images available</h3>
      <p className="text-white/60">Check back later for updates to our gallery.</p>
    </div>
  );
};

export default GalleryEmptyState;
