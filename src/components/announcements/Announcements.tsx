
import { motion } from 'framer-motion';
import { Calendar, Bell, ExternalLink } from 'lucide-react';
import { announcementsData } from './announcements-data';

const Announcements = () => {
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
      <h2 className="text-2xl font-bold text-white text-center mb-6">Latest Announcements</h2>
      
      {announcementsData.map((announcement, index) => (
        <motion.div
          key={index}
          className="glass-panel p-6 relative overflow-hidden"
          variants={fadeInUpVariants}
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-mun-purple"></div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-white">{announcement.title}</h3>
            
            <div className="flex items-center mt-2 md:mt-0">
              <Bell className="w-4 h-4 text-mun-purple-light mr-2" />
              <span className="text-sm text-mun-purple-light">{announcement.date}</span>
            </div>
          </div>
          
          <p className="text-white/80 mb-4">{announcement.content}</p>
          
          {announcement.links && announcement.links.length > 0 && (
            <div className="mt-4 space-y-2">
              <h4 className="text-sm font-semibold text-white">Related Links:</h4>
              <ul className="space-y-1">
                {announcement.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="text-sm">
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-mun-purple-light hover:underline flex items-center"
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {announcement.eventDate && (
            <div className="mt-4 flex items-center">
              <Calendar className="w-4 h-4 text-mun-purple-light mr-2" />
              <span className="text-sm text-white/80">Event Date: {announcement.eventDate}</span>
            </div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Announcements;
