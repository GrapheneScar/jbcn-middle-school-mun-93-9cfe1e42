
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { SecretariatMember } from './types';
import { BookOpen, X } from 'lucide-react';

interface SecretariatSectionProps {
  secretariat: SecretariatMember[];
}

const SecretariatSection = ({
  secretariat
}: SecretariatSectionProps) => {
  const [expandedMember, setExpandedMember] = useState<string | null>(null);
  const toggleExpanded = (name: string) => {
    setExpandedMember(prev => prev === name ? null : name);
  };

  // Function to format bio text with styling
  const formatBio = (bio: string) => {
    // Create paragraphs from line breaks
    const paragraphs = bio.split('\n').filter(p => p.trim() !== '');
    return paragraphs.map((paragraph, index) => {
      // Format text: make text after colons bold, and text in quotes italic
      const formattedText = paragraph
        .replace(/(?<=:)(.*?)(?=\.|$)/g, '<strong>$1</strong>')
        .replace(/"([^"]+)"/g, '<em>"$1"</em>')
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
        .replace(/\_\_(.+?)\_\_/g, '<u>$1</u>');
      
      return <p key={index} className="mb-2" dangerouslySetInnerHTML={{ __html: formattedText }} />;
    });
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16" 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "tween" }}
        >
          <span className="inline-block px-3 py-1 text-sm bg-mun-purple rounded-full mb-3">Meet Our Team</span>
          <h2 className="text-3xl font-bold text-white">Secretariat</h2>
          <p className="text-white/80 max-w-2xl mx-auto mt-4">
            Meet our dedicated team of student leaders who organize and coordinate all aspects of JBCN Middle School MUN.
          </p>
        </motion.div>
        
        {/* Updated Secretariat Cards Layout - Centered Alignment */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3, type: "tween" }}
          className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto"
        >
          {secretariat.map((person, index) => (
            <motion.div 
              key={person.name} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, type: "tween" }}
              className="relative w-full max-w-sm"
            >
              <div className="w-full">
                <div className="glass-panel p-4 overflow-hidden">
                  <div className="flex flex-col items-center">
                    {/* Square image with curved corners */}
                    <div className="w-36 h-36 rounded-xl overflow-hidden mb-4 border-2 border-mun-purple/30">
                      <img 
                        src={person.image} 
                        alt={`${person.name} - ${person.role}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-1">{person.name}</h3>
                    <p className="text-mun-purple-light text-sm mb-4">{person.role}</p>
                  </div>
                </div>
                
                {/* Bio toggle and content below the card */}
                <div className="mt-3 bg-black/40 p-4 border border-mun-purple/30 rounded-lg">
                  <div className={`text-white/90 text-sm ${expandedMember !== person.name ? 'line-clamp-3' : ''}`}>
                    {formatBio(person.bio)}
                  </div>
                  
                  <button
                    onClick={() => toggleExpanded(person.name)}
                    className="mt-2 text-mun-purple-light hover:text-mun-purple text-xs flex items-center"
                  >
                    {expandedMember === person.name ? (
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
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SecretariatSection;
