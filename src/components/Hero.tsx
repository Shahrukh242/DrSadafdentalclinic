"use client";

import { Phone, Calendar, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      const navHeight = 80;
      const targetPosition = contactSection.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center bg-gradient-to-b from-slate-50 via-white to-white overflow-hidden"
    >
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary-light/5 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[300px] h-[300px] rounded-full bg-primary/5 blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full text-primary font-semibold text-xs uppercase tracking-wider">
              <CheckCircle className="w-3.5 h-3.5 mr-1" />
              Trusted Family Dental Care
            </div>
            
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-dark leading-[1.15]">
              Your Trusted <br />
              <span className="text-primary relative inline-block">
                Dental Care Partner
                <span className="absolute bottom-2 left-0 w-full h-[6px] bg-primary-light/20 -z-10" />
              </span>{" "}
              in Karachi
            </h1>
            
            <p className="font-sans text-base sm:text-lg text-text-light max-w-xl leading-relaxed">
              Providing gentle, modern, and affordable dental care for individuals and families with a focus on comfort and healthy smiles.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={handleScrollToContact}
                className="bg-primary hover:bg-primary-dark text-white font-sans text-base font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-premium-md hover:shadow-premium-xl hover:-translate-y-0.5 flex items-center justify-center space-x-2"
              >
                <Calendar className="w-5 h-5 mr-1" />
                <span>Book Appointment</span>
              </button>
              
              <a
                href="tel:+923171288862"
                className="border-2 border-slate-200 hover:border-primary text-text-dark hover:text-primary font-sans text-base font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-slate-50 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5 mr-1" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Sub-note with phone number display */}
            <div className="flex items-center space-x-3 pt-4 border-t border-slate-100 max-w-md">
              <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-primary-light">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-text-muted font-medium">Quick Consultation & Booking</p>
                <p className="text-sm font-semibold text-text-dark font-sans">+92 317 1288862</p>
              </div>
            </div>
          </motion.div>

          {/* Large Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* Visual background frame */}
            <div className="absolute inset-0 border-2 border-primary/10 rounded-[2.5rem] transform translate-x-4 translate-y-4 -z-10 pointer-events-none hidden sm:block" />
            
            <div className="relative w-full max-w-[450px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-premium-xl bg-slate-100">
              {/* Smiling patient photo placeholder URL - High quality Unsplash */}
              <Image
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop"
                alt="Smiling patient in dental chair at Dr. Sadaf Dental Care Karachi"
                fill
                priority
                className="object-cover object-center hover:scale-102 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 450px"
              />
              
              {/* Small Overlay highlight card for CRO */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-premium-lg border border-white/40 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xs text-text-dark">100% Patient Focus</h3>
                  <p className="font-sans text-[11px] text-text-light">Gentle treatment and sterilized equipment.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
