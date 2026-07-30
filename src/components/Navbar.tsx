"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Why Choose Us", href: "#why-choose-us" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQs", href: "#faqs" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navHeight = 80; // approximate navbar height
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-premium-md border-b border-slate-100 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Clinic Name */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="flex items-center space-x-2 group"
          >
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-bold text-lg shadow-premium-sm group-hover:scale-105 transition-transform duration-300">
              S
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg leading-tight tracking-tight text-text-dark group-hover:text-primary transition-colors duration-300">
                Dr. Sadaf
              </span>
              <span className="font-sans text-xs tracking-wider text-primary font-semibold uppercase">
                Dental Care
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-sans text-sm font-medium text-text-light hover:text-primary transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Call to Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+923171288862"
              className="flex items-center text-sm font-semibold text-primary hover:text-primary-dark transition-colors duration-200"
            >
              <Phone className="w-4 h-4 mr-2" />
              +92 317 1288862
            </a>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="bg-primary hover:bg-primary-dark text-white font-sans text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 shadow-premium-sm hover:shadow-premium-md hover:-translate-y-0.5"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-dark hover:text-primary focus:outline-none p-1.5 rounded-lg hover:bg-slate-50 transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white border-b border-slate-100 shadow-premium-lg overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block px-3 py-2 rounded-xl text-base font-medium text-text-light hover:text-primary hover:bg-slate-50 transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-100 flex flex-col space-y-3 px-3">
                <a
                  href="tel:+923171288862"
                  className="flex items-center justify-center text-primary font-semibold py-2 hover:text-primary-dark"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  +92 317 1288862
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, "#contact")}
                  className="bg-primary hover:bg-primary-dark text-white text-center font-sans font-semibold py-3 rounded-xl transition-all duration-300 shadow-premium-sm"
                >
                  Book Appointment
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
