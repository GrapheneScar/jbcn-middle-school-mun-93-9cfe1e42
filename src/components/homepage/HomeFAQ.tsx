
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const HomeFAQ = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);
  
  const faqs = [
    {
      question: "Who can participate in this conference?",
      answer: "The conference is open to all delegates who are studying in Grades 6, 7 or 8 as of the Academic Year 2024-2025."
    },
    {
      question: "Where will the conference be held?",
      answer: "The conference will be held on the 25th and 26th of April 2025 in JBCN International School Parel."
    },
    {
      question: "Which edition of the conference is this?",
      answer: "This is the fourth year our conference has been made available to external delegates, and the first time it will be accessible to middle school externals as well."
    },
    {
      question: "Why visit JBCN Middle School MUN 2025?",
      answer: "JBCN Middle School MUN 2025 is a space where senior leaders mentor young delegates, helping them build confidence, think critically, and develop essential debate skills. It serves as a very pertinent opportunity for learners to understand how MUN and real-life negotiations take place, while doubling as a fun and comprehensive introductory experience to the status quo MUN is all about."
    },
    {
      question: "What are the conference fees for the MUN?",
      answer: "The fee is Rs. 500 for JBCN associated delegates, and Rs. 1500 for external school delegates. It must be paid on the Google form itself through payment proof via receipt screenshot."
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
