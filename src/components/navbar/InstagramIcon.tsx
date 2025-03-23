
import { useState, useRef, useEffect } from 'react';
import { Instagram } from 'lucide-react';

interface InstagramIconProps {
  onLongPress: () => void;
  onHeartAnimation: () => void;
  isMobile?: boolean;
}

const InstagramIcon = ({ onLongPress, onHeartAnimation, isMobile = false }: InstagramIconProps) => {
  const [pressingTimer, setPressingTimer] = useState<ReturnType<typeof setTimeout> | null>(null);
  const [lastTap, setLastTap] = useState(0);
  const tapTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  
  // Handle long press for Instagram icon
  const handleMouseDown = () => {
    const timer = setTimeout(() => {
      onLongPress();
    }, 800); // 800ms long press to trigger
    
    setPressingTimer(timer);
  };
  
  const handleMouseUp = () => {
    if (pressingTimer) {
      clearTimeout(pressingTimer);
      setPressingTimer(null);
    }
  };

  const handleQuickClick = (e: React.MouseEvent) => {
    // Handle double-tap/double-click for heart animation
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTap;
    
    // Check if it's a double tap (within 300ms)
    if (tapLength < 300 && tapLength > 0) {
      e.preventDefault();
      
      // Clear any existing timeout to prevent normal click
      if (tapTimeout.current) {
        clearTimeout(tapTimeout.current);
        tapTimeout.current = null;
      }
      
      // Show heart animation
      onHeartAnimation();
      
      // Reset last tap
      setLastTap(0);
    } else {
      // First tap - set timer to handle single tap after delay
      setLastTap(currentTime);
      
      tapTimeout.current = setTimeout(() => {
        // It's a single tap/click - open Instagram in new tab
        if (pressingTimer) {
          clearTimeout(pressingTimer);
          setPressingTimer(null);
        }
        
        // Open Instagram in a new tab on single click
        window.open('https://www.instagram.com/jbcnparelmun', '_blank');
        
        // Reset last tap
        setLastTap(0);
      }, 300);
    }
  };
  
  // Cleanup timers on component unmount
  useEffect(() => {
    return () => {
      if (pressingTimer) {
        clearTimeout(pressingTimer);
      }
      if (tapTimeout.current) {
        clearTimeout(tapTimeout.current);
      }
    };
  }, [pressingTimer]);

  return (
    <div 
      className={`${isMobile ? 'mr-4' : 'ml-4'} p-2 rounded-full hover:bg-mun-purple/20 transition-colors duration-300 flex items-center justify-center cursor-pointer`}
      aria-label="Visit our Instagram"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      onClick={handleQuickClick}
    >
      <Instagram className="w-5 h-5 text-white" />
    </div>
  );
};

export default InstagramIcon;
