
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import PageTransition from '../components/PageTransition';
import StripeBackground from '../components/StripeBackground';

const DelegatePreparation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState("research");
  
  const tabs = [
    { id: "research", label: "Research" },
    { id: "position", label: "Position Papers" },
    { id: "rules", label: "Rules of Procedure" },
    { id: "speaking", label: "Public Speaking" },
    { id: "attire", label: "Delegate Attire" }
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
              DELEGATE PREPARATION
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
              Comprehensive resources and tips to help you prepare effectively for your MUN committee and ensure a successful conference experience.
            </motion.p>
          </motion.div>
        </div>
      </section>
      
      {/* Preparation Guide Tabs */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center mb-8 gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-mun-purple text-white' 
                    : 'bg-mun-purple/20 text-white/70 hover:bg-mun-purple/30'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          
          {/* Tab Content */}
          <div className="glass-panel p-8 min-h-[400px]">
            {/* Research */}
            {activeTab === "research" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-white mb-6">Research Guidelines</h2>
                
                <p className="text-white/80 mb-6">
                  Thorough research is the foundation of a successful MUN experience. Start by understanding your assigned country and its stance on the committee topics.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-mun-purple-light mb-3">Country Profile Research</h3>
                    <ul className="space-y-2 text-white/80">
                      <li className="flex items-start">
                        <span className="text-mun-purple-light mr-2">•</span>
                        <span>Political system and government structure</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-mun-purple-light mr-2">•</span>
                        <span>Economic status and major industries</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-mun-purple-light mr-2">•</span>
                        <span>Key allies and adversaries</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-mun-purple-light mr-2">•</span>
                        <span>Historical context relevant to the topics</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-mun-purple-light mr-2">•</span>
                        <span>Membership in international organizations</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-mun-purple-light mb-3">Topic Research</h3>
                    <ul className="space-y-2 text-white/80">
                      <li className="flex items-start">
                        <span className="text-mun-purple-light mr-2">•</span>
                        <span>Background and history of the issue</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-mun-purple-light mr-2">•</span>
                        <span>Current status and recent developments</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-mun-purple-light mr-2">•</span>
                        <span>Previous UN actions and resolutions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-mun-purple-light mr-2">•</span>
                        <span>Your country's specific policies and statements</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-mun-purple-light mr-2">•</span>
                        <span>Potential solutions and their implications</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-mun-purple/10 rounded-lg">
                    <h4 className="font-semibold text-white mb-2">Recommended Resources:</h4>
                    <ul className="space-y-1 text-white/80">
                      <li>• Official United Nations documents and websites</li>
                      <li>• Your assigned country's government websites</li>
                      <li>• News sources from your country and international outlets</li>
                      <li>• Academic journals and research papers</li>
                      <li>• NGO reports related to the topics</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
            
            {/* Position Paper */}
            {activeTab === "position" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-white mb-6">Position Paper Guidelines</h2>
                
                <p className="text-white/80 mb-6">
                  A position paper outlines your country's stance on the committee topics and is typically submitted before the conference. It demonstrates your research and preparation.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-mun-purple-light mb-3">Position Paper Structure</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="glass-panel p-4">
                        <h4 className="font-semibold text-white mb-2">Introduction</h4>
                        <ul className="space-y-1 text-white/80 text-sm">
                          <li>• Brief overview of the topic</li>
                          <li>• Your country's general stance</li>
                          <li>• Key points to be elaborated</li>
                        </ul>
                      </div>
                      
                      <div className="glass-panel p-4">
                        <h4 className="font-semibold text-white mb-2">Country's Position</h4>
                        <ul className="space-y-1 text-white/80 text-sm">
                          <li>• Historical involvement with the issue</li>
                          <li>• Current policies and actions</li>
                          <li>• Domestic factors influencing position</li>
                        </ul>
                      </div>
                      
                      <div className="glass-panel p-4">
                        <h4 className="font-semibold text-white mb-2">Proposed Solutions</h4>
                        <ul className="space-y-1 text-white/80 text-sm">
                          <li>• Concrete and specific solutions</li>
                          <li>• How these align with your country</li>
                          <li>• Potential allies and bloc positions</li>
                        </ul>
                      </div>
                      
                      <div className="glass-panel p-4">
                        <h4 className="font-semibold text-white mb-2">Conclusion</h4>
                        <ul className="space-y-1 text-white/80 text-sm">
                          <li>• Summary of key points</li>
                          <li>• Restate commitment to issue</li>
                          <li>• Call to action for committee</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-mun-purple-light mb-3">Formatting Tips</h3>
                    <ul className="space-y-2 text-white/80">
                      <li className="flex items-start">
                        <span className="text-mun-purple-light mr-2">•</span>
                        <span>Keep your position paper to 1-2 pages per topic</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-mun-purple-light mr-2">•</span>
                        <span>Use formal diplomatic language</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-mun-purple-light mr-2">•</span>
                        <span>Include proper citations for any facts or statistics</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-mun-purple-light mr-2">•</span>
                        <span>Write in third person (e.g., "The Republic of..." rather than "We" or "I")</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-mun-purple-light mr-2">•</span>
                        <span>Proofread carefully for grammar and spelling</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
            
            {/* Rules of Procedure */}
            {activeTab === "rules" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-white mb-6">Rules of Procedure</h2>
                
                <p className="text-white/80 mb-6">
                  Understanding the rules of procedure is essential for effective participation in MUN debates. Familiarize yourself with these common procedures:
                </p>
                
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="glass-panel p-5">
                      <h3 className="text-lg font-semibold text-mun-purple-light mb-3">Formal Debate</h3>
                      <ul className="space-y-2 text-white/80 text-sm">
                        <li>• Speaker's List - Delegates speak in order</li>
                        <li>• Set speaking time (usually 1-2 minutes)</li>
                        <li>• Questions may be allowed after speeches</li>
                        <li>• Focus on general stance on topics</li>
                      </ul>
                    </div>
                    
                    <div className="glass-panel p-5">
                      <h3 className="text-lg font-semibold text-mun-purple-light mb-3">Moderated Caucus</h3>
                      <ul className="space-y-2 text-white/80 text-sm">
                        <li>• Focused discussion on specific aspect</li>
                        <li>• Chair recognizes speakers one by one</li>
                        <li>• Brief speaking time (30-60 seconds)</li>
                        <li>• No speakers list; raise placard to speak</li>
                      </ul>
                    </div>
                    
                    <div className="glass-panel p-5">
                      <h3 className="text-lg font-semibold text-mun-purple-light mb-3">Unmoderated Caucus</h3>
                      <ul className="space-y-2 text-white/80 text-sm">
                        <li>• Free-form discussion period</li>
                        <li>• Delegates may move around the room</li>
                        <li>• Form blocs and draft working papers</li>
                        <li>• Informal negotiation and alliance building</li>
                      </ul>
                    </div>
                    
                    <div className="glass-panel p-5">
                      <h3 className="text-lg font-semibold text-mun-purple-light mb-3">Voting Procedures</h3>
                      <ul className="space-y-2 text-white/80 text-sm">
                        <li>• Roll call vote on resolutions</li>
                        <li>• Options: Yes, No, Abstain, Pass</li>
                        <li>• Amendments voted on before full resolution</li>
                        <li>• Simple majority usually needed to pass</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-mun-purple-light mb-3">Common Points and Motions</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-mun-purple/10 rounded-lg">
                        <h4 className="font-semibold text-white">Point of Order</h4>
                        <p className="text-white/80 text-sm">Used when a delegate believes that proper procedure is not being followed.</p>
                      </div>
                      
                      <div className="p-3 bg-mun-purple/10 rounded-lg">
                        <h4 className="font-semibold text-white">Point of Personal Privilege</h4>
                        <p className="text-white/80 text-sm">Used when a delegate experiences personal discomfort (e.g., cannot hear the speaker).</p>
                      </div>
                      
                      <div className="p-3 bg-mun-purple/10 rounded-lg">
                        <h4 className="font-semibold text-white">Point of Information</h4>
                        <p className="text-white/80 text-sm">Used to ask questions to another delegate after their speech.</p>
                      </div>
                      
                      <div className="p-3 bg-mun-purple/10 rounded-lg">
                        <h4 className="font-semibold text-white">Motion for Moderated/Unmoderated Caucus</h4>
                        <p className="text-white/80 text-sm">To propose a caucus, specify topic, total time, and speaking time (for moderated).</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            
            {/* Public Speaking */}
            {activeTab === "speaking" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-white mb-6">Public Speaking Tips</h2>
                
                <p className="text-white/80 mb-6">
                  Effective public speaking is crucial for making your country's voice heard in committee. These tips will help you communicate confidently and persuasively.
                </p>
                
                <div className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="glass-panel p-5 flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-full bg-mun-purple flex items-center justify-center mb-3">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">Preparation</h3>
                      <p className="text-white/80 text-sm">Organize your thoughts with clear structure: opening, key points, conclusion.</p>
                    </div>
                    
                    <div className="glass-panel p-5 flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-full bg-mun-purple flex items-center justify-center mb-3">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">Volume & Clarity</h3>
                      <p className="text-white/80 text-sm">Speak clearly and loudly enough to be heard by everyone in the room.</p>
                    </div>
                    
                    <div className="glass-panel p-5 flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-full bg-mun-purple flex items-center justify-center mb-3">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">Pacing</h3>
                      <p className="text-white/80 text-sm">Speak at a moderate pace. Avoid rushing, especially when time is limited.</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-mun-purple-light">Speech Structure</h3>
                    
                    <div className="bg-mun-purple/10 p-5 rounded-lg">
                      <div className="mb-4">
                        <h4 className="font-semibold text-white mb-1">Opening</h4>
                        <p className="text-white/80 text-sm">
                          "Honorable Chair, distinguished delegates, the delegation of [Country] is pleased to address the committee on the important issue of [Topic]."
                        </p>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-white mb-1">Body</h4>
                        <p className="text-white/80 text-sm">
                          Present 2-3 key points about your country's position and proposed solutions. Use facts, statistics, and examples to support your arguments.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-white mb-1">Conclusion</h4>
                        <p className="text-white/80 text-sm">
                          "In conclusion, [Country] strongly urges the committee to consider [summary of key solutions]. Thank you, Honorable Chair."
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-mun-purple-light mb-3">Body Language Tips</h3>
                    <ul className="space-y-2 text-white/80">
                      <li className="flex items-start">
                        <span className="text-mun-purple-light mr-2">•</span>
                        <span>Stand straight with shoulders back when delivering speeches</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-mun-purple-light mr-2">•</span>
                        <span>Make eye contact with different delegates around the room</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-mun-purple-light mr-2">•</span>
                        <span>Use hand gestures naturally to emphasize points, but avoid excessive movement</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-mun-purple-light mr-2">•</span>
                        <span>Project confidence even if you feel nervous</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
            
            {/* Delegate Attire */}
            {activeTab === "attire" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-white mb-6">Delegate Attire</h2>
                
                <p className="text-white/80 mb-6">
                  Proper attire is an important aspect of MUN conferences, reflecting the formal nature of diplomatic settings. Follow these guidelines for appropriate Western business attire.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-mun-purple-light mb-4">For All Delegates</h3>
                    
                    <div className="space-y-4">
                      <div className="glass-panel p-4">
                        <h4 className="font-semibold text-white mb-2">General Guidelines</h4>
                        <ul className="space-y-1 text-white/80 text-sm">
                          <li>• Formal business attire is required for all sessions</li>
                          <li>• Clothes should be clean, pressed, and conservative</li>
                          <li>• No jeans, sneakers, or casual wear</li>
                          <li>• Minimize flashy accessories</li>
                          <li>• National attire may be worn if it's formal</li>
                        </ul>
                      </div>
                      
                      <div className="p-4 bg-mun-purple/10 rounded-lg">
                        <h4 className="font-semibold text-white mb-2">What to Bring</h4>
                        <ul className="space-y-1 text-white/80 text-sm">
                          <li>• Notepad and pens</li>
                          <li>• Research materials and position papers</li>
                          <li>• Water bottle</li>
                          <li>• Business cards (optional but useful)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-mun-purple-light mb-3">Specific Attire Guidelines</h3>
                      
                      <div className="space-y-3">
                        <div className="glass-panel p-4">
                          <h4 className="font-semibold text-white mb-1">Option 1</h4>
                          <ul className="space-y-1 text-white/80 text-sm">
                            <li>• Business suit (matching jacket and pants/skirt)</li>
                            <li>• Dress shirt or blouse</li>
                            <li>• Tie (for suits)</li>
                            <li>• Formal leather shoes</li>
                            <li>• Conservative socks/hosiery</li>
                          </ul>
                        </div>
                        
                        <div className="glass-panel p-4">
                          <h4 className="font-semibold text-white mb-1">Option 2</h4>
                          <ul className="space-y-1 text-white/80 text-sm">
                            <li>• Formal dress (knee-length or longer)</li>
                            <li>• Formal skirt with blouse</li>
                            <li>• Blazer or suit jacket</li>
                            <li>• Closed-toe shoes with moderate heel</li>
                            <li>• Conservative jewelry</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-mun-purple/20 rounded-lg">
                      <h4 className="font-semibold text-white mb-2">Remember</h4>
                      <p className="text-white/80 text-sm">
                        Your appearance contributes to the formal atmosphere of the conference and shows respect for the diplomatic process. When in doubt, err on the side of more formal rather than less.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default DelegatePreparation;
