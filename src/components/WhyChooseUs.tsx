"use client";

import { Smile, Cpu, Coins, Users, ShieldCheck, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  {
    icon: Smile,
    title: "Comfortable Care",
    description: "We prioritize your physical comfort. From gentle diagnostic approaches to warm patient care, we ensure your visit is anxiety-free.",
  },
  {
    icon: Cpu,
    title: "Modern Equipment",
    description: "Our clinic is equipped with modern tools and modern dental operatory systems to provide precise, fast, and painless treatments.",
  },
  {
    icon: Coins,
    title: "Affordable Treatments",
    description: "We believe premium oral healthcare should be accessible. We offer transparent pricing structures and competitive treatment rates.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Our team of clinical professionals is trained in the latest dental practices and is dedicated to continuous training and care.",
  },
  {
    icon: ShieldCheck,
    title: "Clean & Safe Clinic",
    description: "We implement strict hospital-grade sterilization protocols. Your safety, hygiene, and wellness are our highest priorities.",
  },
  {
    icon: MapPin,
    title: "Convenient Location",
    description: "Located on Zulfiqar Ave, Sector 11-B, North Karachi, our clinic is easily accessible with convenient ground-floor parking.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-primary font-semibold text-xs uppercase tracking-wider block">
            Why Choose Us
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-text-dark">
            Setting the Standard in Dental Excellence
          </h2>
          <p className="font-sans text-base text-text-light">
            We combine clinical skill, modern dental technology, and a warm, neighborhood clinic feel to deliver an exceptional patient experience.
          </p>
        </div>

        {/* Values Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="group flex flex-col p-8 rounded-3xl bg-accent hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-premium-lg transition-all duration-300 text-left"
              >
                {/* Icon Wrapper */}
                <div className="w-12 h-12 rounded-2xl bg-white group-hover:bg-primary/10 flex items-center justify-center text-primary transition-all duration-300 mb-6 shadow-premium-sm group-hover:shadow-none border border-slate-50 group-hover:border-transparent">
                  <Icon className="w-6 h-6 group-hover:scale-105 transition-transform duration-300" />
                </div>

                {/* Text Content */}
                <h3 className="font-heading font-bold text-lg text-text-dark mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-text-light leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
