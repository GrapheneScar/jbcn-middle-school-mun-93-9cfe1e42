
import { motion } from 'framer-motion';
import { Department } from './types';
import { useState } from 'react';

interface DepartmentSectionProps {
  department: Department;
  index: number;
}

const DepartmentSection = ({ department, index }: DepartmentSectionProps) => {
  const [expandedChair, setExpandedChair] = useState<string | null>(null);

  const handleEasterEggTrigger = (title: string) => {
    if (!title) return;
    
    // Create and dispatch a custom event
    const easterEggEvent = new CustomEvent('easterEggTriggered', {
      detail: { title }
    });
    window.dispatchEvent(easterEggEvent);
    
    // Show toast notification
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-mun-purple text-white px-4 py-3 rounded-lg shadow-lg z-50 animate-fade-in';
    notification.innerHTML = `<p class="font-medium">Easter Egg Found!</p><p class="text-sm">${title}</p>`;
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, type: "tween" }}
      className="mb-10"
    >
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white">{department.name}</h3>
        <p className="text-white/80">{department.description}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {department.chairs.map((chair) => (
          <div key={chair.name} className="bg-black/20 backdrop-filter backdrop-blur-sm rounded-lg overflow-hidden border border-mun-purple/30">
            <div 
              className={`p-4 ${chair.easterEgg ? 'cursor-pointer' : ''}`}
              onClick={() => chair.easterEgg && handleEasterEggTrigger(chair.easterEgg)}
            >
              <div className="flex items-center mb-4">
                <div className="w-20 h-20 mr-4 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-mun-purple/50">
                  <img 
                    src={chair.photo} 
                    alt={chair.name}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">{chair.name}</h4>
                  <p className="text-mun-purple-light text-sm">{chair.title}</p>
                </div>
              </div>
              
              <div className="mt-3">
                <p className={`text-white/80 text-sm ${expandedChair !== chair.name && 'line-clamp-3'}`}>
                  {chair.bio}
                </p>
                {chair.bio && chair.bio.length > 150 && (
                  <button 
                    className="mt-2 text-mun-purple-light hover:text-white text-xs"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleExpandChair(chair.name);
                    }}
                  >
                    {expandedChair === chair.name ? 'Show Less' : 'Read More'}
                  </button>
                )}
              </div>
              
              {chair.easterEgg && (
                <div className="mt-3 text-xs text-mun-purple-light italic">
                  Click for a surprise!
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default DepartmentSection;
