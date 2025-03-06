
import { motion } from 'framer-motion';
import { FileText, Download, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { newsletterData } from './newsletter-data';

const Newsletter = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div
      className="space-y-8"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">MUN Newsletters</h2>
        <p className="text-white/80 max-w-2xl mx-auto">
          Our newsletters provide important updates, feature stories, and insights about the conference. Download and read the latest editions below.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {newsletterData.map((newsletter, index) => (
          <motion.div
            key={index}
            className="glass-panel h-full"
            variants={fadeInUpVariants}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">{newsletter.title}</h3>
                <span className="text-sm px-3 py-1 bg-mun-purple/30 rounded-full text-white/90">
                  {newsletter.issue}
                </span>
              </div>
              
              <div className="flex items-center text-sm text-white/70 mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{newsletter.date}</span>
              </div>
              
              <p className="text-white/80 mb-6">{newsletter.description}</p>
              
              <div className="mt-auto">
                <a 
                  href={newsletter.pdfUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button 
                    className="w-full flex items-center justify-center bg-mun-purple hover:bg-mun-purple-light"
                  >
                    <Download className="mr-2 w-4 h-4" />
                    Download PDF
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Newsletter;
