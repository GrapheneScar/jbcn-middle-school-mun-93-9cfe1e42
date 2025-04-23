import { useEffect, useState } from 'react';
import PageTransition from '../components/PageTransition';
import StripeBackground from '../components/StripeBackground';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../components/ui/button';
import { FileText, BookOpen, Users, ArrowRight, AlertCircle, Mic, FileCheck, Book, Award, Pencil } from 'lucide-react';
import { Link } from 'react-router-dom';

// Types for preparation topics
type PreparationTopic = 'research' | 'position-papers' | 'rules-of-procedure' | 'public-speaking' | 'delegate-attire';

// Delegate preparation research tabs component
const ResearchTabs = ({
  activeTab,
  setActiveTab
}: {
  activeTab: PreparationTopic;
  setActiveTab: (tab: PreparationTopic) => void;
}) => {
  const tabs: Array<{
    id: PreparationTopic;
    label: string;
    icon: React.ReactNode;
  }> = [{
    id: 'research',
    label: 'Research',
    icon: <Book className="w-4 h-4 mr-1" />
  }, {
    id: 'position-papers',
    label: 'Position Papers',
    icon: <FileCheck className="w-4 h-4 mr-1" />
  }, {
    id: 'rules-of-procedure',
    label: 'Rules of Procedure',
    icon: <Award className="w-4 h-4 mr-1" />
  }, {
    id: 'public-speaking',
    label: 'Public Speaking',
    icon: <Mic className="w-4 h-4 mr-1" />
  }, {
    id: 'delegate-attire',
    label: 'Delegate Attire',
    icon: <Pencil className="w-4 h-4 mr-1" />
  }];
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    delay: 0.4,
    duration: 0.5
  }} className="mb-10 max-w-4xl mx-auto">
      <div className="flex flex-wrap justify-center gap-3">
        {tabs.map(tab => <div key={tab.id} className={`${activeTab === tab.id ? 'bg-mun-purple' : 'bg-mun-purple/40'} 
                       text-white px-4 py-2 rounded-full text-sm cursor-pointer 
                       hover:bg-mun-purple transition-colors duration-300 flex items-center`} onClick={() => setActiveTab(tab.id)}>
            {tab.icon}
            {tab.label}
          </div>)}
      </div>
    </motion.div>;
};

// Content sections for each preparation topic
const ResearchContent = () => <motion.div initial={{
  opacity: 0,
  y: 20
}} animate={{
  opacity: 1,
  y: 0
}} exit={{
  opacity: 0,
  y: -20
}} transition={{
  duration: 0.5
}} className="glass-panel p-8 rounded-xl text-left text-white/90 max-w-4xl mx-auto mb-12">
    <h2 className="text-2xl font-bold text-white mb-6">Research Guidelines</h2>
    <p className="mb-4">Thorough research is the foundation of a successful MUN experience. Start by understanding your assigned country and its stance on the committee topics.</p>
    
    <div className="mb-8">
      <h3 className="text-xl font-bold text-mun-purple-light mb-3 text-center">Allocation Profile Research</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li>Political system and government structure</li>
        <li>Economic status and major industries</li>
        <li>Key allies and adversaries</li>
        <li>Historical context relevant to the topics</li>
        <li>Membership in international organizations</li>
      </ul>
    </div>
    
    <div className="mb-8">
      <h3 className="text-xl font-bold text-mun-purple-light mb-3 text-center">Topic Research</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li>Background and history of the issue</li>
        <li>Current status and recent developments</li>
        <li>Previous UN actions and resolutions</li>
        <li>Your country's specific policies and statements</li>
        <li>Potential solutions and their implications</li>
      </ul>
    </div>
    
    <div className="bg-black/30 p-6 rounded-lg">
      <h3 className="text-lg font-bold text-white mb-3 text-center">Recommended Resources:</h3>
      <ul className="list-disc ml-6 space-y-1 text-white/80">
        <li>Official United Nations documents and websites</li>
        <li>Your assigned country's government websites</li>
        <li>News sources from your country and international outlets</li>
        <li>Academic journals and research papers</li>
        <li>NGO reports related to the topics</li>
      </ul>
    </div>
  </motion.div>;
