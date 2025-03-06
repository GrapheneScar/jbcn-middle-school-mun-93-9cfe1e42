
import { motion } from 'framer-motion';
import { Department } from "./types";
import ChairCard from "./ChairCard";

interface DepartmentSectionProps {
  department: Department;
  index: number;
}

const DepartmentSection = ({ department, index }: DepartmentSectionProps) => {
  return (
    <motion.section 
      className="mb-20 w-full" 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <h2 className="text-2xl font-bold text-white text-center mb-2">
        {department.name}
      </h2>
      
      {department.description && (
        <p className="text-white/70 text-center max-w-2xl mx-auto mb-8">
          {department.description}
        </p>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto place-items-center">
        {department.chairs.map(chair => <ChairCard key={chair.name} chair={chair} />)}
      </div>
    </motion.section>
  );
};

export default DepartmentSection;
