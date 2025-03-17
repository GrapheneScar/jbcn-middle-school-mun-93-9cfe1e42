
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const HomeFAQ = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);
  
  const faqs = [
    {
      question: "What is a Model United Nations (MUN)?",
      answer: "MUN is an educational simulation where students can learn about diplomacy, international relations, and the United Nations. Participants role-play as delegates representing different countries in simulated UN committees."
    },
    {
      question: "Who can participate in JBCN Parel MUN?",
      answer: "JBCN Parel MUN is specifically designed for middle school students. We welcome participants from grades 6-8 who are interested in international affairs and eager to develop their public speaking and negotiation skills."
    },
    {
      question: "Do I need prior MUN experience to participate?",
      answer: "No prior experience is required! We welcome both new and experienced delegates. We provide comprehensive training and resources to help first-time delegates prepare for the conference."
    },
    {
      question: "How can I prepare for the conference?",
      answer: "Visit our Delegate Preparation page for study guides, position paper templates, and rules of procedure. We also encourage you to research your assigned country and committee topics thoroughly."
    },
    {
      question: "Will certificates be provided to participants?",
      answer: "Yes, all delegates will receive participation certificates. Outstanding delegates may also receive awards based on their performance during the conference."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white">
            <span className="inline-block px-3 py-1 text-sm bg-mun-purple rounded-full mb-3">Information</span>
            <br />
            Frequently Asked Questions
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mt-4">
            Find answers to common questions about JBCN Parel MUN
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-mun-purple/30"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-mun-purple-light transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeFAQ;
