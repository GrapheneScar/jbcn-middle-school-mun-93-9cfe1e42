
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import PageTransition from '../components/PageTransition';
import ProfileCard from '../components/ProfileCard';
import StripeBackground from '../components/StripeBackground';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Placeholder image URLs - would be replaced with actual images
  const placeholderImage = "/lovable-uploads/533cf9ab-aaa1-47a9-8a45-ac085cd3b133.png";
  
  const secretariat = [
    { name: "Ruhika Bhende", title: "Secretary General", image: placeholderImage },
    { name: "Areeshah Mitra", title: "Deputy Secretary General", image: placeholderImage },
    { name: "Reeyan Mavani", title: "Charge D'Affairs", image: placeholderImage },
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
      
      {/* About MUN Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-3 py-1 text-sm bg-mun-purple rounded-full mb-4">Our Mission</span>
              <h2 className="text-3xl font-bold text-white mb-6">Cultivating Tomorrow's Leaders</h2>
              <p className="text-white/80 mb-4">
                JBCN Parel MUN is dedicated to creating an educational environment where young students can experience the dynamics of international relations and diplomacy through simulation.
              </p>
              <p className="text-white/80 mb-6">
                Our conference aims to foster critical thinking, public speaking, leadership, and problem-solving skills in middle school students, preparing them to be informed global citizens.
              </p>
              
              <div className="space-y-4">
                {[
                  "Research and Analysis Skills",
                  "Public Speaking and Debate",
                  "Consensus Building",
                  "Global Awareness"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-mun-purple flex items-center justify-center mt-1 mr-3">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/90">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              className="glass-panel p-8 relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="w-full h-full opacity-10 bg-gradient-to-br from-mun-purple to-transparent" />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6">What is Model UN?</h3>
                <p className="text-white/80 mb-4">
                  Model United Nations (MUN) is an educational simulation where students learn about diplomacy, international relations, and the United Nations.
                </p>
                <p className="text-white/80 mb-4">
                  Participants assume the role of delegates representing different countries and debate real-world issues, following parliamentary procedures similar to those used in actual UN committees.
                </p>
                <p className="text-white/80">
                  Through research, drafting, public speaking, and negotiation, students develop a deeper understanding of global challenges and the complexities of solving them through international cooperation.
                </p>
              </div>
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
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {secretariat.map((person, index) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
