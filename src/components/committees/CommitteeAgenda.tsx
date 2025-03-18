
import { motion } from 'framer-motion';
import { FileClock } from 'lucide-react';

interface CommitteeAgendaProps {
  topics: string[];
}

const CommitteeAgenda = ({ topics }: CommitteeAgendaProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="glass-panel p-6"
    >
      <h2 className="text-2xl font-bold mb-6 flex items-center justify-center">
        <FileClock className="mr-3 text-mun-purple-light" /> Agenda Topics
      </h2>
      <div className="space-y-8 max-w-3xl mx-auto">
        {topics.map((topic, index) => (
          <div key={index} className="border-l-4 border-mun-purple pl-6 py-2">
            <h3 className="text-xl font-semibold text-white mb-3 text-center">Topic {index + 1}: {topic}</h3>
            <p className="text-white/80 text-center">
              Delegates will discuss key issues related to this topic, propose solutions,
              and work together to draft a comprehensive resolution that addresses the challenges 
              faced by the international community.
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default CommitteeAgenda;
