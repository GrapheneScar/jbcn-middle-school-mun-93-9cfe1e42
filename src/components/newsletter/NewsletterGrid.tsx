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
const NewsletterGrid = ({
  title,
  newsletters
}: NewsletterGridProps) => {
  const container = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const item = {
    hidden: {
      opacity: 0,
      y: 20
    },
    show: {
      opacity: 1,
      y: 0
    }
  };

  // Determine which newsletters are from 2022 by checking if the title or date contains "2022"
  const is2022Newsletter = (newsletter: Newsletter) => {
    return newsletter.title.includes('2022') || newsletter.date.includes('2022');
  };
  return <div className="mb-12">
      <motion.h3 className="text-2xl font-bold text-white mb-8 text-center" initial={{
      opacity: 0,
      y: -10
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5,
      type: "tween"
    }}>
        {title}
      </motion.h3>
      
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" variants={container} initial="hidden" animate="show">
        {newsletters.map((newsletter, index) => <motion.div key={newsletter.id} variants={item} transition={{
        duration: 0.5,
        type: "tween"
      }}>
            <div className="relative">
              {/* Updated "Missing" overlay for 2022 newsletters */}
              {is2022Newsletter(newsletter) && !newsletter.comingSoon && <div className="absolute inset-0 bg-red-600/50 backdrop-blur-sm flex items-center justify-center z-10 rounded-xl">
                  <motion.div initial={{
              scale: 0.9
            }} animate={{
              scale: 1
            }} transition={{
              type: "spring",
              bounce: 0.4
            }} className="glass-panel px-6 py-4 rounded-2xl border border-red-500/50 flex flex-col items-center">
                    <h3 className="text-2xl font-bold text-white mb-2 transform -rotate-12 border-4 border-white px-4 py-2 rounded-xl">MISSING</h3>
                  </motion.div>
                </div>}
              
              <NewsletterCard newsletter={newsletter} index={index} />
            </div>
          </motion.div>)}
      </motion.div>
    </div>;
};
export default NewsletterGrid;