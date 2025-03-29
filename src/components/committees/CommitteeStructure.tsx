
import { motion } from 'framer-motion';
import { Mic, Users, MessageSquare, FileText, Clock, List } from 'lucide-react';

const CommitteeStructure = () => {
  const debateModes = [
    {
      title: "General Speaker's List (GSL)",
      description: [
        "The default mode of debate.",
        "Delegates speak in order for a set time on the overall topic.",
        "Can be interrupted by moderated/unmoderated caucuses."
      ],
      icon: Mic
    },
    {
      title: "Special Speaker's List (SSL)",
      description: [
        "A separate speaker's list for a specific purpose (e.g., discussing amendments, procedural motions, etc.).",
        "Not common in all MUNs but useful in detailed discussions."
      ],
      icon: List
    },
    {
      title: "Moderated Caucus",
      description: [
        "Structured debate on a specific sub-topic.",
        "Shorter speaking times (e.g., 30–90 seconds).",
        "Delegates must raise their placards and get recognized to speak."
      ],
      icon: Clock
    },
    {
      title: "Unmoderated Caucus",
      description: [
        "Informal discussion where delegates move around and negotiate freely.",
        "Used for lobbying, alliances, and drafting resolutions."
      ],
      icon: Users
    },
    {
      title: "Round Robin",
      description: [
        "Each delegate gets a chance to speak once before anyone speaks again.",
        "Ensures equal participation.",
        "Often used in opening statements."
      ],
      icon: MessageSquare
    },
    {
      title: "Open Floor",
      description: [
        "Delegates can speak freely by raising placards instead of following a fixed list.",
        "Encourages spontaneous and interactive discussions."
      ],
      icon: FileText
    }
  ];

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-mun-purple/10 z-0"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(121,83,169,0.2) 0%, transparent 70%)"
        }}
      />
      
      <div className="container mx-auto relative z-10 max-w-5xl">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3 py-1 text-sm bg-mun-purple rounded-full mb-3">Committee Flow</span>
          <h2 className="text-3xl font-bold text-white">Debate Modes</h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Understanding the different debate formats will help you participate effectively in your committee sessions.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {debateModes.map((mode, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-6 rounded-xl border border-mun-purple/20 relative overflow-hidden group"
            >
              {/* Curved background gradient */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-mun-purple/10 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-mun-purple/20 flex items-center justify-center mb-4">
                  <mode.icon className="w-6 h-6 text-mun-purple-light" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{mode.title}</h3>
                <ul className="text-white/80 text-sm space-y-2">
                  {mode.description.map((line, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-mun-purple/70 mt-1.5 mr-2 flex-shrink-0"></div>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommitteeStructure;
