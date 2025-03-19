
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
      role: "Secretary General",
      image: "/lovable-uploads/ruhika.jpg",
      bio: "As Secretary General, Ruhika leads the conference with vision and diplomatic insight. Her experience in MUN spans multiple years and conferences. She is passionate about creating an enriching experience for all delegates."
    },
    { 
      name: "Areehah Mitra", 
      role: "Deputy Secretary General",
      image: "/lovable-uploads/areehah.jpg",
      bio: "In her role as Deputy Secretary General, Areehah brings creativity and precision to the conference planning. She works closely with committee chairs to ensure a cohesive and challenging MUN experience."
    },
    { 
      name: "Riaan Mavani", 
      role: "Director of Operations",
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
      
      {/* Mission & Vision Section */}
      <section className="py-16 px-4 bg-black/30">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              className="glass-panel p-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <span className="inline-block w-10 h-10 rounded-full bg-mun-purple flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </span>
                Our Mission
              </h2>
              
              <p className="text-white/80 mb-4">
                JBCN Parel MUN is dedicated to providing a transformative educational experience for middle school students. We aim to cultivate a deep understanding of global issues, foster critical thinking, and develop diplomatic skills that will serve students throughout their academic and professional careers.
              </p>
              
              <p className="text-white/80">
                Through active participation in simulated diplomatic scenarios, students learn to research, debate, collaborate, and develop innovative solutions to complex international challenges.
              </p>
            </motion.div>
            
            <motion.div 
              className="glass-panel p-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <span className="inline-block w-10 h-10 rounded-full bg-mun-purple flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                Our Vision
              </h2>
              
              <p className="text-white/80 mb-4">
                We envision a world where young minds are empowered to become future leaders who approach global challenges with diplomacy, empathy, and innovative thinking. We strive to be the premier Model United Nations conference for middle school students in India.
              </p>
              
              <p className="text-white/80">
                By creating an inclusive, supportive environment for students to develop their diplomatic skills, we aim to inspire the next generation of global citizens who will shape a more peaceful, just, and sustainable world.
              </p>
            </motion.div>
          </div>
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
                <div className="relative group overflow-hidden rounded-xl">
                  <div className="aspect-[3/4]">
                    <img 
                      src={person.image} 
                      alt={person.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Bio overlay that slides up on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform transition-transform duration-300">
                    <h3 className="text-2xl font-bold text-white">{person.name}</h3>
                  </div>
                  
                  <div className="absolute inset-x-0 bottom-0 bg-black/90 p-6 transform transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                    <p className="text-white/90 text-center">{person.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 px-4 bg-black/30">
        <div className="container mx-auto max-w-5xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 text-sm bg-mun-purple rounded-full mb-3">Our Principles</span>
            <h2 className="text-3xl font-bold text-white">Core Values</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div 
              className="glass-panel p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 mx-auto bg-mun-purple/30 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-mun-purple-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Integrity</h3>
              <p className="text-white/80">We uphold the highest standards of honesty, fairness, and ethical conduct in all aspects of our conference.</p>
            </motion.div>
            
            <motion.div 
              className="glass-panel p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-16 h-16 mx-auto bg-mun-purple/30 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-mun-purple-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Inclusivity</h3>
              <p className="text-white/80">We create a welcoming environment where diverse perspectives are valued and all participants feel respected.</p>
            </motion.div>
            
            <motion.div 
              className="glass-panel p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-16 h-16 mx-auto bg-mun-purple/30 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-mun-purple-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
              <p className="text-white/80">We encourage creative thinking and innovative approaches to diplomatic challenges in a rapidly changing world.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default AboutUs;
