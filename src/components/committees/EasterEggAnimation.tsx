
import { AnimatePresence } from 'framer-motion';
import SocialMediaEasterEgg from './eastereggs/SocialMediaEasterEgg';
import WebsiteDesignEasterEgg from './eastereggs/WebsiteDesignEasterEgg';
import PressEasterEgg from './eastereggs/PressEasterEgg';
import PhotographyEasterEgg from './eastereggs/PhotographyEasterEgg';
import IllustrationEasterEgg from './eastereggs/IllustrationEasterEgg';
import OrganizingEasterEgg from './eastereggs/OrganizingEasterEgg';

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
      </div>
    </AnimatePresence>
  );
};

export default EasterEggAnimation;
