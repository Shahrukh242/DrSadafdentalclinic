"use client";

import { Award, Heart, Shield, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const highlights = [
  {
    icon: Award,
    title: "Experienced Dental Care",
    description: "Our dedicated professionals focus on standard-of-care treatments to ensure optimal health outcomes.",
  },
  {
    icon: Heart,
    title: "Friendly Environment",
    description: "Designed to feel clean, relaxing, and welcoming, minimizing dental anxiety for patients of all ages.",
  },
  {
    icon: Sparkles,
    title: "Modern Equipment",
    description: "Equipped with modern dental operatory systems, digital diagnostics, and modern amenities.",
  },
  {
    icon: Shield,
    title: "Patient-Centered Treatment",
    description: "Every treatment plan is tailored to your unique needs, comfort, and financial considerations.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 relative flex justify-center order-2 lg:order-1"
          >
            {/* Visual background frame */}
            <div className="absolute inset-0 border-2 border-primary-light/10 rounded-[2.5rem] transform -translate-x-4 translate-y-4 -z-10 pointer-events-none hidden sm:block" />
            
            <div className="relative w-full max-w-[450px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-premium-xl bg-slate-100">
              {/* Premium clinical environment photo placeholder */}
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop"
                alt="Modern premium dental operatory room at Dr. Sadaf Dental Care"
                fill
                className="object-cover object-center hover:scale-102 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 450px"
              />
              
              {/* Quick stats floating badge */}
              <div className="absolute top-6 right-6 bg-primary text-white p-5 rounded-2xl shadow-premium-lg border border-primary/20 text-center min-w-[120px]">
                <p className="font-heading font-extrabold text-2xl">100%</p>
                <p className="font-sans text-[10px] uppercase tracking-wider text-teal-100 font-semibold">Sterilized Tools</p>
              </div>
            </div>
          </motion.div>

          {/* Text Content Column */}
          <div className="lg:col-span-7 space-y-8 text-left order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <span className="text-primary font-semibold text-xs uppercase tracking-wider block">
                Welcome to Dr. Sadaf Dental Care
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-text-dark leading-tight">
                Premium Dental Care Designed for Your Family’s Comfort
              </h2>
              <p className="font-sans text-base text-text-light leading-relaxed">
                Located in the heart of North Karachi, Dr. Sadaf Dental Care is committed to delivering professional oral healthcare services. We treat patients with a combination of modern clinical standards, gentle technique, and transparent guidance.
              </p>
              <p className="font-sans text-base text-text-light leading-relaxed">
                Whether you need a routine check-up, root canal treatment, or a complete smile makeover, our team ensures your visit is smooth, comfortable, and anxiety-free.
              </p>
            </motion.div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex flex-col space-y-2 p-5 rounded-2xl bg-accent hover:bg-white border border-slate-100 hover:border-slate-200 transition-all duration-300 hover:shadow-premium-md group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white group-hover:bg-primary/10 flex items-center justify-center text-primary transition-all duration-300 shadow-premium-sm">
                      <IconComponent className="w-5 h-5 group-hover:scale-105 transition-transform" />
                    </div>
                    <h3 className="font-heading font-bold text-sm text-text-dark pt-1">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs text-text-light leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}
