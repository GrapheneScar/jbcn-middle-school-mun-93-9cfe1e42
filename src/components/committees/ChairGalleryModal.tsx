
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface ChairGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  chairName: string;
}

const ChairGalleryModal = ({ isOpen, onClose, chairName }: ChairGalleryModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Sample gallery images - in a real application these would be fetched from a database
  const galleryImages = [
    `/lovable-uploads/chairs-gallery/${chairName.toLowerCase().replace(/\s+/g, '-')}-1.jpg`,
    `/lovable-uploads/chairs-gallery/${chairName.toLowerCase().replace(/\s+/g, '-')}-2.jpg`,
    `/lovable-uploads/chairs-gallery/${chairName.toLowerCase().replace(/\s+/g, '-')}-3.jpg`,
  ];

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Close on escape key
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        >
          <motion.div
            ref={modalRef}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className="relative bg-black/60 rounded-lg p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto glass-panel"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
            >
              <X size={20} />
            </button>
            
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              {chairName}'s Delegate Journey
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Show fallback message if no images */}
              {galleryImages.length === 0 ? (
                <div className="col-span-full flex items-center justify-center p-10 text-center">
                  <p className="text-white/70">
                    No delegate images available for {chairName}. Check back later!
                  </p>
                </div>
              ) : (
                galleryImages.map((img, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative aspect-[4/3] overflow-hidden rounded-lg"
                  >
                    <img
                      src={img}
                      alt={`${chairName} as delegate`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = "/placeholder.svg";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
                      <p className="text-white p-3 text-sm">
                        {chairName} at MUN {index + 2023}
                      </p>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChairGalleryModal;
