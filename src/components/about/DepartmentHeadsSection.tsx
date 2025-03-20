
import { motion } from 'framer-motion';
import { DepartmentHead } from './types';

interface DepartmentHeadsSectionProps {
  departmentHeads: DepartmentHead[];
}

const DepartmentHeadsSection = ({ departmentHeads }: DepartmentHeadsSectionProps) => {
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
      
      return (
        <p 
          key={index} 
          className="mb-2" 
          dangerouslySetInnerHTML={{ __html: formattedText }}
        />
      );
    });
  };
  
  return (
    <section className="py-16 px-4 bg-black/30">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3 py-1 text-sm bg-mun-purple rounded-full mb-3">MUN Support</span>
          <h2 className="text-3xl font-bold text-white">Department Heads</h2>
          <p className="text-white/80 max-w-2xl mx-auto mt-4">
            These talented individuals lead specialized teams that support all aspects of our conference.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {departmentHeads.map((person, index) => (
            <motion.div
              key={person.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col"
            >
              <div className="glass-panel p-6 text-center hover:shadow-[0_0_15px_rgba(121,83,169,0.3)] transition-all duration-300 flex-grow">
                <div className="w-20 h-20 mx-auto rounded-full overflow-hidden mb-4">
                  <img 
                    src={person.image} 
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{person.name}</h3>
                <p className="text-mun-purple-light text-sm mb-4">{person.role}</p>
                <div className="text-white/80 text-sm">
                  {formatBio(person.bio)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentHeadsSection;
