"use client";

import {
  Activity,
  Sparkles,
  Layers,
  CircleDot,
  Crown,
  Scissors,
  Anchor,
  Smile,
  Baby,
  Shield,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Activity,
    title: "General Dentistry",
    description: "Routine check-ups, comprehensive cleanings, and diagnostic digital X-rays to monitor and maintain your overall oral health.",
  },
  {
    icon: Sparkles,
    title: "Teeth Whitening",
    description: "Safe, professional, and fast teeth whitening treatments to effectively lift stains and brighten your smile by several shades.",
  },
  {
    icon: Layers,
    title: "Root Canal Treatment",
    description: "Gentle endodontic procedures designed to save deep-damaged or infected teeth, relieving pain and preventing extraction.",
  },
  {
    icon: CircleDot,
    title: "Dental Fillings",
    description: "Premium, tooth-colored composite restorations that repair cavities and restore structure while blending with your teeth.",
  },
  {
    icon: Crown,
    title: "Dental Crowns",
    description: "Custom-fitted, high-strength crowns (caps) designed to protect, reinforce, and completely restore heavily broken or treated teeth.",
  },
  {
    icon: Scissors,
    title: "Tooth Extraction",
    description: "Safe, sterile, and pain-free removal of severely decayed, fractured, or wisdom teeth to protect surrounding oral structures.",
  },
  {
    icon: Anchor,
    title: "Dental Implants",
    description: "Long-lasting, bio-compatible tooth replacement posts anchored in the jaw to restore full eating function and a natural appearance.",
  },
  {
    icon: Smile,
    title: "Cosmetic Dentistry",
    description: "Custom smile makeovers, including veneers, bonding, and contouring, to correct alignment and boost your daily confidence.",
  },
  {
    icon: Baby,
    title: "Children's Dentistry",
    description: "Specialized, gentle pediatric dental check-ups, cavity sealants, and positive reinforcement to build good lifetime habits.",
  },
  {
    icon: Shield,
    title: "Preventive Dental Care",
    description: "Proactive hygiene appointments, deep cleanings, fluoride treatments, and patient education to stop issues before they start.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
} as const;

export default function Services() {
  return (
    <section id="services" className="py-24 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Header block */}
        <div className="max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-primary font-semibold text-xs uppercase tracking-wider block">
            Our Services
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-text-dark">
            Comprehensive Dental Solutions for All Ages
          </h2>
          <p className="font-sans text-base text-text-light">
            We provide a wide array of high-quality dental treatments, from essential preventive checkups to complex restorative and cosmetic procedures, under one comfortable roof.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -6, boxShadow: "var(--shadow-premium-lg)" }}
                className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-primary-light/20 transition-all duration-300 text-left flex flex-col justify-between group shadow-premium-sm"
              >
                <div>
                  {/* Icon Wrapper */}
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 group-hover:bg-primary/10 flex items-center justify-center text-primary transition-all duration-300 mb-6 border border-slate-100 group-hover:border-transparent">
                    <Icon className="w-6 h-6 group-hover:scale-105 transition-transform duration-300" />
                  </div>

                  {/* Title & Desc */}
                  <h3 className="font-heading font-bold text-lg text-text-dark mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-sans text-xs text-text-light leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Call-to-action link inside card */}
                <a
                  href="#contact"
                  className="inline-flex items-center text-xs font-semibold text-primary group-hover:text-primary-dark transition-colors duration-200 mt-auto"
                >
                  Book Treatment
                  <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1 duration-300" />
                </a>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
