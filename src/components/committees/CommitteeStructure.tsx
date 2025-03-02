
import { motion } from 'framer-motion';

const CommitteeStructure = () => {
  return (
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
  );
};

export default CommitteeStructure;
