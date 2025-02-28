
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import RegisterButton from '../components/RegisterButton';
import StripeBackground from '../components/StripeBackground';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      transition: { duration: 0.5 }
    }
  };

  const stripeVariants = {
    hidden: { scaleY: 0 },
    visible: index => ({
      scaleY: 1,
      transition: { 
        duration: 0.8,
        delay: 0.1 * index,
        ease: [0.215, 0.61, 0.355, 1]
      }
    })
  };

  return (
    <div className="relative min-h-screen">
      <StripeBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        {/* Animated Stripes Background */}
        <div className="absolute inset-0 flex justify-between z-0">
          {[...Array(10)].map((_, index) => (
            <motion.div
              key={index}
              className="h-full w-[9%] bg-mun-purple/30 origin-bottom"
              custom={index}
              initial="hidden"
              animate="visible"
              variants={stripeVariants}
            />
          ))}
        </div>
        
        <motion.div 
          className="container mx-auto relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center">
            <motion.h1 
              className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter leading-none mb-6"
              variants={itemVariants}
            >
              JBCN PAREL MUN
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Experience the world of international diplomacy and global problem-solving at the prestigious JBCN Middle School Model United Nations.
            </motion.p>
            
            <motion.div variants={itemVariants}>
              <RegisterButton className="mx-auto" />
            </motion.div>
          </div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="flex flex-col items-center">
            <span className="text-white/60 text-sm mb-2">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
              <motion.div 
                className="w-1 h-2 bg-white rounded-full"
                animate={{ 
                  y: [0, 12, 0],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 2
                }}
              />
            </div>
          </div>
        </motion.div>
      </section>
      
      {/* Navigation Panels */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-white text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 text-sm bg-mun-purple rounded-full mb-3">Explore</span>
            <br />
            Navigate Our Conference
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'ABOUT US', path: '/about', description: 'Learn about our mission, vision, and the organizing team behind JBCN PAREL MUN.' },
              { title: 'COMMITTEES', path: '/committees', description: 'Explore our diverse range of committees tailored for middle school delegates.' },
              { title: 'DELEGATE PREPARATION', path: '/delegate-preparation', description: 'Essential resources and guides to help you prepare for an exceptional MUN experience.' },
              { title: 'CONTACT US', path: '/contact', description: 'Reach out to our team for any queries or assistance regarding the conference.' }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="glass-panel p-6 flex flex-col h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(121,83,169,0.3)' }}
              >
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/70 mb-6 flex-grow">{item.description}</p>
                <Link 
                  to={item.path}
                  className="text-mun-purple-light hover:text-white flex items-center transition-colors duration-300"
                >
                  <span>Explore</span>
                  <svg 
                    className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-mun-purple/10 z-0"
          style={{
            backgroundImage: "radial-gradient(circle at 30% 50%, rgba(121,83,169,0.3) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(121,83,169,0.3) 0%, transparent 50%)"
          }}
        />
        
        <motion.div 
          className="container mx-auto relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Join the Diplomatic Journey?</h2>
            <p className="text-xl text-white/80 mb-10">
              Become part of a transformative experience that builds leadership, public speaking, and critical thinking skills.
            </p>
            <RegisterButton />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
