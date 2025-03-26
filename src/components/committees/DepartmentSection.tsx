
import { motion } from 'framer-motion';
import { Department } from './types';
import ChairCard from './ChairCard';

interface DepartmentSectionProps {
  department: Department;
  index: number;
}

const DepartmentSection = ({ department, index }: DepartmentSectionProps) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      className="w-full mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="text-center mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-white mb-4">{department.name}</h2>
      </motion.div>
      
      <div className="flex flex-wrap gap-6 justify-center max-w-4xl mx-auto">
        {department.chairs.map((chair, chairIndex) => (
          <motion.div
            key={chair.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: chairIndex * 0.1, duration: 0.5 }}
            className="w-64"
          >
            <ChairCard chair={{
              name: chair.name,
              title: chair.title.replace('Head', 'Director').replace('Deputy Head', 'Assistant Director'),
              photo: chair.photo,
              bio: chair.bio || '', // Provide a default empty string if bio is missing
              department: chair.department,
              easterEgg: chair.easterEgg // Pass the easter egg data
            }} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default DepartmentSection;