const PositionPapersContent = () => <motion.div initial={{
  opacity: 0,
  y: 20
}} animate={{
  opacity: 1,
  y: 0
}} exit={{
  opacity: 0,
  y: -20
}} transition={{
  duration: 0.5
}} className="glass-panel p-8 rounded-xl text-left text-white/90 max-w-4xl mx-auto mb-12">
    <h2 className="text-2xl font-bold text-white mb-6">Position Paper Guidelines</h2>
    <p className="mb-4">A position paper outlines your country's stance on the committee topics and demonstrates your understanding of the issues.</p>
    
    <div className="mb-8">
      <h3 className="text-xl font-bold text-mun-purple-light mb-3 text-center">Position Paper Structure</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>Introduction:</strong> Brief overview of the topic and its relevance to your country</li>
        <li><strong>Country's Position:</strong> Your country's official stance, including relevant statements and policies</li>
        <li><strong>Past Actions:</strong> What your country has already done to address the issue</li>
        <li><strong>Proposed Solutions:</strong> Your country's proposals for addressing the issue</li>
        <li><strong>Conclusion:</strong> Summary of your country's position and objectives</li>
      </ul>
    </div>
    
    <div className="mb-8">
      <h3 className="text-xl font-bold text-mun-purple-light mb-3 text-center">Formatting Guidelines</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li>1-2 pages per topic</li>
        <li>Times New Roman, 12pt font</li>
        <li>Single-spaced with 1-inch margins</li>
        <li>Include committee, country, and delegate name as a header</li>
        <li>Citations in MLA or APA format</li>
      </ul>
    </div>
    
    <div className="bg-black/30 p-6 rounded-lg">
      <h3 className="text-lg font-bold text-white mb-3">Tips for Effective Position Papers:</h3>
      <ul className="list-disc ml-6 space-y-1 text-white/80">
        <li>Use formal language and avoid first-person pronouns</li>
        <li>Include specific examples and data to support your arguments</li>
        <li>Align your proposed solutions with your country's actual policies</li>
        <li>Be concise but comprehensive</li>
        <li>Submit by the deadline specified by your committee</li>
      </ul>
    </div>
  </motion.div>;
const RulesOfProcedureContent = () => <motion.div initial={{
  opacity: 0,
  y: 20
}} animate={{
  opacity: 1,
  y: 0
}} exit={{
  opacity: 0,
  y: -20
}} transition={{
  duration: 0.5
}} className="glass-panel p-8 rounded-xl text-left text-white/90 max-w-4xl mx-auto mb-12">
    <h2 className="text-2xl font-bold text-white mb-6">Rules of Procedure</h2>
    <p className="mb-4">Understanding the rules of procedure is crucial for effective participation in committee sessions.</p>
    
    <div className="mb-8">
      <h3 className="text-xl font-bold text-mun-purple-light mb-3 text-center">Types of Debate</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>Formal Debate:</strong> Structured speeches followed by questions</li>
        <li><strong>Moderated Caucus:</strong> Focused discussion on a specific aspect of the topic</li>
        <li><strong>Unmoderated Caucus:</strong> Informal discussion to draft resolutions and build alliances</li>
        <li><strong>Consultation of the Whole:</strong> Semi-formal discussion led by the chair</li>
      </ul>
    </div>
    
    <div className="mb-8">
      <h3 className="text-xl font-bold text-mun-purple-light mb-3 text-center">Common Motions</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>Motion for a Moderated Caucus:</strong> Specify topic, total time, and speaking time</li>
        <li><strong>Motion for an Unmoderated Caucus:</strong> Specify total time and purpose</li>
        <li><strong>Motion to Introduce a Working Paper/Draft Resolution:</strong> Present your document to the committee</li>
        <li><strong>Motion to Move into Voting Procedure:</strong> Begin voting on draft resolutions</li>
        <li><strong>Point of Order:</strong> Point out a procedural error</li>
        <li><strong>Point of Information:</strong> Ask a question to a speaker</li>
      </ul>
    </div>
    
    <div className="bg-black/30 p-6 rounded-lg">
      <h3 className="text-lg font-bold text-white mb-3 text-center">Resolution Process:</h3>
      <ol className="list-decimal ml-6 space-y-1 text-white/80">
        <li>Working Papers: Initial ideas and proposals</li>
        <li>Draft Resolutions: Formal documents with sponsors and signatories</li>
        <li>Amendments: Changes to draft resolutions</li>
        <li>Voting Procedure: Final adoption of resolutions</li>
      </ol>
      <p className="mt-4 text-mun-purple-light">NOTE: Your allocation will be emailed to you via your registered email.</p>
    </div>
  </motion.div>;
