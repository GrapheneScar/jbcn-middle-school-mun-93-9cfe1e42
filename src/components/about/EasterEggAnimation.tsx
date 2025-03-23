
import { AnimatePresence } from 'framer-motion';
import SocialMediaEasterEgg from '../committees/eastereggs/SocialMediaEasterEgg';
import WebsiteDesignEasterEgg from '../committees/eastereggs/WebsiteDesignEasterEgg';
import PressEasterEgg from '../committees/eastereggs/PressEasterEgg';
import PhotographyEasterEgg from '../committees/eastereggs/PhotographyEasterEgg';
import IllustrationEasterEgg from '../committees/eastereggs/IllustrationEasterEgg';
import OrganizingEasterEgg from '../committees/eastereggs/OrganizingEasterEgg';
import ChairDaffairesEasterEgg from '../committees/eastereggs/ChairDaffairesEasterEgg';
import { motion } from 'framer-motion';

interface EasterEggAnimationProps {
  activeEasterEgg: string | null;
}

const EasterEggAnimation = ({ activeEasterEgg }: EasterEggAnimationProps) => {
  if (!activeEasterEgg) return null;
  
  return (
    <AnimatePresence>
      <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
        {activeEasterEgg === "Head of Social Media" && <SocialMediaEasterEgg />}
        {activeEasterEgg === "Head of Website Design" && <WebsiteDesignEasterEgg />}
        {activeEasterEgg === "Head of Press" && <PressEasterEgg />}
        {activeEasterEgg === "Head of Photography" && <PhotographyEasterEgg />}
        {activeEasterEgg === "Head of Illustration" && <IllustrationEasterEgg />}
        {activeEasterEgg === "Head of Organizing Committee" && <OrganizingEasterEgg />}
        {activeEasterEgg === "Chair d'affaires" && <ChairDaffairesEasterEgg />}
        
        {/* Add a small popup showing which easter egg is activated */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm z-50 border border-mun-purple/40"
        >
          {activeEasterEgg} Easter Egg Activated!
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default EasterEggAnimation;
