
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import PageTransition from '../components/PageTransition';
import StripeBackground from '../components/StripeBackground';
import { Check } from 'lucide-react';
import { Toaster } from '../components/ui/toaster';
import { useToast } from '../components/ui/use-toast';
import EasterEggAnimation from '../components/about/EasterEggAnimation';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { toast } = useToast();
  const [activeEasterEgg, setActiveEasterEgg] = useState<string | null>(null);

  const secretariat = [
    { 
      name: "Ruhika Bhende", 
      role: "Secretary General",
      image: "/lovable-uploads/ruhika.jpg",
      bio: "Greetings, Dear Delegates. I, Ruhika Bhende, am honoured to serve as your Secretary-General for JBCN Middle School MUN 2025. I am truly privileged to lead this platform that fosters diplomacy, critical thinking, and global awareness. My journey with MUN began in the 5th grade, and over the years, it has transformed the way I engage with international affairs, debate pressing global issues, and develop leadership skills.",
      easterEgg: null
    },
    { 
      name: "Areehah Mitra", 
      role: "Deputy-Secretary General",
      image: "/lovable-uploads/areehah.jpg",
      bio: "Greetings delegates, my name is Areehah Mitra and I am honored to be the Deputy Secretary General of JBCN Middle School MUN 2025. Middle School MUN for me serves as a tremendously bright learning opportunity for delegates in grades 6 through 8 as it allows for exhilarating debate as well as a pertinent stepping stone to diplomacy.",
      easterEgg: null
    },
    { 
      name: "Reeyan Mavani", 
      role: "Director of Operations",
      image: "/lovable-uploads/riaan.jpg",
      bio: "As the Director of Operations, I oversee the logistics and planning for our conference. I work to ensure all aspects of the event run smoothly, from registration to committee sessions. My goal is to create an organized environment where delegates can focus entirely on their diplomatic experience.",
      easterEgg: null
    },
  ];

  const departmentHeads = [
    {
      name: "Riddhi Bavadiya & Yana Mehta",
      role: "Head of Social Media",
      image: "/lovable-uploads/dishita.png",
      bio: "Managing the social media presence of JBCN MUN, we work to engage with delegates and spread awareness about our conference across various platforms.",
      easterEgg: {
        type: "hashtag",
        content: ["#JBCNMUN2025", "#DiplomacyMatters", "#FutureDiplomats", "#GlobalDebate", "#MiddleSchoolLeaders"]
      }
    },
    {
      name: "Samay Shah & Naaham Shah",
      role: "Head of Website Design",
      image: "/lovable-uploads/bharatvir.jpg",
      bio: "As the Heads of Website Design, we've created and maintain the digital platform that showcases JBCN MUN to the world. Our goal is to provide an intuitive and engaging experience for all visitors.",
      easterEgg: {
        type: "glitch",
        content: "404 Error – Just Kidding! Website functioning perfectly!"
      }
    },
    {
      name: "Aarna Amberkar",
      role: "Head of Press",
      image: "/lovable-uploads/shaurya.png",
      bio: "Leading the press team, I manage the documentation of conference proceedings and ensure that all key moments of debate and diplomacy are captured in our reporting.",
      easterEgg: {
        type: "news",
        content: ["BREAKING: Delegates Achieve World Peace in Record Time", "EXCLUSIVE: Secret Alliance Forms Between Committees", "JUST IN: Resolution Passes Unanimously, Delegates Celebrate"]
      }
    },
    {
      name: "Keerthana Reddy & Rayhan Parikh",
      role: "Head of Photography",
      image: "/lovable-uploads/geiv.jpeg",
      bio: "As the Photography team leads, we capture the visual narrative of JBCN MUN, preserving the moments of collaboration, debate, and achievement that define our conference.",
      easterEgg: {
        type: "camera",
        content: "📸"
      }
    },
    {
      name: "Radhika Dutt",
      role: "Head of Illustration",
      image: "/lovable-uploads/adhiraj.jpeg",
      bio: "Leading the illustration team, I create visual content that complements the MUN experience, from committee logos to promotional materials that capture the spirit of diplomacy.",
      easterEgg: {
        type: "sketch",
        content: "🎨"
      }
    }
  ];

  const handleEasterEgg = (role: string, easterEgg: any) => {
    setActiveEasterEgg(role);
    
    setTimeout(() => {
      setActiveEasterEgg(null);
    }, 3000);
    
    // Show different toast based on role
    if (role === "Head of Social Media") {
      const randomHashtag = easterEgg.content[Math.floor(Math.random() * easterEgg.content.length)];
      toast({
        title: "Trending Now!",
        description: randomHashtag,
        duration: 3000,
      });
    } else if (role === "Head of Website Design") {
      toast({
        title: "Website Glitch Detected",
        description: easterEgg.content,
        duration: 3000,
      });
    } else if (role === "Head of Press") {
      const randomNews = easterEgg.content[Math.floor(Math.random() * easterEgg.content.length)];
      toast({
        title: "BREAKING NEWS",
        description: randomNews,
        duration: 3000,
      });
    } else if (role === "Head of Photography") {
      toast({
        title: "Photo Captured!",
        description: "A moment preserved for MUN history.",
        duration: 3000,
      });
    } else if (role === "Head of Illustration") {
      toast({
        title: "Artistic Inspiration!",
        description: "A masterpiece in the making.",
        duration: 3000,
      });
    }
  };

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
      <Toaster />
      
      {/* Animation overlay for easter eggs */}
      <EasterEggAnimation activeEasterEgg={activeEasterEgg} />
      
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
      
      {/* New "What is Model UN" Section */}
      <section className="py-10 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* Left Column - Our Mission */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel p-8 md:p-10"
            >
              <div className="inline-block px-4 py-1 rounded-full bg-mun-purple mb-6 text-white text-sm">Our Mission</div>
              <h2 className="text-3xl font-bold text-white mb-4">Cultivating Tomorrow's Leaders</h2>
              
              <p className="text-white/80 mb-6">
                JBCN Parel MUN is dedicated to creating an educational environment where young students can experience the dynamics of international relations and diplomacy through simulation.
              </p>
              
              <p className="text-white/80 mb-6">
                Our conference aims to foster critical thinking, public speaking, leadership, and problem-solving skills in middle school students, preparing them to be informed global citizens.
              </p>
              
              <div className="space-y-3 mt-8">
                <div className="flex items-start">
                  <div className="mt-1 mr-3 w-5 h-5 rounded-full bg-mun-purple flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-white/90">Research and Analysis Skills</p>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-3 w-5 h-5 rounded-full bg-mun-purple flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-white/90">Public Speaking and Debate</p>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-3 w-5 h-5 rounded-full bg-mun-purple flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-white/90">Consensus Building</p>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-3 w-5 h-5 rounded-full bg-mun-purple flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-white/90">Global Awareness</p>
                </div>
              </div>
            </motion.div>
            
            {/* Right Column - What is Model UN */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel p-8 md:p-10"
            >
              <h2 className="text-3xl font-bold text-white mb-6">What is Model UN?</h2>
              
              <p className="text-white/80 mb-6">
                Model United Nations (MUN) is an educational simulation where students learn about diplomacy, international relations, and the United Nations.
              </p>
              
              <p className="text-white/80 mb-6">
                Participants assume the role of delegates representing different countries and debate real-world issues, following parliamentary procedures similar to those used in actual UN committees.
              </p>
              
              <p className="text-white/80">
                Through research, drafting, public speaking, and negotiation, students develop a deeper understanding of global challenges and the complexities of solving them through international cooperation.
              </p>
            </motion.div>
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
      
      {/* Secretariat Section (redesigned with hover effects) */}
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
      
      {/* Department Heads Section with Easter Eggs */}
      <section className="py-16 px-4 bg-black/30">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 text-sm bg-mun-purple rounded-full mb-3">MUN Support</span>
            <h2 className="text-3xl font-bold text-white">Department Heads</h2>
            <p className="text-white/80 max-w-2xl mx-auto mt-4">
              These talented individuals lead specialized teams that support all aspects of our conference.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {departmentHeads.map((person, index) => (
              <motion.div
                key={person.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col"
              >
                <div 
                  className="glass-panel p-6 text-center hover:shadow-[0_0_15px_rgba(121,83,169,0.3)] transition-all duration-300 flex-grow cursor-pointer relative overflow-hidden"
                  onClick={() => handleEasterEgg(person.role, person.easterEgg)}
                >
                  <div className="w-20 h-20 mx-auto rounded-full overflow-hidden mb-4">
                    <img 
                      src={person.image} 
                      alt={person.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{person.name}</h3>
                  <p className="text-mun-purple-light text-sm mb-4">{person.role}</p>
                  <p className="text-white/80 text-sm">{person.bio}</p>
                  
                  <div className="absolute bottom-2 right-2">
                    <div className="text-xs text-white/40 italic">Click for surprise</div>
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
