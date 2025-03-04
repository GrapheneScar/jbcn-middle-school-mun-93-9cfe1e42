
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import ScheduleHeader from '../components/schedule/ScheduleHeader';
import ScheduleActions from '../components/schedule/ScheduleActions';
import ScheduleTabs from '../components/schedule/ScheduleTabs';
import ScheduleNotes from '../components/schedule/ScheduleNotes';

const Schedule = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const downloadSchedule = () => {
    // In a real app, this would generate and download a PDF or calendar file
    alert('Schedule download functionality would be implemented here');
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16 px-4">
        <motion.div 
          className="container mx-auto max-w-5xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <ScheduleHeader />
          <ScheduleActions downloadSchedule={downloadSchedule} />
          
          <motion.div variants={itemVariants}>
            <ScheduleTabs />
            <ScheduleNotes />
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Schedule;
