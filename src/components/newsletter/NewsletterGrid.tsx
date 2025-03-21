
import { motion } from 'framer-motion';
import NewsletterCard from './NewsletterCard';

interface Newsletter {
  id: number;
  title: string;
  date: string;
  description: string;
  coverImage: string;
  pdfUrl: string;
  comingSoon?: boolean;
}

interface NewsletterGridProps {
  title: string;
  newsletters: Newsletter[];
}

const NewsletterGrid = ({ title, newsletters }: NewsletterGridProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-3xl font-bold text-white mb-6 text-center">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsletters.map((newsletter, index) => (
          <NewsletterCard 
            key={newsletter.id} 
            newsletter={newsletter} 
            index={index} 
          />
        ))}
      </div>
    </motion.div>
  );
};

export default NewsletterGrid;
