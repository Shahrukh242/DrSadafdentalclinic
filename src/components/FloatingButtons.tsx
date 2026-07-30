"use client";

import { useState, useEffect } from "react";
import { MessageCircle, Phone, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
      
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/923171288862?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Dr.%20Sadaf%20Dental%20Care."
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-premium-lg hover:shadow-premium-xl transition-shadow cursor-pointer border border-[#20ba59]/20"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
      </motion.a>

      {/* Call Button (Mobile friendly) */}
      <motion.a
        href="tel:+923171288862"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-premium-lg hover:shadow-premium-xl transition-shadow cursor-pointer border border-primary-dark/20"
        title="Call Clinic"
        aria-label="Call Clinic"
      >
        <Phone className="w-5 h-5 fill-white" />
      </motion.a>

      {/* Back To Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 rounded-full bg-white border border-slate-200 text-text-dark flex items-center justify-center shadow-premium-lg hover:shadow-premium-xl hover:border-slate-300 transition-all cursor-pointer"
            title="Scroll to Top"
            aria-label="Scroll to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
