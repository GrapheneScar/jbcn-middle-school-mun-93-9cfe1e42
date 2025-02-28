
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import PageTransition from '../components/PageTransition';
import StripeBackground from '../components/StripeBackground';

const Committees = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const committees = [
    {
      name: "United Nations General Assembly",
      abbr: "UNGA",
      description: "The main deliberative body of the UN where all member states have equal representation.",
      topics: ["Climate Action and Sustainable Development", "Digital Rights and Cybersecurity"]
    },
    {
      name: "United Nations Security Council",
      abbr: "UNSC",
      description: "Responsible for maintaining international peace and security, the UNSC has the power to make binding decisions.",
      topics: ["Addressing Global Terrorism", "Conflicts in the Middle East"]
    },
    {
      name: "Economic and Social Council",
      abbr: "ECOSOC",
      description: "Coordinates the economic and social work of the United Nations and its specialized agencies.",
      topics: ["Economic Inequality and Poverty Reduction", "Access to Healthcare and Education"]
    },
    {
      name: "Human Rights Council",
      abbr: "HRC",
      description: "Promotes and protects human rights around the world, addressing violations and making recommendations.",
      topics: ["Children's Rights in Conflict Zones", "Freedom of Expression in the Digital Age"]
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
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
              variants={cardVariants}
            >
              COMMITTEES
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
              variants={cardVariants}
            >
              Explore our diverse range of committees designed to provide middle school students with an enriching simulation of international diplomacy.
            </motion.p>
          </motion.div>
        </div>
      </section>
      
      {/* Committees List */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid gap-8">
            {committees.map((committee, index) => (
              <motion.div
                key={committee.name}
                className="glass-panel overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={cardVariants}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 30px rgba(121,83,169,0.3)",
                  transition: { duration: 0.3 }
                }}
              >
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center mb-6">
                    <h3 className="text-2xl font-bold text-white mr-4">{committee.name}</h3>
                    <span className="inline-block px-3 py-1 text-sm bg-mun-purple/30 rounded-full mt-2 md:mt-0">
                      {committee.abbr}
                    </span>
                  </div>
                  
                  <p className="text-white/80 mb-6">
                    {committee.description}
                  </p>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Agenda Topics:</h4>
                    <ul className="space-y-2">
                      {committee.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start">
                          <div className="w-5 h-5 rounded-full bg-mun-purple flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                            <span className="text-white text-xs">{topicIndex + 1}</span>
                          </div>
                          <span className="text-white/90">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Committee Structure */}
      <section className="py-16 px-4 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-mun-purple/10 z-0"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, rgba(121,83,169,0.2) 0%, transparent 70%)"
          }}
        />
        
        <div className="container mx-auto relative z-10 max-w-4xl">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 text-sm bg-mun-purple rounded-full mb-3">Process</span>
            <h2 className="text-3xl font-bold text-white">Committee Structure</h2>
          </motion.div>
          
          <div className="glass-panel p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-bold text-white mb-4">During Sessions</h3>
                
                <ul className="space-y-4">
                  {[
                    "Roll Call & Setting the Agenda",
                    "Opening Statements",
                    "Moderated & Unmoderated Caucuses",
                    "Working Paper Development",
                    "Draft Resolution Presentation",
                    "Amendments & Voting Procedures"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-mun-purple/20 flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-mun-purple-light font-semibold">{index + 1}</span>
                      </div>
                      <span className="text-white/80 pt-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-bold text-white mb-4">Committee Roles</h3>
                
                <div className="space-y-4">
                  {[
                    { role: "Chair", description: "Presides over the committee, maintains order, and ensures rules of procedure are followed." },
                    { role: "Vice Chair", description: "Assists the Chair and may take over proceedings when needed." },
                    { role: "Rapporteur", description: "Keeps track of speakers list and assists with administrative tasks." },
                    { role: "Delegates", description: "Represent assigned countries, participate in debates, and work towards resolution." }
                  ].map((item, index) => (
                    <div key={index} className="glass-panel p-4">
                      <h4 className="text-lg font-semibold text-mun-purple-light mb-1">{item.role}</h4>
                      <p className="text-white/80 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Committees;
