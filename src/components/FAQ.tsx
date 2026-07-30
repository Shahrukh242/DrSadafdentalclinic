"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How often should I visit the dentist?",
    answer: "We recommend scheduling a routine check-up and professional teeth cleaning every six months. Regular dental visits allow us to identify early-stage cavities, gum disease, or other issues before they become painful or expensive to treat.",
  },
  {
    question: "Do you treat children?",
    answer: "Yes, we provide friendly and gentle pediatric dental care. We focus on preventive treatments like fluoride applications and sealants, along with positive reinforcement to build a fear-free relationship with dental health from a young age.",
  },
  {
    question: "Do you provide cosmetic dentistry?",
    answer: "Absolutely! We offer several cosmetic solutions to enhance your smile, including professional teeth whitening, cosmetic composite bonding, and durable, natural-looking porcelain crowns.",
  },
  {
    question: "Can I book an emergency appointment?",
    answer: "Yes, we do accommodate urgent emergency dental visits. If you are experiencing a severe toothache, a broken tooth, swelling, or trauma, please contact us immediately at +92 317 1288862 so we can fit you in as soon as possible.",
  },
  {
    question: "Do you accept walk-in patients?",
    answer: "While we highly recommend booking an appointment in advance to reduce your wait time, we do welcome walk-in patients. We will fit you into our schedule as quickly as possible based on dentist availability.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-24 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-semibold text-xs uppercase tracking-wider block">
            Frequently Asked Questions
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-text-dark">
            Common Questions About Dental Care
          </h2>
          <p className="font-sans text-base text-text-light max-w-2xl mx-auto">
            Get quick answers to common questions about appointments, treatments, and dental hygiene.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="border border-slate-100 rounded-2xl bg-accent overflow-hidden transition-colors duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none transition-colors duration-200"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-btn-${index}`}
                >
                  <span className="font-heading font-bold text-sm sm:text-base text-text-dark hover:text-primary transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-text-muted transition-transform duration-300 ${
                      isOpen ? "transform rotate-180 text-primary" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-slate-100/50">
                        <p className="font-sans text-xs sm:text-sm text-text-light leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
