
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NavigationPanels = () => {
  const navigationItems = [
    { title: 'ABOUT US', path: '/about', description: 'Learn about our mission, vision, and the organizing team behind JBCN PAREL MUN.' },
    { title: 'COMMITTEES', path: '/committees', description: 'Explore our diverse range of committees tailored for middle school delegates.' },
    { title: 'DELEGATE PREPARATION', path: '/delegate-preparation', description: 'Essential resources and guides to help you prepare for an exceptional MUN experience.' },
    { title: 'CONTACT US', path: '/contact', description: 'Reach out to our team for any queries or assistance regarding the conference.' }
  ];

  return (
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
          {navigationItems.map((item, index) => (
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
  );
};

export default NavigationPanels;
