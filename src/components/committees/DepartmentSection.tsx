
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
  const [expandedChair, setExpandedChair] = useState<string | null>(null);
  
  const handleEasterEggTrigger = (title: string) => {
    if (!title) return;

    // Add haptic feedback if supported by the browser
    if (navigator.vibrate) {
      navigator.vibrate([100, 50, 200]); // Pattern: vibrate 100ms, pause 50ms, vibrate 200ms
    }

    // Create and dispatch a custom event
    const easterEggEvent = new CustomEvent('easterEggTriggered', {
      detail: {
        title
      }
    });
    window.dispatchEvent(easterEggEvent);

    // Show toast notification
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-mun-purple text-white px-4 py-3 rounded-lg shadow-lg z-50 animate-fade-in';
    notification.innerHTML = `
      <div class="flex items-center">
        <span class="inline-block bg-white/20 p-1 rounded-full mr-2">🎉</span>
        <div>
          <p class="font-medium">Easter Egg Found!</p>
          <p class="text-sm">${title}</p>
        </div>
      </div>
    `;
    document.body.appendChild(notification);

    // Remove notification after 3 seconds
    setTimeout(() => {
      notification.classList.replace('animate-fade-in', 'animate-fade-out');
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 500); // Allow time for fade out animation
    }, 3000);
  };
  
  const toggleExpandChair = (chairId: string) => {
    setExpandedChair(prev => prev === chairId ? null : chairId);
  };
  
  return (
    <motion.div 
      initial={{
        opacity: 0,
        y: 20
      }} 
      whileInView={{
        opacity: 1,
        y: 0
      }} 
      viewport={{
        once: true
      }} 
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: "tween"
      }} 
      className="mb-10"
    >
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white text-center">{department.name}</h3>
        <p className="text-white/80 text-center">{department.description}</p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-8 mx-auto max-w-5xl">
        {department.chairs.map(chair => (
          <motion.div 
            key={chair.name} 
            className="w-full max-w-xs"
            whileHover={{ 
              y: -8,
              scale: 1.03,
              transition: { duration: 0.3 }
            }}
          >
            <div 
              className={`bg-black/20 backdrop-filter backdrop-blur-sm rounded-lg overflow-hidden border border-mun-purple/30 hover:shadow-[0_0_25px_rgba(121,83,169,0.4)] transition-all duration-300 ${chair.easterEgg ? 'cursor-pointer' : ''}`} 
              onClick={() => chair.easterEgg && handleEasterEggTrigger(chair.easterEgg)}
            >
              <div className="p-4">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-40 h-40 mb-4 rounded-xl overflow-hidden border-2 border-mun-purple/50">
                    <img src={chair.photo} alt={chair.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-white">{chair.name}</h4>
                    <p className="text-mun-purple-light text-sm">{chair.title}</p>
                  </div>
                </div>
                
                <div className="mt-3 bg-black/40 p-3 border border-mun-purple/30 rounded-lg">
                  <div className={`text-white/90 text-sm ${expandedChair !== chair.name && 'line-clamp-3'}`}>
                    {chair.bio}
                  </div>
                  
                  {chair.bio && chair.bio.length > 150 && (
                    <button
                      className="mt-2 text-mun-purple-light hover:text-white text-xs flex items-center"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExpandChair(chair.name);
                      }}
                    >
                      {expandedChair === chair.name ? (
                        <>
                          <X className="w-3 h-3 mr-1" />
                          Show Less
                        </>
                      ) : (
                        <>
                          <BookOpen className="w-3 h-3 mr-1" />
                          Read More
                        </>
                      )}
                    </button>
                  )}
                </div>
                
                {chair.easterEgg && (
                  <div className="mt-3 text-xs text-mun-purple-light italic text-center">
                    <span className="inline-block animate-pulse">Click for a surprise!</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default DepartmentSection;
