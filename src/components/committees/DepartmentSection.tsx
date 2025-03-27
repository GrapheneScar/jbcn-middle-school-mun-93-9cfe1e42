
import { motion } from 'framer-motion';
import { Department } from './types';
import ChairCard from './ChairCard';

interface DepartmentSectionProps {
  department: Department;
  index: number;
}

const DepartmentSection = ({ department, index }: DepartmentSectionProps) => {
  const isEven = index % 2 === 0;
  
  // Function to determine if easter egg can be triggered based on role
  const canTriggerEasterEgg = (title: string) => {
    const lowerTitle = title.toLowerCase();
    return lowerTitle.includes('director') || lowerTitle.includes('head') || 
           lowerTitle.includes('assistant director') || lowerTitle.includes('deputy');
  };
  
  return (
    <motion.div 
      className="w-full mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, type: "tween" }}
    >
      <motion.div 
        className="text-center mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.5, type: "tween" }}
      >
        <h2 className="text-3xl font-bold text-white mb-4">{department.name}</h2>
        {department.description && (
          <p className="text-white/80 max-w-2xl mx-auto">{department.description}</p>
        )}
      </motion.div>
      
      <div className="flex flex-wrap gap-10 justify-center max-w-4xl mx-auto">
        {department.chairs.map((chair, chairIndex) => {
          // Set the transformed title
          const transformedTitle = chair.title.replace('Head', 'Director').replace('Deputy Head', 'Assistant Director');
          
          // Determine if this role can trigger easter egg
          const enableEasterEgg = canTriggerEasterEgg(transformedTitle);
          
          return (
            <motion.div
              key={chair.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: chairIndex * 0.1, duration: 0.5, type: "tween" }}
              className="w-64"
            >
              <ChairCard chair={{
                name: chair.name,
                title: transformedTitle,
                photo: chair.photo,
                bio: chair.bio || '', // Provide a default empty string if bio is missing
                department: chair.department || department.name.replace('Heads of ', ''), // Default department name based on section title
                easterEgg: enableEasterEgg ? chair.easterEgg : undefined // Only pass easter egg if role allows it
              }} />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default DepartmentSection;
