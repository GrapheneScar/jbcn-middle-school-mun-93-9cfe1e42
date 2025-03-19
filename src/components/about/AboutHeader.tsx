
import { motion } from 'framer-motion';

const AboutHeader = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="pt-32 pb-20 px-4 relative">
      <div className="container mx-auto">
        <motion.div 
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            variants={fadeInUpVariants}
          >
            ABOUT US
          </motion.h1>
          
          <motion.div 
            className="w-20 h-1 bg-mun-purple mx-auto mb-8"
            variants={{
              hidden: { width: 0 },
              visible: { 
                width: 80,
                transition: { duration: 0.8, delay: 0.3 }
              }
            }}
          />
          
          <motion.p 
            className="text-lg text-white/80 max-w-3xl mx-auto"
            variants={fadeInUpVariants}
          >
            Founded with a vision to nurture young diplomatic minds, JBCN Parel MUN creates a platform for middle school students to engage with global issues and develop crucial skills.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHeader;
