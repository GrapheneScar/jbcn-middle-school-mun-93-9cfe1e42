import { CommitteeChair } from "./types";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
interface ChairCardProps {
  chair: CommitteeChair;
}
const ChairCard = ({
  chair
}: ChairCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLongPressing, setIsLongPressing] = useState(false);
  const [longPressTimer, setLongPressTimer] = useState<NodeJS.Timeout | null>(null);

  // Function to format bio text with styling
  const formatBio = (bio: string) => {
    // Create paragraphs from line breaks
    const paragraphs = bio.split('\n').filter(p => p.trim() !== '');
    return paragraphs.map((paragraph, index) => {
      // Format text: make text after colons bold, and text in quotes italic
      const formattedText = paragraph.replace(/(?<=:)(.*?)(?=\.|$)/g, '<strong>$1</strong>').replace(/"([^"]+)"/g, '<em>"$1"</em>').replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\*(.+?)\*/g, '<em>$1</em>').replace(/\_\_(.+?)\_\_/g, '<u>$1</u>');
      return <p key={index} className="mb-2 text-xs" dangerouslySetInnerHTML={{
        __html: formattedText
      }} />;
    });
  };

  // Handle long press to trigger easter egg
  const startLongPress = () => {
    // Clear any existing timer
    if (longPressTimer) {
      clearTimeout(longPressTimer);
    }

    // Set new timer for long press (800ms)
    const timer = setTimeout(() => {
      // Trigger easter egg custom event
      if (chair.easterEgg) {
        const easterEggEvent = new CustomEvent('easterEggTriggered', {
          detail: {
            name: chair.name,
            title: chair.easterEgg,
            department: chair.department
          }
        });
        window.dispatchEvent(easterEggEvent as any);
        setIsLongPressing(false);
      }
    }, 800);
    setLongPressTimer(timer);
    setIsLongPressing(true);
  };
  const endLongPress = () => {
    if (longPressTimer) {
      clearTimeout(longPressTimer);
      setLongPressTimer(null);
    }
    setIsLongPressing(false);
  };

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (longPressTimer) {
        clearTimeout(longPressTimer);
      }
    };
  }, [longPressTimer]);
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5
  }} className="glass-panel h-full">
      <Collapsible open={isExpanded} onOpenChange={() => setIsExpanded(!isExpanded)}>
        <div className="p-6 flex flex-col items-center text-center relative">
          <div className={`w-32 h-32 rounded-full overflow-hidden mb-4 flex-shrink-0 relative cursor-pointer ${isLongPressing ? 'ring-2 ring-mun-purple-light ring-opacity-70' : ''}`} onMouseDown={startLongPress} onMouseUp={endLongPress} onMouseLeave={endLongPress} onTouchStart={startLongPress} onTouchEnd={endLongPress} onTouchCancel={endLongPress}>
            <img src={chair.photo} alt={chair.name} className="w-full h-full object-cover" />
            {isLongPressing && <div className="absolute inset-0 bg-mun-purple/30 flex items-center justify-center">
                <div className="h-1 w-1 bg-white rounded-full animate-ping" />
              </div>}
          </div>
          <div>
            <h3 className="text-xl font-bold">{chair.name}</h3>
            
            
            <CollapsibleTrigger asChild>
              <button className="inline-flex items-center justify-center space-x-1 text-mun-purple hover:text-mun-purple-light transition-colors duration-200">
                <span>{isExpanded ? "Read Less" : "Read More"}</span>
                {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button>
            </CollapsibleTrigger>
          </div>

          <CollapsibleContent className="mt-4">
            <div className="text-white/80 whitespace-pre-line text-xs">
              {formatBio(chair.bio)}
            </div>
          </CollapsibleContent>
        </div>
      </Collapsible>
    </motion.div>;
};
export default ChairCard;