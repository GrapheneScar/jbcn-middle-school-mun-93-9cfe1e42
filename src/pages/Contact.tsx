
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import PageTransition from '../components/PageTransition';
import StripeBackground from '../components/StripeBackground';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  ExternalLink,
  HelpCircle
} from 'lucide-react';
import { Button } from '../components/ui/button';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      
      {/* Hero Section */}
      <section className="pt-28 pb-12 md:pt-32 md:pb-16 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-mun-purple/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-mun-purple/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
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
            <motion.div 
              className="inline-block px-4 py-1.5 bg-mun-purple/20 rounded-full text-sm text-white/90 font-medium mb-6 border border-mun-purple/30"
              variants={fadeInUpVariants}
            >
              Get in Touch
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              variants={fadeInUpVariants}
            >
              We'd Love to Hear From You
            </motion.h1>
            
            <motion.p 
              className="text-lg text-white/70 mb-8"
              variants={fadeInUpVariants}
            >
              Have questions about JBCN Middle School MUN 2025? Our team is here to help.
              Reach out to us for information about registration, committees, or any other inquiries.
            </motion.p>
            
            <motion.div
              className="flex justify-center"
              variants={fadeInUpVariants}
            >
              <a href="mailto:mun@jbcnschool.edu.in" className="inline-block">
                <Button className="bg-mun-purple hover:bg-mun-purple-light">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Us
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Info Cards */}
      <section className="py-12 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Mail,
                title: "Email",
                content: "mohammadabdullah.khan@jbcnschool.edu.in",
                description: "Alternate - priyal.ganger@jbcnschool.edu.in",
                link: "mailto:mohammadabdullah.khan@jbcnschool.edu.in",
                color: "bg-gradient-to-br from-purple-600/20 to-indigo-600/20"
              },
              {
                icon: Phone,
                title: "Phone",
                content: "+91 98201 48168",
                description: "Mohammad Abdullah Khan, MUN Facilitator",
                link: "tel:+919820148168",
                color: "bg-gradient-to-br from-mun-purple/20 to-violet-600/20"
              },
              {
                icon: MapPin,
                title: "Location",
                content: "JBCN International School, Parel",
                description: "Parel, Mumbai, Maharashtra",
                link: "https://maps.google.com/?q=JBCN+International+School+Parel",
                color: "bg-gradient-to-br from-blue-600/20 to-mun-purple/20"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`glass-panel p-6 backdrop-blur-md rounded-xl border border-white/10 
                  hover:shadow-[0_0_25px_rgba(121,83,169,0.3)] transition-all duration-300 relative overflow-hidden group`}
              >
                <div className={`absolute inset-0 opacity-50 ${item.color} -z-10`} />
                
                <div className="mb-4 w-14 h-14 rounded-xl bg-mun-purple/30 flex items-center justify-center">
                  <item.icon className="text-mun-purple-light h-7 w-7" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/90 font-medium mb-1">{item.content}</p>
                <p className="text-white/60 text-sm mb-4">{item.description}</p>
                
                <a 
                  href={item.link}
                  target={item.title === "Location" ? "_blank" : undefined}
                  rel={item.title === "Location" ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center text-mun-purple-light hover:text-white transition-colors duration-300 text-sm font-medium"
                >
                  {item.title === "Location" ? "View on map" : "Contact us"}
                  <ExternalLink className="ml-1 h-3.5 w-3.5" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQs and Social Media */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* FAQs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <HelpCircle className="mr-3 text-mun-purple-light" />
                    Frequently Asked Questions
                  </h2>
                  
                  <div className="space-y-4">
                    {[
                      {
                        question: "When and where is the conference?",
                        answer: "JBCN Middle School MUN 2025 will be held on April 25th & 26th, 2025, at JBCN International School, Parel, Mumbai."
                      },
                      {
                        question: "Who can participate in the MUN?",
                        answer: "The conference is designed for middle school students (grades 6-8). Both first-time and experienced delegates are welcome to participate."
                      },
                      {
                        question: "What is the registration fee?",
                        answer: "The registration fee is ₹XXXX per delegate, which includes conference materials, lunches, and refreshments throughout the event."
                      },
                      {
                        question: "How many delegates can each school register?",
                        answer: "Schools can register up to XX delegates. For larger delegations, please contact us directly to discuss arrangements."
                      },
                      {
                        question: "When does registration open?",
                        answer: "Registration opens on March 24th, 2025, and closes on March XX, 2025."
                      },
                      {
                        question: "Are accommodation arrangements available?",
                        answer: "While we don't provide accommodation directly, we can suggest nearby hotels that offer special rates for conference participants."
                      }
                    ].map((faq, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="glass-panel p-5 rounded-lg border border-white/10 hover:border-mun-purple/30 transition-colors duration-300 hover:shadow-[0_0_15px_rgba(121,83,169,0.2)]"
                      >
                        <h3 className="font-semibold text-mun-purple-light mb-2">{faq.question}</h3>
                        <p className="text-white/80 text-sm">{faq.answer}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div className="glass-panel p-6 rounded-lg border border-white/10 bg-gradient-to-br from-mun-purple/10 to-transparent">
                  <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
                  
                  <div className="flex">
                    <a 
                      href="https://www.instagram.com/jbcnparelmun"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center space-x-2 px-4 py-2 rounded-full bg-mun-purple/20 hover:bg-mun-purple/40 transition-colors duration-300"
                    >
                      <Instagram className="w-4 h-4 text-white" />
                      <span className="text-sm text-white/90 group-hover:text-white">Instagram</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg h-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.6693193422396!2d72.83888867487576!3d18.99383658220396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf21727f6e19%3A0x3f9b56ce9474ee9!2sJBCN%20International%20School%2C%20Parel!5e0!3m2!1sen!2sin!4v1687946558834!5m2!1sen!2sin" 
                  width="100%" 
                  height="900" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="JBCN International School, Parel"
                  className="grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-500"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
