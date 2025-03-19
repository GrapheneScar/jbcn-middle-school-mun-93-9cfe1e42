
import { motion } from 'framer-motion';
import { SecretariatMember } from './types';

interface SecretariatSectionProps {
  secretariat: SecretariatMember[];
}

const SecretariatSection = ({ secretariat }: SecretariatSectionProps) => {
  return (
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
          <p className="text-white/80 max-w-2xl mx-auto mt-4">
            Meet our dedicated team of student leaders who organize and coordinate all aspects of JBCN Middle School MUN.
          </p>
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
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                
                {/* Overlay that's always visible */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80" />
                
                {/* Role and name - always visible at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform">
                  <h3 className="text-xl font-bold text-white">{person.name}</h3>
                  <p className="text-mun-purple-light">{person.role}</p>
                </div>
                
                {/* Bio that slides up on hover */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-black/80 p-6 transform transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                  <p className="text-white/90 text-sm">{person.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecretariatSection;
