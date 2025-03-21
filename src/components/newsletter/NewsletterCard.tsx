
import { motion } from 'framer-motion';
import { File } from 'lucide-react';

interface Newsletter {
  id: number;
  title: string;
  date: string;
  description: string;
  coverImage: string;
  pdfUrl: string;
  comingSoon?: boolean;
}

interface NewsletterCardProps {
  newsletter: Newsletter;
  index: number;
}

const NewsletterCard = ({ newsletter, index }: NewsletterCardProps) => {
  return (
    <motion.div 
      key={newsletter.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(121,83,169,0.3)" }}
      className="glass-panel overflow-hidden rounded-xl"
    >
      <a href={newsletter.pdfUrl || "#"} target="_blank" rel="noopener noreferrer" className="block">
        <div className="relative h-64 overflow-hidden">
          {newsletter.coverImage ? (
            <img 
              src={newsletter.coverImage} 
              alt={newsletter.title} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
            />
          ) : (
            <div className="w-full h-full bg-mun-purple/20 flex items-center justify-center">
              <span className="text-white/70">Image coming soon</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
          <div className="absolute top-0 right-0 p-3">
            <span className="inline-block bg-mun-purple text-white text-xs rounded-full px-3 py-1">
              {newsletter.date}
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="font-bold text-white mb-1 text-lg">{newsletter.title}</h3>
            <p className="text-white/80 text-xs">{newsletter.description}</p>
          </div>
          {newsletter.comingSoon && (
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center">
              <div className="transform -rotate-12 bg-mun-purple px-6 py-2 rounded-lg">
                <span className="text-lg font-bold text-white">COMING SOON</span>
              </div>
            </div>
          )}
        </div>
        <div className="p-4 flex justify-center items-center text-mun-purple-light hover:text-mun-purple transition-colors">
          <File className="mr-2 h-5 w-5" />
          <span>View PDF</span>
        </div>
      </a>
    </motion.div>
  );
};

export default NewsletterCard;
