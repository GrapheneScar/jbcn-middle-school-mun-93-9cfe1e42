import { motion } from 'framer-motion';
import { RegisterButton } from '../ui/register-button';
import CountdownTimer from './countdown/CountdownTimer';
import ScrollIndicator from './ScrollIndicator';
const HeroContent = () => {
  // Set conference date (April 25, 2025)
  const conferenceDate = new Date('2025-04-25T09:00:00');
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        duration: 0.7
      }
    }
  };
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  return <motion.div className="container mx-auto relative z-10 text-center" variants={containerVariants} initial="hidden" animate="visible">
      <div className="text-center">
        <motion.h1 variants={itemVariants} className="text-5xl lg:text-8xl text-white tracking-tighter leading-none mb-6 mx-0 my-[50px] py-[50px] font-bold md:text-7xl">
          JBCN Middle School MUN
          2025
        </motion.h1>
        
        <motion.p className="text-lg md:text-xl lg:text-2xl text-white/80 mb-12 max-w-2xl mx-auto" variants={itemVariants}>
          Experience the world of international diplomacy and global problem-solving at the prestigious JBCN Middle School Model United Nations.
        </motion.p>
        
        <motion.div variants={itemVariants}>
          <CountdownTimer targetDate={conferenceDate} />
        </motion.div>
        
        <motion.div variants={itemVariants} whileHover={{
        scale: 1.05,
        transition: {
          duration: 0.3
        }
      }} className="mb-4 relative z-50">
          <RegisterButton className="mx-auto" />
        </motion.div>
        
        <motion.p variants={itemVariants} className="text-sm text-white/60 italic mb-16">NOTE: This registration form is for external delegates only. Internal delegates have received the registration form via MSO.</motion.p>
        
        <motion.div variants={itemVariants}>
          <ScrollIndicator />
        </motion.div>
      </div>
    </motion.div>;
};
export default HeroContent;