
import { motion } from 'framer-motion';
import { Department } from './types';
import { useState } from 'react';
import { BookOpen, X } from 'lucide-react';

interface DepartmentSectionProps {
  department: Department;
  index: number;
}

const DepartmentSection = ({
  department,
  index
}: DepartmentSectionProps) => {
  const [expandedBios, setExpandedBios] = useState<Record<string, boolean>>({});
  const [activeEasterEggChair, setActiveEasterEggChair] = useState<string | null>(null);

  // Toggle bio expansion
  const toggleBio = (chairName: string) => {
    setExpandedBios(prev => ({
      ...prev,
      [chairName]: !prev[chairName]
    }));
  };

  // Handle easter egg activation on long press
  const startEasterEggTimer = (chair: any) => {
    if (!chair.easterEgg) return;
    const timer = setTimeout(() => {
      // Trigger easter egg event
      const easterEggEvent = new CustomEvent('easterEggTriggered', {
        detail: {
          title: chair.title || 'Department Head'
        }
      });
      window.dispatchEvent(easterEggEvent);
      setActiveEasterEggChair(chair.name);

      // Automatically reset after animation
      setTimeout(() => setActiveEasterEggChair(null), 5000);
    }, 1000); // 1 second hold

    return timer;
  };

  // Function to format bio text with styling
  const formatBio = (bio: string) => {
    if (!bio) return <p>No bio available</p>;

    // Create paragraphs from line breaks
    const paragraphs = bio.split('\n').filter(p => p.trim() !== '');
    return paragraphs.map((paragraph, index) => {
      // Format text: make text after colons bold, and text in quotes italic
      const formattedText = paragraph.replace(/(?<=:)(.*?)(?=\.|$)/g, '<strong>$1</strong>').replace(/"([^"]+)"/g, '<em>"$1"</em>').replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\*(.+?)\*/g, '<em>$1</em>').replace(/\_\_(.+?)\_\_/g, '<u>$1</u>');
      return <p key={index} className="mb-2" dangerouslySetInnerHTML={{
        __html: formattedText
      }} />;
    });
  };

  return <motion.div className="w-full mb-16" initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }} transition={{
    duration: 0.5,
    type: "tween"
  }}>
      <motion.div className="text-center mb-10" initial={{
      opacity: 0
    }} whileInView={{
      opacity: 1
    }} viewport={{
      once: true
    }} transition={{
      delay: 0.1,
      duration: 0.5,
      type: "tween"
    }}>
        <h2 className="text-3xl font-bold text-white mb-4">{department.name}</h2>
        {department.description && <p className="text-white/80 max-w-2xl mx-auto">{department.description}</p>}
      </motion.div>
      
      <div className="flex flex-wrap gap-8 justify-center max-w-4xl mx-auto">
        {department.chairs.map((chair, chairIndex) => {
        // Replace Director with Head on Department Heads page
        const displayTitle = chair.title.replace('Director', 'Head').replace('Assistant Director', 'Deputy Head');

        // Determine if this role can trigger easter egg
        const hasEasterEgg = !!chair.easterEgg;

        // Track press timer for easter egg
        let pressTimer: ReturnType<typeof setTimeout> | null = null;
        return <motion.div key={chair.name} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: chairIndex * 0.1,
          duration: 0.5,
          type: "tween"
        }} className="w-full max-w-sm">
              <div className={`glass-panel p-4 overflow-hidden transition-transform duration-300 ${activeEasterEggChair === chair.name ? 'glow-effect' : ''}`}>
                <div className="flex flex-col items-center">
                  {/* Square image with curved corners - Make it trigger easter egg on hold */}
                  <div 
                    className="w-36 h-36 rounded-xl overflow-hidden mb-4 border-2 border-mun-purple/30 cursor-pointer"
                    onMouseDown={() => {
                      pressTimer = startEasterEggTimer(chair);
                    }} 
                    onMouseUp={() => {
                      if (pressTimer) clearTimeout(pressTimer);
                    }}
                    onMouseLeave={() => {
                      if (pressTimer) clearTimeout(pressTimer);
                    }}
                    onTouchStart={() => {
                      pressTimer = startEasterEggTimer(chair);
                    }}
                    onTouchEnd={() => {
                      if (pressTimer) clearTimeout(pressTimer);
                    }}
                    onTouchCancel={() => {
                      if (pressTimer) clearTimeout(pressTimer);
                    }}
                  >
                    {chair.photo ? <img src={chair.photo} alt={`${chair.name} - ${displayTitle}`} className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center bg-mun-purple/20">
                        <span className="text-3xl font-bold text-mun-purple-light">
                          {chair.name.charAt(0)}
                        </span>
                      </div>}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-1">{chair.name}</h3>
                  <p className="text-mun-purple-light text-sm mb-4">{displayTitle}</p>
                  
                  {hasEasterEgg && <p className="text-white/30 text-xs italic mt-1 mb-2">Hold photo for a surprise</p>}
                </div>
              </div>
              
              {/* Bio toggle and content below the card */}
              <div className="mt-3 bg-black/40 p-4 border border-mun-purple/30 rounded-lg">
                <div className={`text-white/90 text-sm ${!expandedBios[chair.name] ? 'line-clamp-3' : ''}`}>
                  {formatBio(chair.bio || '')}
                </div>
                
                {/* Bio toggle button */}
                <button
                  onClick={() => toggleBio(chair.name)}
                  className="mt-2 text-mun-purple-light text-xs font-medium flex items-center"
                >
                  {expandedBios[chair.name] ? (
                    <>
                      <X size={14} className="mr-1" />
                      Show Less
                    </>
                  ) : (
                    <>
                      <BookOpen size={14} className="mr-1" />
                      Read More
                    </>
                  )}
                </button>
              </div>
            </motion.div>;
      })}
      </div>
    </motion.div>;
};

export default DepartmentSection;