const PublicSpeakingContent = () => <motion.div initial={{
  opacity: 0,
  y: 20
}} animate={{
  opacity: 1,
  y: 0
}} exit={{
  opacity: 0,
  y: -20
}} transition={{
  duration: 0.5
}} className="glass-panel p-8 rounded-xl text-left text-white/90 max-w-4xl mx-auto mb-12">
    <h2 className="text-2xl font-bold text-white mb-6">Public Speaking Guide</h2>
    <p className="mb-4">Effective public speaking is key to successful diplomacy in Model UN.</p>
    
    <div className="mb-8">
      <h3 className="text-xl font-bold text-mun-purple-light mb-3 text-center">Opening Speech</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li>Keep it concise (typically 1-1.5 minutes)</li>
        <li>Introduce your country's position and priorities</li>
        <li>Highlight 2-3 key issues or solutions</li>
        <li>End with a call to action or statement of intent</li>
      </ul>
    </div>
    
    <div className="mb-8">
      <h3 className="text-xl font-bold text-mun-purple-light mb-3 text-center">Speaking Techniques</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>Structure:</strong> Clear introduction, body, and conclusion</li>
        <li><strong>Pace:</strong> Speak slowly and deliberately</li>
        <li><strong>Tone:</strong> Use a confident, diplomatic tone</li>
        <li><strong>Body Language:</strong> Stand straight, make eye contact, use purposeful gestures</li>
        <li><strong>Voice Modulation:</strong> Vary volume and inflection for emphasis</li>
      </ul>
    </div>
    
    <div className="bg-black/30 p-6 rounded-lg">
      <h3 className="text-lg font-bold text-white mb-3 text-center">Practice Tips:</h3>
      <ul className="list-disc ml-6 space-y-1 text-white/80">
        <li>Rehearse your speeches aloud multiple times</li>
        <li>Time yourself to stay within allotted speaking time</li>
        <li>Record yourself and review for improvement</li>
        <li>Practice responding to unexpected questions</li>
        <li>Prepare speaking points on key aspects of the topic</li>
      </ul>
    </div>
  </motion.div>;
const DelegateAttireContent = () => <motion.div initial={{
  opacity: 0,
  y: 20
}} animate={{
  opacity: 1,
  y: 0
}} exit={{
  opacity: 0,
  y: -20
}} transition={{
  duration: 0.5
}} className="glass-panel p-8 rounded-xl text-left text-white/90 max-w-4xl mx-auto mb-12">
    <h2 className="text-2xl font-bold text-white mb-6">Delegate Attire</h2>
    <p className="mb-4">Professional appearance is an important aspect of Model UN conferences.</p>
    
    <div className="mb-8">
      <h3 className="text-xl font-bold text-mun-purple-light mb-3">Western Business Attire</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="font-bold text-white mb-2">Boys:</h4>
          <ul className="list-disc ml-6 space-y-2">
            <li>Business suit (solid colors: navy, black, gray)</li>
            <li>Dress shirt (white or light colors)</li>
            <li>Conservative tie</li>
            <li>Dress shoes (black or brown) with matching socks</li>
            <li>Belt matching shoes</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-2">Girls:</h4>
          <ul className="list-disc ml-6 space-y-2">
            <li>Business suit or blazer with professional skirt/pants</li>
            <li>Blouse or dress shirt</li>
            <li>Closed-toe dress shoes (comfortable height)</li>
            <li>Conservative accessories</li>
            <li>Optional: Pantyhose for skirts</li>
          </ul>
        </div>
      </div>
    </div>
    
    <div className="mb-8">
      <h3 className="text-xl font-bold text-mun-purple-light mb-3 text-center">General Guidelines</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li>Attire should be conservative, clean, and pressed</li>
        <li>Avoid flashy accessories or distracting patterns</li>
        <li>Hair should be neat and professional</li>
        <li>Minimal cologne/perfume</li>
        <li>National dress is acceptable if worn formally and respectfully</li>
      </ul>
    </div>
    
    <div className="bg-black/30 p-6 rounded-lg">
      <h3 className="text-lg font-bold text-white mb-3 text-center">What Not to Wear:</h3>
      <ul className="list-disc ml-6 space-y-1 text-white/80">
        <li>Jeans, t-shirts, or casual attire</li>
        <li>Sneakers or athletic shoes</li>
        <li>Revealing or tight-fitting clothing</li>
        <li>Hats (except for religious purposes)</li>
        <li>Excessive or flashy jewelry</li>
      </ul>
    </div>
  </motion.div>;

