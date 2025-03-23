
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface InstagramPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const InstagramPopup = ({ isOpen, onClose }: InstagramPopupProps) => {
  if (!isOpen) return null;
  
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        className="w-full max-w-2xl bg-black rounded-lg overflow-hidden shadow-2xl border border-mun-purple/30"
        onClick={(e) => e.stopPropagation()}
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", damping: 25 }}
      >
        {/* Mac Browser Chrome */}
        <div className="bg-mun-purple/30 h-8 flex items-center justify-between px-2 border-b border-mun-purple/20">
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#28c940]"></div>
          </div>
          <div className="w-72 bg-black/60 h-5 rounded-md flex items-center justify-center text-xs text-mun-purple-light border border-mun-purple/30">
            instagram.com/jbcnparelmun
          </div>
          <div>
            <button 
              className="text-white hover:text-mun-purple-light"
              onClick={onClose}
            >
              <X size={16} />
            </button>
          </div>
        </div>
        
        {/* Safari Browser Content */}
        <div className="h-[60vh] overflow-y-auto bg-black border-t border-mun-purple/10">
          <iframe 
            src="https://www.instagram.com/jbcnparelmun" 
            className="w-full h-full border-0"
            title="JBCN Parel MUN Instagram"
            loading="lazy"
            sandbox="allow-same-origin allow-scripts"
          />
        </div>
        
        {/* Fallback if iframe doesn't load */}
        <div className="p-4 text-center text-sm text-mun-purple-light bg-black border-t border-mun-purple/20">
          <p>
            If the page doesn't load properly, you can visit 
            <a 
              href="https://www.instagram.com/jbcnparelmun"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mun-purple ml-1 hover:underline"
            >
              instagram.com/jbcnparelmun
            </a>
            directly.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default InstagramPopup;
