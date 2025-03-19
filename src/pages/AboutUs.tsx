
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import PageTransition from '../components/PageTransition';
import StripeBackground from '../components/StripeBackground';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const secretariat = [
    { 
      name: "Ruhika Bhende", 
      image: "/lovable-uploads/ruhika.jpg",
      bio: "As Secretary General, Ruhika leads the conference with vision and diplomatic insight. Her experience in MUN spans multiple years and conferences. She is passionate about creating an enriching experience for all delegates."
    },
    { 
      name: "Areehah Mitra", 
      image: "/lovable-uploads/areehah.jpg",
      bio: "In her role as Deputy Secretary General, Areehah brings creativity and precision to the conference planning. She works closely with committee chairs to ensure a cohesive and challenging MUN experience."
    },
    { 
      name: "Riaan Mavani", 
      image: "/lovable-uploads/riaan.jpeg",
      bio: "As Director of Operations, Riaan manages the logistical elements of the conference with expertise. His attention to detail ensures that everything runs smoothly from registration to closing ceremonies."
    },
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
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {secretariat.map((person, index) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative group">
                  <div className="overflow-hidden rounded-xl aspect-[3/4]">
                    <img 
                      src={person.image} 
                      alt={person.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{person.name}</h3>
                  </div>
                  
                  {/* Expandable Bio */}
                  <div className="absolute inset-0 bg-black/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
                    <p className="text-white/90 text-center">{person.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default AboutUs;