// Update the import paths to match your project structure
const DelegatePreparation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [activeTab, setActiveTab] = useState<PreparationTopic>('research');
  return <PageTransition>
      <StripeBackground />
      <div className="pt-32 pb-20 px-4 container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} className="mb-12">
            <h1 className="text-4xl font-bold text-white mb-6">Delegate Preparation</h1>
            <p className="text-white/80 mb-8">
              Preparing for a Model United Nations conference requires thorough research, 
              practice, and understanding of the committee procedures. Here are some 
              resources to help you prepare for JBCN Middle School MUN 2025.
            </p>
          </motion.div>

          {/* Research Tabs */}
          <ResearchTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          
          {/* Content based on active tab */}
          <AnimatePresence mode="wait">
            {activeTab === 'research' && <ResearchContent />}
            {activeTab === 'position-papers' && <PositionPapersContent />}
            {activeTab === 'rules-of-procedure' && <RulesOfProcedureContent />}
            {activeTab === 'public-speaking' && <PublicSpeakingContent />}
            {activeTab === 'delegate-attire' && <DelegateAttireContent />}
          </AnimatePresence>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2,
          duration: 0.5
        }} className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Preparation Timeline</h2>
            
            <div className="glass-panel p-6 text-left">
              <div className="relative border-l-2 border-mun-purple ml-6 pb-6">
                {/* Timeline items */}
                <div className="mb-10 ml-10">
                  <div className="absolute -left-3 mt-1.5">
                    <div className="w-6 h-6 rounded-full bg-mun-purple flex items-center justify-center">
                      <span className="text-white text-sm">1</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white">4 Weeks Before</h3>
                  <ul className="list-disc ml-6 mt-2 text-white/80">
                    <li>Research your assigned country's position on the committee topic</li>
                    <li>Read the study guide thoroughly</li>
                    <li>Research the committee's history and mandate</li>
                    <li>Begin forming your country's stance on the issue</li>
                  </ul>
                </div>
                
                <div className="mb-10 ml-10">
                  <div className="absolute -left-3 mt-1.5">
                    <div className="w-6 h-6 rounded-full bg-mun-purple flex items-center justify-center">
                      <span className="text-white text-sm">2</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white">2-3 Weeks Before</h3>
                  <ul className="list-disc ml-6 mt-2 text-white/80">
                    <li>Write your position paper</li>
                    <li>Research potential allies in the committee</li>
                    <li>Practice parliamentary procedure</li>
                    <li>Prepare your opening speech</li>
                  </ul>
                </div>
                
                <div className="mb-10 ml-10">
                  <div className="absolute -left-3 mt-1.5">
                    <div className="w-6 h-6 rounded-full bg-mun-purple flex items-center justify-center">
                      <span className="text-white text-sm">3</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white">1 Week Before</h3>
                  <ul className="list-disc ml-6 mt-2 text-white/80">
                    <li>Refine your opening speech</li>
                    <li>Practice delivering speeches within time limits</li>
                    <li>Review the Rules of Procedure</li>
                    <li>Research potential solutions to propose during the conference</li>
                  </ul>
                </div>
                
                <div className="ml-10">
                  <div className="absolute -left-3 mt-1.5">
                    <div className="w-6 h-6 rounded-full bg-mun-purple flex items-center justify-center">
                      <span className="text-white text-sm">4</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white">Day Before</h3>
                  <ul className="list-disc ml-6 mt-2 text-white/80">
                    <li>Prepare your materials and clothing</li>
                    <li>Review your research one more time</li>
                    <li>Get a good night's sleep</li>
                    <li>Check that you have printed all necessary documents</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4,
          duration: 0.5
        }} className="mb-16 text-center">
            <h2 className="text-2xl font-bold text-white mb-6">Tips for First-Time Delegates</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-panel p-6">
                <h3 className="text-xl font-bold text-white mb-4">Research Thoroughly</h3>
                <p className="text-white/80">
                  Make sure you understand your country's position, the committee topic, and the 
                  UN's previous actions on the issue. The more you know, the more confident you'll feel.
                </p>
              </div>
              
              <div className="glass-panel p-6">
                <h3 className="text-xl font-bold text-white mb-4">Speak Up</h3>
                <p className="text-white/80">
                  Even if you're nervous, challenge yourself to speak at least once per session. 
                  The more you participate, the more comfortable you'll become.
                </p>
              </div>
              
              <div className="glass-panel p-6">
                <h3 className="text-xl font-bold text-white mb-4">Follow Procedure</h3>
                <p className="text-white/80">
                  Pay attention to the flow of debate. Understanding when to make motions or 
                  when to speak is crucial to effective participation.
                </p>
              </div>
              
              <div className="glass-panel p-6">
                <h3 className="text-xl font-bold text-white mb-4">Collaborate</h3>
                <p className="text-white/80">
                  MUN is about diplomacy. Work with other delegates during unmoderated caucuses 
                  to form alliances and draft resolutions together.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.6,
          duration: 0.5
        }} className="text-center">
            <h2 className="text-2xl font-bold text-white mb-6">Essential Resources</h2>
            
            <div className="glass-panel p-8 mt-6 bg-gradient-to-br from-mun-purple/20 to-transparent border border-mun-purple/30">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg hover:bg-black/40 transition-colors">
                  <BookOpen className="w-10 h-10 text-mun-purple-light mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Rules of Procedure</h3>
                  <p className="text-white/70 text-sm mb-4 text-center">Master the rules that govern debate in all committees</p>
                  <a href="https://drive.google.com/file/d/19K56bVlyhd2piUwUKueHynqf4tN7zAei/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-mun-purple-light hover:text-white text-sm transition-colors">
                    View Rules
                  </a>
                </div>
                
                <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg hover:bg-black/40 transition-colors">
                  <FileText className="w-10 h-10 text-mun-purple-light mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Document Examples</h3>
                  <p className="text-white/70 text-sm mb-4 text-center">Examples of position papers, resolutions, and more</p>
                </div>
                
                <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg hover:bg-black/40 transition-colors">
                  <Users className="w-10 h-10 text-mun-purple-light mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Committee Guides</h3>
                  <p className="text-white/70 text-sm mb-4 text-center">Detailed guides for each committee topic</p>
                </div>
              </div>
              
              {/* Country Matrix - Coming Soon */}
              <div className="p-4 bg-black/30 rounded-lg border border-yellow-500/30 mb-8">
                <div className="flex items-center justify-center mb-3">
                  <AlertCircle className="text-yellow-500 mr-2" />
                  <h3 className="text-lg font-semibold text-white">Country Matrix - IS OUT!</h3>
                </div>
                <p className="text-white/70 text-sm text-center">Check out comprehensive country matrix. This will help delegates identify their country's stance on various issues and help the delegate understand their allies and enemies.</p>
              </div>
              
              <Link to="/resources">
                <Button className="bg-mun-purple hover:bg-mun-purple-light transition-colors">
                  <span>Access All Delegate Resources</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              
              <p className="text-white/70 italic mt-4">
                All delegates will receive detailed study guides for their specific committees after registration.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>;
};
export default DelegatePreparation;