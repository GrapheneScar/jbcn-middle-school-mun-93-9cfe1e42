
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useToast } from '../hooks/use-toast';
import PageTransition from '../components/PageTransition';
import StripeBackground from '../components/StripeBackground';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Send, 
  Instagram, 
  Twitter, 
  Facebook, 
  Linkedin, 
  ExternalLink,
  HelpCircle
} from 'lucide-react';
import { Button } from '../components/ui/button';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    school: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll get back to you soon.",
        variant: "default",
      });
      setFormData({
        name: '',
        email: '',
        school: '',
        message: ''
      });
    }, 1500);
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
              className="flex flex-wrap justify-center gap-3"
              variants={fadeInUpVariants}
            >
              <a href="#contact-form" className="inline-block">
                <Button className="bg-mun-purple hover:bg-mun-purple-light">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </a>
              
              <a href="mailto:mun@jbcnschool.edu.in" className="inline-block">
                <Button variant="outline" className="border-mun-purple/50 text-white hover:bg-mun-purple/10">
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
                content: "mun@jbcnschool.edu.in",
                description: "For general inquiries and information",
                link: "mailto:mun@jbcnschool.edu.in",
                color: "bg-gradient-to-br from-purple-600/20 to-indigo-600/20"
              },
              {
                icon: Phone,
                title: "Phone",
                content: "+91 22 6122 1900",
                description: "Monday to Friday, 9am to 4pm",
                link: "tel:+912261221900",
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
      
      {/* Contact Form and FAQs */}
      <section className="py-12 px-4" id="contact-form">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="glass-panel p-8 rounded-xl border border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-mun-purple/10 to-transparent -z-10" />
                
                <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-white text-sm font-medium mb-2">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-mun-purple/30 text-white focus:outline-none focus:ring-2 focus:ring-mun-purple focus:border-transparent transition"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-white text-sm font-medium mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-mun-purple/30 text-white focus:outline-none focus:ring-2 focus:ring-mun-purple focus:border-transparent transition"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="school" className="block text-white text-sm font-medium mb-2">School</label>
                    <input
                      type="text"
                      id="school"
                      name="school"
                      value={formData.school}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-mun-purple/30 text-white focus:outline-none focus:ring-2 focus:ring-mun-purple focus:border-transparent transition"
                      placeholder="Your school name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-white text-sm font-medium mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-mun-purple/30 text-white focus:outline-none focus:ring-2 focus:ring-mun-purple focus:border-transparent transition"
                      placeholder="Your message"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-mun-purple hover:bg-mun-purple-light text-white py-3 px-6 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
            
            {/* FAQs */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
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
                        answer: "JBCN Middle School MUN 2025 will be held on August 15-17, 2025, at JBCN International School, Parel, Mumbai."
                      },
                      {
                        question: "Who can participate in the MUN?",
                        answer: "The conference is designed for middle school students (grades 6-8). Both first-time and experienced delegates are welcome to participate."
                      },
                      {
                        question: "What is the registration fee?",
                        answer: "The registration fee is ₹2500 per delegate, which includes conference materials, lunches, and refreshments throughout the event."
                      },
                      {
                        question: "How many delegates can each school register?",
                        answer: "Schools can register up to 15 delegates. For larger delegations, please contact us directly to discuss arrangements."
                      },
                      {
                        question: "When does registration open?",
                        answer: "Registration opens on March 1, 2025, and closes on July 15, 2025. Early bird discounts are available until May 1, 2025."
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
                  
                  <div className="flex flex-wrap gap-3">
                    {[
                      { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/jbcnparelmun' },
                      { name: 'Twitter', icon: Twitter, url: '#' },
                      { name: 'Facebook', icon: Facebook, url: '#' },
                      { name: 'LinkedIn', icon: Linkedin, url: '#' },
                    ].map((platform) => (
                      <a 
                        key={platform.name} 
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center space-x-2 px-4 py-2 rounded-full bg-mun-purple/20 hover:bg-mun-purple/40 transition-colors duration-300"
                      >
                        <platform.icon className="w-4 h-4 text-white" />
                        <span className="text-sm text-white/90 group-hover:text-white">{platform.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-xl overflow-hidden border border-white/10 shadow-lg"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.6693193422396!2d72.83888867487576!3d18.99383658220396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf21727f6e19%3A0x3f9b56ce9474ee9!2sJBCN%20International%20School%2C%20Parel!5e0!3m2!1sen!2sin!4v1687946558834!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="JBCN International School, Parel"
              className="grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-500"
            />
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
