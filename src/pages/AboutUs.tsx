import { motion } from 'framer-motion';
import { useEffect } from 'react';
import PageTransition from '../components/PageTransition';
import ProfileCard from '../components/ProfileCard';
import StripeBackground from '../components/StripeBackground';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const secretariat = [
    { name: "Ruhika Bhende", title: "Secretary General", image: "/lovable-uploads/ruhika.jpg" },
    { name: "Areehah Mitra", title: "Deputy Secretary General", image: "/lovable-uploads/areehah.jpg" },
    { name: "Riaan Mavani", title: "Charge D'Affairs", image: "/lovable-uploads/riaan.jpeg" },
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <PageTransition>
      <StripeBackground />
      
      {/* Header Banner */}
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
      
      {/* Secretariat Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 text-sm bg-mun-purple rounded-full mb-3">Our Team</span>
            <h2 className="text-3xl font-bold text-white">Secretariat</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto justify-items-center">
            {secretariat.map((person, index) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mx-auto w-full max-w-sm"
              >
                <ProfileCard 
                  name={person.name}
                  title={person.title}
                  imagePath={person.image}
                  imageAlt={`${person.name} - ${person.title}`}
                  reversed={index % 2 !== 0}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default AboutUs;
